"use strict";
n.r(t), n("47120");
var i = n("735250"),
  a = n("470079"),
  s = n("120356"),
  r = n.n(s),
  l = n("442837"),
  u = n("780384"),
  o = n("481060"),
  d = n("230711"),
  c = n("358221"),
  f = n("594190"),
  E = n("687516"),
  _ = n("210887"),
  T = n("937995"),
  I = n("158776"),
  S = n("594174"),
  C = n("808268"),
  m = n("617136"),
  N = n("272008"),
  R = n("113434"),
  v = n("569984"),
  g = n("497505"),
  p = n("918701"),
  h = n("242755"),
  L = n("5881"),
  A = n("566078"),
  O = n("602667"),
  M = n("340100"),
  x = n("611855"),
  U = n("644646"),
  D = n("670638"),
  P = n("667105"),
  y = n("860151"),
  j = n("46140"),
  B = n("981631"),
  b = n("354459"),
  F = n("689938"),
  G = n("599660");
t.default = function(e) {
  var t, n, s;
  let {
    channelId: H,
    previewQuest: w,
    isParticipatingOverride: k
  } = e, [Q, V] = a.useState(!1), W = a.useCallback(() => V(!0), []), Y = a.useCallback(() => V(!1), []), q = a.useContext(T.IdleStateContext), Z = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), z = (0, l.useStateFromStores)([_.default], () => _.default.getState().theme), K = (0, u.isThemeDark)(z) ? B.ThemeTypes.DARK : B.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: J,
    quest: X
  } = (0, l.useStateFromStoresObject)([I.default, c.default, v.default], () => {
    let e = c.default.getParticipants(H),
      t = null != w ? w : function(e, t, n) {
        for (let s of e) {
          var i, a;
          if (s.type === b.ParticipantTypes.STREAM) {
            let e = (0, E.getStreamerApplication)(s.stream, n),
              a = (null == e ? void 0 : e.id) != null ? (0, p.getQuestByApplicationId)(t, e.id) : null;
            if (null != a && (null === (i = a.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) return a
          }
          if ((0, h.isEligibleForQuestPlaytime)({
              location: j.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let i of e) {
              if (!(0, b.isActivityParticipant)(i))
                for (let e of n.getActivities(i.user.id)) {
                  if (null == e.application_id) continue;
                  let n = (0, p.getPlayOnDesktopQuestByApplicationId)(t, e.application_id);
                  if (null != n && (null === (a = n.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return n
                }
            }
        }
        return null
      }(e, v.default.quests, I.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != Z && function(e, t, n, i) {
        for (let s of e) {
          var a;
          if (s.type === b.ParticipantTypes.STREAM && s.user.id === n.id && A.SharedQuestFields.build(t.config).application.id === (null === (a = (0, E.getStreamerApplication)(s.stream, i)) || void 0 === a ? void 0 : a.id)) return !0
        }
        return !1
      }(e, t, Z, I.default),
      quest: t
    }
  }, [H, Z, w]), $ = null != X ? A.SharedQuestFields.build(X.config) : null, ee = null == $ ? void 0 : $.application.id, et = (0, l.useStateFromStoresObject)([f.default], () => {
    let e = f.default.getRunningGames().map(e => e.id);
    return (0, p.shouldUsePlayOnDesktopTask)({
      quest: X,
      location: j.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }) && e.includes(ee)
  }, [X, ee]), en = !0 === k || J || et, ei = (0, l.useStateFromStores)([v.default], () => null != X && v.default.isEnrolling(X.id), [X]), ea = (0, l.useStateFromStores)([c.default], () => ((null == Z ? void 0 : Z.id) == null ? null : c.default.getParticipant(H, Z.id)) != null, [H, Z]), es = (0, R.useQuestFormattedDate)(null == X ? void 0 : X.config.expiresAt), er = (0, R.useQuestFormattedDate)(null == $ ? void 0 : $.rewardsExpireAt), el = a.useCallback(() => {
    null != X && (0, N.enrollInQuest)(X.id, {
      questContent: g.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: m.QuestContentCTA.ACCEPT_QUEST
    })
  }, [X]), eu = a.useCallback(() => {
    null != X && ((0, m.trackQuestContentClicked)({
      questId: X.id,
      questContent: g.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: m.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(B.UserSettingsSections.INVENTORY))
  }, [X]), eo = a.useCallback(() => {
    null != X && ((0, m.trackQuestContentClicked)({
      questId: X.id,
      questContent: g.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: m.QuestContentCTA.LEARN_MORE
    }), d.default.open(B.UserSettingsSections.INVENTORY))
  }, [X]), ed = (0, P.useHandleClaimQuestsReward)({
    quest: X,
    location: g.QuestContent.QUEST_LIVE_STREAM
  }), ec = a.useMemo(() => (0, L.getQuestLogger)({
    quest: X,
    location: j.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
  }), [X]), ef = (0, R.useIsQuestExpired)(X);
  if (null == X || !(0, p.shouldShowSocialEntrypoints)(X)) return null;
  let eE = (null === (t = X.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    e_ = (null === (n = X.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    eT = null != X.userStatus && (0, p.isDismissed)(X.userStatus, g.QuestContent.QUEST_LIVE_STREAM),
    eI = null != X.userStatus && (0, p.isDismissed)(X.userStatus, g.QuestContent.QUEST_BAR),
    eS = (0, p.isTargetedForContent)(X, g.QuestContent.QUEST_BAR) && !eI;
  ec.info({
    isQuestCallHeaderDismissed: eT,
    isQuestExpired: ef,
    isQuestBarShowing: eS,
    isCurrentUserCallParticipant: ea
  });
  let eC = null != w && (null === (s = X.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null;
  if (!eC && (eT || ef || eS) || !eC && !ea) return null;
  let em = (0, p.getQuestTaskDetails)({
      quest: X,
      location: j.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }),
    eN = (0, i.jsx)(U.default, {
      className: G.rewardTile,
      autoplay: Q,
      quest: X,
      questContent: g.QuestContent.QUEST_LIVE_STREAM
    });
  return (0, i.jsx)(O.QuestContentImpressionTrackerWeb, {
    questOrQuests: X,
    overrideVisibility: !q,
    questContent: g.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, i.jsxs)("div", {
        className: r()(G.wrapper, {
          [G.wrapperAccepted]: eE
        }),
        onFocus: W,
        onMouseEnter: W,
        onBlur: Y,
        onMouseLeave: Y,
        children: [!eE && (0, i.jsxs)("div", {
          className: G.rewardTileWrapper,
          children: [eN, (0, i.jsx)(x.default, {
            bgOpacity: .32,
            className: G.promotedTag
          })]
        }), (0, i.jsxs)("div", {
          className: G.content,
          children: [(0, i.jsxs)("div", {
            className: G.heading,
            children: [eE && en ? eN : (0, i.jsx)("img", {
              className: G.gameTile,
              alt: X.config.messages.gameTitle,
              src: (0, p.getGameTileAssetUrl)(X, K)
            }), (0, i.jsxs)("div", {
              className: G.__invalid_details,
              children: [(0, i.jsxs)("div", {
                className: G.headingWithSubmenu,
                children: [(0, i.jsx)(o.Heading, {
                  className: G.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: en ? (0, p.getContextualEntrypointHeading)({
                    quest: X,
                    taskDetails: em
                  }) : F.default.Messages.QUESTS_TITLE.format({
                    questName: X.config.messages.questName
                  })
                }), (0, i.jsx)(D.QuestsEntryContextMenuPopout, {
                  questContent: g.QuestContent.QUEST_LIVE_STREAM,
                  quest: X,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = X.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, i.jsx)(o.Clickable, {
                    ...e,
                    className: G.submenuWrapper,
                    "aria-label": F.default.Messages.ACTIONS,
                    children: (0, i.jsx)(C.default, {
                      className: G.submenuIcon
                    })
                  })
                })]
              }), (0, i.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: e_ ? F.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: er
                }) : F.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: es
                })
              })]
            })]
          }), eE && !e_ && !en && (0, i.jsx)(y.default, {
            autoplay: Q,
            quest: X,
            questContent: g.QuestContent.QUEST_LIVE_STREAM,
            questExperimentLocation: j.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
          }), (0, i.jsxs)("div", {
            className: G.ctas,
            children: [!eE && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(o.Button, {
                className: G.cta,
                color: o.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: o.Button.Sizes.SMALL,
                onClick: eo,
                children: F.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, i.jsx)(o.Button, {
                className: G.cta,
                color: o.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: el,
                size: o.Button.Sizes.SMALL,
                submitting: ei,
                children: F.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), eE && !e_ && en && (0, i.jsx)(M.default, {
              color: o.tokens.colors.BG_BRAND,
              quest: X
            }), eE && !e_ && !en && (0, i.jsx)(o.Button, {
              className: G.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: eu,
              size: o.Button.Sizes.SMALL,
              children: F.default.Messages.QUESTS_CHECK_PROGRESS
            }), e_ && (0, i.jsx)(o.Button, {
              className: G.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: ed,
              size: o.Button.Sizes.SMALL,
              children: F.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}