i.d(n, {
    Z: function () {
        return S;
    }
});
var o = i(735250), s = i(470079), t = i(120356), l = i.n(t), a = i(442837), r = i(481060), c = i(717881), d = i(906732), u = i(199902), I = i(158776), E = i(543595), f = i(785717), _ = i(221292), Z = i(981631), m = i(501649), v = i(735393);
function S(e) {
    let {
            user: n,
            type: i,
            showActions: t,
            onClose: S
        } = e, x = (0, a.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(n.id)), h = (0, a.e7)([I.Z], () => I.Z.getActivities(n.id)), N = s.useMemo(() => h.filter(e => e.type !== Z.IIU.CUSTOM_STATUS), [h]), g = s.useMemo(() => x ? N.find(e => e.type === Z.IIU.PLAYING) : null, [
            N,
            x
        ]), p = s.useMemo(() => N.filter(e => e !== g), [
            g,
            N
        ]), {
            analyticsLocations: C,
            newestAnalyticsLocation: T
        } = (0, d.ZP)(), {
            trackUserProfileAction: R,
            ...M
        } = (0, f.KZ)(), j = {
            location: {
                page: Z.ZY5.USER_PROFILE,
                section: Z.jXE.PROFILE_MODAL
            }
        };
    return (0, o.jsxs)(r.ScrollerThin, {
        className: v.listScroller,
        fade: !0,
        children: [
            x ? (0, o.jsx)(c.Z, {
                type: i,
                user: n,
                source: T,
                className: m.userProfileActivity,
                showChannelDetails: i === E.Y.SIMPLIFIED_PROFILE,
                activity: g,
                actionColor: m.actionColor,
                analyticsParams: j,
                showActions: t,
                onGameProfileOpened: S,
                onAction: () => {
                    R({ action: 'JOIN_ACTIVITY' }), (0, _.Ac)({
                        activityType: Z.IIU.STREAMING,
                        activityName: null == g ? void 0 : g.name,
                        activityPlatform: null == g ? void 0 : g.platform,
                        activitySessionId: null == g ? void 0 : g.session_id,
                        applicationId: null == g ? void 0 : g.application_id,
                        analyticsLocations: C,
                        ...M
                    });
                }
            }) : null,
            p.map(e => (0, o.jsx)(c.Z, {
                type: i,
                activity: e,
                user: n,
                useStoreStream: !1,
                source: T,
                className: l()(m.userProfileActivity, i === E.Y.SIMPLIFIED_PROFILE && m.simplifiedProfileActivity),
                showChannelDetails: i === E.Y.SIMPLIFIED_PROFILE,
                actionColor: m.actionColor,
                analyticsParams: j,
                showActions: t,
                onGameProfileOpened: S,
                onAction: () => {
                    R({ action: 'JOIN_ACTIVITY' }), (0, _.Ac)({
                        activityType: e.type,
                        activityName: e.name,
                        activityPlatform: e.platform,
                        activitySessionId: e.session_id,
                        applicationId: e.application_id,
                        analyticsLocations: C,
                        ...M
                    });
                }
            }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
        ]
    });
}
