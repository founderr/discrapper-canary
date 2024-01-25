"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
  l = s("446674"),
  u = s("1017"),
  o = s("102985"),
  d = s("697218"),
  c = s("71010"),
  _ = s("552712"),
  E = s("698041"),
  I = s("764206"),
  T = s("271560"),
  f = s("760936"),
  S = s("697092"),
  R = s("782340"),
  m = s("825704");
class A extends r.Component {
  renderReasons(e, t, s) {
    return 0 === e.length && 0 === t.length ? null : (0, a.jsx)("div", {
      className: m.section,
      children: (0, a.jsxs)("div", {
        className: m.sectionContent,
        children: [e.map(e => (0, a.jsx)("div", {
          className: m.unit,
          children: (0, a.jsx)(f.default, {
            reason: e,
            hidePersonalInformation: s
          })
        }, e.type)), t.map(e => (0, a.jsx)("div", {
          className: m.unit,
          children: (0, a.jsx)(I.default, {
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
      hidePersonalInformation: r,
      className: n
    } = this.props;
    if (0 === e.length && 0 === t.length && null == s.staffNotes) return null;
    let l = this.getReviewToRender();
    return (0, a.jsxs)("div", {
      className: i(m.root, n),
      children: [(0, a.jsx)("div", {
        className: m.header,
        children: R.default.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
      }), this.renderReasons(e, t, r), null != l ? (0, a.jsx)(S.default, {
        data: l,
        className: m.review
      }) : null]
    })
  }
}
var N = l.default.connectStores([_.default, d.default, E.default, u.default, c.default, o.default], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, T.getSocialRecommendationReasons)(t.id, _.default, d.default, u.default, c.default),
    nonSocialReasons: (0, T.getNonSocialRecommendationReasons)(t.id, _.default, E.default),
    hidePersonalInformation: o.default.hidePersonalInformation
  }
})(A)