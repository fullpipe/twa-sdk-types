export const EventCallbackArgs: {
  [key: string]: string;
} = {
  viewportChanged: '{isStateStable: boolean}',
  invoiceClosed: '{url: string, status: "paid"|"cancelled"|"failed"|"pending"}',
  popupClosed: '{button_id: string}',
  qrTextReceived: '{data: string}',
  clipboardTextReceived: '{data: string | null}',
  writeAccessRequested: '{status: "allowed"|"cancelled"}',
  contactRequested: '{status: "sent"|"cancelled"}',
  biometricAuthRequested: '{isAuthenticated: boolean, biometricToken?: string}',
  biometricTokenUpdated: '{isUpdated: boolean}',
  fullscreenFailed: '{error: "UNSUPPORTED"|"ALREADY_FULLSCREEN"}',
  homeScreenChecked: '{status: "unsupported"|"unknown"|"added"|"missed"}',
  accelerometerFailed: '{error: "UNSUPPORTED"}',
  deviceOrientationFailed: '{error: "UNSUPPORTED"}',
  gyroscopeFailed: '{error: "UNSUPPORTED"}',
  locationRequested: '{locationData: LocationData}',
  shareMessageFailed:
    '{error: "UNSUPPORTED"|"MESSAGE_EXPIRED"|"MESSAGE_SEND_FAILED"|"USER_DECLINED"|"UNKNOWN_ERROR"}',
  emojiStatusFailed:
    '{error: "UNSUPPORTED"|"SUGGESTED_EMOJI_INVALID"|"DURATION_INVALID"|"USER_DECLINED"|"SERVER_ERROR"|"UNKNOWN_ERROR"}',

  emojiStatusAccessRequested: '{status: "allowed"|"cancelled"}',
  fileDownloadRequested: '{status: "downloading"|"cancelled"}',
};
