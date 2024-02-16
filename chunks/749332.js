"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("206230"),
  d = n("915639"),
  c = n("161778"),
  E = n("58608"),
  f = n("588025"),
  _ = n("227231"),
  T = n("45198"),
  I = n("782340"),
  m = n("444092"),
  N = e => {
    let {
      isFocused: t,
      quest: n,
      location: a
    } = e, N = (0, r.useStateFromStores)([d.default], () => d.default.locale), p = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), S = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), A = l.useMemo(() => n.config.videoAssets.includes(a), [n, a]), C = l.useRef(null), h = new Date(n.config.expiresAt).toLocaleDateString(N, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return l.useEffect(() => {
      null != C.current && (t ? C.current.play() : (C.current.pause(), C.current.currentTime = 0))
    }, [t]), (0, s.jsxs)("div", {
      className: i(m.outerContainer, {
        [m.outerContainerGiftInventory]: a === f.QuestContent.QUEST_INVENTORY_CARD,
        [m.outerContainerEmbed]: a === f.QuestContent.QUESTS_EMBED
      }),
      children: [(0, s.jsx)(E.default, {
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        className: m.questSplash,
        controls: !1,
        poster: (0, _.getHeroStaticAssetUrl)(n.id),
        ref: C,
        children: !S && A && (0, s.jsx)("source", {
          src: (0, _.getHeroAnimatedAssetUrl)(n.id),
          type: "video/webm"
        })
      }), (0, s.jsxs)("div", {
        className: m.headerContent,
        children: [(0, s.jsxs)("div", {
          className: m.iconLogotypeContainer,
          children: [(0, s.jsx)("img", {
            src: (0, _.getGameTileAssetUrl)(n.id),
            alt: "",
            className: m.questIcon
          }), (0, s.jsx)("img", {
            src: (0, _.getGameLogotypeAssetUrl)(n.id, p),
            alt: "",
            className: m.questLogotype
          }), (0, s.jsx)(T.default, {})]
        }), (0, s.jsxs)("div", {
          className: m.questInfo,
          children: [(0, s.jsx)(o.Heading, {
            variant: "heading-xxl/bold",
            children: n.config.messages.questName
          }), (0, s.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: I.default.Messages.QUESTS_AVAILABLE_THROUGH.format({
              date: h
            })
          })]
        })]
      })]
    })
  }