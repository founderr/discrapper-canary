"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var a = l("348327"),
  n = l.n(a),
  s = l("392711"),
  r = l.n(s),
  i = l("442837"),
  o = l("566006"),
  d = l("542578"),
  u = l("981631");

function c(e) {
  var t, l;
  let {
    channelId: a,
    messageId: s,
    reaction: c
  } = e, m = (0, i.useStateFromStores)([d.default], () => {
    let e = d.default.getReactions(a, s, c.emoji, u.DEFAULT_NUM_REACTION_USERS, o.ReactionTypes.VOTE);
    return r().map(e, e => e)
  }, [a, s, c.emoji], n());
  return {
    reactors: m,
    hasMore: (null !== (l = null === (t = c.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== l ? l : 0) > m.length
  }
}