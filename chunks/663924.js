n(653041);
var i = n(200651),
    l = n(192379),
    a = n(374470),
    r = n(442837),
    s = n(952265),
    o = n(481060),
    c = n(40851),
    d = n(835473),
    u = n(314910),
    h = n(585483),
    p = n(5967),
    m = n(499254),
    f = n(541099),
    g = n(827498),
    C = n(695676),
    x = n(421591),
    v = n(314734),
    _ = n(981631),
    I = n(388032),
    E = n(767346);
let b = { height: v.lv };
function N() {
    m.yT(g.ti.DISMISSED);
}
function Z(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        m = l.useRef(null),
        { renderWindow: I, windowDispatch: E } = l.useContext(c.ZP),
        b = null != u,
        Z = (0, s.Jw)(null != u ? u : ''),
        S = l.useCallback(
            (e) => {
                var t;
                if ((!b && (0, s.$s)()) || (b && !(Z && n))) return;
                let { target: i } = e;
                if ((0, a.k)(i) && null != i.closest('.' + v.Jh)) return;
                for (; (0, a.k)(i); ) {
                    if (i === m.current) return;
                    if (i.classList.contains(v.t4)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(v.NN)) return;
                    i = i.parentNode;
                }
                N();
                let l = null === (t = (0, p.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == l || 'BODY' === l.tagName) && h.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS);
            },
            [n, Z, b]
        );
    l.useLayoutEffect(
        () => (
            I.addEventListener('mousedown', S),
            I.addEventListener('contextmenu', S),
            E.subscribe(_.CkL.POPOUT_CLOSE, N),
            () => {
                I.removeEventListener('mousedown', S), I.removeEventListener('contextmenu', S), E.unsubscribe(_.CkL.POPOUT_CLOSE, N);
            }
        ),
        [S, I, E]
    ),
        (0, o.useFocusLock)(m),
        l.useEffect(() => {
            ((!b && (0, s.$s)()) || (b && !Z)) && N();
        }, [Z, b]);
    let T = (0, r.e7)([f.Z], () => f.Z.initialState(), []),
        j = (0, d.q)(null == T ? void 0 : T.applicationId),
        A = l.useMemo(() => {
            if (null == T) return;
            let e = [{ type: C.gc.HOME }];
            return (
                null != T.applicationId &&
                    null != j &&
                    e.push({
                        type: C.gc.APPLICATION,
                        application: j
                    }),
                e
            );
        }, [T, j]);
    return (0, i.jsx)(x.Z, {
        ref: m,
        channel: t,
        entrypoint: g._b.TEXT,
        initHistory: A
    });
}
t.Z = l.memo(function (e) {
    let { positionTargetRef: t, ...n } = e;
    return (0, i.jsx)('span', {
        style: v.u$,
        children: (0, i.jsx)(u.W5, {
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
