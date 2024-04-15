"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
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
  A = n("689938"),
  N = n("374145");

function v(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, E.useQuestFormattedDate)(n.config.expiresAt), l = (0, E.useQuestFormattedDate)(n.config.rewardCodeExpiresAt), i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: N.heading,
    children: [(0, a.jsx)("img", {
      className: N.headingGameTile,
      alt: "",
      src: (0, C.getGameTileAssetUrl)(n)
    }), (0, a.jsxs)("div", {
      className: N.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: i ? A.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : A.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: i ? A.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: l
        }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
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
  } = e, O = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(R.id), [R]), [L, M] = s.useState(!1), P = s.useCallback(() => M(!0), []), x = s.useCallback(() => M(!1), []), y = s.useCallback(e => {
    e.stopPropagation()
  }, []), D = s.useCallback(() => {
    (0, f.enrollInQuest)(R.id, {
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
    })
  }, [R]), b = s.useCallback(() => {
    null != R && ((0, c.trackQuestContentClicked)({
      questId: R.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.TRACK_PROGRESS
    }), u.default.open(g.UserSettingsSections.INVENTORY))
  }, [R]), U = s.useCallback(() => {
    (0, c.trackQuestContentClicked)({
      questId: R.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.LEARN_MORE
    }), u.default.open(g.UserSettingsSections.INVENTORY)
  }, [R]), j = (0, p.useHandleClaimQuestsReward)({
    quest: R,
    location: _.QuestContent.ACTIVITY_PANEL
  }), G = (0, E.useIsQuestExpired)(R), w = (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, k = (null === (n = R.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, F = (null === (l = R.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
  return (null == R ? void 0 : R.userStatus) == null || (0, C.isDismissed)(R.userStatus, _.QuestContent.ACTIVITY_PANEL) || G || F ? null : (0, a.jsx)(m.QuestContentImpressionTracker, {
    questId: R.id,
    questContent: _.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, a.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: i()(N.wrapper, {
          [N.wrapperQuestAccepted]: w
        }),
        onClick: y,
        onKeyPress: y,
        onFocus: P,
        onMouseEnter: P,
        onBlur: x,
        onMouseLeave: x,
        children: [(0, a.jsxs)("div", {
          className: N.utils,
          children: [w ? (0, a.jsx)(v, {
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
              className: N.__invalid_submenuWrapper,
              "aria-label": A.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: N.submenuIcon
              })
            })
          })]
        }), !w && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(v, {
            quest: R
          }), (0, a.jsx)(o.Text, {
            className: N.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, C.getQuestsInstructionsToWinReward)({
              quest: R
            })
          })]
        }), w && !k && (0, a.jsx)(T.default, {
          autoplay: L,
          className: N.rewardTileWithInstructions,
          quest: R,
          questContent: _.QuestContent.ACTIVITY_PANEL
        }), (0, a.jsxs)("div", {
          className: N.ctas,
          children: [!w && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(o.Button, {
              className: N.cta,
              color: o.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: o.Button.Sizes.SMALL,
              onClick: U,
              children: A.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, a.jsx)(o.Button, {
              className: N.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: D,
              size: o.Button.Sizes.SMALL,
              submitting: O,
              children: A.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), w && !k && (0, a.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: b,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), k && (0, a.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: j,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}