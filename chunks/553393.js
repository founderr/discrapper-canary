"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(91192),
  a = n(442837),
  l = n(780384),
  u = n(481060),
  _ = n(287734),
  c = n(872810),
  d = n(230711),
  E = n(393238),
  I = n(40851),
  T = n(607070),
  h = n(258609),
  S = n(382182),
  f = n(210887),
  N = n(592125),
  A = n(430824),
  m = n(496675),
  O = n(979651),
  R = n(617136),
  p = n(113434),
  g = n(497505),
  C = n(918701),
  v = n(602667),
  L = n(644646),
  D = n(667105),
  M = n(981631),
  P = n(231338),
  y = n(689938),
  U = n(13801);
let b = "11px";

function G(e, t) {
  return null != e && null != t && (0, S.p9)(t, O.Z, A.Z, m.Z, h.Z)[0]
}
t.Z = function(e) {
  var t, h, S;
  let {
    quest: A,
    memberListItemRef: m,
    applicationStream: O,
    position: w,
    closePopout: k,
    updatePosition: B
  } = e, x = (0, a.e7)([N.Z], () => {
    var e;
    return null !== (e = N.Z.getChannel(null == O ? void 0 : O.channelId)) && void 0 !== e ? e : null
  }), V = (0, D.hf)({
    quest: A,
    location: g.jn.MEMBERS_LIST
  }), Z = (0, p.tP)(A), H = (null == A ? void 0 : null === (t = A.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, F = (null == A ? void 0 : null === (h = A.userStatus) || void 0 === h ? void 0 : h.enrolledAt) != null, Y = (null == A ? void 0 : null === (S = A.userStatus) || void 0 === S ? void 0 : S.completedAt) != null, j = (0, a.e7)([f.Z], () => f.Z.getState().theme), W = (0, l.wj)(j) ? P.BR.DARK : P.BR.LIGHT, K = (0, a.e7)([T.Z], () => T.Z.useReducedMotion), {
    ref: z,
    height: q
  } = (0, E.Z)(), [X, Q] = r.useState(K), J = (0, I.Aq)(), $ = (0, o.eg)();
  r.useEffect(() => {
    let e = $.current;
    return null == e || e.addEventListener("scroll", k), () => {
      null == e || e.removeEventListener("scroll", k)
    }
  }, [k, $]), r.useEffect(() => {
    let e = $.current,
      t = m.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => B());
    return n.observe(e, {
      childList: !0,
      subtree: !0
    }), () => {
      n.disconnect()
    }
  }, [m, $, B]);
  let ee = (0, s.useSpring)({
      from: {
        height: 0
      },
      height: null != q ? q : 0,
      config: {
        tension: 450,
        friction: 45
      },
      immediate: K,
      onRest: () => Q(!0)
    }),
    et = (0, s.useTransition)(X, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    en = () => {
      J.dispatch(M.CkL.POPOUT_CLOSE)
    },
    ei = "top" === w ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px");
  if (null == A || Z || H && !G(O, x)) return null;
  let er = () => {
      (0, R._3)({
        questId: A.id,
        questContent: g.jn.MEMBERS_LIST,
        questContentCTA: R.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: !0
      }), (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, 316210));
        return t => (0, i.jsx)(e, {
          ...t,
          questContent: g.jn.MEMBERS_LIST,
          quest: A
        })
      })
    },
    es = () => {
      (0, R._3)({
        questId: A.id,
        questContent: g.jn.MEMBERS_LIST,
        questContentCTA: R.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: !0
      }), d.Z.open(M.oAB.INVENTORY)
    },
    eo = e => {
      e.stopPropagation(), er()
    },
    ea = () => {
      if (G(O, x) && null != x) return (0, R._3)({
        questId: A.id,
        questContent: g.jn.MEMBERS_LIST,
        questContentCTA: R.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: !0
      }), _.default.selectVoiceChannel(x.id), (0, c.iV)(O);
      es()
    },
    el = Y && !H ? {
      headerText: y.Z.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
      ctaText: y.Z.Messages.QUESTS_CLAIM_REWARD,
      handleClickCta: V,
      tileAssetType: "reward"
    } : F && !H ? {
      headerText: y.Z.Messages.QUESTS_MEMBERS_LIST_FINISH,
      ctaText: y.Z.Messages.QUESTS_CHECK_PROGRESS,
      handleClickCta: es,
      tileAssetType: "reward"
    } : G(O, x) ? {
      headerText: y.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: y.Z.Messages.QUESTS_JOIN_ME,
      handleClickCta: ea,
      tileAssetType: "game"
    } : {
      headerText: y.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: y.Z.Messages.QUESTS_UNLOCK_REWARDS,
      handleClickCta: es,
      tileAssetType: "game"
    };
  return (0, i.jsx)(v.A, {
    questOrQuests: A,
    questContent: g.jn.MEMBERS_LIST,
    trackGuildAndChannelMetadata: !0,
    children: e => {
      var t, n;
      return (0, i.jsx)(s.animated.div, {
        ref: t => {
          e.current = t
        },
        "aria-expanded": X,
        className: U.wrapper,
        style: {
          width: null !== (n = null === (t = m.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : 222,
          height: ee.height,
          overflow: X ? "visible" : "hidden",
          borderRadius: ei
        },
        children: (0, i.jsxs)("div", {
          ref: e => {
            z.current = e
          },
          className: U.container,
          style: {
            borderRadius: ei
          },
          children: [(0, i.jsxs)("div", {
            className: U.top,
            children: [(0, i.jsxs)("div", {
              className: U.left,
              children: [(0, i.jsx)(u.Heading, {
                variant: "heading-sm/semibold",
                children: el.headerText
              }), (0, i.jsxs)(u.Clickable, {
                className: U.help,
                onClick: e => {
                  en(), eo(e)
                },
                children: [(0, i.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  className: U.helpText,
                  children: y.Z.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                    gamePublisher: A.config.messages.gamePublisher
                  })
                }), (0, i.jsx)(u.CircleQuestionIcon, {
                  size: "custom",
                  className: U.helpIcon,
                  width: b,
                  height: b,
                  color: u.tokens.colors.INTERACTIVE_NORMAL
                })]
              })]
            }), (0, i.jsx)("div", {
              className: U.right,
              children: (0, i.jsxs)("div", {
                className: U.imgWrapper,
                children: [et((e, t) => t && (0, i.jsx)(s.animated.div, {
                  style: e,
                  className: U.imgUnderlay
                })), "game" === el.tileAssetType && (0, i.jsx)("img", {
                  alt: y.Z.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                    gameTitle: A.config.messages.gameTitle,
                    gamePublisher: A.config.messages.gamePublisher
                  }),
                  className: U.assetTile,
                  src: (0, C.uo)(A, W)
                }), "reward" === el.tileAssetType && (0, i.jsx)(L.Z, {
                  className: U.assetTile,
                  quest: A,
                  questContent: g.jn.MEMBERS_LIST,
                  learnMoreStyle: "icon",
                  onClick: en
                })]
              })
            })]
          }), (0, i.jsx)(u.Button, {
            onClick: () => {
              en(), el.handleClickCta()
            },
            color: u.Button.Colors.CUSTOM,
            className: U.ctaButton,
            children: el.ctaText
          })]
        })
      })
    }
  })
}