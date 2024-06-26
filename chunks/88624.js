var n = t(735250),
  a = t(470079),
  i = t(512722),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(346951),
  d = t(644744),
  _ = t(792423),
  E = t(674985),
  u = t(594174),
  T = t(63063),
  S = t(843200),
  I = t(981631),
  N = t(689938),
  C = t(415324);
class m extends a.PureComponent {
  renderIntroHeader() {
    let {
      houseMembership: e
    } = this.props;
    return null == e ? N.Z.Messages.HYPESQUAD_HEADING : N.Z.Messages.HYPESQUAD_HEADING_EXISTING_MEMBER
  }
  render() {
    let {
      houseMembership: e,
      isClaimed: s,
      isVerified: t
    } = this.props;
    return (0, n.jsxs)(l.HeadingLevel, {
      component: (0, n.jsxs)("div", {
        className: C.intro,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xxl/semibold",
          className: C.introHeader,
          children: this.renderIntroHeader()
        }), (0, n.jsx)(l.Text, {
          variant: "text-lg/normal",
          children: N.Z.Messages.HYPESQUAD_SUBHEADING
        })]
      }),
      children: [(0, n.jsx)(S.Z, {
        className: C.verificationNotice,
        unclaimedNotice: N.Z.Messages.HYPESQUAD_UNCLAIMED_ACCOUNT_NOTICE,
        unverifiedNotice: N.Z.Messages.HYPESQUAD_UNVERIFIED_EMAIL_NOTICE
      }), (0, n.jsx)(d.Z, {
        houseMembership: e,
        isClaimed: s,
        isVerified: t
      }), (0, n.jsx)(c.Z, {}), (0, n.jsx)(_.Z, {
        isHypeSquadOnlineMember: null != e
      }), (0, n.jsx)(l.Card, {
        className: C.attendeeCTA,
        children: N.Z.Messages.HYPESQUAD_ATTENDEE_CTA.format({
          url: T.Z.getArticleURL(I.BhN.PROFILE_BADGES)
        })
      })]
    })
  }
}
s.Z = o.ZP.connectStores([u.default, E.Z], () => {
  let e = u.default.getCurrentUser();
  return r()(null != e, "UserSettingsHypeSquad: currentUser cannot be undefined"), {
    houseMembership: E.Z.getHouseMembership(),
    isClaimed: e.isClaimed(),
    isVerified: e.verified
  }
})(m)