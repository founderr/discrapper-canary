n(653041);
var i = n(200651),
    l = n(192379),
    r = n(374470),
    a = n(442837),
    s = n(952265),
    o = n(481060),
    c = n(40851),
    u = n(835473),
    d = n(314910),
    h = n(585483),
    m = n(5967),
    p = n(499254),
    f = n(541099),
    g = n(827498),
    C = n(695676),
    x = n(421591),
    v = n(314734),
    _ = n(981631),
    I = n(388032),
    E = n(767346);
let b = { height: v.lv };
function S() {
    p.yT(g.ti.DISMISSED);
}
function Z(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: d } = e,
        p = l.useRef(null),
        { renderWindow: I, windowDispatch: E } = l.useContext(c.ZP),
        b = null != d,
        Z = (0, s.Jw)(null != d ? d : ''),
        T = l.useCallback(
            (e) => {
                var t;
                if ((!b && (0, s.$s)()) || (b && !(Z && n))) return;
                let { target: i } = e;
                if ((0, r.k)(i) && null != i.closest('.' + v.Jh)) return;
                for (; (0, r.k)(i); ) {
                    if (i === p.current) return;
                    if (i.classList.contains(v.t4)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(v.NN)) return;
                    i = i.parentNode;
                }
                S();
                let l = null === (t = (0, m.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == l || 'BODY' === l.tagName) && h.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS);
            },
            [n, Z, b]
        );
    l.useLayoutEffect(
        () => (
            I.addEventListener('mousedown', T),
            I.addEventListener('contextmenu', T),
            E.subscribe(_.CkL.POPOUT_CLOSE, S),
            () => {
                I.removeEventListener('mousedown', T), I.removeEventListener('contextmenu', T), E.unsubscribe(_.CkL.POPOUT_CLOSE, S);
            }
        ),
        [T, I, E]
    ),
        (0, o.useFocusLock)(p),
        l.useEffect(() => {
            ((!b && (0, s.$s)()) || (b && !Z)) && S();
        }, [Z, b]);
    let N = (0, a.e7)([f.Z], () => f.Z.initialState(), []),
        j = (0, u.q)(null == N ? void 0 : N.applicationId),
        A = l.useMemo(() => {
            if (null == N) return;
            let e = [{ type: C.gc.HOME }];
            return (
                null != N.applicationId &&
                    null != j &&
                    e.push({
                        type: C.gc.APPLICATION,
                        application: j
                    }),
                e
            );
        }, [N, j]);
    return (0, i.jsx)(x.Z, {
        ref: p,
        channel: t,
        entrypoint: g._b.TEXT,
        initHistory: A
    });
}
t.Z = l.memo(function (e) {
    let { positionTargetRef: t, ...n } = e;
    return (0, i.jsx)('span', {
        style: v.u$,
        children: (0, i.jsx)(d.W5, {
            className: E.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)('section', {
                    className: E.positionContainer,
                    role: 'dialog',
                    style: b,
                    'aria-label': I.intl.string(I.t['3CNGLC']),
                    children: t && (0, i.jsx)(Z, { ...n })
                });
            }
        })
    });
});
