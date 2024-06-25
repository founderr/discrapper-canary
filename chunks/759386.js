t.r(n), t.d(n, {
  getApplicationPaymentSteps: function() {
    return I
  }
}), t(47120);
var r = t(735250);
t(470079);
var s = t(409813),
  a = t(276442),
  l = t(961830),
  i = t(721165),
  o = t(519801),
  u = t(589771),
  c = t(883419),
  d = t(689938);

function I(e) {
  let {
    guildId: n,
    eligibleApplicationSubscriptionGuilds: t,
    showBenefitsFirst: I
  } = e;
  return [{
    key: null,
    renderStep: e => (0, r.jsx)(u.Z, {
      initialStep: I ? s.h8.BENEFITS : s.h8.REVIEW,
      guildId: n,
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
      showGuildPicker: null == n,
      eligibleApplicationSubscriptionGuilds: t,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => d.Z.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: s.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(o.Z, {
      showBenefits: !I,
      ...e
    })
  }]
}