n.d(t, {
    n: function () {
        return p;
    }
});
var i = n(735250),
    s = n(442837),
    a = n(481060),
    l = n(384275),
    r = n(468026),
    o = n(317381),
    c = n(513202),
    u = n(626135),
    d = n(981631),
    h = n(689938);
let p = (e) => {
    let { className: t, channel: n, user: p, application: m, oauth2Token: _ } = e,
        f = (0, s.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities());
    if (!p.bot || null == m) return null;
    function E() {
        l.Z.delete(_.id);
        let e = f.get(m.id);
        null != e &&
            c.Z.leaveActivity({
                channelId: e.channelId,
                applicationId: m.id
            });
    }
    return (0, i.jsx)(a.Button, {
        className: t,
        size: a.ButtonSizes.SMALL,
        color: a.Button.Colors.PRIMARY,
        onClick: () =>
            (function (e, t, n, s) {
                let l = h.Z.Messages.DELETE_APP_CONFIRM_MSG_V2.format({ applicationName: t });
                (0, a.openModal)((e) =>
                    (0, i.jsx)(r.default, {
                        title: h.Z.Messages.DEAUTHORIZE_APP,
                        body: l,
                        confirmText: h.Z.Messages.DEAUTHORIZE,
                        cancelText: h.Z.Messages.CANCEL,
                        onConfirm: n,
                        ...e
                    })
                ),
                    u.default.track(d.rMx.APP_MANAGE_CTA_CLICKED, {
                        application_id: e.id,
                        channel_id: s.id,
                        channel_type: s.type
                    });
            })(m, p.username, E, n),
        children: h.Z.Messages.MANAGE_APP
    });
};
