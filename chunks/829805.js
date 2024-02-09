"use strict";
n.r(t), n.d(t, {
  ApplicationBenefitsModalIcon: function() {
    return c
  },
  ApplicationBenefitsModalHeading: function() {
    return d
  },
  ApplicationBenefitsModalDivider: function() {
    return f
  },
  ApplicationBenefitsModalDescription: function() {
    return p
  },
  ApplicationBenefitsModalBenefits: function() {
    return I
  },
  ApplicationBenefitsModalContent: function() {
    return S
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  r = n("77078"),
  s = n("850644"),
  u = n("899604"),
  o = n("114067");
let c = e => {
    let {
      application: t,
      asset: n,
      className: l,
      ...a
    } = e;
    return (0, i.jsx)(s.default, {
      application: t,
      size: s.ApplicationIconSize.MEDIUM,
      asset: n,
      className: l,
      ...a
    })
  },
  d = e => {
    let {
      children: t,
      className: n,
      id: l,
      ...s
    } = e;
    return (0, i.jsx)(r.Heading, {
      className: a(o.header, n),
      variant: "heading-xl/extrabold",
      id: l,
      ...s,
      children: t
    })
  };

function f() {
  return (0, i.jsx)("hr", {
    className: o.divider
  })
}
let p = e => {
    let {
      className: t,
      title: n,
      description: l,
      ...a
    } = e;
    return (0, i.jsxs)("div", {
      className: t,
      ...a,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        children: n
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: l
      })]
    })
  },
  I = e => {
    let {
      applicationId: t,
      storeListingBenefits: n,
      skuBenefits: l,
      className: r,
      ...s
    } = e;
    return (0, i.jsx)("div", {
      className: a(o.benefitsContainer, r),
      ...s,
      children: (0, i.jsx)(u.SubscriptionListingBenefits, {
        applicationId: t,
        storeListingBenefits: n,
        skuBenefits: l,
        className: o.benefit
      })
    })
  },
  S = e => {
    let {
      children: t,
      className: n,
      ...l
    } = e;
    return (0, i.jsx)("div", {
      className: a(o.container, n),
      ...l,
      children: t
    })
  }