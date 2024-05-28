"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
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
  C = n("981631"),
  h = n("689938"),
  _ = n("430783");

function S(e) {
  let {
    quest: t,
    onCtxMenuClose: n,
    onCtxMenuOpen: s,
    onCtxMenuSelect: S
  } = e, m = (0, c.getQuestBarHeroAssetUrl)(t), p = (0, o.default)(), I = (0, i.isThemeDark)(p) ? C.ThemeTypes.DARK : C.ThemeTypes.LIGHT, g = I === C.ThemeTypes.DARK, T = (0, c.isTargetedForContent)(t, d.QuestContent.QUEST_BAR);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: _.container,
      children: [(0, a.jsx)("div", {
        className: _.heroAssetWrapper,
        children: (0, a.jsx)(f.QuestsAsset, {
          id: "QuestTileBanner",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: _.heroAsset,
            src: m
          })
        })
      }), (0, a.jsx)("div", {
        className: l()(_.overlay, {
          [_.darkThemeGradient]: g,
          [_.lightThemeGradient]: !g
        })
      }), (0, a.jsx)("div", {
        className: _.positionContentOverBackground,
        children: (0, a.jsxs)("div", {
          className: _.contents,
          children: [(0, a.jsxs)("div", {
            className: _.topRow,
            children: [T && (0, a.jsx)("div", {
              className: _.pill,
              children: (0, a.jsx)(r.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: _.eyebrowText,
                children: h.default.Messages.RECOMMENDED
              })
            }), (0, a.jsx)(E.QuestsEntryContextMenuPopout, {
              onOpen: s,
              onClose: n,
              onSelect: S,
              questContent: d.QuestContent.QUEST_HOME_DESKTOP,
              quest: t,
              hideLearnMore: !0,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(r.Clickable, {
                ...e,
                className: _.submenuWrapper,
                "aria-label": h.default.Messages.ACTIONS,
                children: (0, a.jsx)(u.default, {
                  className: l()(_.submenuIcon)
                })
              })
            })]
          }), (0, a.jsx)(f.QuestsAsset, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, a.jsx)("img", {
              ref: e,
              className: _.partnerBranding,
              alt: t.config.messages.gameTitle,
              src: (0, c.getGameLogotypeAssetUrl)(t, I)
            })
          }), (0, a.jsx)("div", {
            className: _.bottomRow,
            children: (0, a.jsx)(r.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: h.default.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                brandName: t.config.messages.gamePublisher
              })
            })
          })]
        })
      })]
    }), (0, a.jsx)("div", {
      className: _.spacer
    })]
  })
}