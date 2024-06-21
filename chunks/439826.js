n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(186325),
  o = n(780384),
  c = n(481060),
  u = n(410030),
  d = n(810090),
  E = n(113434),
  h = n(497505),
  _ = n(918701),
  I = n(78826),
  m = n(670638),
  g = n(981631),
  p = n(689938),
  N = n(211549);

function T(e) {
  let {
    quest: t,
    isHovering: n,
    onCtxMenuClose: l,
    onCtxMenuOpen: T,
    onCtxMenuSelect: C
  } = e, S = (0, _.ph)(t), A = (0, u.ZP)(), f = (0, o.wj)(A) ? g.BRd.DARK : g.BRd.LIGHT, Z = f === g.BRd.DARK, v = s.useMemo(() => (0, _.nP)(t.config.assets.questBarHero), [t]), L = s.useContext(r.S).reducedMotion.enabled, O = (0, _.Mi)(t, h.jn.GIFT_INVENTORY_FOR_YOU), R = (0, E.tP)(t), x = s.useRef(n), M = s.useRef(null);
  return s.useEffect(() => {
    if (v && null != M.current) return x.current !== n && (n ? M.current.play() : (M.current.pause(), M.current.currentTime = 0)), x.current = n, () => {
      var e;
      null === (e = M.current) || void 0 === e || e.pause()
    }
  }, [n, v]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: N.container,
      children: [(0, i.jsx)("div", {
        className: N.heroAssetWrapper,
        children: v ? (0, i.jsx)(I.Fl, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (null != e.current && (M.current = e.current), (0, i.jsx)(d.Z, {
            ref: e,
            autoPlay: !L && n,
            loop: !0,
            playsInline: !0,
            className: N.heroAsset,
            controls: !1,
            children: (0, i.jsx)("source", {
              src: S,
              type: (0, _.mN)(S)
            })
          }))
        }) : (0, i.jsx)(I.Fl, {
          id: "QuestTileBanner",
          children: e => (0, i.jsx)("img", {
            ref: e,
            alt: "",
            className: N.heroAsset,
            src: S
          })
        })
      }), (0, i.jsx)("div", {
        className: a()(N.overlay, {
          [N.darkThemeGradient]: Z,
          [N.lightThemeGradient]: !Z
        })
      }), (0, i.jsx)("div", {
        className: N.positionContentOverBackground,
        children: (0, i.jsxs)("div", {
          className: N.contents,
          children: [(0, i.jsxs)("div", {
            className: N.topRow,
            children: [O && !R && (0, i.jsx)("div", {
              className: N.pill,
              children: (0, i.jsx)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: N.eyebrowText,
                children: p.Z.Messages.RECOMMENDED
              })
            }), (0, i.jsx)(m.r, {
              onOpen: T,
              onClose: l,
              onSelect: C,
              questContent: h.jn.QUEST_HOME_DESKTOP,
              quest: t,
              hideLearnMore: !0,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, i.jsx)(c.Clickable, {
                ...e,
                className: N.submenuWrapper,
                "aria-label": p.Z.Messages.ACTIONS,
                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: a()(N.submenuIcon)
                })
              })
            })]
          }), (0, i.jsx)(I.Fl, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, i.jsx)("img", {
              ref: e,
              className: N.partnerBranding,
              alt: t.config.messages.gameTitle,
              src: (0, _.Gs)(t, f)
            })
          }), (0, i.jsx)("div", {
            className: N.bottomRow,
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: p.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                brandName: t.config.messages.gamePublisher
              })
            })
          })]
        })
      })]
    }), (0, i.jsx)("div", {
      className: N.spacer
    })]
  })
}