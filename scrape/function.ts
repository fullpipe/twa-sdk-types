export const FunctionSigs: {
  [key: string]: {
    [key: string]: {
      args: string[];
      return?: string;
      full?: string;
    };
  };
} = {
  WebApp: {
    isVersionAtLeast: {
      args: ['string'],
      return: 'boolean',
    },
    setHeaderColor: {
      args: ['`#${string}`|"bg_color"|"secondary_bg_color"'],
    },
    setBackgroundColor: {
      args: ['`#${string}`|"bg_color"|"secondary_bg_color"'],
    },
    setBottomBarColor: {
      args: [
        '`#${string}`|"bg_color"|"secondary_bg_color"|"bottom_bar_bg_color"',
      ],
    },
    checkHomeScreenStatus: {
      args: [
        "(status: 'unsupported' | 'unknown' | 'added' | 'missed') => void",
      ],
    },
    onEvent: {
      full: `onEvent<T extends keyof EventCallbacks>(eventType: T, eventHandler: EventCallbacks[T]): void`,
      args: [],
    },
    offEvent: {
      full: `offEvent<T extends keyof EventCallbacks>(eventType: T, eventHandler: EventCallbacks[T]): void`,
      args: [],
    },
    sendData: {
      args: ['ArrayBuffer'],
    },
    switchInlineQuery: {
      args: ['string', '"users"|"bots"|"groups"|"channels"'],
    },
    openLink: {
      args: ['string', '{try_instant_view: boolean}'],
    },
    openTelegramLink: {
      args: ['string'],
    },
    openInvoice: {
      args: [
        'string',
        '(status: "paid"|"cancelled"|"failed"|"pending") => void',
      ],
    },
    shareToStory: {
      args: ['string', 'StoryShareParams'],
    },
    shareMessage: {
      args: ['string', '(sent: boolean) => void'],
    },

    setEmojiStatus: {
      args: ['string', 'EmojiStatusParams', '(success: boolean) => void'],
    },
    requestEmojiStatusAccess: {
      args: ['(granted: boolean) => void'],
    },
    downloadFile: {
      args: ['DownloadFileParams', '(granted: boolean) => void'],
    },
    showPopup: {
      args: ['PopupParams', '(id: string) => void'],
    },
    showAlert: {
      args: ['string', '() => void'],
    },
    showConfirm: {
      args: ['string', '(ok: boolean) => void'],
    },
    showScanQrPopup: {
      args: ['ScanQrPopupParams', '(text: string) => boolean'],
    },
    readTextFromClipboard: {
      args: ['(text: string) => void'],
    },
    requestWriteAccess: {
      args: ['(granted: boolean) => void'],
    },
    requestContact: {
      args: ['(granted: boolean) => void'],
    },
  },
  BackButton: {
    onClick: { args: ['() => void'] },
    offClick: { args: ['() => void'] },
  },
  BottomButton: {
    setText: { args: ['string'] },
    onClick: { args: ['() => void'] },
    offClick: { args: ['() => void'] },
    showProgress: { args: ['boolean'] },
    setParams: {
      args: [
        "{text: string;color: `#${string}`;text_color: `#${string}`;has_shine_effect: boolean;position: 'left' | 'right' | 'top' | 'bottom';is_active: boolean;is_visible: boolean;}",
      ],
    },
  },
  SettingsButton: {
    onClick: { args: ['() => void'] },
    offClick: { args: ['() => void'] },
  },
  HapticFeedback: {
    impactOccurred: { args: ['"light"|"medium"|"heavy"|"rigid"|"soft"'] },
    notificationOccurred: { args: ['"error"|"success"|"warning"'] },
  },
  CloudStorage: {
    setItem: {
      args: [
        'string',
        'string',
        '(err: Error | null, success: boolean) => void',
      ],
    },

    getItem: {
      args: ['string', '(err: Error | null, value: string) => void'],
    },
    getItems: {
      args: ['string[]', '(err: Error | null, values: string[]) => void'],
    },
    removeItem: {
      args: ['string', '(err: Error | null, success: boolean) => void'],
    },
    removeItems: {
      args: ['string[]', '(err: Error | null, success: boolean) => void'],
    },
    getKeys: {
      args: ['(err: Error | null, keys: string[]) => void'],
    },
  },
  BiometricManager: {
    init: {
      args: ['() => void'],
    },
    requestAccess: {
      args: ['BiometricRequestAccessParams', '(granted: boolean) => void'],
    },
    authenticate: {
      args: [
        'BiometricAuthenticateParams',
        '(authenticated: boolean, token?: string) => void',
      ],
    },
    updateBiometricToken: {
      args: ['string', '(updated: boolean) => void'],
    },
  },
  Accelerometer: {
    start: {
      args: ['AccelerometerStartParams', '(started: boolean) => void'],
    },
    stop: {
      args: ['(stoped: boolean) => void'],
    },
  },
  DeviceOrientation: {
    start: {
      args: ['DeviceOrientationStartParams', '(started: boolean) => void'],
    },
    stop: {
      args: ['(stoped: boolean) => void'],
    },
  },
  Gyroscope: {
    start: {
      args: ['GyroscopeStartParams', '(started: boolean) => void'],
    },
    stop: {
      args: ['(stoped: boolean) => void'],
    },
  },
  LocationManager: {
    init: {
      args: ['() => void'],
    },
    getLocation: {
      args: ['(location: LocationData | null) => void'],
    },
  },
  DeviceStorage: {
    setItem: {
      args: [
        'string',
        'string',
        '(err: Error | null, success: boolean) => void',
      ],
    },
    getItem: {
      args: ['string', '(err: Error | null, value: string) => void'],
    },
    removeItem: {
      args: ['string', '(err: Error | null, success: boolean) => void'],
    },
    clear: {
      args: ['(err: Error | null, success: boolean) => void'],
    },
  },
  SecureStorage: {
    setItem: {
      args: [
        'string',
        'string',
        '(err: Error | null, success: boolean) => void',
      ],
    },
    getItem: {
      args: ['string', '(err: Error | null, value: string) => void'],
    },
    restoreItem: {
      args: ['string', '(err: Error | null, value?: string) => void'],
    },
    removeItem: {
      args: ['string', '(err: Error | null, success: boolean) => void'],
    },
    clear: {
      args: ['(err: Error | null, success: boolean) => void'],
    },
  },
};

