"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("780384"),
  r = n("481060"),
  o = n("410030"),
  u = n("808268"),
  d = n("497505"),
  c = n("918701"),
  f = n("78826"),
  E = n("670638"),
  h = n("981631"),
  _ = n("689938"),
  C = n("430783");

function m(e) {
  let {
    quest: t,
    onCtxMenuClose: n,
    onCtxMenuOpen: s,
    onCtxMenuSelect: m
  } = e, S = (0, c.getQuestBarHeroAssetUrl)(t), p = (0, o.default)(), I = (0, i.isThemeDark)(p) ? h.ThemeTypes.DARK : h.ThemeTypes.LIGHT, g = I === h.ThemeTypes.DARK, T = (0, c.isTargetedForContent)(t, d.QuestContent.QUEST_BAR);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: C.container,
      children: [(0, a.jsx)("div", {
        className: C.heroAssetWrapper,
        children: (0, a.jsx)(f.QuestsAsset, {
          id: "QuestTileBanner",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: C.heroAsset,
            src: S
          })
        })
      }), (0, a.jsx)("div", {
        className: l()(C.overlay, {
          [C.darkThemeGradient]: g,
          [C.lightThemeGradient]: !g
        })
      }), (0, a.jsx)("div", {
        className: C.positionContentOverBackground,
        children: (0, a.jsxs)("div", {
          className: C.contents,
          children: [(0, a.jsxs)("div", {
            className: C.topRow,
            children: [T && (0, a.jsx)("div", {
              className: C.pill,
              children: (0, a.jsx)(r.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: C.eyebrowText,
                children: _.default.Messages.RECOMMENDED
              })
            }), (0, a.jsx)(E.QuestsEntryContextMenuPopout, {
              onOpen: s,
              onClose: n,
              onSelect: m,
              questContent: d.QuestContent.QUEST_HOME_DESKTOP,
              quest: t,
              hideLearnMore: !0,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(r.Clickable, {
                ...e,
                className: C.submenuWrapper,
                "aria-label": _.default.Messages.ACTIONS,
                children: (0, a.jsx)(u.default, {
                  className: l()(C.submenuIcon)
                })
              })
            })]
          }), (0, a.jsx)(f.QuestsAsset, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, a.jsx)("img", {
              ref: e,
              className: C.partnerBranding,
              alt: t.config.messages.gameTitle,
              src: (0, c.getGameLogotypeAssetUrl)(t, I)
            })
          }), (0, a.jsx)("div", {
            className: C.bottomRow,
            children: (0, a.jsx)(r.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: _.default.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                brandName: t.config.messages.gamePublisher
              })
            })
          })]
        })
      })]
    }), (0, a.jsx)("div", {
      className: C.spacer
    })]
  })
}