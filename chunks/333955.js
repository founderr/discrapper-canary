"use strict";
n.r(e), n.d(e, {
  PurchaseHeader: function() {
    return T
  },
  BenefitsConfirmation: function() {
    return h
  },
  PurchaseConfirmation: function() {
    return _
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  a = n("834897"),
  r = n("85336"),
  u = n("159149"),
  s = n("650484"),
  o = n("945330"),
  c = n("829805"),
  d = n("425480"),
  f = n("782340"),
  p = n("370184"),
  I = n("137852"),
  S = n("511117");
let T = t => {
    let {
      step: e,
      onClose: n
    } = t, u = (0, a.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
    return e === r.Step.CONFIRM || e === r.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
      className: p.headerContainer,
      children: [!u && (0, i.jsx)("div", {
        className: p.headerImageContainer,
        "aria-hidden": "true",
        children: (0, i.jsx)("img", {
          src: S,
          alt: "",
          className: p.headerImage
        })
      }), (0, i.jsx)(l.Clickable, {
        className: p.closeContainer,
        onClick: () => n(),
        "aria-label": f.default.Messages.CLOSE,
        children: (0, i.jsx)(o.default, {
          className: p.closeIcon
        })
      })]
    })
  },
  h = t => {
    let {
      icon: e,
      storeListingBenefits: n,
      skuBenefits: l,
      application: a,
      title: r,
      subtitle: u,
      description: s
    } = t;
    return null == a ? null : (0, i.jsx)("div", {
      className: p.confirmationContainer,
      children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
        children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
          application: a,
          asset: e
        }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
          children: r
        }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
          title: u,
          description: s
        }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
          applicationId: a.id,
          storeListingBenefits: n,
          skuBenefits: l
        })]
      })
    })
  };

function _(t) {
  let {
    tierName: e,
    onConfirm: n,
    subscription: a
  } = t;
  return (0, i.jsxs)("div", {
    className: p.purchaseConfirmation,
    children: [(0, i.jsx)("img", {
      src: I,
      alt: "",
      width: 300,
      height: 126
    }), (0, i.jsx)(l.Heading, {
      className: p.confirmationTitle,
      variant: "heading-xl/extrabold",
      color: "header-primary",
      children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: e
      })
    }), (0, i.jsx)(l.Text, {
      className: p.confirmationSubtitle,
      variant: "text-md/medium",
      color: "header-secondary",
      children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == a ? void 0 : a.currentPeriodEnd
      })
    }), (0, i.jsx)(s.PaymentPortalFooter, {
      children: (0, i.jsx)(u.default, {
        onPrimary: n,
        primaryCTA: u.CTAType.CONTINUE,
        primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })
    })]
  })
}