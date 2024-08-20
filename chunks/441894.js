t.d(n, {
    J: function () {
        return o;
    }
}),
    t(47120);
var i = t(442837),
    r = t(592125),
    u = t(19780),
    l = t(977059),
    a = t(760373);
function o(e) {
    let { channelId: n, location: t } = e,
        { enabled: o } = l.c.useExperiment({ location: t });
    return (0, i.e7)(
        [u.Z, r.Z],
        () =>
            (function (e, n) {
                var t;
                let [i, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, r.Z];
                if (!n || null == e || i.getChannelId() !== e) return !1;
                let o = l.getChannel(e);
                if (null == o || o.isGuildStageVoice()) return !1;
                let d = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != d && d > a.HK;
            })(n, o, [u.Z, r.Z]),
        [n, o]
    );
}
