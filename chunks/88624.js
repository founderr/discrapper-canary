"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("346951"),
  u = s("644744"),
  c = s("792423"),
  S = s("674985"),
  E = s("594174"),
  T = s("63063"),
  f = s("843200"),
  m = s("981631"),
  _ = s("689938"),
  g = s("403887");
class I extends n.PureComponent {
  renderIntroHeader() {
    let {
      houseMembership: e
    } = this.props;
    return null == e ? _.default.Messages.HYPESQUAD_HEADING : _.default.Messages.HYPESQUAD_HEADING_EXISTING_MEMBER
  }
  render() {
    let {
      houseMembership: e,
      isClaimed: t,
      isVerified: s
    } = this.props;
    return (0, a.jsxs)(o.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: g.intro,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xxl/semibold",
          className: g.introHeader,
          children: this.renderIntroHeader()
        }), (0, a.jsx)(o.Text, {
          variant: "text-lg/normal",
          children: _.default.Messages.HYPESQUAD_SUBHEADING
        })]
      }),
      children: [(0, a.jsx)(f.default, {
        className: g.verificationNotice,
        unclaimedNotice: _.default.Messages.HYPESQUAD_UNCLAIMED_ACCOUNT_NOTICE,
        unverifiedNotice: _.default.Messages.HYPESQUAD_UNVERIFIED_EMAIL_NOTICE
      }), (0, a.jsx)(u.default, {
        houseMembership: e,
        isClaimed: t,
        isVerified: s
      }), (0, a.jsx)(d.default, {}), (0, a.jsx)(c.default, {
        isHypeSquadOnlineMember: null != e
      }), (0, a.jsx)(o.Card, {
        className: g.attendeeCTA,
        children: _.default.Messages.HYPESQUAD_ATTENDEE_CTA.format({
          url: T.default.getArticleURL(m.HelpdeskArticles.PROFILE_BADGES)
        })
      })]
    })
  }
}
t.default = r.default.connectStores([E.default, S.default], () => {
  let e = E.default.getCurrentUser();
  return i()(null != e, "UserSettingsHypeSquad: currentUser cannot be undefined"), {
    houseMembership: S.default.getHouseMembership(),
    isClaimed: e.isClaimed(),
    isVerified: e.verified
  }
})(I)