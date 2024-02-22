"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
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
  T = n("686098"),
  v = n("255697"),
  x = n("49111"),
  N = n("99795"),
  A = n("782340"),
  M = n("140999"),
  R = function(e) {
    var t, n;
    let {
      channelId: s
    } = e, R = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
      isCurrentUserStreamingQuestApplication: j,
      quest: L
    } = (0, r.useStateFromStoresObject)([h.default, d.default, S.default], () => {
      let e = d.default.getParticipants(s),
        t = function(e, t, n) {
          for (let a of e)
            if (a.type === N.ParticipantTypes.STREAM) {
              var l;
              let e = (0, c.getStreamerApplication)(a.stream, n),
                s = (null == e ? void 0 : e.id) != null ? (0, C.getQuestByApplicationId)(t, e.id) : null;
              if (null != s && (null === (l = s.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return s
            } return null
        }(e, S.default.quests, h.default),
        n = null != t && null != R && function(e, t, n, l) {
          for (let s of e) {
            var a;
            if (s.type === N.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (a = (0, c.getStreamerApplication)(s.stream, l)) || void 0 === a ? void 0 : a.id)) return !0
          }
          return !1
        }(e, t, R, h.default);
      return {
        isCurrentUserStreamingQuestApplication: n,
        quest: t
      }
    }, [s, R]), y = (0, r.useStateFromStores)([f.default], () => f.default.locale), O = (0, r.useStateFromStores)([S.default], () => null != L && S.default.isEnrolling(L.id), [L]), P = (0, r.useStateFromStores)([d.default], () => ((null == R ? void 0 : R.id) == null ? null : d.default.getParticipant(s, R.id)) != null, [s, R]), b = a.useMemo(() => null == L ? "" : new Date(L.config.expiresAt).toLocaleDateString(y, {
      dateStyle: "short"
    }), [L, y]), D = a.useCallback(() => {}, []), U = a.useCallback(() => {
      null != L && (0, E.enrollInQuest)(L.id, g.QuestContent.QUEST_LIVE_STREAM)
    }, [L]), w = a.useCallback(() => {
      u.default.open(x.UserSettingsSections.INVENTORY)
    }, []), F = (0, T.useHandleClaimQuestsReward)(L);
    if (null == L) return null;
    let k = (null === (t = L.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      V = (null === (n = L.userStatus) || void 0 === n ? void 0 : n.completedAt) != null;
    return P ? (0, l.jsxs)("div", {
      className: i(M.wrapper, {
        [M.wrapperAccepted]: k
      }),
      children: [!k && (0, l.jsxs)("div", {
        className: M.rewardTileWrapper,
        children: [(0, l.jsx)("img", {
          alt: L.config.messages.rewardName,
          className: M.rewardTile,
          src: (0, C.getRewardAssetUrl)(L.id)
        }), (0, l.jsx)(I.default, {
          bgOpacity: .32,
          className: M.sponsoredTag
        })]
      }), (0, l.jsxs)("div", {
        className: M.content,
        children: [(0, l.jsxs)("div", {
          className: M.heading,
          children: [k && j ? (0, l.jsx)("img", {
            alt: L.config.messages.rewardName,
            className: M.rewardTile,
            src: (0, C.getRewardAssetUrl)(L.id)
          }) : (0, l.jsx)("img", {
            className: M.gameTile,
            alt: L.config.messages.gameTitle,
            src: (0, C.getGameTileAssetUrl)(L.id)
          }), (0, l.jsxs)("div", {
            className: M.details,
            children: [(0, l.jsxs)("div", {
              className: M.headingWithSubmenu,
              children: [(0, l.jsx)(o.Heading, {
                className: M.questTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: j ? (0, C.getContextualEntrypointHeading)(L) : A.default.Messages.QUESTS_TITLE.format({
                  questName: L.config.messages.questName
                })
              }), (0, l.jsx)(o.Clickable, {
                className: M.submenuWrapper,
                onClick: D,
                children: (0, l.jsx)(p.default, {
                  className: M.submenuIcon
                })
              })]
            }), (0, l.jsx)(o.Text, {
              color: "header-secondary",
              variant: "text-xs/medium",
              children: V ? A.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: b
              }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: b
              })
            })]
          })]
        }), k && !V && !j && (0, l.jsx)(v.default, {
          quest: L
        }), (0, l.jsxs)("div", {
          className: M.ctas,
          children: [!k && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Button, {
              className: M.cta,
              color: o.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: o.Button.Sizes.SMALL,
              onClick: w,
              children: A.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, l.jsx)(o.Button, {
              className: M.cta,
              color: o.Button.Colors.GREEN,
              fullWidth: !0,
              onClick: U,
              size: o.Button.Sizes.SMALL,
              submitting: O,
              children: A.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), k && !V && j && (0, l.jsx)(_.default, {
            color: o.tokens.colors.BG_BRAND,
            quest: L
          }), k && !V && !j && (0, l.jsx)(o.Button, {
            className: M.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: w,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), V && (0, l.jsx)(o.Button, {
            className: M.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: F,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_CLAIM_YOUR_REWARD
          })]
        })]
      })]
    }) : null
  }