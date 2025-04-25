export interface Telegram {
  WebApp: WebApp;
}

/**
 *
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
export interface WebApp {
  /**
   * A string with raw data transferred to the Mini App, convenient for [validating data](#validating-data-received-via-the-mini-app).
   * **WARNING:** [Validate data](#validating-data-received-via-the-mini-app) from this field before using it on the bot's server.
   *
   * @type {string}
   * @readonly
   */
  readonly initData: string;

  /**
   * An object with input data transferred to the Mini App.
   * **WARNING:** Data from this field should not be trusted. You should only use data from _initData_ on the bot's server and only after it has been [validated](#validating-data-received-via-the-mini-app).
   *
   * @type {WebAppInitData}
   * @readonly
   */
  readonly initDataUnsafe: WebAppInitData;

  /**
   * The version of the Bot API available in the user's Telegram app.
   *
   * @type {string}
   * @readonly
   */
  readonly version: string;

  /**
   * The name of the platform of the user's Telegram app.
   *
   * @type {string}
   * @readonly
   */
  readonly platform: string;

  /**
   * The color scheme currently used in the Telegram app. Either “light” or “dark”.
   * Also available as the CSS variable `var(--tg-color-scheme)`.
   *
   * @type {string}
   * @readonly
   */
  readonly colorScheme: string;

  /**
   * An object containing the current theme settings used in the Telegram app.
   *
   * @type {ThemeParams}
   * @readonly
   */
  readonly themeParams: ThemeParams;

  /**
   * `Bot API 8.0+` _True_, if the Mini App is currently active. _False_, if the Mini App is minimized.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isActive: boolean;

  /**
   * _True_, if the Mini App is expanded to the maximum available height. False, if the Mini App occupies part of the screen and can be expanded to the full height using the **expand()** method.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isExpanded: boolean;

  /**
   * The current height of the visible area of the Mini App. Also available in CSS as the variable `var(--tg-viewport-height)`.
   *
   * The application can display just the top part of the Mini App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Mini App to its maximum height, while the bot can do the same by calling the **expand()** method. As the position of the Mini App changes, the current height value of the visible area will be updated in real time.
   *
   * Please note that the refresh rate of this value is not sufficient to smoothly follow the lower border of the window. It should not be used to pin interface elements to the bottom of the visible area. It's more appropriate to use the value of the `viewportStableHeight` field for this purpose.
   *
   * @type {number}
   * @readonly
   */
  readonly viewportHeight: number;

  /**
   * The height of the visible area of the Mini App in its last stable state. Also available in CSS as a variable `var(--tg-viewport-stable-height)`.
   *
   * The application can display just the top part of the Mini App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Mini App to its maximum height, while the bot can do the same by calling the **expand()** method. Unlike the value of `viewportHeight`, the value of `viewportStableHeight` does not change as the position of the Mini App changes with user gestures or during animations. The value of `viewportStableHeight` will be updated after all gestures and animations are completed and the Mini App reaches its final size.
   *
   * _Note the [event](#events-available-for-mini-apps) `viewportChanged` with the passed parameter `isStateStable=true`, which will allow you to track when the stable state of the height of the visible area changes._
   *
   * @type {number}
   * @readonly
   */
  readonly viewportStableHeight: number;

  /**
   * Current header color in the `#RRGGBB` format.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly headerColor: `#${string}`;

  /**
   * Current background color in the `#RRGGBB` format.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly backgroundColor: `#${string}`;

  /**
   * Current bottom bar color in the `#RRGGBB` format.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly bottomBarColor: `#${string}`;

  /**
   * _True_, if the confirmation dialog is enabled while the user is trying to close the Mini App. _False_, if the confirmation dialog is disabled.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isClosingConfirmationEnabled: boolean;

  /**
   * _True_, if vertical swipes to close or minimize the Mini App are enabled. _False_, if vertical swipes to close or minimize the Mini App are disabled. In any case, the user will still be able to minimize and close the Mini App by swiping the Mini App's header.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isVerticalSwipesEnabled: boolean;

  /**
   * _True_, if the Mini App is currently being displayed in fullscreen mode.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isFullscreen: boolean;

  /**
   * _True_, if the Mini App’s orientation is currently locked. _False_, if orientation changes freely based on the device’s rotation.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isOrientationLocked: boolean;

  /**
   * An object representing the device's safe area insets, accounting for system UI elements like notches or navigation bars.
   *
   * @type {SafeAreaInset}
   * @readonly
   */
  readonly safeAreaInset: SafeAreaInset;

  /**
   * An object representing the safe area for displaying content within the app, free from overlapping Telegram UI elements.
   *
   * @type {ContentSafeAreaInset}
   * @readonly
   */
  readonly contentSafeAreaInset: ContentSafeAreaInset;

  /**
   * An object for controlling the back button which can be displayed in the header of the Mini App in the Telegram interface.
   *
   * @type {BackButton}
   * @readonly
   */
  readonly BackButton: BackButton;

  /**
   * An object for controlling the main button, which is displayed at the bottom of the Mini App in the Telegram interface.
   *
   * @type {BottomButton}
   * @readonly
   */
  readonly MainButton: BottomButton;

  /**
   * An object for controlling the secondary button, which is displayed at the bottom of the Mini App in the Telegram interface.
   *
   * @type {BottomButton}
   * @readonly
   */
  readonly SecondaryButton: BottomButton;

  /**
   * An object for controlling the Settings item in the context menu of the Mini App in the Telegram interface.
   *
   * @type {SettingsButton}
   * @readonly
   */
  readonly SettingsButton: SettingsButton;

  /**
   * An object for controlling haptic feedback.
   *
   * @type {HapticFeedback}
   * @readonly
   */
  readonly HapticFeedback: HapticFeedback;

  /**
   * An object for controlling cloud storage.
   *
   * @type {CloudStorage}
   * @readonly
   */
  readonly CloudStorage: CloudStorage;

  /**
   * An object for controlling biometrics on the device.
   *
   * @type {BiometricManager}
   * @readonly
   */
  readonly BiometricManager: BiometricManager;

  /**
   * An object for accessing accelerometer data on the device.
   *
   * @type {Accelerometer}
   * @readonly
   */
  readonly Accelerometer: Accelerometer;

  /**
   * An object for accessing device orientation data on the device.
   *
   * @type {DeviceOrientation}
   * @readonly
   */
  readonly DeviceOrientation: DeviceOrientation;

  /**
   * An object for accessing gyroscope data on the device.
   *
   * @type {Gyroscope}
   * @readonly
   */
  readonly Gyroscope: Gyroscope;

  /**
   * An object for controlling location on the device.
   *
   * @type {LocationManager}
   * @readonly
   */
  readonly LocationManager: LocationManager;

  /**
   * An object for storing and retrieving data from the device's local storage.
   *
   * @type {DeviceStorage}
   * @readonly
   */
  readonly DeviceStorage: DeviceStorage;

  /**
   * An object for storing and retrieving data from the device's secure storage.
   *
   * @type {SecureStorage}
   * @readonly
   */
  readonly SecureStorage: SecureStorage;

  /**
   * Returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.
   */
  isVersionAtLeast(version: string): boolean;

  /**
   * `Bot API 6.1+` A method that sets the app header color in the `#RRGGBB` format. You can also use keywords _bg\_color_ and _secondary\_bg\_color_.
   *
   * Up to `Bot API 6.9` You can only pass _Telegram.WebApp.themeParams.bg\_color_ or _Telegram.WebApp.themeParams.secondary\_bg\_color_ as a color or _bg\_color_, _secondary\_bg\_color_ keywords.
   */
  setHeaderColor(color: `#${string}` | 'bg_color' | 'secondary_bg_color'): void;

  /**
   * `Bot API 6.1+` A method that sets the app background color in the `#RRGGBB` format. You can also use keywords _bg\_color_ and _secondary\_bg\_color_.
   */
  setBackgroundColor(
    color: `#${string}` | 'bg_color' | 'secondary_bg_color',
  ): void;

  /**
   * `Bot API 7.10+` A method that sets the app's bottom bar color in the `#RRGGBB` format. You can also use the keywords _bg\_color_, _secondary\_bg\_color_, and _bottom\_bar\_bg\_color_. This color is also applied to the navigation bar on Android.
   */
  setBottomBarColor(
    color:
      | `#${string}`
      | 'bg_color'
      | 'secondary_bg_color'
      | 'bottom_bar_bg_color',
  ): void;

  /**
   * `Bot API 6.2+` A method that enables a confirmation dialog while the user is trying to close the Mini App.
   */
  enableClosingConfirmation(): void;

  /**
   * `Bot API 6.2+` A method that disables the confirmation dialog while the user is trying to close the Mini App.
   */
  disableClosingConfirmation(): void;

  /**
   * `Bot API 7.7+` A method that enables vertical swipes to close or minimize the Mini App. For user convenience, it is recommended to always enable swipes unless they conflict with the Mini App's own gestures.
   */
  enableVerticalSwipes(): void;

  /**
   * `Bot API 7.7+` A method that disables vertical swipes to close or minimize the Mini App. This method is useful if your Mini App uses swipe gestures that may conflict with the gestures for minimizing and closing the app.
   */
  disableVerticalSwipes(): void;

  /**
   * `Bot API 8.0+` A method that requests opening the Mini App in fullscreen mode. Although the header is transparent in fullscreen mode, it is recommended that the Mini App sets the header color using the _setHeaderColor_ method. This color helps determine a contrasting color for the status bar and other UI controls.
   */
  requestFullscreen(): void;

  /**
   * `Bot API 8.0+` A method that requests exiting fullscreen mode.
   */
  exitFullscreen(): void;

  /**
   * `Bot API 8.0+` A method that locks the Mini App’s orientation to its current mode (either portrait or landscape). Once locked, the orientation remains fixed, regardless of device rotation. This is useful if a stable orientation is needed during specific interactions.
   */
  lockOrientation(): void;

  /**
   * `Bot API 8.0+` A method that unlocks the Mini App’s orientation, allowing it to follow the device's rotation freely. Use this to restore automatic orientation adjustments based on the device orientation.
   */
  unlockOrientation(): void;

  /**
   * `Bot API 8.0+` A method that prompts the user to add the Mini App to the home screen. After successfully adding the icon, the `homeScreenAdded` event will be triggered if supported by the device. Note that if the device cannot determine the installation status, the event may not be received even if the icon has been added.
   */
  addToHomeScreen(): void;

  /**
   * `Bot API 8.0+` A method that checks if adding to the home screen is supported and if the Mini App has already been added. If an optional _callback_ parameter is provided, the _callback_ function will be called with a single argument _status_, which is a string indicating the home screen status. Possible values for _status_ are:
   * \- **unsupported** – the feature is not supported, and it is not possible to add the icon to the home screen,
   * \- **unknown** – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
   * \- **added** – the icon has already been added to the home screen,
   * \- **missed** – the icon has not been added to the home screen.
   */
  checkHomeScreenStatus(
    callback?: (status: 'unsupported' | 'unknown' | 'added' | 'missed') => void,
  ): void;

  /**
   * A method that sets the app event handler. Check [the list of available events](#events-available-for-mini-apps).
   */
  onEvent<T extends keyof EventCallbacks>(
    eventType: T,
    eventHandler: EventCallbacks[T],
  ): void;

  /**
   * A method that deletes a previously set event handler.
   */
  offEvent<T extends keyof EventCallbacks>(
    eventType: T,
    eventHandler: EventCallbacks[T],
  ): void;

  /**
   * A method used to send data to the bot. When this method is called, a service message is sent to the bot containing the data _data_ of the length up to 4096 bytes, and the Mini App is closed. See the field _web\_app\_data_ in the class [Message](/bots/api#message).
   *
   * _This method is only available for Mini Apps launched via a [Keyboard button](#keyboard-button-mini-apps)._
   */
  sendData(data: ArrayBuffer): void;

  /**
   * `Bot API 6.7+` A method that inserts the bot's username and the specified inline _query_ in the current chat's input field. Query may be empty, in which case only the bot's username will be inserted. If an optional _choose\_chat\_types_ parameter was passed, the client prompts the user to choose a specific chat, then opens that chat and inserts the bot's username and the specified inline query in the input field. You can specify which types of chats the user will be able to choose from. It can be one or more of the following types: _users_, _bots_, _groups_, _channels_.
   */
  switchInlineQuery(
    query: string,
    choose_chat_types?: 'users' | 'bots' | 'groups' | 'channels',
  ): void;

  /**
   * A method that opens a link in an external browser. The Mini App will _not_ be closed.
   * `Bot API 6.4+` If the optional _options_ parameter is passed with the field _try\_instant\_view=true_, the link will be opened in [Instant View](https://instantview.telegram.org/) mode if possible.
   *
   * _Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)_
   */
  openLink(url: string, options?: { try_instant_view: boolean }): void;

  /**
   * A method that opens a telegram link inside the Telegram app. The Mini App will _not_ be closed after this method is called.
   *
   * Up to `Bot API 7.0` The Mini App _will_ be closed after this method is called.
   */
  openTelegramLink(url: string): void;

  /**
   * `Bot API 6.1+` A method that opens an invoice using the link _url_. The Mini App will receive the [event](#events-available-for-mini-apps) _invoiceClosed_ when the invoice is closed. If an optional _callback_ parameter was passed, the _callback_ function will be called and the invoice status will be passed as the first argument.
   */
  openInvoice(url: string, callback?: (status: string) => void): void;

  /**
   * `Bot API 7.8+` A method that opens the native story editor with the media specified in the _media\_url_ parameter as an HTTPS URL. An optional _params_ argument of the type [StoryShareParams](#storyshareparams) describes additional sharing settings.
   */
  shareToStory(media_url: string, params?: StoryShareParams): void;

  /**
   * `Bot API 8.0+` A method that opens a dialog allowing the user to share a message provided by the bot. If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean as the first argument, indicating whether the message was successfully sent. The message id passed to this method must belong to a [PreparedInlineMessage](/bots/api#preparedinlinemessage) previously obtained via the Bot API method [savePreparedInlineMessage](/bots/api#savepreparedinlinemessage).
   */
  shareMessage(msg_id: string, callback?: (sent: boolean) => void): void;

  /**
   * `Bot API 8.0+` A method that opens a dialog allowing the user to set the specified custom emoji as their status. An optional _params_ argument of type [EmojiStatusParams](#emojistatusparams) specifies additional settings, such as duration. If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean as the first argument, indicating whether the status was set.
   *
   * _Note: this method opens a native dialog and cannot be used to set the emoji status without manual user interaction. For fully programmatic changes, you should instead use the Bot API method [setUserEmojiStatus](bots/api#setuseremojistatus) after obtaining authorization to do so via the Mini App method requestEmojiStatusAccess._
   */
  setEmojiStatus(
    custom_emoji_id: string,
    params?: EmojiStatusParams,
    callback?: (success: boolean) => void,
  ): void;

  /**
   * `Bot API 8.0+` A method that shows a native popup requesting permission for the bot to manage user's emoji status. If an optional _callback_ parameter was passed, the _callback_ function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.
   */
  requestEmojiStatusAccess(callback?: (granted: boolean) => void): void;

  /**
   * `Bot API 8.0+` A method that displays a native popup prompting the user to download a file specified by the _params_ argument of type [DownloadFileParams](#downloadfileparams). If an optional _callback_ parameter is provided, the _callback_ function will be called when the popup is closed, with the first argument as a boolean indicating whether the user accepted the download request.
   */
  downloadFile(
    params: DownloadFileParams,
    callback?: (granted: boolean) => void,
  ): void;

  /**
   * `Bot API 6.2+` A method that shows a native popup described by the _params_ argument of the type [PopupParams](#popupparams). The Mini App will receive the [event](#events-available-for-mini-apps) _popupClosed_ when the popup is closed. If an optional _callback_ parameter was passed, the _callback_ function will be called and the field _id_ of the pressed button will be passed as the first argument.
   */
  showPopup(params: PopupParams, callback?: (id: string) => void): void;

  /**
   * `Bot API 6.2+` A method that shows _message_ in a simple alert with a 'Close' button. If an optional _callback_ parameter was passed, the _callback_ function will be called when the popup is closed.
   */
  showAlert(message: string, callback?: () => void): void;

  /**
   * `Bot API 6.2+` A method that shows _message_ in a simple confirmation window with 'OK' and 'Cancel' buttons. If an optional _callback_ parameter was passed, the _callback_ function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the 'OK' button.
   */
  showConfirm(message: string, callback?: (ok: boolean) => void): void;

  /**
   * `Bot API 6.4+` A method that shows a native popup for scanning a QR code described by the _params_ argument of the type [ScanQrPopupParams](#scanqrpopupparams). The Mini App will receive the [event](#events-available-for-mini-apps) _qrTextReceived_ every time the scanner catches a code with text data. If an optional _callback_ parameter was passed, the _callback_ function will be called and the text from the QR code will be passed as the first argument. Returning _true_ inside this callback function causes the popup to be closed. Starting from `Bot API 7.7`, the Mini App will receive the _scanQrPopupClosed_ event if the user closes the native popup for scanning a QR code.
   */
  showScanQrPopup(
    params: ScanQrPopupParams,
    callback?: (text: string) => boolean,
  ): void;

  /**
   * `Bot API 6.4+` A method that closes the native popup for scanning a QR code opened with the _showScanQrPopup_ method. Run it if you received valid data in the [event](#events-available-for-mini-apps) _qrTextReceived_.
   */
  closeScanQrPopup(): void;

  /**
   * `Bot API 6.4+` A method that requests text from the clipboard. The Mini App will receive the [event](#events-available-for-mini-apps) _clipboardTextReceived_. If an optional _callback_ parameter was passed, the _callback_ function will be called and the text from the clipboard will be passed as the first argument.
   *
   * _Note: this method can be called only for Mini Apps launched from the attachment menu and only in response to a user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)._
   */
  readTextFromClipboard(callback?: (text: string) => void): void;

  /**
   * `Bot API 6.9+` A method that shows a native popup requesting permission for the bot to send messages to the user. If an optional _callback_ parameter was passed, the _callback_ function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.
   */
  requestWriteAccess(callback?: (granted: boolean) => void): void;

  /**
   * `Bot API 6.9+` A method that shows a native popup prompting the user for their phone number. If an optional _callback_ parameter was passed, the _callback_ function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number.
   */
  requestContact(callback?: (granted: boolean) => void): void;

  /**
   * A method that informs the Telegram app that the Mini App is ready to be displayed.
   * It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded. Once this method is called, the loading placeholder is hidden and the Mini App is shown.
   * If the method is not called, the placeholder will be hidden only when the page is fully loaded.
   */
  ready(): void;

  /**
   * A method that expands the Mini App to the maximum available height. To find out if the Mini App is expanded to the maximum height, refer to the value of the _Telegram.WebApp.isExpanded_ parameter
   */
  expand(): void;

  /**
   * A method that closes the Mini App.
   */
  close(): void;
}
/**
 * [](#adding-bots-to-the-attachment-menu)Adding Bots to the Attachment Menu
 *
 * @see https://core.telegram.org/bots/webapps#events-available-for-mini-apps
 */
