"use strict";
let i, r;
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var s = n("35092"),
  a = n("151426"),
  o = n("913144"),
  l = n("10641"),
  u = n("737292"),
  c = n("161778"),
  d = n("233069"),
  p = n("42203"),
  h = n("697218"),
  f = n("719923"),
  E = n("158998"),
  _ = n("253539"),
  m = n("941719");
let S = !1,
  g = !0,
  T = !1;

function I() {
  S = !0
}

function v() {
  g && (i = void 0), T = !1, S = !1
}
let C = () => {
    g = !f.default.canUseClientThemes(h.default.getCurrentUser())
  },
  A = () => {
    var e, t;
    let n = null === (t = u.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
    null != n && (i = m.BACKGROUND_GRADIENT_PRESETS_MAP[n])
  };
class R extends s.default.PersistedStore {
  initialize(e) {
    null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? m.BACKGROUND_GRADIENT_PRESETS_MAP[e.gradientPresetId] : void 0), this.waitFor(h.default, c.default, p.default, u.default), this.syncWith([h.default], C), this.syncWith([u.default], A)
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
    return null == this.gradientPreset ? null : (0, _.getLinearGradientForBackgroundGradient)(this.gradientPreset)
  }
  get isEditorOpen() {
    return S
  }
  get isPreview() {
    return g
  }
  get isCoachmark() {
    return T
  }
  get mobilePendingThemeIndex() {
    return r
  }
  constructor(...e) {
    super(...e), this.migrations = [e => {
      var t;
      return {
        gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
      }
    }]
  }
}
R.displayName = "ClientThemesBackgroundStore", R.persistKey = "ClientThemesBackgroundStore";
var N = new R(o.default, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      i = void 0;
      return
    }
    i = m.BACKGROUND_GRADIENT_PRESETS_MAP[t]
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
      S = !0
    })()
  },
  CLIENT_THEMES_EDITOR_CLOSE: e => {
    v()
  },
  RESET_PREVIEW_CLIENT_THEME: e => {
    i = void 0
  },
  CHANNEL_SELECT: e => {
    let {
      channelId: t,
      guildId: n
    } = e, i = h.default.getCurrentUser();
    if (null == t || null == n || (0, l.isDismissibleContentDismissed)(a.DismissibleContent.CLIENT_THEMES_COACHMARK) || !(0, E.ageEligibleForPremiumUpsell)(i)) return;
    let r = p.default.getChannel(t);
    null != r && (0, d.isGuildTextChannelType)(r.type) && (T = !0, function() {
      S = !0
    }())
  },
  LOGOUT: e => {
    v()
  }
})