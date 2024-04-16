"use strict";
i.r(t), i("47120");
var n, r = i("735250"),
  s = i("470079"),
  a = i("120356"),
  l = i.n(a),
  o = i("481060"),
  c = i("37234"),
  u = i("230711"),
  d = i("981631"),
  f = i("689938"),
  p = i("130168");

function C(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
class m extends(n = s.Component) {
  render() {
    return (0, r.jsxs)("div", {
      className: p.streamerModeEnabled,
      children: [(0, r.jsx)("div", {
        className: p.streamerModeEnabledImage
      }), (0, r.jsx)(o.Clickable, {
        className: l()(p.streamerModeEnabledBtn, {
          [p.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: f.default.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), C(this, "handleClick", () => {
      !this.props.disableButton && ((0, c.pushLayer)(d.Layers.USER_SETTINGS), u.default.setSection(d.UserSettingsSections.STREAMER_MODE))
    })
  }
}
C(m, "defaultProps", {
  disableButton: !1
}), t.default = m