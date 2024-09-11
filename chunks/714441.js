t.d(n, {
    i: function () {
        return r;
    }
});
var l = t(735250);
t(470079);
var i = t(481060);
function r(e) {
    let { applicationName: n, onConfirm: r, onCancel: s } = e;
    return (0, i.openModalLazy)(
        async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await t.e('99809').then(t.bind(t, 525549));
            return (t) =>
                (0, l.jsx)(e, {
                    ...t,
                    applicationName: n,
                    onConfirm: r,
                    onCancel: s
                });
        },
        { modalKey: 'application-user-subscribe-no-shared-server-warning' }
    );
}
