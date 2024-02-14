"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
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
  h = n("227231"),
  _ = n("45198"),
  C = n("686098"),
  I = n("255697"),
  S = n("49111"),
  m = n("782340"),
  p = n("647439");

function T(e) {
  var t;
  let {
    quest: n
  } = e, l = (0, r.useStateFromStores)([d.default], () => d.default.locale), i = s.useMemo(() => new Date(n.config.expiresAt).toLocaleDateString(l, {
    dateStyle: "short"
  }), [n.config.expiresAt, l]), u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: p.heading,
    children: [(0, a.jsx)("img", {
      className: p.headingGameTile,
      alt: "",
      src: (0, h.getGameTileAssetUrl)(n.id)
    }), (0, a.jsxs)("div", {
      className: p.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: u ? m.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE : m.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: u ? m.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: i
        }) : m.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: i
        })
      })]
    })]
  })
}
var g = function(e) {
  var t, n;
  let {
    onUnmount: l,
    quest: d
  } = e, h = (0, r.useStateFromStores)([E.default], () => E.default.isEnrolling(d.id), [d]), g = s.useRef(l), A = s.useCallback(e => {
    e.stopPropagation()
  }, []), N = s.useCallback(() => {}, []), R = s.useCallback(() => {
    (0, f.enrollInQuest)(d.id)
  }, [d]), O = s.useCallback(() => {
    u.default.open(S.UserSettingsSections.INVENTORY)
  }, []), v = (0, C.useHandleClaimQuestsReward)(d);
  s.useEffect(() => {
    g.current = l
  }, [l]), s.useEffect(() => () => {
    var e;
    null === (e = g.current) || void 0 === e || e.call(g)
  }, []);
  let L = (null === (t = d.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    M = (null === (n = d.userStatus) || void 0 === n ? void 0 : n.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: i(p.wrapper, {
      [p.wrapperQuestAccepted]: L
    }),
    onClick: A,
    onKeyPress: A,
    children: [(0, a.jsxs)("div", {
      className: p.utils,
      children: [L ? (0, a.jsx)(T, {
        quest: d
      }) : (0, a.jsx)(_.default, {
        textOpacity: .5
      }), (0, a.jsx)(o.Clickable, {
        className: p.submenuWrapper,
        onClick: N,
        children: (0, a.jsx)(c.default, {
          className: p.submenuIcon
        })
      })]
    }), !L && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(T, {
        quest: d
      }), (0, a.jsx)(o.Text, {
        className: p.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: m.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: d.config.messages.gameTitle,
          questReward: d.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: d.config.streamDurationRequirementMinutes
        })
      })]
    }), L && !M && (0, a.jsx)(I.default, {
      className: p.rewardTileWithInstructions,
      quest: d
    }), (0, a.jsxs)("div", {
      className: p.ctas,
      children: [!L && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Button, {
          className: p.cta,
          color: o.Button.Colors.PRIMARY,
          fullWidth: !0,
          size: o.Button.Sizes.SMALL,
          onClick: O,
          children: m.default.Messages.QUESTS_LEARN_MORE_V2
        }), (0, a.jsx)(o.Button, {
          className: p.cta,
          color: o.Button.Colors.GREEN,
          fullWidth: !0,
          onClick: R,
          size: o.Button.Sizes.SMALL,
          submitting: h,
          children: m.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), L && !M && (0, a.jsx)(o.Button, {
        className: p.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: O,
        size: o.Button.Sizes.SMALL,
        children: m.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
      }), M && (0, a.jsx)(o.Button, {
        className: p.cta,
        color: o.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: v,
        size: o.Button.Sizes.SMALL,
        children: m.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      })]
    })]
  })
}