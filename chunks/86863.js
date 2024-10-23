n.d(t, {
    n: function () {
        return m;
    }
});
var i = n(200651),
    s = n(442837),
    a = n(481060),
    l = n(384275),
    r = n(468026),
    o = n(317381),
    c = n(513202),
    u = n(626135),
    d = n(981631),
    h = n(689938);
let m = (e) => {
    let { className: t, channel: n, user: m, application: p, oauth2Token: _ } = e,
        f = (0, s.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities());
    if (!m.bot || null == p) return null;
    function E() {
        l.Z.delete(_.id);
        let e = f.get(p.id);
        null != e &&
            c.Z.leaveActivity({
                channelId: e.channelId,
                applicationId: p.id
            });
    }
    return (0, i.jsx)(a.Button, {
        className: t,
        size: a.ButtonSizes.SMALL,
        color: a.Button.Colors.PRIMARY,
        onClick: () =>
            (function (e, t, n) {
                let s = h.Z.Messages.DELETE_APP_CONFIRM_MSG_V2.format({ applicationName: e.name });
                (0, a.openModal)((e) =>
                    (0, i.jsx)(r.default, {
                        title: h.Z.Messages.DEAUTHORIZE_APP,
                        body: s,
                        confirmText: h.Z.Messages.DEAUTHORIZE,
                        cancelText: h.Z.Messages.CANCEL,
                        onConfirm: t,
                        ...e
                    })
                ),
                    u.default.track(d.rMx.APP_MANAGE_CTA_CLICKED, {
                        application_id: e.id,
                        channel_id: n.id,
                        channel_type: n.type
                    });
            })(p, E, n),
        children: h.Z.Messages.MANAGE_APP
    });
};