export enum EventType {
  /**
   * `Bot API 8.0+` Occurs when the Mini App becomes active (e.g., opened from minimized state or selected among tabs).
   * _eventHandler_ receives no parameters.
   */
  activated = 'activated',

  /**
   * `Bot API 8.0+` Occurs when the Mini App becomes inactive (e.g., minimized or moved to an inactive tab).
   * _eventHandler_ receives no parameters.
   */
  deactivated = 'deactivated',

  /**
   * Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
   * _eventHandler_ receives no parameters, new theme settings and color scheme can be received via _this.themeParams_ and _this.colorScheme_ respectively.
   */
  themeChanged = 'themeChanged',

  /**
   * Occurs when the visible section of the Mini App is changed.
   * _eventHandler_ receives an object with the single field _isStateStable_. If _isStateStable_ is true, the resizing of the Mini App is finished. If it is false, the resizing is ongoing (the user is expanding or collapsing the Mini App or an animated object is playing). The current value of the visible section’s height is available in _this.viewportHeight_.
   */
  viewportChanged = 'viewportChanged',

  /**
   * `Bot API 8.0+` Occurs when the device's safe area insets change (e.g., due to orientation change or screen adjustments).
   * _eventHandler_ receives no parameters. The current inset values can be accessed via _this.safeAreaInset_.
   */
  safeAreaChanged = 'safeAreaChanged',

