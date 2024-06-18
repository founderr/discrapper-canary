"use strict";
n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(37234),
  _ = n(230711),
  c = n(981631),
  d = n(689938),
  E = n(662090);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends(i = s.Component) {
  render() {
    return (0, r.jsxs)("div", {
      className: E.streamerModeEnabled,
      children: [(0, r.jsx)("div", {
        className: E.streamerModeEnabledImage
      }), (0, r.jsx)(l.Clickable, {
        className: a()(E.streamerModeEnabledBtn, {
          [E.disabled]: this.props.disableButton
        }),
        onClick: this.handleClick,
        children: d.Z.Messages.STREAMER_MODE_ENABLED
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "handleClick", () => {
      !this.props.disableButton && ((0, u.jN)(c.S9g.USER_SETTINGS), _.Z.setSection(c.oAB.STREAMER_MODE))
    })
  }
}
I(T, "defaultProps", {
  disableButton: !1
}), t.Z = T