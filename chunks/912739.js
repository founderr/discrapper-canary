"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  l = s.n(r),
  n = s("55935"),
  o = s("305878"),
  u = s("263704"),
  d = s("207343"),
  c = s("466111"),
  _ = s("981631"),
  E = s("689938"),
  C = s("388239");
let f = e => {
    let {
      IconComponent: t,
      className: s
    } = e;
    return (0, a.jsx)("div", {
      className: l()(C.iconCircle, s),
      children: (0, a.jsx)(t, {
        className: C.icon
      })
    })
  },
  T = e => {
    let {
      circle: t,
      smallHeader: s,
      text: i,
      className: r
    } = e;
    return (0, a.jsxs)("div", {
      className: l()(C.recommendationReason, r),
      children: [t, (0, a.jsxs)("div", {
        className: C.description,
        children: [null != s ? (0, a.jsx)("div", {
          className: C.smallHeader,
          children: s
        }) : null, (0, a.jsx)("div", {
          className: C.text,
          children: i
        })]
      })]
    })
  };
class I extends i.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === _.StoreRecommendationTypes.RECENT_RELEASE_DATE) return (0, a.jsx)(T, {
      className: t,
      circle: (0, a.jsx)(f, {
        IconComponent: o.default
      }),
      smallHeader: E.default.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, n.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === _.StoreRecommendationTypes.RELEASE_DATE) return (0, a.jsx)(T, {
      className: t,
      circle: (0, a.jsx)(f, {
        IconComponent: o.default
      }),
      smallHeader: E.default.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, n.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === _.StoreRecommendationTypes.EARLY_ACCESS) return null != e.releaseDate ? (0, a.jsx)(T, {
      className: t,
      circle: (0, a.jsx)(f, {
        IconComponent: d.default,
        className: C.earlyAccess
      }),
      smallHeader: E.default.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, n.dateFormat)(e.releaseDate, "LL")
    }) : (0, a.jsx)(T, {
      className: t,
      circle: (0, a.jsx)(f, {
        IconComponent: d.default,
        className: C.earlyAccess
      }),
      text: E.default.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === _.StoreRecommendationTypes.FLAVOR_TEXT ? (0, a.jsx)(T, {
      circle: (0, a.jsx)(f, {
        IconComponent: u.default
      }),
      text: e.flavorText,
      className: t
    }) : e.type === _.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT ? (0, a.jsx)(T, {
      className: t,
      circle: (0, a.jsx)(f, {
        IconComponent: c.default,
        className: C.premiumCircle
      }),
      text: E.default.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}