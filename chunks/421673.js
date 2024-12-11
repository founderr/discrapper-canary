n.d(t, {
    YM: function () {
        return g;
    },
    cK: function () {
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
    p = s()(function (e, t) {
        u.default.track(f.rMx.SEARCH_STARTED, {
            channel_id: t,
            search_type: f.aib.SOUNDBOARD,
            location_stack: e
        });
    }, 350),
    h = s()(function (e, t, n, r) {
        u.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
            search_type: f.aib.SOUNDBOARD,
            channel_id: n,
            query: r,
            total_results: e.length,
            location_stack: t
        });
    }, 350);
function m(e, t, n, r, a) {
    let s = t.reduce(
            (t, s) => (
                p(a, null == r ? void 0 : r.id),
                (t[s.soundId] = (function (e, t, n, r) {
                    var a;
                    let s = 0,
                        u = t.name.toLocaleLowerCase(),
                        c = null != t.emojiId ? o.ZP.getCustomEmojiById(t.emojiId) : null,
                        f = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
                        _ = null != f ? l.ZP.getByName(f) : null,
                        p = null != c ? [c.name] : null !== (a = null == _ ? void 0 : _.names) && void 0 !== a ? a : [];
                    return e === u && (s += 8), p.includes(e) && (s += 7), u.startsWith(e) && (s += 6), p.some((t) => t.startsWith(e)) && (s += 5), u.endsWith(e) && (s += 4), p.some((t) => t.endsWith(e)) && (s += 3), i()(e, t.name.toLocaleLowerCase()) && (s += 2), p.some((t) => i()(e, t)) && (s += 1), s > 0 && (0, d.Nq)(n, t, r) && (s += 100), s;
                })(e.toLocaleLowerCase(), s, n, r)),
                t
            ),
            {}
        ),
        u = t.filter((e) => s[e.soundId] > 0).sort((e, t) => s[t.soundId] - s[e.soundId]);
    return h(u, a, null == r ? void 0 : r.id, e), u;
}
function g(e, t, n, r, i) {
    return 0 === e.length
        ? _
        : m(
              e,
              t.reduce((e, t) => {
                  for (let n of t.items) t.categoryInfo.type !== c.bg.FAVORITES && n.type === c.vB.SOUND && e.push(n.sound);
                  return e;
              }, []),
              n,
              r,
              i
          );
}
