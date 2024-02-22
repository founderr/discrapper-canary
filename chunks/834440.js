"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  E = n("448881"),
  h = n("2973"),
  _ = n("588025"),
  C = n("227231"),
  I = n("45198"),
  S = n("686098"),
  m = n("255697"),
  p = n("49111"),
  T = n("782340"),
  g = n("647439");

function A(e) {
  var t;
  let {
    quest: n
  } = e, l = (0, r.useStateFromStores)([c.default], () => c.default.locale), i = s.useMemo(() => new Date(n.config.expiresAt).toLocaleDateString(l, {
    dateStyle: "short"
  }), [n.config.expiresAt, l]), u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: g.heading,
    children: [(0, a.jsx)("img", {
      className: g.headingGameTile,
      alt: "",
      src: (0, C.getGameTileAssetUrl)(n.id)
    }), (0, a.jsxs)("div", {
      className: g.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: u ? T.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : T.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: u ? T.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: i
        }) : T.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: i
        })
      })]
    })]
  })
}
var N = function(e) {
  var t, l;
  let {
    onUnmount: c,
    quest: N
  } = e, R = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(N.id), [N]), O = s.useRef(c), v = s.useCallback(e => {
    e.stopPropagation()
  }, []), L = s.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        QuestsEntryContextMenu: e
      } = await n.el("275986").then(n.bind(n, "275986"));
      return t => {
        var n;
        return (0, a.jsx)(e, {
          ...t,
          quest: N,
          questContent: _.QuestContent.ACTIVITY_PANEL,
          shouldShowDisclosure: (null === (n = N.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
        })
      }
    })
  }, [N]), M = s.useCallback(() => {
    (0, E.enrollInQuest)(N.id, _.QuestContent.ACTIVITY_PANEL)
  }, [N]), P = s.useCallback(() => {
    d.default.open(p.UserSettingsSections.INVENTORY)
  }, []), D = (0, S.useHandleClaimQuestsReward)(N, _.QuestContent.ACTIVITY_PANEL);
  s.useEffect(() => {
    O.current = c
  }, [c]), s.useEffect(() => () => {
    var e;
    null === (e = O.current) || void 0 === e || e.call(O)
  }, []);
  let y = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    x = (null === (l = N.userStatus) || void 0 === l ? void 0 : l.completedAt) != null,
    b = (null == N ? void 0 : N.userStatus) == null || (0, C.isDismissed)(N.userStatus, _.QuestContent.ACTIVITY_PANEL);
  return b ? null : (0, a.jsxs)("div", {
    className: i(g.wrapper, {
      [g.wrapperQuestAccepted]: y
    }),
    onClick: v,
    onKeyPress: v,
    children: [(0, a.jsxs)("div", {
      className: g.utils,
      children: [y ? (0, a.jsx)(A, {
        quest: N
      }) : (0, a.jsx)(I.default, {
        textOpacity: .5
      }), (0, a.jsx)(o.Clickable, {
        className: g.submenuWrapper,
        onClick: L,
        children: (0, a.jsx)(f.default, {
          className: g.submenuIcon
        })
      })]
    }), !y && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(A, {
        quest: N
      }), (0, a.jsx)(o.Text, {
        className: g.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: T.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: N.config.messages.gameTitle,
          questReward: N.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: N.config.streamDurationRequirementMinutes
        })
      })]
    }), y && !x && (0, a.jsx)(m.default, {
      className: g.rewardTileWithInstructions,
      quest: N
    }), (0, a.jsxs)("div", {
      className: g.ctas,
      children: [!y && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Button, {
          className: g.cta,
          color: o.Button.Colors.PRIMARY,
          fullWidth: !0,
          size: o.Button.Sizes.SMALL,
          onClick: P,
          children: T.default.Messages.QUESTS_LEARN_MORE_V2
        }), (0, a.jsx)(o.Button, {
          className: g.cta,
          color: o.Button.Colors.GREEN,
          fullWidth: !0,
          onClick: M,
          size: o.Button.Sizes.SMALL,
          submitting: R,
          children: T.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), y && !x && (0, a.jsx)(o.Button, {
        className: g.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: P,
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
      }), x && (0, a.jsx)(o.Button, {
        className: g.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: D,
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      })]
    })]
  })
}