n(411104);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(981631),
    u = n(388032);
e.Z = {
    openSecureFramesStreamVerification: function (t, e) {
        (0, i.openModalLazy)(async () => {
            let i = (await n.e('94904').then(n.bind(n, 660250))).default;
            return (n) =>
                (0, r.jsx)(i, {
                    streamKey: t,
                    channelId: e,
                    ...n
                });
        });
    },
    openSecureFramesUserVerificationModal: function (t, e, u, a) {
        u() &&
            (0, i.openModalLazy)(
                async () => {
                    let i = (await n.e('33397').then(n.bind(n, 963410))).default;
                    return (n) =>
                        (0, r.jsx)(i, {
                            userId: t,
                            channelId: e,
                            ...n
                        });
                },
                { contextKey: a === o.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT }
            );
    },
    openSecureFramesUpdateConfirmation: function (t) {
        let { title: e, subtitle: o, confirmText: a = u.intl.string(u.t['cY+Ooa']), onConfirm: c } = t;
        (0, i.openModalLazy)(async () => {
            let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
            return (n) =>
                (0, r.jsx)(t, {
                    header: e,
                    confirmText: a,
                    cancelText: u.intl.string(u.t['ETE/oK']),
                    onConfirm: c,
                    ...n,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o
                    })
                });
        });
    },
    handleSecureFramesUserVerificationLink: function (t) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
