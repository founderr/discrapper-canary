t.d(n, {
    i: function () {
        return r;
    }
});
var i = t(735250);
t(470079);
var a = t(481060);
function r(e) {
    let { applicationName: n, onConfirm: r, onCancel: o } = e;
    return (0, a.openModalLazy)(
        async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await t.e('99809').then(t.bind(t, 525549));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    applicationName: n,
                    onConfirm: r,
                    onCancel: o
                });
        },
        { modalKey: 'application-user-subscribe-no-shared-server-warning' }
    );
}
