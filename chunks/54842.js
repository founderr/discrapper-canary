"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(692547),
  c = t(481060),
  d = t(142497),
  u = t(338327),
  E = t(496675),
  _ = t(63063),
  I = t(981631),
  T = t(190378),
  N = t(689938),
  m = t(277060),
  S = t(438825),
  h = t(236140),
  g = t(37069),
  C = t(518513),
  x = t(168179),
  R = t(348986),
  L = t(930065),
  O = t(345669);
let A = () => [{
    icon: c.AnalyticsIcon,
    color: o.Z.unsafe_rawColors.GREEN_360.css,
    header: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_HEADER,
    body: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_BODY.format({
      featureHook: (e, s) => (0, n.jsx)("strong", {
        className: m.featuredText,
        children: e
      }, s)
    })
  }, {
    icon: c.AnalyticsIcon,
    color: o.Z.unsafe_rawColors.PARTNER.css,
    header: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_HEADER,
    body: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_BODY.format({
      infoHook: () => (0, n.jsx)(c.Tooltip, {
        text: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        "aria-label": N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        children: e => (0, n.jsx)(c.CircleInformationIcon, {
          size: "xs",
          color: "currentColor",
          className: m.infoIcon,
          ...e
        })
      }),
      featureHook: (e, s) => (0, n.jsx)("strong", {
        className: m.featuredText,
        children: e
      }, s)
    })
  }, {
    icon: c.CircleInformationIcon,
    color: o.Z.unsafe_rawColors.RED_360.css,
    header: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_HEADER,
    body: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_BODY
  }],
  p = [{
    iconSrc: R,
    name: "Pokemon GO Paris",
    position: [-230, -100]
  }, {
    iconSrc: L,
    name: "Python",
    position: [-180, -100],
    faded: !0,
    rightAlign: !0
  }, {
    iconSrc: C,
    name: "Learn Latin",
    position: [-280, -30],
    faded: !0
  }, {
    iconSrc: x,
    name: "r/leagueoflegends",
    position: [-320, -30],
    rightAlign: !0
  }, {
    iconSrc: O,
    name: "Sneaker Fans",
    position: [-250, 40]
  }, {
    iconSrc: g,
    name: "Hogwarts School",
    position: [-270, 40],
    faded: !0,
    rightAlign: !0
  }],
  M = e => {
    let {
      icon: s,
      color: t,
      size: i = 24,
      header: l,
      body: a
    } = e;
    return (0, n.jsxs)("div", {
      className: m.featureCard,
      children: [(0, n.jsx)("div", {
        className: m.featureIcon,
        children: (0, n.jsx)(s, {
          color: null != t ? t : "currentColor",
          width: i,
          height: i,
          size: "custom"
        })
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        className: m.featureHeader,
        children: l
      }), (0, n.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  f = e => {
    let {
      iconSrc: s,
      name: t,
      position: i,
      faded: l,
      rightAlign: r,
      imageCoordinates: o
    } = e, d = {
      [r ? "right" : "left"]: o[0] + i[0],
      top: o[1] + i[1]
    };
    return (0, n.jsxs)("div", {
      className: a()(m.guildDetails, {
        [m.faded]: l
      }),
      style: d,
      children: [(0, n.jsx)("div", {
        className: m.guildIcon,
        children: (0, n.jsx)("img", {
          alt: "",
          src: s,
          width: 24,
          height: 24
        })
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        children: t
      })]
    })
  };
s.Z = e => {
  let {
    guild: s
  } = e, [t, l] = i.useState(0), [a, o] = i.useState(0), [g, C] = i.useState(), x = (0, r.e7)([E.Z], () => E.Z.can(I.Plq.ADMINISTRATOR, s)), R = null == g ? void 0 : g.offsetWidth, L = null == g ? void 0 : g.offsetHeight;
  i.useEffect(() => {
    null != R && l(R / 2), null != L && o(L / 2)
  }, [R, L, l, o]), i.useEffect(() => {
    (0, d.Kw)(T.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
  }, []);
  let O = () => {
    u.Z.open()
  };
  return (0, n.jsxs)("div", {
    className: m.container,
    children: [(0, n.jsxs)("div", {
      className: m.banner,
      ref: e => C(e),
      children: [p.map(e => (0, n.jsx)(f, {
        ...e,
        imageCoordinates: [t, a]
      }, e.name)), (0, n.jsx)("img", {
        alt: "",
        src: S,
        className: m.image,
        width: 256
      }), (0, n.jsx)("img", {
        alt: "",
        src: h,
        className: m.sparkles
      })]
    }), (0, n.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      children: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_HEADER
    }), (0, n.jsx)(c.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: m.body,
      children: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_BODY_WITH_HELP_ARTICLE.format({
        helpdeskArticle: _.Z.getArticleURL(I.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
      })
    }), (0, n.jsx)(c.Tooltip, {
      text: x ? null : N.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      "aria-label": x ? void 0 : N.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      children: e => (0, n.jsx)(c.Button, {
        onClick: O,
        className: m.button,
        disabled: !x,
        ...e,
        children: N.Z.Messages.GET_STARTED
      })
    }), (0, n.jsx)("hr", {
      className: m.separator
    }), (0, n.jsx)(c.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_DETAILS
    }), (0, n.jsx)(c.Text, {
      color: "header-secondary",
      className: m.body,
      variant: "text-sm/normal",
      children: N.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_LEARN_MORE.format({
        helpdeskArticle: _.Z.getArticleURL(I.BhN.GUILD_COMMUNITY_FEATURE)
      })
    }), (0, n.jsx)("div", {
      className: m.features,
      children: A().map((e, s) => (0, n.jsx)(M, {
        ...e
      }, s))
    })]
  })
}