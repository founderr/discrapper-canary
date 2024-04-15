"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("442837"),
  o = s("649974"),
  u = s("246946"),
  d = s("594174"),
  c = s("525395"),
  _ = s("55563"),
  E = s("551428"),
  C = s("912739"),
  f = s("73346"),
  T = s("733789"),
  I = s("4962"),
  R = s("689938"),
  S = s("466534");
class p extends i.Component {
  renderReasons(e, t, s) {
    return 0 === e.length && 0 === t.length ? null : (0, a.jsx)("div", {
      className: S.section,
      children: (0, a.jsxs)("div", {
        className: S.sectionContent,
        children: [e.map(e => (0, a.jsx)("div", {
          className: S.unit,
          children: (0, a.jsx)(T.default, {
            reason: e,
            hidePersonalInformation: s
          })
        }, e.type)), t.map(e => (0, a.jsx)("div", {
          className: S.unit,
          children: (0, a.jsx)(C.default, {
            reason: e
          })
        }, e.type))]
      })
    })
  }
  getReviewToRender() {
    let {
      storeListing: e
    } = this.props;
    return null != e.staffNotes ? {
      type: I.default.Types.STAFF_NOTES,
      staffNotes: e.staffNotes
    } : null
  }
  render() {
    let {
      socialReasons: e,
      nonSocialReasons: t,
      storeListing: s,
      hidePersonalInformation: i,
      className: r
    } = this.props;
    if (0 === e.length && 0 === t.length && null == s.staffNotes) return null;
    let n = this.getReviewToRender();
    return (0, a.jsxs)("div", {
      className: l()(S.root, r),
      children: [(0, a.jsx)("div", {
        className: S.header,
        children: R.default.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
      }), this.renderReasons(e, t, i), null != n ? (0, a.jsx)(I.default, {
        data: n,
        className: S.review
      }) : null]
    })
  }
}
t.default = n.default.connectStores([_.default, d.default, E.default, o.default, c.default, u.default], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, f.getSocialRecommendationReasons)(t.id, _.default, d.default, o.default, c.default),
    nonSocialReasons: (0, f.getNonSocialRecommendationReasons)(t.id, _.default, E.default),
    hidePersonalInformation: u.default.hidePersonalInformation
  }
})(p)