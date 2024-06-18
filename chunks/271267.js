"use strict";
t.d(s, {
  Q: function() {
    return E
  },
  Z: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(957011),
  r = t(587431),
  o = t(756066),
  c = t(689938),
  d = t(843804),
  u = t(270395);
let E = "role_subscriptions_eligibility_modal";

function _(e) {
  let {
    guild: s,
    eligibility: i,
    eligibilityLoading: a,
    eligibilityError: r,
    refreshEligibility: o
  } = e;
  return (0, n.jsxs)(l.Button, {
    color: l.ButtonColors.CUSTOM,
    className: d.ineligibleButton,
    innerClassName: d.ineligibleButtonContent,
    grow: !0,
    onClick: function() {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("21863")]).then(t.bind(t, 466501));
        return t => (0, n.jsx)(e, {
          ...t,
          eligibility: i,
          eligibilityLoading: a,
          eligibilityError: r,
          refreshEligibility: o,
          guildId: s.id
        })
      }, {
        modalKey: E
      })
    },
    size: l.Button.Sizes.LARGE,
    children: [(0, n.jsx)(l.CircleExclamationPointIcon, {
      size: "xs",
      color: "currentColor"
    }), c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA]
  })
}

function I(e) {
  let {
    guild: s,
    checkboxText: t
  } = e, {
    canSubmitAcceptance: o,
    error: u,
    loading: E,
    submitAcceptTermsRequest: _
  } = (0, a.Z)(s.id), [I, T] = i.useState(!1);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Checkbox, {
      onChange: function() {
        T(e => !e)
      },
      size: 20,
      type: l.Checkbox.Types.INVERTED,
      value: I,
      children: (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: t
      })
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(l.Button, {
      className: d.ctaButton,
      disabled: !I || !o,
      grow: !0,
      onClick: _,
      size: l.Button.Sizes.LARGE,
      submitting: E,
      children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA
    }), null != u && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.Spacer, {
        size: 24
      }), (0, n.jsx)(r.Z, {
        children: u.getAnyErrorMessage()
      })]
    })]
  })
}

function T(e) {
  let {
    guild: s,
    monetizationEligibility: t
  } = e, {
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a,
    eligibility: r,
    eligibleForMonetization: c,
    acceptTermsCheckboxText: d,
    wasRejectedInV1: u
  } = t;
  return c ? u ? (0, n.jsx)(o.Z, {
    ...t
  }) : (0, n.jsx)(I, {
    guild: s,
    checkboxText: d
  }) : (0, n.jsx)(_, {
    guild: s,
    eligibility: r,
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a
  })
}

function N(e) {
  let {
    guild: s,
    monetizationEligibility: t
  } = e;
  return (0, n.jsxs)("div", {
    className: d.ctaContainer,
    children: [(0, n.jsx)("img", {
      className: d.heroBanner,
      src: u,
      alt: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
    }), (0, n.jsxs)("div", {
      className: d.ctaContent,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }), (0, n.jsx)(l.Spacer, {
        size: 12
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }), (0, n.jsx)(l.Spacer, {
        size: 24
      }), (0, n.jsx)(T, {
        guild: s,
        monetizationEligibility: t
      })]
    })]
  })
}