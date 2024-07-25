n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(780384),
  c = n(481060),
  u = n(230711),
  d = n(358221),
  _ = n(594190),
  E = n(687516),
  I = n(210887),
  m = n(937995),
  T = n(158776),
  h = n(594174),
  N = n(617136),
  f = n(272008),
  C = n(113434),
  p = n(569984),
  g = n(497505),
  S = n(918701),
  A = n(5881),
  R = n(566078),
  x = n(602667),
  O = n(340100),
  M = n(611855),
  v = n(644646),
  L = n(670638),
  Z = n(667105),
  P = n(860151),
  D = n(46140),
  b = n(981631),
  j = n(354459),
  U = n(689938),
  y = n(630706);
t.Z = function(e) {
  var t, n, s;
  let {
channelId: B,
previewQuest: k,
isParticipatingOverride: F
  } = e, [G, w] = a.useState(!1), V = a.useCallback(() => w(!0), []), H = a.useCallback(() => w(!1), []), Y = a.useContext(m.h9), W = (0, l.e7)([h.default], () => h.default.getCurrentUser()), K = (0, l.e7)([I.Z], () => I.Z.getState().theme), z = (0, o.wj)(K) ? b.BRd.DARK : b.BRd.LIGHT, {
isCurrentUserStreamingQuestApplication: Q,
quest: q
  } = (0, l.cj)([
T.Z,
d.Z,
p.Z
  ], () => {
var e, t, n, i;
let a = d.Z.getParticipants(B),
  s = null != k ? k : function(e, t, n) {
    for (let r of e) {
      var i, a, s;
      if (r.type === j.fO.STREAM) {
        let e = null !== (a = (0, E.Um)(r.stream, n)) && void 0 !== a ? a : null,
          s = (0, S.ZZ)(t, e);
        if (null != s && (null === (i = s.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)
          return s;
      }
      for (let i of e) {
        if (!(0, j.I)(i))
          for (let e of n.getActivities(i.user.id)) {
            let n = (0, S.ZZ)(t, e);
            if (null != n && (null === (s = n.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null && ((0, S.Nj)({
                quest: n
              }) || (0, S.$J)(n)))
              return n;
          }
      }
    }
    return null;
  }(a, p.Z.quests, T.Z);
return {
  isCurrentUserStreamingQuestApplication: null != s && null != W && (e = a, t = s, n = W, i = T.Z, e.some(e => {
    if (e.type !== j.fO.STREAM || e.user.id !== n.id)
      return !1;
    let a = (0, E.Um)(e.stream, i);
    return null != a && (0, S._D)(a, t);
  })),
  quest: s
};
  }, [
B,
W,
k
  ]), X = null != q ? R.r.build(q.config) : null, J = null == X ? void 0 : X.application.id, $ = (0, l.e7)([
_.ZP,
T.Z
  ], () => {
if (null == q)
  return !1;
let e = _.ZP.getRunningGames().map(e => e.id);
if ((0, S.$H)(q) && e.includes(J))
  return !0;
let t = null != W ? T.Z.findActivity(W.id, e => e.type !== b.IIU.CUSTOM_STATUS) : null;
return !!(null != t && (0, S.$J)(q) && (0, S._D)(t, q)) || !1;
  }, [
q,
J,
W
  ]), ee = !0 === F || Q || $, et = (0, l.e7)([p.Z], () => null != q && p.Z.isEnrolling(q.id), [q]), en = (0, l.e7)([d.Z], () => ((null == W ? void 0 : W.id) == null ? null : d.Z.getParticipant(B, W.id)) != null, [
B,
W
  ]), ei = (0, C.B6)(null == q ? void 0 : q.config.expiresAt), ea = (0, C.B6)(null == X ? void 0 : X.rewardsExpireAt), es = a.useCallback(() => {
null != q && (0, f.AH)(q.id, {
  questContent: g.jn.QUEST_LIVE_STREAM,
  questContentCTA: N.jZ.ACCEPT_QUEST
});
  }, [q]), er = a.useCallback(() => {
null != q && ((0, N._3)({
  questId: q.id,
  questContent: g.jn.QUEST_LIVE_STREAM,
  questContentCTA: N.jZ.TRACK_PROGRESS
}), u.Z.open(b.oAB.INVENTORY));
  }, [q]), el = a.useCallback(() => {
null != q && ((0, N._3)({
  questId: q.id,
  questContent: g.jn.QUEST_LIVE_STREAM,
  questContentCTA: N.jZ.LEARN_MORE
}), u.Z.open(b.oAB.INVENTORY));
  }, [q]), eo = (0, Z.hf)({
quest: q,
location: g.jn.QUEST_LIVE_STREAM
  }), ec = a.useMemo(() => (0, A.T)({
quest: q,
location: D.dr.QUEST_CHANNEL_CALL_HEADER
  }), [q]), eu = (0, C.tP)(q);
  if (null == q || !(0, S.dl)(q))
return null;
  let ed = (null === (t = q.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
e_ = (null === (n = q.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
eE = null != q.userStatus && (0, S.zE)(q.userStatus, g.jn.QUEST_LIVE_STREAM),
eI = null != q.userStatus && (0, S.zE)(q.userStatus, g.jn.QUEST_BAR),
em = (0, S.Mi)(q, g.jn.QUEST_BAR) && !eI;
  ec.info({
isQuestCallHeaderDismissed: eE,
isQuestExpired: eu,
isQuestBarShowing: em,
isCurrentUserCallParticipant: en
  });
  let eT = null != k && (null === (s = q.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null;
  if (!eT && (eE || eu || em) || !eT && !en)
return null;
  let eh = (0, S.il)(q),
eN = (0, i.jsx)(v.Z, {
  className: y.rewardTile,
  autoplay: G,
  quest: q,
  questContent: g.jn.QUEST_LIVE_STREAM
});
  return (0, i.jsx)(x.A, {
questOrQuests: q,
overrideVisibility: !Y,
questContent: g.jn.QUEST_LIVE_STREAM,
children: () => {
  var e;
  return (0, i.jsxs)('div', {
    className: r()(y.wrapper, {
      [y.wrapperAccepted]: ed
    }),
    onFocus: V,
    onMouseEnter: V,
    onBlur: H,
    onMouseLeave: H,
    children: [
      !ed && (0, i.jsxs)('div', {
        className: y.rewardTileWrapper,
        children: [
          eN,
          (0, i.jsx)(M.Z, {
            bgOpacity: 0.32,
            className: y.promotedTag
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: y.content,
        children: [
          (0, i.jsxs)('div', {
            className: y.heading,
            children: [
              ed && ee ? eN : (0, i.jsx)('img', {
                className: y.gameTile,
                alt: q.config.messages.gameTitle,
                src: (0, S.uo)(q, z)
              }),
              (0, i.jsxs)('div', {
                children: [
                  (0, i.jsxs)('div', {
                    className: y.headingWithSubmenu,
                    children: [
                      (0, i.jsx)(c.Heading, {
                        className: y.questTitle,
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: ee ? (0, S.AV)({
                          quest: q,
                          taskDetails: eh
                        }) : U.Z.Messages.QUESTS_TITLE.format({
                          questName: q.config.messages.questName
                        })
                      }),
                      (0, i.jsx)(L.r, {
                        questContent: g.jn.QUEST_LIVE_STREAM,
                        quest: q,
                        preventIdle: !0,
                        shouldShowDisclosure: (null === (e = q.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                        children: e => (0, i.jsx)(c.Clickable, {
                          ...e,
                          className: y.submenuWrapper,
                          'aria-label': U.Z.Messages.ACTIONS,
                          children: (0, i.jsx)(c.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: y.submenuIcon
                          })
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-xs/medium',
                    children: e_ ? U.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                      expirationDate: ea
                    }) : U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                      expirationDate: ei
                    })
                  })
                ]
              })
            ]
          }),
          ed && !e_ && !ee && (0, i.jsx)(P.Z, {
            autoplay: G,
            quest: q,
            questContent: g.jn.QUEST_LIVE_STREAM,
            taskDetails: eh,
            location: D.dr.QUEST_CHANNEL_CALL_HEADER
          }),
          (0, i.jsxs)('div', {
            className: y.ctas,
            children: [
              !ed && (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(c.Button, {
                    className: y.cta,
                    color: c.Button.Colors.PRIMARY,
                    fullWidth: !0,
                    size: c.Button.Sizes.SMALL,
                    onClick: el,
                    children: U.Z.Messages.QUESTS_LEARN_MORE_V2
                  }),
                  (0, i.jsx)(c.Button, {
                    className: y.cta,
                    color: c.Button.Colors.BRAND,
                    fullWidth: !0,
                    onClick: es,
                    size: c.Button.Sizes.SMALL,
                    submitting: et,
                    children: U.Z.Messages.QUESTS_ACCEPT_QUEST
                  })
                ]
              }),
              ed && !e_ && ee && (0, i.jsx)(O.Z, {
                color: c.tokens.colors.BG_BRAND,
                quest: q
              }),
              ed && !e_ && !ee && (0, i.jsx)(c.Button, {
                className: y.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: er,
                size: c.Button.Sizes.SMALL,
                children: U.Z.Messages.QUESTS_CHECK_PROGRESS
              }),
              e_ && (0, i.jsx)(c.Button, {
                className: y.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: eo,
                size: c.Button.Sizes.SMALL,
                children: U.Z.Messages.QUESTS_CLAIM_REWARD
              })
            ]
          })
        ]
      })
    ]
  });
}
  });
};