  /**
   * `Bot API 8.0+` Occurs when the safe area for content changes (e.g., due to orientation change or screen adjustments).
   * _eventHandler_ receives no parameters. The current inset values can be accessed via _this.contentSafeAreaInset_.
   */
  contentSafeAreaChanged = 'contentSafeAreaChanged',

  /**
   * Occurs when the [main button](#bottombutton) is pressed.
   * _eventHandler_ receives no parameters.
   */
  mainButtonClicked = 'mainButtonClicked',

  /**
   * `Bot API 7.10+` Occurs when the [secondary button](#bottombutton) is pressed.
   * _eventHandler_ receives no parameters.
   */
  secondaryButtonClicked = 'secondaryButtonClicked',

  /**
   * `Bot API 6.1+` Occurrs when the [back button](#backbutton) is pressed.
   * _eventHandler_ receives no parameters.
   */
  backButtonClicked = 'backButtonClicked',

  /**
   * `Bot API 6.1+` Occurrs when the Settings item in context menu is pressed.
   * _eventHandler_ receives no parameters.
   */
  settingsButtonClicked = 'settingsButtonClicked',

  /**
   * `Bot API 6.1+` Occurrs when the opened invoice is closed.
   * _eventHandler_ receives an object with the two fields: _url_ – invoice link provided and _status_ – one of the invoice statuses:
   * \- **paid** – invoice was paid successfully,
   * \- **cancelled** – user closed this invoice without paying,
   * \- **failed** – user tried to pay, but the payment was failed,
   * \- **pending** – the payment is still processing. The bot will receive a service message about a [successful payment](/bots/api#successfulpayment) when the payment is successfully paid.
   */
  invoiceClosed = 'invoiceClosed',

  /**
   * `Bot API 6.2+` Occurrs when the opened popup is closed.
   * _eventHandler_ receives an object with the single field _button\_id_ – the value of the field _id_ of the pressed button. If no buttons were pressed, the field _button\_id_ will be _null_.
   */
  popupClosed = 'popupClosed',

  /**
   * `Bot API 6.4+` Occurs when the QR code scanner catches a code with text data.
   * _eventHandler_ receives an object with the single field _data_ containing text data from the QR code.
   */
  qrTextReceived = 'qrTextReceived',

  /**
   * `Bot API 7.7+` Occurs when the QR code scanner popup is closed by the user.
   * _eventHandler_ receives no parameters.
   */
  scanQrPopupClosed = 'scanQrPopupClosed',

  /**
   * `Bot API 6.4+` Occurrs when the `readTextFromClipboard` method is called.
   * _eventHandler_ receives an object with the single field _data_ containing text data from the clipboard. If the clipboard contains non-text data, the field _data_ will be an empty string. If the Mini App has no access to the clipboard, the field _data_ will be _null_.
   */
  clipboardTextReceived = 'clipboardTextReceived',

  /**
   * `Bot API 6.9+` Occurs when the write permission was requested.
   * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
   * \- **allowed** – user granted write permission to the bot,
   * \- **cancelled** – user declined this request.
   */
  writeAccessRequested = 'writeAccessRequested',

  /**
   * `Bot API 6.9+` Occurrs when the user's phone number was requested.
   * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
   * \- **sent** – user shared their phone number with the bot,
   * \- **cancelled** – user declined this request.
   */
  contactRequested = 'contactRequested',

  /**
   * `Bot API 7.2+` Occurs whenever BiometricManager object is changed.
   * _eventHandler_ receives no parameters.
   */
  biometricManagerUpdated = 'biometricManagerUpdated',

  /**
   * `Bot API 7.2+` Occurs whenever biometric authentication was requested.
   * _eventHandler_ receives an object with the field _isAuthenticated_ containing a boolean indicating whether the user was authenticated successfully. If _isAuthenticated_ is true, the field _biometricToken_ will contain the biometric token stored in secure storage on the device.
   */
  biometricAuthRequested = 'biometricAuthRequested',

  /**
   * `Bot API 7.2+` Occurs whenever the biometric token was updated.
   * _eventHandler_ receives an object with the single field _isUpdated_, containing a boolean indicating whether the token was updated.
   */
  biometricTokenUpdated = 'biometricTokenUpdated',

  /**
   * `Bot API 8.0+` Occurs whenever the Mini App enters or exits fullscreen mode.
   * _eventHandler_ receives no parameters. The current fullscreen state can be checked via _this.isFullscreen_.
   */
  fullscreenChanged = 'fullscreenChanged',

  /**
   * `Bot API 8.0+` Occurs if a request to enter fullscreen mode fails.
   * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
   * **UNSUPPORTED** – Fullscreen mode is not supported on this device or platform.
   * **ALREADY\_FULLSCREEN** – The Mini App is already in fullscreen mode.
   */
  fullscreenFailed = 'fullscreenFailed',

  /**
   * `Bot API 8.0+` Occurs when the Mini App is successfully added to the home screen.
   * _eventHandler_ receives no parameters.
   */
  homeScreenAdded = 'homeScreenAdded',

  /**
   * `Bot API 8.0+` Occurs after checking the home screen status.
   * _eventHandler_ receives an object with the field _status_, which is a string indicating the current home screen status. Possible values for _status_ are:
   * \- **unsupported** – the feature is not supported, and it is not possible to add the icon to the home screen,
   * \- **unknown** – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
   * \- **added** – the icon has already been added to the home screen,
   * \- **missed** – the icon has not been added to the home screen.
   */
  homeScreenChecked = 'homeScreenChecked',

  /**
   * `Bot API 8.0+` Occurs when accelerometer tracking has started successfully.
   * _eventHandler_ receives no parameters.
   */
  accelerometerStarted = 'accelerometerStarted',

  /**
   * `Bot API 8.0+` Occurs when accelerometer tracking has stopped.
   * _eventHandler_ receives no parameters.
   */
  accelerometerStopped = 'accelerometerStopped',

  /**
   * `Bot API 8.0+` Occurs with the specified frequency after calling the `start` method, sending the current accelerometer data.
   * _eventHandler_ receives no parameters, the current acceleration values can be received via _this.x_, _this.y_ and _this.z_ respectively.
   */
  accelerometerChanged = 'accelerometerChanged',

  /**
   * `Bot API 8.0+` Occurs if a request to start accelerometer tracking fails.
   * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
   * **UNSUPPORTED** – Accelerometer tracking is not supported on this device or platform.
   */
  accelerometerFailed = 'accelerometerFailed',

  /**
   * `Bot API 8.0+` Occurs when device orientation tracking has started successfully.
   * _eventHandler_ receives no parameters.
   */
  deviceOrientationStarted = 'deviceOrientationStarted',

  /**
   * `Bot API 8.0+` Occurs when device orientation tracking has stopped.
   * _eventHandler_ receives no parameters.
   */
  deviceOrientationStopped = 'deviceOrientationStopped',

  /**
   * `Bot API 8.0+` Occurs with the specified frequency after calling the `start` method, sending the current orientation data.
   * _eventHandler_ receives no parameters, the current device orientation values can be received via _this.alpha_, _this.beta_ and _this.gamma_ respectively.
   */
  deviceOrientationChanged = 'deviceOrientationChanged',

