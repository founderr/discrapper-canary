"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
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
  E = n("113434"),
  h = n("497505"),
  C = n("918701"),
  _ = n("78826"),
  m = n("670638"),
  S = n("981631"),
  p = n("689938"),
  I = n("430783");

function g(e) {
  let {
    quest: t,
    isHovering: n,
    onCtxMenuClose: l,
    onCtxMenuOpen: g,
    onCtxMenuSelect: T
  } = e, A = (0, C.getQuestBarHeroAssetUrl)(t), N = (0, d.default)(), v = (0, o.isThemeDark)(N) ? S.ThemeTypes.DARK : S.ThemeTypes.LIGHT, R = v === S.ThemeTypes.DARK, O = s.useMemo(() => (0, C.isAssetAnimated)(t.config.assets.questBarHero), [t]), L = s.useContext(r.AccessibilityPreferencesContext).reducedMotion.enabled, P = (0, C.isTargetedForContent)(t, h.QuestContent.GIFT_INVENTORY_FOR_YOU), y = (0, E.useIsQuestExpired)(t), M = s.useRef(n), D = s.useRef(null);
  return s.useEffect(() => {
    if (O && null != D.current) return M.current !== n && (n ? D.current.play() : (D.current.pause(), D.current.currentTime = 0)), M.current = n, () => {
      var e;
      null === (e = D.current) || void 0 === e || e.pause()
    }
  }, [n, O]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: I.container,
      children: [(0, a.jsx)("div", {
        className: I.heroAssetWrapper,
        children: O ? (0, a.jsx)(_.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (null != e.current && (D.current = e.current), (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !L && n,
            loop: !0,
            playsInline: !0,
            className: I.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: A,
              type: (0, C.getVideoAssetMimeType)(A)
            })
          }))
        }) : (0, a.jsx)(_.QuestsAsset, {
          id: "QuestTileBanner",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: I.heroAsset,
            src: A
          })
        })
      }), (0, a.jsx)("div", {
        className: i()(I.overlay, {
          [I.darkThemeGradient]: R,
          [I.lightThemeGradient]: !R
        })
      }), (0, a.jsx)("div", {
        className: I.positionContentOverBackground,
        children: (0, a.jsxs)("div", {
          className: I.contents,
          children: [(0, a.jsxs)("div", {
            className: I.topRow,
            children: [P && !y && (0, a.jsx)("div", {
              className: I.pill,
              children: (0, a.jsx)(u.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: I.eyebrowText,
                children: p.default.Messages.RECOMMENDED
              })
            }), (0, a.jsx)(m.QuestsEntryContextMenuPopout, {
              onOpen: g,
              onClose: l,
              onSelect: T,
              questContent: h.QuestContent.QUEST_HOME_DESKTOP,
              quest: t,
              hideLearnMore: !0,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(u.Clickable, {
                ...e,
                className: I.submenuWrapper,
                "aria-label": p.default.Messages.ACTIONS,
                children: (0, a.jsx)(c.default, {
                  className: i()(I.submenuIcon)
                })
              })
            })]
          }), (0, a.jsx)(_.QuestsAsset, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, a.jsx)("img", {
              ref: e,
              className: I.partnerBranding,
              alt: t.config.messages.gameTitle,
              src: (0, C.getGameLogotypeAssetUrl)(t, v)
            })
          }), (0, a.jsx)("div", {
            className: I.bottomRow,
            children: (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: p.default.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                brandName: t.config.messages.gamePublisher
              })
            })
          })]
        })
      })]
    }), (0, a.jsx)("div", {
      className: I.spacer
    })]
  })
}