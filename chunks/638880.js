r.d(n, {
    Z: function () {
        return v;
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
    _ = r(224189),
    h = r(574952),
    p = r(917107),
    m = r(89425),
    g = r(197386),
    E = r(701488);
function v(e) {
    return (0, u.C)(() => I(e));
}
async function I(e) {
    let n,
        { applicationId: r, activityChannelId: u, locationObject: v, analyticsLocations: I, componentId: T, sectionName: b, source: y, partyId: S } = e,
        A = (0, h.Z)(),
        N = a.Z.getChannel(u),
        C = null == N ? void 0 : N.getGuildId(),
        R = null == C || '' === C,
        O = o.default.getCurrentUser();
    if (null == N || (R && !N.isPrivate()) || null == u || null == O) return Promise.resolve(!1);
    let D = d.ZP.getCurrentEmbeddedActivity();
    if (((null == D ? void 0 : D.applicationId) != null && (n = i.Z.getApplication(null == D ? void 0 : D.applicationId)), s.Z.getVoiceChannelId() === u && (null == D ? void 0 : D.applicationId) === r && (null == D ? void 0 : D.channelId) === s.Z.getVoiceChannelId())) return (0, g.Z)(C, u), Promise.resolve(!0);
    if (
        !(await (0, f.p)({
            applicationId: r,
            application: await (0, _.Z)(r, u),
            channel: N,
            currentEmbeddedApplication: n,
            embeddedActivitiesManager: A,
            user: O
        }))
    )
        return !1;
    let L = (0, p.Z)(N.id),
        x = E.wP.includes(N.type);
    if (L) {
        if (
            !(await (0, m.Z)({
                channelId: N.id,
                bypassChangeModal: null != n
            }))
        )
            return !1;
    } else if (!(0, l.WS)(N) || !x) return !1;
    return (
        (0, c.cG)(u, r),
        await (0, c.af)({
            channelId: u,
            applicationId: r,
            isStart: !1,
            embeddedActivitiesManager: A,
            analyticsLocations: I,
            locationObject: v,
            componentId: T,
            sectionName: b,
            source: y,
            partyId: S
        })
    );
}
