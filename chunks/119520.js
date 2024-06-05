"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("558381"),
  l = s("499371"),
  i = s("689938"),
  u = s("424330");

function o(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class d extends a.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, n.jsx)("div", {
      className: u.matureListing,
      children: (0, n.jsx)(l.default, {
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: i.default.Messages.MATURE_LISTING_TITLE.format({
          name: e
        }),
        description: i.default.Messages.MATURE_LISTING_DESCRIPTION,
        agreement: i.default.Messages.MATURE_LISTING_ACCEPT,
        disagreement: i.default.Messages.MATURE_LISTING_DECLINE
      })
    })
  }
  constructor(...e) {
    super(...e), o(this, "handleDisagree", () => {
      (0, r.matureDisagree)()
    }), o(this, "handleAgree", () => {
      (0, r.matureAgree)()
    })
  }
}
t.default = d