e.d(t, {
    J: function () {
        return o;
    }
}),
    e(47120);
var r = e(442837),
    i = e(592125),
    u = e(19780),
    l = e(977059),
    a = e(760373);
function o(n) {
    let { channelId: t, location: e } = n,
        { enabled: o } = (0, l.S)({ location: e });
    return (0, r.e7)(
        [u.Z, i.Z],
        () =>
            (function (n, t) {
                var e;
                let [r, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, i.Z];
                if (!t || null == n || r.getChannelId() !== n) return !1;
                let o = l.getChannel(n);
                if (null == o || o.isGuildStageVoice()) return !1;
                let d = null === (e = r.getSecureFramesState()) || void 0 === e ? void 0 : e.version;
                return null != d && d !== a.Eg;
            })(t, o, [u.Z, i.Z]),
        [t, o]
    );
}
