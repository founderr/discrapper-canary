e.d(t, {
    F: function () {
        return s;
    }
});
var i = e(925549),
    o = e(475468),
    r = e(19780),
    l = e(944486),
    d = e(981631);
let s = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var n;
        if (!r.Z.isConnected()) return !1;
        let t = null !== (n = r.Z.getGuildId()) && void 0 !== n ? n : d.ME,
            e = l.Z.getChannelId(t);
        return (0, o.K)(t, e), i.Z.channelListScrollTo(t, r.Z.getChannelId()), !1;
    }
};
