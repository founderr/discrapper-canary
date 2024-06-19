n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var a = n(332664),
  l = n(814249),
  i = n(531578),
  r = n(689938),
  o = n(549480);
let c = [{
  className: o.emojiThumbsUp,
  rating: i.aZ.GOOD,
  classNameSelected: o.selected
}, {
  className: o.emojiThumbsDown,
  rating: i.aZ.BAD,
  classNameSelected: o.selected
}];

function u(e) {
  let {
    transitionState: t,
    startRating: n,
    onClose: i,
    onSubmit: u
  } = e;
  return (0, s.jsx)(a.Z, {
    header: r.Z.Messages.SUMMARIES_FEEDBACK_HEADER,
    body: r.Z.Messages.SUMMARIES_FEEDBACK_BODY,
    problemTitle: r.Z.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,
    onSubmit: u,
    onClose: i,
    ratingConfigs: c,
    transitionState: t,
    problems: (0, l.iq)(),
    ratingsSelectorClassName: o.ratingsSelector,
    feedbackProblems: [l.R7.OTHER],
    otherKey: l.R7.OTHER,
    startRating: n,
    hideDontShowCheckbox: !0
  })
}