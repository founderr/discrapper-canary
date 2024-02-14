"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
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
  g = n("227231"),
  C = n("315130"),
  _ = n("45198"),
  I = n("686098"),
  T = n("255697"),
  v = n("49111"),
  x = n("99795"),
  N = n("782340"),
  A = n("140999"),
  M = function(e) {
    var t, n;
    let {
      channelId: s
    } = e, M = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
      isCurrentUserStreamingQuestApplication: R,
      quest: j
    } = (0, r.useStateFromStoresObject)([h.default, d.default, S.default], () => {
      let e = d.default.getParticipants(s),
        t = function(e, t, n) {
          for (let l of e)
            if (l.type === x.ParticipantTypes.STREAM) {
              var a;
              let e = (0, c.getStreamerApplication)(l.stream, n),
                s = (null == e ? void 0 : e.id) != null ? (0, g.getQuestByApplicationId)(t, e.id) : null;
              if (null != s && (null === (a = s.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return s
            } return null
        }(e, S.default.quests, h.default),
        n = null != t && null != M && function(e, t, n, a) {
          for (let s of e) {
            var l;
            if (s.type === x.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, c.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
          }
          return !1
        }(e, t, M, h.default);
      return {
        isCurrentUserStreamingQuestApplication: n,
        quest: t
      }
    }, [s, M]), L = (0, r.useStateFromStores)([f.default], () => f.default.locale), y = (0, r.useStateFromStores)([S.default], () => null != j && S.default.isEnrolling(j.id), [j]), O = (0, r.useStateFromStores)([d.default], () => ((null == M ? void 0 : M.id) == null ? null : d.default.getParticipant(s, M.id)) != null, [s, M]), P = l.useMemo(() => null == j ? "" : new Date(j.config.expiresAt).toLocaleDateString(L, {
      dateStyle: "short"
    }), [j, L]), b = l.useCallback(() => {}, []), D = l.useCallback(() => {
      null != j && (0, E.enrollInQuest)(j.id)
    }, [j]), U = l.useCallback(() => {
      u.default.open(v.UserSettingsSections.INVENTORY)
    }, []), w = (0, I.useHandleClaimQuestsReward)(j);
    if (null == j) return null;
    let F = (null === (t = j.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      k = (null === (n = j.userStatus) || void 0 === n ? void 0 : n.completedAt) != null;
    return O ? (0, a.jsxs)("div", {
      className: i(A.wrapper, {
        [A.wrapperAccepted]: F
      }),
      children: [!F && (0, a.jsxs)("div", {
        className: A.rewardTileWrapper,
        children: [(0, a.jsx)("img", {
          alt: j.config.messages.rewardName,
          className: A.rewardTile,
          src: (0, g.getRewardAssetUrl)(j.id)
        }), (0, a.jsx)(_.default, {
          bgOpacity: .32,
          className: A.sponsoredTag
        })]
      }), (0, a.jsxs)("div", {
        className: A.content,
        children: [(0, a.jsxs)("div", {
          className: A.heading,
          children: [F && R ? (0, a.jsx)("img", {
            alt: j.config.messages.rewardName,
            className: A.rewardTile,
            src: (0, g.getRewardAssetUrl)(j.id)
          }) : (0, a.jsx)("img", {
            className: A.gameTile,
            alt: j.config.messages.gameTitle,
            src: (0, g.getGameTileAssetUrl)(j.id)
          }), (0, a.jsxs)("div", {
            className: A.details,
            children: [(0, a.jsxs)("div", {
              className: A.headingWithSubmenu,
              children: [(0, a.jsx)(o.Heading, {
                className: A.questTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: R ? (0, g.getContextualEntrypointHeading)(j) : N.default.Messages.QUESTS_TITLE.format({
                  questName: j.config.messages.questName
                })
              }), (0, a.jsx)(o.Clickable, {
                className: A.submenuWrapper,
                onClick: b,
                children: (0, a.jsx)(p.default, {
                  className: A.submenuIcon
                })
              })]
            }), (0, a.jsx)(o.Text, {
              color: "header-secondary",
              variant: "text-xs/medium",
              children: k ? N.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: P
              }) : N.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: P
              })
            })]
          })]
        }), F && !k && !R && (0, a.jsx)(T.default, {
          quest: j
        }), (0, a.jsxs)("div", {
          className: A.ctas,
          children: [!F && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(o.Button, {
              className: A.cta,
              color: o.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: o.Button.Sizes.SMALL,
              onClick: U,
              children: N.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, a.jsx)(o.Button, {
              className: A.cta,
              color: o.Button.Colors.GREEN,
              fullWidth: !0,
              onClick: D,
              size: o.Button.Sizes.SMALL,
              submitting: y,
              children: N.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), F && !k && R && (0, a.jsx)(C.default, {
            color: o.tokens.colors.BG_BRAND,
            quest: j
          }), F && !k && !R && (0, a.jsx)(o.Button, {
            className: A.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: U,
            size: o.Button.Sizes.SMALL,
            children: N.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), k && (0, a.jsx)(o.Button, {
            className: A.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: w,
            size: o.Button.Sizes.SMALL,
            children: N.default.Messages.QUESTS_CLAIM_YOUR_REWARD
          })]
        })]
      })]
    }) : null
  }