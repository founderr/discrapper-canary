"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return T
  }
});
var s = n("37983");
n("884691");
var l = n("597287"),
  a = n("907002"),
  i = n("446674"),
  r = n("77078"),
  o = n("206230"),
  u = n("426490"),
  d = n("782340"),
  c = n("139583");

function f(e) {
  let {
    percentage: t,
    label: n
  } = e;
  return (0, s.jsxs)("div", {
    className: c.votesData,
    children: [(0, s.jsxs)(r.Text, {
      className: c.voteDataLine,
      variant: "text-md/semibold",
      color: "none",
      children: [t, "%"]
    }), (0, s.jsx)(r.Text, {
      className: c.voteDataLine,
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function E(e) {
  let {
    percentage: t
  } = e, n = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), l = (0, a.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: n,
    config: 100 !== t && 0 !== t ? a.config.wobbly : a.config.default
  });
  return (0, s.jsx)(a.animated.span, {
    className: c.votePercentageBar,
    style: l,
    "aria-hidden": !0
  })
}

function _(e) {
  let {
    answer: t,
    isExpired: n,
    hasVoted: a,
    myAvatarUrl: i
  } = e, o = a || n, _ = !0 === t.isSelected, T = !0 === t.didSelfVote, I = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: c.answerInner,
      children: [o ? (0, s.jsx)(E, {
        percentage: t.votesPercentage
      }) : null, (0, s.jsxs)("div", {
        className: c.answerContent,
        children: [(0, s.jsx)(u.PollMediaView, {
          attachmentClassName: c.attachment,
          containerClassName: c.mediaContainer,
          media: t.pollMedia,
          fallback: null
        }), (0, s.jsx)(r.Text, {
          className: c.label,
          variant: "text-sm/semibold",
          color: "none",
          children: t.pollMedia.text
        }), (_ || t.didSelfVote) && (0, s.jsx)(r.Avatar, {
          className: c.avatarForSelected,
          size: r.AvatarSizes.SIZE_20,
          src: i,
          "aria-hidden": !0
        }), t.didSelfVote && (0, s.jsx)(l.VisuallyHidden, {
          children: d.default.Messages.POLL_ANSWER_VOTED_ARIA
        }), o && (0, s.jsx)(f, {
          percentage: t.votesPercentage,
          label: t.votes
        })]
      })]
    }), !n && T && (0, s.jsx)(u.PollAnswerVotedIcon, {
      size: 18,
      className: c.pollAnswerIcon
    }), I && (0, s.jsx)(u.PollAnswerVictorIcon, {
      size: 18,
      className: c.pollAnswerIcon
    })]
  })
}

function T(e) {
  let {
    hasVoted: t,
    isExpired: n,
    myAvatarUrl: l,
    ...a
  } = e;
  return (0, s.jsx)(u.PollAnswers, {
    className: c.answersContainer,
    answerClassName: c.answer,
    myAvatarUrl: l,
    renderAnswerContent: e => (0, s.jsx)(_, {
      answer: e,
      isExpired: n,
      hasVoted: t,
      myAvatarUrl: l
    }),
    ...a
  })
}