"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("442837"),
  o = a("481060"),
  u = a("230711"),
  d = a("808268"),
  c = a("617136"),
  f = a("272008"),
  E = a("113434"),
  h = a("569984"),
  _ = a("497505"),
  C = a("918701"),
  m = a("874137"),
  S = a("611855"),
  I = a("670638"),
  p = a("667105"),
  T = a("860151"),
  g = a("981631"),
  A = a("689938"),
  N = a("374145");

function v(e) {
  var t;
  let {
    quest: a
  } = e, s = (0, E.useQuestFormattedDate)(a.config.expiresAt), l = (0, E.useQuestFormattedDate)(a.config.rewardCodeExpiresAt), i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, n.jsxs)("div", {
    className: N.heading,
    children: [(0, n.jsx)("img", {
      className: N.headingGameTile,
      alt: "",
      src: (0, C.getGameTileAssetUrl)(a)
    }), (0, n.jsxs)("div", {
      className: N.headingCopy,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: i ? A.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : A.default.Messages.QUESTS_TITLE.format({
          questName: a.config.messages.questName
        })
      }), (0, n.jsx)(o.Text, {
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
  var t, a, l;
  let {
    quest: R
  } = e, O = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(R.id), [R]), L = s.useCallback(e => {
    e.stopPropagation()
  }, []), M = s.useCallback(() => {
    (0, f.enrollInQuest)(R.id, {
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
    })
  }, [R]), P = s.useCallback(() => {
    null != R && ((0, c.trackQuestContentClicked)({
      questId: R.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.TRACK_PROGRESS
    }), u.default.open(g.UserSettingsSections.INVENTORY))
  }, [R]), x = s.useCallback(() => {
    (0, c.trackQuestContentClicked)({
      questId: R.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.LEARN_MORE
    }), u.default.open(g.UserSettingsSections.INVENTORY)
  }, [R]), y = (0, p.useHandleClaimQuestsReward)({
    quest: R,
    location: _.QuestContent.ACTIVITY_PANEL
  }), D = (0, E.useIsQuestExpired)(R), b = (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, U = (null === (a = R.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, j = (null === (l = R.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null;
  return (null == R ? void 0 : R.userStatus) == null || (0, C.isDismissed)(R.userStatus, _.QuestContent.ACTIVITY_PANEL) || D || j ? null : (0, n.jsx)(m.QuestContentImpressionTracker, {
    questId: R.id,
    questContent: _.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, n.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: i()(N.wrapper, {
          [N.wrapperQuestAccepted]: b
        }),
        onClick: L,
        onKeyPress: L,
        children: [(0, n.jsxs)("div", {
          className: N.utils,
          children: [b ? (0, n.jsx)(v, {
            quest: R
          }) : (0, n.jsx)(S.default, {
            textOpacity: .5
          }), (0, n.jsx)(I.QuestsEntryContextMenuPopout, {
            quest: R,
            questContent: _.QuestContent.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, n.jsx)(o.Clickable, {
              ...e,
              className: N.__invalid_submenuWrapper,
              "aria-label": A.default.Messages.ACTIONS,
              children: (0, n.jsx)(d.default, {
                className: N.submenuIcon
              })
            })
          })]
        }), !b && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(v, {
            quest: R
          }), (0, n.jsx)(o.Text, {
            className: N.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, C.getQuestsInstructionsToWinReward)({
              quest: R
            })
          })]
        }), b && !U && (0, n.jsx)(T.default, {
          className: N.rewardTileWithInstructions,
          quest: R
        }), (0, n.jsxs)("div", {
          className: N.ctas,
          children: [!b && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(o.Button, {
              className: N.cta,
              color: o.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: o.Button.Sizes.SMALL,
              onClick: x,
              children: A.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, n.jsx)(o.Button, {
              className: N.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: M,
              size: o.Button.Sizes.SMALL,
              submitting: O,
              children: A.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), b && !U && (0, n.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: P,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), U && (0, n.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: y,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}