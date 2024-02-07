"use strict";
n.r(e), n.d(e, {
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
  u = n("850644"),
  s = n("899604"),
  o = n("114067");
let c = t => {
    let {
      application: e,
      asset: n,
      className: l,
      ...a
    } = t;
    return (0, i.jsx)(u.default, {
      application: e,
      size: u.ApplicationIconSize.MEDIUM,
      asset: n,
      className: l,
      ...a
    })
  },
  d = t => {
    let {
      children: e,
      className: n,
      id: l,
      ...u
    } = t;
    return (0, i.jsx)(r.Heading, {
      className: a(o.header, n),
      variant: "heading-xl/extrabold",
      id: l,
      ...u,
      children: e
    })
  };

function f() {
  return (0, i.jsx)("hr", {
    className: o.divider
  })
}
let p = t => {
    let {
      className: e,
      title: n,
      description: l,
      ...a
    } = t;
    return (0, i.jsxs)("div", {
      className: e,
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
  I = t => {
    let {
      applicationId: e,
      storeListingBenefits: n,
      skuBenefits: l,
      className: r,
      ...u
    } = t;
    return (0, i.jsx)("div", {
      className: a(o.benefitsContainer, r),
      ...u,
      children: (0, i.jsx)(s.SubscriptionListingBenefits, {
        applicationId: e,
        storeListingBenefits: n,
        skuBenefits: l,
        className: o.benefit
      })
    })
  },
  S = t => {
    let {
      children: e,
      className: n,
      ...l
    } = t;
    return (0, i.jsx)("div", {
      className: a(o.container, n),
      ...l,
      children: e
    })
  }