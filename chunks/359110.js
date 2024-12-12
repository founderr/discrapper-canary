r.d(n, {
    Kh: function () {
        return d;
    },
    ad: function () {
        return f;
    }
});
var i = r(512722),
    a = r.n(i),
    s = r(493683),
    o = r(727429),
    l = r(592125),
    u = r(703656),
    c = r(981631);
function d(e, n) {
    let r = l.Z.getChannel(e);
    if (null == r) return;
    let i = (0, o.e)(r);
    s.Z.preload(r.guild_id, r.id),
        (0, u.uL)(c.Z5c.CHANNEL(i, r.id), {
            openChannel: !0,
            ...n
        });
}
function f(e, n) {
    a()(null != e.parent_id, 'Thread must have a parent ID.');
    let r = (0, o.e)(e);
    (0, u.uL)(c.Z5c.CHANNEL(r, e.id), {
        openChannel: !0,
        ...n
    });
}
function _(e, n, r) {
    invariant(null != e.parent_id, 'Thread must have a parent ID.');
    let i = getGuildIdForGenericRedirect(e);
    transitionTo(Routes.CHANNEL(i, e.id, n), {
        openChannel: !0,
        ...r
    });
}
