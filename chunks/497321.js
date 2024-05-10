"use strict";
n.r(t), n("47120");
var i, s = n("735250"),
  r = n("470079"),
  a = n("120356"),
  l = n.n(a),
  u = n("481060"),
  o = n("37234"),
  d = n("230711"),
  c = n("981631"),
  f = n("689938"),
  _ = n("662090");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends(i = r.Component) {
  render() {
    return (0, s.jsxs)("div", {
      className: _.streamerModeEnabled,
      children: [(0, s.jsx)("div", {
        className: _.streamerModeEnabledImage
      }), (0, s.jsx)(u.Clickable, {
        className: l()(_.streamerModeEnabledBtn, {
          [_.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleClick", () => {
      !this.props.disableButton && ((0, o.pushLayer)(c.Layers.USER_SETTINGS), d.default.setSection(c.UserSettingsSections.STREAMER_MODE))
    })
  }
}
E(p, "defaultProps", {
  disableButton: !1
}), t.default = p