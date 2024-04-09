"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("230711"),
  d = n("808268"),
  c = n("617136"),
  f = n("272008"),
  E = n("113434"),
  h = n("569984"),
  _ = n("497505"),
  C = n("918701"),
  m = n("874137"),
  S = n("611855"),
  I = n("670638"),
  p = n("667105"),
  T = n("860151"),
  g = n("981631"),
  N = n("689938"),
  A = n("374145");

function O(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, E.useQuestFormattedDate)(n.config.expiresAt), l = (0, E.useQuestFormattedDate)(n.config.rewardCodeExpiresAt), i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: A.heading,
    children: [(0, a.jsx)("img", {
      className: A.headingGameTile,
      alt: "",
      src: (0, C.getGameTileAssetUrl)(n)
    }), (0, a.jsxs)("div", {
      className: A.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: i ? N.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : N.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: i ? N.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: l
        }) : N.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: s
        })
      })]
    })]
  })
}
t.default = function(e) {
  var t, n, l;
  let {
    quest: R
  } = e, v = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(R.id), [R]), L = s.useCallback(e => {
    e.stopPropagation()
  }, []), P = s.useCallback(() => {
    (0, f.enrollInQuest)(R.id, {
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
    })
  }, [R]), M = s.useCallback(() => {
    null != R && ((0, c.trackQuestContentClicked)({
      questId: R.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.TRACK_PROGRESS
    }), u.default.open(g.UserSettingsSections.INVENTORY))
  }, [R]), y = s.useCallback(() => {
    (0, c.trackQuestContentClicked)({
      questId: R.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.LEARN_MORE
    }), u.default.open(g.UserSettingsSections.INVENTORY)
  }, [R]), D = (0, p.useHandleClaimQuestsReward)({
    quest: R,
    location: _.QuestContent.ACTIVITY_PANEL
  }), x = (0, E.useIsQuestExpired)(R), b = (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, U = (null === (n = R.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, j = (null === (l = R.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
  return (null == R ? void 0 : R.userStatus) == null || (0, C.isDismissed)(R.userStatus, _.QuestContent.ACTIVITY_PANEL) || x || j ? null : (0, a.jsx)(m.QuestContentImpressionTracker, {
    questId: R.id,
    questContent: _.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, a.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: i()(A.wrapper, {
          [A.wrapperQuestAccepted]: b
        }),
        onClick: L,
        onKeyPress: L,
        children: [(0, a.jsxs)("div", {
          className: A.utils,
          children: [b ? (0, a.jsx)(O, {
            quest: R
          }) : (0, a.jsx)(S.default, {
            textOpacity: .5
          }), (0, a.jsx)(I.QuestsEntryContextMenuPopout, {
            quest: R,
            questContent: _.QuestContent.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: A.__invalid_submenuWrapper,
              "aria-label": N.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: A.submenuIcon
              })
            })
          })]
        }), !b && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(O, {
            quest: R
          }), (0, a.jsx)(o.Text, {
            className: A.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: R.config.messages.gameTitle,
              questReward: R.config.messages.rewardNameWithArticle,
              streamingDurationRequirement: R.config.streamDurationRequirementMinutes
            })
          })]
        }), b && !U && (0, a.jsx)(T.default, {
          className: A.rewardTileWithInstructions,
          quest: R
        }), (0, a.jsxs)("div", {
          className: A.ctas,
          children: [!b && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(o.Button, {
              className: A.cta,
              color: o.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: o.Button.Sizes.SMALL,
              onClick: y,
              children: N.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, a.jsx)(o.Button, {
              className: A.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: P,
              size: o.Button.Sizes.SMALL,
              submitting: v,
              children: N.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), b && !U && (0, a.jsx)(o.Button, {
            className: A.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: M,
            size: o.Button.Sizes.SMALL,
            children: N.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), U && (0, a.jsx)(o.Button, {
            className: A.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: D,
            size: o.Button.Sizes.SMALL,
            children: N.default.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}