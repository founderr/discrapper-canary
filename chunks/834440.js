"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  c = n("915639"),
  f = n("433487"),
  E = n("815496"),
  h = n("448881"),
  _ = n("879364"),
  C = n("2973"),
  I = n("588025"),
  S = n("227231"),
  m = n("45198"),
  p = n("385416"),
  T = n("255697"),
  g = n("49111"),
  A = n("782340"),
  N = n("647439");

function R(e) {
  var t;
  let {
    quest: n
  } = e, l = (0, r.useStateFromStores)([c.default], () => c.default.locale), i = s.useMemo(() => new Date(n.config.expiresAt).toLocaleDateString(l, {
    dateStyle: "short"
  }), [n.config.expiresAt, l]), u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: N.heading,
    children: [(0, a.jsx)("img", {
      className: N.headingGameTile,
      alt: "",
      src: (0, S.getGameTileAssetUrl)(n.id)
    }), (0, a.jsxs)("div", {
      className: N.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: u ? A.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : A.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: u ? A.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: i
        }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: i
        })
      })]
    })]
  })
}
var O = function(e) {
  var t, l;
  let {
    onUnmount: c,
    quest: O
  } = e, v = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(O.id), [O]), L = s.useRef(c), M = s.useCallback(e => {
    e.stopPropagation()
  }, []), P = s.useCallback(e => {
    (0, E.trackQuestContentClicked)(O.id, I.QuestContent.ACTIVITY_PANEL, E.QuestContentCTA.OPEN_CONTEXT_MENU), (0, u.openContextMenuLazy)(e, async () => {
      let {
        QuestsEntryContextMenu: e
      } = await n.el("275986").then(n.bind(n, "275986"));
      return t => {
        var n;
        return (0, a.jsx)(e, {
          ...t,
          quest: O,
          questContent: I.QuestContent.ACTIVITY_PANEL,
          shouldShowDisclosure: (null === (n = O.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
        })
      }
    })
  }, [O]), D = s.useCallback(() => {
    (0, h.enrollInQuest)(O.id, I.QuestContent.ACTIVITY_PANEL)
  }, [O]), y = s.useCallback(() => {
    d.default.open(g.UserSettingsSections.INVENTORY)
  }, []), x = (0, p.useHandleClaimQuestsReward)({
    quest: O,
    location: I.QuestContent.ACTIVITY_PANEL
  });
  s.useEffect(() => {
    L.current = c
  }, [c]), s.useEffect(() => () => {
    var e;
    null === (e = L.current) || void 0 === e || e.call(L)
  }, []);
  let b = (0, _.useIsQuestExpired)(O),
    U = (null === (t = O.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    G = (null === (l = O.userStatus) || void 0 === l ? void 0 : l.completedAt) != null,
    j = (null == O ? void 0 : O.userStatus) == null || (0, S.isDismissed)(O.userStatus, I.QuestContent.ACTIVITY_PANEL);
  return j || b ? null : (0, a.jsxs)("div", {
    className: i(N.wrapper, {
      [N.wrapperQuestAccepted]: U
    }),
    onClick: M,
    onKeyPress: M,
    children: [(0, a.jsxs)("div", {
      className: N.utils,
      children: [U ? (0, a.jsx)(R, {
        quest: O
      }) : (0, a.jsx)(m.default, {
        textOpacity: .5
      }), (0, a.jsx)(o.Clickable, {
        className: N.submenuWrapper,
        onClick: P,
        children: (0, a.jsx)(f.default, {
          className: N.submenuIcon
        })
      })]
    }), !U && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(R, {
        quest: O
      }), (0, a.jsx)(o.Text, {
        className: N.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: A.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: O.config.messages.gameTitle,
          questReward: O.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: O.config.streamDurationRequirementMinutes
        })
      })]
    }), U && !G && (0, a.jsx)(T.default, {
      className: N.rewardTileWithInstructions,
      quest: O
    }), (0, a.jsxs)("div", {
      className: N.ctas,
      children: [!U && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Button, {
          className: N.cta,
          color: o.Button.Colors.PRIMARY,
          fullWidth: !0,
          size: o.Button.Sizes.SMALL,
          onClick: y,
          children: A.default.Messages.QUESTS_LEARN_MORE_V2
        }), (0, a.jsx)(o.Button, {
          className: N.cta,
          color: o.Button.Colors.GREEN,
          fullWidth: !0,
          onClick: D,
          size: o.Button.Sizes.SMALL,
          submitting: v,
          children: A.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), U && !G && (0, a.jsx)(o.Button, {
        className: N.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: y,
        size: o.Button.Sizes.SMALL,
        children: A.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
      }), G && (0, a.jsx)(o.Button, {
        className: N.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: x,
        size: o.Button.Sizes.SMALL,
        children: A.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      })]
    })]
  })
}