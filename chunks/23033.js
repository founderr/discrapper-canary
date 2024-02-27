"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("79112"),
  d = n("191145"),
  c = n("582415"),
  f = n("824563"),
  h = n("697218"),
  m = n("433487"),
  p = n("815496"),
  E = n("448881"),
  g = n("879364"),
  S = n("2973"),
  C = n("588025"),
  _ = n("227231"),
  I = n("315130"),
  T = n("45198"),
  v = n("275986"),
  x = n("385416"),
  N = n("255697"),
  A = n("49111"),
  M = n("99795"),
  R = n("782340"),
  j = n("140999"),
  L = function(e) {
    var t, n, s;
    let {
      channelId: L
    } = e, y = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
      isCurrentUserStreamingQuestApplication: O,
      quest: P
    } = (0, r.useStateFromStoresObject)([f.default, d.default, S.default], () => {
      let e = d.default.getParticipants(L),
        t = function(e, t, n) {
          for (let a of e)
            if (a.type === M.ParticipantTypes.STREAM) {
              var l;
              let e = (0, c.getStreamerApplication)(a.stream, n),
                s = (null == e ? void 0 : e.id) != null ? (0, _.getQuestByApplicationId)(t, e.id) : null;
              if (null != s && (null === (l = s.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return s
            } return null
        }(e, S.default.quests, f.default),
        n = null != t && null != y && function(e, t, n, l) {
          for (let s of e) {
            var a;
            if (s.type === M.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (a = (0, c.getStreamerApplication)(s.stream, l)) || void 0 === a ? void 0 : a.id)) return !0
          }
          return !1
        }(e, t, y, f.default);
      return {
        isCurrentUserStreamingQuestApplication: n,
        quest: t
      }
    }, [L, y]), b = (0, r.useStateFromStores)([S.default], () => null != P && S.default.isEnrolling(P.id), [P]), D = (0, r.useStateFromStores)([d.default], () => ((null == y ? void 0 : y.id) == null ? null : d.default.getParticipant(L, y.id)) != null, [L, y]), U = (0, g.useQuestFormattedDate)(null == P ? void 0 : P.config.expiresAt), w = (0, g.useQuestFormattedDate)(null == P ? void 0 : P.config.rewardCodeExpiresAt), F = a.useCallback(() => {
      null != P && (0, E.enrollInQuest)(P.id, {
        questContent: C.QuestContent.QUEST_LIVE_STREAM,
        questContentCTA: p.QuestContentCTA.ACCEPT_QUEST
      })
    }, [P]), k = a.useCallback(() => {
      null != P && ((0, p.trackQuestContentClicked)(P.id, C.QuestContent.QUEST_LIVE_STREAM, p.QuestContentCTA.TRACK_PROGRESS), o.default.open(A.UserSettingsSections.INVENTORY))
    }, [P]), B = a.useCallback(() => {
      null != P && ((0, p.trackQuestContentClicked)(P.id, C.QuestContent.QUEST_LIVE_STREAM, p.QuestContentCTA.LEARN_MORE), o.default.open(A.UserSettingsSections.INVENTORY))
    }, [P]), V = (0, x.useHandleClaimQuestsReward)({
      quest: P,
      location: C.QuestContent.QUEST_LIVE_STREAM
    }), G = (0, g.useIsQuestExpired)(P);
    if (null == P) return null;
    let H = (null === (t = P.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      W = (null === (n = P.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      Y = null != P.userStatus && (0, _.isDismissed)(P.userStatus, C.QuestContent.QUEST_LIVE_STREAM);
    return Y || G || !D ? null : (0, l.jsxs)("div", {
      className: i(j.wrapper, {
        [j.wrapperAccepted]: H
      }),
      children: [!H && (0, l.jsxs)("div", {
        className: j.rewardTileWrapper,
        children: [(0, l.jsx)("img", {
          alt: P.config.messages.rewardName,
          className: j.rewardTile,
          src: (0, _.getRewardAssetUrl)(P.id)
        }), (0, l.jsx)(T.default, {
          bgOpacity: .32,
          className: j.sponsoredTag
        })]
      }), (0, l.jsxs)("div", {
        className: j.content,
        children: [(0, l.jsxs)("div", {
          className: j.heading,
          children: [H && O ? (0, l.jsx)("img", {
            alt: P.config.messages.rewardName,
            className: j.rewardTile,
            src: (0, _.getRewardAssetUrl)(P.id)
          }) : (0, l.jsx)("img", {
            className: j.gameTile,
            alt: P.config.messages.gameTitle,
            src: (0, _.getGameTileAssetUrl)(P.id)
          }), (0, l.jsxs)("div", {
            className: j.details,
            children: [(0, l.jsxs)("div", {
              className: j.headingWithSubmenu,
              children: [(0, l.jsx)(u.Heading, {
                className: j.questTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: O ? (0, _.getContextualEntrypointHeading)(P) : R.default.Messages.QUESTS_TITLE.format({
                  questName: P.config.messages.questName
                })
              }), (0, l.jsx)(v.QuestsEntryContextMenuPopout, {
                questContent: C.QuestContent.QUEST_LIVE_STREAM,
                quest: P,
                preventIdle: !0,
                shouldShowDisclosure: (null === (s = P.userStatus) || void 0 === s ? void 0 : s.enrolledAt) == null,
                children: e => (0, l.jsx)(u.Clickable, {
                  ...e,
                  className: j.submenuWrapper,
                  children: (0, l.jsx)(m.default, {
                    className: j.submenuIcon
                  })
                })
              })]
            }), (0, l.jsx)(u.Text, {
              color: "header-secondary",
              variant: "text-xs/medium",
              children: W ? R.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: w
              }) : R.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: U
              })
            })]
          })]
        }), H && !W && !O && (0, l.jsx)(N.default, {
          quest: P
        }), (0, l.jsxs)("div", {
          className: j.ctas,
          children: [!H && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(u.Button, {
              className: j.cta,
              color: u.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: u.Button.Sizes.SMALL,
              onClick: B,
              children: R.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, l.jsx)(u.Button, {
              className: j.cta,
              color: u.Button.Colors.GREEN,
              fullWidth: !0,
              onClick: F,
              size: u.Button.Sizes.SMALL,
              submitting: b,
              children: R.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), H && !W && O && (0, l.jsx)(I.default, {
            color: u.tokens.colors.BG_BRAND,
            quest: P
          }), H && !W && !O && (0, l.jsx)(u.Button, {
            className: j.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: k,
            size: u.Button.Sizes.SMALL,
            children: R.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), W && (0, l.jsx)(u.Button, {
            className: j.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: V,
            size: u.Button.Sizes.SMALL,
            children: R.default.Messages.QUESTS_CLAIM_YOUR_REWARD
          })]
        })]
      })]
    })
  }