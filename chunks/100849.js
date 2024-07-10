n.d(i, {
    Z: function () {
        return S;
    }
});
var l = n(735250), s = n(470079), t = n(120356), o = n.n(t), a = n(442837), r = n(481060), d = n(717881), c = n(906732), u = n(199902), I = n(158776), f = n(543595), _ = n(785717), E = n(221292), m = n(981631), Z = n(501649), v = n(735393);
function S(e) {
    let {
            user: i,
            type: n,
            showActions: t,
            onClose: S
        } = e, x = (0, a.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(i.id)), h = (0, a.e7)([I.Z], () => I.Z.getActivities(i.id)), p = s.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), g = s.useMemo(() => x ? p.find(e => e.type === m.IIU.PLAYING) : null, [
            p,
            x
        ]), N = s.useMemo(() => p.filter(e => e !== g), [
            g,
            p
        ]), {
            analyticsLocations: T,
            newestAnalyticsLocation: C
        } = (0, c.ZP)(), {
            trackUserProfileAction: j,
            ...A
        } = (0, _.KZ)(), R = {
            location: {
                page: m.ZY5.USER_PROFILE,
                section: m.jXE.PROFILE_MODAL
            }
        };
    return (0, l.jsxs)(r.ScrollerThin, {
        className: v.listScroller,
        fade: !0,
        children: [
            x ? (0, l.jsx)(d.Z, {
                type: n,
                user: i,
                source: C,
                className: Z.userProfileActivity,
                showChannelDetails: n === f.Y.SIMPLIFIED_PROFILE,
                activity: g,
                actionColor: Z.actionColor,
                analyticsParams: R,
                showActions: t,
                onGameProfileOpened: S,
                onAction: () => {
                    j({ action: 'JOIN_ACTIVITY' }), (0, E.Ac)({
                        activityType: m.IIU.STREAMING,
                        activityName: null == g ? void 0 : g.name,
                        activityPlatform: null == g ? void 0 : g.platform,
                        activitySessionId: null == g ? void 0 : g.session_id,
                        applicationId: null == g ? void 0 : g.application_id,
                        analyticsLocations: T,
                        ...A
                    });
                }
            }) : null,
            N.map(e => (0, l.jsx)(d.Z, {
                type: n,
                activity: e,
                user: i,
                useStoreStream: !1,
                source: C,
                className: o()(Z.userProfileActivity, n === f.Y.SIMPLIFIED_PROFILE && Z.simplifiedProfileActivity),
                showChannelDetails: n === f.Y.SIMPLIFIED_PROFILE,
                actionColor: Z.actionColor,
                analyticsParams: R,
                showActions: t,
                onGameProfileOpened: S,
                onAction: () => {
                    j({ action: 'JOIN_ACTIVITY' }), (0, E.Ac)({
                        activityType: e.type,
                        activityName: e.name,
                        activityPlatform: e.platform,
                        activitySessionId: e.session_id,
                        applicationId: e.application_id,
                        analyticsLocations: T,
                        ...A
                    });
                }
            }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
        ]
    });
}
