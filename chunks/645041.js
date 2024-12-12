r.d(n, {
    FT: function () {
        return h;
    },
    Qd: function () {
        return p;
    }
});
var i = r(442837),
    a = r(704215),
    s = r(675478),
    o = r(581883),
    l = r(626135),
    u = r(915486),
    c = r(981631),
    d = r(921944),
    f = r(526761);
function _(e, n) {
    let r = o.Z.getDismissedGuildContent(n);
    return null != r && (0, u.jl)(r, e);
}
function h(e, n) {
    return (0, i.e7)([o.Z], () => _(e, n));
}
function p(e, n, r, i) {
    (0, s.PS)(
        n,
        (r) => {
            if (_(e, n)) return !1;
            r.dismissedGuildContent = (0, u.GV)(r.dismissedGuildContent, e);
        },
        f.fy.INFREQUENT_USER_ACTION
    ),
        r &&
            l.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: a.C[e],
                guild_id: n,
                action: null != i ? i : d.L.UNKNOWN
            });
}
