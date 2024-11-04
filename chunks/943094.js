n.d(t, {
    W: function () {
        return s;
    }
});
var i = n(481060),
    r = n(812206),
    a = n(710845),
    l = n(51025);
function s(e, t, s) {
    !(function (e, t) {
        let l = r.Z.getApplication(e);
        if (null == l) {
            new a.Z('DispatchUninstallActionCreators').log('Application not found for game '.concat(e));
            return;
        }
        (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e('70061').then(n.bind(n, 764998));
            return (n) =>
                e({
                    game: l,
                    onConfirmUninstall: t,
                    ...n
                });
        });
    })(e, () => (0, l.pC)(e, t, s));
}
