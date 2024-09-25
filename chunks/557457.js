n.d(t, {
    Wc: function () {
        return I;
    },
    Ye: function () {
        return T;
    },
    bp: function () {
        return m;
    },
    ml: function () {
        return p;
    },
    nG: function () {
        return E;
    },
    tR: function () {
        return _;
    }
});
var r = n(430824),
    i = n(19780),
    a = n(594174),
    o = n(626135),
    s = n(981631),
    l = n(37113),
    u = n(474936),
    c = n(65154),
    d = n(689938);
function _(e) {
    if (null == e) return;
    let t = e.maxResolution.type === c.uA.SOURCE ? l.LY.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, l.aW)(t);
    return (0, l.L9)(e.maxFrameRate) !== l.ws.FPS_5 && null == l.ND.find((e) => e.resolution === n && e.fps !== l.ws.FPS_5 && !f(e));
}
function E(e) {
    if (null == e) return;
    let t = (0, l.L9)(e.maxFrameRate);
    return null == l.ND.find((e) => e.fps === t && !f(e));
}
function f(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function h(e, t, n) {
    return l.ND.find((r) => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n);
}
function p(e) {
    return e.type === c.uA.SOURCE ? d.Z.Messages.SCREENSHARE_SOURCE : d.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: e.height });
}
function m(e) {
    return d.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: e });
}
function I(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution
          };
}
function T(e, t, n) {
    let l = h(e, t, n),
        c = a.default.getCurrentUser(),
        d = i.Z.getGuildId(),
        _ = null != d ? r.Z.getGuild(d) : null;
    o.default.track(s.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == c ? void 0 : c.premiumType,
        guild_premium_tier: null == _ ? void 0 : _.premiumTier,
        stream_quality_user_premium_tier: (null == l ? void 0 : l.quality) != null ? u.bg[l.quality] : null,
        stream_quality_guild_premium_tier: null == l ? void 0 : l.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    });
}
