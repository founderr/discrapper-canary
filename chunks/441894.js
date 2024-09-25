t.d(n, {
    J: function () {
        return d;
    }
}),
    t(47120);
var i = t(442837),
    r = t(592125),
    a = t(19780),
    s = t(977059),
    o = t(760373);
function d(e) {
    let { channelId: n, location: t } = e,
        { enabled: d } = (0, s.S)({ location: t });
    return (0, i.e7)(
        [a.Z, r.Z],
        () =>
            (function (e, n) {
                var t;
                let [i, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, r.Z];
                if (!n || null == e || i.getChannelId() !== e) return !1;
                let d = s.getChannel(e);
                if (null == d || d.isGuildStageVoice()) return !1;
                let l = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != l && l !== o.Eg;
            })(n, d, [a.Z, r.Z]),
        [n, d]
    );
}
