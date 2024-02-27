"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionPaymentSteps: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var l = n("85336"),
  i = n("262683"),
  r = n("946359"),
  s = n("724269"),
  u = n("179387"),
  o = n("104559"),
  d = n("542515"),
  c = n("451728"),
  f = n("782340");

function I(e) {
  let {
    guildId: t,
    eligibleApplicationSubscriptionGuilds: n,
    application: I,
    listing: _,
    showBenefitsFirst: S
  } = e, E = [{
    key: null,
    renderStep: e => (0, a.jsx)(d.default, {
      initialStep: S ? l.Step.BENEFITS : l.Step.REVIEW,
      guildId: t,
      ...e
    })
  }, {
    key: l.Step.BENEFITS,
    renderStep: e => (0, a.jsx)(u.default, {
      application: I,
      listing: _,
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => f.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
    }
  }, {
    key: l.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(i.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM]
      })
    }),
    options: {
      renderHeader: !0
    }
  }, {
    key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, a.jsx)(s.default, {})
  }, {
    key: l.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, a.jsx)(r.default, {})
  }, {
    key: l.Step.REVIEW,
    renderStep: e => (0, a.jsx)(c.default, {
      application: I,
      backButtonEligible: !!S || void 0,
      prevStep: S ? l.Step.BENEFITS : void 0,
      listing: _,
      showGuildPicker: null == t,
      eligibleApplicationSubscriptionGuilds: n,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: l.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(o.default, {
      application: I,
      listing: _,
      showBenefits: !S,
      ...e
    })
  }];
  return E
}