"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("272030"),
  d = n("206230"),
  c = n("915639"),
  E = n("161778"),
  f = n("433487"),
  _ = n("58608"),
  T = n("588025"),
  I = n("227231"),
  m = n("45198"),
  N = n("782340"),
  p = n("444092"),
  S = e => {
    let {
      isFocused: t,
      quest: a,
      location: S
    } = e, A = (0, r.useStateFromStores)([c.default], () => c.default.locale), C = (0, r.useStateFromStores)([E.default], () => E.default.getState().theme), h = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), g = l.useMemo(() => a.config.videoAssets.includes(S), [a, S]), M = l.useRef(null), O = new Date(a.config.expiresAt).toLocaleDateString(A, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return l.useEffect(() => {
      null != M.current && (t ? M.current.play() : (M.current.pause(), M.current.currentTime = 0))
    }, [t]), (0, s.jsxs)("div", {
      className: i(p.outerContainer, {
        [p.outerContainerGiftInventory]: S === T.QuestContent.QUEST_INVENTORY_CARD,
        [p.outerContainerEmbed]: S === T.QuestContent.QUESTS_EMBED
      }),
      children: [(0, s.jsx)(_.default, {
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        className: p.questSplash,
        controls: !1,
        poster: (0, I.getHeroStaticAssetUrl)(a.id),
        ref: M,
        children: !h && g && (0, s.jsx)("source", {
          src: (0, I.getHeroAnimatedAssetUrl)(a.id),
          type: "video/webm"
        })
      }), (0, s.jsxs)("div", {
        className: p.header,
        children: [(0, s.jsxs)("div", {
          className: p.headerContent,
          children: [(0, s.jsxs)("div", {
            className: p.iconLogotypeContainer,
            children: [(0, s.jsx)("img", {
              src: (0, I.getGameTileAssetUrl)(a.id),
              alt: "",
              className: p.questIcon
            }), (0, s.jsx)("img", {
              src: (0, I.getGameLogotypeAssetUrl)(a.id, C),
              alt: "",
              className: p.questLogotype
            }), (0, s.jsx)(m.default, {})]
          }), (0, s.jsxs)("div", {
            className: p.questInfo,
            children: [(0, s.jsx)(o.Heading, {
              variant: "heading-xxl/bold",
              children: a.config.messages.questName
            }), (0, s.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: N.default.Messages.QUESTS_AVAILABLE_THROUGH.format({
                date: O
              })
            })]
          })]
        }), (0, s.jsx)(o.Clickable, {
          className: p.submenuWrapper,
          onClick: e => {
            (0, u.openContextMenuLazy)(e, async () => {
              let {
                QuestsEntryContextMenu: e
              } = await n.el("275986").then(n.bind(n, "275986"));
              return t => {
                var n;
                return (0, s.jsx)(e, {
                  ...t,
                  questContent: S,
                  quest: a,
                  shouldShowDisclosure: (null === (n = a.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
                })
              }
            })
          },
          children: (0, s.jsx)(f.default, {
            className: p.submenuIcon
          })
        })]
      })]
    })
  }