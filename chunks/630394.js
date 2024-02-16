"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return a
  },
  ProductCardBenefit: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("370621");

function a(e) {
  let {
    imgSrc: t,
    title: n,
    description: a,
    price: s,
    priceLabel: l,
    purchaseButton: o,
    benefits: u
  } = e;
  return (0, i.jsxs)("div", {
    className: r.productCard,
    children: [(0, i.jsx)("div", {
      className: r.cardHeaderImg,
      style: null != t ? {
        backgroundImage: "url(".concat(t.toString(), ")")
      } : void 0
    }), (0, i.jsxs)("div", {
      className: r.cardTitleWrapper,
      children: [(0, i.jsx)("div", {
        className: r.cardTitleName,
        children: n
      }), null != a && (0, i.jsx)("div", {
        className: r.cardTitleDesc,
        children: a
      })]
    }), (0, i.jsxs)("div", {
      className: r.cardPrice,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          children: s
        }), (0, i.jsx)("div", {
          className: r.cardPriceLabel,
          children: l
        })]
      }), o]
    }), null != u && (0, i.jsxs)("div", {
      className: r.cardBenefitsWrapper,
      children: [(0, i.jsx)("div", {
        className: r.cardBenefitTitle,
        children: u.title
      }), u.items]
    })]
  })
}

function s(e) {
  let {
    icon: t,
    name: n,
    description: a
  } = e;
  return (0, i.jsxs)("div", {
    className: r.cardBenefit,
    children: [null != t && (0, i.jsx)("div", {
      className: r.cardBenefitIcon,
      children: "string" == typeof t ? t : (0, i.jsx)("img", {
        src: t.toString(),
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)("div", {
        className: r.cardBenefitName,
        children: n
      }), (0, i.jsx)("div", {
        className: r.cardBenefitDesc,
        children: a
      })]
    })]
  })
}