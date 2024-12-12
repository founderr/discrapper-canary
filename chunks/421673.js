r.d(n, {
    YM: function () {
        return P;
    },
    cK: function () {
        return w;
    }
});
var i = r(724458);
var a = r(653041);
var s = r(47120);
var o = r(658722),
    l = r.n(o),
    u = r(954955),
    c = r.n(u),
    d = r(339085),
    f = r(633302),
    _ = r(626135),
    h = r(697426),
    p = r(242291),
    m = r(981631);
let g = 100,
    E = 8,
    v = 7,
    I = 6,
    T = 5,
    b = 4,
    y = 3,
    S = 2,
    A = 1,
    N = [],
    C = 350,
    R = c()(D, C),
    O = c()(L, C);
function D(e, n) {
    _.default.track(m.rMx.SEARCH_STARTED, {
        channel_id: n,
        search_type: m.aib.SOUNDBOARD,
        location_stack: e
    });
}
function L(e, n, r, i) {
    _.default.track(m.rMx.SEARCH_RESULT_VIEWED, {
        search_type: m.aib.SOUNDBOARD,
        channel_id: r,
        query: i,
        total_results: e.length,
        location_stack: n
    });
}
function x(e, n, r, i) {
    var a;
    let s = 0,
        o = n.name.toLocaleLowerCase(),
        u = null != n.emojiId ? d.ZP.getCustomEmojiById(n.emojiId) : null,
        c = null != n.emojiName ? f.ZP.convertSurrogateToName(n.emojiName, !1) : null,
        _ = null != c ? f.ZP.getByName(c) : null,
        h = null != u ? [u.name] : null !== (a = null == _ ? void 0 : _.names) && void 0 !== a ? a : [];
    return e === o && (s += E), h.includes(e) && (s += v), o.startsWith(e) && (s += I), h.some((n) => n.startsWith(e)) && (s += T), o.endsWith(e) && (s += b), h.some((n) => n.endsWith(e)) && (s += y), l()(e, n.name.toLocaleLowerCase()) && (s += S), h.some((n) => l()(e, n)) && (s += A), s > 0 && (0, p.Nq)(r, n, i) && (s += g), s;
}
function w(e, n, r, i, a) {
    let s = n.reduce((n, s) => (R(a, null == i ? void 0 : i.id), (n[s.soundId] = x(e.toLocaleLowerCase(), s, r, i)), n), {}),
        o = n.filter((e) => s[e.soundId] > 0).sort((e, n) => s[n.soundId] - s[e.soundId]);
    return O(o, a, null == i ? void 0 : i.id, e), o;
}
function P(e, n, r, i, a) {
    return 0 === e.length
        ? N
        : w(
              e,
              n.reduce((e, n) => {
                  for (let r of n.items) n.categoryInfo.type !== h.bg.FAVORITES && r.type === h.vB.SOUND && e.push(r.sound);
                  return e;
              }, []),
              r,
              i,
              a
          );
}
