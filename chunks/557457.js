n.d(t, {
    Wc: function () {
        return g;
    },
    Ye: function () {
        return E;
    },
    bp: function () {
        return m;
    },
    ml: function () {
        return p;
    },
    nG: function () {
        return _;
    },
    tR: function () {
        return f;
    }
});
var r = n(430824),
    i = n(19780),
    a = n(594174),
    s = n(626135),
    o = n(981631),
    l = n(37113),
    u = n(474936),
    c = n(65154),
    d = n(388032);
function f(e) {
    if (null == e) return;
    let t = e.maxResolution.type === c.uA.SOURCE ? l.LY.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, l.aW)(t);
    return (0, l.L9)(e.maxFrameRate) !== l.ws.FPS_5 && null == l.ND.find((e) => e.resolution === n && e.fps !== l.ws.FPS_5 && !h(e));
}
function _(e) {
    if (null == e) return;
    let t = (0, l.L9)(e.maxFrameRate);
    return null == l.ND.find((e) => e.fps === t && !h(e));
}
function h(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function p(e) {
    return e.type === c.uA.SOURCE ? d.intl.string(d.t.XjXqzs) : d.intl.formatToPlainString(d.t.TEOC0N, { resolution: e.height });
}
function m(e) {
    return d.intl.formatToPlainString(d.t.Qb44XF, { fps: e });
}
function g(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution
          };
}
function E(e, t, n) {
    var c, d, f;
    let _ = ((c = e), (d = t), (f = n), l.ND.find((e) => (null == e.preset || e.preset === c) && e.resolution === d && e.fps === f)),
        h = a.default.getCurrentUser(),
        p = i.Z.getGuildId(),
        m = null != p ? r.Z.getGuild(p) : null;
    s.default.track(o.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == h ? void 0 : h.premiumType,
        guild_premium_tier: null == m ? void 0 : m.premiumTier,
        stream_quality_user_premium_tier: (null == _ ? void 0 : _.quality) != null ? u.bg[_.quality] : null,
        stream_quality_guild_premium_tier: null == _ ? void 0 : _.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    });
}
