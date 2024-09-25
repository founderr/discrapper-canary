n.d(t, {
    ZP: function () {
        return M;
    }
});
var r = n(724458);
var i = n(653041);
var a = n(47120);
var o = n(658722),
    s = n.n(o),
    l = n(954955),
    u = n.n(l),
    c = n(339085),
    d = n(633302),
    _ = n(626135),
    E = n(697426),
    f = n(242291),
    h = n(981631);
let p = 100,
    m = 8,
    I = 7,
    T = 6,
    g = 5,
    S = 4,
    A = 3,
    v = 2,
    N = 1,
    O = [],
    R = 350,
    C = u()(b, R),
    y = u()(L, R);
function b(e, t) {
    _.default.track(h.rMx.SEARCH_STARTED, {
        channel_id: t,
        search_type: h.aib.SOUNDBOARD,
        location_stack: e
    });
}
function L(e, t, n, r) {
    _.default.track(h.rMx.SEARCH_RESULT_VIEWED, {
        search_type: h.aib.SOUNDBOARD,
        channel_id: n,
        query: r,
        total_results: e.length,
        location_stack: t
    });
}
function D(e, t, n, r) {
    var i;
    let a = 0,
        o = t.name.toLocaleLowerCase(),
        l = null != t.emojiId ? c.ZP.getCustomEmojiById(t.emojiId) : null,
        u = null != t.emojiName ? d.ZP.convertSurrogateToName(t.emojiName, !1) : null,
        _ = null != u ? d.ZP.getByName(u) : null,
        E = null != l ? [l.name] : null !== (i = null == _ ? void 0 : _.names) && void 0 !== i ? i : [];
    return e === o && (a += m), E.includes(e) && (a += I), o.startsWith(e) && (a += T), E.some((t) => t.startsWith(e)) && (a += g), o.endsWith(e) && (a += S), E.some((t) => t.endsWith(e)) && (a += A), s()(e, t.name.toLocaleLowerCase()) && (a += v), E.some((t) => s()(e, t)) && (a += N), a > 0 && (0, f.Nq)(n, t, r) && (a += p), a;
}
function M(e, t, n, r, i) {
    if (0 === e.length) return O;
    let a = t.reduce((e, t) => {
            for (let n of t.items) t.categoryInfo.type !== E.bg.FAVORITES && n.type === E.vB.SOUND && e.push(n.sound);
            return e;
        }, []),
        o = a.reduce((t, a) => (C(i, null == r ? void 0 : r.id), (t[a.soundId] = D(e.toLocaleLowerCase(), a, n, r)), t), {}),
        s = a.filter((e) => o[e.soundId] > 0).sort((e, t) => o[t.soundId] - o[e.soundId]);
    return y(s, i, null == r ? void 0 : r.id, e), s;
}
