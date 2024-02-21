"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
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
  N = n("843455"),
  p = n("782340"),
  S = n("444092"),
  A = e => {
    let {
      isFocused: t,
      quest: a,
      location: A
    } = e, C = (0, r.useStateFromStores)([c.default], () => c.default.locale), h = (0, r.useStateFromStores)([E.default], () => E.default.getState().theme), g = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), M = l.useMemo(() => a.config.videoAssets.includes(A), [a, A]), O = l.useRef(null), R = new Date(a.config.expiresAt).toLocaleDateString(C, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return l.useEffect(() => {
      null != O.current && (t ? O.current.play() : (O.current.pause(), O.current.currentTime = 0))
    }, [t]), (0, s.jsxs)("div", {
      className: i(S.outerContainer, {
        [S.outerContainerGiftInventory]: A === T.QuestContent.QUEST_INVENTORY_CARD,
        [S.outerContainerEmbed]: A === T.QuestContent.QUESTS_EMBED
      }),
      children: [(0, s.jsx)(_.default, {
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        className: S.questSplash,
        controls: !1,
        poster: (0, I.getHeroStaticAssetUrl)(a.id),
        ref: O,
        children: !g && M && (0, s.jsx)("source", {
          src: (0, I.getHeroAnimatedAssetUrl)(a.id),
          type: "video/webm"
        })
      }), (0, s.jsxs)("div", {
        className: S.header,
        children: [(0, s.jsxs)("div", {
          className: S.headerContent,
          children: [(0, s.jsxs)("div", {
            className: S.iconLogotypeContainer,
            children: [(0, s.jsx)("img", {
              src: (0, I.getGameTileAssetUrl)(a.id),
              alt: "",
              className: S.questIcon
            }), (0, s.jsx)("img", {
              src: (0, I.getGameLogotypeAssetUrl)(a.id, h),
              alt: "",
              className: S.questLogotype
            }), (0, s.jsx)(m.default, {})]
          }), (0, s.jsxs)("div", {
            className: S.questInfo,
            children: [(0, s.jsx)(o.Heading, {
              variant: "heading-xxl/bold",
              children: a.config.messages.questName
            }), (0, s.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: p.default.Messages.QUESTS_AVAILABLE_THROUGH.format({
                date: R
              })
            })]
          })]
        }), (0, s.jsx)(o.Clickable, {
          className: S.submenuWrapper,
          onClick: e => {
            (0, u.openContextMenuLazy)(e, async () => {
              let {
                QuestsEntryContextMenu: e
              } = await n.el("275986").then(n.bind(n, "275986"));
              return t => {
                var n;
                return (0, s.jsx)(e, {
                  ...t,
                  onClose: N.NOOP,
                  questContent: T.QuestContent.QUEST_INVENTORY_CARD,
                  quest: a,
                  shouldShowDisclosure: (null === (n = a.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
                })
              }
            })
          },
          children: (0, s.jsx)(f.default, {
            className: S.submenuIcon
          })
        })]
      })]
    })
  }