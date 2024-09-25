t.d(n, {
    l: function () {
        return s;
    }
});
var i = t(904245),
    o = t(181945),
    l = t(888369),
    E = t(375954),
    r = t(944486),
    a = t(914010),
    u = t(585483),
    d = t(981631);
let s = {
    binds: ['shift+esc'],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.Z.getGuildId();
        if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, o.Z)([e]);
        let n = r.Z.getChannelId(e);
        if (null != n) E.Z.getMessages(n).hasMoreAfter ? i.Z.jumpToPresent(n, d.AQB) : u.S.dispatch(d.CkL.SCROLLTO_PRESENT);
    }
};
