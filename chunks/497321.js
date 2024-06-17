"use strict";
s.r(t), s("47120");
var r, n = s("735250"),
  i = s("470079"),
  a = s("120356"),
  l = s.n(a),
  o = s("481060"),
  c = s("37234"),
  u = s("230711"),
  d = s("981631"),
  f = s("689938"),
  p = s("662090");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class v extends(r = i.Component) {
  render() {
    return (0, n.jsxs)("div", {
      className: p.streamerModeEnabled,
      children: [(0, n.jsx)("div", {
        className: p.streamerModeEnabledImage
      }), (0, n.jsx)(o.Clickable, {
        className: l()(p.streamerModeEnabledBtn, {
          [p.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "handleClick", () => {
      !this.props.disableButton && ((0, c.pushLayer)(d.Layers.USER_SETTINGS), u.default.setSection(d.UserSettingsSections.STREAMER_MODE))
    })
  }
}
g(v, "defaultProps", {
  disableButton: !1
}), t.default = v