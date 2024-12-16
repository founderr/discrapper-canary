r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(812206),
    a = r(592125),
    s = r(944486),
    o = r(594174),
    l = r(595519),
    u = r(636449),
    c = r(566620),
    d = r(317381),
    f = r(882347),
    _ = r(16609),
    h = r(224189),
    p = r(574952),
    m = r(917107),
    g = r(89425),
    E = r(197386),
    v = r(701488);
function I(e) {
    return (0, u.C)(() => T(e));
}
async function T(e) {
    let n,
        { applicationId: r, activityChannelId: u, locationObject: I, analyticsLocations: T, componentId: b, sectionName: y, source: S, partyId: A } = e,
        N = (0, p.Z)(),
        C = a.Z.getChannel(u),
        R = null == C ? void 0 : C.getGuildId(),
        O = null == R || '' === R,
        D = o.default.getCurrentUser();
    if (null == C || (O && !C.isPrivate()) || null == u || null == D) return Promise.resolve(!1);
    let L = d.ZP.getCurrentEmbeddedActivity();
    if (((null == L ? void 0 : L.applicationId) != null && (n = i.Z.getApplication(null == L ? void 0 : L.applicationId)), s.Z.getVoiceChannelId() === u && null != L && L.applicationId === r && (0, _.p)(L.location) === s.Z.getVoiceChannelId())) return (0, E.Z)(R, u), Promise.resolve(!0);
    if (
        !(await (0, f.p)({
            applicationId: r,
            application: await (0, h.Z)(r, u),
            channel: C,
            currentEmbeddedApplication: n,
            embeddedActivitiesManager: N,
            user: D
        }))
    )
        return !1;
    let x = (0, m.Z)(C.id),
        w = v.wP.includes(C.type);
    if (x) {
        if (
            !(await (0, g.Z)({
                channelId: C.id,
                bypassChangeModal: null != n
            }))
        )
            return !1;
    } else if (!(0, l.WS)(C) || !w) return !1;
    return (
        (0, c.cG)(u),
        await (0, c.af)({
            channelId: u,
            applicationId: r,
            isStart: !1,
            embeddedActivitiesManager: N,
            analyticsLocations: T,
            locationObject: I,
            componentId: b,
            sectionName: y,
            source: S,
            partyId: A
        })
    );
}
