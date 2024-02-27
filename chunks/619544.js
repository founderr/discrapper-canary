"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("597287"),
  r = n("77078"),
  o = n("426490"),
  u = n("782340"),
  d = n("758888");

function c(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: l
  } = e;
  return (0, s.jsxs)("div", {
    className: d.votesData,
    children: [t && (0, s.jsx)(i.VisuallyHidden, {
      children: u.default.Messages.POLL_ANSWER_VOTED_ARIA
    }), (0, s.jsxs)(r.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: [l, "%"]
    }), (0, s.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function E(e) {
  let {
    answer: t,
    isExpired: n,
    myAvatarUrl: l,
    canShowVoteCounts: i
  } = e, r = !0 === t.isSelected, u = !0 === t.didSelfVote, E = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.PollMediaView, {
      attachmentClassName: a(d.attachment, {
        [d.attachmentWithResults]: i
      }),
      emojiClassName: d.emoji,
      media: t.pollMedia,
      fallback: (0, s.jsx)("div", {
        className: a(d.attachment, d.mediaMissing)
      })
    }), r && (0, s.jsx)(o.PollAnswerVotedIcon, {
      size: 40,
      isVictor: E,
      isExpired: n,
      className: d.selectedIcon
    }), i && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c, {
        didSelfVote: u,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: u ? l : void 0
      }), (!n && u || E) && (0, s.jsx)(o.PollAnswerVotedIcon, {
        size: 18,
        isVictor: E,
        isExpired: n,
        className: d.pollAnswerIcon
      })]
    })]
  })
}

function f(e) {
  let {
    isExpired: t,
    hasVoted: n,
    myAvatarUrl: l,
    answersInteraction: i,
    canShowVoteCounts: r,
    ...u
  } = e;
  return (0, s.jsx)(o.PollAnswers, {
    className: d.answersContainer,
    answerClassName: a(d.answer, {
      [d.currentlyVoting]: !n && !t
    }),
    myAvatarUrl: l,
    answersInteraction: i,
    renderAnswerContent: e => (0, s.jsx)(E, {
      answer: e,
      isExpired: t,
      myAvatarUrl: l,
      answersInteraction: i,
      canShowVoteCounts: r
    }),
    ...u
  })
}