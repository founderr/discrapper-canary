"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
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
  f = n("915639"),
  h = n("824563"),
  m = n("697218"),
  p = n("433487"),
  E = n("815496"),
  S = n("448881"),
  g = n("879364"),
  C = n("2973"),
  _ = n("588025"),
  I = n("227231"),
  T = n("315130"),
  v = n("45198"),
  x = n("275986"),
  N = n("385416"),
  A = n("255697"),
  M = n("49111"),
  R = n("99795"),
  j = n("782340"),
  L = n("140999"),
  y = function(e) {
    var t, n, s;
    let {
      channelId: y
    } = e, O = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
      isCurrentUserStreamingQuestApplication: P,
      quest: b
    } = (0, r.useStateFromStoresObject)([h.default, d.default, C.default], () => {
      let e = d.default.getParticipants(y),
        t = function(e, t, n) {
          for (let a of e)
            if (a.type === R.ParticipantTypes.STREAM) {
              var l;
              let e = (0, c.getStreamerApplication)(a.stream, n),
                s = (null == e ? void 0 : e.id) != null ? (0, I.getQuestByApplicationId)(t, e.id) : null;
              if (null != s && (null === (l = s.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return s
            } return null
        }(e, C.default.quests, h.default),
        n = null != t && null != O && function(e, t, n, l) {
          for (let s of e) {
            var a;
            if (s.type === R.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (a = (0, c.getStreamerApplication)(s.stream, l)) || void 0 === a ? void 0 : a.id)) return !0
          }
          return !1
        }(e, t, O, h.default);
      return {
        isCurrentUserStreamingQuestApplication: n,
        quest: t
      }
    }, [y, O]), D = (0, r.useStateFromStores)([f.default], () => f.default.locale), U = (0, r.useStateFromStores)([C.default], () => null != b && C.default.isEnrolling(b.id), [b]), w = (0, r.useStateFromStores)([d.default], () => ((null == O ? void 0 : O.id) == null ? null : d.default.getParticipant(y, O.id)) != null, [y, O]), F = a.useMemo(() => null == b ? "" : new Date(b.config.expiresAt).toLocaleDateString(D, {
      dateStyle: "short"
    }), [b, D]), k = a.useCallback(() => {
      null != b && (0, S.enrollInQuest)(b.id, {
        questContent: _.QuestContent.QUEST_LIVE_STREAM,
        questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
      })
    }, [b]), B = a.useCallback(() => {
      o.default.open(M.UserSettingsSections.INVENTORY)
    }, []), V = (0, N.useHandleClaimQuestsReward)({
      quest: b,
      location: _.QuestContent.QUEST_LIVE_STREAM
    }), G = (0, g.useIsQuestExpired)(b);
    if (null == b) return null;
    let H = (null === (t = b.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      W = (null === (n = b.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      Y = null != b.userStatus && (0, I.isDismissed)(b.userStatus, _.QuestContent.QUEST_LIVE_STREAM);
    return Y || G || !w ? null : (0, l.jsxs)("div", {
      className: i(L.wrapper, {
        [L.wrapperAccepted]: H
      }),
      children: [!H && (0, l.jsxs)("div", {
        className: L.rewardTileWrapper,
        children: [(0, l.jsx)("img", {
          alt: b.config.messages.rewardName,
          className: L.rewardTile,
          src: (0, I.getRewardAssetUrl)(b.id)
        }), (0, l.jsx)(v.default, {
          bgOpacity: .32,
          className: L.sponsoredTag
        })]
      }), (0, l.jsxs)("div", {
        className: L.content,
        children: [(0, l.jsxs)("div", {
          className: L.heading,
          children: [H && P ? (0, l.jsx)("img", {
            alt: b.config.messages.rewardName,
            className: L.rewardTile,
            src: (0, I.getRewardAssetUrl)(b.id)
          }) : (0, l.jsx)("img", {
            className: L.gameTile,
            alt: b.config.messages.gameTitle,
            src: (0, I.getGameTileAssetUrl)(b.id)
          }), (0, l.jsxs)("div", {
            className: L.details,
            children: [(0, l.jsxs)("div", {
              className: L.headingWithSubmenu,
              children: [(0, l.jsx)(u.Heading, {
                className: L.questTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: P ? (0, I.getContextualEntrypointHeading)(b) : j.default.Messages.QUESTS_TITLE.format({
                  questName: b.config.messages.questName
                })
              }), (0, l.jsx)(x.QuestsEntryContextMenuPopout, {
                questContent: _.QuestContent.QUEST_LIVE_STREAM,
                quest: b,
                preventIdle: !0,
                shouldShowDisclosure: (null === (s = b.userStatus) || void 0 === s ? void 0 : s.enrolledAt) == null,
                children: e => (0, l.jsx)(u.Clickable, {
                  ...e,
                  className: L.submenuWrapper,
                  children: (0, l.jsx)(p.default, {
                    className: L.submenuIcon
                  })
                })
              })]
            }), (0, l.jsx)(u.Text, {
              color: "header-secondary",
              variant: "text-xs/medium",
              children: W ? j.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: F
              }) : j.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: F
              })
            })]
          })]
        }), H && !W && !P && (0, l.jsx)(A.default, {
          quest: b
        }), (0, l.jsxs)("div", {
          className: L.ctas,
          children: [!H && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(u.Button, {
              className: L.cta,
              color: u.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: u.Button.Sizes.SMALL,
              onClick: B,
              children: j.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, l.jsx)(u.Button, {
              className: L.cta,
              color: u.Button.Colors.GREEN,
              fullWidth: !0,
              onClick: k,
              size: u.Button.Sizes.SMALL,
              submitting: U,
              children: j.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), H && !W && P && (0, l.jsx)(T.default, {
            color: u.tokens.colors.BG_BRAND,
            quest: b
          }), H && !W && !P && (0, l.jsx)(u.Button, {
            className: L.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: B,
            size: u.Button.Sizes.SMALL,
            children: j.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), W && (0, l.jsx)(u.Button, {
            className: L.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: V,
            size: u.Button.Sizes.SMALL,
            children: j.default.Messages.QUESTS_CLAIM_YOUR_REWARD
          })]
        })]
      })]
    })
  }