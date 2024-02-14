"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return r
  },
  ProductCardBenefit: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var a = n("370621");

function r(e) {
  let {
    imgSrc: t,
    title: n,
    description: r,
    price: s,
    priceLabel: l,
    purchaseButton: o,
    benefits: c
  } = e;
  return (0, i.jsxs)("div", {
    className: a.productCard,
    children: [(0, i.jsx)("div", {
      className: a.cardHeaderImg,
      style: null != t ? {
        backgroundImage: "url(".concat(t.toString(), ")")
      } : void 0
    }), (0, i.jsxs)("div", {
      className: a.cardTitleWrapper,
      children: [(0, i.jsx)("div", {
        className: a.cardTitleName,
        children: n
      }), null != r && (0, i.jsx)("div", {
        className: a.cardTitleDesc,
        children: r
      })]
    }), (0, i.jsxs)("div", {
      className: a.cardPrice,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          children: s
        }), (0, i.jsx)("div", {
          className: a.cardPriceLabel,
          children: l
        })]
      }), o]
    }), null != c && (0, i.jsxs)("div", {
      className: a.cardBenefitsWrapper,
      children: [(0, i.jsx)("div", {
        className: a.cardBenefitTitle,
        children: c.title
      }), c.items]
    })]
  })
}

function s(e) {
  let {
    icon: t,
    name: n,
    description: r
  } = e;
  return (0, i.jsxs)("div", {
    className: a.cardBenefit,
    children: [null != t && (0, i.jsx)("div", {
      className: a.cardBenefitIcon,
      children: "string" == typeof t ? t : (0, i.jsx)("img", {
        src: t.toString(),
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)("div", {
        className: a.cardBenefitName,
        children: n
      }), (0, i.jsx)("div", {
        className: a.cardBenefitDesc,
        children: r
      })]
    })]
  })
}