  /**
   * `Bot API 8.0+` Occurs if a request to start device orientation tracking fails.
   * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
   * **UNSUPPORTED** – Device orientation tracking is not supported on this device or platform.
   */
  deviceOrientationFailed = 'deviceOrientationFailed',

  /**
   * `Bot API 8.0+` Occurs when gyroscope tracking has started successfully.
   * _eventHandler_ receives no parameters.
   */
  gyroscopeStarted = 'gyroscopeStarted',

  /**
   * `Bot API 8.0+` Occurs when gyroscope tracking has stopped.
   * _eventHandler_ receives no parameters.
   */
  gyroscopeStopped = 'gyroscopeStopped',

  /**
   * `Bot API 8.0+` Occurs with the specified frequency after calling the `start` method, sending the current gyroscope data.
   * _eventHandler_ receives no parameters, the current rotation rates can be received via _this.x_, _this.y_ and _this.z_ respectively.
   */
  gyroscopeChanged = 'gyroscopeChanged',

  /**
   * `Bot API 8.0+` Occurs if a request to start gyroscope tracking fails.
   * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
   * **UNSUPPORTED** – Gyroscope tracking is not supported on this device or platform.
   */
  gyroscopeFailed = 'gyroscopeFailed',

  /**
   * `Bot API 8.0+` Occurs whenever LocationManager object is changed.
   * _eventHandler_ receives no parameters.
   */
  locationManagerUpdated = 'locationManagerUpdated',

  /**
   * `Bot API 8.0+` Occurs when location data is requested.
   * _eventHandler_ receives an object with the single field _locationData_ of type [LocationData](#locationdata), containing the current location information.
   */
  locationRequested = 'locationRequested',

  /**
   * `Bot API 8.0+` Occurs when the message is successfully shared by the user.
   * _eventHandler_ receives no parameters.
   */
  shareMessageSent = 'shareMessageSent',

  /**
   * `Bot API 8.0+` Occurs if sharing the message fails.
   * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
   * **UNSUPPORTED** – The feature is not supported by the client.
   * **MESSAGE\_EXPIRED** – The message could not be retrieved because it has expired.
   * **MESSAGE\_SEND\_FAILED** – An error occurred while attempting to send the message.
   * **USER\_DECLINED** – The user closed the dialog without sharing the message.
   * **UNKNOWN\_ERROR** – An unknown error occurred.
   */
  shareMessageFailed = 'shareMessageFailed',

  /**
   * `Bot API 8.0+` Occurs when the emoji status is successfully set.
   * _eventHandler_ receives no parameters.
   */
  emojiStatusSet = 'emojiStatusSet',

  /**
   * `Bot API 8.0+` Occurs if setting the emoji status fails.
   * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
   * **UNSUPPORTED** – The feature is not supported by the client.
   * **SUGGESTED\_EMOJI\_INVALID** – One or more emoji identifiers are invalid.
   * **DURATION\_INVALID** – The specified duration is invalid.
   * **USER\_DECLINED** – The user closed the dialog without setting a status.
   * **SERVER\_ERROR** – A server error occurred when attempting to set the status.
   * **UNKNOWN\_ERROR** – An unknown error occurred.
   */
  emojiStatusFailed = 'emojiStatusFailed',

  /**
   * `Bot API 8.0+` Occurs when the write permission was requested.
   * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
   * \- **allowed** – user granted emoji status permission to the bot,
   * \- **cancelled** – user declined this request.
   */
  emojiStatusAccessRequested = 'emojiStatusAccessRequested',

  /**
   * `Bot API 8.0+` Occurs when the user responds to the file download request.
   * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
   * \- **downloading** – the file download has started,
   * \- **cancelled** – user declined this request.
   */
  fileDownloadRequested = 'fileDownloadRequested',
}
interface EventCallbacks {
  [EventType.activated]: () => void;
  [EventType.deactivated]: () => void;
  [EventType.themeChanged]: () => void;
  [EventType.viewportChanged]: (e: { isStateStable: boolean }) => void;
  [EventType.safeAreaChanged]: () => void;
  [EventType.contentSafeAreaChanged]: () => void;
  [EventType.mainButtonClicked]: () => void;
  [EventType.secondaryButtonClicked]: () => void;
  [EventType.backButtonClicked]: () => void;
  [EventType.settingsButtonClicked]: () => void;
  [EventType.invoiceClosed]: (e: {
    url: string;
    status: 'paid' | 'cancelled' | 'failed' | 'pending';
  }) => void;
  [EventType.popupClosed]: (e: { button_id: string }) => void;
  [EventType.qrTextReceived]: (e: { data: string }) => void;
  [EventType.scanQrPopupClosed]: () => void;
  [EventType.clipboardTextReceived]: (e: { data: string | null }) => void;
  [EventType.writeAccessRequested]: (e: {
    status: 'allowed' | 'cancelled';
  }) => void;
  [EventType.contactRequested]: (e: { status: 'sent' | 'cancelled' }) => void;
  [EventType.biometricManagerUpdated]: () => void;
  [EventType.biometricAuthRequested]: (e: {
    isAuthenticated: boolean;
    biometricToken?: string;
  }) => void;
  [EventType.biometricTokenUpdated]: (e: { isUpdated: boolean }) => void;
  [EventType.fullscreenChanged]: () => void;
  [EventType.fullscreenFailed]: (e: {
    error: 'UNSUPPORTED' | 'ALREADY_FULLSCREEN';
  }) => void;
  [EventType.homeScreenAdded]: () => void;
  [EventType.homeScreenChecked]: (e: {
    status: 'unsupported' | 'unknown' | 'added' | 'missed';
  }) => void;
  [EventType.accelerometerStarted]: () => void;
  [EventType.accelerometerStopped]: () => void;
  [EventType.accelerometerChanged]: () => void;
  [EventType.accelerometerFailed]: (e: { error: 'UNSUPPORTED' }) => void;
  [EventType.deviceOrientationStarted]: () => void;
  [EventType.deviceOrientationStopped]: () => void;
  [EventType.deviceOrientationChanged]: () => void;
  [EventType.deviceOrientationFailed]: (e: { error: 'UNSUPPORTED' }) => void;
  [EventType.gyroscopeStarted]: () => void;
  [EventType.gyroscopeStopped]: () => void;
  [EventType.gyroscopeChanged]: () => void;
  [EventType.gyroscopeFailed]: (e: { error: 'UNSUPPORTED' }) => void;
  [EventType.locationManagerUpdated]: () => void;
  [EventType.locationRequested]: (e: { locationData: LocationData }) => void;
  [EventType.shareMessageSent]: () => void;
  [EventType.shareMessageFailed]: (e: {
    error:
      | 'UNSUPPORTED'
      | 'MESSAGE_EXPIRED'
      | 'MESSAGE_SEND_FAILED'
      | 'USER_DECLINED'
      | 'UNKNOWN_ERROR';
  }) => void;
  [EventType.emojiStatusSet]: () => void;
  [EventType.emojiStatusFailed]: (e: {
    error:
      | 'UNSUPPORTED'
      | 'SUGGESTED_EMOJI_INVALID'
      | 'DURATION_INVALID'
      | 'USER_DECLINED'
      | 'SERVER_ERROR'
      | 'UNKNOWN_ERROR';
  }) => void;
  [EventType.emojiStatusAccessRequested]: (e: {
    status: 'allowed' | 'cancelled';
  }) => void;
  [EventType.fileDownloadRequested]: (e: {
    status: 'downloading' | 'cancelled';
  }) => void;
}
/**
 * Mini Apps can [adjust the appearance](#color-schemes) of the interface to match the Telegram user's app in real time. This object contains the user's current theme settings:
 *
 * @see https://core.telegram.org/bots/webapps#themeparams
 */
export interface ThemeParams {
  /**
   * _Optional_. Background color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-bg-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly bg_color?: `#${string}`;

  /**
   * _Optional_. Main text color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-text-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly text_color?: `#${string}`;

  /**
   * _Optional_. Hint text color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-hint-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly hint_color?: `#${string}`;

  /**
   * _Optional_. Link color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-link-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly link_color?: `#${string}`;

  /**
   * _Optional_. Button color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-button-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly button_color?: `#${string}`;

  /**
   * _Optional_. Button text color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-button-text-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly button_text_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 6.1+` Secondary background color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-secondary-bg-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly secondary_bg_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.0+` Header background color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-header-bg-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly header_bg_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.10+` Bottom background color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-bottom-bar-bg-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly bottom_bar_bg_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.0+` Accent text color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-accent-text-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly accent_text_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.0+` Background color for the section in the `#RRGGBB` format. It is recommended to use this in conjunction with _secondary\_bg\_color_.
   * Also available as the CSS variable `var(--tg-theme-section-bg-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly section_bg_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.0+` Header text color for the section in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-section-header-text-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly section_header_text_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.6+` Section separator color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-section-separator-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly section_separator_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.0+` Subtitle text color in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-subtitle-text-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly subtitle_text_color?: `#${string}`;

  /**
   * _Optional_. `Bot API 7.0+` Text color for destructive actions in the `#RRGGBB` format.
   * Also available as the CSS variable `var(--tg-theme-destructive-text-color)`.
   *
   * @type {`#${string}`}
   * @readonly
   */
  readonly destructive_text_color?: `#${string}`;
}
/**
 * This object describes additional sharing settings for the native story editor.
 *
 * @see https://core.telegram.org/bots/webapps#storyshareparams
 */
