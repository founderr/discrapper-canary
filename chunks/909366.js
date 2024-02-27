"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return S
  }
}), n("794252");
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("597287"),
  r = n("907002"),
  o = n("506838"),
  u = n("446674"),
  d = n("77078"),
  c = n("206230"),
  E = n("214400"),
  f = n("426490"),
  _ = n("782340"),
  T = n("997559");

function I(e) {
  let {
    percentage: t,
    label: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.Text, {
      variant: "text-xs/semibold",
      color: "none",
      children: n
    }), (0, s.jsxs)(d.Text, {
      variant: "text-md/bold",
      color: "none",
      children: [t, "%"]
    })]
  })
}

function m(e) {
  let {
    percentage: t
  } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), l = (0, r.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: n,
    config: 100 !== t && 0 !== t ? r.config.wobbly : r.config.default
  });
  return (0, s.jsx)(r.animated.span, {
    className: T.votePercentageBar,
    style: l,
    "aria-hidden": !0
  })
}

function N(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: l,
    isVictor: a,
    isExpired: i
  } = e;
  return (0, o.match)({
    answersInteraction: t,
    didSelfVote: l
  }).with({
    answersInteraction: E.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(f.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24
  })).with({
    answersInteraction: E.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(f.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20
  })).with({
    answersInteraction: E.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(f.PollAnswerVotedIcon, {
    isVictor: a,
    isExpired: i,
    size: 24
  })).otherwise(() => null)
}

function p(e) {
  let {
    answer: t,
    isExpired: n,
    hasVoted: l,
    answersInteraction: r
  } = e, o = l || n, u = !0 === t.isSelected, c = !0 === t.didSelfVote, E = !0 === t.isVictor;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: a(T.answerInner, {
        [T.currentlyVoting]: !l && !n,
        [T.selected]: u
      }),
      children: [o ? (0, s.jsx)(m, {
        percentage: t.votesPercentage
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(f.PollEmojiMediaView, {
        className: T.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(d.Text, {
        className: T.label,
        variant: "text-sm/semibold",
        color: "none",
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(i.VisuallyHidden, {
        children: _.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), o && (0, s.jsx)(I, {
        percentage: t.votesPercentage,
        label: t.votes
      }), (0, s.jsx)(N, {
        answersInteraction: r,
        isSelected: u,
        didSelfVote: c,
        isVictor: E,
        isExpired: n
      })]
    })
  })
}

function S(e) {
  let {
    hasVoted: t,
    isExpired: n,
    answersInteraction: l,
    ...a
  } = e;
  return (0, s.jsx)(f.PollAnswers, {
    className: T.answersContainer,
    answerClassName: T.answer,
    answersInteraction: l,
    renderAnswerContent: e => (0, s.jsx)(p, {
      answer: e,
      isExpired: n,
      hasVoted: t,
      answersInteraction: l
    }),
    ...a
  })
}