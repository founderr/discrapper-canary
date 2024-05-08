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
  I = n("611855"),
  g = n("670638"),
  T = n("667105"),
  A = n("860151"),
  N = n("981631"),
  v = n("689938"),
  R = n("96751");

function O(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, _.useQuestFormattedDate)(n.config.expiresAt), i = (0, _.useQuestFormattedDate)(n.config.rewardCodeExpiresAt), l = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), d = (0, o.isThemeDark)(l) ? N.ThemeTypes.DARK : N.ThemeTypes.LIGHT, f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: R.heading,
    children: [(0, a.jsx)("img", {
      className: R.headingGameTile,
      alt: "",
      src: (0, S.getGameTileAssetUrl)(n, d)
    }), (0, a.jsxs)("div", {
      className: R.headingCopy,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: f ? v.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : v.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: f ? v.default.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: i
        }) : v.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
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
  } = e, c = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(o.id), [o]), [L, M] = s.useState(!1), y = s.useCallback(() => M(!0), []), P = s.useCallback(() => M(!1), []), x = s.useCallback(e => {
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
  }, [o]), j = (0, T.useHandleClaimQuestsReward)({
    quest: o,
    location: m.QuestContent.ACTIVITY_PANEL
  }), G = (0, _.useIsQuestExpired)(o), k = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, F = (null === (i = o.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
  return (null == o ? void 0 : o.userStatus) == null || (0, S.isDismissed)(o.userStatus, m.QuestContent.ACTIVITY_PANEL) || G || F ? null : (0, a.jsx)(p.QuestContentImpressionTracker, {
    questOrQuests: o,
    questContent: m.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, a.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: l()(R.wrapper, {
          [R.wrapperQuestAccepted]: k
        }),
        onClick: x,
        onKeyPress: x,
        onFocus: y,
        onMouseEnter: y,
        onBlur: P,
        onMouseLeave: P,
        children: [(0, a.jsxs)("div", {
          className: R.utils,
          children: [k ? (0, a.jsx)(O, {
            quest: o
          }) : (0, a.jsx)(I.default, {
            textOpacity: .5
          }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
            quest: o,
            questContent: m.QuestContent.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              "aria-label": v.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: R.submenuIcon
              })
            })
          })]
        }), !k && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(O, {
            quest: o
          }), (0, a.jsx)(u.Text, {
            className: R.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, S.getQuestsInstructionsToWinReward)({
              quest: o
            })
          })]
        }), k && !w && (0, a.jsx)(A.default, {
          autoplay: L,
          className: R.rewardTileWithInstructions,
          quest: o,
          questContent: m.QuestContent.ACTIVITY_PANEL
        }), (0, a.jsxs)("div", {
          className: R.ctas,
          children: [!k && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(u.Button, {
              className: R.cta,
              color: u.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: u.Button.Sizes.SMALL,
              onClick: U,
              children: v.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, a.jsx)(u.Button, {
              className: R.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: D,
              size: u.Button.Sizes.SMALL,
              submitting: c,
              children: v.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), k && !w && (0, a.jsx)(u.Button, {
            className: R.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: b,
            size: u.Button.Sizes.SMALL,
            children: v.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), w && (0, a.jsx)(u.Button, {
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