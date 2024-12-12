r.d(n, {
    F4: function () {
        return E;
    },
    So: function () {
        return T;
    },
    mc: function () {
        return I;
    },
    vw: function () {
        return v;
    }
});
var i = r(314897),
    a = r(592125),
    s = r(430824),
    o = r(594174),
    l = r(979651),
    u = r(111361),
    c = r(386542),
    d = r(114064),
    f = r(1163),
    _ = r(474936),
    h = r(981631),
    p = r(37113);
function m() {
    let e = o.default.getCurrentUser();
    return null != e && !(0, u.I5)(e, _.p9.TIER_1);
}
function g() {
    var e;
    let n = null === (e = l.Z.getVoiceStateForUser(i.default.getId())) || void 0 === e ? void 0 : e.channelId;
    if (null == n) return !1;
    let r = a.Z.getChannel(n);
    if (null == r) return !1;
    let o = s.Z.getGuild(r.guild_id);
    return null != o && o.premiumTier >= h.Eu4.TIER_2;
}
function E() {
    let { enabled: e } = f.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return e && d.Z.shouldFetch() && m() && !g();
}
function v(e) {
    let { enabled: n } = f.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return n && d.Z.shouldActivate(e) && m() && !g();
}
function I(e, n) {
    return e === p.LY.RESOLUTION_720 && n !== p.ws.FPS_60;
}
function T(e) {
    let { activated: n } = (0, c.k)(e);
    return n;
}
