"use strict";
n.d(t, {
  ZP: function() {
    return h
  }
}), n(724458), n(653041), n(47120);
var i = n(658722),
  r = n.n(i),
  s = n(954955),
  o = n.n(s),
  a = n(339085),
  l = n(633302),
  u = n(626135),
  _ = n(697426),
  c = n(242291),
  d = n(981631);
let E = [],
  I = o()(function(e, t) {
    u.default.track(d.rMx.SEARCH_STARTED, {
      channel_id: t,
      search_type: d.aib.SOUNDBOARD,
      location_stack: e
    })
  }, 350),
  T = o()(function(e, t, n, i) {
    u.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
      search_type: d.aib.SOUNDBOARD,
      channel_id: n,
      query: i,
      total_results: e.length,
      location_stack: t
    })
  }, 350);

function h(e, t, n, i, s) {
  if (0 === e.length) return E;
  let o = t.reduce((e, t) => {
      for (let n of t.items) t.categoryInfo.type !== _.bg.FAVORITES && n.type === _.vB.SOUND && e.push(n.sound);
      return e
    }, []),
    u = o.reduce((t, o) => (I(s, null == i ? void 0 : i.id), t[o.soundId] = function(e, t, n, i) {
      var s;
      let o = 0,
        u = t.name.toLocaleLowerCase(),
        _ = null != t.emojiId ? a.Z.getCustomEmojiById(t.emojiId) : null,
        d = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
        E = null != d ? l.ZP.getByName(d) : null,
        I = null != _ ? [_.name] : null !== (s = null == E ? void 0 : E.names) && void 0 !== s ? s : [];
      return e === u && (o += 8), I.includes(e) && (o += 7), u.startsWith(e) && (o += 6), I.some(t => t.startsWith(e)) && (o += 5), u.endsWith(e) && (o += 4), I.some(t => t.endsWith(e)) && (o += 3), r()(e, t.name.toLocaleLowerCase()) && (o += 2), I.some(t => r()(e, t)) && (o += 1), o > 0 && (0, c.Nq)(n, t, i) && (o += 100), o
    }(e.toLocaleLowerCase(), o, n, i), t), {}),
    d = o.filter(e => u[e.soundId] > 0).sort((e, t) => u[t.soundId] - u[e.soundId]);
  return T(d, s, null == i ? void 0 : i.id, e), d
}