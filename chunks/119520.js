t(47120);
var n = t(735250),
  r = t(470079),
  i = t(558381),
  a = t(499371),
  l = t(689938),
  o = t(670120);

function c(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class u extends r.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, n.jsx)("div", {
      className: o.matureListing,
      children: (0, n.jsx)(a.Z, {
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: l.Z.Messages.MATURE_LISTING_TITLE.format({
          name: e
        }),
        description: l.Z.Messages.MATURE_LISTING_DESCRIPTION,
        agreement: l.Z.Messages.MATURE_LISTING_ACCEPT,
        disagreement: l.Z.Messages.MATURE_LISTING_DECLINE
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "handleDisagree", () => {
      (0, i.M9)()
    }), c(this, "handleAgree", () => {
      (0, i.cj)()
    })
  }
}
s.Z = u