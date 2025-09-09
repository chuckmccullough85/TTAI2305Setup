# AI Course Setup Test Project

This is a comprehensive test project to verify your development environment is properly configured for the **TTAI2305 AI Programming Course**.

## 🎯 Purpose

This project validates that all required tools are installed and working correctly:

- ✅ **Node.js** and **npm** for JavaScript development
- ✅ **Git** for version control
- ✅ **VS Code** with essential extensions
- ✅ **GitHub Copilot** for AI-assisted coding

## 🚀 Quick Start

### 1. Clone or Download This Project

```bash
# If you have git configured
git clone <repository-url>
cd ai-course-setup-test

```

### 2. Install Dependencies

```bash
cd sample-project
npm install
```

### 3. Run All Tests

Execute each test to verify your setup:

#### Test Node.js Setup
```bash
cd sample-project
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

You should see a JSON response with setup information.


### Node.js Test Results
When you visit `http://localhost:3000`, you should see:

```json
{
  "message": "🎉 AI Course Setup Successful!",
  "timestamp": "2024-03-15T10:30:00.000Z",
  "system": {
    "platform": "win32",
    "arch": "x64",
    "node_version": "v20.11.0",
    "hostname": "your-computer"
  },
  "tools": {
    "express": "✅ Working",
    "filesystem": "✅ Working",
    "json_parsing": "✅ Working"
  },
  "next_steps": [
    "Test GitHub Copilot: try code completion in VS Code",
    "Test Git: run `git status`",
    "Explore VS Code extensions",
    "Review course materials"
  ]
}
```

## Optional: Dotnet Interactive
Some solutions include interactive notebooks using .NET Interactive. To set this up, follow these steps:

1. Install Visual Studio Code: Download and install the latest version of VS Code from the official website.
2. Install .NET SDK: Ensure you have the .NET SDK installed on your machine. You can download it from the official [.NET website](https://dotnet.microsoft.com/download).
3. Install the .NET Interactive Notebooks extension: In VS Code, go to the Extensions view (Ctrl+Shift+X) and search for ".NET Interactive Notebooks". Install the extension.   
4. Install Jupyter: You need to have Jupyter installed. You can install it via pip if you have Python installed: `pip install jupyter`.
5. Install .NET Interactive: You can install .NET Interactive by running the following command in your terminal: `dotnet tool install -g Microsoft.dotnet-interactive`.
6. Verify installation: Open a terminal and run `dotnet interactive --version` to ensure that .NET Interactive is installed correctly.
7. Restart VS Code: After installation, restart VS Code to ensure all extensions and tools are properly loaded.
8. Create or open a .ipynb file: You can now create a new Jupyter notebook file with a .ipynb extension or open an existing one to start using .NET Interactive notebooks in VS Code.
9. Select the kernel: In the notebook, select the .NET Interactive kernel from the kernel picker to start writing and executing .NET code.  
10. Start coding: You can now start writing .NET code in your notebook cells and execute them interactively.

## 🔧 Troubleshooting

### Common Issues

#### "Command not found" errors
- **Windows**: Restart PowerShell/Command Prompt after installation
- **macOS/Linux**: Check if tools are in your PATH
- **All platforms**: Try opening a new terminal window

#### Node.js permission errors
- **Windows**: Run as administrator or configure npm prefix
- **macOS/Linux**: Use nvm or configure npm global directory

#### Python command not working
- **Windows**: Try `py` instead of `python`
- **macOS/Linux**: Try `python3` instead of `python`

#### GitHub Copilot not working
1. Check if extension is installed and enabled
2. Sign in to GitHub account
3. Verify Copilot subscription is active
4. Try reloading VS Code window

### Getting Help

If you encounter issues:

1. **Check the main setup guide**: `setup/setup.md`
2. **Review tool-specific documentation**:
   - [Node.js Docs](https://nodejs.org/en/docs/)
   - [Python Docs](https://docs.python.org/3/)
   - [VS Code Docs](https://code.visualstudio.com/docs)
3. **Ask your instructor** during the course
4. **Use AI tools** like GitHub Copilot Chat for troubleshooting

## ✅ Success Criteria

Your setup is ready when:

## ✅ Success Criteria

Your setup is ready when:

- [ ] Node.js server starts and responds at localhost:3000
- [ ] GitHub Copilot provides code suggestions in VS Code
- [ ] Git commands work without errors
- [ ] All VS Code extensions are installed and active

## 🎓 Course Context

This verification project demonstrates the types of tasks you'll perform in the AI Programming course:

- **JavaScript/Node.js development** for web applications
- **Git version control** for collaborative development
- **AI-assisted coding** with GitHub Copilot and other tools
- **Automated workflows** and modern development practices

## 📚 What's Next?

Once your setup is verified:

1. **Explore GitHub Copilot**: Try code completion in different languages
2. **Practice AI prompting**: Use ChatGPT or Claude for coding questions
3. **Review Git basics**: Ensure you're comfortable with basic workflows
4. **Familiarize with VS Code**: Learn keyboard shortcuts and features

**You're now ready for the AI-enhanced development experience!** 🚀

## 📁 Project Structure

```
ai-course-setup-test/
├── README.md              # This file
├── package.json           # Node.js dependencies
├── app.js                 # Express server for testing
├── test-setup.js         # Automated verification script
└── .vscode/              # VS Code configuration
    ├── settings.json     # Editor settings
    └── extensions.json   # Recommended extensions
```

---

**Happy coding with AI! 🤖✨**
