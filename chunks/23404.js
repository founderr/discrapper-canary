"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("663002"),
  u = n("481060"),
  d = n("230711"),
  c = n("210887"),
  f = n("808268"),
  E = n("617136"),
  C = n("272008"),
  h = n("113434"),
  _ = n("569984"),
  S = n("497505"),
  m = n("918701"),
  p = n("566078"),
  I = n("874137"),
  g = n("611855"),
  T = n("670638"),
  A = n("667105"),
  N = n("860151"),
  v = n("46140"),
  R = n("981631"),
  O = n("689938"),
  L = n("758895");

function P(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, h.useQuestFormattedDate)(n.config.expiresAt), l = (0, h.useQuestFormattedDate)(p.SharedQuestFields.build(n.config).rewardsExpireAt), i = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), d = (0, o.isThemeDark)(i) ? R.ThemeTypes.DARK : R.ThemeTypes.LIGHT, f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: L.heading,
    children: [(0, a.jsx)("img", {
      className: L.headingGameTile,
      alt: "",
      src: (0, m.getGameTileAssetUrl)(n, d)
    }), (0, a.jsxs)("div", {
      className: L.headingCopy,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: f ? O.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : O.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: f ? O.default.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: l
        }) : O.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
          expirationDate: s
        })
      })]
    })]
  })
}
t.default = function(e) {
  var t, n, l;
  let {
    quest: o
  } = e, c = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(o.id), [o]), [p, y] = s.useState(!1), M = s.useCallback(() => y(!0), []), D = s.useCallback(() => y(!1), []), x = s.useCallback(e => {
    e.stopPropagation()
  }, []), b = s.useCallback(() => {
    (0, C.enrollInQuest)(o.id, {
      questContent: S.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [o]), U = s.useCallback(() => {
    null != o && ((0, E.trackQuestContentClicked)({
      questId: o.id,
      questContent: S.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(R.UserSettingsSections.INVENTORY))
  }, [o]), j = s.useCallback(() => {
    (0, E.trackQuestContentClicked)({
      questId: o.id,
      questContent: S.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.LEARN_MORE
    }), d.default.open(R.UserSettingsSections.INVENTORY)
  }, [o]), G = (0, A.useHandleClaimQuestsReward)({
    quest: o,
    location: S.QuestContent.ACTIVITY_PANEL
  }), w = (0, h.useIsQuestExpired)(o), k = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, B = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, F = (null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
  return (null == o ? void 0 : o.userStatus) == null || (0, m.isDismissed)(o.userStatus, S.QuestContent.ACTIVITY_PANEL) || w || F ? null : (0, a.jsx)(I.QuestContentImpressionTracker, {
    questOrQuests: o,
    questContent: S.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, a.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: i()(L.wrapper, {
          [L.wrapperQuestAccepted]: k
        }),
        onClick: x,
        onKeyPress: x,
        onFocus: M,
        onMouseEnter: M,
        onBlur: D,
        onMouseLeave: D,
        children: [(0, a.jsxs)("div", {
          className: L.utils,
          children: [k ? (0, a.jsx)(P, {
            quest: o
          }) : (0, a.jsx)(g.default, {
            textOpacity: .5
          }), (0, a.jsx)(T.QuestsEntryContextMenuPopout, {
            quest: o,
            questContent: S.QuestContent.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              "aria-label": O.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: L.submenuIcon
              })
            })
          })]
        }), !k && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(P, {
            quest: o
          }), (0, a.jsx)(u.Text, {
            className: L.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, m.getQuestsInstructionsToWinReward)({
              quest: o,
              location: v.QuestsExperimentLocations.ACTIVITY_PANEL
            })
          })]
        }), k && !B && (0, a.jsx)(N.default, {
          autoplay: p,
          className: L.rewardTileWithInstructions,
          quest: o,
          questContent: S.QuestContent.ACTIVITY_PANEL,
          questExperimentLocation: v.QuestsExperimentLocations.ACTIVITY_PANEL
        }), (0, a.jsxs)("div", {
          className: L.ctas,
          children: [!k && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(u.Button, {
              className: L.cta,
              color: u.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: u.Button.Sizes.SMALL,
              onClick: j,
              children: O.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, a.jsx)(u.Button, {
              className: L.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: b,
              size: u.Button.Sizes.SMALL,
              submitting: c,
              children: O.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), k && !B && (0, a.jsx)(u.Button, {
            className: L.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: U,
            size: u.Button.Sizes.SMALL,
            children: O.default.Messages.QUESTS_CHECK_PROGRESS
          }), B && (0, a.jsx)(u.Button, {
            className: L.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: G,
            size: u.Button.Sizes.SMALL,
            children: O.default.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}