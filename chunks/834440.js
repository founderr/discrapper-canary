"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("79112"),
  d = n("915639"),
  c = n("433487"),
  f = n("448881"),
  E = n("2973"),
  _ = n("227231"),
  h = n("45198"),
  C = n("686098"),
  I = n("49111"),
  T = n("782340"),
  S = n("670375");

function m(e) {
  var t;
  let {
    quest: n
  } = e, l = (0, r.useStateFromStores)([d.default], () => d.default.locale), i = s.useMemo(() => new Date(n.config.expiresAt).toLocaleDateString(l, {
    dateStyle: "short"
  }), [n.config.expiresAt, l]), u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: S.heading,
    children: [(0, a.jsx)("img", {
      className: S.headingGameTile,
      alt: "",
      src: (0, _.getGameTileAssetUrl)(n.id)
    }), (0, a.jsxs)("div", {
      className: S.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: u ? T.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_HEADING_COMPLETE : T.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: u ? T.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_COMPLETE.format({
          expirationDate: i
        }) : T.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_INCOMPLETE.format({
          expirationDate: i
        })
      })]
    })]
  })
}
var p = function(e) {
  var t, n;
  let {
    onUnmount: l,
    quest: d
  } = e, p = (0, r.useStateFromStores)([E.default], () => E.default.isEnrolling(d.id), [d]), A = s.useRef(l), g = s.useCallback(e => {
    e.stopPropagation()
  }, []), N = s.useCallback(() => {}, []), R = s.useCallback(() => {
    (0, f.enrollInQuest)(d.id)
  }, [d]), O = s.useCallback(() => {
    u.default.open(I.UserSettingsSections.INVENTORY)
  }, []), L = (0, C.useHandleClaimQuestsReward)(d);
  s.useEffect(() => {
    A.current = l
  }, [l]), s.useEffect(() => () => {
    var e;
    null === (e = A.current) || void 0 === e || e.call(A)
  }, []);
  let v = (null === (t = d.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    M = (null === (n = d.userStatus) || void 0 === n ? void 0 : n.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: i(S.wrapper, {
      [S.wrapperQuestAccepted]: v
    }),
    onClick: g,
    onKeyPress: g,
    children: [(0, a.jsxs)("div", {
      className: S.utils,
      children: [v ? (0, a.jsx)(m, {
        quest: d
      }) : (0, a.jsx)(h.default, {
        opacity: .5
      }), (0, a.jsx)(o.Clickable, {
        className: S.submenuWrapper,
        onClick: N,
        children: (0, a.jsx)(c.default, {
          className: S.submenuIcon
        })
      })]
    }), !v && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m, {
        quest: d
      }), (0, a.jsx)(o.Text, {
        className: S.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: T.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: d.config.messages.gameTitle,
          questReward: d.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: d.config.streamDurationRequirementMinutes
        })
      })]
    }), v && !M && (0, a.jsxs)("div", {
      className: S.rewardWithInstructions,
      style: {
        color: d.config.colors.primary
      },
      children: [(0, a.jsx)("img", {
        alt: d.config.messages.rewardName,
        className: S.rewardTile,
        src: (0, _.getRewardAssetUrl)(d.id)
      }), (0, a.jsx)(o.Text, {
        className: S.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: T.default.Messages.QUESTS_ACCEPTED_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: d.config.messages.gameTitle,
          questReward: d.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: d.config.streamDurationRequirementMinutes
        })
      })]
    }), (0, a.jsxs)("div", {
      className: S.ctas,
      children: [!v && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Button, {
          className: S.cta,
          color: o.Button.Colors.PRIMARY,
          fullWidth: !0,
          size: o.Button.Sizes.SMALL,
          onClick: O,
          children: T.default.Messages.QUESTS_LEARN_MORE_V2
        }), (0, a.jsx)(o.Button, {
          className: S.cta,
          color: o.Button.Colors.GREEN,
          fullWidth: !0,
          onClick: R,
          size: o.Button.Sizes.SMALL,
          submitting: p,
          children: T.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), v && !M && (0, a.jsx)(o.Button, {
        className: S.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: O,
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
      }), M && (0, a.jsx)(o.Button, {
        className: S.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: L,
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      })]
    })]
  })
}