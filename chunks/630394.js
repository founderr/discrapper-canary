"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return l
  },
  ProductCardBenefit: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var r = n("441490");

function l(e) {
  let {
    imgSrc: t,
    title: n,
    description: l,
    price: a,
    priceLabel: s,
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
      }), null != l && (0, i.jsx)("div", {
        className: r.cardTitleDesc,
        children: l
      })]
    }), (0, i.jsxs)("div", {
      className: r.cardPrice,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          children: a
        }), (0, i.jsx)("div", {
          className: r.cardPriceLabel,
          children: s
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

function a(e) {
  let {
    icon: t,
    name: n,
    description: l
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
        children: l
      })]
    })]
  })
}