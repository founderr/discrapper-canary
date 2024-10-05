t.d(e, {
    i: function () {
        return r;
    }
});
var l = t(735250);
t(470079);
var i = t(481060);
function r(n) {
    let { applicationName: e, onConfirm: r, onCancel: a } = n;
    return (0, i.openModalLazy)(
        async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: n } = await t.e('99809').then(t.bind(t, 525549));
            return (t) =>
                (0, l.jsx)(n, {
                    ...t,
                    applicationName: e,
                    onConfirm: r,
                    onCancel: a
                });
        },
        { modalKey: 'application-user-subscribe-no-shared-server-warning' }
    );
}
