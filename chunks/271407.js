"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("669491"),
  d = s("77078"),
  u = s("597517"),
  c = s("45395"),
  E = s("957255"),
  _ = s("756609"),
  T = s("68238"),
  I = s("240292"),
  S = s("701909"),
  N = s("49111"),
  g = s("533613"),
  f = s("782340"),
  A = s("430364"),
  L = s("175717"),
  m = s("869917"),
  C = s("133765"),
  O = s("138131"),
  h = s("52846"),
  R = s("656011"),
  D = s("845929"),
  M = s("144582");
let G = () => [{
    icon: I.default,
    color: o.default.unsafe_rawColors.GREEN_360.css,
    header: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_HEADER,
    body: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_BODY.format({
      featureHook: (e, t) => (0, a.jsx)("strong", {
        className: A.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: _.default,
    color: o.default.unsafe_rawColors.PARTNER.css,
    header: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_HEADER,
    body: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_BODY.format({
      infoHook: () => (0, a.jsx)(d.Tooltip, {
        text: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        "aria-label": f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        children: e => (0, a.jsx)(T.default, {
          className: A.infoIcon,
          ...e
        })
      }),
      featureHook: (e, t) => (0, a.jsx)("strong", {
        className: A.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: T.default,
    color: o.default.unsafe_rawColors.RED_360.css,
    header: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_HEADER,
    body: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_BODY
  }],
  x = [{
    iconSrc: R,
    name: "Pokemon GO Paris",
    position: [-230, -100]
  }, {
    iconSrc: D,
    name: "Python",
    position: [-180, -100],
    faded: !0,
    rightAlign: !0
  }, {
    iconSrc: O,
    name: "Learn Latin",
    position: [-280, -30],
    faded: !0
  }, {
    iconSrc: h,
    name: "r/leagueoflegends",
    position: [-320, -30],
    rightAlign: !0
  }, {
    iconSrc: M,
    name: "Sneaker Fans",
    position: [-250, 40]
  }, {
    iconSrc: C,
    name: "Hogwarts School",
    position: [-270, 40],
    faded: !0,
    rightAlign: !0
  }],
  p = e => {
    let {
      icon: t,
      color: s,
      size: n = 24,
      header: l,
      body: i
    } = e;
    return (0, a.jsxs)("div", {
      className: A.featureCard,
      children: [(0, a.jsx)("div", {
        className: A.featureIcon,
        children: (0, a.jsx)(t, {
          color: s,
          width: n,
          height: n
        })
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: A.featureHeader,
        children: l
      }), (0, a.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: i
      })]
    })
  },
  U = e => {
    let {
      iconSrc: t,
      name: s,
      position: n,
      faded: l,
      rightAlign: r,
      imageCoordinates: o
    } = e, u = {
      [r ? "right" : "left"]: o[0] + n[0],
      top: o[1] + n[1]
    };
    return (0, a.jsxs)("div", {
      className: i(A.guildDetails, {
        [A.faded]: l
      }),
      style: u,
      children: [(0, a.jsx)("div", {
        className: A.guildIcon,
        children: (0, a.jsx)("img", {
          alt: "",
          src: t,
          width: 24,
          height: 24
        })
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-deprecated-12/semibold",
        children: s
      })]
    })
  };
var v = e => {
  let {
    guild: t
  } = e, [s, l] = n.useState(0), [i, o] = n.useState(0), [_, T] = n.useState(), I = (0, r.useStateFromStores)([E.default], () => E.default.can(N.Permissions.ADMINISTRATOR, t)), C = null == _ ? void 0 : _.offsetWidth, O = null == _ ? void 0 : _.offsetHeight;
  n.useEffect(() => {
    null != C && l(C / 2), null != O && o(O / 2)
  }, [C, O, l, o]), n.useEffect(() => {
    (0, u.hideHotspot)(g.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
  }, []);
  let h = () => {
    c.default.open()
  };
  return (0, a.jsxs)("div", {
    className: A.container,
    children: [(0, a.jsxs)("div", {
      className: A.banner,
      ref: e => T(e),
      children: [x.map(e => (0, a.jsx)(U, {
        ...e,
        imageCoordinates: [s, i]
      }, e.name)), (0, a.jsx)("img", {
        alt: "",
        src: L,
        className: A.image,
        width: 256
      }), (0, a.jsx)("img", {
        alt: "",
        src: m,
        className: A.sparkles
      })]
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-xl/semibold",
      children: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: A.body,
      children: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_BODY_WITH_HELP_ARTICLE.format({
        helpdeskArticle: S.default.getArticleURL(N.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
      })
    }), (0, a.jsx)(d.Tooltip, {
      text: I ? null : f.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      "aria-label": I ? void 0 : f.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      children: e => (0, a.jsx)(d.Button, {
        onClick: h,
        className: A.button,
        disabled: !I,
        ...e,
        children: f.default.Messages.GET_STARTED
      })
    }), (0, a.jsx)("hr", {
      className: A.separator
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_DETAILS
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      className: A.body,
      variant: "text-sm/normal",
      children: f.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_LEARN_MORE.format({
        helpdeskArticle: S.default.getArticleURL(N.HelpdeskArticles.GUILD_COMMUNITY_FEATURE)
      })
    }), (0, a.jsx)("div", {
      className: A.features,
      children: G().map((e, t) => (0, a.jsx)(p, {
        ...e
      }, t))
    })]
  })
}