"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionPaymentSteps: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("85336"),
  l = n("262683"),
  i = n("946359"),
  r = n("724269"),
  u = n("559362"),
  o = n("671672"),
  d = n("101432"),
  c = n("458985"),
  I = n("782340");

function _(e) {
  let {
    guildId: t,
    eligibleApplicationSubscriptionGuilds: n,
    application: _,
    listing: f,
    showBenefitsFirst: T
  } = e, S = [{
    key: null,
    renderStep: e => (0, a.jsx)(d.default, {
      initialStep: T ? s.Step.BENEFITS : s.Step.REVIEW,
      guildId: t,
      ...e
    })
  }, {
    key: s.Step.BENEFITS,
    renderStep: e => (0, a.jsx)(u.default, {
      application: _,
      listing: f,
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => I.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
    }
  }, {
    key: s.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [s.Step.ADD_PAYMENT_STEPS, s.Step.REVIEW, s.Step.CONFIRM]
      })
    }),
    options: {
      renderHeader: !0
    }
  }, {
    key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, a.jsx)(r.default, {})
  }, {
    key: s.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, a.jsx)(i.default, {})
  }, {
    key: s.Step.REVIEW,
    renderStep: e => (0, a.jsx)(c.default, {
      application: _,
      backButtonEligible: !!T || void 0,
      prevStep: T ? s.Step.BENEFITS : void 0,
      listing: f,
      showGuildPicker: null == t,
      eligibleApplicationSubscriptionGuilds: n,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => I.default.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: s.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(o.default, {
      application: _,
      listing: f,
      showBenefits: !T,
      ...e
    })
  }];
  return S
}