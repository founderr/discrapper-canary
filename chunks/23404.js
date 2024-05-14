"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("442837"),
  o = n("663002"),
  u = n("481060"),
  d = n("230711"),
  c = n("210887"),
  f = n("808268"),
  E = n("617136"),
  h = n("272008"),
  _ = n("113434"),
  C = n("569984"),
  m = n("497505"),
  S = n("918701"),
  p = n("874137"),
  g = n("611855"),
  I = n("670638"),
  T = n("667105"),
  A = n("860151"),
  N = n("46140"),
  v = n("981631"),
  R = n("689938"),
  L = n("758895");

function O(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, _.useQuestFormattedDate)(n.config.expiresAt), i = (0, _.useQuestFormattedDate)(n.config.rewardCodeExpiresAt), l = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), d = (0, o.isThemeDark)(l) ? v.ThemeTypes.DARK : v.ThemeTypes.LIGHT, f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: L.heading,
    children: [(0, a.jsx)("img", {
      className: L.headingGameTile,
      alt: "",
      src: (0, S.getGameTileAssetUrl)(n, d)
    }), (0, a.jsxs)("div", {
      className: L.headingCopy,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: f ? R.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : R.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: f ? R.default.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: i
        }) : R.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
          expirationDate: s
        })
      })]
    })]
  })
}
t.default = function(e) {
  var t, n, i;
  let {
    quest: o
  } = e, c = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(o.id), [o]), [y, M] = s.useState(!1), P = s.useCallback(() => M(!0), []), x = s.useCallback(() => M(!1), []), D = s.useCallback(e => {
    e.stopPropagation()
  }, []), b = s.useCallback(() => {
    (0, h.enrollInQuest)(o.id, {
      questContent: m.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [o]), U = s.useCallback(() => {
    null != o && ((0, E.trackQuestContentClicked)({
      questId: o.id,
      questContent: m.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(v.UserSettingsSections.INVENTORY))
  }, [o]), j = s.useCallback(() => {
    (0, E.trackQuestContentClicked)({
      questId: o.id,
      questContent: m.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.LEARN_MORE
    }), d.default.open(v.UserSettingsSections.INVENTORY)
  }, [o]), G = (0, T.useHandleClaimQuestsReward)({
    quest: o,
    location: m.QuestContent.ACTIVITY_PANEL
  }), k = (0, _.useIsQuestExpired)(o), w = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, F = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, B = (null === (i = o.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
  return (null == o ? void 0 : o.userStatus) == null || (0, S.isDismissed)(o.userStatus, m.QuestContent.ACTIVITY_PANEL) || k || B ? null : (0, a.jsx)(p.QuestContentImpressionTracker, {
    questOrQuests: o,
    questContent: m.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, a.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: l()(L.wrapper, {
          [L.wrapperQuestAccepted]: w
        }),
        onClick: D,
        onKeyPress: D,
        onFocus: P,
        onMouseEnter: P,
        onBlur: x,
        onMouseLeave: x,
        children: [(0, a.jsxs)("div", {
          className: L.utils,
          children: [w ? (0, a.jsx)(O, {
            quest: o
          }) : (0, a.jsx)(g.default, {
            textOpacity: .5
          }), (0, a.jsx)(I.QuestsEntryContextMenuPopout, {
            quest: o,
            questContent: m.QuestContent.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              "aria-label": R.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: L.submenuIcon
              })
            })
          })]
        }), !w && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(O, {
            quest: o
          }), (0, a.jsx)(u.Text, {
            className: L.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, S.getQuestsInstructionsToWinReward)({
              quest: o,
              location: N.QuestsExperimentLocations.ACTIVITY_PANEL
            })
          })]
        }), w && !F && (0, a.jsx)(A.default, {
          autoplay: y,
          className: L.rewardTileWithInstructions,
          quest: o,
          questContent: m.QuestContent.ACTIVITY_PANEL,
          questExperimentLocation: N.QuestsExperimentLocations.ACTIVITY_PANEL
        }), (0, a.jsxs)("div", {
          className: L.ctas,
          children: [!w && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(u.Button, {
              className: L.cta,
              color: u.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: u.Button.Sizes.SMALL,
              onClick: j,
              children: R.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, a.jsx)(u.Button, {
              className: L.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: b,
              size: u.Button.Sizes.SMALL,
              submitting: c,
              children: R.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), w && !F && (0, a.jsx)(u.Button, {
            className: L.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: U,
            size: u.Button.Sizes.SMALL,
            children: R.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), F && (0, a.jsx)(u.Button, {
            className: L.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: G,
            size: u.Button.Sizes.SMALL,
            children: R.default.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}