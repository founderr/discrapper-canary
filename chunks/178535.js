r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(607070),
    a = r(981631);
function s(e, n, r) {
    var s, o, l, u, c, d, f, _;
    let h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        key: null !== (o = null !== (s = n.key) && void 0 !== s ? s : h) && void 0 !== o ? o : 'modal',
        modal: e,
        animation: null !== (l = n.animation) && void 0 !== l ? l : i.Z.useReducedMotion ? a.fMv.FADE : a.fMv.SLIDE_UP,
        shouldPersistUnderModals: null !== (u = n.shouldPersistUnderModals) && void 0 !== u && u,
        props: r,
        backdropStyle: null !== (c = n.backdropStyle) && void 0 !== c ? c : null,
        backdropInstant: null !== (d = n.backdropInstant) && void 0 !== d && d,
        disableAnimation: null !== (f = n.disableAnimation) && void 0 !== f && f,
        closable: 'boolean' != typeof n.closable || n.closable,
        label: null !== (_ = n.label) && void 0 !== _ ? _ : '',
        callbacks: {}
    };
}
