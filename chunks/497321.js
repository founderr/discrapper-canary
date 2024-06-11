"use strict";
n.r(t), n("47120");
var i, r = n("735250"),
  s = n("470079"),
  a = n("120356"),
  l = n.n(a),
  o = n("481060"),
  u = n("37234"),
  c = n("230711"),
  d = n("981631"),
  f = n("689938"),
  E = n("662090");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends(i = s.Component) {
  render() {
    return (0, r.jsxs)("div", {
      className: E.streamerModeEnabled,
      children: [(0, r.jsx)("div", {
        className: E.streamerModeEnabledImage
      }), (0, r.jsx)(o.Clickable, {
        className: l()(E.streamerModeEnabledBtn, {
          [E.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleClick", () => {
      !this.props.disableButton && ((0, u.pushLayer)(d.Layers.USER_SETTINGS), c.default.setSection(d.UserSettingsSections.STREAMER_MODE))
    })
  }
}
p(h, "defaultProps", {
  disableButton: !1
}), t.default = h