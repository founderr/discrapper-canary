n.d(t, {
  Z: function() {
    return N
  }
});
var s = n(735250),
  i = n(470079),
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
  T = n(981631),
  g = n(689938),
  p = n(211549);

function N(e) {
  let {
    quest: t,
    isHovering: n,
    onCtxMenuClose: l,
    onCtxMenuOpen: N,
    onCtxMenuSelect: S
  } = e, C = (0, _.ph)(t), A = (0, u.ZP)(), f = (0, o.wj)(A) ? T.BRd.DARK : T.BRd.LIGHT, Z = f === T.BRd.DARK, L = i.useMemo(() => (0, _.nP)(t.config.assets.questBarHero), [t]), O = i.useContext(r.S).reducedMotion.enabled, v = (0, _.Mi)(t, h.jn.GIFT_INVENTORY_FOR_YOU), R = (0, E.tP)(t), P = i.useRef(n), x = i.useRef(null);
  return i.useEffect(() => {
    if (L && null != x.current) return P.current !== n && (n ? x.current.play() : (x.current.pause(), x.current.currentTime = 0)), P.current = n, () => {
      var e;
      null === (e = x.current) || void 0 === e || e.pause()
    }
  }, [n, L]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: p.container,
      children: [(0, s.jsx)("div", {
        className: p.heroAssetWrapper,
        children: L ? (0, s.jsx)(I.Fl, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (null != e.current && (x.current = e.current), (0, s.jsx)(d.Z, {
            ref: e,
            autoPlay: !O && n,
            loop: !0,
            playsInline: !0,
            className: p.heroAsset,
            controls: !1,
            children: (0, s.jsx)("source", {
              src: C,
              type: (0, _.mN)(C)
            })
          }))
        }) : (0, s.jsx)(I.Fl, {
          id: "QuestTileBanner",
          children: e => (0, s.jsx)("img", {
            ref: e,
            alt: "",
            className: p.heroAsset,
            src: C
          })
        })
      }), (0, s.jsx)("div", {
        className: a()(p.overlay, {
          [p.darkThemeGradient]: Z,
          [p.lightThemeGradient]: !Z
        })
      }), (0, s.jsx)("div", {
        className: p.positionContentOverBackground,
        children: (0, s.jsxs)("div", {
          className: p.contents,
          children: [(0, s.jsxs)("div", {
            className: p.topRow,
            children: [v && !R && (0, s.jsx)("div", {
              className: p.pill,
              children: (0, s.jsx)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: p.eyebrowText,
                children: g.Z.Messages.RECOMMENDED
              })
            }), (0, s.jsx)(m.r, {
              onOpen: N,
              onClose: l,
              onSelect: S,
              questContent: h.jn.QUEST_HOME_DESKTOP,
              quest: t,
              hideLearnMore: !0,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, s.jsx)(c.Clickable, {
                ...e,
                className: p.submenuWrapper,
                "aria-label": g.Z.Messages.ACTIONS,
                children: (0, s.jsx)(c.MoreHorizontalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: a()(p.submenuIcon)
                })
              })
            })]
          }), (0, s.jsx)(I.Fl, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, s.jsx)("img", {
              ref: e,
              className: p.partnerBranding,
              alt: t.config.messages.gameTitle,
              src: (0, _.Gs)(t, f)
            })
          }), (0, s.jsx)("div", {
            className: p.bottomRow,
            children: (0, s.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: g.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                brandName: t.config.messages.gamePublisher
              })
            })
          })]
        })
      })]
    }), (0, s.jsx)("div", {
      className: p.spacer
    })]
  })
}