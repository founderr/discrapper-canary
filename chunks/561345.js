"use strict";
a.r(t), a("47120");
var n = a("317770"),
  s = a("238514"),
  l = a("210887"),
  i = a("695346"),
  r = a("581883"),
  o = a("238302"),
  u = a("47760"),
  d = a("469115");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class f extends n.default {
  _initialize() {
    r.default.addChangeListener(this._updateClientTheme), l.default.addChangeListener(this._updateClientTheme)
  }
  _terminate() {
    r.default.removeChangeListener(this._updateClientTheme), l.default.removeChangeListener(this._updateClientTheme)
  }
  constructor(...e) {
    super(...e), c(this, "_currentBackgroundGradientPresetId", void 0), c(this, "_updateBackgroundGradientPresetId", e => {
      if (this._currentBackgroundGradientPresetId !== e) {
        if (null == e) {
          (0, o.resetBackgroundGradientPreset)(), this._currentBackgroundGradientPresetId = void 0;
          return
        }(0, o.updateBackgroundGradientPreset)(e), this._currentBackgroundGradientPresetId = e
      }
    }), c(this, "_updateClientTheme", () => {
      var e, t, a;
      let n = s.default.shouldSync("appearance") ? i.ClientThemeSettings.getSetting().backgroundGradientPresetId : null === (t = s.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
      if (null != n && (null === (a = d.BACKGROUND_GRADIENT_PRESETS_MAP[n]) || void 0 === a ? void 0 : a.theme) !== l.default.theme) {
        let e = d.BACKGROUND_GRADIENT_PRESETS_MAP[n];
        if (!(0, u.areThemesEqualForGradientThemes)(e.theme, l.default.theme)) {
          this._updateBackgroundGradientPresetId(void 0);
          return
        }
      }
      this._updateBackgroundGradientPresetId(n)
    })
  }
}
t.default = new f