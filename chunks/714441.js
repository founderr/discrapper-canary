t.d(n, {
    i: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060);
function o(e) {
    let {
        applicationName: n,
        onConfirm: o,
        onCancel: r
    } = e;
    return (0, a.openModalLazy)(async () => {
        let {ConfirmNoSharedServerSubscribeWarningModal: e} = await t.e('99809').then(t.bind(t, 525549));
        return t => (0, i.jsx)(e, {
            ...t,
            applicationName: n,
            onConfirm: o,
            onCancel: r
        });
    }, { modalKey: 'application-user-subscribe-no-shared-server-warning' });
}
