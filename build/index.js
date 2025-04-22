"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
/**
 * [](#adding-bots-to-the-attachment-menu)Adding Bots to the Attachment Menu
 *
 * @see https://core.telegram.org/bots/webapps#events-available-for-mini-apps
 */
var EventType;
(function (EventType) {
    /**
     * `Bot API 8.0+` Occurs when the Mini App becomes active (e.g., opened from minimized state or selected among tabs).
     * _eventHandler_ receives no parameters.
     */
    EventType["activated"] = "activated";
    /**
     * `Bot API 8.0+` Occurs when the Mini App becomes inactive (e.g., minimized or moved to an inactive tab).
     * _eventHandler_ receives no parameters.
     */
    EventType["deactivated"] = "deactivated";
    /**
     * Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
     * _eventHandler_ receives no parameters, new theme settings and color scheme can be received via _this.themeParams_ and _this.colorScheme_ respectively.
     */
    EventType["themeChanged"] = "themeChanged";
    /**
     * Occurs when the visible section of the Mini App is changed.
     * _eventHandler_ receives an object with the single field _isStateStable_. If _isStateStable_ is true, the resizing of the Mini App is finished. If it is false, the resizing is ongoing (the user is expanding or collapsing the Mini App or an animated object is playing). The current value of the visible section’s height is available in _this.viewportHeight_.
     */
    EventType["viewportChanged"] = "viewportChanged";
    /**
     * `Bot API 8.0+` Occurs when the device's safe area insets change (e.g., due to orientation change or screen adjustments).
     * _eventHandler_ receives no parameters. The current inset values can be accessed via _this.safeAreaInset_.
     */
    EventType["safeAreaChanged"] = "safeAreaChanged";
    /**
     * `Bot API 8.0+` Occurs when the safe area for content changes (e.g., due to orientation change or screen adjustments).
     * _eventHandler_ receives no parameters. The current inset values can be accessed via _this.contentSafeAreaInset_.
     */
    EventType["contentSafeAreaChanged"] = "contentSafeAreaChanged";
    /**
     * Occurs when the [main button](#bottombutton) is pressed.
     * _eventHandler_ receives no parameters.
     */
    EventType["mainButtonClicked"] = "mainButtonClicked";
    /**
     * `Bot API 7.10+` Occurs when the [secondary button](#bottombutton) is pressed.
     * _eventHandler_ receives no parameters.
     */
    EventType["secondaryButtonClicked"] = "secondaryButtonClicked";
    /**
     * `Bot API 6.1+` Occurrs when the [back button](#backbutton) is pressed.
     * _eventHandler_ receives no parameters.
     */
    EventType["backButtonClicked"] = "backButtonClicked";
    /**
     * `Bot API 6.1+` Occurrs when the Settings item in context menu is pressed.
     * _eventHandler_ receives no parameters.
     */
    EventType["settingsButtonClicked"] = "settingsButtonClicked";
    /**
     * `Bot API 6.1+` Occurrs when the opened invoice is closed.
     * _eventHandler_ receives an object with the two fields: _url_ – invoice link provided and _status_ – one of the invoice statuses:
     * \- **paid** – invoice was paid successfully,
     * \- **cancelled** – user closed this invoice without paying,
     * \- **failed** – user tried to pay, but the payment was failed,
     * \- **pending** – the payment is still processing. The bot will receive a service message about a [successful payment](/bots/api#successfulpayment) when the payment is successfully paid.
     */
    EventType["invoiceClosed"] = "invoiceClosed";
    /**
     * `Bot API 6.2+` Occurrs when the opened popup is closed.
     * _eventHandler_ receives an object with the single field _button\_id_ – the value of the field _id_ of the pressed button. If no buttons were pressed, the field _button\_id_ will be _null_.
     */
    EventType["popupClosed"] = "popupClosed";
    /**
     * `Bot API 6.4+` Occurs when the QR code scanner catches a code with text data.
     * _eventHandler_ receives an object with the single field _data_ containing text data from the QR code.
     */
    EventType["qrTextReceived"] = "qrTextReceived";
    /**
     * `Bot API 7.7+` Occurs when the QR code scanner popup is closed by the user.
     * _eventHandler_ receives no parameters.
     */
    EventType["scanQrPopupClosed"] = "scanQrPopupClosed";
    /**
     * `Bot API 6.4+` Occurrs when the `readTextFromClipboard` method is called.
     * _eventHandler_ receives an object with the single field _data_ containing text data from the clipboard. If the clipboard contains non-text data, the field _data_ will be an empty string. If the Mini App has no access to the clipboard, the field _data_ will be _null_.
     */
    EventType["clipboardTextReceived"] = "clipboardTextReceived";
    /**
     * `Bot API 6.9+` Occurs when the write permission was requested.
     * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
     * \- **allowed** – user granted write permission to the bot,
     * \- **cancelled** – user declined this request.
     */
    EventType["writeAccessRequested"] = "writeAccessRequested";
    /**
     * `Bot API 6.9+` Occurrs when the user's phone number was requested.
     * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
     * \- **sent** – user shared their phone number with the bot,
     * \- **cancelled** – user declined this request.
     */
    EventType["contactRequested"] = "contactRequested";
    /**
     * `Bot API 7.2+` Occurs whenever BiometricManager object is changed.
     * _eventHandler_ receives no parameters.
     */
    EventType["biometricManagerUpdated"] = "biometricManagerUpdated";
    /**
     * `Bot API 7.2+` Occurs whenever biometric authentication was requested.
     * _eventHandler_ receives an object with the field _isAuthenticated_ containing a boolean indicating whether the user was authenticated successfully. If _isAuthenticated_ is true, the field _biometricToken_ will contain the biometric token stored in secure storage on the device.
     */
    EventType["biometricAuthRequested"] = "biometricAuthRequested";
    /**
     * `Bot API 7.2+` Occurs whenever the biometric token was updated.
     * _eventHandler_ receives an object with the single field _isUpdated_, containing a boolean indicating whether the token was updated.
     */
    EventType["biometricTokenUpdated"] = "biometricTokenUpdated";
    /**
     * `Bot API 8.0+` Occurs whenever the Mini App enters or exits fullscreen mode.
     * _eventHandler_ receives no parameters. The current fullscreen state can be checked via _this.isFullscreen_.
     */
    EventType["fullscreenChanged"] = "fullscreenChanged";
    /**
     * `Bot API 8.0+` Occurs if a request to enter fullscreen mode fails.
     * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
     * **UNSUPPORTED** – Fullscreen mode is not supported on this device or platform.
     * **ALREADY\_FULLSCREEN** – The Mini App is already in fullscreen mode.
     */
    EventType["fullscreenFailed"] = "fullscreenFailed";
    /**
     * `Bot API 8.0+` Occurs when the Mini App is successfully added to the home screen.
     * _eventHandler_ receives no parameters.
     */
    EventType["homeScreenAdded"] = "homeScreenAdded";
    /**
     * `Bot API 8.0+` Occurs after checking the home screen status.
     * _eventHandler_ receives an object with the field _status_, which is a string indicating the current home screen status. Possible values for _status_ are:
     * \- **unsupported** – the feature is not supported, and it is not possible to add the icon to the home screen,
     * \- **unknown** – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
     * \- **added** – the icon has already been added to the home screen,
     * \- **missed** – the icon has not been added to the home screen.
     */
    EventType["homeScreenChecked"] = "homeScreenChecked";
    /**
     * `Bot API 8.0+` Occurs when accelerometer tracking has started successfully.
     * _eventHandler_ receives no parameters.
     */
    EventType["accelerometerStarted"] = "accelerometerStarted";
    /**
     * `Bot API 8.0+` Occurs when accelerometer tracking has stopped.
     * _eventHandler_ receives no parameters.
     */
    EventType["accelerometerStopped"] = "accelerometerStopped";
    /**
     * `Bot API 8.0+` Occurs with the specified frequency after calling the `start` method, sending the current accelerometer data.
     * _eventHandler_ receives no parameters, the current acceleration values can be received via _this.x_, _this.y_ and _this.z_ respectively.
     */
    EventType["accelerometerChanged"] = "accelerometerChanged";
    /**
     * `Bot API 8.0+` Occurs if a request to start accelerometer tracking fails.
     * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
     * **UNSUPPORTED** – Accelerometer tracking is not supported on this device or platform.
     */
    EventType["accelerometerFailed"] = "accelerometerFailed";
    /**
     * `Bot API 8.0+` Occurs when device orientation tracking has started successfully.
     * _eventHandler_ receives no parameters.
     */
    EventType["deviceOrientationStarted"] = "deviceOrientationStarted";
    /**
     * `Bot API 8.0+` Occurs when device orientation tracking has stopped.
     * _eventHandler_ receives no parameters.
     */
    EventType["deviceOrientationStopped"] = "deviceOrientationStopped";
    /**
     * `Bot API 8.0+` Occurs with the specified frequency after calling the `start` method, sending the current orientation data.
     * _eventHandler_ receives no parameters, the current device orientation values can be received via _this.alpha_, _this.beta_ and _this.gamma_ respectively.
     */
    EventType["deviceOrientationChanged"] = "deviceOrientationChanged";
    /**
     * `Bot API 8.0+` Occurs if a request to start device orientation tracking fails.
     * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
     * **UNSUPPORTED** – Device orientation tracking is not supported on this device or platform.
     */
    EventType["deviceOrientationFailed"] = "deviceOrientationFailed";
    /**
     * `Bot API 8.0+` Occurs when gyroscope tracking has started successfully.
     * _eventHandler_ receives no parameters.
     */
    EventType["gyroscopeStarted"] = "gyroscopeStarted";
    /**
     * `Bot API 8.0+` Occurs when gyroscope tracking has stopped.
     * _eventHandler_ receives no parameters.
     */
    EventType["gyroscopeStopped"] = "gyroscopeStopped";
    /**
     * `Bot API 8.0+` Occurs with the specified frequency after calling the `start` method, sending the current gyroscope data.
     * _eventHandler_ receives no parameters, the current rotation rates can be received via _this.x_, _this.y_ and _this.z_ respectively.
     */
    EventType["gyroscopeChanged"] = "gyroscopeChanged";
    /**
     * `Bot API 8.0+` Occurs if a request to start gyroscope tracking fails.
     * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
     * **UNSUPPORTED** – Gyroscope tracking is not supported on this device or platform.
     */
    EventType["gyroscopeFailed"] = "gyroscopeFailed";
    /**
     * `Bot API 8.0+` Occurs whenever LocationManager object is changed.
     * _eventHandler_ receives no parameters.
     */
    EventType["locationManagerUpdated"] = "locationManagerUpdated";
    /**
     * `Bot API 8.0+` Occurs when location data is requested.
     * _eventHandler_ receives an object with the single field _locationData_ of type [LocationData](#locationdata), containing the current location information.
     */
    EventType["locationRequested"] = "locationRequested";
    /**
     * `Bot API 8.0+` Occurs when the message is successfully shared by the user.
     * _eventHandler_ receives no parameters.
     */
    EventType["shareMessageSent"] = "shareMessageSent";
    /**
     * `Bot API 8.0+` Occurs if sharing the message fails.
     * _eventHandler_ receives an object with the single field _error_, describing the reason for the failure. Possible values for _error_ are:
     * **UNSUPPORTED** – The feature is not supported by the client.
     * **MESSAGE\_EXPIRED** – The message could not be retrieved because it has expired.
     * **MESSAGE\_SEND\_FAILED** – An error occurred while attempting to send the message.
     * **USER\_DECLINED** – The user closed the dialog without sharing the message.
     * **UNKNOWN\_ERROR** – An unknown error occurred.
     */
    EventType["shareMessageFailed"] = "shareMessageFailed";
    /**
     * `Bot API 8.0+` Occurs when the emoji status is successfully set.
     * _eventHandler_ receives no parameters.
     */
    EventType["emojiStatusSet"] = "emojiStatusSet";
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
    EventType["emojiStatusFailed"] = "emojiStatusFailed";
    /**
     * `Bot API 8.0+` Occurs when the write permission was requested.
     * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
     * \- **allowed** – user granted emoji status permission to the bot,
     * \- **cancelled** – user declined this request.
     */
    EventType["emojiStatusAccessRequested"] = "emojiStatusAccessRequested";
    /**
     * `Bot API 8.0+` Occurs when the user responds to the file download request.
     * _eventHandler_ receives an object with the single field _status_ containing one of the statuses:
     * \- **downloading** – the file download has started,
     * \- **cancelled** – user declined this request.
     */
    EventType["fileDownloadRequested"] = "fileDownloadRequested";
})(EventType || (exports.EventType = EventType = {}));
//# sourceMappingURL=index.js.map