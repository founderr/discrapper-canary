n.d(t, {
  E: function() {
    return r
  },
  _: function() {
    return a
  }
}), n(627341);
var s = n(278074),
  i = n(263568),
  l = n(148163);

function a(e, t) {
  let n = (0, s.EQ)(t).with(i.C.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers).otherwise(() => l.normalStylesDefault);
  return {
    styles: {
      loserSelected: n,
      normal: n,
      notVoted: n,
      selected: n,
      voted: l.votedStyles,
      victorSelected: l.victorStyles,
      victorNotSelected: l.victorStyles,
      normalVote: n
    }
  }
}

function r(e, t) {
  return e.getAvatarURL(t, 20, !1)
}