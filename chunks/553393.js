"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("718017"),
  a = n("91192"),
  o = n("946835"),
  l = n("442837"),
  u = n("780384"),
  d = n("481060"),
  _ = n("287734"),
  c = n("872810"),
  E = n("230711"),
  I = n("393238"),
  T = n("40851"),
  f = n("607070"),
  S = n("258609"),
  h = n("102172"),
  A = n("210887"),
  m = n("592125"),
  N = n("430824"),
  p = n("496675"),
  O = n("979651"),
  R = n("617136"),
  C = n("113434"),
  g = n("497505"),
  L = n("918701"),
  D = n("874137"),
  v = n("644646"),
  M = n("667105"),
  y = n("981631"),
  P = n("231338"),
  U = n("689938"),
  b = n("258758");
let G = "11px";

function w(e) {
  return null != e
}
t.default = function(e) {
  var t, w, B;
  let {
    quest: k,
    width: F,
    applicationStream: V,
    position: x,
    closePopout: H
  } = e, Y = (0, M.useHandleClaimQuestsReward)({
    quest: k,
    location: g.QuestContent.MEMBERS_LIST
  }), j = (0, C.useIsQuestExpired)(k), W = (null == k ? void 0 : null === (t = k.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, K = (null == k ? void 0 : null === (w = k.userStatus) || void 0 === w ? void 0 : w.enrolledAt) != null, z = (null == k ? void 0 : null === (B = k.userStatus) || void 0 === B ? void 0 : B.completedAt) != null, X = (0, l.useStateFromStores)([A.default], () => A.default.getState().theme), Q = (0, u.isThemeDark)(X) ? P.ThemeTypes.DARK : P.ThemeTypes.LIGHT, q = (0, l.useStateFromStores)([f.default], () => f.default.useReducedMotion), {
    ref: Z,
    height: J
  } = (0, I.default)(), [$, ee] = r.useState(q), et = (0, T.useWindowDispatch)(), en = (0, a.useListContainerScrollerRef)();
  r.useEffect(() => {
    let e = en.current;
    return null == e || e.addEventListener("scroll", H), () => {
      null == e || e.removeEventListener("scroll", H)
    }
  }, [H, en]);
  let ei = (0, s.useSpring)({
      from: {
        height: 0
      },
      height: null != J ? J : 0,
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        precision: .01,
        velocity: 0
      },
      immediate: q,
      onRest: () => ee(!0)
    }),
    er = (0, s.useTransition)($, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    es = () => {
      et.dispatch(y.ComponentActions.POPOUT_CLOSE)
    },
    ea = "top" === x ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px");
  if (null == k || j || W && !(null != V)) return null;
  let eo = () => {
      (0, R.trackQuestContentClicked)({
        questId: k.id,
        questContent: g.QuestContent.MEMBERS_LIST,
        questContentCTA: R.QuestContentCTA.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: !0
      }), (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("59286")]).then(n.bind(n, "316210"));
        return t => (0, i.jsx)(e, {
          ...t,
          questContent: g.QuestContent.MEMBERS_LIST,
          questConfig: k.config
        })
      })
    },
    el = () => {
      (0, R.trackQuestContentClicked)({
        questId: k.id,
        questContent: g.QuestContent.MEMBERS_LIST,
        questContentCTA: R.QuestContentCTA.LEARN_MORE,
        trackGuildAndChannelMetadata: !0
      }), E.default.open(y.UserSettingsSections.INVENTORY)
    },
    eu = e => {
      e.stopPropagation(), eo()
    },
    ed = () => {
      if (null != V) {
        let e = m.default.getChannel(V.channelId);
        if (null != e && (0, h.canWatchStream)(e, O.default, N.default, p.default, S.default)[0]) return (0, R.trackQuestContentClicked)({
          questId: k.id,
          questContent: g.QuestContent.MEMBERS_LIST,
          questContentCTA: R.QuestContentCTA.WATCH_STREAM,
          trackGuildAndChannelMetadata: !0
        }), _.default.selectVoiceChannel(e.id), (0, c.watchStreamAndTransitionToStream)(V)
      }
      el()
    },
    e_ = (() => null != V ? {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: U.default.Messages.QUESTS_MEMBERS_LIST_WATCH_CTA,
      handleClickCta: ed,
      tileAssetType: "game"
    } : z && !W ? {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
      ctaText: U.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_CTA,
      handleClickCta: Y,
      tileAssetType: "reward"
    } : K ? {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
      ctaText: U.default.Messages.QUESTS_MEMBERS_LIST_PROGRESS_CTA,
      handleClickCta: el,
      tileAssetType: "reward"
    } : {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: U.default.Messages.QUESTS_MEMBERS_LIST_BEGIN_CTA,
      handleClickCta: el,
      tileAssetType: "game"
    })();
  return (0, i.jsx)(D.QuestContentImpressionTracker, {
    questId: k.id,
    questContent: g.QuestContent.MEMBERS_LIST,
    trackGuildAndChannelMetadata: !0,
    children: e => (0, i.jsx)(s.animated.div, {
      ref: t => {
        e.current = t
      },
      "aria-expanded": $,
      className: b.wrapper,
      style: {
        width: F,
        height: ei.height,
        overflow: $ ? "visible" : "hidden",
        borderRadius: ea
      },
      children: (0, i.jsxs)("div", {
        ref: e => {
          Z.current = e
        },
        className: b.container,
        style: {
          borderRadius: ea
        },
        children: [(0, i.jsxs)("div", {
          className: b.top,
          children: [(0, i.jsxs)("div", {
            className: b.left,
            children: [(0, i.jsx)(d.Heading, {
              variant: "heading-sm/semibold",
              children: e_.headerText
            }), (0, i.jsxs)(d.Clickable, {
              className: b.help,
              onClick: e => {
                es(), eu(e)
              },
              children: [(0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                className: b.helpText,
                children: U.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                  gamePublisher: k.config.messages.gamePublisher
                })
              }), (0, i.jsx)(o.CircleQuestionIcon, {
                className: b.helpIcon,
                width: G,
                height: G,
                color: d.tokens.colors.INTERACTIVE_NORMAL
              })]
            })]
          }), (0, i.jsx)("div", {
            className: b.right,
            children: (0, i.jsxs)("div", {
              className: b.imgWrapper,
              children: [er((e, t) => t && (0, i.jsx)(s.animated.div, {
                style: e,
                className: b.imgUnderlay
              })), "game" === e_.tileAssetType && (0, i.jsx)("img", {
                alt: U.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                  gameTitle: k.config.messages.gameTitle,
                  gamePublisher: k.config.messages.gamePublisher
                }),
                className: b.assetTile,
                src: (0, L.getGameTileAssetUrl)(k, Q)
              }), "reward" === e_.tileAssetType && (0, i.jsx)(v.default, {
                className: b.assetTile,
                quest: k,
                questContent: g.QuestContent.MEMBERS_LIST,
                learnMoreStyle: "icon",
                onClick: es
              })]
            })
          })]
        }), (0, i.jsx)(d.Button, {
          onClick: () => {
            es(), e_.handleClickCta()
          },
          color: d.Button.Colors.CUSTOM,
          hover: d.Button.Hovers.PRIMARY,
          className: b.ctaButton,
          children: e_.ctaText
        })]
      })
    })
  })
}