export interface StoryShareParams {
  /**
   * _Optional_. The caption to be added to the media, 0-200 characters for regular users and 0-2048 characters for [premium](https://telegram.org/faq_premium#telegram-premium) subscribers.
   *
   * @type {string}
   * @readonly
   */
  readonly text?: string;

  /**
   * _Optional_. An object that describes a widget link to be included in the story. Note that only [premium](https://telegram.org/faq_premium#telegram-premium) subscribers can post stories with links.
   *
   * @type {StoryWidgetLink}
   * @readonly
   */
  readonly widget_link: StoryWidgetLink;
}
/**
 * This object describes a widget link to be included in the story.
 *
 * @see https://core.telegram.org/bots/webapps#storywidgetlink
 */
export interface StoryWidgetLink {
  /**
   * The URL to be included in the story.
   *
   * @type {string}
   * @readonly
   */
  readonly url: string;

  /**
   * _Optional_. The name to be displayed for the widget link, 0-48 characters.
   *
   * @type {string}
   * @readonly
   */
  readonly name?: string;
}
/**
 * This object describes the native popup for scanning QR codes.
 *
 * @see https://core.telegram.org/bots/webapps#scanqrpopupparams
 */
export interface ScanQrPopupParams {
  /**
   * _Optional_. The text to be displayed under the 'Scan QR' heading, 0-64 characters.
   *
   * @type {string}
   * @readonly
   */
  readonly text?: string;
}
/**
 * This object describes the native popup.
 *
 * @see https://core.telegram.org/bots/webapps#popupparams
 */
export interface PopupParams {
  /**
   * _Optional_. The text to be displayed in the popup title, 0-64 characters.
   *
   * @type {string}
   * @readonly
   */
  readonly title?: string;

  /**
   * The message to be displayed in the body of the popup, 1-256 characters.
   *
   * @type {string}
   * @readonly
   */
  readonly message: string;

  /**
   * _Optional_. List of buttons to be displayed in the popup, 1-3 buttons. Set to _\[{“type”:“close”}\]_ by default.
   *
   * @type {PopupButton[]}
   * @readonly
   */
  readonly buttons: PopupButton[];
}
/**
 * This object describes the native popup button.
 *
 * @see https://core.telegram.org/bots/webapps#popupbutton
 */
export interface PopupButton {
  /**
   * _Optional_. Identifier of the button, 0-64 characters. Set to empty string by default.
   * If the button is pressed, its _id_ is returned in the callback and the _popupClosed_ event.
   *
   * @type {string}
   * @readonly
   */
  readonly id?: string;

  /**
   * _Optional_. Type of the button. Set to _default_ by default.
   * Can be one of these values:
   * \- _default_, a button with the default style,
   * \- _ok_, a button with the localized text “OK”,
   * \- _close_, a button with the localized text “Close”,
   * \- _cancel_, a button with the localized text “Cancel”,
   * \- _destructive_, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).
   *
   * @type {string}
   * @readonly
   */
  readonly type?: string;

  /**
   * _Optional_. The text to be displayed on the button, 0-64 characters. Required if _type_ is _default_ or _destructive_. Irrelevant for other types.
   *
   * @type {string}
   * @readonly
   */
  readonly text?: string;
}
/**
 * This object describes additional settings for setting an emoji status.
 *
 * @see https://core.telegram.org/bots/webapps#emojistatusparams
 */
export interface EmojiStatusParams {
  /**
   * _Optional_. The duration for which the status will remain set, in seconds.
   *
   * @type {number}
   * @readonly
   */
  readonly duration?: number;
}
/**
 * This object describes the parameters for the file download request.
 *
 * @see https://core.telegram.org/bots/webapps#downloadfileparams
 */
export interface DownloadFileParams {
  /**
   * The HTTPS URL of the file to be downloaded.
   *
   * @type {string}
   * @readonly
   */
  readonly url: string;

  /**
   * The suggested name for the downloaded file.
   *
   * @type {string}
   * @readonly
   */
  readonly file_name: string;
}
/**
 * This object represents the system-defined safe area insets, providing padding values to ensure content remains within visible boundaries, avoiding overlap with system UI elements like notches or navigation bars.
 *
 * @see https://core.telegram.org/bots/webapps#safeareainset
 */
export interface SafeAreaInset {
  /**
   * The top inset in pixels, representing the space to avoid at the top of the screen. Also available as the CSS variable `var(--tg-safe-area-inset-top)`.
   *
   * @type {number}
   * @readonly
   */
  readonly top: number;

  /**
   * The bottom inset in pixels, representing the space to avoid at the bottom of the screen. Also available as the CSS variable `var(--tg-safe-area-inset-bottom)`.
   *
   * @type {number}
   * @readonly
   */
  readonly bottom: number;

  /**
   * The left inset in pixels, representing the space to avoid on the left side of the screen. Also available as the CSS variable `var(--tg-safe-area-inset-left)`.
   *
   * @type {number}
   * @readonly
   */
  readonly left: number;

  /**
   * The right inset in pixels, representing the space to avoid on the right side of the screen. Also available as the CSS variable `var(--tg-safe-area-inset-right)`.
   *
   * @type {number}
   * @readonly
   */
  readonly right: number;
}
/**
 * This object represents the content-defined safe area insets, providing padding values to ensure content remains within visible boundaries, avoiding overlap with Telegram UI elements.
 *
 * @see https://core.telegram.org/bots/webapps#contentsafeareainset
 */
export interface ContentSafeAreaInset {
  /**
   * The top inset in pixels, representing the space to avoid at the top of the content area. Also available as the CSS variable `var(--tg-content-safe-area-inset-top)`.
   *
   * @type {number}
   * @readonly
   */
  readonly top: number;

  /**
   * The bottom inset in pixels, representing the space to avoid at the bottom of the content area. Also available as the CSS variable `var(--tg-content-safe-area-inset-bottom)`.
   *
   * @type {number}
   * @readonly
   */
  readonly bottom: number;

  /**
   * The left inset in pixels, representing the space to avoid on the left side of the content area. Also available as the CSS variable `var(--tg-content-safe-area-inset-left)`.
   *
   * @type {number}
   * @readonly
   */
  readonly left: number;

  /**
   * The right inset in pixels, representing the space to avoid on the right side of the content area. Also available as the CSS variable `var(--tg-content-safe-area-inset-right)`.
   *
   * @type {number}
   * @readonly
   */
  readonly right: number;
}
/**
 * This object controls the **back** button, which can be displayed in the header of the Mini App in the Telegram interface.
 *
 * @see https://core.telegram.org/bots/webapps#backbutton
 */
export interface BackButton {
  /**
   * Shows whether the button is visible. Set to _false_ by default.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isVisible: boolean;

  /**
   * `Bot API 6.1+` A method that sets the button press event handler. An alias for `Telegram.WebApp.onEvent('backButtonClicked', callback)`
   */
  onClick(callback: () => void): BackButton;

  /**
   * `Bot API 6.1+` A method that removes the button press event handler. An alias for `Telegram.WebApp.offEvent('backButtonClicked', callback)`
   */
  offClick(callback: () => void): BackButton;

  /**
   * `Bot API 6.1+` A method to make the button active and visible.
   */
  show(): BackButton;

  /**
   * `Bot API 6.1+` A method to hide the button.
   */
  hide(): BackButton;
}
/**
 * This object controls the button that is displayed at the bottom of the Mini App in the Telegram interface.
 *
 * @see https://core.telegram.org/bots/webapps#bottombutton
 */
export interface BottomButton {
  /**
   * _Readonly._ Type of the button. It can be either _main_ for the main button or _secondary_ for the secondary button.
   *
   * @type {string}
   * @readonly
   */
  readonly type: string;

  /**
   * Current button text. Set to _Continue_ for the main button and _Cancel_ for the secondary button by default.
   *
   * @type {string}
   * @readonly
   */
  readonly text: string;

  /**
   * Current button color. Set to _themeParams.button\_color_ for the main button and _themeParams.bottom\_bar\_bg\_color_ for the secondary button by default.
   *
   * @type {string}
   * @readonly
   */
  readonly color: string;

  /**
   * Current button text color. Set to _themeParams.button\_text\_color_ for the main button and _themeParams.button\_color_ for the secondary button by default.
   *
   * @type {string}
   * @readonly
   */
  readonly textColor: string;

  /**
   * Shows whether the button is visible. Set to _false_ by default.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isVisible: boolean;

  /**
   * Shows whether the button is active. Set to _true_ by default.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isActive: boolean;

  /**
   * `Bot API 7.10+` Shows whether the button has a shine effect. Set to _false_ by default.
   *
   * @type {boolean}
   * @readonly
   */
  readonly hasShineEffect: boolean;

  /**
   * `Bot API 7.10+` Position of the secondary button. Not defined for the main button. It applies only if both the main and secondary buttons are visible. Set to _left_ by default.
   * Supported values:
   * \- _left_, displayed to the left of the main button,
   * \- _right_, displayed to the right of the main button,
   * \- _top_, displayed above the main button,
   * \- _bottom_, displayed below the main button.
   *
   * @type {string}
   * @readonly
   */
  readonly position: string;

