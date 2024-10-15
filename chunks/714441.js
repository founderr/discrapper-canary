t.d(n, {
    i: function () {
        return a;
    }
});
var l = t(735250);
t(470079);
var i = t(481060);
function a(e) {
    let { applicationName: n, onConfirm: a, onCancel: r } = e;
    return (0, i.openModalLazy)(
        async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await t.e('99809').then(t.bind(t, 525549));
            return (t) =>
                (0, l.jsx)(e, {
                    ...t,
                    applicationName: n,
                    onConfirm: a,
                    onCancel: r
                });
        },
        { modalKey: 'application-user-subscribe-no-shared-server-warning' }
    );
}
