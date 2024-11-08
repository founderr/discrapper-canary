n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(812206),
    i = n(592125),
    a = n(944486),
    s = n(594174),
    o = n(595519),
    l = n(566620),
    u = n(317381),
    c = n(882347),
    d = n(224189),
    f = n(574952),
    _ = n(917107),
    h = n(89425),
    p = n(197386),
    m = n(701488);
async function g(e) {
    let t,
        { applicationId: n, activityChannelId: g, locationObject: E, analyticsLocations: v, componentId: I, sectionName: S, source: b, partyId: T } = e,
        y = (0, f.Z)(),
        A = i.Z.getChannel(g),
        N = null == A ? void 0 : A.getGuildId(),
        C = null == N || '' === N,
        R = s.default.getCurrentUser();
    if (null == A || (C && !A.isPrivate()) || null == g || null == R) return Promise.resolve(!1);
    let O = u.ZP.getCurrentEmbeddedActivity();
    if (((null == O ? void 0 : O.applicationId) != null && (t = r.Z.getApplication(null == O ? void 0 : O.applicationId)), a.Z.getVoiceChannelId() === g && (null == O ? void 0 : O.applicationId) === n && (null == O ? void 0 : O.channelId) === a.Z.getVoiceChannelId())) return (0, p.Z)(N, g), Promise.resolve(!0);
    if (
        !(await (0, c.p)({
            applicationId: n,
            application: await (0, d.Z)(n, g),
            channel: A,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: y,
            user: R
        }))
    )
        return !1;
    let D = (0, _.Z)(A.id),
        L = m.wP.includes(A.type);
    if (D) {
        if (
            !(await (0, h.Z)({
                channelId: A.id,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, o.WS)(A) || !L) return !1;
    return (
        (0, l.cG)(g, n),
        await (0, l.af)({
            channelId: g,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: y,
            analyticsLocations: v,
            locationObject: E,
            componentId: I,
            sectionName: S,
            source: b,
            partyId: T
        })
    );
}
