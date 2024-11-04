n.d(t, {
    n: function () {
        return m;
    }
});
var i = n(200651),
    l = n(442837),
    r = n(481060),
    s = n(384275),
    a = n(468026),
    o = n(317381),
    c = n(513202),
    u = n(626135),
    d = n(981631),
    h = n(388032);
let m = (e) => {
    let { className: t, channel: n, user: m, application: p, oauth2Token: f } = e,
        g = (0, l.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities());
    if (!m.bot || null == p) return null;
    function C() {
        s.Z.delete(f.id);
        let e = g.get(p.id);
        null != e &&
            c.Z.leaveActivity({
                channelId: e.channelId,
                applicationId: p.id
            });
    }
    return (0, i.jsx)(r.Button, {
        className: t,
        size: r.ButtonSizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: () =>
            (function (e, t, n) {
                let l = h.intl.formatToPlainString(h.t.QWGvxM, { applicationName: e.name });
                (0, r.openModal)((e) =>
                    (0, i.jsx)(a.default, {
                        title: h.intl.string(h.t.DT39Aw),
                        body: l,
                        confirmText: h.intl.string(h.t.xUqheH),
                        cancelText: h.intl.string(h.t['ETE/oK']),
                        onConfirm: t,
                        ...e
                    })
                ),
                    u.default.track(d.rMx.APP_MANAGE_CTA_CLICKED, {
                        application_id: e.id,
                        channel_id: n.id,
                        channel_type: n.type
                    });
            })(p, C, n),
        children: h.intl.string(h.t['5S3sQE'])
    });
};
