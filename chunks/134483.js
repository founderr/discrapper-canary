"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("442837"),
  u = n("780384"),
  o = n("481060"),
  d = n("230711"),
  c = n("358221"),
  E = n("594190"),
  f = n("687516"),
  _ = n("210887"),
  T = n("937995"),
  I = n("158776"),
  S = n("594174"),
  m = n("808268"),
  C = n("617136"),
  N = n("272008"),
  R = n("113434"),
  g = n("569984"),
  v = n("497505"),
  L = n("918701"),
  h = n("242755"),
  p = n("5881"),
  M = n("566078"),
  O = n("874137"),
  A = n("340100"),
  x = n("611855"),
  U = n("644646"),
  D = n("670638"),
  P = n("667105"),
  j = n("860151"),
  B = n("46140"),
  b = n("981631"),
  y = n("354459"),
  G = n("689938"),
  F = n("599660");
t.default = function(e) {
  var t, n, i;
  let {
    channelId: H,
    previewQuest: w,
    isParticipatingOverride: k
  } = e, [Q, V] = a.useState(!1), W = a.useCallback(() => V(!0), []), q = a.useCallback(() => V(!1), []), Y = a.useContext(T.IdleStateContext), Z = (0, r.useStateFromStores)([S.default], () => S.default.getCurrentUser()), z = (0, r.useStateFromStores)([_.default], () => _.default.getState().theme), K = (0, u.isThemeDark)(z) ? b.ThemeTypes.DARK : b.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: J,
    quest: X
  } = (0, r.useStateFromStoresObject)([I.default, c.default, g.default], () => {
    let e = c.default.getParticipants(H),
      t = null != w ? w : function(e, t, n) {
        for (let i of e) {
          var s, a;
          if (i.type === y.ParticipantTypes.STREAM) {
            let e = (0, f.getStreamerApplication)(i.stream, n),
              a = (null == e ? void 0 : e.id) != null ? (0, L.getQuestByApplicationId)(t, e.id) : null;
            if (null != a && (null === (s = a.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null) return a
          }
          if ((0, h.isEligibleForQuestPlaytime)({
              location: B.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let s of e) {
              if (!(0, y.isActivityParticipant)(s))
                for (let e of n.getActivities(s.user.id)) {
                  if (null == e.application_id) continue;
                  let n = (0, L.getPlaytimeQuestByApplicationId)(t, e.application_id);
                  if (null != n && (null === (a = n.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return n
                }
            }
        }
        return null
      }(e, g.default.quests, I.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != Z && function(e, t, n, s) {
        for (let i of e) {
          var a;
          if (i.type === y.ParticipantTypes.STREAM && i.user.id === n.id && M.SharedQuestFields.build(t.config).application.id === (null === (a = (0, f.getStreamerApplication)(i.stream, s)) || void 0 === a ? void 0 : a.id)) return !0
        }
        return !1
      }(e, t, Z, I.default),
      quest: t
    }
  }, [H, Z, w]), $ = null != X ? M.SharedQuestFields.build(X.config) : null, ee = null == $ ? void 0 : $.application.id, et = (0, r.useStateFromStoresObject)([E.default], () => {
    let e = E.default.getRunningGames().map(e => e.id);
    return null != X && (0, h.isEligibleForQuestPlaytime)({
      location: B.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }) && (0, L.hasPlaytimeTaskVariant)({
      quest: X
    }) && e.includes(ee)
  }, [X, ee]), en = !0 === k || J || et, es = (0, r.useStateFromStores)([g.default], () => null != X && g.default.isEnrolling(X.id), [X]), ea = (0, r.useStateFromStores)([c.default], () => ((null == Z ? void 0 : Z.id) == null ? null : c.default.getParticipant(H, Z.id)) != null, [H, Z]), ei = (0, R.useQuestFormattedDate)(null == X ? void 0 : X.config.expiresAt), el = (0, R.useQuestFormattedDate)(null == $ ? void 0 : $.rewardsExpireAt), er = a.useCallback(() => {
    null != X && (0, N.enrollInQuest)(X.id, {
      questContent: v.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: C.QuestContentCTA.ACCEPT_QUEST
    })
  }, [X]), eu = a.useCallback(() => {
    null != X && ((0, C.trackQuestContentClicked)({
      questId: X.id,
      questContent: v.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: C.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(b.UserSettingsSections.INVENTORY))
  }, [X]), eo = a.useCallback(() => {
    null != X && ((0, C.trackQuestContentClicked)({
      questId: X.id,
      questContent: v.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: C.QuestContentCTA.LEARN_MORE
    }), d.default.open(b.UserSettingsSections.INVENTORY))
  }, [X]), ed = (0, P.useHandleClaimQuestsReward)({
    quest: X,
    location: v.QuestContent.QUEST_LIVE_STREAM
  }), ec = a.useMemo(() => (0, p.getQuestLogger)({
    quest: X,
    location: B.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
  }), [X]), eE = (0, R.useIsQuestExpired)(X);
  if (null == X) return null;
  let ef = (null === (t = X.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    e_ = (null === (n = X.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    eT = null != X.userStatus && (0, L.isDismissed)(X.userStatus, v.QuestContent.QUEST_LIVE_STREAM),
    eI = null != X.userStatus && (0, L.isDismissed)(X.userStatus, v.QuestContent.QUEST_BAR),
    eS = (0, L.isTargetedForContent)(X, v.QuestContent.QUEST_BAR) && !eI;
  ec.info({
    isQuestCallHeaderDismissed: eT,
    isQuestExpired: eE,
    isQuestBarShowing: eS,
    isCurrentUserCallParticipant: ea
  });
  let em = null != w && (null === (i = X.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null;
  if (!em && (eT || eE || eS) || !em && !ea) return null;
  let eC = (0, s.jsx)(U.default, {
    className: F.rewardTile,
    autoplay: Q,
    quest: X,
    questContent: v.QuestContent.QUEST_LIVE_STREAM
  });
  return (0, s.jsx)(O.QuestContentImpressionTracker, {
    questOrQuests: X,
    overrideVisibility: !Y,
    questContent: v.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, s.jsxs)("div", {
        className: l()(F.wrapper, {
          [F.wrapperAccepted]: ef
        }),
        onFocus: W,
        onMouseEnter: W,
        onBlur: q,
        onMouseLeave: q,
        children: [!ef && (0, s.jsxs)("div", {
          className: F.rewardTileWrapper,
          children: [eC, (0, s.jsx)(x.default, {
            bgOpacity: .32,
            className: F.promotedTag
          })]
        }), (0, s.jsxs)("div", {
          className: F.content,
          children: [(0, s.jsxs)("div", {
            className: F.heading,
            children: [ef && en ? eC : (0, s.jsx)("img", {
              className: F.gameTile,
              alt: X.config.messages.gameTitle,
              src: (0, L.getGameTileAssetUrl)(X, K)
            }), (0, s.jsxs)("div", {
              className: F.__invalid_details,
              children: [(0, s.jsxs)("div", {
                className: F.headingWithSubmenu,
                children: [(0, s.jsx)(o.Heading, {
                  className: F.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: en ? (0, L.getContextualEntrypointHeading)(X) : G.default.Messages.QUESTS_TITLE.format({
                    questName: X.config.messages.questName
                  })
                }), (0, s.jsx)(D.QuestsEntryContextMenuPopout, {
                  questContent: v.QuestContent.QUEST_LIVE_STREAM,
                  quest: X,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = X.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, s.jsx)(o.Clickable, {
                    ...e,
                    className: F.submenuWrapper,
                    "aria-label": G.default.Messages.ACTIONS,
                    children: (0, s.jsx)(m.default, {
                      className: F.submenuIcon
                    })
                  })
                })]
              }), (0, s.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: e_ ? G.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: el
                }) : G.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: ei
                })
              })]
            })]
          }), ef && !e_ && !en && (0, s.jsx)(j.default, {
            autoplay: Q,
            quest: X,
            questContent: v.QuestContent.QUEST_LIVE_STREAM,
            questExperimentLocation: B.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
          }), (0, s.jsxs)("div", {
            className: F.ctas,
            children: [!ef && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(o.Button, {
                className: F.cta,
                color: o.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: o.Button.Sizes.SMALL,
                onClick: eo,
                children: G.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, s.jsx)(o.Button, {
                className: F.cta,
                color: o.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: er,
                size: o.Button.Sizes.SMALL,
                submitting: es,
                children: G.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), ef && !e_ && en && (0, s.jsx)(A.default, {
              color: o.tokens.colors.BG_BRAND,
              quest: X
            }), ef && !e_ && !en && (0, s.jsx)(o.Button, {
              className: F.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: eu,
              size: o.Button.Sizes.SMALL,
              children: G.default.Messages.QUESTS_CHECK_PROGRESS
            }), e_ && (0, s.jsx)(o.Button, {
              className: F.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: ed,
              size: o.Button.Sizes.SMALL,
              children: G.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}