"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("735250");
s("470079");
var l = s("990547"),
  n = s("481060"),
  i = s("213609"),
  r = s("787051"),
  o = s("696936"),
  d = s("539290"),
  u = s("975464"),
  c = s("689938"),
  E = s("856788"),
  _ = s("270395");

function I(e) {
  let {
    config: t
  } = e, {
    noticeText: s,
    ctaLabel: l,
    ctaClickable: i,
    onCtaClicked: r
  } = t;
  return (0, a.jsxs)("div", {
    className: E.__invalid_ctaContainer,
    children: [(0, a.jsx)("img", {
      className: E.__invalid_heroBanner,
      src: _,
      alt: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
    }), (0, a.jsxs)("div", {
      className: E.__invalid_ctaContent,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }), (0, a.jsx)(n.Spacer, {
        size: 12
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: c.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }), (0, a.jsx)(n.Spacer, {
        size: 24
      }), (0, a.jsx)(d.default, {
        className: E.waitlist,
        color: o.MessageBlockColors.BROWN,
        buttonPosition: d.WarningBlockButtonPosition.RIGHT,
        notice: s,
        ctaLabel: l,
        ctaDisabled: !i,
        ctaClassName: E.waitlistCtaButton,
        onClick: r
      })]
    })]
  })
}

function T(e) {
  let {
    guild: t,
    config: s
  } = e, {
    isLoading: o,
    error: d,
    creatorMonetizationOnboardingMarketing: c
  } = (0, r.default)(t.id);
  return ((0, i.default)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: t.id
    }
  }), o) ? (0, a.jsx)(n.Spinner, {}) : (0, a.jsxs)("div", {
    className: E.__invalid_container,
    children: [(0, a.jsx)(I, {
      config: s
    }), (0, a.jsx)(u.MarketingSections, {
      onboardingMarketing: c,
      onboardingMarketingError: d
    })]
  })
}