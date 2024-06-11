"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var l = s("780384"),
  n = s("481060"),
  i = s("410030"),
  r = s("293810"),
  o = s("689938"),
  d = s("954594"),
  u = s("934961"),
  c = s("568294"),
  E = s("867861"),
  _ = s("860790"),
  I = s("268953"),
  T = s("487703"),
  S = s("458050"),
  f = s("334364"),
  m = s("431712");

function N(e) {
  return (0, l.isThemeDark)(e) ? d.revenueSharePercentageDark : d.revenueSharePercentageLight
}

function g() {
  let e = (0, i.default)(),
    t = {
      backgroundColor: (0, l.isThemeDark)(e) ? "#2e3638" : "var(--background-primary)"
    };
  return (0, a.jsxs)("div", {
    className: d.earningsPreviewContainer,
    style: t,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_NEW_SUBS
      }), (0, a.jsx)(n.Spacer, {
        size: 8
      }), (0, a.jsx)(n.Heading, {
        variant: "heading-md/bold",
        className: N(e),
        children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_REVENUE_INCREASE
      })]
    }), (0, a.jsx)("img", {
      className: d.roundAvatar,
      src: T,
      alt: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_PREVIEW_IMG_ALT
    })]
  })
}

function h() {
  let e = (0, i.default)();

  function t(e) {
    let {
      length: t,
      horizontal: s
    } = e;
    return (0, a.jsx)("div", {
      className: s ? d.horizontalConnector : d.verticalConnector,
      style: {
        ...s ? {
          width: t
        } : {
          height: t
        },
        border: "1px solid #49494933"
      }
    })
  }
  return (0, a.jsxs)("div", {
    className: d.avatarGridContainer,
    "aria-label": o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_GRID_ARIA_LABEL,
    children: [(0, a.jsxs)("div", {
      className: d.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 24
      }), (0, a.jsx)("img", {
        className: d.roundAvatar,
        src: (0, l.isThemeDark)(e) ? u : c,
        alt: ""
      }), (0, a.jsx)(t, {
        horizontal: !0,
        length: 12
      })]
    }), (0, a.jsxs)("div", {
      className: d.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 24
      }), (0, a.jsx)("img", {
        className: d.roundAvatar,
        src: E,
        alt: ""
      })]
    }), (0, a.jsxs)("div", {
      className: d.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 12
      }), (0, a.jsx)("img", {
        className: d.roundAvatar,
        src: _,
        alt: ""
      }), (0, a.jsx)(t, {
        horizontal: !0,
        length: 12
      })]
    }), (0, a.jsxs)("div", {
      className: d.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 12
      }), (0, a.jsx)("img", {
        className: d.roundAvatar,
        src: I,
        alt: ""
      })]
    })]
  })
}

function C() {
  return (0, a.jsxs)("div", {
    className: d.earningBenefitCard,
    children: [(0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1
    }), (0, a.jsx)(n.Spacer, {
      size: 32
    }), (0, a.jsx)(g, {}), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsx)(h, {})]
  })
}

function R() {
  return (0, a.jsxs)("div", {
    className: d.followerBenefitCard,
    children: [(0, a.jsx)(n.Text, {
      className: d.followerBenefitText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2
    }), (0, a.jsx)("img", {
      className: d.roleSubscriptionSocial,
      src: m,
      alt: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_1_ALT
    }), (0, a.jsx)("img", {
      className: d.roleSubscriptionLanyardIllo,
      src: f,
      alt: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_2_ALT
    })]
  })
}

function x() {
  let e = (0, i.default)();
  return (0, a.jsxs)("div", {
    className: d.revenueShareBenefitCard,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsxs)(n.Heading, {
        className: N(e),
        style: {
          fontSize: "50px",
          lineHeight: "52px"
        },
        variant: "heading-xxl/extrabold",
        children: [r.CREATOR_REVENUE_SHARE_PERCENTAGE, "%"]
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3
      })]
    }), (0, a.jsx)("img", {
      className: d.roleSubscriptionEarningIllo,
      src: S,
      alt: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3_IMG_ALT
    })]
  })
}

function L() {
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFITS_FOR_CREATORS_TITLE
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: d.creatorBenefitsContainer,
      children: [(0, a.jsx)(C, {}), (0, a.jsx)(R, {}), (0, a.jsx)(x, {})]
    })]
  })
}