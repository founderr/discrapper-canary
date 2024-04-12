"use strict";
n.r(t), n.d(t, {
  getApplicationPaymentSteps: function() {
    return I
  }
}), n("47120");
var a = n("735250");
n("470079");
var r = n("409813"),
  l = n("276442"),
  s = n("961830"),
  i = n("721165"),
  u = n("519801"),
  o = n("589771"),
  d = n("883419"),
  c = n("689938");

function I(e) {
  let {
    guildId: t,
    eligibleApplicationSubscriptionGuilds: n,
    showBenefitsFirst: I
  } = e;
  return [{
    key: null,
    renderStep: e => (0, a.jsx)(o.default, {
      initialStep: I ? r.Step.BENEFITS : r.Step.REVIEW,
      guildId: t,
      ...e
    })
  }, {
    key: r.Step.BENEFITS,
    renderStep: e => (0, a.jsx)(i.default, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => c.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
    }
  }, {
    key: r.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [r.Step.ADD_PAYMENT_STEPS, r.Step.REVIEW, r.Step.CONFIRM]
      })
    }),
    options: {
      renderHeader: !0
    }
  }, ...s.SHARED_STEP_CONFIGS, {
    key: r.Step.REVIEW,
    renderStep: e => (0, a.jsx)(d.default, {
      backButtonEligible: !!I || void 0,
      prevStep: I ? r.Step.BENEFITS : void 0,
      showGuildPicker: null == t,
      eligibleApplicationSubscriptionGuilds: n,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => c.default.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: r.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(u.default, {
      showBenefits: !I,
      ...e
    })
  }]
}