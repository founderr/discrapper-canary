n.d(t, {
    i: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var i = n(481060);
function a(e) {
    let { applicationName: t, onConfirm: a, onCancel: o } = e;
    return (0, i.openModalLazy)(
        async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await n.e('99809').then(n.bind(n, 525549));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    applicationName: t,
                    onConfirm: a,
                    onCancel: o
                });
        },
        { modalKey: 'application-user-subscribe-no-shared-server-warning' }
    );
}
