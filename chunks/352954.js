e(411104);
var r = e(200651);
e(192379);
var i = e(481060),
    u = e(981631),
    o = e(388032);
n.Z = {
    openSecureFramesStreamVerification: function (t, n) {
        (0, i.openModalLazy)(async () => {
            let i = (await e.e('94904').then(e.bind(e, 660250))).default;
            return (e) =>
                (0, r.jsx)(i, {
                    streamKey: t,
                    channelId: n,
                    ...e
                });
        });
    },
    openSecureFramesUserVerificationModal: function (t, n, o, a) {
        o() &&
            (0, i.openModalLazy)(
                async () => {
                    let i = (await e.e('33397').then(e.bind(e, 963410))).default;
                    return (e) =>
                        (0, r.jsx)(i, {
                            userId: t,
                            channelId: n,
                            ...e
                        });
                },
                { contextKey: a === u.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT }
            );
    },
    openSecureFramesUpdateConfirmation: function (t) {
        let { title: n, subtitle: u, confirmText: a = o.intl.string(o.t['cY+Ooa']), onConfirm: l } = t;
        (0, i.openModalLazy)(async () => {
            let { ConfirmModal: t } = await Promise.resolve().then(e.bind(e, 481060));
            return (e) =>
                (0, r.jsx)(t, {
                    header: n,
                    confirmText: a,
                    cancelText: o.intl.string(o.t['ETE/oK']),
                    onConfirm: l,
                    ...e,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: u
                    })
                });
        });
    },
    handleSecureFramesUserVerificationLink: function (t) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
