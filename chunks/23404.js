"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("663002"),
  u = a("481060"),
  d = a("230711"),
  c = a("210887"),
  f = a("808268"),
  E = a("617136"),
  h = a("272008"),
  _ = a("113434"),
  C = a("569984"),
  m = a("497505"),
  S = a("918701"),
  I = a("874137"),
  p = a("611855"),
  T = a("670638"),
  g = a("667105"),
  A = a("860151"),
  N = a("981631"),
  v = a("689938"),
  R = a("374145");

function O(e) {
  var t;
  let {
    quest: a
  } = e, s = (0, _.useQuestFormattedDate)(a.config.expiresAt), l = (0, _.useQuestFormattedDate)(a.config.rewardCodeExpiresAt), i = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), d = (0, o.isThemeDark)(i) ? N.ThemeTypes.DARK : N.ThemeTypes.LIGHT, f = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, n.jsxs)("div", {
    className: R.heading,
    children: [(0, n.jsx)("img", {
      className: R.headingGameTile,
      alt: "",
      src: (0, S.getGameTileAssetUrl)(a, d)
    }), (0, n.jsxs)("div", {
      className: R.headingCopy,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: f ? v.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : v.default.Messages.QUESTS_TITLE.format({
          questName: a.config.messages.questName
        })
      }), (0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: f ? v.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: l
        }) : v.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: s
        })
      })]
    })]
  })
}
t.default = function(e) {
  var t, a, l;
  let {
    quest: o
  } = e, c = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(o.id), [o]), [L, P] = s.useState(!1), M = s.useCallback(() => P(!0), []), x = s.useCallback(() => P(!1), []), y = s.useCallback(e => {
    e.stopPropagation()
  }, []), D = s.useCallback(() => {
    (0, h.enrollInQuest)(o.id, {
      questContent: m.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [o]), b = s.useCallback(() => {
    null != o && ((0, E.trackQuestContentClicked)({
      questId: o.id,
      questContent: m.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(N.UserSettingsSections.INVENTORY))
  }, [o]), U = s.useCallback(() => {
    (0, E.trackQuestContentClicked)({
      questId: o.id,
      questContent: m.QuestContent.ACTIVITY_PANEL,
      questContentCTA: E.QuestContentCTA.LEARN_MORE
    }), d.default.open(N.UserSettingsSections.INVENTORY)
  }, [o]), j = (0, g.useHandleClaimQuestsReward)({
    quest: o,
    location: m.QuestContent.ACTIVITY_PANEL
  }), G = (0, _.useIsQuestExpired)(o), w = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, k = (null === (a = o.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, F = (null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
  return (null == o ? void 0 : o.userStatus) == null || (0, S.isDismissed)(o.userStatus, m.QuestContent.ACTIVITY_PANEL) || G || F ? null : (0, n.jsx)(I.QuestContentImpressionTracker, {
    questOrQuests: o,
    questContent: m.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, n.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: i()(R.wrapper, {
          [R.wrapperQuestAccepted]: w
        }),
        onClick: y,
        onKeyPress: y,
        onFocus: M,
        onMouseEnter: M,
        onBlur: x,
        onMouseLeave: x,
        children: [(0, n.jsxs)("div", {
          className: R.utils,
          children: [w ? (0, n.jsx)(O, {
            quest: o
          }) : (0, n.jsx)(p.default, {
            textOpacity: .5
          }), (0, n.jsx)(T.QuestsEntryContextMenuPopout, {
            quest: o,
            questContent: m.QuestContent.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, n.jsx)(u.Clickable, {
              ...e,
              className: R.__invalid_submenuWrapper,
              "aria-label": v.default.Messages.ACTIONS,
              children: (0, n.jsx)(f.default, {
                className: R.submenuIcon
              })
            })
          })]
        }), !w && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(O, {
            quest: o
          }), (0, n.jsx)(u.Text, {
            className: R.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, S.getQuestsInstructionsToWinReward)({
              quest: o
            })
          })]
        }), w && !k && (0, n.jsx)(A.default, {
          autoplay: L,
          className: R.rewardTileWithInstructions,
          quest: o,
          questContent: m.QuestContent.ACTIVITY_PANEL
        }), (0, n.jsxs)("div", {
          className: R.ctas,
          children: [!w && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(u.Button, {
              className: R.cta,
              color: u.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: u.Button.Sizes.SMALL,
              onClick: U,
              children: v.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, n.jsx)(u.Button, {
              className: R.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: D,
              size: u.Button.Sizes.SMALL,
              submitting: c,
              children: v.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), w && !k && (0, n.jsx)(u.Button, {
            className: R.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: b,
            size: u.Button.Sizes.SMALL,
            children: v.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), k && (0, n.jsx)(u.Button, {
            className: R.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: j,
            size: u.Button.Sizes.SMALL,
            children: v.default.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}