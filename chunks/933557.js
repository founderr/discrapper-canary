n.d(t, {
    F6: function () {
        return E;
    },
    ZP: function () {
        return p;
    },
    le: function () {
        return f;
    },
    mA: function () {
        return h;
    }
});
var r = n(47120);
var i = n(757143);
var a = n(442837),
    o = n(353926),
    s = n(699516),
    l = n(594174),
    u = n(823379),
    c = n(51144),
    d = n(981631),
    _ = n(689938);
function E(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    switch (e.type) {
        case d.d4z.DM:
            var a;
            let [o] = e.recipients.map(t.getUser).filter(u.lm);
            if (null == o) return '???';
            let s = n.getNickname(o.id),
                l = null !== (a = null != s ? s : c.ZP.getName(o)) && void 0 !== a ? a : '???';
            return r ? '@'.concat(l) : l;
        case d.d4z.GROUP_DM:
            if ('' !== e.name) return e.name;
            let E = e.recipients
                .map(t.getUser)
                .filter(u.lm)
                .map((e) => {
                    var t;
                    return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : c.ZP.getName(e);
                });
            if (E.length > 0) return E.join(', ');
            return _.Z.Messages.GROUP_DM_ALONE.format({ name: c.ZP.getName(t.getCurrentUser()) });
        case d.d4z.GUILD_ANNOUNCEMENT:
        case d.d4z.GUILD_TEXT:
        case d.d4z.GUILD_FORUM:
        case d.d4z.GUILD_MEDIA:
            if (r) return '#'.concat(e.name);
            return e.name;
        case d.d4z.PUBLIC_THREAD:
        case d.d4z.PRIVATE_THREAD:
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.GUILD_VOICE:
        case d.d4z.GUILD_STAGE_VOICE:
        case d.d4z.GUILD_CATEGORY:
            if (i) return '#"'.concat(f(e.name), '"');
            if (r && e.isThread()) return '"'.concat(e.name, '"');
            return e.name;
        default:
            return e.name;
    }
}
function f(e) {
    return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function h(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, a.e7)([l.default, o.Z, s.Z], () => (null == e ? null : E(e, l.default, s.Z, t)));
}
