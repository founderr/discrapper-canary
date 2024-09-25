n(411104);
var r = n(735250);
n(470079);
var E = n(481060),
    i = n(981631),
    a = n(689938);
t.Z = {
    openSecureFramesStreamVerification: function (e, t) {
        (0, E.openModalLazy)(async () => {
            let E = (await n.e('94904').then(n.bind(n, 660250))).default;
            return (n) =>
                (0, r.jsx)(E, {
                    streamKey: e,
                    channelId: t,
                    ...n
                });
        });
    },
    openSecureFramesUserVerificationModal: function (e, t, a, u) {
        a() &&
            (0, E.openModalLazy)(
                async () => {
                    let E = (await n.e('33397').then(n.bind(n, 963410))).default;
                    return (n) =>
                        (0, r.jsx)(E, {
                            userId: e,
                            channelId: t,
                            ...n
                        });
                },
                { contextKey: u === i.IlC.POPOUT ? E.POPOUT_MODAL_CONTEXT : E.DEFAULT_MODAL_CONTEXT }
            );
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: t, subtitle: i, confirmText: u = a.Z.Messages.CONFIRM, onConfirm: o } = e;
        (0, E.openModalLazy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
            return (n) =>
                (0, r.jsx)(e, {
                    header: t,
                    confirmText: u,
                    cancelText: a.Z.Messages.CANCEL,
                    onConfirm: o,
                    ...n,
                    children: (0, r.jsx)(E.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: i
                    })
                });
        });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
