var r = n(192379),
    i = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(714338),
    l = n(857595),
    u = n(607070),
    c = n(627845),
    d = n(556296),
    f = n(5967),
    _ = n(13140),
    h = n(981631),
    p = n(420212);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key === p.mR.Tab && !t && !__OVERLAY__ && !(0, a.$s)() && c.Z.maybeShowKeyboardNavigationExplainerModal();
}
function g() {
    (0, l.rf)();
}
t.Z = function (e, t) {
    let n = (0, i.e7)([u.Z], () => u.Z.keyboardModeEnabled);
    (0, s.useFocusJumpSectionManager)(n);
    let a = (0, r.useCallback)(
        (e) => {
            !(function (e, t) {
                var n, r;
                let i = (0, f.VG)(null === (n = (0, f.uB)(e)) || void 0 === n ? void 0 : n.activeElement);
                if ((i && e.key !== p.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== p.mR.Tab && e.shiftKey)) return;
                let a = (function (e) {
                    let t = _.C$('shift'),
                        n = _.C$('tab');
                    if (e.key === p.mR.Tab && e.shiftKey && null != t && null != n)
                        return [
                            [h.MoX.KEYBOARD_KEY, t],
                            [h.MoX.KEYBOARD_KEY, n]
                        ];
                    let r = p.el.get(e.key);
                    if (null != r) {
                        let e = _.C$(r);
                        if (null != e) return [[h.MoX.KEYBOARD_KEY, e]];
                    }
                    return null;
                })(e);
                null != a && !d.Z.hasExactKeybind(a) && !o.Z.hasBind(null !== (r = _.H9(a[0])) && void 0 !== r ? r : '') && ((0, l.Qj)(), i && !t && e.preventDefault());
            })(e, t);
        },
        [t]
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n ? (e.addEventListener('mousedown', g), e.addEventListener('keydown', m)) : e.addEventListener('keydown', a),
                () => {
                    n ? (e.removeEventListener('mousedown', g), e.removeEventListener('keydown', m)) : e.removeEventListener('keydown', a);
                }
            ),
            [e, a, n]
        ),
        n
    );
};
