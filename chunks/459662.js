"use strict";
s.r(t), s.d(t, {
  MarketingSections: function() {
    return m
  },
  default: function() {
    return N
  }
});
var a = s("37983");
s("884691");
var l = s("759843"),
  n = s("77078"),
  i = s("428958"),
  r = s("205881"),
  o = s("724334"),
  d = s("756717"),
  u = s("395905"),
  c = s("219772"),
  E = s("222934"),
  _ = s("830388"),
  I = s("561496"),
  T = s("100072"),
  f = s("396076"),
  S = s("491942");

function m(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: s
  } = e, l = e => {
    let {
      children: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.FormDivider, {
        className: S.sectionDivider
      }), t]
    })
  }, i = (0, a.jsx)(l, {
    children: (0, a.jsx)(I.default, {})
  }, f.CreatorMonetizationOnboardingMarketingSection.HOW_IT_WORKS), r = (0, a.jsx)(l, {
    children: (0, a.jsx)(E.default, {})
  }, f.CreatorMonetizationOnboardingMarketingSection.BENEFITS);
  return null != s || (null == t ? void 0 : t.sections) == null ? (0, a.jsxs)(a.Fragment, {
    children: [i, r]
  }) : (0, a.jsx)(a.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case f.CreatorMonetizationOnboardingMarketingSection.HOW_IT_WORKS:
          return i;
        case f.CreatorMonetizationOnboardingMarketingSection.BENEFITS:
          return r;
        case f.CreatorMonetizationOnboardingMarketingSection.OTHER_CREATORS:
          return (0, a.jsx)(l, {
            children: (0, a.jsx)(_.default, {
              highlightedCreators: e.creators
            })
          }, f.CreatorMonetizationOnboardingMarketingSection.OTHER_CREATORS)
      }
    })
  })
}

function N(e) {
  let {
    guild: t
  } = e, s = (0, d.default)(t), {
    eligibilityLoading: E,
    eligibilityError: _,
    eligibility: I
  } = s, f = (0, r.useCreatorMonetizationIneligibleReasons)(I), {
    isLoading: N,
    error: g,
    creatorMonetizationOnboardingMarketing: h
  } = (0, o.default)(t.id);
  return ((0, i.default)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: s.isGuildOwner,
      is_eligible: s.eligibleForMonetization,
      ineligible_reasons: f
    }
  }, {
    disableTrack: null == t.id || null == I
  }), E || null == I || N) ? (0, a.jsx)(n.Spinner, {}) : I.actionRequired ? (0, a.jsx)(T.default, {
    guild: t
  }) : null != _ ? (0, a.jsx)(u.default, {
    children: _.message
  }) : (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)(c.default, {
      guild: t,
      monetizationEligibility: s
    }), (0, a.jsx)(m, {
      onboardingMarketing: h,
      onboardingMarketingError: g
    })]
  })
}