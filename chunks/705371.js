e.d(t, {
    l: function () {
        return s;
    }
});
var i = e(904245),
    l = e(181945),
    o = e(888369),
    r = e(375954),
    u = e(944486),
    a = e(914010),
    d = e(585483),
    E = e(981631);
let s = {
    binds: ['shift+esc'],
    comboKeysBindGlobal: !0,
    action() {
        let n = a.Z.getGuildId();
        if (null == n || !o.default.getGuildHasUnreadIgnoreMuted(n)) return;
        (0, l.Z)([n]);
        let t = u.Z.getChannelId(n);
        if (null != t) r.Z.getMessages(t).hasMoreAfter ? i.Z.jumpToPresent(t, E.AQB) : d.S.dispatch(E.CkL.SCROLLTO_PRESENT);
    }
};