  /**
   * _Readonly._ Shows whether the button is displaying a loading indicator.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isProgressVisible: boolean;

  /**
   * A method to set the button text.
   */
  setText(text: string): BottomButton;

  /**
   * A method that sets the button's press event handler. An alias for `Telegram.WebApp.onEvent('mainButtonClicked', callback)`
   */
  onClick(callback: () => void): BottomButton;

  /**
   * A method that removes the button's press event handler. An alias for `Telegram.WebApp.offEvent('mainButtonClicked', callback)`
   */
  offClick(callback: () => void): BottomButton;

  /**
   * A method to make the button visible.
   * _Note that opening the Mini App from the [attachment menu](#launching-mini-apps-from-the-attachment-menu) hides the main button until the user interacts with the Mini App interface._
   */
  show(): BottomButton;

  /**
   * A method to hide the button.
   */
  hide(): BottomButton;

  /**
   * A method to enable the button.
   */
  enable(): BottomButton;

  /**
   * A method to disable the button.
   */
  disable(): BottomButton;

  /**
   * A method to show a loading indicator on the button.
   * It is recommended to display loading progress if the action tied to the button may take a long time. By default, the button is disabled while the action is in progress. If the parameter `leaveActive=true` is passed, the button remains enabled.
   */
  showProgress(leaveActive: boolean): BottomButton;

  /**
   * A method to hide the loading indicator.
   */
  hideProgress(): BottomButton;

  /**
   * A method to set the button parameters. The _params_ parameter is an object containing one or several fields that need to be changed:
   * **text** - button text;
   * **color** - button color;
   * **text\_color** - button text color;
   * **has\_shine\_effect** - `Bot API 7.10+` enable shine effect;
   * **position** - position of the secondary button;
   * **is\_active** - enable the button;
   * **is\_visible** - show the button.
   */
  setParams(params: {
    text: string;
    color: `#${string}`;
    text_color: `#${string}`;
    has_shine_effect: boolean;
    position: 'left' | 'right' | 'top' | 'bottom';
    is_active: boolean;
    is_visible: boolean;
  }): BottomButton;
}
/**
 * This object controls the **Settings** item in the context menu of the Mini App in the Telegram interface.
 *
 * @see https://core.telegram.org/bots/webapps#settingsbutton
 */
export interface SettingsButton {
  /**
   * Shows whether the context menu item is visible. Set to _false_ by default.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isVisible: boolean;

  /**
   * `Bot API 7.0+` A method that sets the press event handler for the Settings item in the context menu. An alias for `Telegram.WebApp.onEvent('settingsButtonClicked', callback)`
   */
  onClick(callback: () => void): SettingsButton;

  /**
   * `Bot API 7.0+` A method that removes the press event handler from the Settings item in the context menu. An alias for `Telegram.WebApp.offEvent('settingsButtonClicked', callback)`
   */
  offClick(callback: () => void): SettingsButton;

  /**
   * `Bot API 7.0+` A method to make the Settings item in the context menu visible.
   */
  show(): SettingsButton;

  /**
   * `Bot API 7.0+` A method to hide the Settings item in the context menu.
   */
  hide(): SettingsButton;
}
/**
 * This object controls haptic feedback.
 *
 * @see https://core.telegram.org/bots/webapps#hapticfeedback
 */
export interface HapticFeedback {
  /**
   * `Bot API 6.1+` A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:
   * \- _light_, indicates a collision between small or lightweight UI objects,
   * \- _medium_, indicates a collision between medium-sized or medium-weight UI objects,
   * \- _heavy_, indicates a collision between large or heavyweight UI objects,
   * \- _rigid_, indicates a collision between hard or inflexible UI objects,
   * \- _soft_, indicates a collision between soft or flexible UI objects.
   */
  impactOccurred(
    style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft',
  ): HapticFeedback;

  /**
   * `Bot API 6.1+` A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:
   * \- _error_, indicates that a task or action has failed,
   * \- _success_, indicates that a task or action has completed successfully,
   * \- _warning_, indicates that a task or action produced a warning.
   */
  notificationOccurred(type: 'error' | 'success' | 'warning'): HapticFeedback;

  /**
   * `Bot API 6.1+` A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.
   *
   * _Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes._
   */
  selectionChanged(): HapticFeedback;
}
/**
 * This object controls the cloud storage. Each bot can store up to 1024 items per user in the cloud storage.
 *
 * @see https://core.telegram.org/bots/webapps#cloudstorage
 */
export interface CloudStorage {
  /**
   * `Bot API 6.9+` A method that stores a value in the cloud storage using the specified key. The key should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed. The value should contain 0-4096 characters. You can store up to 1024 keys in the cloud storage. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether the value was stored.
   */
  setItem(
    key: string,
    value: string,
    callback?: (err: Error | null, success: boolean) => void,
  ): CloudStorage;

  /**
   * `Bot API 6.9+` A method that receives a value from the cloud storage using the specified key. The key should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed. In case of an error, the _callback_ function will be called and the first argument will contain the error. In case of success, the first argument will be _null_ and the value will be passed as the second argument.
   */
  getItem(
    key: string,
    callback: (err: Error | null, value: string) => void,
  ): CloudStorage;

  /**
   * `Bot API 6.9+` A method that receives values from the cloud storage using the specified keys. The keys should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed. In case of an error, the _callback_ function will be called and the first argument will contain the error. In case of success, the first argument will be _null_ and the values will be passed as the second argument.
   */
  getItems(
    keys: string[],
    callback: (err: Error | null, values: string[]) => void,
  ): CloudStorage;

  /**
   * `Bot API 6.9+` A method that removes a value from the cloud storage using the specified key. The key should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether the value was removed.
   */
  removeItem(
    key: string,
    callback?: (err: Error | null, success: boolean) => void,
  ): CloudStorage;

  /**
   * `Bot API 6.9+` A method that removes values from the cloud storage using the specified keys. The keys should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether the values were removed.
   */
  removeItems(
    keys: string[],
    callback?: (err: Error | null, success: boolean) => void,
  ): CloudStorage;

  /**
   * `Bot API 6.9+` A method that receives the list of all keys stored in the cloud storage. In case of an error, the _callback_ function will be called and the first argument will contain the error. In case of success, the first argument will be _null_ and the list of keys will be passed as the second argument.
   */
  getKeys(callback: (err: Error | null, keys: string[]) => void): CloudStorage;
}
/**
 * This object controls biometrics on the device. Before the first use of this object, it needs to be initialized using the _init_ method.
 *
 * @see https://core.telegram.org/bots/webapps#biometricmanager
 */
export interface BiometricManager {
  /**
   * Shows whether biometrics object is initialized.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isInited: boolean;

  /**
   * Shows whether biometrics is available on the current device.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isBiometricAvailable: boolean;

  /**
   * The type of biometrics currently available on the device. Can be one of these values:
   * \- _finger_, fingerprint-based biometrics,
   * \- _face_, face-based biometrics,
   * \- _unknown_, biometrics of an unknown type.
   *
   * @type {string}
   * @readonly
   */
  readonly biometricType: string;

  /**
   * Shows whether permission to use biometrics has been requested.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isAccessRequested: boolean;

  /**
   * Shows whether permission to use biometrics has been granted.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isAccessGranted: boolean;

  /**
   * Shows whether the token is saved in secure storage on the device.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isBiometricTokenSaved: boolean;

  /**
   * A unique device identifier that can be used to match the token to the device.
   *
   * @type {string}
   * @readonly
   */
  readonly deviceId: string;

  /**
   * `Bot API 7.2+` A method that initializes the BiometricManager object. It should be called before the object's first use. If an optional _callback_ parameter was passed, the _callback_ function will be called when the object is initialized.
   */
  init(callback?: () => void): BiometricManager;

  /**
   * `Bot API 7.2+` A method that requests permission to use biometrics according to the _params_ argument of type [BiometricRequestAccessParams](#biometricrequestaccessparams). If an optional _callback_ parameter was passed, the _callback_ function will be called and the first argument will be a boolean indicating whether the user granted access.
   */
  requestAccess(
    params: BiometricRequestAccessParams,
    callback?: (granted: boolean) => void,
  ): BiometricManager;

  /**
   * `Bot API 7.2+` A method that authenticates the user using biometrics according to the _params_ argument of type [BiometricAuthenticateParams](#biometricauthenticateparams). If an optional _callback_ parameter was passed, the _callback_ function will be called and the first argument will be a boolean indicating whether the user authenticated successfully. If so, the second argument will be a biometric token.
   */
  authenticate(
    params: BiometricAuthenticateParams,
    callback?: (authenticated: boolean, token?: string) => void,
  ): BiometricManager;

  /**
   * `Bot API 7.2+` A method that updates the biometric token in secure storage on the device. To remove the token, pass an empty string. If an optional _callback_ parameter was passed, the _callback_ function will be called and the first argument will be a boolean indicating whether the token was updated.
   */
  updateBiometricToken(
    token: string,
    callback?: (updated: boolean) => void,
  ): BiometricManager;

  /**
   * `Bot API 7.2+` A method that opens the biometric access settings for bots. Useful when you need to request biometrics access to users who haven't granted it yet.
   *
   * _Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)_
   */
  openSettings(): BiometricManager;
}
/**
 * This object describes the native popup for requesting permission to use biometrics.
 *
 * @see https://core.telegram.org/bots/webapps#biometricrequestaccessparams
 */
