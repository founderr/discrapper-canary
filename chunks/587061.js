var i = r(192379),
    a = r(442837),
    s = r(952265),
    o = r(481060),
    l = r(714338),
    u = r(857595),
    c = r(607070),
    d = r(627845),
    f = r(556296),
    _ = r(5967),
    h = r(13140),
    p = r(981631),
    m = r(420212);
function g(e) {
    let n = e.ctrlKey || e.altKey || e.metaKey;
    e.key === m.mR.Tab && !n && !__OVERLAY__ && !(0, s.$s)() && d.Z.maybeShowKeyboardNavigationExplainerModal();
}
function E(e) {
    let n = h.C$('shift'),
        r = h.C$('tab');
    if (e.key === m.mR.Tab && e.shiftKey && null != n && null != r)
        return [
            [p.MoX.KEYBOARD_KEY, n],
            [p.MoX.KEYBOARD_KEY, r]
        ];
    let i = m.el.get(e.key);
    if (null != i) {
        let e = h.C$(i);
        if (null != e) return [[p.MoX.KEYBOARD_KEY, e]];
    }
    return null;
}
function v(e, n) {
    var r, i;
    let a = (0, _.VG)(null === (r = (0, _.uB)(e)) || void 0 === r ? void 0 : r.activeElement);
    if ((a && e.key !== m.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== m.mR.Tab && e.shiftKey)) return;
    let s = E(e);
    null != s && !f.Z.hasExactKeybind(s) && !l.Z.hasBind(null !== (i = h.H9(s[0])) && void 0 !== i ? i : '') && ((0, u.Qj)(), a && !n && e.preventDefault());
}
function I() {
    (0, u.rf)();
}
function T(e, n) {
    let r = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled);
    (0, o.useFocusJumpSectionManager)(r);
    let s = (0, i.useCallback)(
        (e) => {
            v(e, n);
        },
        [n]
    );
    return (
        (0, i.useLayoutEffect)(
            () => (
                r ? (e.addEventListener('mousedown', I), e.addEventListener('keydown', g)) : e.addEventListener('keydown', s),
                () => {
                    r ? (e.removeEventListener('mousedown', I), e.removeEventListener('keydown', g)) : e.removeEventListener('keydown', s);
                }
            ),
            [e, s, r]
        ),
        r
    );
}
n.Z = T;
