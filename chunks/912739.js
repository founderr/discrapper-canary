"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var n = s("735250"),
  a = s("470079"),
  r = s("120356"),
  l = s.n(r),
  i = s("55935"),
  u = s("305878"),
  o = s("263704"),
  d = s("207343"),
  c = s("466111"),
  I = s("981631"),
  T = s("689938"),
  E = s("164846");
let f = e => {
    let {
      IconComponent: t,
      className: s
    } = e;
    return (0, n.jsx)("div", {
      className: l()(E.iconCircle, s),
      children: (0, n.jsx)(t, {
        className: E.icon
      })
    })
  },
  _ = e => {
    let {
      circle: t,
      smallHeader: s,
      text: a,
      className: r
    } = e;
    return (0, n.jsxs)("div", {
      className: l()(E.recommendationReason, r),
      children: [t, (0, n.jsxs)("div", {
        className: E.description,
        children: [null != s ? (0, n.jsx)("div", {
          className: E.smallHeader,
          children: s
        }) : null, (0, n.jsx)("div", {
          className: E.text,
          children: a
        })]
      })]
    })
  };
class S extends a.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === I.StoreRecommendationTypes.RECENT_RELEASE_DATE) return (0, n.jsx)(_, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: u.default
      }),
      smallHeader: T.default.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, i.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === I.StoreRecommendationTypes.RELEASE_DATE) return (0, n.jsx)(_, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: u.default
      }),
      smallHeader: T.default.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, i.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === I.StoreRecommendationTypes.EARLY_ACCESS) return null != e.releaseDate ? (0, n.jsx)(_, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: d.default,
        className: E.earlyAccess
      }),
      smallHeader: T.default.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, i.dateFormat)(e.releaseDate, "LL")
    }) : (0, n.jsx)(_, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: d.default,
        className: E.earlyAccess
      }),
      text: T.default.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === I.StoreRecommendationTypes.FLAVOR_TEXT ? (0, n.jsx)(_, {
      circle: (0, n.jsx)(f, {
        IconComponent: o.default
      }),
      text: e.flavorText,
      className: t
    }) : e.type === I.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT ? (0, n.jsx)(_, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: c.default,
        className: E.premiumCircle
      }),
      text: T.default.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}