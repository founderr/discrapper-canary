"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var a, i = s("37983"),
  r = s("884691"),
  n = s("414456"),
  l = s.n(n),
  o = s("888400"),
  u = s("943232"),
  d = s("36694"),
  c = s("76638"),
  _ = s("216422"),
  E = s("49111"),
  I = s("782340"),
  T = s("202812");
let f = e => {
    let {
      IconComponent: t,
      className: s
    } = e;
    return (0, i.jsx)("div", {
      className: l(T.iconCircle, s),
      children: (0, i.jsx)(t, {
        className: T.icon
      })
    })
  },
  S = e => {
    let {
      circle: t,
      smallHeader: s,
      text: a,
      className: r
    } = e;
    return (0, i.jsxs)("div", {
      className: l(T.recommendationReason, r),
      children: [t, (0, i.jsxs)("div", {
        className: T.description,
        children: [null != s ? (0, i.jsx)("div", {
          className: T.smallHeader,
          children: s
        }) : null, (0, i.jsx)("div", {
          className: T.text,
          children: a
        })]
      })]
    })
  };
a = class extends r.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === E.StoreRecommendationTypes.RECENT_RELEASE_DATE) return (0, i.jsx)(S, {
      className: t,
      circle: (0, i.jsx)(f, {
        IconComponent: u.default
      }),
      smallHeader: I.default.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, o.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === E.StoreRecommendationTypes.RELEASE_DATE) return (0, i.jsx)(S, {
      className: t,
      circle: (0, i.jsx)(f, {
        IconComponent: u.default
      }),
      smallHeader: I.default.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, o.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === E.StoreRecommendationTypes.EARLY_ACCESS) return null != e.releaseDate ? (0, i.jsx)(S, {
      className: t,
      circle: (0, i.jsx)(f, {
        IconComponent: c.default,
        className: T.earlyAccess
      }),
      smallHeader: I.default.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, o.dateFormat)(e.releaseDate, "LL")
    }) : (0, i.jsx)(S, {
      className: t,
      circle: (0, i.jsx)(f, {
        IconComponent: c.default,
        className: T.earlyAccess
      }),
      text: I.default.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === E.StoreRecommendationTypes.FLAVOR_TEXT ? (0, i.jsx)(S, {
      circle: (0, i.jsx)(f, {
        IconComponent: d.default
      }),
      text: e.flavorText,
      className: t
    }) : e.type === E.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT ? (0, i.jsx)(S, {
      className: t,
      circle: (0, i.jsx)(f, {
        IconComponent: _.default,
        className: T.premiumCircle
      }),
      text: I.default.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}