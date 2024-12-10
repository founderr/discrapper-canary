var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(317770);
let o = 'CONNECTIONS_GRID_MODAL_KEY';
class s extends a.Z {
    _initialize() {
        l.Z.subscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), l.Z.subscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    _terminate() {
        l.Z.unsubscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), l.Z.unsubscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    handleShow(e) {
        let { onComplete: t, excludedPlatformTypes: l, includedPlatformTypes: a, integrations: s, onCompleteApplication: c } = e;
        !(0, r.hasModalOpen)(o) &&
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e('28538').then(n.bind(n, 51299));
                return (n) =>
                    (0, i.jsx)(e, {
                        onComplete: t,
                        excludedPlatformTypes: l,
                        includedPlatformTypes: a,
                        integrations: s,
                        onCompleteApplication: c,
                        ...n
                    });
            });
    }
    handleHide() {
        (0, r.closeModal)(o);
    }
}
t.Z = new s();
