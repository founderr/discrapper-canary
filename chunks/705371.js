e.d(t, {
    l: function () {
        return c;
    }
});
var i = e(904245),
    o = e(181945),
    r = e(888369),
    l = e(375954),
    d = e(944486),
    s = e(914010),
    u = e(585483),
    a = e(981631);
let c = {
    binds: ['shift+esc'],
    comboKeysBindGlobal: !0,
    action() {
        let n = s.Z.getGuildId();
        if (null == n || !r.default.getGuildHasUnreadIgnoreMuted(n)) return;
        (0, o.Z)([n]);
        let t = d.Z.getChannelId(n);
        if (null != t) l.Z.getMessages(t).hasMoreAfter ? i.Z.jumpToPresent(t, a.AQB) : u.S.dispatch(a.CkL.SCROLLTO_PRESENT);
    }
};
