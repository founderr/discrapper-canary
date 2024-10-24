n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(399606),
    a = n(595519),
    l = n(317381),
    r = n(917107),
    o = n(9145),
    c = n(918559);
function u(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: u,
            connectedActivity: d,
            activityPanelMode: h
        } = (0, s.cj)([l.ZP], () => {
            var e;
            let t = l.ZP.getConnectedActivityChannelId();
            return {
                connectedChannelId: t,
                connectedActivity: null != t && null !== (e = l.ZP.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
                activityPanelMode: l.ZP.getActivityPanelMode()
            };
        });
    if (!(0, a.NX)(u)) return null;
    let p = null == d ? void 0 : d.applicationId;
    return h !== c.Ez.PANEL || null == p
        ? null
        : null == u || null == d || (0, r.Z)(u) || null == p
          ? null
          : (0, i.jsx)(o.Z, {
                maxHeight: t,
                connectedChannelId: u,
                renderExternalHeader: n
            });
}
