Demo: [here](https://youtu.be/f0sbU_pnHK8).

To run locally you'll need a bit of setup.

Install the lastest version of XCode.

Ensure you have the XCode Command Line Tools installed.

Install Node 12 =<
Install Homebrew
Install Watchman via Homebrew

Install an iOS simulator.

Install Cocoapods via Ruby gems

Now clone this repo, and install the node modules via npm.

Next, install the Native dependencies `$ cd ios && pod install` 

Return to the app root and running `$ npx react-native start`

That last command runs the JS bundler, Metro.

Next and hopefully last, open the project via XCode. In particular, open the xcworkspace file, not the xcodeproj file.

If that all worked, I am seriously impressed!

Here's a bunch of things I'd do if I had more time:

* the .env file - we wouldn't put a secret in the env file, but rather we'd create a proxy API service to keep secrets out of the app bundle.

* Modular styles and themes.

* Error handling/better user feedback.

* Better design standards

* Exception tracking/logging

* Set up release builds/CI

* Set up a data store for real persistence. 

* Tests

* Add more screens

* Fix the favorite feature so that there's less Async storage checking. That's a performance bottleneck. Ideally we'd load the user preferences, including favorites when the app boots up and perhaps persist that state in the app using a custom React hook.
