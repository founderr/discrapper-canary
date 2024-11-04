e.d(t, {
    J: function () {
        return u;
    }
}),
    e(47120);
var i = e(442837),
    r = e(592125),
    l = e(19780),
    a = e(977059),
    o = e(760373);
function u(n) {
    let { channelId: t, location: e } = n,
        { enabled: u } = (0, a.S)({ location: e });
    return (0, i.e7)(
        [l.Z, r.Z],
        () =>
            (function (n, t) {
                var e;
                let [i, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.Z, r.Z];
                if (!t || null == n || i.getChannelId() !== n) return !1;
                let u = a.getChannel(n);
                if (null == u || u.isGuildStageVoice()) return !1;
                let d = null === (e = i.getSecureFramesState()) || void 0 === e ? void 0 : e.version;
                return null != d && d !== o.Eg;
            })(t, u, [l.Z, r.Z]),
        [t, u]
    );
}
