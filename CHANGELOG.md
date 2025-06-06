# Change Log

All notable changes to the "codemos-modern" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.5] - 2025-04-27 - VS Code v1.99.x support 🟢

### Added

- Support for VS Code v1.99.x.

### Fixed

- Various syntax highlighting issues.

## [3.0.4] - 2025-02-28 - Python Improvements 🐍

### Added

- Support for VS Code v1.97.x.

### Fixed

- Various syntax highlighting issues.

## [3.0.3] - 2025-02-06 - VS Code v1.97.x support 🟢

### Added

- Support for VS Code v1.97.x.

### Fixed

- Various syntax highlighting issues.

## [3.0.2] - 2025-02-03 - More PHP improvements 🐘

### Fixed

- PHP syntax highlighting for various keywords and operators.

## [3.0.1] - 2025-02-01 - PHP improvements 🐘

### Updated

- Moved Codemos Modern from "Codemos-Inc" to "EmrecanKaracayir" organization.

### Fixed

- PHP syntax highlighting for various keywords and operators.
- Configure command Quick Pick list item duplication issue.

## [3.0.0] - 2024-12-10 - V3 Release Candidate 🚀

> **Note:** This is a release candidate, there may be bugs and disabled features. Please test and report any issues you encounter.

### Disabled

- Localizations other than English for now.

### Added

- Support for VS Code v1.95.x.
- New design, **"Natural"**. Users can now choose between **"Modern"**, **"Minimal"**, **"Flat"** and **"Natural"** designs.
- Code color customizations. Users can now customize the colors of their code.
- Ability to select another color as the adaptation color.

### Updated

- Some designs to be more consistent.

### Changed

- Adaptation mode to allow more customizations.

### Fixed

- CMake parentheses colors incorrectly highlighted.

## [2.8.3] - 2024-10-10 - Minor fixes 🛠️

### Changed

- Light variant colors to be more consistent.

### Fixed

- Terminal colors to emphasize foreground and bright white colors.
- CMake parentheses colors incorrectly highlighted.

## [2.8.2] - 2024-10-06 - Added CMake support 🟢

### Added

- Support for CMake syntax highlighting.

## [2.8.1] - 2024-10-05 - VS Code v1.94.x support 🟢

### Added

- Support for VS Code v1.94.x.
- Support for editorconfig syntax highlighting.
- Support for embedded languages' syntax highlighting.

## [2.8.0] - 2024-10-01 - Introducing Flat design 🎨

### Added

- Support for VS Code v1.93.x.
- New design, **"Flat"**. Users can now choose between **"Modern"**, **"Minimal"** and **"Flat"** designs.
- New localizations for Italian 🇮🇹 and Traditional Chinese 🇨🇳.

### Updated

- Underlining syntax/semantic highlighting to be more robust and future-proof.
  - It is now very easy to add or update new languages' syntax/semantic highlighting.

### Changed

- Some syntax/semantic highlighting colors to be more straightforward.

## [2.7.2] - 2024-07-19 - Light variant hotfix 🛠️

### Fixed

- Light variant fixes and improvements.

## [2.7.1] - 2024-07-19 - Light variant improvements 💡

### Changed

- Minimal design color scheme to be lighter.
- Light variant input box background color to be lighter.
- Editor inlay hint colors.
- Command center debugging background color.
- Light variant shadows to be more subtle.
- Preformat text colors from pink to red.

## [2.7.0] - 2024-07-19 - New localizations 🇫🇷, 🇰🇷, 🇩🇪

### Added

- Support for VS Code v1.91.x.
- Localization for French 🇫🇷, Korean 🇰🇷, and German 🇩🇪.
- Theming support for the [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) extension.
- Bundler (ESbuild) to reduce package size and improve startup performance.

### Changed

