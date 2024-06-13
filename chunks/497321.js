"use strict";
s.r(t), s("47120");
var n, r = s("735250"),
  a = s("470079"),
  u = s("120356"),
  i = s.n(u),
  l = s("481060"),
  E = s("37234"),
  c = s("230711"),
  o = s("981631"),
  _ = s("689938"),
  d = s("662090");

function T(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class I extends(n = a.Component) {
  render() {
    return (0, r.jsxs)("div", {
      className: d.streamerModeEnabled,
      children: [(0, r.jsx)("div", {
        className: d.streamerModeEnabledImage
      }), (0, r.jsx)(l.Clickable, {
        className: i()(d.streamerModeEnabledBtn, {
          [d.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: _.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), T(this, "handleClick", () => {
      !this.props.disableButton && ((0, E.pushLayer)(o.Layers.USER_SETTINGS), c.default.setSection(o.UserSettingsSections.STREAMER_MODE))
    })
  }
}
T(I, "defaultProps", {
  disableButton: !1
}), t.default = I