"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("597287"),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("206230"),
  c = n("426490"),
  E = n("782340"),
  f = n("997559");

function _(e) {
  let {
    percentage: t,
    label: n
  } = e;
  return (0, s.jsxs)("div", {
    className: f.votesData,
    children: [(0, s.jsxs)(u.Text, {
      className: f.voteDataLine,
      variant: "text-md/semibold",
      color: "none",
      children: [t, "%"]
    }), (0, s.jsx)(u.Text, {
      className: f.voteDataLine,
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function T(e) {
  let {
    percentage: t
  } = e, n = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), l = (0, r.useSpring)({
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
    className: f.votePercentageBar,
    style: l,
    "aria-hidden": !0
  })
}

function I(e) {
  let {
    answer: t,
    isExpired: n,
    hasVoted: l,
    myAvatarUrl: r
  } = e, o = l || n, d = !0 === t.isSelected, I = !0 === t.didSelfVote, m = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: a(f.answerInner, {
        [f.currentlyVoting]: !l && !n
      }),
      children: [o ? (0, s.jsx)(T, {
        percentage: t.votesPercentage
      }) : null, (0, s.jsxs)("div", {
        className: f.answerContent,
        children: [(0, s.jsx)(c.PollMediaView, {
          attachmentClassName: f.attachment,
          containerClassName: f.mediaContainer,
          media: t.pollMedia,
          fallback: null
        }), (0, s.jsx)(u.Text, {
          className: f.label,
          variant: "text-sm/semibold",
          color: "none",
          children: t.pollMedia.text
        }), (d || t.didSelfVote) && (0, s.jsx)(u.Avatar, {
          className: f.avatarForSelected,
          size: u.AvatarSizes.SIZE_20,
          src: r,
          "aria-hidden": !0
        }), t.didSelfVote && (0, s.jsx)(i.VisuallyHidden, {
          children: E.default.Messages.POLL_ANSWER_VOTED_ARIA
        }), o && (0, s.jsx)(_, {
          percentage: t.votesPercentage,
          label: t.votes
        })]
      })]
    }), !n && I && (0, s.jsx)(c.PollAnswerVotedIcon, {
      size: 18,
      className: f.pollAnswerIcon
    }), m && (0, s.jsx)(c.PollAnswerVictorIcon, {
      size: 18,
      className: f.pollAnswerIcon
    })]
  })
}

function m(e) {
  let {
    hasVoted: t,
    isExpired: n,
    myAvatarUrl: l,
    ...a
  } = e;
  return (0, s.jsx)(c.PollAnswers, {
    className: f.answersContainer,
    answerClassName: f.answer,
    myAvatarUrl: l,
    renderAnswerContent: e => (0, s.jsx)(I, {
      answer: e,
      isExpired: n,
      hasVoted: t,
      myAvatarUrl: l
    }),
    ...a
  })
}