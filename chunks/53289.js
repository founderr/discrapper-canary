n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(392711);
var o = n(442837),
    s = n(208826),
    l = n(40851),
    u = n(607070),
    c = n(585483),
    d = n(981631);
let _ = (0, a.debounce)((e) => {
    setTimeout(() => {
        var t;
        null === (t = e.current) || void 0 === t || t.focus();
    }, 0);
}, 50);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        r = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        a = (0, s.Z)(),
        [E, f] = i.useState(!1),
        h = (0, l.Aq)();
    return (
        i.useEffect(() => {
            if (t) return n.addEventListener('blur', e), () => n.removeEventListener('blur', e);
            function e() {
                a && (h.dispatch(d.CkL.POPOUT_CLOSE), c.S.dispatch(d.CkL.CONTEXT_MENU_CLOSE));
            }
        }, [n, a, t, h]),
        i.useEffect(() => {
            var i, o, s;
            if (r || !E || !t) return;
            let l = a;
            function u(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null == n || 'BUTTON' === n.tagName) && !l && _(e);
                }, 100);
            }
            return (
                null === (i = e.current) || void 0 === i || i.addEventListener('focusout', u),
                (null === (o = n.document.activeElement) || void 0 === o ? void 0 : o.tagName) !== 'IFRAME' && !l && (null === (s = e.current) || void 0 === s || s.focus()),
                () => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.removeEventListener('focusout', u), (l = !0);
                }
            );
        }, [t, E, r, e, n, a]),
        f
    );
}
