"use strict";
n.r(t), n("47120");
var r, i = n("735250"),
  s = n("470079"),
  a = n("120356"),
  l = n.n(a),
  u = n("481060"),
  o = n("37234"),
  d = n("230711"),
  c = n("981631"),
  f = n("689938"),
  E = n("130168");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends(r = s.Component) {
  render() {
    return (0, i.jsxs)("div", {
      className: E.streamerModeEnabled,
      children: [(0, i.jsx)("div", {
        className: E.streamerModeEnabledImage
      }), (0, i.jsx)(u.Clickable, {
        className: l()(E.streamerModeEnabledBtn, {
          [E.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "handleClick", () => {
      !this.props.disableButton && ((0, o.pushLayer)(c.Layers.USER_SETTINGS), d.default.setSection(c.UserSettingsSections.STREAMER_MODE))
    })
  }
}
_(p, "defaultProps", {
  disableButton: !1
}), t.default = p