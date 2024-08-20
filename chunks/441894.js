n.d(t, {
    J: function () {
        return o;
    }
}),
    n(47120);
var i = n(442837),
    a = n(592125),
    s = n(19780),
    l = n(977059),
    r = n(760373);
function o(e) {
    let { channelId: t, location: n } = e,
        { enabled: o } = l.c.useExperiment({ location: n });
    return (0, i.e7)(
        [s.Z, a.Z],
        () =>
            (function (e, t) {
                var n;
                let [i, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Z, a.Z];
                if (!t || null == e || i.getChannelId() !== e) return !1;
                let o = l.getChannel(e);
                if (null == o || o.isGuildStageVoice()) return !1;
                let c = null === (n = i.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
                return null != c && c > r.HK;
            })(t, o, [s.Z, a.Z]),
        [t, o]
    );
}
