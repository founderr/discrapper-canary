"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("206230"),
  o = s("915639"),
  d = s("161778"),
  u = s("58608"),
  c = s("588025"),
  S = s("227231"),
  E = s("45198"),
  T = s("782340"),
  f = s("908616"),
  m = e => {
    let {
      isFocused: t,
      quest: s
    } = e, m = (0, l.useStateFromStores)([o.default], () => o.default.locale), _ = (0, l.useStateFromStores)([d.default], () => d.default.getState().theme), g = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion), h = n.useMemo(() => s.config.videoAssets.includes(c.QuestContent.QUEST_INVENTORY_CARD), [s]), N = n.useRef(null), I = new Date(s.config.expiresAt).toLocaleDateString(m, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return n.useEffect(() => {
      null != N.current && (t ? N.current.play() : (N.current.pause(), N.current.currentTime = 0))
    }, [t]), (0, a.jsxs)("div", {
      className: f.questsCardHeader,
      children: [(0, a.jsx)(u.default, {
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        className: f.questSplash,
        controls: !1,
        poster: (0, S.getHeroStaticAssetUrl)(s.id),
        ref: N,
        children: !g && h && (0, a.jsx)("source", {
          src: (0, S.getHeroAnimatedAssetUrl)(s.id),
          type: "video/webm"
        })
      }), (0, a.jsxs)("div", {
        className: f.headerContent,
        children: [(0, a.jsxs)("div", {
          className: f.iconLogotypeContainer,
          children: [(0, a.jsx)("img", {
            src: (0, S.getGameTileAssetUrl)(s.id),
            alt: "",
            className: f.questIcon
          }), (0, a.jsx)("img", {
            src: (0, S.getGameLogotypeAssetUrl)(s.id, _),
            alt: "",
            className: f.questLogotype
          }), (0, a.jsx)(E.default, {})]
        }), (0, a.jsxs)("div", {
          className: f.questInfo,
          children: [(0, a.jsx)(i.Heading, {
            variant: "heading-xxl/bold",
            children: s.config.messages.questName
          }), (0, a.jsx)(i.Text, {
            variant: "text-xs/normal",
            children: T.default.Messages.QUESTS_AVAILABLE_THROUGH.format({
              date: I
            })
          })]
        })]
      })]
    })
  }