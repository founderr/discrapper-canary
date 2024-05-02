"use strict";
n.r(t), n("47120");
var a, i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  l = n.n(s),
  o = n("481060"),
  d = n("37234"),
  c = n("230711"),
  u = n("981631"),
  f = n("689938"),
  m = n("208926");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends(a = r.Component) {
  render() {
    return (0, i.jsxs)("div", {
      className: m.streamerModeEnabled,
      children: [(0, i.jsx)("div", {
        className: m.streamerModeEnabledImage
      }), (0, i.jsx)(o.Clickable, {
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