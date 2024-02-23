"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("79112"),
  d = n("191145"),
  c = n("582415"),
  f = n("915639"),
  h = n("824563"),
  m = n("697218"),
  p = n("433487"),
  E = n("448881"),
  S = n("2973"),
  g = n("588025"),
  C = n("227231"),
  _ = n("315130"),
  I = n("45198"),
  T = n("275986"),
  v = n("686098"),
  x = n("255697"),
  N = n("49111"),
  A = n("99795"),
  M = n("782340"),
  R = n("140999"),
  j = function(e) {
    var t, n, s;
    let {
      channelId: j
    } = e, L = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
      isCurrentUserStreamingQuestApplication: y,
      quest: O
    } = (0, r.useStateFromStoresObject)([h.default, d.default, S.default], () => {
      let e = d.default.getParticipants(j),
        t = function(e, t, n) {
          for (let a of e)
            if (a.type === A.ParticipantTypes.STREAM) {
              var l;
              let e = (0, c.getStreamerApplication)(a.stream, n),
                s = (null == e ? void 0 : e.id) != null ? (0, C.getQuestByApplicationId)(t, e.id) : null;
              if (null != s && (null === (l = s.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return s
            } return null
        }(e, S.default.quests, h.default),
        n = null != t && null != L && function(e, t, n, l) {
          for (let s of e) {
            var a;
            if (s.type === A.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (a = (0, c.getStreamerApplication)(s.stream, l)) || void 0 === a ? void 0 : a.id)) return !0
          }
          return !1
        }(e, t, L, h.default);
      return {
        isCurrentUserStreamingQuestApplication: n,
        quest: t
      }
    }, [j, L]), P = (0, r.useStateFromStores)([f.default], () => f.default.locale), b = (0, r.useStateFromStores)([S.default], () => null != O && S.default.isEnrolling(O.id), [O]), D = (0, r.useStateFromStores)([d.default], () => ((null == L ? void 0 : L.id) == null ? null : d.default.getParticipant(j, L.id)) != null, [j, L]), U = a.useMemo(() => null == O ? "" : new Date(O.config.expiresAt).toLocaleDateString(P, {
      dateStyle: "short"
    }), [O, P]), w = a.useCallback(() => {
      null != O && (0, E.enrollInQuest)(O.id, g.QuestContent.QUEST_LIVE_STREAM)
    }, [O]), F = a.useCallback(() => {
      u.default.open(N.UserSettingsSections.INVENTORY)
    }, []), k = (0, v.useHandleClaimQuestsReward)(O, g.QuestContent.QUEST_LIVE_STREAM);
    if (null == O) return null;
    let V = (null === (t = O.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      B = (null === (n = O.userStatus) || void 0 === n ? void 0 : n.completedAt) != null;
    return D ? (0, l.jsxs)("div", {
      className: i(R.wrapper, {
        [R.wrapperAccepted]: V
      }),
      children: [!V && (0, l.jsxs)("div", {
        className: R.rewardTileWrapper,
        children: [(0, l.jsx)("img", {
          alt: O.config.messages.rewardName,
          className: R.rewardTile,
          src: (0, C.getRewardAssetUrl)(O.id)
        }), (0, l.jsx)(I.default, {
          bgOpacity: .32,
          className: R.sponsoredTag
        })]
      }), (0, l.jsxs)("div", {
        className: R.content,
        children: [(0, l.jsxs)("div", {
          className: R.heading,
          children: [V && y ? (0, l.jsx)("img", {
            alt: O.config.messages.rewardName,
            className: R.rewardTile,
            src: (0, C.getRewardAssetUrl)(O.id)
          }) : (0, l.jsx)("img", {
            className: R.gameTile,
            alt: O.config.messages.gameTitle,
            src: (0, C.getGameTileAssetUrl)(O.id)
          }), (0, l.jsxs)("div", {
            className: R.details,
            children: [(0, l.jsxs)("div", {
              className: R.headingWithSubmenu,
              children: [(0, l.jsx)(o.Heading, {
                className: R.questTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: y ? (0, C.getContextualEntrypointHeading)(O) : M.default.Messages.QUESTS_TITLE.format({
                  questName: O.config.messages.questName
                })
              }), (0, l.jsx)(T.QuestsEntryContextMenuPopout, {
                questContent: g.QuestContent.QUEST_LIVE_STREAM,
                quest: O,
                preventIdle: !0,
                shouldShowDisclosure: (null === (s = O.userStatus) || void 0 === s ? void 0 : s.enrolledAt) == null,
                children: e => (0, l.jsx)(o.Clickable, {
                  ...e,
                  className: R.submenuWrapper,
                  children: (0, l.jsx)(p.default, {
                    className: R.submenuIcon
                  })
                })
              })]
            }), (0, l.jsx)(o.Text, {
              color: "header-secondary",
              variant: "text-xs/medium",
              children: B ? M.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: U
              }) : M.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: U
              })
            })]
          })]
        }), V && !B && !y && (0, l.jsx)(x.default, {
          quest: O
        }), (0, l.jsxs)("div", {
          className: R.ctas,
          children: [!V && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Button, {
              className: R.cta,
              color: o.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: o.Button.Sizes.SMALL,
              onClick: F,
              children: M.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, l.jsx)(o.Button, {
              className: R.cta,
              color: o.Button.Colors.GREEN,
              fullWidth: !0,
              onClick: w,
              size: o.Button.Sizes.SMALL,
              submitting: b,
              children: M.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), V && !B && y && (0, l.jsx)(_.default, {
            color: o.tokens.colors.BG_BRAND,
            quest: O
          }), V && !B && !y && (0, l.jsx)(o.Button, {
            className: R.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: F,
            size: o.Button.Sizes.SMALL,
            children: M.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), B && (0, l.jsx)(o.Button, {
            className: R.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: k,
            size: o.Button.Sizes.SMALL,
            children: M.default.Messages.QUESTS_CLAIM_YOUR_REWARD
          })]
        })]
      })]
    }) : null
  }