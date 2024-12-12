r.d(n, {
    FS: function () {
        return f;
    },
    Uw: function () {
        return p;
    },
    nC: function () {
        return _;
    },
    nU: function () {
        return m;
    },
    yv: function () {
        return g;
    }
});
var i = r(47120);
var a = r(683860),
    s = r(592125),
    o = r(430824),
    l = r(306680),
    u = r(710352),
    c = r(176505),
    d = r(388032);
function f(e, n) {
    let [r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.ZP];
    return {
        isNew: !e.isArchivedThread() && r.isNewForumThread(e.id, e.parent_id, n),
        hasUnreads: !e.isArchivedThread() && r.isForumPostUnread(e.id)
    };
}
function _(e) {
    let [n, r, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, o.Z, l.ZP],
        a = n.getChannel(e);
    if (null == a) return null;
    let u = r.getGuild(a.guild_id);
    return null == u ? null : f(a, u, [i]);
}
let h = () => ({
    minutes: d.t.nFt9cn,
    hours: d.t.jzCewc,
    days: d.t.U4I0s7,
    month: d.intl.string(d.t['nBNJ/P'])
});
function p(e, n) {
    if (n === u.R6.POSTED_DURATION_AGO && e === a.z.CREATION_DATE) return h;
}
function m(e, n) {
    let [r] = n,
        i = r.hasTrackedUnread(e),
        a = r.hasOpenedThread(e),
        s = null != r.getTrackedAckMessageId(e);
    return i && a && s;
}
function g(e) {
    var n;
    return (null === (n = s.Z.getChannel(e)) || void 0 === n ? void 0 : n.hasFlag(c.zZ.PINNED)) === !0;
}
