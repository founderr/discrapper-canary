t.d(n, {
    J: function () {
        return o;
    }
});
var i = t(442837), r = t(19780), a = t(977059), u = t(760373);
function o(e) {
    let {
            channelId: n,
            location: t
        } = e, o = a.c.useExperiment({ location: t });
    return (0, i.e7)([r.Z], () => function (e, n, t) {
        var i;
        let {enabled: a} = n;
        if (!a || null == e || r.Z.getChannelId() !== e)
            return !1;
        let o = null === (i = t.getSecureFramesState()) || void 0 === i ? void 0 : i.version;
        return null != o && o > u.HK;
    }(n, o, r.Z));
}