export interface BiometricRequestAccessParams {
  /**
   * _Optional_. The text to be displayed to a user in the popup describing why the bot needs access to biometrics, 0-128 characters.
   *
   * @type {string}
   * @readonly
   */
  readonly reason?: string;
}
/**
 * This object describes the native popup for authenticating the user using biometrics.
 *
 * @see https://core.telegram.org/bots/webapps#biometricauthenticateparams
 */
export interface BiometricAuthenticateParams {
  /**
   * _Optional_. The text to be displayed to a user in the popup describing why you are asking them to authenticate and what action you will be taking based on that authentication, 0-128 characters.
   *
   * @type {string}
   * @readonly
   */
  readonly reason?: string;
}
/**
 * This object provides access to accelerometer data on the device.
 *
 * @see https://core.telegram.org/bots/webapps#accelerometer
 */
export interface Accelerometer {
  /**
   * Indicates whether accelerometer tracking is currently active.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isStarted: boolean;

  /**
   * The current acceleration in the X-axis, measured in m/s².
   *
   * @type {number}
   * @readonly
   */
  readonly x: number;

  /**
   * The current acceleration in the Y-axis, measured in m/s².
   *
   * @type {number}
   * @readonly
   */
  readonly y: number;

  /**
   * The current acceleration in the Z-axis, measured in m/s².
   *
   * @type {number}
   * @readonly
   */
  readonly z: number;

  /**
   * `Bot API 8.0+` Starts tracking accelerometer data using _params_ of type [AccelerometerStartParams](#accelerometerstartparams). If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean indicating whether tracking was successfully started.
   */
  start(
    params: AccelerometerStartParams,
    callback?: (started: boolean) => void,
  ): Accelerometer;

  /**
   * `Bot API 8.0+` Stops tracking accelerometer data. If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean indicating whether tracking was successfully stopped.
   */
  stop(callback?: (stoped: boolean) => void): Accelerometer;
}
/**
 * This object defines the parameters for starting accelerometer tracking.
 *
 * @see https://core.telegram.org/bots/webapps#accelerometerstartparams
 */
export interface AccelerometerStartParams {
  /**
   * _Optional._ The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to _1000_ by default. Note that _refresh\_rate_ may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
   *
   * @type {number}
   * @readonly
   */
  readonly refresh_rate?: number;
}
/**
 * This object provides access to orientation data on the device.
 *
 * @see https://core.telegram.org/bots/webapps#deviceorientation
 */
export interface DeviceOrientation {
  /**
   * Indicates whether device orientation tracking is currently active.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isStarted: boolean;

  /**
   * A boolean that indicates whether or not the device is providing orientation data in absolute values.
   *
   * @type {boolean}
   * @readonly
   */
  readonly absolute: boolean;

  /**
   * The rotation around the Z-axis, measured in radians.
   *
   * @type {number}
   * @readonly
   */
  readonly alpha: number;

  /**
   * The rotation around the X-axis, measured in radians.
   *
   * @type {number}
   * @readonly
   */
  readonly beta: number;

  /**
   * The rotation around the Y-axis, measured in radians.
   *
   * @type {number}
   * @readonly
   */
  readonly gamma: number;

  /**
   * `Bot API 8.0+` Starts tracking device orientation data using _params_ of type [DeviceOrientationStartParams](#deviceorientationstartparams). If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean indicating whether tracking was successfully started.
   */
  start(
    params: DeviceOrientationStartParams,
    callback?: (started: boolean) => void,
  ): DeviceOrientation;

  /**
   * `Bot API 8.0+` Stops tracking device orientation data. If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean indicating whether tracking was successfully stopped.
   */
  stop(callback?: (stoped: boolean) => void): DeviceOrientation;
}
/**
 * This object defines the parameters for starting device orientation tracking.
 *
 * @see https://core.telegram.org/bots/webapps#deviceorientationstartparams
 */
export interface DeviceOrientationStartParams {
  /**
   * _Optional._ The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to _1000_ by default. Note that _refresh\_rate_ may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
   *
   * @type {number}
   * @readonly
   */
  readonly refresh_rate?: number;

  /**
   * _Optional._ Pass _true_ to receive absolute orientation data, allowing you to determine the device's attitude relative to magnetic north. Use this option if implementing features like a compass in your app. If relative data is sufficient, pass _false_. Set to _false_ by default.
   *
   * **Note:** Keep in mind that some devices may not support absolute orientation data. In such cases, you will receive relative data even if _need\_absolute=true_ is passed. Check the _DeviceOrientation.absolute_ parameter to determine whether the data provided is absolute or relative.
   *
   * @type {boolean}
   * @readonly
   */
  readonly need_absolute?: boolean;
}
/**
 * This object provides access to gyroscope data on the device.
 *
 * @see https://core.telegram.org/bots/webapps#gyroscope
 */
export interface Gyroscope {
  /**
   * Indicates whether gyroscope tracking is currently active.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isStarted: boolean;

  /**
   * The current rotation rate around the X-axis, measured in rad/s.
   *
   * @type {number}
   * @readonly
   */
  readonly x: number;

  /**
   * The current rotation rate around the Y-axis, measured in rad/s.
   *
   * @type {number}
   * @readonly
   */
  readonly y: number;

  /**
   * The current rotation rate around the Z-axis, measured in rad/s.
   *
   * @type {number}
   * @readonly
   */
  readonly z: number;

  /**
   * `Bot API 8.0+` Starts tracking gyroscope data using _params_ of type [GyroscopeStartParams](#gyroscopestartparams). If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean indicating whether tracking was successfully started.
   */
  start(
    params: GyroscopeStartParams,
    callback?: (started: boolean) => void,
  ): Gyroscope;

  /**
   * `Bot API 8.0+` Stops tracking gyroscope data. If an optional _callback_ parameter is provided, the _callback_ function will be called with a boolean indicating whether tracking was successfully stopped.
   */
  stop(callback?: (stoped: boolean) => void): Gyroscope;
}
/**
 * This object defines the parameters for starting gyroscope tracking.
 *
 * @see https://core.telegram.org/bots/webapps#gyroscopestartparams
 */
export interface GyroscopeStartParams {
  /**
   * _Optional._ The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to _1000_ by default. Note that _refresh\_rate_ may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
   *
   * @type {number}
   * @readonly
   */
  readonly refresh_rate?: number;
}
/**
 * This object controls location access on the device. Before the first use of this object, it needs to be initialized using the _init_ method.
 *
 * @see https://core.telegram.org/bots/webapps#locationmanager
 */
export interface LocationManager {
  /**
   * Shows whether the LocationManager object has been initialized.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isInited: boolean;

  /**
   * Shows whether location services are available on the current device.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isLocationAvailable: boolean;

  /**
   * Shows whether permission to use location has been requested.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isAccessRequested: boolean;

  /**
   * Shows whether permission to use location has been granted.
   *
   * @type {boolean}
   * @readonly
   */
  readonly isAccessGranted: boolean;

  /**
   * `Bot API 8.0+` A method that initializes the LocationManager object. It should be called before the object's first use. If an optional _callback_ parameter is provided, the _callback_ function will be called when the object is initialized.
   */
  init(callback?: () => void): LocationManager;

  /**
   * `Bot API 8.0+` A method that requests location data. The _callback_ function will be called with _null_ as the first argument if access to location was not granted, or an object of type [LocationData](#locationdata) as the first argument if access was successful.
   */
  getLocation(
    callback: (location: LocationData | null) => void,
  ): LocationManager;

  /**
   * `Bot API 8.0+` A method that opens the location access settings for bots. Useful when you need to request location access from users who haven't granted it yet.
   *
   * _Note that this method can be called only in response to user interaction with the Mini App interface (e.g., a click inside the Mini App or on the main button)._
   */
  openSettings(): LocationManager;
}
/**
 * This object contains data about the current location.
 *
 * @see https://core.telegram.org/bots/webapps#locationdata
 */
export interface LocationData {
  /**
   * Latitude in degrees.
   *
   * @type {number}
   * @readonly
   */
  readonly latitude: number;

  /**
   * Longitude in degrees.
   *
   * @type {number}
   * @readonly
   */
  readonly longitude: number;

  /**
   * Altitude above sea level in meters. _null_ if altitude data is not available on the device.
   *
   * @type {number}
   * @readonly
   */
  readonly altitude: number;

  /**
   * The direction the device is moving in degrees (0 = North, 90 = East, 180 = South, 270 = West). _null_ if course data is not available on the device.
   *
   * @type {number}
   * @readonly
   */
  readonly course: number;

  /**
   * The speed of the device in m/s. _null_ if speed data is not available on the device.
   *
   * @type {number}
   * @readonly
   */
  readonly speed: number;

  /**
   * Accuracy of the latitude and longitude values in meters. _null_ if horizontal accuracy data is not available on the device.
   *
   * @type {number}
   * @readonly
   */
  readonly horizontal_accuracy: number;

  /**
   * Accuracy of the altitude value in meters. _null_ if vertical accuracy data is not available on the device.
   *
   * @type {number}
   * @readonly
   */
  readonly vertical_accuracy: number;

