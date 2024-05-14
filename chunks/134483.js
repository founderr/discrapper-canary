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
  N = n("918701"),
  v = n("242755"),
  x = n("5881"),
  M = n("874137"),
  R = n("340100"),
  L = n("611855"),
  y = n("644646"),
  O = n("670638"),
  j = n("667105"),
  P = n("860151"),
  D = n("46140"),
  b = n("981631"),
  U = n("354459"),
  F = n("689938"),
  w = n("599660");
t.default = function(e) {
  var t, n;
  let {
    channelId: s
  } = e, [k, H] = l.useState(!1), B = l.useCallback(() => H(!0), []), G = l.useCallback(() => H(!1), []), V = l.useContext(p.IdleStateContext), W = (0, r.useStateFromStores)([C.default], () => C.default.getCurrentUser()), Y = (0, r.useStateFromStores)([m.default], () => m.default.getState().theme), z = (0, o.isThemeDark)(Y) ? b.ThemeTypes.DARK : b.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: K,
    quest: Z
  } = (0, r.useStateFromStoresObject)([E.default, c.default, I.default], () => {
    let e = c.default.getParticipants(s),
      t = function(e, t, n) {
        for (let s of e) {
          var a, l;
          if (s.type === U.ParticipantTypes.STREAM) {
            let e = (0, h.getStreamerApplication)(s.stream, n),
              l = (null == e ? void 0 : e.id) != null ? (0, N.getQuestByApplicationId)(t, e.id) : null;
            if (null != l && (null === (a = l.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return l
          }
          if ((0, v.isEligibleForQuestPlaytime)({
              location: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let a of e) {
              if (!(0, U.isActivityParticipant)(a))
                for (let e of n.getActivities(a.user.id)) {
                  if (null == e.application_id) continue;
                  let n = (0, N.getPlaytimeQuestByApplicationId)(t, e.application_id);
                  if (null != n && (null === (l = n.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return n
                }
            }
        }
        return null
      }(e, I.default.quests, E.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != W && function(e, t, n, a) {
        for (let s of e) {
          var l;
          if (s.type === U.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, h.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, t, W, E.default),
      quest: t
    }
  }, [s, W]), q = (0, r.useStateFromStoresObject)([f.default], () => {
    let e = f.default.getRunningGames().map(e => e.id);
    return null != Z && (0, v.isEligibleForQuestPlaytime)({
      location: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }) && (0, N.hasPlaytimeTaskVariant)({
      quest: Z
    }) && e.includes(Z.config.applicationId)
  }, [Z]), X = K || q, Q = (0, r.useStateFromStores)([I.default], () => null != Z && I.default.isEnrolling(Z.id), [Z]), J = (0, r.useStateFromStores)([c.default], () => ((null == W ? void 0 : W.id) == null ? null : c.default.getParticipant(s, W.id)) != null, [s, W]), $ = (0, T.useQuestFormattedDate)(null == Z ? void 0 : Z.config.expiresAt), ee = (0, T.useQuestFormattedDate)(null == Z ? void 0 : Z.config.rewardCodeExpiresAt), et = l.useCallback(() => {
    null != Z && (0, _.enrollInQuest)(Z.id, {
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.ACCEPT_QUEST
    })
  }, [Z]), en = l.useCallback(() => {
    null != Z && ((0, S.trackQuestContentClicked)({
      questId: Z.id,
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(b.UserSettingsSections.INVENTORY))
  }, [Z]), ea = l.useCallback(() => {
    null != Z && ((0, S.trackQuestContentClicked)({
      questId: Z.id,
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.LEARN_MORE
    }), d.default.open(b.UserSettingsSections.INVENTORY))
  }, [Z]), el = (0, j.useHandleClaimQuestsReward)({
    quest: Z,
    location: A.QuestContent.QUEST_LIVE_STREAM
  }), es = l.useMemo(() => (0, x.getQuestLogger)({
    quest: Z,
    location: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
  }), [Z]), ei = (0, T.useIsQuestExpired)(Z);
  if (null == Z) return null;
  let er = (null === (t = Z.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    eo = (null === (n = Z.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    eu = null != Z.userStatus && (0, N.isDismissed)(Z.userStatus, A.QuestContent.QUEST_LIVE_STREAM),
    ed = null != Z.userStatus && (0, N.isDismissed)(Z.userStatus, A.QuestContent.QUEST_BAR),
    ec = (0, N.isTargetedForContent)(Z, A.QuestContent.QUEST_BAR) && !ed;
  if (es.info({
      isQuestCallHeaderDismissed: eu,
      isQuestExpired: ei,
      isQuestBarShowing: ec,
      isCurrentUserCallParticipant: J
    }), eu || ei || ec || !J) return null;
  let ef = (0, a.jsx)(y.default, {
    className: w.rewardTile,
    autoplay: k,
    quest: Z,
    questContent: A.QuestContent.QUEST_LIVE_STREAM
  });
  return (0, a.jsx)(M.QuestContentImpressionTracker, {
    questOrQuests: Z,
    overrideVisibility: !V,
    questContent: A.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, a.jsxs)("div", {
        className: i()(w.wrapper, {
          [w.wrapperAccepted]: er
        }),
        onFocus: B,
        onMouseEnter: B,
        onBlur: G,
        onMouseLeave: G,
        children: [!er && (0, a.jsxs)("div", {
          className: w.rewardTileWrapper,
          children: [ef, (0, a.jsx)(L.default, {
            bgOpacity: .32,
            className: w.promotedTag
          })]
        }), (0, a.jsxs)("div", {
          className: w.content,
          children: [(0, a.jsxs)("div", {
            className: w.heading,
            children: [er && X ? ef : (0, a.jsx)("img", {
              className: w.gameTile,
              alt: Z.config.messages.gameTitle,
              src: (0, N.getGameTileAssetUrl)(Z, z)
            }), (0, a.jsxs)("div", {
              className: w.__invalid_details,
              children: [(0, a.jsxs)("div", {
                className: w.headingWithSubmenu,
                children: [(0, a.jsx)(u.Heading, {
                  className: w.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: X ? (0, N.getContextualEntrypointHeading)(Z) : F.default.Messages.QUESTS_TITLE.format({
                    questName: Z.config.messages.questName
                  })
                }), (0, a.jsx)(O.QuestsEntryContextMenuPopout, {
                  questContent: A.QuestContent.QUEST_LIVE_STREAM,
                  quest: Z,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = Z.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, a.jsx)(u.Clickable, {
                    ...e,
                    className: w.submenuWrapper,
                    "aria-label": F.default.Messages.ACTIONS,
                    children: (0, a.jsx)(g.default, {
                      className: w.submenuIcon
                    })
                  })
                })]
              }), (0, a.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: eo ? F.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: ee
                }) : F.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: $
                })
              })]
            })]
          }), er && !eo && !X && (0, a.jsx)(P.default, {
            autoplay: k,
            quest: Z,
            questContent: A.QuestContent.QUEST_LIVE_STREAM,
            questExperimentLocation: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
          }), (0, a.jsxs)("div", {
            className: w.ctas,
            children: [!er && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(u.Button, {
                className: w.cta,
                color: u.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: u.Button.Sizes.SMALL,
                onClick: ea,
                children: F.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, a.jsx)(u.Button, {
                className: w.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: et,
                size: u.Button.Sizes.SMALL,
                submitting: Q,
                children: F.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), er && !eo && X && (0, a.jsx)(R.default, {
              color: u.tokens.colors.BG_BRAND,
              quest: Z
            }), er && !eo && !X && (0, a.jsx)(u.Button, {
              className: w.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: en,
              size: u.Button.Sizes.SMALL,
              children: F.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
            }), eo && (0, a.jsx)(u.Button, {
              className: w.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: el,
              size: u.Button.Sizes.SMALL,
              children: F.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}