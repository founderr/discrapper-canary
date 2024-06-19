var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(346951),
  E = t(644744),
  d = t(792423),
  _ = t(674985),
  T = t(594174),
  S = t(63063),
  u = t(843200),
  I = t(981631),
  N = t(689938),
  A = t(415324);
class C extends i.PureComponent {
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
    return (0, n.jsxs)(o.HeadingLevel, {
      component: (0, n.jsxs)("div", {
        className: A.intro,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-xxl/semibold",
          className: A.introHeader,
          children: this.renderIntroHeader()
        }), (0, n.jsx)(o.Text, {
          variant: "text-lg/normal",
          children: N.Z.Messages.HYPESQUAD_SUBHEADING
        })]
      }),
      children: [(0, n.jsx)(u.Z, {
        className: A.verificationNotice,
        unclaimedNotice: N.Z.Messages.HYPESQUAD_UNCLAIMED_ACCOUNT_NOTICE,
        unverifiedNotice: N.Z.Messages.HYPESQUAD_UNVERIFIED_EMAIL_NOTICE
      }), (0, n.jsx)(E.Z, {
        houseMembership: e,
        isClaimed: s,
        isVerified: t
      }), (0, n.jsx)(c.Z, {}), (0, n.jsx)(d.Z, {
        isHypeSquadOnlineMember: null != e
      }), (0, n.jsx)(o.Card, {
        className: A.attendeeCTA,
        children: N.Z.Messages.HYPESQUAD_ATTENDEE_CTA.format({
          url: S.Z.getArticleURL(I.BhN.PROFILE_BADGES)
        })
      })]
    })
  }
}
s.Z = r.ZP.connectStores([T.default, _.Z], () => {
  let e = T.default.getCurrentUser();
  return l()(null != e, "UserSettingsHypeSquad: currentUser cannot be undefined"), {
    houseMembership: _.Z.getHouseMembership(),
    isClaimed: e.isClaimed(),
    isVerified: e.verified
  }
})(C)