- How Modern makes requests for the GitHub sessions, now it will not repeat requests further if first one denied. Thanks to [@zliebersbach#177](https://github.com/EmrecanKaracayir/Codemos-Modern/issues/177).

### Updated

- Modern's behavior when the API rate limit gets exceeded, now it gracefully falls back to offline mode instead of refusing to work.
- Some inconsistent color attributes.

### Fixed

- Modern being unable to detect theme changes thus failing to update user settings due to new `window.autoDetectColorScheme` setting.

## [2.6.1] - 2024-05-08 - Authentication hotfix 🛠️

### Fixed

- GitHub authentication failing.

## [2.6.0] - 2024-05-08 - New localizations 🇷🇺, 🇵🇹 🇧🇷

### Added

- Localizations for Russian 🇷🇺, Portuguese (Brazil) 🇵🇹 🇧🇷.

### Fixed

- Registry lookup performance.

## [2.5.4] - 2024-05-02 - v1.89.x Support 🟢

### Added

- Support for VS Code v1.89.x.
- Missing color attributes.

## [2.5.3] - 2024-04-30 - v1.88.x Support 🟢

### Added

- Support for VS Code v1.88.x.

### Removed

- Unnecessary package contents.

## [2.5.2] - 2024-04-30 - v1.87.x Support 🟢

### Added

- Support for VS Code v1.87.x.
- Missing color attributes.

## [2.5.1] - 2024-02-07 - A minor fix 🛠️

### Fixed

- Accent colors with 0 saturation resulting with red adaptation.

## [2.5.0] - 2024-02-06 - New localizations 🇯🇵, 🇪🇸

### Added

- Support for VS Code v1.86.x.
- Localizations for Japanese 🇯🇵 and Spanish 🇪🇸.

### Changed

- Flyout stroke color from low contrast to high contrast.
- QuickPick icon strokes to be less intense.

## [2.4.0] - 2024-01-13 - Now localized 🇹🇷, 🇬🇧, 🇨🇳

### Added

- Localizations for Turkish 🇹🇷, English 🇬🇧 and Chinese (Simplified) 🇨🇳.

### Fixed

- Registry data fetched from default branch instead of latest release.

## [2.3.1] - 2024-01-06 - Minor fixes 🛠️

### Fixed

- Variables falsely italicized instead of underlined.

## [2.3.0] - 2024-01-06 - Configurable text decorations ⚙️

### Added

- Set of configurations to customize the text decorations on symbols. (Only bundled themes are effected)

### Updated

- Modern's logo.

## [2.2.0] - 2023-12-10 - Minor fixes 🛠️

### Fixed

- The first install experience.

## [2.1.9] - 2023-12-10 - Minor fixes 🛠️

### Updated

- First install experience.

## [2.1.8] - 2023-12-09 - Minor fixes 🛠️

### Fixed

- Ability to show the command `codemosModern.configure` for users that install Codemos Modern for the first time.

## [2.1.7] - 2023-12-09 - Minor fixes 🛠️

### Fixed

- Dart syntax highlighting for annotations.

## [2.1.6] - 2023-12-09 - Minor fixes 🛠️

### Fixed

- Ability to show the command `codemosModern.configure` for users that install Codemos Modern for the first time.
- Dropdown control backgrounds showing double layered. (See [issue](https://github.com/microsoft/vscode-copilot-release/issues/248))

## [2.1.5] - 2023-12-09 - Minor fixes & additions 🛠️

### Added

- VS Code v1.85.x support.
- Ability to show the command `codemosModern.configure` for users that install Codemos Modern for the first time.
- Theming support for the [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) extension.
- Theming support for the [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter) extension.

### Fixed

- Dart syntax highlighting for annotations.
- Input control backgrounds showing double layered. (See [issue](https://github.com/microsoft/vscode-copilot-release/issues/248))

### Removed

- Obsolete color attributes.

## [2.1.4] - 2023-09-03 - Accessibility improvements 🌟

### Fixed

- Accessibility issues found in lists & trees when using both the mouse and the keyboard for selecting.
- Terminal colors introduced in the last release.

### Updated

- Some descriptions in Modern's configurations that are found in user's `settings.json` file.
- `codemosModern.authenticate` command notification message to include Modern's notification signature.
- Modern's notification message when it is updated. Now it only promotes the new release when updated from another older major version.
- Modern's notification messages to be more joyful.

## [2.1.3] - 2023-09-02 - Minor fixes 🛠️

### Fixed

- Extension filtering algorithm to take publisher into account.

## [2.1.2] - 2023-09-01 - Minor fixes 🛠️

### Fixed

- Stability of installing and updating repositories.

## [2.1.1] - 2023-08-26 - Minor fixes & changes 🛠️

### Fixed

- `moderate` selection in settings.json prompting an error even though it is a valid value.
- `codemosModern.configure` command icon visual inconsistencies.

### Changed

- Terminal colors to make them more consistent with their surrounding colors.

## [2.1.0] - 2023-08-25 - Offline availability and color presets 📡

### Added

- Offline availability. Modern will now operate when the users are offline, allowing them to pick amongst installed auxiliary themes.
- Color presets. Users can now choose an accent color from Modern's excellent palette.

### Changed

- Visualization of auxiliary themes and extensions in command `codemosModern.configure`, indicating which of them are installed.

## [2.0.1] - 2023-08-17 - Scoping hotfix 🛠️

### Fixed

- Wrong scoping of theme change resulting all sorts of headaches.

## [2.0.0] - 2023-08-09 - Modularity & minimalism 📦

### Added

- VS Code v1.81.x support.
- Modularity system. Users can now side-load **third party themes**.
- Brand new design, **"Minimal"**. Users can now choose between **"Modern"** and **"Minimal"** designs.
- Command `codemosModern.authenticate` to increase GitHub **api rate limits**.

### Fixed

- Material Icon Theme icons not correctly themed.
- Multiple update requests to recompile themes.

### Changed

- Command `codemosModern.configure` to be more clear an use the new `QuickPickItem` api for custom icons.

## [1.2.2] - 2023-07-09 - Minor fixes 🛠️

### Fixed

- Material Icon Theme configurations not applied correctly.

## [1.2.1] - 2023-07-09 - Minor fixes 🛠️

### Added

- Automatic theme change after the command `Codemos Modern: Configure` is executed.

### Fixed

- Codemos Modern not able to detect profile changes.
- Material Icon Theme configurations not applied correctly.

### Changed

- Event prompt messages.
- Internal state handling algorithm.

## [1.2.0] - 2023-07-07 - Configurations to settings ⚙️

### Added

- VS Code v1.80.x support.
- Theming support for the [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) extension.
- Ability to sync Modern's configurations via VS Code settings.
- Instant validation for accent color input in the command `Codemos Modern: Configure`.

### Fixed

- Unable to recover theme configurations after updating Modern.
- Inline chat double layered input bug via a hack. (Copilot [issue](https://github.com/microsoft/vscode-copilot-release/issues/248))

### Changed

- Configuration save location from `globalStorage` to settings. This allows Modern to sync configurations across accounts and profiles.
- `Codemos Modern: Create Theme` command to `Codemos Modern: Configure`. Although you can configure Modern through settings, it is recommended to use the command for a better experience.
- Extension icon.

### Removed

- Requirement of providing an accent color with an accessible contrast ratio. Modern will now cleverly handle accent color to keep itself accessible.
- Obsolete `interactiveEditor.*` color attributes.

## [1.1.2] - 2023-06-28 - Now on Open VSX Registry 💠

### Added

- Modern to Open VSX Registry.

### Fixed

- Keybinding views' bottom border.

### Changed

- Extension icon.
- README.md resources.

## [1.1.0] - 2023-06-25 - Saved configurations 💾

### Added

- Ability to remember user theme configurations. After the version [1.1.0], user configurations will survive throughout updates.
- Theming support for the early [Diff Editor V2](https://github.com/microsoft/vscode/issues/184164) module.
- Theming support for the [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) extension.
- Theming support for the [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) extension.
- Theming support for the [Remote Repositories](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-repositories) extension.

### Fixed

- Inability to determine focused elements throughout the UI caused by `contrastBorder` and `contrastActiveBorder` theme attributes.
- UI shift caused by `window.activeBorder` and `window.inactiveBorder` theme attributes.

### Changed

- Terminal colors to be more inline with other upcoming Codemos Modern releases.
- Theme created notification to feature a dismissive option for users that don't want to reload the VS Code window now.

## [1.0.4] - 2023-06-11 - Fixed links in README.md 🧿

### Fixed

- Anchor links in `README.md`.

## [1.0.3] - 2023-06-11 - Release of documentation 📄

### Added

- `README.md` file with detailed showcase and documentation.
- New images for the `README.md` file.
- New TextMate scopes for **magic functions** and **this, self keywords**.

### Fixed

- The opacity value of the color attribute `editorUnnecessaryCode.opacity` to make it less intense.

### Changed

- Extension icon to be more inline with our design language. (It is now a gif)

### Removed

- Old extension icon.
- Unused opacity attribute in `light.ts`.

## [1.0.2] - 2023-06-09 - Themes are easier to apply 👍🏼

### Added

- An option to reload the editor window after creating a theme.
- Template theme for making an easier development experience.

### Fixed

- Editor theme not updating when created from the command `codemos.createTheme`.
- Wrong color attribute name `debugTokenExpression.pri` to `debugTokenExpression.value`.

### Changed

- Icon for the extension.
- Namespace, module and package syntax highlighting to fit surrounding colors.
- Inactive bracket guide color to fit surrounding colors.

## [1.0.1] - 2023-06-09 - Critical bug resolved 🪲

### Fixed

- Scoping conflict resulting with not being able to apply user's theme.
- `editorHoverWidget.highlightForeground` color attribute for better readability.

### Changed

- Marketplace description for a shorter one.
- Variable naming to apply eslint standards.

## [1.0.0] - 2023-06-09 - Initial release 🎉

- Initial release

[3.0.5]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v3.0.4...v3.0.5
[3.0.4]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v3.0.3...v3.0.4
[3.0.3]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v3.0.2...v3.0.3
[3.0.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.8.3...v3.0.0
[2.8.3]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.8.2...v2.8.3
[2.8.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.8.1...v2.8.2
[2.8.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.8.0...v2.8.1
[2.8.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.7.2...v2.8.0
[2.7.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.7.1...v2.7.2
[2.7.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.7.0...v2.7.1
[2.7.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.6.1...v2.7.0
[2.6.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.6.0...v2.6.1
[2.6.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.5.4...v2.6.0
[2.5.4]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.5.3...v2.5.4
[2.5.3]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.5.2...v2.5.3
[2.5.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.5.1...v2.5.2
[2.5.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.5.0...v2.5.1
[2.5.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.3.1...v2.4.0
[2.3.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.9...v2.2.0
[2.1.9]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.8...v2.1.9
[2.1.8]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.7...v2.1.8
[2.1.7]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.6...v2.1.7
[2.1.6]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.5...v2.1.6
[2.1.5]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.4...v2.1.5
[2.1.4]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.2.2...v2.0.0
[1.2.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.1.0...v1.1.2
[1.1.0]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.0.4...v1.1.0
[1.0.4]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/EmrecanKaracayir/codemos-modern/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/EmrecanKaracayir/codemos-modern/releases/tag/v1.0.0
