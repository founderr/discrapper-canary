n.d(t, {
    J: function () {
        return o;
    }
}),
    n(47120);
var i = n(442837),
    s = n(592125),
    a = n(19780),
    l = n(977059),
    r = n(760373);
function o(e) {
    let { channelId: t, location: n } = e,
        { enabled: o } = (0, l.S)({ location: n });
    return (0, i.e7)(
        [a.Z, s.Z],
        () =>
            (function (e, t) {
                var n;
                let [i, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, s.Z];
                if (!t || null == e || i.getChannelId() !== e) return !1;
                let o = l.getChannel(e);
                if (null == o || o.isGuildStageVoice()) return !1;
                let c = null === (n = i.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
                return null != c && c !== r.Eg;
            })(t, o, [a.Z, s.Z]),
        [t, o]
    );
}
