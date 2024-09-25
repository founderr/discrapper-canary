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
        { applicationId: n, activityChannelId: m, locationObject: I, analyticsLocations: T, componentId: g, commandOrigin: S, sectionName: A, source: v, partyId: N } = e,
        O = (0, _.Z)(),
        R = i.Z.getChannel(m),
        C = null == R ? void 0 : R.getGuildId(),
        y = null == C || '' === C,
        b = o.default.getCurrentUser();
    if (null == R || (y && !R.isPrivate()) || null == m || null == b) return Promise.resolve(!1);
    let L = u.ZP.getCurrentEmbeddedActivity();
    if (((null == L ? void 0 : L.applicationId) != null && (t = r.Z.getApplication(null == L ? void 0 : L.applicationId)), a.Z.getVoiceChannelId() === m && (null == L ? void 0 : L.applicationId) === n && (null == L ? void 0 : L.channelId) === a.Z.getVoiceChannelId())) return (0, h.Z)(C, m), Promise.resolve(!0);
    if (
        !(await (0, c.p)({
            applicationId: n,
            application: await (0, d.Z)(n, m),
            channel: R,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: O,
            user: b
        }))
    )
        return !1;
    let D = (0, E.Z)(R.id),
        M = p.wP.includes(R.type);
    if (D) {
        if (
            !(await (0, f.Z)({
                channelId: R.id,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, s.WS)(R) || !M) return !1;
    return (
        (0, l.cG)(m, n),
        await (0, l.af)({
            channelId: m,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: O,
            analyticsLocations: T,
            locationObject: I,
            componentId: g,
            commandOrigin: S,
            sectionName: A,
            source: v,
            partyId: N,
            forceCheckAuth: !1
        })
    );
}
