"use strict";
s.r(t), s("47120");
var n = s("735250"),
  i = s("470079"),
  l = s("120356"),
  a = s.n(l),
  r = s("442837"),
  u = s("780384"),
  o = s("481060"),
  d = s("230711"),
  c = s("358221"),
  f = s("594190"),
  _ = s("687516"),
  I = s("210887"),
  C = s("937995"),
  m = s("158776"),
  E = s("594174"),
  S = s("808268"),
  T = s("617136"),
  N = s("272008"),
  g = s("113434"),
  L = s("569984"),
  R = s("497505"),
  h = s("918701"),
  p = s("242755"),
  v = s("5881"),
  x = s("566078"),
  O = s("602667"),
  A = s("340100"),
  M = s("611855"),
  U = s("644646"),
  j = s("670638"),
  P = s("667105"),
  D = s("860151"),
  b = s("46140"),
  B = s("981631"),
  y = s("354459"),
  H = s("689938"),
  F = s("599660");
t.default = function(e) {
  var t, s, l;
  let {
    channelId: G,
    previewQuest: k,
    isParticipatingOverride: w
  } = e, [Q, V] = i.useState(!1), q = i.useCallback(() => V(!0), []), W = i.useCallback(() => V(!1), []), Z = i.useContext(C.IdleStateContext), z = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), Y = (0, r.useStateFromStores)([I.default], () => I.default.getState().theme), K = (0, u.isThemeDark)(Y) ? B.ThemeTypes.DARK : B.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: J,
    quest: X
  } = (0, r.useStateFromStoresObject)([m.default, c.default, L.default], () => {
    let e = c.default.getParticipants(G),
      t = null != k ? k : function(e, t, s) {
        for (let l of e) {
          var n, i;
          if (l.type === y.ParticipantTypes.STREAM) {
            let e = (0, _.getStreamerApplication)(l.stream, s),
              i = (null == e ? void 0 : e.id) != null ? (0, h.getQuestByApplicationId)(t, e.id) : null;
            if (null != i && (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null) return i
          }
          if ((0, p.isEligibleForQuestPlaytime)({
              location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let n of e) {
              if (!(0, y.isActivityParticipant)(n))
                for (let e of s.getActivities(n.user.id)) {
                  if (null == e.application_id) continue;
                  let s = (0, h.getPlayOnDesktopQuestByApplicationId)(t, e.application_id);
                  if (null != s && (null === (i = s.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) return s
                }
            }
        }
        return null
      }(e, L.default.quests, m.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != z && function(e, t, s, n) {
        for (let l of e) {
          var i;
          if (l.type === y.ParticipantTypes.STREAM && l.user.id === s.id && x.SharedQuestFields.build(t.config).application.id === (null === (i = (0, _.getStreamerApplication)(l.stream, n)) || void 0 === i ? void 0 : i.id)) return !0
        }
        return !1
      }(e, t, z, m.default),
      quest: t
    }
  }, [G, z, k]), $ = null != X ? x.SharedQuestFields.build(X.config) : null, ee = null == $ ? void 0 : $.application.id, et = (0, r.useStateFromStoresObject)([f.default], () => {
    let e = f.default.getRunningGames().map(e => e.id);
    return (0, h.shouldUsePlayOnDesktopTask)({
      quest: X,
      location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }) && e.includes(ee)
  }, [X, ee]), es = !0 === w || J || et, en = (0, r.useStateFromStores)([L.default], () => null != X && L.default.isEnrolling(X.id), [X]), ei = (0, r.useStateFromStores)([c.default], () => ((null == z ? void 0 : z.id) == null ? null : c.default.getParticipant(G, z.id)) != null, [G, z]), el = (0, g.useQuestFormattedDate)(null == X ? void 0 : X.config.expiresAt), ea = (0, g.useQuestFormattedDate)(null == $ ? void 0 : $.rewardsExpireAt), er = i.useCallback(() => {
    null != X && (0, N.enrollInQuest)(X.id, {
      questContent: R.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: T.QuestContentCTA.ACCEPT_QUEST
    })
  }, [X]), eu = i.useCallback(() => {
    null != X && ((0, T.trackQuestContentClicked)({
      questId: X.id,
      questContent: R.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: T.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(B.UserSettingsSections.INVENTORY))
  }, [X]), eo = i.useCallback(() => {
    null != X && ((0, T.trackQuestContentClicked)({
      questId: X.id,
      questContent: R.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: T.QuestContentCTA.LEARN_MORE
    }), d.default.open(B.UserSettingsSections.INVENTORY))
  }, [X]), ed = (0, P.useHandleClaimQuestsReward)({
    quest: X,
    location: R.QuestContent.QUEST_LIVE_STREAM
  }), ec = i.useMemo(() => (0, v.getQuestLogger)({
    quest: X,
    location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
  }), [X]), ef = (0, g.useIsQuestExpired)(X);
  if (null == X || !(0, h.shouldShowSocialEntrypoints)(X)) return null;
  let e_ = (null === (t = X.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    eI = (null === (s = X.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
    eC = null != X.userStatus && (0, h.isDismissed)(X.userStatus, R.QuestContent.QUEST_LIVE_STREAM),
    em = null != X.userStatus && (0, h.isDismissed)(X.userStatus, R.QuestContent.QUEST_BAR),
    eE = (0, h.isTargetedForContent)(X, R.QuestContent.QUEST_BAR) && !em;
  ec.info({
    isQuestCallHeaderDismissed: eC,
    isQuestExpired: ef,
    isQuestBarShowing: eE,
    isCurrentUserCallParticipant: ei
  });
  let eS = null != k && (null === (l = X.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null;
  if (!eS && (eC || ef || eE) || !eS && !ei) return null;
  let eT = (0, h.getQuestTaskDetails)({
      quest: X,
      location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }),
    eN = (0, n.jsx)(U.default, {
      className: F.rewardTile,
      autoplay: Q,
      quest: X,
      questContent: R.QuestContent.QUEST_LIVE_STREAM
    });
  return (0, n.jsx)(O.QuestContentImpressionTrackerWeb, {
    questOrQuests: X,
    overrideVisibility: !Z,
    questContent: R.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, n.jsxs)("div", {
        className: a()(F.wrapper, {
          [F.wrapperAccepted]: e_
        }),
        onFocus: q,
        onMouseEnter: q,
        onBlur: W,
        onMouseLeave: W,
        children: [!e_ && (0, n.jsxs)("div", {
          className: F.rewardTileWrapper,
          children: [eN, (0, n.jsx)(M.default, {
            bgOpacity: .32,
            className: F.promotedTag
          })]
        }), (0, n.jsxs)("div", {
          className: F.content,
          children: [(0, n.jsxs)("div", {
            className: F.heading,
            children: [e_ && es ? eN : (0, n.jsx)("img", {
              className: F.gameTile,
              alt: X.config.messages.gameTitle,
              src: (0, h.getGameTileAssetUrl)(X, K)
            }), (0, n.jsxs)("div", {
              className: F.__invalid_details,
              children: [(0, n.jsxs)("div", {
                className: F.headingWithSubmenu,
                children: [(0, n.jsx)(o.Heading, {
                  className: F.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: es ? (0, h.getContextualEntrypointHeading)({
                    quest: X,
                    taskDetails: eT
                  }) : H.default.Messages.QUESTS_TITLE.format({
                    questName: X.config.messages.questName
                  })
                }), (0, n.jsx)(j.QuestsEntryContextMenuPopout, {
                  questContent: R.QuestContent.QUEST_LIVE_STREAM,
                  quest: X,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = X.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, n.jsx)(o.Clickable, {
                    ...e,
                    className: F.submenuWrapper,
                    "aria-label": H.default.Messages.ACTIONS,
                    children: (0, n.jsx)(S.default, {
                      className: F.submenuIcon
                    })
                  })
                })]
              }), (0, n.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: eI ? H.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: ea
                }) : H.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: el
                })
              })]
            })]
          }), e_ && !eI && !es && (0, n.jsx)(D.default, {
            autoplay: Q,
            quest: X,
            questContent: R.QuestContent.QUEST_LIVE_STREAM,
            questExperimentLocation: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
          }), (0, n.jsxs)("div", {
            className: F.ctas,
            children: [!e_ && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(o.Button, {
                className: F.cta,
                color: o.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: o.Button.Sizes.SMALL,
                onClick: eo,
                children: H.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, n.jsx)(o.Button, {
                className: F.cta,
                color: o.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: er,
                size: o.Button.Sizes.SMALL,
                submitting: en,
                children: H.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), e_ && !eI && es && (0, n.jsx)(A.default, {
              color: o.tokens.colors.BG_BRAND,
              quest: X
            }), e_ && !eI && !es && (0, n.jsx)(o.Button, {
              className: F.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: eu,
              size: o.Button.Sizes.SMALL,
              children: H.default.Messages.QUESTS_CHECK_PROGRESS
            }), eI && (0, n.jsx)(o.Button, {
              className: F.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: ed,
              size: o.Button.Sizes.SMALL,
              children: H.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}