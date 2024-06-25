"use strict";
let i, r;
n(47120);
var s, o = n(442837),
  a = n(704215),
  l = n(570140),
  u = n(605236),
  _ = n(238514),
  c = n(781391),
  d = n(210887),
  E = n(740492),
  I = n(695346),
  T = n(581883),
  h = n(131704),
  f = n(592125),
  S = n(594174),
  A = n(74538),
  N = n(51144),
  m = n(47760),
  O = n(469115),
  p = n(874893);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = !1,
  C = !0,
  v = !1;

function L() {
  g = !0
}

function D() {
  C && (i = void 0), v = !1, g = !1
}
let M = () => {
    C = !A.ZP.canUseClientThemes(S.default.getCurrentUser())
  },
  P = () => {
    let e = I.L1.getSetting().backgroundGradientPresetId;
    if (_.Z.shouldSync("appearance")) {
      if (null == e) {
        null != i && (i = void 0);
        return
      }
      i = O.qt[e]
    }
  },
  y = () => {
    if (!_.Z.shouldSync("appearance")) return;
    let e = I.L1.getSetting().backgroundGradientPresetId;
    if (E.ZP.useSystemTheme === p.K.ON && null != e && (0, c.hi)(p.K.OFF), null == e) {
      null != i && (i = void 0);
      return
    }
    let t = O.qt[e],
      n = (null == i ? void 0 : i.id) === (null == t ? void 0 : t.id);
    if (null != t && !n) i = t
  };
class U extends(s = o.ZP.PersistedStore) {
  initialize(e) {
    null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? O.qt[e.gradientPresetId] : void 0), this.waitFor(S.default, d.Z, f.Z, _.Z, T.Z), this.syncWith([S.default], M), this.syncWith([_.Z], P), this.syncWith([T.Z], y)
  }
  getState() {
    return C ? {} : {
      gradientPresetId: null == i ? void 0 : i.id
    }
  }
  get gradientPreset() {
    return i
  }
  getLinearGradient() {
    return null == this.gradientPreset ? null : (0, m.VK)(this.gradientPreset)
  }
  get isEditorOpen() {
    return g
  }
  get isPreview() {
    return C
  }
  get isCoachmark() {
    return v
  }
  get mobilePendingThemeIndex() {
    return r
  }
  constructor(...e) {
    super(...e), R(this, "migrations", [e => {
      var t;
      return {
        gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
      }
    }])
  }
}
R(U, "displayName", "ClientThemesBackgroundStore"), R(U, "persistKey", "ClientThemesBackgroundStore"), t.Z = new U(l.Z, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      i = void 0;
      return
    }
    i = O.qt[t]
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
      g = !0
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
    } = e, i = S.default.getCurrentUser();
    if (null == t || null == n || (0, u.un)(a.z.CLIENT_THEMES_COACHMARK) || !(0, N.Fc)(i)) return;
    let r = f.Z.getChannel(t);
    null != r && (0, h.zi)(r.type) && (v = !0, function() {
      g = !0
    }())
  },
  LOGOUT: e => {
    D()
  }
})