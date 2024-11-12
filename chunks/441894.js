e.d(t, {
    J: function () {
        return o;
    }
}),
    e(47120);
var i = e(442837),
    r = e(592125),
    u = e(19780),
    l = e(977059),
    a = e(760373);
function o(n) {
    let { channelId: t, location: e } = n,
        { enabled: o } = (0, l.S)({ location: e });
    return (0, i.e7)(
        [u.Z, r.Z],
        () =>
            (function (n, t) {
                var e;
                let [i, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, r.Z];
                if (!t || null == n || i.getChannelId() !== n) return !1;
                let o = l.getChannel(n);
                if (null == o || o.isGuildStageVoice()) return !1;
                let d = null === (e = i.getSecureFramesState()) || void 0 === e ? void 0 : e.version;
                return null != d && d !== a.Eg;
            })(t, o, [u.Z, r.Z]),
        [t, o]
    );
}
