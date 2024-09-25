t.d(n, {
    F: function () {
        return a;
    }
});
var i = t(925549),
    o = t(475468),
    l = t(19780),
    E = t(944486),
    r = t(981631);
let a = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!l.Z.isConnected()) return !1;
        let n = null !== (e = l.Z.getGuildId()) && void 0 !== e ? e : r.ME,
            t = E.Z.getChannelId(n);
        return (0, o.K)(n, t), i.Z.channelListScrollTo(n, l.Z.getChannelId()), !1;
    }
};
