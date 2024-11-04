t.d(n, {
    l: function () {
        return s;
    }
});
var l = t(904245),
    i = t(181945),
    o = t(888369),
    a = t(375954),
    u = t(944486),
    r = t(914010),
    d = t(585483),
    c = t(981631);
let s = {
    binds: ['shift+esc'],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.Z.getGuildId();
        if (null == e || !o.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, i.Z)([e]);
        let n = u.Z.getChannelId(e);
        if (null != n) a.Z.getMessages(n).hasMoreAfter ? l.Z.jumpToPresent(n, c.AQB) : d.S.dispatch(c.CkL.SCROLLTO_PRESENT);
    }
};
