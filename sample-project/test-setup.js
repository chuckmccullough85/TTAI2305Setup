/**
 * TTAI2305 AI Programming Course - Setup Verification Test
 * This script runs automated tests to verify the development environment
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🧪 Running automated setup verification tests...\n');

// Test utilities
function makeRequest(url, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const request = http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve({
                        statusCode: res.statusCode,
                        data: JSON.parse(data)
                    });
                } catch (e) {
                    resolve({
                        statusCode: res.statusCode,
                        data: data
                    });
                }
            });
        });
        
        request.on('error', reject);
        request.setTimeout(timeout, () => {
            request.destroy();
            reject(new Error('Request timeout'));
        });
    });
}

function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject({ error, stdout, stderr });
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

// Test functions
async function testNodeServer() {
    console.log('📡 Testing Node.js server...');
    
    try {
        // Start server in background
        const server = require('./app.js');
        
        // Wait a moment for server to start
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Test main endpoint
        const response = await makeRequest('http://localhost:3000/');
        
        if (response.statusCode === 200 && response.data.message) {
            console.log('✅ Node.js server: Working correctly');
            console.log(`   Message: ${response.data.message}`);
            return true;
        } else {
            console.log('❌ Node.js server: Unexpected response');
            return false;
        }
    } catch (error) {
        console.log('❌ Node.js server: Failed to start or respond');
        console.log(`   Error: ${error.message}`);
        return false;
    }
}

async function testGit() {
    console.log('\n📝 Testing Git...');
    
    try {
        const versionResult = await runCommand('git --version');
        
        if (versionResult.stdout.includes('git version')) {
            console.log('✅ Git: Installed and working');
            
            // Test git operations
            try {
                await runCommand('git status');
                console.log('✅ Git repository: Working correctly');
                return true;
            } catch (e) {
                console.log('⚠️  Git repository: Not initialized (run git init)');
                return true; // Git is installed, just no repo
            }
        } else {
            console.log('❌ Git: Installation check failed');
            return false;
        }
    } catch (error) {
        console.log('❌ Git: Not installed or not in PATH');
        return false;
    }
}

async function testFileSystem() {
    console.log('\n📁 Testing file system operations...');
    
    try {
        // Test file creation
        const testContent = `Test file created at ${new Date().toISOString()}`;
        fs.writeFileSync('fs-test.txt', testContent);
        
        // Test file reading
        const readContent = fs.readFileSync('fs-test.txt', 'utf8');
        
        if (readContent === testContent) {
            console.log('✅ File system: Read/write operations working');
            
            // Clean up
            fs.unlinkSync('fs-test.txt');
            return true;
        } else {
            console.log('❌ File system: Read/write verification failed');
            return false;
        }
    } catch (error) {
        console.log('❌ File system: Operations failed');
        console.log(`   Error: ${error.message}`);
        return false;
    }
}

// Main test runner
async function runAllTests() {
    console.log('🎓 TTAI2305 AI Programming Course - Automated Setup Verification');
    console.log('================================================================\n');
    
    const tests = [
        { name: 'File System', fn: testFileSystem },
        { name: 'Git', fn: testGit },
        { name: 'Node.js Server', fn: testNodeServer }
    ];
    
    const results = [];
    
    for (const test of tests) {
        try {
            const result = await test.fn();
            results.push({ name: test.name, success: result });
        } catch (error) {
            console.log(`❌ ${test.name}: Unexpected error - ${error.message}`);
            results.push({ name: test.name, success: false });
        }
    }
    
    // Summary
    console.log('\n📊 Test Results Summary');
    console.log('======================');
    
    const passed = results.filter(r => r.success).length;
    const total = results.length;
    
    results.forEach(result => {
        const status = result.success ? '✅' : '❌';
        console.log(`${status} ${result.name}`);
    });
    
    console.log(`\n🎯 Overall: ${passed}/${total} tests passed`);
    
    if (passed === total) {
        console.log('\n🎉 Congratulations! Your setup is ready for the AI Programming Course!');
        console.log('\nNext steps:');
        console.log('1. Open VS Code and verify GitHub Copilot is working');
        console.log('2. Test AI code completion in a JavaScript or Python file');
        console.log('3. Review the course materials');
        console.log('4. Join the first session - you\'re all set!');
    } else {
        console.log('\n⚠️  Some components need attention before the course begins.');
        console.log('Please review the setup guide and fix any failing components.');
        console.log('Contact your instructor if you need help with the setup.');
    }
    
    // Generate report
    const report = {
        timestamp: new Date().toISOString(),
        total_tests: total,
        passed_tests: passed,
        success_rate: `${Math.round((passed / total) * 100)}%`,
        ready_for_course: passed === total,
        results: results,
        recommendations: passed === total ? 
            ['Setup complete - ready for course!'] :
            ['Review setup guide', 'Fix failing components', 'Contact instructor if needed']
    };
    
    fs.writeFileSync('setup-verification-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: setup-verification-report.json');
    
    return passed === total;
}

// Run tests if this file is executed directly
if (require.main === module) {
    runAllTests()
        .then(success => {
            process.exit(success ? 0 : 1);
        })
        .catch(error => {
            console.error('\n💥 Test runner crashed:', error.message);
            process.exit(1);
        });
}

module.exports = {
    runAllTests,
    testNodeServer,
    testGit,
    testFileSystem
};
