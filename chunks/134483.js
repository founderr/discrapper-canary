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
  f = n("687516"),
  h = n("210887"),
  m = n("937995"),
  p = n("158776"),
  E = n("594174"),
  C = n("808268"),
  g = n("617136"),
  S = n("272008"),
  _ = n("113434"),
  T = n("569984"),
  I = n("497505"),
  A = n("918701"),
  v = n("874137"),
  N = n("340100"),
  x = n("611855"),
  M = n("644646"),
  R = n("670638"),
  L = n("667105"),
  y = n("860151"),
  O = n("981631"),
  j = n("354459"),
  P = n("689938"),
  D = n("682164");
t.default = function(e) {
  var t, n;
  let {
    channelId: s
  } = e, [b, U] = l.useState(!1), F = l.useCallback(() => U(!0), []), w = l.useCallback(() => U(!1), []), k = l.useContext(m.IdleStateContext), H = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), B = (0, r.useStateFromStores)([h.default], () => h.default.getState().theme), G = (0, o.isThemeDark)(B) ? O.ThemeTypes.DARK : O.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: V,
    quest: W
  } = (0, r.useStateFromStoresObject)([p.default, c.default, T.default], () => {
    let e = c.default.getParticipants(s),
      t = function(e, t, n) {
        for (let l of e)
          if (l.type === j.ParticipantTypes.STREAM) {
            var a;
            let e = (0, f.getStreamerApplication)(l.stream, n),
              s = (null == e ? void 0 : e.id) != null ? (0, A.getQuestByApplicationId)(t, e.id) : null;
            if (null != s && (null === (a = s.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return s
          } return null
      }(e, T.default.quests, p.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != H && function(e, t, n, a) {
        for (let s of e) {
          var l;
          if (s.type === j.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, f.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, t, H, p.default),
      quest: t
    }
  }, [s, H]), Y = (0, r.useStateFromStores)([T.default], () => null != W && T.default.isEnrolling(W.id), [W]), z = (0, r.useStateFromStores)([c.default], () => ((null == H ? void 0 : H.id) == null ? null : c.default.getParticipant(s, H.id)) != null, [s, H]), K = (0, _.useQuestFormattedDate)(null == W ? void 0 : W.config.expiresAt), Z = (0, _.useQuestFormattedDate)(null == W ? void 0 : W.config.rewardCodeExpiresAt), q = l.useCallback(() => {
    null != W && (0, S.enrollInQuest)(W.id, {
      questContent: I.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: g.QuestContentCTA.ACCEPT_QUEST
    })
  }, [W]), X = l.useCallback(() => {
    null != W && ((0, g.trackQuestContentClicked)({
      questId: W.id,
      questContent: I.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: g.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(O.UserSettingsSections.INVENTORY))
  }, [W]), Q = l.useCallback(() => {
    null != W && ((0, g.trackQuestContentClicked)({
      questId: W.id,
      questContent: I.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: g.QuestContentCTA.LEARN_MORE
    }), d.default.open(O.UserSettingsSections.INVENTORY))
  }, [W]), J = (0, L.useHandleClaimQuestsReward)({
    quest: W,
    location: I.QuestContent.QUEST_LIVE_STREAM
  }), $ = (0, _.useIsQuestExpired)(W);
  if (null == W) return null;
  let ee = (null === (t = W.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    et = (null === (n = W.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    en = null != W.userStatus && (0, A.isDismissed)(W.userStatus, I.QuestContent.QUEST_LIVE_STREAM),
    ea = null != W.userStatus && (0, A.isDismissed)(W.userStatus, I.QuestContent.QUEST_BAR),
    el = (0, A.isTargetedForContent)(W, I.QuestContent.QUEST_BAR) && !ea;
  if (en || $ || el || !z) return null;
  let es = (0, a.jsx)(M.default, {
    className: D.rewardTile,
    autoplay: b,
    quest: W,
    questContent: I.QuestContent.QUEST_LIVE_STREAM
  });
  return (0, a.jsx)(v.QuestContentImpressionTracker, {
    questOrQuests: W,
    overrideVisibility: !k,
    questContent: I.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, a.jsxs)("div", {
        className: i()(D.wrapper, {
          [D.wrapperAccepted]: ee
        }),
        onFocus: F,
        onMouseEnter: F,
        onBlur: w,
        onMouseLeave: w,
        children: [!ee && (0, a.jsxs)("div", {
          className: D.rewardTileWrapper,
          children: [es, (0, a.jsx)(x.default, {
            bgOpacity: .32,
            className: D.promotedTag
          })]
        }), (0, a.jsxs)("div", {
          className: D.content,
          children: [(0, a.jsxs)("div", {
            className: D.heading,
            children: [ee && V ? es : (0, a.jsx)("img", {
              className: D.gameTile,
              alt: W.config.messages.gameTitle,
              src: (0, A.getGameTileAssetUrl)(W, G)
            }), (0, a.jsxs)("div", {
              className: D.__invalid_details,
              children: [(0, a.jsxs)("div", {
                className: D.headingWithSubmenu,
                children: [(0, a.jsx)(u.Heading, {
                  className: D.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: V ? (0, A.getContextualEntrypointHeading)(W) : P.default.Messages.QUESTS_TITLE.format({
                    questName: W.config.messages.questName
                  })
                }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
                  questContent: I.QuestContent.QUEST_LIVE_STREAM,
                  quest: W,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = W.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, a.jsx)(u.Clickable, {
                    ...e,
                    className: D.submenuWrapper,
                    "aria-label": P.default.Messages.ACTIONS,
                    children: (0, a.jsx)(C.default, {
                      className: D.submenuIcon
                    })
                  })
                })]
              }), (0, a.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: et ? P.default.Messages.QUESTS_CLAIM_BY.format({
                  expirationDate: Z
                }) : P.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                  expirationDate: K
                })
              })]
            })]
          }), ee && !et && !V && (0, a.jsx)(y.default, {
            autoplay: b,
            quest: W,
            questContent: I.QuestContent.QUEST_LIVE_STREAM
          }), (0, a.jsxs)("div", {
            className: D.ctas,
            children: [!ee && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(u.Button, {
                className: D.cta,
                color: u.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: u.Button.Sizes.SMALL,
                onClick: Q,
                children: P.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, a.jsx)(u.Button, {
                className: D.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: q,
                size: u.Button.Sizes.SMALL,
                submitting: Y,
                children: P.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), ee && !et && V && (0, a.jsx)(N.default, {
              color: u.tokens.colors.BG_BRAND,
              quest: W
            }), ee && !et && !V && (0, a.jsx)(u.Button, {
              className: D.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: X,
              size: u.Button.Sizes.SMALL,
              children: P.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
            }), et && (0, a.jsx)(u.Button, {
              className: D.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: J,
              size: u.Button.Sizes.SMALL,
              children: P.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}