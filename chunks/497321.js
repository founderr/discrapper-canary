"use strict";
n.r(t), n("47120");
var r, i = n("735250"),
  s = n("470079"),
  a = n("803997"),
  l = n.n(a),
  u = n("481060"),
  o = n("37234"),
  c = n("230711"),
  d = n("981631"),
  f = n("689938"),
  p = n("130168");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends(r = s.Component) {
  render() {
    return (0, i.jsxs)("div", {
      className: p.streamerModeEnabled,
      children: [(0, i.jsx)("div", {
        className: p.streamerModeEnabledImage
      }), (0, i.jsx)(u.Clickable, {
        className: l()(p.streamerModeEnabledBtn, {
          [p.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleClick", () => {
      !this.props.disableButton && ((0, o.pushLayer)(d.Layers.USER_SETTINGS), c.default.setSection(d.UserSettingsSections.STREAMER_MODE))
    })
  }
}
E(h, "defaultProps", {
  disableButton: !1
}), t.default = h