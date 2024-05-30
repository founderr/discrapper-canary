"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("186325"),
  o = n("780384"),
  u = n("481060"),
  d = n("410030"),
  c = n("808268"),
  f = n("810090"),
  E = n("497505"),
  h = n("918701"),
  _ = n("78826"),
  C = n("670638"),
  m = n("981631"),
  S = n("689938"),
  p = n("430783");

function I(e) {
  let {
    quest: t,
    isHovering: n,
    onCtxMenuClose: l,
    onCtxMenuOpen: I,
    onCtxMenuSelect: g
  } = e, T = (0, h.getQuestBarHeroAssetUrl)(t), A = (0, d.default)(), N = (0, o.isThemeDark)(A) ? m.ThemeTypes.DARK : m.ThemeTypes.LIGHT, v = N === m.ThemeTypes.DARK, R = s.useMemo(() => (0, h.isAssetAnimated)(t.config.assets.questBarHero), [t]), O = s.useContext(r.AccessibilityPreferencesContext).reducedMotion.enabled, L = (0, h.isTargetedForContent)(t, E.QuestContent.QUEST_BAR), M = s.useRef(n), x = s.useRef(null);
  return s.useEffect(() => {
    if (R && null != x.current) return M.current !== n && (n ? x.current.play() : (x.current.pause(), x.current.currentTime = 0)), M.current = n, () => {
      var e;
      null === (e = x.current) || void 0 === e || e.pause()
    }
  }, [n, R]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: p.container,
      children: [(0, a.jsx)("div", {
        className: p.heroAssetWrapper,
        children: R ? (0, a.jsx)(_.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (null != e.current && (x.current = e.current), (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !O && n,
            loop: !0,
            playsInline: !0,
            className: p.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: T,
              type: (0, h.getVideoAssetMimeType)(T)
            })
          }))
        }) : (0, a.jsx)(_.QuestsAsset, {
          id: "QuestTileBanner",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: p.heroAsset,
            src: T
          })
        })
      }), (0, a.jsx)("div", {
        className: i()(p.overlay, {
          [p.darkThemeGradient]: v,
          [p.lightThemeGradient]: !v
        })
      }), (0, a.jsx)("div", {
        className: p.positionContentOverBackground,
        children: (0, a.jsxs)("div", {
          className: p.contents,
          children: [(0, a.jsxs)("div", {
            className: p.topRow,
            children: [L && (0, a.jsx)("div", {
              className: p.pill,
              children: (0, a.jsx)(u.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: p.eyebrowText,
                children: S.default.Messages.RECOMMENDED
              })
            }), (0, a.jsx)(C.QuestsEntryContextMenuPopout, {
              onOpen: I,
              onClose: l,
              onSelect: g,
              questContent: E.QuestContent.QUEST_HOME_DESKTOP,
              quest: t,
              hideLearnMore: !0,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(u.Clickable, {
                ...e,
                className: p.submenuWrapper,
                "aria-label": S.default.Messages.ACTIONS,
                children: (0, a.jsx)(c.default, {
                  className: i()(p.submenuIcon)
                })
              })
            })]
          }), (0, a.jsx)(_.QuestsAsset, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, a.jsx)("img", {
              ref: e,
              className: p.partnerBranding,
              alt: t.config.messages.gameTitle,
              src: (0, h.getGameLogotypeAssetUrl)(t, N)
            })
          }), (0, a.jsx)("div", {
            className: p.bottomRow,
            children: (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: S.default.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                brandName: t.config.messages.gamePublisher
              })
            })
          })]
        })
      })]
    }), (0, a.jsx)("div", {
      className: p.spacer
    })]
  })
}