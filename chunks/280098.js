r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(267642),
    a = r(74538),
    s = r(474936);
function o(e, n, r, o) {
    if (null == e || (null == e.quality && null == e.guildPremiumTier) || (null == o ? void 0 : o.isHDStreamSplashed)) return !0;
    let l = !1;
    return null != e.quality && (e.quality === s.ys.HIGH_STREAMING_QUALITY ? (l = l || a.ZP.canStreamQuality(a.ZP.StreamQuality.HIGH, n)) : e.quality === s.ys.MID_STREAMING_QUALITY && (l = l || a.ZP.canStreamQuality(a.ZP.StreamQuality.MID, n))), null != e.guildPremiumTier && (l = l || (0, i.tb)(r, e.guildPremiumTier)), l;
}