type f = (status: 'unsupported' | 'unknown' | 'added' | 'missed') => void;
type ButtonParams = {
  text: string;
  color: `#${string}`;
  text_color: `#${string}`;
  has_shine_effect: boolean;
  position: 'left' | 'right' | 'top' | 'bottom';
  is_active: boolean;
  is_visible: boolean;
};

export function parseFunctionSig(str: string): Func {
  // @see https://regex101.com/r/a27nUQ/1
  const regex =
    /(?<name>\w+)\((?:(?:(?<r1>\w+)(?:\,\s?(?<r2>\w+))?)?(?:\,\s?)?(?:\[(?:\,\s?)?(?<o1>\w+)(?:\,\s?(?<o2>\w+))?\])?)?\)/gm;

  const g = regex.exec(str)?.groups!;
  const res = { name: g.name, args: [] } as Func;

  if (g.r1) {
    res.args.push({
      name: g.r1,
      optional: false,
    });
  }
  if (g.r2) {
    res.args.push({
      name: g.r2,
      optional: false,
    });
  }
  if (g.o1) {
    res.args.push({
      name: g.o1,
      optional: true,
    });
  }
  if (g.o2) {
    res.args.push({
      name: g.o2,
      optional: true,
    });
  }

  return res;
}

type Func = {
  name: string;
  args: {
    name: string;
    optional: boolean;
  }[];
};
