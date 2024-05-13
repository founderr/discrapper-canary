"use strict";
n.r(t), n("47120");
var r, i = n("735250"),
  s = n("470079"),
  l = n("120356"),
  a = n.n(l),
  u = n("481060"),
  o = n("37234"),
  d = n("230711"),
  c = n("981631"),
  _ = n("689938"),
  f = n("662090");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends(r = s.Component) {
  render() {
    return (0, i.jsxs)("div", {
      className: f.streamerModeEnabled,
      children: [(0, i.jsx)("div", {
        className: f.streamerModeEnabledImage
      }), (0, i.jsx)(u.Clickable, {
        className: a()(f.streamerModeEnabledBtn, {
          [f.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: _.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleClick", () => {
      !this.props.disableButton && ((0, o.pushLayer)(c.Layers.USER_SETTINGS), d.default.setSection(c.UserSettingsSections.STREAMER_MODE))
    })
  }
}
p(E, "defaultProps", {
  disableButton: !1
}), t.default = E