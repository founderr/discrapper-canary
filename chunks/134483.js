n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(780384),
  c = n(481060),
  u = n(230711),
  d = n(358221),
  E = n(594190),
  _ = n(687516),
  I = n(210887),
  T = n(937995),
  m = n(158776),
  N = n(594174),
  h = n(617136),
  C = n(272008),
  S = n(113434),
  A = n(569984),
  g = n(497505),
  p = n(918701),
  f = n(242755),
  R = n(5881),
  O = n(566078),
  M = n(602667),
  x = n(340100),
  v = n(611855),
  L = n(644646),
  Z = n(670638),
  P = n(667105),
  D = n(860151),
  j = n(46140),
  U = n(981631),
  b = n(354459),
  y = n(689938),
  B = n(703201);
t.Z = function(e) {
  var t, n, l;
  let {
    channelId: k,
    previewQuest: G,
    isParticipatingOverride: F
  } = e, [V, w] = i.useState(!1), H = i.useCallback(() => w(!0), []), Y = i.useCallback(() => w(!1), []), W = i.useContext(T.h9), z = (0, r.e7)([N.default], () => N.default.getCurrentUser()), K = (0, r.e7)([I.Z], () => I.Z.getState().theme), Q = (0, o.wj)(K) ? U.BRd.DARK : U.BRd.LIGHT, {
    isCurrentUserStreamingQuestApplication: X,
    quest: q
  } = (0, r.cj)([m.Z, d.Z, A.Z], () => {
    let e = d.Z.getParticipants(k),
      t = null != G ? G : function(e, t, n) {
        for (let l of e) {
          var s, i;
          if (l.type === b.fO.STREAM) {
            let e = (0, _.L2)(l.stream, n),
              i = (null == e ? void 0 : e.id) != null ? (0, p.lQ)(t, e.id) : null;
            if (null != i && (null === (s = i.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null) return i
          }
          if ((0, f.J)({
              location: j.dr.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let s of e) {
              if (!(0, b.I)(s))
                for (let e of n.getActivities(s.user.id)) {
                  if (null == e.application_id) continue;
                  let n = (0, p.CE)(t, e.application_id);
                  if (null != n && (null === (i = n.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) return n
                }
            }
        }
        return null
      }(e, A.Z.quests, m.Z);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != z && function(e, t, n, s) {
        for (let l of e) {
          var i;
          if (l.type === b.fO.STREAM && l.user.id === n.id && O.r.build(t.config).application.id === (null === (i = (0, _.L2)(l.stream, s)) || void 0 === i ? void 0 : i.id)) return !0
        }
        return !1
      }(e, t, z, m.Z),
      quest: t
    }
  }, [k, z, G]), J = null != q ? O.r.build(q.config) : null, $ = null == J ? void 0 : J.application.id, ee = (0, r.cj)([E.ZP], () => {
    let e = E.ZP.getRunningGames().map(e => e.id);
    return (0, p.$H)({
      quest: q,
      location: j.dr.QUEST_CHANNEL_CALL_HEADER
    }) && e.includes($)
  }, [q, $]), et = !0 === F || X || ee, en = (0, r.e7)([A.Z], () => null != q && A.Z.isEnrolling(q.id), [q]), es = (0, r.e7)([d.Z], () => ((null == z ? void 0 : z.id) == null ? null : d.Z.getParticipant(k, z.id)) != null, [k, z]), ei = (0, S.B6)(null == q ? void 0 : q.config.expiresAt), el = (0, S.B6)(null == J ? void 0 : J.rewardsExpireAt), ea = i.useCallback(() => {
    null != q && (0, C.AH)(q.id, {
      questContent: g.jn.QUEST_LIVE_STREAM,
      questContentCTA: h.jZ.ACCEPT_QUEST
    })
  }, [q]), er = i.useCallback(() => {
    null != q && ((0, h._3)({
      questId: q.id,
      questContent: g.jn.QUEST_LIVE_STREAM,
      questContentCTA: h.jZ.TRACK_PROGRESS
    }), u.Z.open(U.oAB.INVENTORY))
  }, [q]), eo = i.useCallback(() => {
    null != q && ((0, h._3)({
      questId: q.id,
      questContent: g.jn.QUEST_LIVE_STREAM,
      questContentCTA: h.jZ.LEARN_MORE
    }), u.Z.open(U.oAB.INVENTORY))
  }, [q]), ec = (0, P.hf)({
    quest: q,
    location: g.jn.QUEST_LIVE_STREAM
  }), eu = i.useMemo(() => (0, R.T)({
    quest: q,
    location: j.dr.QUEST_CHANNEL_CALL_HEADER
  }), [q]), ed = (0, S.tP)(q);
  if (null == q || !(0, p.dl)(q)) return null;
  let eE = (null === (t = q.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    e_ = (null === (n = q.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    eI = null != q.userStatus && (0, p.zE)(q.userStatus, g.jn.QUEST_LIVE_STREAM),
    eT = null != q.userStatus && (0, p.zE)(q.userStatus, g.jn.QUEST_BAR),
    em = (0, p.Mi)(q, g.jn.QUEST_BAR) && !eT;
  eu.info({
    isQuestCallHeaderDismissed: eI,
    isQuestExpired: ed,
    isQuestBarShowing: em,
    isCurrentUserCallParticipant: es
  });
  let eN = null != G && (null === (l = q.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null;
  if (!eN && (eI || ed || em) || !eN && !es) return null;
  let eh = (0, p.il)({
      quest: q,
      location: j.dr.QUEST_CHANNEL_CALL_HEADER
    }),
    eC = (0, s.jsx)(L.Z, {
      className: B.rewardTile,
      autoplay: V,
      quest: q,
      questContent: g.jn.QUEST_LIVE_STREAM
    });
  return (0, s.jsx)(M.A, {
    questOrQuests: q,
    overrideVisibility: !W,
    questContent: g.jn.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, s.jsxs)("div", {
        className: a()(B.wrapper, {
          [B.wrapperAccepted]: eE
        }),
        onFocus: H,
        onMouseEnter: H,
        onBlur: Y,
        onMouseLeave: Y,
        children: [!eE && (0, s.jsxs)("div", {
          className: B.rewardTileWrapper,
          children: [eC, (0, s.jsx)(v.Z, {
            bgOpacity: .32,
            className: B.promotedTag
          })]
        }), (0, s.jsxs)("div", {
          className: B.content,
          children: [(0, s.jsxs)("div", {
            className: B.heading,
            children: [eE && et ? eC : (0, s.jsx)("img", {
              className: B.gameTile,
              alt: q.config.messages.gameTitle,
              src: (0, p.uo)(q, Q)
            }), (0, s.jsxs)("div", {
              className: B.__invalid_details,
              children: [(0, s.jsxs)("div", {
                className: B.headingWithSubmenu,
                children: [(0, s.jsx)(c.Heading, {
                  className: B.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: et ? (0, p.AV)({
                    quest: q,
                    taskDetails: eh
                  }) : y.Z.Messages.QUESTS_TITLE.format({
                    questName: q.config.messages.questName
                  })
                }), (0, s.jsx)(Z.r, {
                  questContent: g.jn.QUEST_LIVE_STREAM,
                  quest: q,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = q.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, s.jsx)(c.Clickable, {
                    ...e,
                    className: B.submenuWrapper,
                    "aria-label": y.Z.Messages.ACTIONS,
                    children: (0, s.jsx)(c.MoreHorizontalIcon, {
                      size: "md",
                      color: "currentColor",
                      className: B.submenuIcon
                    })
                  })
                })]
              }), (0, s.jsx)(c.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: e_ ? y.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: el
                }) : y.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: ei
                })
              })]
            })]
          }), eE && !e_ && !et && (0, s.jsx)(D.Z, {
            autoplay: V,
            quest: q,
            questContent: g.jn.QUEST_LIVE_STREAM,
            questExperimentLocation: j.dr.QUEST_CHANNEL_CALL_HEADER
          }), (0, s.jsxs)("div", {
            className: B.ctas,
            children: [!eE && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(c.Button, {
                className: B.cta,
                color: c.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: c.Button.Sizes.SMALL,
                onClick: eo,
                children: y.Z.Messages.QUESTS_LEARN_MORE_V2
              }), (0, s.jsx)(c.Button, {
                className: B.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: ea,
                size: c.Button.Sizes.SMALL,
                submitting: en,
                children: y.Z.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), eE && !e_ && et && (0, s.jsx)(x.Z, {
              color: c.tokens.colors.BG_BRAND,
              quest: q
            }), eE && !e_ && !et && (0, s.jsx)(c.Button, {
              className: B.cta,
              color: c.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: er,
              size: c.Button.Sizes.SMALL,
              children: y.Z.Messages.QUESTS_CHECK_PROGRESS
            }), e_ && (0, s.jsx)(c.Button, {
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