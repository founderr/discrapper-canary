var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    l = n(317770);
let s = 'CONNECTIONS_GRID_MODAL_KEY';
class o extends l.Z {
    _initialize() {
        a.Z.subscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), a.Z.subscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), a.Z.unsubscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    handleShow(e) {
        let { onComplete: t, excludedPlatformTypes: a, includedPlatformTypes: l, integrations: o, onCompleteApplication: c } = e;
        !(0, r.hasModalOpen)(s) &&
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e('28538').then(n.bind(n, 432990));
                return (n) =>
                    (0, i.jsx)(e, {
                        onComplete: t,
                        excludedPlatformTypes: a,
                        includedPlatformTypes: l,
                        integrations: o,
                        onCompleteApplication: c,
                        ...n
                    });
            });
    }
    handleHide() {
        (0, r.closeModal)(s);
    }
}
t.Z = new o();
