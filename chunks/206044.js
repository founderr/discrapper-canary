"use strict";
n.r(t), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("803997"),
  i = n.n(a),
  r = n("442837"),
  o = n("846519"),
  u = n("481060"),
  d = n("607070"),
  c = n("210887"),
  E = n("808268"),
  f = n("810090"),
  _ = n("572004"),
  T = n("617136"),
  I = n("113434"),
  m = n("497505"),
  N = n("918701"),
  p = n("685613"),
  S = n("611855"),
  C = n("670638"),
  A = n("689938"),
  h = n("478840");
let g = e => {
  let {
    quest: t,
    location: n
  } = e, [a, i] = l.useState(!1), r = l.useRef(new o.Timeout);
  l.useEffect(() => {
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
    }), (0, _.copy)((0, N.getQuestUrl)(t.id)), i(!0), r.current.start(1e3, () => i(!1))
  };
  return (0, s.jsx)(u.Tooltip, {
    forceOpen: a,
    shouldShow: a,
    color: u.Tooltip.Colors.GREEN,
    text: A.default.Messages.COPY_SUCCESS_1,
    children: () => (0, s.jsx)(u.Button, {
      color: u.Button.Colors.PRIMARY,
      size: u.Button.Sizes.SMALL,
      onClick: () => d(),
      children: A.default.Messages.QUESTS_SHARE_QUEST
    })
  })
};
t.default = e => {
  var t;
  let {
    isFocused: n,
    quest: a,
    location: o,
    size: _
  } = e, T = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), M = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), O = l.useMemo(() => (0, N.isAssetAnimated)(a.config.assets.hero), [a]), R = l.useRef(null), v = (0, I.useIsQuestExpired)(a), L = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, P = (0, I.useQuestFormattedDate)(a.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), D = (0, I.useQuestFormattedDate)(a.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  l.useEffect(() => {
    null != R.current && (n ? R.current.play() : (R.current.pause(), R.current.currentTime = 0))
  }, [n]);
  let x = (0, N.getHeroAssetUrl)(a);
  return (0, s.jsxs)("div", {
    className: i()(h.outerContainer, {
      [h.outerContainerGiftInventory]: o === m.QuestContent.QUEST_INVENTORY_CARD,
      [h.outerContainerEmbed]: o === m.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)(f.default, {
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: h.questSplash,
      controls: !1,
      poster: x,
      ref: R,
      children: !M && O && (0, s.jsx)("source", {
        src: x,
        type: (0, N.getVideoAssetMimeType)(x)
      })
    }), (0, s.jsxs)("div", {
      className: h.header,
      children: [(0, s.jsxs)("div", {
        className: h.headerContent,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: h.iconLogotypeContainer,
            children: [(0, s.jsx)(p.default, {
              className: h.partnerBranding,
              gameTileSize: p.GameTileSizes.MEDIUM,
              quest: a,
              theme: T
            }), (0, s.jsx)(S.default, {
              color: "always-white"
            })]
          }), (0, s.jsxs)("div", {
            className: h.questInfo,
            children: [(0, s.jsx)(u.Heading, {
              variant: "lg" === _ ? "heading-xxl/bold" : "sm" === _ ? "heading-xl/bold" : "heading-lg/bold",
              children: A.default.Messages.QUEST.format({
                questName: a.config.messages.questName
              })
            }), (0, s.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: L ? A.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: D
              }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: P
              })
            })]
          })]
        }), !v && o === m.QuestContent.QUEST_INVENTORY_CARD && (0, s.jsx)(g, {
          quest: a,
          location: o
        })]
      }), (0, s.jsx)(C.QuestsEntryContextMenuPopout, {
        questContent: o,
        quest: a,
        shouldShowDisclosure: !0,
        hideLearnMore: o === m.QuestContent.QUEST_INVENTORY_CARD,
        showShareLink: o === m.QuestContent.QUESTS_EMBED,
        children: e => (0, s.jsx)(u.Clickable, {
          ...e,
          className: h.submenuWrapper,
          "aria-label": A.default.Messages.ACTIONS,
          children: (0, s.jsx)(E.default, {
            className: h.submenuIcon
          })
        })
      })]
    })]
  })
}