  /**
   * Accuracy of the course value in degrees. _null_ if course accuracy data is not available on the device.
   *
   * @type {number}
   * @readonly
   */
  readonly course_accuracy: number;

  /**
   * Accuracy of the speed value in m/s. _null_ if speed accuracy data is not available on the device.
   *
   * @type {number}
   * @readonly
   */
  readonly speed_accuracy: number;
}
/**
 * This object provides access to persistent local storage on the user’s device. It is conceptually similar to the browser's `localStorage` API, but integrated within the Telegram client. All data is stored locally and is available only to the bot that created it. Each bot can store up to **5 MB per user** using this storage.
 *
 * @see https://core.telegram.org/bots/webapps#devicestorage
 */
export interface DeviceStorage {
  /**
   * `Bot API 9.0+` A method that stores a value in the device's local storage using the specified key. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether the value was stored.
   */
  setItem(
    key: string,
    value: string,
    callback?: (err: Error | null, success: boolean) => void,
  ): DeviceStorage;

  /**
   * `Bot API 9.0+` A method that receives a value from the device's local storage using the specified key. In case of an error, the _callback_ function will be called and the first argument will contain the error. In case of success, the first argument will be _null_ and the value will be passed as the second argument.
   */
  getItem(
    key: string,
    callback: (err: Error | null, value: string) => void,
  ): DeviceStorage;

  /**
   * `Bot API 9.0+` A method that removes a value from the device's local storage using the specified key. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether the value was removed.
   */
  removeItem(
    key: string,
    callback?: (err: Error | null, success: boolean) => void,
  ): DeviceStorage;

  /**
   * `Bot API 9.0+` A method that clears all keys previously stored by the bot in the device's local storage. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether all values were removed.
   */
  clear(
    callback?: (err: Error | null, success: boolean) => void,
  ): DeviceStorage;
}
/**
 * This object provides access to a secure storage on the user’s device for sensitive data. On **iOS**, it uses the system **Keychain**; on **Android**, it uses the **Keystore**. This ensures that all stored values are encrypted at rest and inaccessible to unauthorized applications.
 *
 * @see https://core.telegram.org/bots/webapps#securestorage
 */
export interface SecureStorage {
  /**
   * `Bot API 9.0+` A method that stores a value in the device's secure storage using the specified key. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether the value was stored.
   */
  setItem(
    key: string,
    value: string,
    callback?: (err: Error | null, success: boolean) => void,
  ): SecureStorage;

  /**
   * `Bot API 9.0+` A method that receives a value from the device's secure storage using the specified key. In case of an error, the _callback_ function will be called and the first argument will contain the error. In case of success, the first argument will be _null_ and the value will be passed as the second argument. If the key was not found, the second argument will be _null_, and the third argument will be a boolean indicating whether the key can be restored from the current device.
   */
  getItem(
    key: string,
    callback: (err: Error | null, value: string) => void,
  ): SecureStorage;

  /**
   * `Bot API 9.0+` Attempts to restore a key that previously existed on the current device. When called, the user will be asked for permission to restore the value. If the user declines or an error occurs, the first argument in the _callback_ will contain the error. If restored successfully, the first argument will be _null_ and the second argument will contain the restored value.
   */
  restoreItem(
    key: string,
    callback?: (err: Error | null, value?: string) => void,
  ): SecureStorage;

  /**
   * `Bot API 9.0+` A method that removes a value from the device's secure storage using the specified key. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether the value was removed.
   */
  removeItem(
    key: string,
    callback?: (err: Error | null, success: boolean) => void,
  ): SecureStorage;

  /**
   * `Bot API 9.0+` A method that clears all keys previously stored by the bot in the device's secure storage. If an optional _callback_ parameter was passed, the _callback_ function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be _null_ and the second argument will be a boolean indicating whether all values were removed.
   */
  clear(
    callback?: (err: Error | null, success: boolean) => void,
  ): SecureStorage;
}
/**
 * This object contains data that is transferred to the Mini App when it is opened. It is empty if the Mini App was launched from a [keyboard button](#keyboard-button-mini-apps) or from [inline mode](#inline-mode-mini-apps).
 *
 * @see https://core.telegram.org/bots/webapps#webappinitdata
 */
export interface WebAppInitData {
  /**
   * _Optional._ A unique identifier for the Mini App session, required for sending messages via the [answerWebAppQuery](/bots/api#answerwebappquery) method.
   *
   * @type {string}
   * @readonly
   */
  readonly query_id?: string;

  /**
   * _Optional._ An object containing data about the current user.
   *
   * @type {WebAppUser}
   * @readonly
   */
  readonly user: WebAppUser;

  /**
   * _Optional._ An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for private chats and only for Mini Apps launched via the attachment menu.
   *
   * @type {WebAppUser}
   * @readonly
   */
  readonly receiver: WebAppUser;

  /**
   * _Optional._ An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Mini Apps launched via the attachment menu.
   *
   * @type {WebAppChat}
   * @readonly
   */
  readonly chat: WebAppChat;

  /**
   * _Optional._ Type of the chat from which the Mini App was opened. Can be either “sender” for a private chat with the user opening the link, “private”, “group”, “supergroup”, or “channel”. Returned only for Mini Apps launched from direct links.
   *
   * @type {string}
   * @readonly
   */
  readonly chat_type?: string;

  /**
   * _Optional._ Global identifier, uniquely corresponding to the chat from which the Mini App was opened. Returned only for Mini Apps launched from a direct link.
   *
   * @type {string}
   * @readonly
   */
  readonly chat_instance?: string;

  /**
   * _Optional._ The value of the _startattach_ parameter, passed [via link](#adding-bots-to-the-attachment-menu). Only returned for Mini Apps when launched from the attachment menu via link.
   *
   * The value of the `start_param` parameter will also be passed in the GET-parameter `tgWebAppStartParam`, so the Mini App can load the correct interface right away.
   *
   * @type {string}
   * @readonly
   */
  readonly start_param?: string;

  /**
   * _Optional._ Time in seconds, after which a message can be sent via the [answerWebAppQuery](/bots/api#answerwebappquery) method.
   *
   * @type {number}
   * @readonly
   */
  readonly can_send_after?: number;

  /**
   * Unix time when the form was opened.
   *
   * @type {number}
   * @readonly
   */
  readonly auth_date: number;

  /**
   * A hash of all passed parameters, which the bot server can use to [check their validity](#validating-data-received-via-the-mini-app).
   *
   * @type {string}
   * @readonly
   */
  readonly hash: string;

  /**
   * A signature of all passed parameters (except _hash_), which the third party can use to [check their validity](#validating-data-for-third-party-use).
   *
   * @type {string}
   * @readonly
   */
  readonly signature: string;
}
/**
 * This object contains the data of the Mini App user.
 *
 * @see https://core.telegram.org/bots/webapps#webappuser
 */
export interface WebAppUser {
  /**
   * A unique identifier for the user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. It has at most 52 significant bits, so a 64-bit integer or a double-precision float type is safe for storing this identifier.
   *
   * @type {number}
   * @readonly
   */
  readonly id: number;

  /**
   * _Optional_. _True_, if this user is a bot. Returns in the [receiver](#webappinitdata) field only.
   *
   * @type {boolean}
   * @readonly
   */
  readonly is_bot?: boolean;

  /**
   * First name of the user or bot.
   *
   * @type {string}
   * @readonly
   */
  readonly first_name: string;

  /**
   * _Optional_. Last name of the user or bot.
   *
   * @type {string}
   * @readonly
   */
  readonly last_name?: string;

  /**
   * _Optional_. Username of the user or bot.
   *
   * @type {string}
   * @readonly
   */
  readonly username?: string;

  /**
   * _Optional_. [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language. Returns in _user_ field only.
   *
   * @type {string}
   * @readonly
   */
  readonly language_code?: string;

  /**
   * _Optional_. _True_, if this user is a Telegram Premium user.
   *
   * @type {boolean}
   * @readonly
   */
  readonly is_premium?: boolean;

  /**
   * _Optional_. _True_, if this user added the bot to the attachment menu.
   *
   * @type {boolean}
   * @readonly
   */
  readonly added_to_attachment_menu?: boolean;

  /**
   * _Optional_. _True_, if this user allowed the bot to message them.
   *
   * @type {boolean}
   * @readonly
   */
  readonly allows_write_to_pm?: boolean;

  /**
   * _Optional_. URL of the user’s profile photo. The photo can be in .jpeg or .svg formats.
   *
   * @type {string}
   * @readonly
   */
  readonly photo_url?: string;
}
/**
 * This object represents a chat.
 *
 * @see https://core.telegram.org/bots/webapps#webappchat
 */
export interface WebAppChat {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   *
   * @type {number}
   * @readonly
   */
  readonly id: number;

  /**
   * Type of chat, can be either “group”, “supergroup” or “channel”
   *
   * @type {string}
   * @readonly
   */
  readonly type: string;

  /**
   * Title of the chat
   *
   * @type {string}
   * @readonly
   */
  readonly title: string;

  /**
   * _Optional_. Username of the chat
   *
   * @type {string}
   * @readonly
   */
  readonly username?: string;

  /**
   * _Optional_. URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned for Mini Apps launched from the attachment menu.
   *
   * @type {string}
   * @readonly
   */
  readonly photo_url?: string;
}
