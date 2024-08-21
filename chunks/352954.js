t(411104);
var r = t(735250);
t(470079);
var i = t(481060),
    u = t(689938);
n.Z = {
    openSecureFramesStreamVerification: function (e, n) {
        (0, i.openModalLazy)(async () => {
            let i = (await t.e('94904').then(t.bind(t, 660250))).default;
            return (t) =>
                (0, r.jsx)(i, {
                    streamKey: e,
                    channelId: n,
                    ...t
                });
        });
    },
    openSecureFramesUserVerificationModal: function (e, n, u) {
        u() &&
            (0, i.openModalLazy)(async () => {
                let i = (await t.e('33397').then(t.bind(t, 963410))).default;
                return (t) =>
                    (0, r.jsx)(i, {
                        userId: e,
                        channelId: n,
                        ...t
                    });
            });
    },
    openSecureFramesUpdateConfirmation: function (e) {
        let { title: n, subtitle: a, confirmText: E = u.Z.Messages.CONFIRM, onConfirm: o } = e;
        (0, i.openModalLazy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
            return (t) =>
                (0, r.jsx)(e, {
                    header: n,
                    confirmText: E,
                    cancelText: u.Z.Messages.CANCEL,
                    onConfirm: o,
                    ...t,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: a
                    })
                });
        });
    },
    handleSecureFramesUserVerificationLink: function (e) {
        throw Error('handleSecureFramesUserVerificationLink not implemented');
    }
};
