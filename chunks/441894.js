n.d(t, {
    J: function () {
        return l;
    }
}),
    n(47120);
var r = n(442837),
    i = n(592125),
    a = n(19780),
    o = n(977059),
    s = n(760373);
function l(e) {
    let { channelId: t, location: n } = e,
        { enabled: l } = (0, o.S)({ location: n });
    return (0, r.e7)(
        [a.Z, i.Z],
        () =>
            (function (e, t) {
                var n;
                let [r, o] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, i.Z];
                if (!t || null == e || r.getChannelId() !== e) return !1;
                let l = o.getChannel(e);
                if (null == l || l.isGuildStageVoice()) return !1;
                let u = null === (n = r.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
                return null != u && u > s.HK;
            })(t, l, [a.Z, i.Z]),
        [t, l]
    );
}
