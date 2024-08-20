### repro

1. run `yarn install`
2. `npx expo prebuild --clean -p ios`
3. `xed ios`
4. observe that in xcode, expo-font is not included
5. go to `node_modules/expo-font/ios/ExpoFont.podspec` and change s.platforms.ios to 13
6. again run prebuild and open project - now expo-font is included!
