"use strict";
r.r(t), r("47120");
var s, n = r("735250"),
  l = r("470079"),
  i = r("120356"),
  a = r.n(i),
  o = r("481060"),
  c = r("37234"),
  u = r("230711"),
  d = r("981631"),
  f = r("689938"),
  p = r("662090");

function h(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
class g extends(s = l.Component) {
  render() {
    return (0, n.jsxs)("div", {
      className: p.streamerModeEnabled,
      children: [(0, n.jsx)("div", {
        className: p.streamerModeEnabledImage
      }), (0, n.jsx)(o.Clickable, {
        className: a()(p.streamerModeEnabledBtn, {
          [p.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleClick", () => {
      !this.props.disableButton && ((0, c.pushLayer)(d.Layers.USER_SETTINGS), u.default.setSection(d.UserSettingsSections.STREAMER_MODE))
    })
  }
}
h(g, "defaultProps", {
  disableButton: !1
}), t.default = g