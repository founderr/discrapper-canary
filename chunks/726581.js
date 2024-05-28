"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  r = s("120356"),
  l = s.n(r),
  i = s("442837"),
  u = s("649974"),
  o = s("246946"),
  d = s("594174"),
  c = s("525395"),
  I = s("55563"),
  T = s("551428"),
  E = s("912739"),
  f = s("73346"),
  _ = s("733789"),
  S = s("4962"),
  A = s("689938"),
  R = s("472824");
class O extends a.Component {
  renderReasons(e, t, s) {
    return 0 === e.length && 0 === t.length ? null : (0, n.jsx)("div", {
      className: R.section,
      children: (0, n.jsxs)("div", {
        className: R.sectionContent,
        children: [e.map(e => (0, n.jsx)("div", {
          className: R.unit,
          children: (0, n.jsx)(_.default, {
            reason: e,
            hidePersonalInformation: s
          })
        }, e.type)), t.map(e => (0, n.jsx)("div", {
          className: R.unit,
          children: (0, n.jsx)(E.default, {
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
      type: S.default.Types.STAFF_NOTES,
      staffNotes: e.staffNotes
    } : null
  }
  render() {
    let {
      socialReasons: e,
      nonSocialReasons: t,
      storeListing: s,
      hidePersonalInformation: a,
      className: r
    } = this.props;
    if (0 === e.length && 0 === t.length && null == s.staffNotes) return null;
    let i = this.getReviewToRender();
    return (0, n.jsxs)("div", {
      className: l()(R.root, r),
      children: [(0, n.jsx)("div", {
        className: R.header,
        children: A.default.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
      }), this.renderReasons(e, t, a), null != i ? (0, n.jsx)(S.default, {
        data: i,
        className: R.review
      }) : null]
    })
  }
}
t.default = i.default.connectStores([I.default, d.default, T.default, u.default, c.default, o.default], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, f.getSocialRecommendationReasons)(t.id, I.default, d.default, u.default, c.default),
    nonSocialReasons: (0, f.getNonSocialRecommendationReasons)(t.id, I.default, T.default),
    hidePersonalInformation: o.default.hidePersonalInformation
  }
})(O)