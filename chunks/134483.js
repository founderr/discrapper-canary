"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("230711"),
  d = n("358221"),
  c = n("687516"),
  f = n("937995"),
  h = n("158776"),
  m = n("594174"),
  p = n("808268"),
  E = n("617136"),
  C = n("272008"),
  g = n("113434"),
  S = n("569984"),
  _ = n("497505"),
  T = n("918701"),
  I = n("874137"),
  A = n("340100"),
  v = n("611855"),
  N = n("644646"),
  x = n("670638"),
  M = n("667105"),
  R = n("860151"),
  L = n("981631"),
  y = n("354459"),
  O = n("689938"),
  j = n("682164");
t.default = function(e) {
  var t, n;
  let {
    channelId: s
  } = e, [P, D] = l.useState(!1), b = l.useCallback(() => D(!0), []), U = l.useCallback(() => D(!1), []), F = l.useContext(f.IdleStateContext), w = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    isCurrentUserStreamingQuestApplication: k,
    quest: H
  } = (0, r.useStateFromStoresObject)([h.default, d.default, S.default], () => {
    let e = d.default.getParticipants(s),
      t = function(e, t, n) {
        for (let l of e)
          if (l.type === y.ParticipantTypes.STREAM) {
            var a;
            let e = (0, c.getStreamerApplication)(l.stream, n),
              s = (null == e ? void 0 : e.id) != null ? (0, T.getQuestByApplicationId)(t, e.id) : null;
            if (null != s && (null === (a = s.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return s
          } return null
      }(e, S.default.quests, h.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != w && function(e, t, n, a) {
        for (let s of e) {
          var l;
          if (s.type === y.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, c.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, t, w, h.default),
      quest: t
    }
  }, [s, w]), B = (0, r.useStateFromStores)([S.default], () => null != H && S.default.isEnrolling(H.id), [H]), G = (0, r.useStateFromStores)([d.default], () => ((null == w ? void 0 : w.id) == null ? null : d.default.getParticipant(s, w.id)) != null, [s, w]), V = (0, g.useQuestFormattedDate)(null == H ? void 0 : H.config.expiresAt), W = (0, g.useQuestFormattedDate)(null == H ? void 0 : H.config.rewardCodeExpiresAt), Y = l.useCallback(() => {
    null != H && (0, C.enrollInQuest)(H.id, {
      questContent: _.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [H]), z = l.useCallback(() => {
    null != H && ((0, E.trackQuestContentClicked)({
      questId: H.id,
      questContent: _.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: E.QuestContentCTA.TRACK_PROGRESS
    }), u.default.open(L.UserSettingsSections.INVENTORY))
  }, [H]), K = l.useCallback(() => {
    null != H && ((0, E.trackQuestContentClicked)({
      questId: H.id,
      questContent: _.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: E.QuestContentCTA.LEARN_MORE
    }), u.default.open(L.UserSettingsSections.INVENTORY))
  }, [H]), Z = (0, M.useHandleClaimQuestsReward)({
    quest: H,
    location: _.QuestContent.QUEST_LIVE_STREAM
  }), q = (0, g.useIsQuestExpired)(H);
  if (null == H) return null;
  let X = (null === (t = H.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    Q = (null === (n = H.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    J = null != H.userStatus && (0, T.isDismissed)(H.userStatus, _.QuestContent.QUEST_LIVE_STREAM),
    $ = null != H.userStatus && (0, T.isDismissed)(H.userStatus, _.QuestContent.QUEST_BAR),
    ee = (0, T.isTargetedForContent)(H, _.QuestContent.QUEST_BAR) && !$;
  if (J || q || ee || !G) return null;
  let et = (0, a.jsx)(N.default, {
    className: j.rewardTile,
    autoplay: P,
    quest: H,
    questContent: _.QuestContent.QUEST_LIVE_STREAM
  });
  return (0, a.jsx)(I.QuestContentImpressionTracker, {
    questId: H.id,
    overrideVisibility: !F,
    questContent: _.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, a.jsxs)("div", {
        className: i()(j.wrapper, {
          [j.wrapperAccepted]: X
        }),
        onFocus: b,
        onMouseEnter: b,
        onBlur: U,
        onMouseLeave: U,
        children: [!X && (0, a.jsxs)("div", {
          className: j.rewardTileWrapper,
          children: [et, (0, a.jsx)(v.default, {
            bgOpacity: .32,
            className: j.promotedTag
          })]
        }), (0, a.jsxs)("div", {
          className: j.content,
          children: [(0, a.jsxs)("div", {
            className: j.heading,
            children: [X && k ? et : (0, a.jsx)("img", {
              className: j.gameTile,
              alt: H.config.messages.gameTitle,
              src: (0, T.getGameTileAssetUrl)(H)
            }), (0, a.jsxs)("div", {
              className: j.__invalid_details,
              children: [(0, a.jsxs)("div", {
                className: j.headingWithSubmenu,
                children: [(0, a.jsx)(o.Heading, {
                  className: j.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: k ? (0, T.getContextualEntrypointHeading)(H) : O.default.Messages.QUESTS_TITLE.format({
                    questName: H.config.messages.questName
                  })
                }), (0, a.jsx)(x.QuestsEntryContextMenuPopout, {
                  questContent: _.QuestContent.QUEST_LIVE_STREAM,
                  quest: H,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = H.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, a.jsx)(o.Clickable, {
                    ...e,
                    className: j.submenuWrapper,
                    "aria-label": O.default.Messages.ACTIONS,
                    children: (0, a.jsx)(p.default, {
                      className: j.submenuIcon
                    })
                  })
                })]
              }), (0, a.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: Q ? O.default.Messages.QUESTS_CLAIM_BY.format({
                  expirationDate: W
                }) : O.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                  expirationDate: V
                })
              })]
            })]
          }), X && !Q && !k && (0, a.jsx)(R.default, {
            autoplay: P,
            quest: H,
            questContent: _.QuestContent.QUEST_LIVE_STREAM
          }), (0, a.jsxs)("div", {
            className: j.ctas,
            children: [!X && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(o.Button, {
                className: j.cta,
                color: o.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: o.Button.Sizes.SMALL,
                onClick: K,
                children: O.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, a.jsx)(o.Button, {
                className: j.cta,
                color: o.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: Y,
                size: o.Button.Sizes.SMALL,
                submitting: B,
                children: O.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), X && !Q && k && (0, a.jsx)(A.default, {
              color: o.tokens.colors.BG_BRAND,
              quest: H
            }), X && !Q && !k && (0, a.jsx)(o.Button, {
              className: j.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: z,
              size: o.Button.Sizes.SMALL,
              children: O.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
            }), Q && (0, a.jsx)(o.Button, {
              className: j.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: Z,
              size: o.Button.Sizes.SMALL,
              children: O.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}