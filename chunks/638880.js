n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(812206),
    i = n(592125),
    a = n(944486),
    s = n(594174),
    o = n(595519),
    l = n(636449),
    u = n(566620),
    c = n(317381),
    d = n(882347),
    f = n(224189),
    _ = n(574952),
    p = n(917107),
    h = n(89425),
    m = n(197386),
    g = n(701488);
function E(e) {
    return (0, l.C)(() => v(e));
}
async function v(e) {
    let t,
        { applicationId: n, activityChannelId: l, locationObject: E, analyticsLocations: v, componentId: I, sectionName: T, source: b, partyId: S } = e,
        y = (0, _.Z)(),
        A = i.Z.getChannel(l),
        N = null == A ? void 0 : A.getGuildId(),
        C = null == N || '' === N,
        R = s.default.getCurrentUser();
    if (null == A || (C && !A.isPrivate()) || null == l || null == R) return Promise.resolve(!1);
    let O = c.ZP.getCurrentEmbeddedActivity();
    if (((null == O ? void 0 : O.applicationId) != null && (t = r.Z.getApplication(null == O ? void 0 : O.applicationId)), a.Z.getVoiceChannelId() === l && (null == O ? void 0 : O.applicationId) === n && (null == O ? void 0 : O.channelId) === a.Z.getVoiceChannelId())) return (0, m.Z)(N, l), Promise.resolve(!0);
    if (
        !(await (0, d.p)({
            applicationId: n,
            application: await (0, f.Z)(n, l),
            channel: A,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: y,
            user: R
        }))
    )
        return !1;
    let D = (0, p.Z)(A.id),
        L = g.wP.includes(A.type);
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
        (0, u.cG)(l, n),
        await (0, u.af)({
            channelId: l,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: y,
            analyticsLocations: v,
            locationObject: E,
            componentId: I,
            sectionName: T,
            source: b,
            partyId: S
        })
    );
}
