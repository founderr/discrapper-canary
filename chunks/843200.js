var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  E = t(481060),
  d = t(594174),
  _ = t(285952),
  T = t(418632),
  S = t(689938),
  u = t(66279);
class I extends i.Component {
  renderNotice() {
    let {
      isClaimed: e,
      unclaimedNotice: s,
      unverifiedNotice: t
    } = this.props;
    return e ? null != t ? t : S.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT : null != s ? s : S.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT
  }
  renderPrimaryAction() {
    return this.props.isClaimed ? this.props.hasEmail ? (0, n.jsx)(_.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(T.Z, {})
    }) : (0, n.jsx)(E.Button, {
      size: E.Button.Sizes.MEDIUM,
      color: E.Button.Colors.BRAND,
      onClick: this.openChangeEmailModal,
      children: S.Z.Messages.ADD_EMAIL_SHORT
    }) : (0, n.jsx)(_.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(E.Button, {
        size: E.Button.Sizes.MEDIUM,
        color: E.Button.Colors.BRAND,
        onClick: this.openClaimAccountModal,
        children: S.Z.Messages.CLAIM_ACCOUNT
      })
    })
  }
  renderSecondaryAction() {
    return this.props.isClaimed && this.props.hasEmail ? (0, n.jsx)(_.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(E.Button, {
        color: E.Button.Colors.PRIMARY,
        look: E.Button.Looks.LINK,
        onClick: this.openChangeEmailModal,
        children: S.Z.Messages.CHANGE_EMAIL_SHORT
      })
    }) : null
  }
  openClaimAccountModal() {
    (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("69495")]).then(t.bind(t, 324239));
      return s => (0, n.jsx)(e, {
        ...s
      })
    })
  }
  openChangeEmailModal() {
    (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("9343")]).then(t.bind(t, 642298));
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
    return s && t ? null : (0, n.jsx)(E.Card, {
      className: l()(u.wrapper, e),
      children: (0, n.jsxs)(_.Z, {
        align: _.Z.Align.CENTER,
        children: [(0, n.jsx)(_.Z.Child, {
          className: u.image,
          grow: 0,
          shrink: 0
        }), (0, n.jsxs)(_.Z.Child, {
          children: [(0, n.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: this.renderNotice()
          }), (0, n.jsxs)(_.Z, {
            justify: _.Z.Justify.CENTER,
            className: u.content,
            children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
          })]
        })]
      })
    })
  }
}
s.Z = c.ZP.connectStores([d.default], () => {
  let e = d.default.getCurrentUser();
  return o()(null != e, "EmailNotice: currentUser cannot be undefined"), {
    isClaimed: e.isClaimed(),
    isVerified: e.verified,
    hasEmail: null != e.email
  }
})(I)