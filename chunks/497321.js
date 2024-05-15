"use strict";
a.r(t), a("47120");
var n, r = a("735250"),
  i = a("470079"),
  s = a("120356"),
  l = a.n(s),
  o = a("481060"),
  d = a("37234"),
  c = a("230711"),
  u = a("981631"),
  f = a("689938"),
  m = a("662090");

function h(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class E extends(n = i.Component) {
  render() {
    return (0, r.jsxs)("div", {
      className: m.streamerModeEnabled,
      children: [(0, r.jsx)("div", {
        className: m.streamerModeEnabledImage
      }), (0, r.jsx)(o.Clickable, {
        className: l()(m.streamerModeEnabledBtn, {
          [m.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleClick", () => {
      !this.props.disableButton && ((0, d.pushLayer)(u.Layers.USER_SETTINGS), c.default.setSection(u.UserSettingsSections.STREAMER_MODE))
    })
  }
}
h(E, "defaultProps", {
  disableButton: !1
}), t.default = E