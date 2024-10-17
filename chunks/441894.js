t.d(n, {
    J: function () {
        return s;
    }
}),
    t(47120);
var i = t(442837),
    r = t(592125),
    o = t(19780),
    a = t(977059),
    u = t(760373);
function s(e) {
    let { channelId: n, location: t } = e,
        { enabled: s } = (0, a.S)({ location: t });
    return (0, i.e7)(
        [o.Z, r.Z],
        () =>
            (function (e, n) {
                var t;
                let [i, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.Z, r.Z];
                if (!n || null == e || i.getChannelId() !== e) return !1;
                let s = a.getChannel(e);
                if (null == s || s.isGuildStageVoice()) return !1;
                let l = null === (t = i.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
                return null != l && l !== u.Eg;
            })(n, s, [o.Z, r.Z]),
        [n, s]
    );
}
