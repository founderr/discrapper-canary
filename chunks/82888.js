n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(595519),
    s = n(317381),
    a = n(917107),
    o = n(9145),
    c = n(918559);
function u(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: u,
            connectedActivity: d,
            activityPanelMode: h
        } = (0, l.cj)([s.ZP], () => {
            var e;
            let t = s.ZP.getConnectedActivityChannelId();
            return {
                connectedChannelId: t,
                connectedActivity: null != t && null !== (e = s.ZP.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
                activityPanelMode: s.ZP.getActivityPanelMode()
            };
        });
    if (!(0, r.NX)(u)) return null;
    let m = null == d ? void 0 : d.applicationId;
    return h !== c.Ez.PANEL || null == m
        ? null
        : null == u || null == d || (0, a.Z)(u) || null == m
          ? null
          : (0, i.jsx)(o.Z, {
                maxHeight: t,
                connectedChannelId: u,
                renderExternalHeader: n
            });
}
