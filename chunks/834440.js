"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("272030"),
  d = n("79112"),
  c = n("433487"),
  f = n("815496"),
  E = n("448881"),
  h = n("879364"),
  _ = n("2973"),
  C = n("588025"),
  I = n("227231"),
  S = n("45198"),
  m = n("385416"),
  p = n("255697"),
  T = n("49111"),
  g = n("782340"),
  A = n("647439");

function N(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, h.useQuestFormattedDate)(n.config.expiresAt), l = (0, h.useQuestFormattedDate)(n.config.rewardCodeExpiresAt), i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: A.heading,
    children: [(0, a.jsx)("img", {
      className: A.headingGameTile,
      alt: "",
      src: (0, I.getGameTileAssetUrl)(n.id)
    }), (0, a.jsxs)("div", {
      className: A.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: i ? g.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : g.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: i ? g.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: l
        }) : g.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: s
        })
      })]
    })]
  })
}
var R = function(e) {
  var t, l;
  let {
    onUnmount: R,
    quest: O
  } = e, v = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(O.id), [O]), L = s.useRef(R), M = s.useCallback(e => {
    e.stopPropagation()
  }, []), P = s.useCallback(e => {
    (0, f.trackQuestContentClicked)(O.id, C.QuestContent.ACTIVITY_PANEL, f.QuestContentCTA.OPEN_CONTEXT_MENU), (0, u.openContextMenuLazy)(e, async () => {
      let {
        QuestsEntryContextMenu: e
      } = await n.el("275986").then(n.bind(n, "275986"));
      return t => {
        var n;
        return (0, a.jsx)(e, {
          ...t,
          quest: O,
          questContent: C.QuestContent.ACTIVITY_PANEL,
          shouldShowDisclosure: (null === (n = O.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
        })
      }
    })
  }, [O]), D = s.useCallback(() => {
    (0, E.enrollInQuest)(O.id, {
      questContent: C.QuestContent.ACTIVITY_PANEL,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [O]), y = s.useCallback(() => {
    null != O && ((0, f.trackQuestContentClicked)(O.id, C.QuestContent.ACTIVITY_PANEL, f.QuestContentCTA.TRACK_PROGRESS), d.default.open(T.UserSettingsSections.INVENTORY))
  }, [O]), x = s.useCallback(() => {
    (0, f.trackQuestContentClicked)(O.id, C.QuestContent.ACTIVITY_PANEL, f.QuestContentCTA.LEARN_MORE), d.default.open(T.UserSettingsSections.INVENTORY)
  }, [O]), b = (0, m.useHandleClaimQuestsReward)({
    quest: O,
    location: C.QuestContent.ACTIVITY_PANEL
  });
  s.useEffect(() => {
    L.current = R
  }, [R]), s.useEffect(() => () => {
    var e;
    null === (e = L.current) || void 0 === e || e.call(L)
  }, []);
  let U = (0, h.useIsQuestExpired)(O),
    G = (null === (t = O.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    j = (null === (l = O.userStatus) || void 0 === l ? void 0 : l.completedAt) != null,
    w = (null == O ? void 0 : O.userStatus) == null || (0, I.isDismissed)(O.userStatus, C.QuestContent.ACTIVITY_PANEL);
  return w || U ? null : (0, a.jsxs)("div", {
    className: i(A.wrapper, {
      [A.wrapperQuestAccepted]: G
    }),
    onClick: M,
    onKeyPress: M,
    children: [(0, a.jsxs)("div", {
      className: A.utils,
      children: [G ? (0, a.jsx)(N, {
        quest: O
      }) : (0, a.jsx)(S.default, {
        textOpacity: .5
      }), (0, a.jsx)(o.Clickable, {
        className: A.submenuWrapper,
        onClick: P,
        children: (0, a.jsx)(c.default, {
          className: A.submenuIcon
        })
      })]
    }), !G && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(N, {
        quest: O
      }), (0, a.jsx)(o.Text, {
        className: A.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: g.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: O.config.messages.gameTitle,
          questReward: O.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: O.config.streamDurationRequirementMinutes
        })
      })]
    }), G && !j && (0, a.jsx)(p.default, {
      className: A.rewardTileWithInstructions,
      quest: O
    }), (0, a.jsxs)("div", {
      className: A.ctas,
      children: [!G && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Button, {
          className: A.cta,
          color: o.Button.Colors.PRIMARY,
          fullWidth: !0,
          size: o.Button.Sizes.SMALL,
          onClick: x,
          children: g.default.Messages.QUESTS_LEARN_MORE_V2
        }), (0, a.jsx)(o.Button, {
          className: A.cta,
          color: o.Button.Colors.GREEN,
          fullWidth: !0,
          onClick: D,
          size: o.Button.Sizes.SMALL,
          submitting: v,
          children: g.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), G && !j && (0, a.jsx)(o.Button, {
        className: A.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: y,
        size: o.Button.Sizes.SMALL,
        children: g.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
      }), j && (0, a.jsx)(o.Button, {
        className: A.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: b,
        size: o.Button.Sizes.SMALL,
        children: g.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      })]
    })]
  })
}