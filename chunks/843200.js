var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(512722),
  l = t.n(o),
  c = t(442837),
  d = t(481060),
  _ = t(594174),
  E = t(285952),
  u = t(418632),
  T = t(689938),
  S = t(66279);
class I extends a.Component {
  renderNotice() {
    let {
      isClaimed: e,
      unclaimedNotice: s,
      unverifiedNotice: t
    } = this.props;
    return e ? null != t ? t : T.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT : null != s ? s : T.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT
  }
  renderPrimaryAction() {
    return this.props.isClaimed ? this.props.hasEmail ? (0, n.jsx)(E.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(u.Z, {})
    }) : (0, n.jsx)(d.Button, {
      size: d.Button.Sizes.MEDIUM,
      color: d.Button.Colors.BRAND,
      onClick: this.openChangeEmailModal,
      children: T.Z.Messages.ADD_EMAIL_SHORT
    }) : (0, n.jsx)(E.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(d.Button, {
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.BRAND,
        onClick: this.openClaimAccountModal,
        children: T.Z.Messages.CLAIM_ACCOUNT
      })
    })
  }
  renderSecondaryAction() {
    return this.props.isClaimed && this.props.hasEmail ? (0, n.jsx)(E.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        onClick: this.openChangeEmailModal,
        children: T.Z.Messages.CHANGE_EMAIL_SHORT
      })
    }) : null
  }
  openClaimAccountModal() {
    (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await t.e("1677").then(t.bind(t, 324239));
      return s => (0, n.jsx)(e, {
        ...s
      })
    })
  }
  openChangeEmailModal() {
    (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("9343"), t.e("40903")]).then(t.bind(t, 642298));
      return s => (0, n.jsx)(e, {
        ...s
      })
    })
  }
  render() {
    let {
      className: e,
      isClaimed: s,
      isVerified: t
    } = this.props;
    return s && t ? null : (0, n.jsx)(d.Card, {
      className: r()(S.wrapper, e),
      children: (0, n.jsxs)(E.Z, {
        align: E.Z.Align.CENTER,
        children: [(0, n.jsx)(E.Z.Child, {
          className: S.image,
          grow: 0,
          shrink: 0
        }), (0, n.jsxs)(E.Z.Child, {
          children: [(0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: this.renderNotice()
          }), (0, n.jsxs)(E.Z, {
            justify: E.Z.Justify.CENTER,
            className: S.content,
            children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
          })]
        })]
      })
    })
  }
}
s.Z = c.ZP.connectStores([_.default], () => {
  let e = _.default.getCurrentUser();
  return l()(null != e, "EmailNotice: currentUser cannot be undefined"), {
    isClaimed: e.isClaimed(),
    isVerified: e.verified,
    hasEmail: null != e.email
  }
})(I)