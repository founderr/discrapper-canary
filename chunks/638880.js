n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(812206),
    i = n(592125),
    a = n(944486),
    o = n(594174),
    s = n(595519),
    l = n(566620),
    u = n(317381),
    c = n(882347),
    d = n(224189),
    _ = n(574952),
    E = n(917107),
    f = n(89425),
    h = n(197386),
    p = n(701488);
async function m(e) {
    let t,
        { applicationId: n, activityChannelId: m, locationObject: I, analyticsLocations: T, componentId: g, sectionName: S, source: A, partyId: v } = e,
        N = (0, _.Z)(),
        O = i.Z.getChannel(m),
        R = null == O ? void 0 : O.getGuildId(),
        C = null == R || '' === R,
        y = o.default.getCurrentUser();
    if (null == O || (C && !O.isPrivate()) || null == m || null == y) return Promise.resolve(!1);
    let b = u.ZP.getCurrentEmbeddedActivity();
    if (((null == b ? void 0 : b.applicationId) != null && (t = r.Z.getApplication(null == b ? void 0 : b.applicationId)), a.Z.getVoiceChannelId() === m && (null == b ? void 0 : b.applicationId) === n && (null == b ? void 0 : b.channelId) === a.Z.getVoiceChannelId())) return (0, h.Z)(R, m), Promise.resolve(!0);
    if (
        !(await (0, c.p)({
            applicationId: n,
            application: await (0, d.Z)(n, m),
            channel: O,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: N,
            user: y
        }))
    )
        return !1;
    let L = (0, E.Z)(O.id),
        D = p.wP.includes(O.type);
    if (L) {
        if (
            !(await (0, f.Z)({
                channelId: O.id,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, s.WS)(O) || !D) return !1;
    return (
        (0, l.cG)(m, n),
        await (0, l.af)({
            channelId: m,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: N,
            analyticsLocations: T,
            locationObject: I,
            componentId: g,
            sectionName: S,
            source: A,
            partyId: v,
            forceCheckAuth: !1
        })
    );
}
