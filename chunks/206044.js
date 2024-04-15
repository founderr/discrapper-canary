"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("846519"),
  u = n("481060"),
  d = n("607070"),
  c = n("210887"),
  f = n("808268"),
  E = n("810090"),
  _ = n("572004"),
  T = n("617136"),
  m = n("113434"),
  I = n("497505"),
  p = n("918701"),
  h = n("685613"),
  N = n("611855"),
  S = n("670638"),
  C = n("689938"),
  A = n("478840");
let g = e => {
  let {
    quest: t,
    location: n
  } = e, [l, i] = a.useState(!1), r = a.useRef(new o.Timeout);
  a.useEffect(() => {
    let e = r.current;
    return function() {
      e.stop()
    }
  }, []);
  let d = () => {
    (0, T.trackQuestContentClicked)({
      questId: t.id,
      questContent: n,
      questContentCTA: T.QuestContentCTA.COPY_QUEST_URL
    }), (0, _.copy)((0, p.getQuestUrl)(t.id)), i(!0), r.current.start(1e3, () => i(!1))
  };
  return (0, s.jsx)(u.Tooltip, {
    forceOpen: l,
    shouldShow: l,
    color: u.Tooltip.Colors.GREEN,
    text: C.default.Messages.COPY_SUCCESS_1,
    children: () => (0, s.jsx)(u.Button, {
      className: A.shareButton,
      color: u.Button.Colors.PRIMARY,
      size: u.Button.Sizes.SMALL,
      onClick: d,
      children: C.default.Messages.QUESTS_SHARE_QUEST
    })
  })
};
t.default = e => {
  var t;
  let {
    isFocused: n,
    isQuestExpired: l,
    quest: o,
    location: _,
    size: T
  } = e, M = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), R = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), O = a.useMemo(() => (0, p.isAssetAnimated)(o.config.assets.hero), [o]), v = a.useRef(null), L = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, x = (0, m.useQuestFormattedDate)(o.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), D = (0, m.useQuestFormattedDate)(o.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  a.useEffect(() => {
    O && null != v.current && (n ? v.current.play() : !n && (v.current.pause(), v.current.currentTime = 0))
  }, [n, O]);
  let P = (0, p.getHeroAssetUrl)(o);
  return (0, s.jsxs)("div", {
    className: i()(A.outerContainer, {
      [A.outerContainerGiftInventory]: _ === I.QuestContent.QUEST_INVENTORY_CARD,
      [A.outerContainerEmbed]: _ === I.QuestContent.QUESTS_EMBED,
      [A.outerContainerXs]: "xs" === T
    }),
    children: [(0, s.jsx)(E.default, {
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: A.questSplash,
      controls: !1,
      poster: P,
      ref: v,
      children: !R && O && (0, s.jsx)("source", {
        src: P,
        type: (0, p.getVideoAssetMimeType)(P)
      })
    }), (0, s.jsxs)("div", {
      className: A.header,
      children: [(0, s.jsxs)("div", {
        className: A.headerContent,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: A.iconLogotypeContainer,
            children: [(0, s.jsx)(h.default, {
              className: A.partnerBranding,
              gameTileSize: h.GameTileSizes.MEDIUM,
              quest: o,
              theme: M
            }), (0, s.jsx)(N.default, {
              color: "always-white"
            })]
          }), (0, s.jsxs)("div", {
            className: A.questInfo,
            children: [(0, s.jsx)(u.Heading, {
              variant: "lg" === T ? "heading-xxl/bold" : "sm" === T ? "heading-xl/bold" : "heading-lg/bold",
              children: C.default.Messages.QUEST.format({
                questName: o.config.messages.questName
              })
            }), (0, s.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: L ? C.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: D
              }) : l ? C.default.Messages.QUESTS_EXPIRED_ON.format({
                expirationDate: x
              }) : C.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: x
              })
            })]
          })]
        }), !l && _ === I.QuestContent.QUEST_INVENTORY_CARD && (0, s.jsx)(g, {
          quest: o,
          location: _
        })]
      }), (0, s.jsx)(S.QuestsEntryContextMenuPopout, {
        questContent: _,
        quest: o,
        shouldShowDisclosure: !0,
        hideLearnMore: _ === I.QuestContent.QUEST_INVENTORY_CARD,
        showShareLink: !l && _ === I.QuestContent.QUESTS_EMBED,
        children: e => (0, s.jsx)(u.Clickable, {
          ...e,
          className: A.submenuWrapper,
          "aria-label": C.default.Messages.ACTIONS,
          children: (0, s.jsx)(f.default, {
            className: A.submenuIcon
          })
        })
      })]
    })]
  })
}