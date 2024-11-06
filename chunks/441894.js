t.d(e, {
    J: function () {
        return o;
    }
}),
    t(47120);
var i = t(442837),
    r = t(592125),
    l = t(19780),
    u = t(977059),
    a = t(760373);
function o(n) {
    let { channelId: e, location: t } = n,
        { enabled: o } = (0, u.S)({ location: t });
    return (0, i.e7)(
        [l.Z, r.Z],
        () =>
            (function (n, e) {
                var t;
                let [i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.Z, r.Z];
                if (!e || null == n || i.getChannelId() !== n) return !1;
                let o = u.getChannel(n);
                if (null == o || o.isGuildStageVoice()) return !1;
                let d = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != d && d !== a.Eg;
            })(e, o, [l.Z, r.Z]),
        [e, o]
    );
}
