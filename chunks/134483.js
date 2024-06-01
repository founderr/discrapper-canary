"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("780384"),
  u = n("481060"),
  d = n("230711"),
  c = n("358221"),
  f = n("594190"),
  h = n("687516"),
  m = n("210887"),
  p = n("937995"),
  E = n("158776"),
  C = n("594174"),
  g = n("808268"),
  S = n("617136"),
  _ = n("272008"),
  T = n("113434"),
  I = n("569984"),
  A = n("497505"),
  v = n("918701"),
  N = n("242755"),
  x = n("5881"),
  M = n("566078"),
  R = n("874137"),
  y = n("340100"),
  L = n("611855"),
  O = n("644646"),
  j = n("670638"),
  P = n("667105"),
  D = n("860151"),
  b = n("46140"),
  U = n("981631"),
  F = n("354459"),
  w = n("689938"),
  k = n("599660");
t.default = function(e) {
  var t, n, s;
  let {
    channelId: H,
    previewQuest: B,
    isParticipatingOverride: G
  } = e, [V, W] = l.useState(!1), Y = l.useCallback(() => W(!0), []), z = l.useCallback(() => W(!1), []), K = l.useContext(p.IdleStateContext), Z = (0, r.useStateFromStores)([C.default], () => C.default.getCurrentUser()), q = (0, r.useStateFromStores)([m.default], () => m.default.getState().theme), X = (0, o.isThemeDark)(q) ? U.ThemeTypes.DARK : U.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: Q,
    quest: J
  } = (0, r.useStateFromStoresObject)([E.default, c.default, I.default], () => {
    let e = c.default.getParticipants(H),
      t = null != B ? B : function(e, t, n) {
        for (let s of e) {
          var a, l;
          if (s.type === F.ParticipantTypes.STREAM) {
            let e = (0, h.getStreamerApplication)(s.stream, n),
              l = (null == e ? void 0 : e.id) != null ? (0, v.getQuestByApplicationId)(t, e.id) : null;
            if (null != l && (null === (a = l.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return l
          }
          if ((0, N.isEligibleForQuestPlaytime)({
              location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let a of e) {
              if (!(0, F.isActivityParticipant)(a))
                for (let e of n.getActivities(a.user.id)) {
                  if (null == e.application_id) continue;
                  let n = (0, v.getPlayOnDesktopQuestByApplicationId)(t, e.application_id);
                  if (null != n && (null === (l = n.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return n
                }
            }
        }
        return null
      }(e, I.default.quests, E.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != Z && function(e, t, n, a) {
        for (let s of e) {
          var l;
          if (s.type === F.ParticipantTypes.STREAM && s.user.id === n.id && M.SharedQuestFields.build(t.config).application.id === (null === (l = (0, h.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, t, Z, E.default),
      quest: t
    }
  }, [H, Z, B]), $ = null != J ? M.SharedQuestFields.build(J.config) : null, ee = null == $ ? void 0 : $.application.id, et = (0, r.useStateFromStoresObject)([f.default], () => {
    let e = f.default.getRunningGames().map(e => e.id);
    return (0, v.shouldUsePlayOnDesktopTask)({
      quest: J,
      location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }) && e.includes(ee)
  }, [J, ee]), en = !0 === G || Q || et, ea = (0, r.useStateFromStores)([I.default], () => null != J && I.default.isEnrolling(J.id), [J]), el = (0, r.useStateFromStores)([c.default], () => ((null == Z ? void 0 : Z.id) == null ? null : c.default.getParticipant(H, Z.id)) != null, [H, Z]), es = (0, T.useQuestFormattedDate)(null == J ? void 0 : J.config.expiresAt), ei = (0, T.useQuestFormattedDate)(null == $ ? void 0 : $.rewardsExpireAt), er = l.useCallback(() => {
    null != J && (0, _.enrollInQuest)(J.id, {
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.ACCEPT_QUEST
    })
  }, [J]), eo = l.useCallback(() => {
    null != J && ((0, S.trackQuestContentClicked)({
      questId: J.id,
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(U.UserSettingsSections.INVENTORY))
  }, [J]), eu = l.useCallback(() => {
    null != J && ((0, S.trackQuestContentClicked)({
      questId: J.id,
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.LEARN_MORE
    }), d.default.open(U.UserSettingsSections.INVENTORY))
  }, [J]), ed = (0, P.useHandleClaimQuestsReward)({
    quest: J,
    location: A.QuestContent.QUEST_LIVE_STREAM
  }), ec = l.useMemo(() => (0, x.getQuestLogger)({
    quest: J,
    location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
  }), [J]), ef = (0, T.useIsQuestExpired)(J);
  if (null == J || !(0, v.shouldShowSocialEntrypoints)(J)) return null;
  let eh = (null === (t = J.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    em = (null === (n = J.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    ep = null != J.userStatus && (0, v.isDismissed)(J.userStatus, A.QuestContent.QUEST_LIVE_STREAM),
    eE = null != J.userStatus && (0, v.isDismissed)(J.userStatus, A.QuestContent.QUEST_BAR),
    eC = (0, v.isTargetedForContent)(J, A.QuestContent.QUEST_BAR) && !eE;
  ec.info({
    isQuestCallHeaderDismissed: ep,
    isQuestExpired: ef,
    isQuestBarShowing: eC,
    isCurrentUserCallParticipant: el
  });
  let eg = null != B && (null === (s = J.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null;
  if (!eg && (ep || ef || eC) || !eg && !el) return null;
  let eS = (0, a.jsx)(O.default, {
    className: k.rewardTile,
    autoplay: V,
    quest: J,
    questContent: A.QuestContent.QUEST_LIVE_STREAM
  });
  return (0, a.jsx)(R.QuestContentImpressionTracker, {
    questOrQuests: J,
    overrideVisibility: !K,
    questContent: A.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, a.jsxs)("div", {
        className: i()(k.wrapper, {
          [k.wrapperAccepted]: eh
        }),
        onFocus: Y,
        onMouseEnter: Y,
        onBlur: z,
        onMouseLeave: z,
        children: [!eh && (0, a.jsxs)("div", {
          className: k.rewardTileWrapper,
          children: [eS, (0, a.jsx)(L.default, {
            bgOpacity: .32,
            className: k.promotedTag
          })]
        }), (0, a.jsxs)("div", {
          className: k.content,
          children: [(0, a.jsxs)("div", {
            className: k.heading,
            children: [eh && en ? eS : (0, a.jsx)("img", {
              className: k.gameTile,
              alt: J.config.messages.gameTitle,
              src: (0, v.getGameTileAssetUrl)(J, X)
            }), (0, a.jsxs)("div", {
              className: k.__invalid_details,
              children: [(0, a.jsxs)("div", {
                className: k.headingWithSubmenu,
                children: [(0, a.jsx)(u.Heading, {
                  className: k.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: en ? (0, v.getContextualEntrypointHeading)({
                    quest: J,
                    location: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
                  }) : w.default.Messages.QUESTS_TITLE.format({
                    questName: J.config.messages.questName
                  })
                }), (0, a.jsx)(j.QuestsEntryContextMenuPopout, {
                  questContent: A.QuestContent.QUEST_LIVE_STREAM,
                  quest: J,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = J.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, a.jsx)(u.Clickable, {
                    ...e,
                    className: k.submenuWrapper,
                    "aria-label": w.default.Messages.ACTIONS,
                    children: (0, a.jsx)(g.default, {
                      className: k.submenuIcon
                    })
                  })
                })]
              }), (0, a.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: em ? w.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: ei
                }) : w.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: es
                })
              })]
            })]
          }), eh && !em && !en && (0, a.jsx)(D.default, {
            autoplay: V,
            quest: J,
            questContent: A.QuestContent.QUEST_LIVE_STREAM,
            questExperimentLocation: b.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
          }), (0, a.jsxs)("div", {
            className: k.ctas,
            children: [!eh && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(u.Button, {
                className: k.cta,
                color: u.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: u.Button.Sizes.SMALL,
                onClick: eu,
                children: w.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, a.jsx)(u.Button, {
                className: k.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: er,
                size: u.Button.Sizes.SMALL,
                submitting: ea,
                children: w.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), eh && !em && en && (0, a.jsx)(y.default, {
              color: u.tokens.colors.BG_BRAND,
              quest: J
            }), eh && !em && !en && (0, a.jsx)(u.Button, {
              className: k.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: eo,
              size: u.Button.Sizes.SMALL,
              children: w.default.Messages.QUESTS_CHECK_PROGRESS
            }), em && (0, a.jsx)(u.Button, {
              className: k.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: ed,
              size: u.Button.Sizes.SMALL,
              children: w.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}