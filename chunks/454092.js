t.d(n, {
    _: function () {
        return d;
    },
    s: function () {
        return l;
    }
});
var i,
    l,
    r = t(668781),
    a = t(63063),
    o = t(981631),
    s = t(388032);
function d(e, n) {
    let t;
    0 === e ? (t = s.intl.format(s.t['/S6f5+'], {})) : 1 === e ? (t = s.intl.format(s.t.EBhv4e, { name: n })) : 2 === e && (t = s.intl.format(s.t['59Dbw8'], { name: n })),
        r.Z.show({
            title: s.intl.string(s.t.vElC9f),
            body: t,
            cancelText: s.intl.string(s.t.psXQHB),
            onCancel() {
                window.open(a.Z.getArticleURL(o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
            }
        });
}
((i = l || (l = {}))[(i.REMOVE_SELF = 0)] = 'REMOVE_SELF'), (i[(i.REMOVE_ROLE = 1)] = 'REMOVE_ROLE'), (i[(i.DENY_ROLE = 2)] = 'DENY_ROLE');
