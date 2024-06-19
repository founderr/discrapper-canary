n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(297821),
  r = n(481060),
  o = n(839963),
  c = n(139256),
  u = n(689938),
  d = n(849160);

function E(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: i
  } = e;
  return (0, s.jsxs)("div", {
    className: d.votesData,
    children: [t && (0, s.jsx)(a.T, {
      children: u.Z.Messages.POLL_ANSWER_VOTED_ARIA
    }), (0, s.jsxs)(r.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: [i, "%"]
    }), (0, s.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function _(e) {
  let {
    answer: t,
    isExpired: n,
    myAvatarUrl: i,
    canShowVoteCounts: a
  } = e, r = !0 === t.isSelected, o = !0 === t.didSelfVote, u = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.$w, {
      attachmentClassName: l()(d.attachment, {
        [d.attachmentWithResults]: a
      }),
      emojiClassName: d.emoji,
      media: t.pollMedia,
      fallback: (0, s.jsx)("div", {
        className: l()(d.attachment, d.mediaMissing)
      })
    }), r && (0, s.jsx)(c.ZY, {
      size: 40,
      isVictor: u,
      isExpired: n,
      className: d.selectedIcon
    }), a && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(E, {
        didSelfVote: o,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: o ? i : void 0
      }), (!n && o || u) && (0, s.jsx)(c.ZY, {
        size: 18,
        isVictor: u,
        isExpired: n,
        className: d.pollAnswerIcon
      })]
    })]
  })
}

function I(e) {
  let {
    isExpired: t,
    myAvatarUrl: n,
    answersInteraction: i,
    canShowVoteCounts: a,
    ...r
  } = e;
  return (0, s.jsx)(c.$e, {
    className: d.answersContainer,
    answerClassName: l()(d.answer, {
      [d.currentlyVoting]: i !== o.Y7.LIST
    }),
    myAvatarUrl: n,
    answersInteraction: i,
    renderAnswerContent: e => (0, s.jsx)(_, {
      answer: e,
      isExpired: t,
      myAvatarUrl: n,
      answersInteraction: i,
      canShowVoteCounts: a
    }),
    ...r
  })
}