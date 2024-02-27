"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("862337"),
  u = n("77078"),
  d = n("272030"),
  c = n("206230"),
  E = n("915639"),
  f = n("161778"),
  _ = n("433487"),
  T = n("58608"),
  I = n("306160"),
  m = n("879364"),
  N = n("588025"),
  p = n("227231"),
  S = n("45198"),
  A = n("782340"),
  C = n("444092");
let h = e => {
  let {
    quest: t
  } = e, [n, a] = l.useState(!1), i = l.useRef(new o.Timeout);
  l.useEffect(() => {
    let e = i.current;
    return function() {
      e.stop()
    }
  }, []);
  let r = () => {
    (0, I.copy)((0, p.getQuestUrl)(t.id)), a(!0), i.current.start(1e3, () => a(!1))
  };
  return (0, s.jsx)(u.Tooltip, {
    forceOpen: n,
    shouldShow: n,
    color: u.Tooltip.Colors.GREEN,
    text: A.default.Messages.COPY_SUCCESS_1,
    children: () => (0, s.jsx)(u.Button, {
      color: u.Button.Colors.PRIMARY,
      size: u.Button.Sizes.SMALL,
      onClick: () => r(),
      children: A.default.Messages.QUESTS_SHARE_QUEST
    })
  })
};
var g = e => {
  let {
    isFocused: t,
    quest: a,
    location: o
  } = e, I = (0, r.useStateFromStores)([E.default], () => E.default.locale), g = (0, r.useStateFromStores)([f.default], () => f.default.getState().theme), M = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), O = l.useMemo(() => a.config.videoAssets.includes(o), [a, o]), R = l.useRef(null), L = (0, m.useIsQuestExpired)(a), v = new Date(a.config.expiresAt).toLocaleDateString(I, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return l.useEffect(() => {
    null != R.current && (t ? R.current.play() : (R.current.pause(), R.current.currentTime = 0))
  }, [t]), (0, s.jsxs)("div", {
    className: i(C.outerContainer, {
      [C.outerContainerGiftInventory]: o === N.QuestContent.QUEST_INVENTORY_CARD,
      [C.outerContainerEmbed]: o === N.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)(T.default, {
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: C.questSplash,
      controls: !1,
      poster: (0, p.getHeroStaticAssetUrl)(a.id),
      ref: R,
      children: !M && O && (0, s.jsx)("source", {
        src: (0, p.getHeroAnimatedAssetUrl)(a.id),
        type: "video/webm"
      })
    }), (0, s.jsxs)("div", {
      className: C.header,
      children: [(0, s.jsxs)("div", {
        className: C.headerContent,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: C.iconLogotypeContainer,
            children: [(0, s.jsx)("img", {
              src: (0, p.getGameTileAssetUrl)(a.id),
              alt: "",
              className: C.questIcon
            }), (0, s.jsx)("img", {
              src: (0, p.getGameLogotypeAssetUrl)(a.id, g),
              alt: "",
              className: C.questLogotype
            }), (0, s.jsx)(S.default, {})]
          }), (0, s.jsxs)("div", {
            className: C.questInfo,
            children: [(0, s.jsx)(u.Heading, {
              variant: "heading-xxl/bold",
              children: A.default.Messages.QUEST.format({
                questName: a.config.messages.questName
              })
            }), (0, s.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: A.default.Messages.QUESTS_AVAILABLE_THROUGH.format({
                date: v
              })
            })]
          })]
        }), !L && o === N.QuestContent.QUEST_INVENTORY_CARD && (0, s.jsx)(h, {
          quest: a
        })]
      }), (0, s.jsx)(u.Clickable, {
        className: C.submenuWrapper,
        onClick: e => {
          (0, d.openContextMenuLazy)(e, async () => {
            let {
              QuestsEntryContextMenu: e
            } = await n.el("275986").then(n.bind(n, "275986"));
            return t => {
              var n;
              return (0, s.jsx)(e, {
                ...t,
                questContent: o,
                quest: a,
                shouldShowDisclosure: (null === (n = a.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
              })
            }
          })
        },
        children: (0, s.jsx)(_.default, {
          className: C.submenuIcon
        })
      })]
    })]
  })
}