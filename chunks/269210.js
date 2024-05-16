"use strict";
n.r(t), n.d(t, {
  SubscriptionCard: function() {
    return h
  },
  SubscriptionCardBenefit: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var s = n("557533"),
  l = n.n(s),
  r = n("789978"),
  a = n("368072"),
  o = n("777207"),
  u = n("752843"),
  d = n("330711"),
  c = n("513478"),
  f = n("863885");

function h(e) {
  let {
    description: t,
    imgSrc: n,
    PurchaseButton: s,
    onPurchase: h,
    subscriptionType: S,
    title: p,
    onDetails: m,
    benefitItems: v,
    benefitsSummary: g
  } = e;
  return (0, i.jsx)(r.FocusRing, {
    children: (0, i.jsxs)("div", {
      className: l()(c.container, f.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != m ? m() : null != h && h()
      },
      children: [(0, i.jsxs)("div", {
        className: c.card,
        children: [null != S && (0, i.jsx)(u.SubscriptionTag, {
          type: S
        }), (0, i.jsxs)("div", {
          className: c.body,
          children: [(0, i.jsx)(o.Text, {
            tag: "div",
            variant: "heading-lg/semibold",
            children: p
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
          }), null != s && (0, i.jsx)(s, {
            className: c.purchaseBtn,
            onClick: e => {
              e.stopPropagation(), null == h || h()
            }
          }), null != t && "" !== t && (0, i.jsx)(o.Text, {
            className: c.description,
            color: "text-normal",
            variant: "text-sm/medium",
            children: t
          })]
        })]
      }), null != g && (0, i.jsx)("div", {
        className: c.benefitsSummary,
        children: (0, i.jsx)(o.Text, {
          color: "interactive-normal",
          variant: "text-sm/medium",
          children: d.default.Messages.Storefront.BENEFITS_SUMMARY.format({
            count: g
          })
        })
      }), null != v && (0, i.jsx)("div", {
        className: c.benefits,
        children: (0, i.jsx)("div", {
          className: c.benefitsContainer,
          children: (0, i.jsxs)("div", {
            className: c.benefitsList,
            children: [(0, i.jsx)(o.Text, {
              color: "header-secondary",
              variant: "eyebrow",
              children: d.default.Messages.Storefront.BENEFITS_TITLE
            }), v.length > 3 ? (0, i.jsxs)(i.Fragment, {
              children: [v.slice(0, 3), (0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "text-secondary",
                children: d.default.Messages.Storefront.MORE_BENEFITS.format({
                  count: v.length - 3
                })
              })]
            }) : v]
          })
        })
      })]
    })
  })
}

function S(e) {
  let {
    icon: t,
    name: n,
    description: s
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
      }), null != s && (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: s
      })]
    })]
  })
}