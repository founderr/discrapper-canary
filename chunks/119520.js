"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("558381"),
  l = s("499371"),
  n = s("689938"),
  o = s("254430");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class d extends i.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, a.jsx)("div", {
      className: o.matureListing,
      children: (0, a.jsx)(l.default, {
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: n.default.Messages.MATURE_LISTING_TITLE.format({
          name: e
        }),
        description: n.default.Messages.MATURE_LISTING_DESCRIPTION,
        agreement: n.default.Messages.MATURE_LISTING_ACCEPT,
        disagreement: n.default.Messages.MATURE_LISTING_DECLINE
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "handleDisagree", () => {
      (0, r.matureDisagree)()
    }), u(this, "handleAgree", () => {
      (0, r.matureAgree)()
    })
  }
}
t.default = d