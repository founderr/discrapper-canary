t.d(e, {
    J: function () {
        return d;
    }
}),
    t(47120);
var i = t(442837),
    l = t(592125),
    r = t(19780),
    u = t(977059),
    a = t(760373);
function d(n) {
    let { channelId: e, location: t } = n,
        { enabled: d } = (0, u.S)({ location: t });
    return (0, i.e7)(
        [r.Z, l.Z],
        () =>
            (function (n, e) {
                var t;
                let [i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Z, l.Z];
                if (!e || null == n || i.getChannelId() !== n) return !1;
                let d = u.getChannel(n);
                if (null == d || d.isGuildStageVoice()) return !1;
                let o = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != o && o !== a.Eg;
            })(e, d, [r.Z, l.Z]),
        [e, d]
    );
}
