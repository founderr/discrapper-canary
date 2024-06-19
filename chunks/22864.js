l.d(t, {
  Z: function() {
    return u
  }
});
var a = l(348327),
  s = l.n(a),
  n = l(392711),
  r = l.n(n),
  i = l(442837),
  o = l(566006),
  d = l(542578),
  c = l(981631);

function u(e) {
  var t, l;
  let {
    channelId: a,
    messageId: n,
    reaction: u
  } = e, m = (0, i.e7)([d.Z], () => {
    let e = d.Z.getReactions(a, n, u.emoji, c.pTL, o.O.VOTE);
    return r().map(e, e => e)
  }, [a, n, u.emoji], s());
  return {
    reactors: m,
    hasMore: (null !== (l = null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== l ? l : 0) > m.length
  }
}