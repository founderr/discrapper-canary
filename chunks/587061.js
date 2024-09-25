var r = n(470079),
    i = n(442837),
    a = n(952265),
    o = n(481060),
    s = n(714338),
    l = n(857595),
    u = n(607070),
    c = n(627845),
    d = n(556296),
    _ = n(5967),
    E = n(13140),
    f = n(981631),
    h = n(420212);
function p(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key === h.mR.Tab && !t && !__OVERLAY__ && !(0, a.$s)() && c.Z.maybeShowKeyboardNavigationExplainerModal();
}
function m(e) {
    let t = E.C$('shift'),
        n = E.C$('tab');
    if (e.key === h.mR.Tab && e.shiftKey && null != t && null != n)
        return [
            [f.MoX.KEYBOARD_KEY, t],
            [f.MoX.KEYBOARD_KEY, n]
        ];
    let r = h.el.get(e.key);
    if (null != r) {
        let e = E.C$(r);
        if (null != e) return [[f.MoX.KEYBOARD_KEY, e]];
    }
    return null;
}
function I(e, t) {
    var n, r;
    let i = (0, _.VG)(null === (n = (0, _.uB)(e)) || void 0 === n ? void 0 : n.activeElement);
    if ((i && e.key !== h.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== h.mR.Tab && e.shiftKey)) return;
    let a = m(e);
    null != a && !d.Z.hasExactKeybind(a) && !s.Z.hasBind(null !== (r = E.H9(a[0])) && void 0 !== r ? r : '') && ((0, l.Qj)(), i && !t && e.preventDefault());
}
function T() {
    (0, l.rf)();
}
function g(e, t) {
    let n = (0, i.e7)([u.Z], () => u.Z.keyboardModeEnabled);
    (0, o.useFocusJumpSectionManager)(n);
    let a = (0, r.useCallback)(
        (e) => {
            I(e, t);
        },
        [t]
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n ? (e.addEventListener('mousedown', T), e.addEventListener('keydown', p)) : e.addEventListener('keydown', a),
                () => {
                    n ? (e.removeEventListener('mousedown', T), e.removeEventListener('keydown', p)) : e.removeEventListener('keydown', a);
                }
            ),
            [e, a, n]
        ),
        n
    );
}
t.Z = g;
