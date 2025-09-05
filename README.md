# TTAI2305 AI Programming Course - Development Environment Setup

## Overview

Welcome to the **Generative AI for Developers** course! This guide will help you set up your development environment with all the tools needed for the 3-day intensive course.

## Required Tools Summary

| Tool | Purpose | Required |
|------|---------|----------|
| **VS Code** | Primary IDE | ✅ |
| **Git** | Version control | ✅ |
| **Node.js** | JavaScript runtime | ✅ |
| **GitHub Copilot** | AI coding assistant | ✅ |

## Quick Setup Checklist

- [ ] Install VS Code
- [ ] Install Git and configure
- [ ] Install Node.js (LTS version)
- [ ] Set up GitHub Copilot
- [ ] Install additional VS Code extensions
- [ ] Verify setup with sample project
- [ ] Configure AI tool access

---

## Operating System Specific Instructions

### 🪟 Windows Setup

#### 1. Visual Studio Code
**Download**: [https://code.visualstudio.com/](https://code.visualstudio.com/)

1. Download the Windows installer (`.exe` file)
2. Run the installer with administrator privileges
3. **Important**: Check "Add to PATH" during installation
4. Check "Create a desktop icon" if desired
5. Complete the installation and launch VS Code

**Verification**:
```powershell
code --version
```

#### 2. Git for Windows
**Download**: [https://git-scm.com/download/win](https://git-scm.com/download/win)

1. Download Git for Windows
2. Run the installer
3. **Important settings during installation**:
   - Use VS Code as Git's default editor
   - Use Git from the command line and also from 3rd-party software
   - Use the OpenSSL library
   - Checkout Windows-style, commit Unix-style line endings
   - Use Windows' default console window

**Configuration**:
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Verification**:
```powershell
git --version
```

#### 3. Node.js (LTS Version)
**Download**: [https://nodejs.org/](https://nodejs.org/)

1. Download the LTS version (currently 20.x)
2. Run the installer (`.msi` file)
3. Accept default settings
4. Restart your terminal/PowerShell

**Verification**:
```powershell
node --version
npm --version
```

---

### 🍎 macOS Setup

#### 1. Visual Studio Code
**Download**: [https://code.visualstudio.com/](https://code.visualstudio.com/)

1. Download the macOS version (`.zip` file)
2. Extract and drag to Applications folder
3. Open VS Code and install shell command when prompted
4. Or manually install shell command: `Cmd+Shift+P` → "Shell Command: Install 'code' command in PATH"

**Verification**:
```bash
code --version
```

#### 2. Git
**Option A: Using Homebrew** (Recommended)
```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Git
brew install git
```

**Option B: Xcode Command Line Tools**
```bash
xcode-select --install
```

**Configuration**:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Verification**:
```bash
git --version
```

#### 3. Node.js
**Option A: Using Homebrew** (Recommended)
```bash
brew install node
```

**Option B: Direct Download**
1. Download from [https://nodejs.org/](https://nodejs.org/)
2. Run the `.pkg` installer
3. Follow installation prompts

**Verification**:
```bash
node --version
npm --version
```

---

### 🐧 Linux Setup (Ubuntu/Debian)

#### 1. Visual Studio Code
**Option A: Using Snap** (Recommended)
```bash
sudo snap install code --classic
```

**Option B: Using APT**
```bash
# Add Microsoft GPG key and repository
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'

# Update and install
sudo apt update
sudo apt install code
```

**Verification**:
```bash
code --version
```

#### 2. Git
```bash
sudo apt update
sudo apt install git
```

**Configuration**:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Verification**:
```bash
git --version
```

#### 3. Node.js
**Using NodeSource Repository** (Recommended)
```bash
# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verification**:
```bash
node --version
npm --version
```

---

## Essential VS Code Extensions

### Required Extensions

Install these extensions in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`):

#### 1. GitHub Copilot
- **Extension ID**: `GitHub.copilot`
- **Purpose**: AI-powered code completion and suggestions
- **Setup**: Sign in with GitHub account (subscription required)

#### 2. GitHub Copilot Chat
- **Extension ID**: `GitHub.copilot-chat`
- **Purpose**: AI chat interface for coding assistance
- **Setup**: Automatically available with Copilot subscription

#### 3. ESLint
- **Extension ID**: `dbaeumer.vscode-eslint`
- **Purpose**: JavaScript/TypeScript linting

#### 4. Prettier
- **Extension ID**: `esbenp.prettier-vscode`
- **Purpose**: Code formatting

### Recommended Extensions

#### 5. GitLens
- **Extension ID**: `eamodio.gitlens`
- **Purpose**: Enhanced Git capabilities in VS Code

#### 6. REST Client
- **Extension ID**: `humao.rest-client`
- **Purpose**: API testing within VS Code

#### 7. Thunder Client
- **Extension ID**: `rangav.vscode-thunder-client`
- **Purpose**: Alternative API testing tool

#### 8. Markdown All in One
- **Extension ID**: `yzhang.markdown-all-in-one`
- **Purpose**: Enhanced markdown support

#### 9. Live Server
- **Extension ID**: `ritwickdey.liveserver`
- **Purpose**: Local development server

---

## AI Tool Access Setup

### GitHub Copilot Setup

1. **Sign up for GitHub Copilot**:
   - Visit [https://github.com/features/copilot](https://github.com/features/copilot)
   - Start free trial or subscribe
   - Students may qualify for free access

2. **Activate in VS Code**:
   - Install GitHub Copilot extension
   - Sign in when prompted
   - Authorize VS Code access

3. **Verify Setup**:
   - Create a new JavaScript file
   - Type `function fibonacci(` and wait for suggestions
   - You should see AI-generated completions

### Additional AI Tools (Optional)

#### OpenAI ChatGPT/GPT-4
- **Access**: [https://chat.openai.com/](https://chat.openai.com/)
- **Purpose**: General AI assistance and complex problem solving
- **Cost**: Free tier available, Plus subscription recommended

#### Anthropic Claude
- **Access**: [https://claude.ai/](https://claude.ai/)
- **Purpose**: AI assistance with strong reasoning capabilities
- **Cost**: Free tier available

#### Google Gemini
- **Access**: [https://gemini.google.com/](https://gemini.google.com/)
- **Purpose**: Google's AI assistant
- **Cost**: Free tier available

---

## Sample Project Verification
See [sample-project/README.md](./sample-project/README.md) for instructions on cloning and running the sample project to verify your setup.
---

## Troubleshooting Common Issues

### Windows-Specific Issues

#### PowerShell Execution Policy
If you get execution policy errors:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### PATH Issues
If commands aren't recognized:
1. Restart terminal/PowerShell
2. Check Environment Variables in System Properties
3. Ensure these are in PATH:
   - `C:\Program Files\nodejs\`
   - `C:\Program Files\Git\bin`

#### Node.js Permission Issues
Run as administrator or use:
```powershell
npm config set prefix '%APPDATA%\npm'
```

### macOS-Specific Issues

#### Homebrew Installation
If Homebrew isn't working:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### VS Code Command Line
If `code` command doesn't work:
- Open VS Code
- Press `Cmd+Shift+P`
- Type "Shell Command: Install 'code' command in PATH"

### Linux-Specific Issues

#### Node.js Permission Issues
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### General Issues

#### VS Code Extensions Not Working
1. Reload window: `Ctrl+Shift+P` → "Developer: Reload Window"
2. Check extension is enabled
3. Restart VS Code
4. Check VS Code version (should be latest)

#### GitHub Copilot Not Suggesting
1. Check Copilot status in VS Code status bar
2. Sign out and sign back in
3. Check subscription status
4. Verify in a supported language file (.js, .ts, .md, etc.)

#### Git Authentication Issues
Set up SSH keys or personal access tokens:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

---

## Course-Specific Configuration

### VS Code Settings

Create `.vscode/settings.json` in your workspace:

```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "python.defaultInterpreterPath": "python3",
    "typescript.preferences.quoteStyle": "single",
    "javascript.preferences.quoteStyle": "single",
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false
    }
}
```

### Git Configuration for Course

```bash
# Set up useful Git aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'

# Set up helpful defaults
git config --global init.defaultBranch main
git config --global pull.rebase false
```

---

## Getting Help

### During Setup
- **GitHub Copilot Issues**: [https://github.com/features/copilot/support](https://github.com/features/copilot/support)
- **VS Code Issues**: [https://code.visualstudio.com/docs/supporting/faq](https://code.visualstudio.com/docs/supporting/faq)
- **Node.js Issues**: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)

### During Course
- Ask your instructor
- Use GitHub Copilot Chat in VS Code
- Check course documentation
- Collaborate with fellow students

---

## Success Criteria

✅ **You're ready for the course when**:
- VS Code opens and all extensions work
- You can run Node.js scripts
- GitHub Copilot provides code suggestions
- Sample project runs without errors

## What's Next?

Once your setup is complete:

1. **Familiarize yourself with VS Code**: Take the built-in tutorial
2. **Try GitHub Copilot**: Practice with small coding exercises
3. **Review Git basics**: Ensure you're comfortable with basic commands
4. **Explore AI tools**: Try ChatGPT, Claude, or Gemini for coding questions

**Welcome to the AI-enhanced development experience!** 🚀

The course will teach you how to leverage these tools to become a more productive and effective developer. See you in class!
