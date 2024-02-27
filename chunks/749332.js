"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
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
  E = n("161778"),
  f = n("433487"),
  _ = n("58608"),
  T = n("306160"),
  I = n("879364"),
  m = n("588025"),
  N = n("227231"),
  p = n("45198"),
  S = n("782340"),
  A = n("444092");
let C = e => {
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
    (0, T.copy)((0, N.getQuestUrl)(t.id)), a(!0), i.current.start(1e3, () => a(!1))
  };
  return (0, s.jsx)(u.Tooltip, {
    forceOpen: n,
    shouldShow: n,
    color: u.Tooltip.Colors.GREEN,
    text: S.default.Messages.COPY_SUCCESS_1,
    children: () => (0, s.jsx)(u.Button, {
      color: u.Button.Colors.PRIMARY,
      size: u.Button.Sizes.SMALL,
      onClick: () => r(),
      children: S.default.Messages.QUESTS_SHARE_QUEST
    })
  })
};
var h = e => {
  var t;
  let {
    isFocused: a,
    quest: o,
    location: T
  } = e, h = (0, r.useStateFromStores)([E.default], () => E.default.getState().theme), g = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), M = l.useMemo(() => o.config.videoAssets.includes(T), [o, T]), O = l.useRef(null), R = (0, I.useIsQuestExpired)(o), L = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, v = (0, I.useQuestFormattedDate)(o.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), P = (0, I.useQuestFormattedDate)(o.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return l.useEffect(() => {
    null != O.current && (a ? O.current.play() : (O.current.pause(), O.current.currentTime = 0))
  }, [a]), (0, s.jsxs)("div", {
    className: i(A.outerContainer, {
      [A.outerContainerGiftInventory]: T === m.QuestContent.QUEST_INVENTORY_CARD,
      [A.outerContainerEmbed]: T === m.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)(_.default, {
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: A.questSplash,
      controls: !1,
      poster: (0, N.getHeroStaticAssetUrl)(o.id),
      ref: O,
      children: !g && M && (0, s.jsx)("source", {
        src: (0, N.getHeroAnimatedAssetUrl)(o.id),
        type: "video/webm"
      })
    }), (0, s.jsxs)("div", {
      className: A.header,
      children: [(0, s.jsxs)("div", {
        className: A.headerContent,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: A.iconLogotypeContainer,
            children: [(0, s.jsx)("img", {
              src: (0, N.getGameTileAssetUrl)(o.id),
              alt: "",
              className: A.questIcon
            }), (0, s.jsx)("img", {
              src: (0, N.getGameLogotypeAssetUrl)(o.id, h),
              alt: "",
              className: A.questLogotype
            }), (0, s.jsx)(p.default, {})]
          }), (0, s.jsxs)("div", {
            className: A.questInfo,
            children: [(0, s.jsx)(u.Heading, {
              variant: "heading-xxl/bold",
              children: S.default.Messages.QUEST.format({
                questName: o.config.messages.questName
              })
            }), (0, s.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: L ? S.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: P
              }) : S.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: v
              })
            })]
          })]
        }), !R && T === m.QuestContent.QUEST_INVENTORY_CARD && (0, s.jsx)(C, {
          quest: o
        })]
      }), (0, s.jsx)(u.Clickable, {
        className: A.submenuWrapper,
        onClick: e => {
          (0, d.openContextMenuLazy)(e, async () => {
            let {
              QuestsEntryContextMenu: e
            } = await n.el("275986").then(n.bind(n, "275986"));
            return t => {
              var n;
              return (0, s.jsx)(e, {
                ...t,
                questContent: T,
                quest: o,
                shouldShowDisclosure: (null === (n = o.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
              })
            }
          })
        },
        children: (0, s.jsx)(f.default, {
          className: A.submenuIcon
        })
      })]
    })]
  })
}