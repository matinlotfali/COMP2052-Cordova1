# Linux Installation

Install Android Studio and make sure that a simple project can be built successfully. It would install the Android SDK and Gradle Automatically.

## Install Dependencies

For Fedora Distrobution

    sudo dnf install nodejs npm java-1.8.0-openjdk-devel

For Ubuntu Distrobution

    sudo apt install nodejs npm openjdk-8-jdk

## Install Cordova

    sudo npm install -g cordova

## Set Environment Variables

Edit the file `~/.bashrc` and append the following lines:

```bash
# Change these based on your directories
export ANDROID_HOME=~/app/android-sdk
export ANDROID_SDK_ROOT=~/app/android-sdk
export GRADLE_ROOT=~/.gradle/wrapper/dists/gradle-5.4.1-all/3221gyojl5jsh0helicew7rwx/gradle-5.4.1

# Don't change these (the order is important)
PATH=$PATH:$ANDROID_HOME/emulator
PATH=$PATH:$ANDROID_HOME/tools
PATH=$PATH:$ANDROID_HOME/tools/bin
PATH=$PATH:$ANDROID_HOME/platform-tools
PATH=$PATH:$GRADLE_ROOT/bin

# Only for Ubuntu Disrobution
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
```

You need to log out and log in again to make the variables effective.
