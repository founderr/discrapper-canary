"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("635058"),
  o = a("65597"),
  u = a("77078"),
  c = a("685665"),
  d = a("649844"),
  f = a("697218"),
  m = a("153769"),
  C = a("270227"),
  E = a("719923"),
  h = a("491232"),
  p = a("716120"),
  g = a("342676"),
  T = a("408381"),
  L = a("177586"),
  x = a("646718"),
  b = a("782340"),
  v = a("858422");
let S = (0, h.getLogoSize)(96),
  I = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, c.default)(), r = s.useRef(null), n = (0, o.default)([f.default], () => f.default.getCurrentUser());
    return E.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
      children: t.summary
    }) : (0, l.jsx)(l.Fragment, {
      children: b.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, l.jsx)(u.Clickable, {
          innerRef: r,
          className: v.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function _(e) {
  let {
    category: t,
    className: a
  } = e, {
    backgroundColors: s
  } = (0, L.default)(t.styles);
  return (0, l.jsxs)(p.default, {
    asset: t.banner,
    className: n(v.shopBanner, a),
    style: null != s ? {
      background: "".concat((0, T.getBackgroundGradient)(s), " border-box border-box"),
      outlineColor: s.border.toHslString()
    } : void 0,
    children: [(0, l.jsxs)("div", {
      className: v.discordLogo,
      children: [(0, l.jsx)(m.default, {
        className: v.discordIcon
      }), (0, l.jsx)(C.default, {
        className: v.discordWordmark
      })]
    }), (0, l.jsx)("img", {
      className: v.categoryLogo,
      src: (0, h.getCollectiblesAssetURL)(t.logo, {
        size: S
      }),
      alt: t.name
    }), (0, l.jsx)(u.Text, {
      className: v.summary,
      variant: "text-md/normal",
      color: "always-white",
      children: t.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(I, {
        category: t
      }) : t.summary
    }), (0, l.jsx)(g.default, {
      category: t,
      className: v.limitedTimeBadge,
      display: "banner"
    })]
  })
}