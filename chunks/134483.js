n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(780384),
  c = n(481060),
  d = n(230711),
  u = n(358221),
  _ = n(594190),
  E = n(687516),
  I = n(210887),
  m = n(937995),
  T = n(158776),
  h = n(594174),
  N = n(617136),
  f = n(272008),
  p = n(113434),
  C = n(569984),
  g = n(497505),
  S = n(918701),
  A = n(242755),
  R = n(5881),
  O = n(566078),
  x = n(602667),
  M = n(340100),
  v = n(611855),
  L = n(644646),
  Z = n(670638),
  P = n(667105),
  b = n(860151),
  D = n(46140),
  j = n(981631),
  U = n(354459),
  y = n(689938),
  B = n(703201);
t.Z = function(e) {
  var t, n, s;
  let {
    channelId: k,
    previewQuest: G,
    isParticipatingOverride: F
  } = e, [w, V] = a.useState(!1), H = a.useCallback(() => V(!0), []), Y = a.useCallback(() => V(!1), []), W = a.useContext(m.h9), z = (0, r.e7)([h.default], () => h.default.getCurrentUser()), K = (0, r.e7)([I.Z], () => I.Z.getState().theme), Q = (0, o.wj)(K) ? j.BRd.DARK : j.BRd.LIGHT, {
    isCurrentUserStreamingQuestApplication: q,
    quest: X
  } = (0, r.cj)([T.Z, u.Z, C.Z], () => {
    let e = u.Z.getParticipants(k),
      t = null != G ? G : function(e, t, n) {
        for (let s of e) {
          var i, a;
          if (s.type === U.fO.STREAM) {
            let e = (0, E.L2)(s.stream, n),
              a = (null == e ? void 0 : e.id) != null ? (0, S.lQ)(t, e.id) : null;
            if (null != a && (null === (i = a.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) return a
          }
          if ((0, A.J)({
              location: D.dr.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let i of e) {
              if (!(0, U.I)(i))
                for (let e of n.getActivities(i.user.id)) {
                  if (null == e.application_id) continue;
                  let n = (0, S.CE)(t, e.application_id);
                  if (null != n && (null === (a = n.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return n
                }
            }
        }
        return null
      }(e, C.Z.quests, T.Z);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != z && function(e, t, n, i) {
        for (let s of e) {
          var a;
          if (s.type === U.fO.STREAM && s.user.id === n.id && O.r.build(t.config).application.id === (null === (a = (0, E.L2)(s.stream, i)) || void 0 === a ? void 0 : a.id)) return !0
        }
        return !1
      }(e, t, z, T.Z),
      quest: t
    }
  }, [k, z, G]), J = null != X ? O.r.build(X.config) : null, $ = null == J ? void 0 : J.application.id, ee = (0, r.cj)([_.ZP], () => {
    let e = _.ZP.getRunningGames().map(e => e.id);
    return (0, S.$H)({
      quest: X,
      location: D.dr.QUEST_CHANNEL_CALL_HEADER
    }) && e.includes($)
  }, [X, $]), et = !0 === F || q || ee, en = (0, r.e7)([C.Z], () => null != X && C.Z.isEnrolling(X.id), [X]), ei = (0, r.e7)([u.Z], () => ((null == z ? void 0 : z.id) == null ? null : u.Z.getParticipant(k, z.id)) != null, [k, z]), ea = (0, p.B6)(null == X ? void 0 : X.config.expiresAt), es = (0, p.B6)(null == J ? void 0 : J.rewardsExpireAt), el = a.useCallback(() => {
    null != X && (0, f.AH)(X.id, {
      questContent: g.jn.QUEST_LIVE_STREAM,
      questContentCTA: N.jZ.ACCEPT_QUEST
    })
  }, [X]), er = a.useCallback(() => {
    null != X && ((0, N._3)({
      questId: X.id,
      questContent: g.jn.QUEST_LIVE_STREAM,
      questContentCTA: N.jZ.TRACK_PROGRESS
    }), d.Z.open(j.oAB.INVENTORY))
  }, [X]), eo = a.useCallback(() => {
    null != X && ((0, N._3)({
      questId: X.id,
      questContent: g.jn.QUEST_LIVE_STREAM,
      questContentCTA: N.jZ.LEARN_MORE
    }), d.Z.open(j.oAB.INVENTORY))
  }, [X]), ec = (0, P.hf)({
    quest: X,
    location: g.jn.QUEST_LIVE_STREAM
  }), ed = a.useMemo(() => (0, R.T)({
    quest: X,
    location: D.dr.QUEST_CHANNEL_CALL_HEADER
  }), [X]), eu = (0, p.tP)(X);
  if (null == X || !(0, S.dl)(X)) return null;
  let e_ = (null === (t = X.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    eE = (null === (n = X.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    eI = null != X.userStatus && (0, S.zE)(X.userStatus, g.jn.QUEST_LIVE_STREAM),
    em = null != X.userStatus && (0, S.zE)(X.userStatus, g.jn.QUEST_BAR),
    eT = (0, S.Mi)(X, g.jn.QUEST_BAR) && !em;
  ed.info({
    isQuestCallHeaderDismissed: eI,
    isQuestExpired: eu,
    isQuestBarShowing: eT,
    isCurrentUserCallParticipant: ei
  });
  let eh = null != G && (null === (s = X.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null;
  if (!eh && (eI || eu || eT) || !eh && !ei) return null;
  let eN = (0, S.il)({
      quest: X,
      location: D.dr.QUEST_CHANNEL_CALL_HEADER
    }),
    ef = (0, i.jsx)(L.Z, {
      className: B.rewardTile,
      autoplay: w,
      quest: X,
      questContent: g.jn.QUEST_LIVE_STREAM
    });
  return (0, i.jsx)(x.A, {
    questOrQuests: X,
    overrideVisibility: !W,
    questContent: g.jn.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, i.jsxs)("div", {
        className: l()(B.wrapper, {
          [B.wrapperAccepted]: e_
        }),
        onFocus: H,
        onMouseEnter: H,
        onBlur: Y,
        onMouseLeave: Y,
        children: [!e_ && (0, i.jsxs)("div", {
          className: B.rewardTileWrapper,
          children: [ef, (0, i.jsx)(v.Z, {
            bgOpacity: .32,
            className: B.promotedTag
          })]
        }), (0, i.jsxs)("div", {
          className: B.content,
          children: [(0, i.jsxs)("div", {
            className: B.heading,
            children: [e_ && et ? ef : (0, i.jsx)("img", {
              className: B.gameTile,
              alt: X.config.messages.gameTitle,
              src: (0, S.uo)(X, Q)
            }), (0, i.jsxs)("div", {
              className: B.__invalid_details,
              children: [(0, i.jsxs)("div", {
                className: B.headingWithSubmenu,
                children: [(0, i.jsx)(c.Heading, {
                  className: B.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: et ? (0, S.AV)({
                    quest: X,
                    taskDetails: eN
                  }) : y.Z.Messages.QUESTS_TITLE.format({
                    questName: X.config.messages.questName
                  })
                }), (0, i.jsx)(Z.r, {
                  questContent: g.jn.QUEST_LIVE_STREAM,
                  quest: X,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = X.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, i.jsx)(c.Clickable, {
                    ...e,
                    className: B.submenuWrapper,
                    "aria-label": y.Z.Messages.ACTIONS,
                    children: (0, i.jsx)(c.MoreHorizontalIcon, {
                      size: "md",
                      color: "currentColor",
                      className: B.submenuIcon
                    })
                  })
                })]
              }), (0, i.jsx)(c.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: eE ? y.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: es
                }) : y.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: ea
                })
              })]
            })]
          }), e_ && !eE && !et && (0, i.jsx)(b.Z, {
            autoplay: w,
            quest: X,
            questContent: g.jn.QUEST_LIVE_STREAM,
            questExperimentLocation: D.dr.QUEST_CHANNEL_CALL_HEADER
          }), (0, i.jsxs)("div", {
            className: B.ctas,
            children: [!e_ && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(c.Button, {
                className: B.cta,
                color: c.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: c.Button.Sizes.SMALL,
                onClick: eo,
                children: y.Z.Messages.QUESTS_LEARN_MORE_V2
              }), (0, i.jsx)(c.Button, {
                className: B.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: el,
                size: c.Button.Sizes.SMALL,
                submitting: en,
                children: y.Z.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), e_ && !eE && et && (0, i.jsx)(M.Z, {
              color: c.tokens.colors.BG_BRAND,
              quest: X
            }), e_ && !eE && !et && (0, i.jsx)(c.Button, {
              className: B.cta,
              color: c.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: er,
              size: c.Button.Sizes.SMALL,
              children: y.Z.Messages.QUESTS_CHECK_PROGRESS
            }), eE && (0, i.jsx)(c.Button, {
              className: B.cta,
              color: c.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: ec,
              size: c.Button.Sizes.SMALL,
              children: y.Z.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}