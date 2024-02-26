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
  c = n("915639"),
  f = n("433487"),
  E = n("815496"),
  h = n("448881"),
  _ = n("2973"),
  C = n("588025"),
  I = n("227231"),
  S = n("45198"),
  m = n("686098"),
  p = n("255697"),
  T = n("49111"),
  g = n("782340"),
  A = n("647439");

function N(e) {
  var t;
  let {
    quest: n
  } = e, l = (0, r.useStateFromStores)([c.default], () => c.default.locale), i = s.useMemo(() => new Date(n.config.expiresAt).toLocaleDateString(l, {
    dateStyle: "short"
  }), [n.config.expiresAt, l]), u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
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
        children: u ? g.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : g.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: u ? g.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: i
        }) : g.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: i
        })
      })]
    })]
  })
}
var R = function(e) {
  var t, l;
  let {
    onUnmount: c,
    quest: R
  } = e, O = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(R.id), [R]), v = s.useRef(c), L = s.useCallback(e => {
    e.stopPropagation()
  }, []), M = s.useCallback(e => {
    (0, E.trackQuestContentClicked)(R.id, C.QuestContent.ACTIVITY_PANEL, E.QuestContentCTA.OPEN_CONTEXT_MENU), (0, u.openContextMenuLazy)(e, async () => {
      let {
        QuestsEntryContextMenu: e
      } = await n.el("275986").then(n.bind(n, "275986"));
      return t => {
        var n;
        return (0, a.jsx)(e, {
          ...t,
          quest: R,
          questContent: C.QuestContent.ACTIVITY_PANEL,
          shouldShowDisclosure: (null === (n = R.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
        })
      }
    })
  }, [R]), P = s.useCallback(() => {
    (0, h.enrollInQuest)(R.id, C.QuestContent.ACTIVITY_PANEL)
  }, [R]), D = s.useCallback(() => {
    d.default.open(T.UserSettingsSections.INVENTORY)
  }, []), y = (0, m.useHandleClaimQuestsReward)(R, C.QuestContent.ACTIVITY_PANEL);
  s.useEffect(() => {
    v.current = c
  }, [c]), s.useEffect(() => () => {
    var e;
    null === (e = v.current) || void 0 === e || e.call(v)
  }, []);
  let x = (0, m.useIsQuestExpired)(R),
    b = (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    U = (null === (l = R.userStatus) || void 0 === l ? void 0 : l.completedAt) != null,
    G = (null == R ? void 0 : R.userStatus) == null || (0, I.isDismissed)(R.userStatus, C.QuestContent.ACTIVITY_PANEL);
  return G || x ? null : (0, a.jsxs)("div", {
    className: i(A.wrapper, {
      [A.wrapperQuestAccepted]: b
    }),
    onClick: L,
    onKeyPress: L,
    children: [(0, a.jsxs)("div", {
      className: A.utils,
      children: [b ? (0, a.jsx)(N, {
        quest: R
      }) : (0, a.jsx)(S.default, {
        textOpacity: .5
      }), (0, a.jsx)(o.Clickable, {
        className: A.submenuWrapper,
        onClick: M,
        children: (0, a.jsx)(f.default, {
          className: A.submenuIcon
        })
      })]
    }), !b && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(N, {
        quest: R
      }), (0, a.jsx)(o.Text, {
        className: A.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: g.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: R.config.messages.gameTitle,
          questReward: R.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: R.config.streamDurationRequirementMinutes
        })
      })]
    }), b && !U && (0, a.jsx)(p.default, {
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
          onClick: D,
          children: g.default.Messages.QUESTS_LEARN_MORE_V2
        }), (0, a.jsx)(o.Button, {
          className: A.cta,
          color: o.Button.Colors.GREEN,
          fullWidth: !0,
          onClick: P,
          size: o.Button.Sizes.SMALL,
          submitting: O,
          children: g.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), b && !U && (0, a.jsx)(o.Button, {
        className: A.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: D,
        size: o.Button.Sizes.SMALL,
        children: g.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
      }), U && (0, a.jsx)(o.Button, {
        className: A.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: y,
        size: o.Button.Sizes.SMALL,
        children: g.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      })]
    })]
  })
}