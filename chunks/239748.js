e.d(t, {
    F: function () {
        return a;
    }
});
var i = e(925549),
    l = e(475468),
    o = e(19780),
    r = e(944486),
    u = e(981631);
let a = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var n;
        if (!o.Z.isConnected()) return !1;
        let t = null !== (n = o.Z.getGuildId()) && void 0 !== n ? n : u.ME,
            e = r.Z.getChannelId(t);
        return (0, l.K)(t, e), i.Z.channelListScrollTo(t, o.Z.getChannelId()), !1;
    }
};
