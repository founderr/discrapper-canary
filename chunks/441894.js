e.d(n, {
    J: function () {
        return l;
    }
}),
    e(47120);
var i = e(442837),
    r = e(592125),
    o = e(19780),
    a = e(977059),
    u = e(760373);
function l(t) {
    let { channelId: n, location: e } = t,
        { enabled: l } = (0, a.S)({ location: e });
    return (0, i.e7)(
        [o.Z, r.Z],
        () =>
            (function (t, n) {
                var e;
                let [i, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.Z, r.Z];
                if (!n || null == t || i.getChannelId() !== t) return !1;
                let l = a.getChannel(t);
                if (null == l || l.isGuildStageVoice()) return !1;
                let d = null === (e = i.getSecureFramesState()) || void 0 === e ? void 0 : e.version;
                return null != d && d !== u.Eg;
            })(n, l, [o.Z, r.Z]),
        [n, l]
    );
}
