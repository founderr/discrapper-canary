"use strict";
n.r(t), n.d(t, {
  getApplicationPaymentSteps: function() {
    return f
  }
}), n("47120");
var r = n("735250");
n("470079");
var a = n("409813"),
  s = n("276442"),
  l = n("961830"),
  i = n("721165"),
  u = n("519801"),
  o = n("589771"),
  d = n("883419"),
  c = n("689938");

function f(e) {
  let {
    guildId: t,
    eligibleApplicationSubscriptionGuilds: n,
    showBenefitsFirst: f
  } = e;
  return [{
    key: null,
    renderStep: e => (0, r.jsx)(o.default, {
      initialStep: f ? a.Step.BENEFITS : a.Step.REVIEW,
      guildId: t,
      ...e
    })
  }, {
    key: a.Step.BENEFITS,
    renderStep: e => (0, r.jsx)(i.default, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => c.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
    }
  }, {
    key: a.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(s.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [a.Step.ADD_PAYMENT_STEPS, a.Step.REVIEW, a.Step.CONFIRM]
      })
    }),
    options: {
      renderHeader: !0
    }
  }, ...l.SHARED_STEP_CONFIGS, {
    key: a.Step.REVIEW,
    renderStep: e => (0, r.jsx)(d.default, {
      backButtonEligible: !!f || void 0,
      prevStep: f ? a.Step.BENEFITS : void 0,
      showGuildPicker: null == t,
      eligibleApplicationSubscriptionGuilds: n,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => c.default.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: a.Step.CONFIRM,
    renderStep: e => (0, r.jsx)(u.default, {
      showBenefits: !f,
      ...e
    })
  }]
}