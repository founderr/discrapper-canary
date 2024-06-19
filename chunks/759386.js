n.r(t), n.d(t, {
  getApplicationPaymentSteps: function() {
    return I
  }
}), n(47120);
var r = n(735250);
n(470079);
var s = n(409813),
  a = n(276442),
  l = n(961830),
  i = n(721165),
  u = n(519801),
  o = n(589771),
  c = n(883419),
  d = n(689938);

function I(e) {
  let {
    guildId: t,
    eligibleApplicationSubscriptionGuilds: n,
    showBenefitsFirst: I
  } = e;
  return [{
    key: null,
    renderStep: e => (0, r.jsx)(o.Z, {
      initialStep: I ? s.h8.BENEFITS : s.h8.REVIEW,
      guildId: t,
      ...e
    })
  }, {
    key: s.h8.BENEFITS,
    renderStep: e => (0, r.jsx)(i.Z, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => d.Z.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
    }
  }, {
    key: s.h8.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(a.J, {
        ...e,
        breadcrumbSteps: [s.h8.ADD_PAYMENT_STEPS, s.h8.REVIEW, s.h8.CONFIRM]
      })
    }),
    options: {
      renderHeader: !0
    }
  }, ...l.yp, {
    key: s.h8.REVIEW,
    renderStep: e => (0, r.jsx)(c.Z, {
      backButtonEligible: !!I || void 0,
      prevStep: I ? s.h8.BENEFITS : void 0,
      showGuildPicker: null == t,
      eligibleApplicationSubscriptionGuilds: n,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => d.Z.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: s.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(u.Z, {
      showBenefits: !I,
      ...e
    })
  }]
}