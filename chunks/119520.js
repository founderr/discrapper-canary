n(47120);
var s = n(735250),
  i = n(470079),
  l = n(558381),
  a = n(499371),
  r = n(689938),
  o = n(670120);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends i.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, s.jsx)("div", {
      className: o.matureListing,
      children: (0, s.jsx)(a.Z, {
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: r.Z.Messages.MATURE_LISTING_TITLE.format({
          name: e
        }),
        description: r.Z.Messages.MATURE_LISTING_DESCRIPTION,
        agreement: r.Z.Messages.MATURE_LISTING_ACCEPT,
        disagreement: r.Z.Messages.MATURE_LISTING_DECLINE
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "handleDisagree", () => {
      (0, l.M9)()
    }), c(this, "handleAgree", () => {
      (0, l.cj)()
    })
  }
}
t.Z = u