"use strict";
n.r(t), n.d(t, {
  buildPlatformPollResources: function() {
    return i
  },
  getAvatarUrl: function() {
    return r
  }
}), n("627341");
var s = n("278074"),
  l = n("263568"),
  a = n("866454");

function i(e, t) {
  let n = (0, s.match)(t).with(l.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => a.normalStylesImageOnlyAnswers).otherwise(() => a.normalStylesDefault);
  return {
    styles: {
      loserSelected: n,
      normal: n,
      notVoted: n,
      selected: n,
      voted: a.votedStyles,
      victorSelected: a.victorStyles,
      victorNotSelected: a.victorStyles,
      normalVote: n
    }
  }
}

function r(e, t) {
  return e.getAvatarURL(t, 20, !1)
}