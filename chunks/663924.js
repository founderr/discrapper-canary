n(653041);
var i = n(735250),
    a = n(470079),
    s = n(374470),
    l = n(442837),
    r = n(952265),
    o = n(481060),
    c = n(40851),
    u = n(213459),
    d = n(314910),
    h = n(585483),
    p = n(5967),
    m = n(499254),
    _ = n(541099),
    f = n(827498),
    E = n(695676),
    C = n(421591),
    g = n(314734),
    I = n(981631),
    x = n(689938),
    T = n(1966);
let N = { height: g.lv };
function S() {
    m.y(f.ti.DISMISSED);
}
function v(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: d } = e,
        m = a.useRef(null),
        { renderWindow: x, windowDispatch: T } = a.useContext(c.ZP),
        N = null != d,
        v = (0, r.Jw)(null != d ? d : ''),
        Z = a.useCallback(
            (e) => {
                var t;
                if ((!N && (0, r.$s)()) || (N && !(v && n))) return;
                let { target: i } = e;
                if ((0, s.k)(i) && null != i.closest('.' + g.Jh)) return;
                for (; (0, s.k)(i); ) {
                    if (i === m.current) return;
                    if (i.classList.contains(g.t4)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(g.NN)) return;
                    i = i.parentNode;
                }
                S();
                let a = null === (t = (0, p.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == a || 'BODY' === a.tagName) && h.S.dispatchToLastSubscribed(I.CkL.TEXTAREA_FOCUS);
            },
            [n, v, N]
        );
    a.useLayoutEffect(
        () => (
            x.addEventListener('mousedown', Z),
            x.addEventListener('contextmenu', Z),
            T.subscribe(I.CkL.POPOUT_CLOSE, S),
            () => {
                x.removeEventListener('mousedown', Z), x.removeEventListener('contextmenu', Z), T.unsubscribe(I.CkL.POPOUT_CLOSE, S);
            }
        ),
        [Z, x, T]
    ),
        (0, o.useFocusLock)(m),
        a.useEffect(() => {
            ((!N && (0, r.$s)()) || (N && !v)) && S();
        }, [v, N]);
    let A = (0, l.e7)([_.Z], () => _.Z.initialState(), []),
        M = a.useMemo(() => {
            if (null == A) return;
            let e = [{ type: E.gc.HOME }];
            if (null != A.applicationId) {
                var n;
                let i = (0, u.If)(t, A.applicationId);
                (null == i ? void 0 : null === (n = i.descriptor) || void 0 === n ? void 0 : n.application) != null &&
                    e.push({
                        type: E.gc.APPLICATION,
                        application: i.descriptor.application,
                        installOnDemand: !i.isGuildInstalled && !i.isUserInstalled
                    });
            }
            return e;
        }, [t, A]);
    return (0, i.jsx)(C.Z, {
        ref: m,
        channel: t,
        entrypoint: f._b.TEXT,
        initHistory: M
    });
}
t.Z = a.memo(function (e) {
    let { positionTargetRef: t, ...n } = e;
    return (0, i.jsx)('span', {
        style: g.u$,
        children: (0, i.jsx)(d.W5, {
            className: T.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)('section', {
                    className: T.positionContainer,
                    role: 'dialog',
                    style: N,
                    'aria-label': x.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_LAUNCHER_ARIA_LABEL,
                    children: t && (0, i.jsx)(v, { ...n })
                });
            }
        })
    });
});
