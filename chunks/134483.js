t(47120);
var i = t(735250),
  l = t(470079),
  s = t(120356),
  r = t.n(s),
  a = t(442837),
  o = t(780384),
  u = t(481060),
  c = t(230711),
  d = t(358221),
  _ = t(594190),
  I = t(687516),
  E = t(210887),
  C = t(937995),
  m = t(158776),
  S = t(594174),
  N = t(617136),
  T = t(272008),
  L = t(113434),
  h = t(569984),
  R = t(497505),
  f = t(918701),
  g = t(242755),
  v = t(5881),
  x = t(566078),
  O = t(602667),
  A = t(340100),
  M = t(611855),
  j = t(644646),
  Z = t(670638),
  p = t(667105),
  U = t(860151),
  P = t(46140),
  B = t(981631),
  D = t(354459),
  b = t(689938),
  G = t(703201);
n.Z = function(e) {
  var n, t, s;
  let {
    channelId: H,
    previewQuest: y,
    isParticipatingOverride: k
  } = e, [F, w] = l.useState(!1), V = l.useCallback(() => w(!0), []), z = l.useCallback(() => w(!1), []), W = l.useContext(C.h9), Q = (0, a.e7)([S.default], () => S.default.getCurrentUser()), q = (0, a.e7)([E.Z], () => E.Z.getState().theme), Y = (0, o.wj)(q) ? B.BRd.DARK : B.BRd.LIGHT, {
    isCurrentUserStreamingQuestApplication: K,
    quest: J
  } = (0, a.cj)([m.Z, d.Z, h.Z], () => {
    let e = d.Z.getParticipants(H),
      n = null != y ? y : function(e, n, t) {
        for (let s of e) {
          var i, l;
          if (s.type === D.fO.STREAM) {
            let e = (0, I.L2)(s.stream, t),
              l = (null == e ? void 0 : e.id) != null ? (0, f.lQ)(n, e.id) : null;
            if (null != l && (null === (i = l.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) return l
          }
          if ((0, g.J)({
              location: P.dr.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let i of e) {
              if (!(0, D.I)(i))
                for (let e of t.getActivities(i.user.id)) {
                  if (null == e.application_id) continue;
                  let t = (0, f.CE)(n, e.application_id);
                  if (null != t && (null === (l = t.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return t
                }
            }
        }
        return null
      }(e, h.Z.quests, m.Z);
    return {
      isCurrentUserStreamingQuestApplication: null != n && null != Q && function(e, n, t, i) {
        for (let s of e) {
          var l;
          if (s.type === D.fO.STREAM && s.user.id === t.id && x.r.build(n.config).application.id === (null === (l = (0, I.L2)(s.stream, i)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, n, Q, m.Z),
      quest: n
    }
  }, [H, Q, y]), X = null != J ? x.r.build(J.config) : null, $ = null == X ? void 0 : X.application.id, ee = (0, a.cj)([_.ZP], () => {
    let e = _.ZP.getRunningGames().map(e => e.id);
    return (0, f.$H)({
      quest: J,
      location: P.dr.QUEST_CHANNEL_CALL_HEADER
    }) && e.includes($)
  }, [J, $]), en = !0 === k || K || ee, et = (0, a.e7)([h.Z], () => null != J && h.Z.isEnrolling(J.id), [J]), ei = (0, a.e7)([d.Z], () => ((null == Q ? void 0 : Q.id) == null ? null : d.Z.getParticipant(H, Q.id)) != null, [H, Q]), el = (0, L.B6)(null == J ? void 0 : J.config.expiresAt), es = (0, L.B6)(null == X ? void 0 : X.rewardsExpireAt), er = l.useCallback(() => {
    null != J && (0, T.AH)(J.id, {
      questContent: R.jn.QUEST_LIVE_STREAM,
      questContentCTA: N.jZ.ACCEPT_QUEST
    })
  }, [J]), ea = l.useCallback(() => {
    null != J && ((0, N._3)({
      questId: J.id,
      questContent: R.jn.QUEST_LIVE_STREAM,
      questContentCTA: N.jZ.TRACK_PROGRESS
    }), c.Z.open(B.oAB.INVENTORY))
  }, [J]), eo = l.useCallback(() => {
    null != J && ((0, N._3)({
      questId: J.id,
      questContent: R.jn.QUEST_LIVE_STREAM,
      questContentCTA: N.jZ.LEARN_MORE
    }), c.Z.open(B.oAB.INVENTORY))
  }, [J]), eu = (0, p.hf)({
    quest: J,
    location: R.jn.QUEST_LIVE_STREAM
  }), ec = l.useMemo(() => (0, v.T)({
    quest: J,
    location: P.dr.QUEST_CHANNEL_CALL_HEADER
  }), [J]), ed = (0, L.tP)(J);
  if (null == J || !(0, f.dl)(J)) return null;
  let e_ = (null === (n = J.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
    eI = (null === (t = J.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    eE = null != J.userStatus && (0, f.zE)(J.userStatus, R.jn.QUEST_LIVE_STREAM),
    eC = null != J.userStatus && (0, f.zE)(J.userStatus, R.jn.QUEST_BAR),
    em = (0, f.Mi)(J, R.jn.QUEST_BAR) && !eC;
  ec.info({
    isQuestCallHeaderDismissed: eE,
    isQuestExpired: ed,
    isQuestBarShowing: em,
    isCurrentUserCallParticipant: ei
  });
  let eS = null != y && (null === (s = J.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null;
  if (!eS && (eE || ed || em) || !eS && !ei) return null;
  let eN = (0, f.il)({
      quest: J,
      location: P.dr.QUEST_CHANNEL_CALL_HEADER
    }),
    eT = (0, i.jsx)(j.Z, {
      className: G.rewardTile,
      autoplay: F,
      quest: J,
      questContent: R.jn.QUEST_LIVE_STREAM
    });
  return (0, i.jsx)(O.A, {
    questOrQuests: J,
    overrideVisibility: !W,
    questContent: R.jn.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, i.jsxs)("div", {
        className: r()(G.wrapper, {
          [G.wrapperAccepted]: e_
        }),
        onFocus: V,
        onMouseEnter: V,
        onBlur: z,
        onMouseLeave: z,
        children: [!e_ && (0, i.jsxs)("div", {
          className: G.rewardTileWrapper,
          children: [eT, (0, i.jsx)(M.Z, {
            bgOpacity: .32,
            className: G.promotedTag
          })]
        }), (0, i.jsxs)("div", {
          className: G.content,
          children: [(0, i.jsxs)("div", {
            className: G.heading,
            children: [e_ && en ? eT : (0, i.jsx)("img", {
              className: G.gameTile,
              alt: J.config.messages.gameTitle,
              src: (0, f.uo)(J, Y)
            }), (0, i.jsxs)("div", {
              className: G.__invalid_details,
              children: [(0, i.jsxs)("div", {
                className: G.headingWithSubmenu,
                children: [(0, i.jsx)(u.Heading, {
                  className: G.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: en ? (0, f.AV)({
                    quest: J,
                    taskDetails: eN
                  }) : b.Z.Messages.QUESTS_TITLE.format({
                    questName: J.config.messages.questName
                  })
                }), (0, i.jsx)(Z.r, {
                  questContent: R.jn.QUEST_LIVE_STREAM,
                  quest: J,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = J.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, i.jsx)(u.Clickable, {
                    ...e,
                    className: G.submenuWrapper,
                    "aria-label": b.Z.Messages.ACTIONS,
                    children: (0, i.jsx)(u.MoreHorizontalIcon, {
                      size: "md",
                      color: "currentColor",
                      className: G.submenuIcon
                    })
                  })
                })]
              }), (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: eI ? b.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: es
                }) : b.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: el
                })
              })]
            })]
          }), e_ && !eI && !en && (0, i.jsx)(U.Z, {
            autoplay: F,
            quest: J,
            questContent: R.jn.QUEST_LIVE_STREAM,
            questExperimentLocation: P.dr.QUEST_CHANNEL_CALL_HEADER
          }), (0, i.jsxs)("div", {
            className: G.ctas,
            children: [!e_ && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(u.Button, {
                className: G.cta,
                color: u.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: u.Button.Sizes.SMALL,
                onClick: eo,
                children: b.Z.Messages.QUESTS_LEARN_MORE_V2
              }), (0, i.jsx)(u.Button, {
                className: G.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: er,
                size: u.Button.Sizes.SMALL,
                submitting: et,
                children: b.Z.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), e_ && !eI && en && (0, i.jsx)(A.Z, {
              color: u.tokens.colors.BG_BRAND,
              quest: J
            }), e_ && !eI && !en && (0, i.jsx)(u.Button, {
              className: G.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: ea,
              size: u.Button.Sizes.SMALL,
              children: b.Z.Messages.QUESTS_CHECK_PROGRESS
            }), eI && (0, i.jsx)(u.Button, {
              className: G.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: eu,
              size: u.Button.Sizes.SMALL,
              children: b.Z.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}