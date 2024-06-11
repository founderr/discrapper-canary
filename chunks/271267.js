"use strict";
s.r(t), s.d(t, {
  ELIGIBILITY_MODAL_KEY: function() {
    return _
  },
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("957011"),
  r = s("759231"),
  o = s("587431"),
  d = s("756066"),
  u = s("689938"),
  c = s("843804"),
  E = s("270395");
let _ = "role_subscriptions_eligibility_modal";

function I(e) {
  let {
    guild: t,
    eligibility: l,
    eligibilityLoading: i,
    eligibilityError: o,
    refreshEligibility: d
  } = e;
  return (0, a.jsxs)(n.Button, {
    color: n.ButtonColors.CUSTOM,
    className: c.ineligibleButton,
    innerClassName: c.ineligibleButtonContent,
    grow: !0,
    onClick: function() {
      (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("49368"), s.e("35522"), s.e("78032")]).then(s.bind(s, "466501"));
        return s => (0, a.jsx)(e, {
          ...s,
          eligibility: l,
          eligibilityLoading: i,
          eligibilityError: o,
          refreshEligibility: d,
          guildId: t.id
        })
      }, {
        modalKey: _
      })
    },
    size: n.Button.Sizes.LARGE,
    children: [(0, a.jsx)(r.default, {
      height: 16,
      width: 16
    }), u.default.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA]
  })
}

function T(e) {
  let {
    guild: t,
    checkboxText: s
  } = e, {
    canSubmitAcceptance: r,
    error: d,
    loading: E,
    submitAcceptTermsRequest: _
  } = (0, i.default)(t.id), [I, T] = l.useState(!1);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.Checkbox, {
      onChange: function() {
        T(e => !e)
      },
      size: 20,
      type: n.Checkbox.Types.INVERTED,
      value: I,
      children: (0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: s
      })
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsx)(n.Button, {
      className: c.ctaButton,
      disabled: !I || !r,
      grow: !0,
      onClick: _,
      size: n.Button.Sizes.LARGE,
      submitting: E,
      children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA
    }), null != d && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.Spacer, {
        size: 24
      }), (0, a.jsx)(o.default, {
        children: d.getAnyErrorMessage()
      })]
    })]
  })
}

function S(e) {
  let {
    guild: t,
    monetizationEligibility: s
  } = e, {
    eligibilityLoading: l,
    eligibilityError: n,
    refreshEligibility: i,
    eligibility: r,
    eligibleForMonetization: o,
    acceptTermsCheckboxText: u,
    wasRejectedInV1: c
  } = s;
  return o ? c ? (0, a.jsx)(d.default, {
    ...s
  }) : (0, a.jsx)(T, {
    guild: t,
    checkboxText: u
  }) : (0, a.jsx)(I, {
    guild: t,
    eligibility: r,
    eligibilityLoading: l,
    eligibilityError: n,
    refreshEligibility: i
  })
}

function f(e) {
  let {
    guild: t,
    monetizationEligibility: s
  } = e;
  return (0, a.jsxs)("div", {
    className: c.ctaContainer,
    children: [(0, a.jsx)("img", {
      className: c.heroBanner,
      src: E,
      alt: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
    }), (0, a.jsxs)("div", {
      className: c.ctaContent,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }), (0, a.jsx)(n.Spacer, {
        size: 12
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }), (0, a.jsx)(n.Spacer, {
        size: 24
      }), (0, a.jsx)(S, {
        guild: t,
        monetizationEligibility: s
      })]
    })]
  })
}