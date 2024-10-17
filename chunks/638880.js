n.d(t, {
    Z: function () {
        return I;
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
async function I(e) {
    let t,
        { applicationId: n, activityChannelId: I, locationObject: m, analyticsLocations: T, componentId: S, sectionName: g, source: A, partyId: N } = e,
        R = (0, _.Z)(),
        O = i.Z.getChannel(I),
        v = null == O ? void 0 : O.getGuildId(),
        C = null == v || '' === v,
        L = s.default.getCurrentUser();
    if (null == O || (C && !O.isPrivate()) || null == I || null == L) return Promise.resolve(!1);
    let D = u.ZP.getCurrentEmbeddedActivity();
    if (((null == D ? void 0 : D.applicationId) != null && (t = r.Z.getApplication(null == D ? void 0 : D.applicationId)), a.Z.getVoiceChannelId() === I && (null == D ? void 0 : D.applicationId) === n && (null == D ? void 0 : D.channelId) === a.Z.getVoiceChannelId())) return (0, h.Z)(v, I), Promise.resolve(!0);
    if (
        !(await (0, c.p)({
            applicationId: n,
            application: await (0, d.Z)(n, I),
            channel: O,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: R,
            user: L
        }))
    )
        return !1;
    let y = (0, E.Z)(O.id),
        b = p.wP.includes(O.type);
    if (y) {
        if (
            !(await (0, f.Z)({
                channelId: O.id,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, o.WS)(O) || !b) return !1;
    return (
        (0, l.cG)(I, n),
        await (0, l.af)({
            channelId: I,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: R,
            analyticsLocations: T,
            locationObject: m,
            componentId: S,
            sectionName: g,
            source: A,
            partyId: N
        })
    );
}
