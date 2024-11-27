n(653041);
var i = n(200651),
    l = n(192379),
    r = n(374470),
    a = n(442837),
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
    _ = n(314734),
    v = n(981631),
    I = n(388032),
    E = n(906047);
let b = { height: _.lv };
function N() {
    m.yT(g.ti.DISMISSED);
}
function S(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        m = l.useRef(null),
        { renderWindow: I, windowDispatch: E } = l.useContext(c.ZP),
        b = null != u,
        S = (0, s.Jw)(null != u ? u : ''),
        Z = l.useCallback(
            (e) => {
                var t;
                if ((!b && (0, s.$s)()) || (b && !(S && n))) return;
                let { target: i } = e;
                if ((0, r.k)(i) && null != i.closest('.' + _.Jh)) return;
                for (; (0, r.k)(i); ) {
                    if (i === m.current) return;
                    if (i.classList.contains(_.t4) || i.classList.contains(_.Id)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(_.NN)) return;
                    i = i.parentNode;
                }
                N();
                let l = null === (t = (0, p.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == l || 'BODY' === l.tagName) && h.S.dispatchToLastSubscribed(v.CkL.TEXTAREA_FOCUS);
            },
            [n, S, b]
        );
    l.useLayoutEffect(
        () => (
            I.addEventListener('mousedown', Z),
            I.addEventListener('contextmenu', Z),
            E.subscribe(v.CkL.POPOUT_CLOSE, N),
            () => {
                I.removeEventListener('mousedown', Z), I.removeEventListener('contextmenu', Z), E.unsubscribe(v.CkL.POPOUT_CLOSE, N);
            }
        ),
        [Z, I, E]
    ),
        (0, o.useFocusLock)(m),
        l.useEffect(() => {
            ((!b && (0, s.$s)()) || (b && !S)) && N();
        }, [S, b]);
    let T = (0, a.e7)([f.Z], () => f.Z.initialState(), []),
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
        style: _.u$,
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
                    children: t && (0, i.jsx)(S, { ...n })
                });
            }
        })
    });
});
