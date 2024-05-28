"use strict";
let i, r;
n.r(t), n("47120");
var s, a = n("442837"),
  o = n("524437"),
  l = n("570140"),
  u = n("605236"),
  d = n("238514"),
  _ = n("781391"),
  c = n("210887"),
  E = n("740492"),
  I = n("695346"),
  T = n("581883"),
  f = n("131704"),
  S = n("592125"),
  h = n("594174"),
  A = n("74538"),
  m = n("51144"),
  N = n("47760"),
  p = n("469115"),
  O = n("874893");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = !1,
  g = !0,
  L = !1;

function v() {
  R = !0
}

function D() {
  g && (i = void 0), L = !1, R = !1
}
let M = () => {
    g = !A.default.canUseClientThemes(h.default.getCurrentUser())
  },
  y = () => {
    let e = I.ClientThemeSettings.getSetting().backgroundGradientPresetId;
    if (d.default.shouldSync("appearance")) {
      if (null == e) {
        null != i && (i = void 0);
        return
      }
      i = p.BACKGROUND_GRADIENT_PRESETS_MAP[e]
    }
  },
  P = () => {
    if (!d.default.shouldSync("appearance")) return;
    let e = I.ClientThemeSettings.getSetting().backgroundGradientPresetId;
    if (E.default.useSystemTheme === O.SystemThemeState.ON && null != e && (0, _.setUseSystemTheme)(O.SystemThemeState.OFF), null == e) {
      null != i && (i = void 0);
      return
    }
    let t = p.BACKGROUND_GRADIENT_PRESETS_MAP[e],
      n = (null == i ? void 0 : i.id) === (null == t ? void 0 : t.id);
    null != t && !n && (i = t)
  };
class U extends(s = a.default.PersistedStore) {
  initialize(e) {
    null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? p.BACKGROUND_GRADIENT_PRESETS_MAP[e.gradientPresetId] : void 0), this.waitFor(h.default, c.default, S.default, d.default, T.default), this.syncWith([h.default], M), this.syncWith([d.default], y), this.syncWith([T.default], P)
  }
  getState() {
    return g ? {} : {
      gradientPresetId: null == i ? void 0 : i.id
    }
  }
  get gradientPreset() {
    return i
  }
  getLinearGradient() {
    return null == this.gradientPreset ? null : (0, N.getLinearGradientForBackgroundGradient)(this.gradientPreset)
  }
  get isEditorOpen() {
    return R
  }
  get isPreview() {
    return g
  }
  get isCoachmark() {
    return L
  }
  get mobilePendingThemeIndex() {
    return r
  }
  constructor(...e) {
    super(...e), C(this, "migrations", [e => {
      var t;
      return {
        gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
      }
    }])
  }
}
C(U, "displayName", "ClientThemesBackgroundStore"), C(U, "persistKey", "ClientThemesBackgroundStore"), t.default = new U(l.default, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      i = void 0;
      return
    }
    i = p.BACKGROUND_GRADIENT_PRESETS_MAP[t]
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: e => {
    let {
      mobileThemesIndex: t
    } = e;
    if (null == t) {
      r = void 0;
      return
    }
    r = t
  },
  CLIENT_THEMES_EDITOR_OPEN: e => {
    (function() {
      R = !0
    })()
  },
  CLIENT_THEMES_EDITOR_CLOSE: e => {
    D()
  },
  RESET_PREVIEW_CLIENT_THEME: e => {
    i = void 0
  },
  CHANNEL_SELECT: e => {
    let {
      channelId: t,
      guildId: n
    } = e, i = h.default.getCurrentUser();
    if (null == t || null == n || (0, u.isDismissibleContentDismissed)(o.DismissibleContent.CLIENT_THEMES_COACHMARK) || !(0, m.ageEligibleForPremiumUpsell)(i)) return;
    let r = S.default.getChannel(t);
    null != r && (0, f.isGuildTextChannelType)(r.type) && (L = !0, function() {
      R = !0
    }())
  },
  LOGOUT: e => {
    D()
  }
})