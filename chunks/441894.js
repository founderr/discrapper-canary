t.d(n, {
    J: function () {
        return u;
    }
}),
    t(47120);
var i = t(442837),
    r = t(592125),
    a = t(19780),
    o = t(977059),
    l = t(760373);
function u(e) {
    let { channelId: n, location: t } = e,
        { enabled: u } = (0, o.S)({ location: t });
    return (0, i.e7)(
        [a.Z, r.Z],
        () =>
            (function (e, n) {
                var t;
                let [i, o] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, r.Z];
                if (!n || null == e || i.getChannelId() !== e) return !1;
                let u = o.getChannel(e);
                if (null == u || u.isGuildStageVoice()) return !1;
                let d = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != d && d > l.HK;
            })(n, u, [a.Z, r.Z]),
        [n, u]
    );
}
