"use strict";
n.r(t), n.d(t, {
  SubscriptionCard: function() {
    return p
  },
  SubscriptionCardBenefit: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("557533"),
  l = n.n(r),
  s = n("789978"),
  a = n("368072"),
  o = n("777207"),
  u = n("752843"),
  d = n("330711"),
  c = n("513478"),
  f = n("863885");

function p(e) {
  let {
    description: t,
    imgSrc: n,
    PurchaseButton: r,
    onPurchase: p,
    subscriptionType: m,
    title: S,
    onDetails: h,
    benefitItems: g,
    benefitsSummary: v
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: l()(c.container, f.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != h ? h() : null != p && p()
      },
      children: [(0, i.jsxs)("div", {
        className: c.card,
        children: [null != m && (0, i.jsx)(u.SubscriptionTag, {
          type: m
        }), (0, i.jsxs)("div", {
          className: c.body,
          children: [(0, i.jsx)(o.Text, {
            tag: "div",
            variant: "heading-lg/semibold",
            children: S
          }), (0, i.jsx)("div", {
            className: c.image,
            children: null != n ? (0, i.jsx)("img", {
              src: n.toString(),
              alt: ""
            }) : (0, i.jsx)(a.BadgeIcon, {
              color: "white",
              height: 48,
              width: 48
            })
          }), null != r && (0, i.jsx)(r, {
            className: c.purchaseBtn,
            onClick: e => {
              e.stopPropagation(), null == p || p()
            }
          }), null != t && "" !== t && (0, i.jsx)(o.Text, {
            className: c.description,
            color: "text-normal",
            variant: "text-sm/medium",
            children: t
          })]
        })]
      }), null != v && (0, i.jsx)("div", {
        className: c.benefitsSummary,
        children: (0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/medium",
          children: d.default.Messages.Storefront.BENEFITS_SUMMARY.format({
            count: v
          })
        })
      }), null != g && (0, i.jsx)("div", {
        className: c.benefits,
        children: (0, i.jsx)("div", {
          className: c.benefitsContainer,
          children: (0, i.jsxs)("div", {
            className: c.benefitsList,
            children: [(0, i.jsx)(o.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: d.default.Messages.Storefront.BENEFITS_TITLE
            }), g.length > 3 ? (0, i.jsxs)(i.Fragment, {
              children: [g.slice(0, 3), (0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "text-secondary",
                children: d.default.Messages.Storefront.MORE_BENEFITS.format({
                  count: g.length - 3
                })
              })]
            }) : g]
          })
        })
      })]
    })
  })
}

function m(e) {
  let {
    icon: t,
    name: n,
    description: r
  } = e;
  return (0, i.jsxs)("div", {
    className: c.cardBenefit,
    children: [(0, i.jsx)("div", {
      className: c.cardBenefitIcon,
      children: t
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: n
      }), null != r && (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: r
      })]
    })]
  })
}