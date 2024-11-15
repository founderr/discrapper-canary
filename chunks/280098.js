n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(267642),
    i = n(74538),
    a = n(474936);
function s(e, t, n, s) {
    if (null == e || (null == e.quality && null == e.guildPremiumTier) || (null == s ? void 0 : s.isHDStreamSplashed)) return !0;
    let o = !1;
    return null != e.quality && (e.quality === a.ys.HIGH_STREAMING_QUALITY ? (o = o || i.ZP.canStreamQuality(i.ZP.StreamQuality.HIGH, t)) : e.quality === a.ys.MID_STREAMING_QUALITY && (o = o || i.ZP.canStreamQuality(i.ZP.StreamQuality.MID, t))), null != e.guildPremiumTier && (o = o || (0, r.tb)(n, e.guildPremiumTier)), o;
}
