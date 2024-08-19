n.d(t, {
    Z: function () {
        return m;
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
    _ = n(574952),
    E = n(917107),
    f = n(89425),
    h = n(197386),
    p = n(701488);
async function m(e) {
    let t,
        { applicationId: n, activityChannelId: m, locationObject: I, analyticsLocations: T, componentId: g } = e,
        S = (0, _.Z)(),
        A = i.Z.getChannel(m),
        N = null == A ? void 0 : A.getGuildId(),
        v = null == N || '' === N,
        O = s.default.getCurrentUser();
    if (null == A || (v && !A.isPrivate()) || null == m || null == O) return Promise.resolve(!1);
    let R = u.ZP.getCurrentEmbeddedActivity();
    if (((null == R ? void 0 : R.applicationId) != null && (t = r.Z.getApplication(null == R ? void 0 : R.applicationId)), a.Z.getVoiceChannelId() === m && (null == R ? void 0 : R.applicationId) === n && (null == R ? void 0 : R.channelId) === a.Z.getVoiceChannelId())) return (0, h.Z)(N, m), Promise.resolve(!0);
    if (
        !(await (0, c.p)({
            applicationId: n,
            application: await (0, d.Z)(n, m),
            channel: A,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: S,
            user: O
        }))
    )
        return !1;
    let C = (0, E.Z)(A.id),
        y = p.wP.includes(A.type);
    if (C) {
        if (
            !(await (0, f.Z)({
                channelId: A.id,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, o.WS)(A, !1) || !y) return !1;
    return (
        (0, l.cG)(m, n),
        await (0, l.af)({
            channelId: m,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: S,
            analyticsLocations: T,
            locationObject: I,
            componentId: g
        })
    );
}
