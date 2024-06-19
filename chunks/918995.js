n.r(s), n(47120);
var t = n(735250),
  l = n(470079),
  a = n(481060),
  o = n(233787),
  r = n(689938);

function c(e, s, n) {
  return s in e ? Object.defineProperty(e, s, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = n, e
}
class i extends l.Component {
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, t.jsxs)(o.Z, {
      transitionState: e,
      "aria-label": r.Z.Messages.PREMIUM_NOT_CLAIMED,
      children: [(0, t.jsx)(o.Z.Header, {
        children: r.Z.Messages.PREMIUM_NOT_CLAIMED
      }), (0, t.jsx)(o.Z.Content, {
        type: o.Z.Types.UNCLAIMED,
        children: r.Z.Messages.PREMIUM_NOT_CLAIMED_BODY
      }), (0, t.jsx)(o.Z.Footer, {
        secondary: {
          onClick: this.cancel,
          label: r.Z.Messages.NEVERMIND
        },
        primary: {
          onClick: this.claimAccount,
          label: r.Z.Messages.CLAIM_ACCOUNT
        }
      })]
    })
  }
  constructor(...e) {
    super(...e), c(this, "cancel", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    }), c(this, "claimAccount", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e(), (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("31093")]).then(n.bind(n, 324239));
        return s => (0, t.jsx)(e, {
          ...s
        })
      })
    })
  }
}
s.default = i