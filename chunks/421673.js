n.d(t, {
    ZP: function () {
        return m;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var r = n(658722),
    i = n.n(r),
    a = n(954955),
    s = n.n(a),
    o = n(339085),
    l = n(633302),
    u = n(626135),
    c = n(697426),
    d = n(242291),
    f = n(981631);
let _ = [],
    h = s()(function (e, t) {
        u.default.track(f.rMx.SEARCH_STARTED, {
            channel_id: t,
            search_type: f.aib.SOUNDBOARD,
            location_stack: e
        });
    }, 350),
    p = s()(function (e, t, n, r) {
        u.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
            search_type: f.aib.SOUNDBOARD,
            channel_id: n,
            query: r,
            total_results: e.length,
            location_stack: t
        });
    }, 350);
function m(e, t, n, r, a) {
    if (0 === e.length) return _;
    let s = t.reduce((e, t) => {
            for (let n of t.items) t.categoryInfo.type !== c.bg.FAVORITES && n.type === c.vB.SOUND && e.push(n.sound);
            return e;
        }, []),
        u = s.reduce(
            (t, s) => (
                h(a, null == r ? void 0 : r.id),
                (t[s.soundId] = (function (e, t, n, r) {
                    var a;
                    let s = 0,
                        u = t.name.toLocaleLowerCase(),
                        c = null != t.emojiId ? o.ZP.getCustomEmojiById(t.emojiId) : null,
                        f = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
                        _ = null != f ? l.ZP.getByName(f) : null,
                        h = null != c ? [c.name] : null !== (a = null == _ ? void 0 : _.names) && void 0 !== a ? a : [];
                    return e === u && (s += 8), h.includes(e) && (s += 7), u.startsWith(e) && (s += 6), h.some((t) => t.startsWith(e)) && (s += 5), u.endsWith(e) && (s += 4), h.some((t) => t.endsWith(e)) && (s += 3), i()(e, t.name.toLocaleLowerCase()) && (s += 2), h.some((t) => i()(e, t)) && (s += 1), s > 0 && (0, d.Nq)(n, t, r) && (s += 100), s;
                })(e.toLocaleLowerCase(), s, n, r)),
                t
            ),
            {}
        ),
        f = s.filter((e) => u[e.soundId] > 0).sort((e, t) => u[t.soundId] - u[e.soundId]);
    return p(f, a, null == r ? void 0 : r.id, e), f;
}
