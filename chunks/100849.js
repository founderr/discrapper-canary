t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(735250),
    s = t(470079),
    o = t(120356),
    l = t.n(o),
    r = t(442837),
    a = t(481060),
    c = t(717881),
    d = t(387903),
    u = t(906732),
    I = t(199902),
    _ = t(158776),
    f = t(785717),
    E = t(221292),
    m = t(981631),
    p = t(711298),
    x = t(431776);
function v(e) {
    let { user: n, type: t, showActions: o, onClose: v } = e,
        Z = (0, r.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(n.id)),
        h = (0, r.e7)([_.Z], () => _.Z.getActivities(n.id)),
        S = s.useMemo(() => h.filter((e) => e.type !== m.IIU.CUSTOM_STATUS), [h]),
        T = s.useMemo(() => (Z ? S.find((e) => e.type === m.IIU.PLAYING) : null), [S, Z]),
        A = s.useMemo(() => S.filter((e) => e !== T), [T, S]),
        { analyticsLocations: g, newestAnalyticsLocation: N } = (0, u.ZP)(),
        { context: b, trackUserProfileAction: j } = (0, f.KZ)(),
        L = {
            location: {
                page: m.ZY5.USER_PROFILE,
                section: m.jXE.PROFILE_MODAL
            }
        };
    return (0, i.jsxs)(a.ScrollerThin, {
        className: x.listScroller,
        fade: !0,
        children: [
            Z
                ? (0, i.jsx)(c.Z, {
                      type: t,
                      user: n,
                      source: N,
                      className: p.userProfileActivity,
                      showChannelDetails: t === d.Y.SIMPLIFIED_PROFILE,
                      activity: T,
                      actionColor: p.actionColor,
                      analyticsParams: L,
                      showActions: o,
                      onClose: v,
                      onAction: () => {
                          j({ action: 'JOIN_ACTIVITY' }),
                              (0, E.Ac)({
                                  activityType: m.IIU.STREAMING,
                                  activityName: null == T ? void 0 : T.name,
                                  activityPlatform: null == T ? void 0 : T.platform,
                                  activitySessionId: null == T ? void 0 : T.session_id,
                                  applicationId: null == T ? void 0 : T.application_id,
                                  analyticsLocations: g,
                                  ...b
                              });
                      }
                  })
                : null,
            A.map((e) =>
                (0, i.jsx)(
                    c.Z,
                    {
                        type: t,
                        activity: e,
                        user: n,
                        useStoreStream: !1,
                        source: N,
                        className: l()(p.userProfileActivity, t === d.Y.SIMPLIFIED_PROFILE && p.simplifiedProfileActivity),
                        showChannelDetails: t === d.Y.SIMPLIFIED_PROFILE,
                        actionColor: p.actionColor,
                        analyticsParams: L,
                        showActions: o,
                        onClose: v,
                        onAction: () => {
                            j({ action: 'JOIN_ACTIVITY' }),
                                (0, E.Ac)({
                                    activityType: e.type,
                                    activityName: e.name,
                                    activityPlatform: e.platform,
                                    activitySessionId: e.session_id,
                                    applicationId: e.application_id,
                                    analyticsLocations: g,
                                    ...b
                                });
                        }
                    },
                    ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)
                )
            )
        ]
    });
}
