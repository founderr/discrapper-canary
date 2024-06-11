"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var l = a("348327"),
  s = a.n(l),
  n = a("392711"),
  r = a.n(n),
  o = a("442837"),
  i = a("566006"),
  d = a("542578"),
  u = a("981631");

function c(e) {
  var t, a;
  let {
    channelId: l,
    messageId: n,
    reaction: c
  } = e, m = (0, o.useStateFromStores)([d.default], () => {
    let e = d.default.getReactions(l, n, c.emoji, u.DEFAULT_NUM_REACTION_USERS, i.ReactionTypes.VOTE);
    return r().map(e, e => e)
  }, [l, n, c.emoji], s());
  return {
    reactors: m,
    hasMore: (null !== (a = null === (t = c.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== a ? a : 0) > m.length
  }
}