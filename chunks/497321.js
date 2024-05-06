"use strict";
n.r(t), n("47120");
var a, r = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  o = n("481060"),
  c = n("37234"),
  d = n("230711"),
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
class p extends(a = s.Component) {
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
      !this.props.disableButton && ((0, c.pushLayer)(u.Layers.USER_SETTINGS), d.default.setSection(u.UserSettingsSections.STREAMER_MODE))
    })
  }
}
h(p, "defaultProps", {
  disableButton: !1
}), t.default = p