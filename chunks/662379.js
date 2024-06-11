"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("293810"),
  i = s("689938"),
  r = s("73033"),
  o = s("961618"),
  d = s("217684"),
  u = s("174618");

function c(e) {
  let {
    imageSrc: t,
    description: s
  } = e;
  return (0, a.jsxs)("div", {
    className: r.howItWorksCard,
    children: [(0, a.jsx)("div", {
      className: r.howItWorksImageContainer,
      children: (0, a.jsx)("img", {
        className: r.howItWorksImage,
        src: t,
        alt: ""
      })
    }), (0, a.jsx)("div", {
      className: r.howItWorksDescription,
      children: (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: s
      })
    })]
  })
}

function E() {
  let e = [{
    imageSrc: u,
    description: i.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_1
  }, {
    imageSrc: o,
    description: i.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_2
  }, {
    imageSrc: d,
    description: i.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_3
  }];
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: i.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_TITLE
    }), (0, a.jsx)(l.Spacer, {
      size: 24
    }), (0, a.jsx)("div", {
      className: r.howItWorksContainer,
      children: e.map(e => (0, a.jsx)(c, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))
    }), (0, a.jsx)(l.Spacer, {
      size: 24
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: i.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_FOOTER.format({
        creatorPortalUrl: n.CREATOR_REVENUE_PORTAL_URL
      })
    })]
  })
}