"use strict";
a.r(t), a("47120");
var n, s, l = a("735250"),
  i = a("470079"),
  r = a("120356"),
  o = a.n(r),
  u = a("143927"),
  d = a("481060"),
  c = a("393903"),
  f = a("231467"),
  E = a("807933"),
  h = a("207796"),
  _ = a("116175"),
  C = a("308083"),
  m = a("689938"),
  S = a("324243");
(s = n || (n = {})).COVER = "cover", s.WIZARD = "wizard";
let I = [{
    id: "games",
    renderBackButton: () => !1,
    enableNextButton: () => !0
  }, {
    id: "playstyles",
    renderBackButton: () => !0,
    enableNextButton: e => null !== e.selectedPlaystyle
  }, {
    id: "preferences",
    renderBackButton: () => !0,
    enableNextButton: () => !0
  }],
  p = [{
    id: "1",
    name: "Clan 1",
    description: "Description",
    memberCount: 100,
    games: [C.VALORANT_ID],
    playstyle: C.ClanPlaystyles.COMPETITIVE,
    traits: ["Trait 1", "Trait 2"],
    tag: "TAG",
    banner: C.ClanBannerKind.PIXEL_RUSH,
    badge: {
      badgeKind: _.ClanBadgeKind.SWORD,
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    branding: {
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    wildcardDescriptors: ["", "", ""]
  }, {
    id: "2",
    name: "Clan 2",
    description: "Description",
    memberCount: 100,
    games: [C.VALORANT_ID],
    playstyle: C.ClanPlaystyles.COMPETITIVE,
    traits: ["Trait 1", "Trait 2"],
    tag: "TAG",
    banner: C.ClanBannerKind.PIXEL_RUSH,
    badge: {
      badgeKind: _.ClanBadgeKind.SWORD,
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    branding: {
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    wildcardDescriptors: ["", "", ""]
  }, {
    id: "3",
    name: "Clan 3",
    description: "Description",
    memberCount: 100,
    games: [C.VALORANT_ID],
    playstyle: C.ClanPlaystyles.COMPETITIVE,
    traits: ["Trait 1", "Trait 2"],
    tag: "TAG",
    banner: C.ClanBannerKind.PIXEL_RUSH,
    badge: {
      badgeKind: _.ClanBadgeKind.SWORD,
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    branding: {
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    wildcardDescriptors: ["", "", ""]
  }, {
    id: "4",
    name: "Clan 4",
    description: "Description",
    memberCount: 100,
    games: [C.VALORANT_ID],
    playstyle: C.ClanPlaystyles.COMPETITIVE,
    traits: ["Trait 1", "Trait 2"],
    tag: "TAG",
    banner: C.ClanBannerKind.PIXEL_RUSH,
    badge: {
      badgeKind: _.ClanBadgeKind.SWORD,
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    branding: {
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    wildcardDescriptors: ["", "", ""]
  }, {
    id: "5",
    name: "Clan 5",
    description: "Description",
    memberCount: 100,
    games: [C.VALORANT_ID],
    playstyle: C.ClanPlaystyles.COMPETITIVE,
    traits: ["Trait 1", "Trait 2"],
    tag: "TAG",
    banner: C.ClanBannerKind.PIXEL_RUSH,
    badge: {
      badgeKind: _.ClanBadgeKind.SWORD,
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    branding: {
      primaryColor: "#000",
      secondaryColor: "#fff"
    },
    wildcardDescriptors: ["", "", ""]
  }];

function T(e) {
  let {
    onGetStarted: t
  } = e, a = (0, h.useClanDiscoveryUIStore)(e => e.game, u.default), [n, s] = i.useState(0), r = i.useCallback(e => {
    s(e.contentRect.width)
  }, [s]), o = (0, c.useResizeObserver)(r), E = a === h.ClanDiscoveryGame.GENSHIN ? h.GENSHIN_BACKGROUND_URL : h.VALORANT_BACKGROUND_URL, _ = e => {
    switch (e) {
      case 0:
      case 4:
        return S.card80;
      case 1:
      case 3:
        return S.card90;
      default:
        return S.card100
    }
  }, C = i.useCallback(e => {
    let t = n / 2,
      a = 0,
      s = 0,
      l = 0;
    switch (e) {
      case 0:
        s = -2, a = 20, l = 0;
        break;
      case 1:
        s = -1, l = 1;
        break;
      case 2:
        s = 0, l = 2;
        break;
      case 3:
        s = 1, l = 1;
        break;
      case 4:
        s = 2, a = -20, l = 0
    }
    return {
      left: "".concat(t - 120 + 240 * s + a, "px"),
      zIndex: l
    }
  }, [n]);
  return (0, l.jsxs)("div", {
    ref: o,
    className: S.container,
    style: {
      background: "url(".concat(E, ") black top / cover no-repeat")
    },
    children: [(0, l.jsx)("div", {
      className: S.cards,
      children: p.map((e, t) => (0, l.jsx)("div", {
        style: C(t),
        className: _(t),
        children: (0, l.jsx)(f.ClanDiscoveryCardView, {
          clan: e
        })
      }, e.id))
    }), (0, l.jsxs)("div", {
      className: S.content,
      children: [(0, l.jsxs)("div", {
        className: S.title,
        children: [(0, l.jsx)(d.Heading, {
          variant: "heading-lg/normal",
          color: "header-primary",
          children: m.default.Messages.CLAN_DISCOVERY_GET_STARTED_TITLE
        }), (0, l.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: m.default.Messages.CLAN_DISCOVERY_GET_STARTED_SUBTITLE
        })]
      }), (0, l.jsx)(d.Button, {
        look: d.ButtonLooks.FILLED,
        color: d.ButtonColors.WHITE,
        onClick: t,
        className: S.button,
        children: (0, l.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "none",
          children: m.default.Messages.CLAN_DISCOVERY_GET_STARTED_BUTTON
        })
      })]
    })]
  })
}

function g() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.setMode, u.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, u.default),
    [a, n] = i.useState(() => 0),
    s = I[a],
    r = I.map(e => e.id),
    c = i.useCallback(e => {
      switch (e.id) {
        case "games":
          return (0, l.jsx)(E.GameSelector, {});
        case "playstyles":
          return (0, l.jsx)(E.PlayStyleSelector, {});
        case "preferences":
          return (0, l.jsx)(E.TraitSelector, {})
      }
      return null
    }, []);
  return null == s ? null : (0, l.jsxs)("div", {
    className: S.wizard,
    children: [(0, l.jsx)(d.Sequencer, {
      step: s.id,
      steps: r,
      children: (0, l.jsx)(d.ScrollerThin, {
        className: S.scroller,
        fade: !0,
        children: c(s)
      })
    }), (0, l.jsxs)("div", {
      className: S.footer,
      children: [(0, l.jsx)("div", {
        className: S.progressContainer,
        children: I.map((e, t) => (0, l.jsx)("div", {
          className: o()(S.progressStep, {
            [S.progressStepCompleted]: a >= t
          })
        }, e.id))
      }), (0, l.jsxs)("div", {
        className: S.footerActions,
        children: [s.renderBackButton() ? (0, l.jsx)(d.Button, {
          look: d.ButtonLooks.OUTLINED,
          color: d.ButtonColors.PRIMARY,
          disabled: 0 === a,
          onClick: () => {
            let e = a - 1;
            e >= 0 && n(e)
          },
          children: (0, l.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: m.default.Messages.BACK
          })
        }) : (0, l.jsx)("div", {}), (0, l.jsx)(d.Button, {
          look: d.ButtonLooks.FILLED,
          color: d.ButtonColors.BRAND,
          disabled: !s.enableNextButton({
            selectedPlaystyle: t
          }),
          onClick: () => {
            let t = a + 1;
            t < r.length ? n(t) : e(h.ClanDiscoveryMode.DISCOVERY)
          },
          children: (0, l.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: m.default.Messages.NEXT
          })
        })]
      })]
    })]
  })
}
t.default = function() {
  let [e, t] = i.useState("cover"), a = i.useCallback(() => {
    t("wizard")
  }, [t]);
  return "wizard" === e ? (0, l.jsx)(g, {}) : (0, l.jsx)(T, {
    onGetStarted: a
  })
}