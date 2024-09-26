var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(481060),
    l = n(367907),
    u = n(313201),
    c = n(82554),
    d = n(185625),
    _ = n(255514),
    E = n(981631),
    f = n(43255);
let h = (e) => {
    let { reportType: t, menu: n, modalProps: r, onSubmit: i, onNavigate: h, emailToken: p, isAuthenticated: m = !0 } = e,
        I = (0, u.Dt)(),
        { nodes: T, root_node_id: g, success_node_id: S, fail_node_id: A } = n,
        [v, N] = o.useState(g),
        [O, R] = o.useState(void 0),
        [C, y] = o.useState(void 0),
        [L, b] = o.useState([]),
        [D, M] = o.useState(void 0),
        [P, U] = o.useState(void 0),
        w = (e) => {
            var n;
            let { destination: r } = e,
                [, i] = r,
                a = T[i];
            if (a.elements.some((e) => 'skip' === e.type) && (null === (n = a.button) || void 0 === n ? void 0 : n.type) === 'next')
                return w({
                    ...e,
                    destination: ['', a.button.target]
                });
            if ((b([...L, e]), null != a.key && (null == h || h(a.key)), R(void 0), y(void 0), t.name === c.b.MESSAGE || t.name === c.b.FIRST_DM)) {
                let e = t.record.id;
                l.ZP.trackWithMetadata(E.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: T[v].id,
                    next_node: a.id
                });
            }
            N(i);
        },
        x = async (e) => {
            var r;
            let a = m ? await (0, d.ZD)(n, t, [...L, e]) : await (0, d.fw)(n, t, [...L, e], p),
                o = null == a ? void 0 : null === (r = a.body) || void 0 === r ? void 0 : r.report_id;
            null != o && M(o), U(T[e.nodeRef].report_type), null == i || i(o);
        },
        G = () => {
            var e, n;
            if (L.length < 1) return;
            let r = [...L],
                i = r.pop(),
                a = null !== (n = null == i ? void 0 : i.nodeRef) && void 0 !== n ? n : g;
            if (t.name === c.b.MESSAGE || t.name === c.b.FIRST_DM) {
                let e = t.record.id;
                l.ZP.trackWithMetadata(E.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: T[a].report_type,
                    current_node: T[v].id,
                    next_node: T[a].id
                });
            }
            R(null == i ? void 0 : null === (e = i.multiSelect) || void 0 === e ? void 0 : e.state), y(null == i ? void 0 : i.textInput), N(a), b(r), null == h || h('..');
        },
        k = o.useMemo(() => {
            let e = [],
                t = [];
            for (let a in T) {
                var n, r, i;
                let o = T[a];
                if (o.id !== S && o.id !== A && o.id !== g) {
                    if (o.key.endsWith('_SUBMIT') || (null === (n = o.button) || void 0 === n ? void 0 : n.type) === 'submit') {
                        t.push(o);
                        continue;
                    }
                    if ((e.push(o), (null === (r = o.button) || void 0 === r ? void 0 : r.type) === 'next')) {
                        let t = null === (i = o.button) || void 0 === i ? void 0 : i.target,
                            n = e.indexOf(T[t]);
                        -1 !== n && (e.splice(n, 1), e.push(T[t]));
                    }
                }
            }
            return [T[g], ...e, ...t, T[S], T[A]];
        }, [T, g, A, S]);
    return (0, a.jsx)(s.ModalRoot, {
        transitionState: r.transitionState,
        'aria-labelledby': I,
        children: (0, a.jsx)(s.Slides, {
            width: 440,
            activeSlide: v,
            centered: !1,
            children: k.map((e) =>
                (0, a.jsx)(
                    s.Slide,
                    {
                        id: e.id,
                        children: (0, a.jsx)('div', {
                            className: f.slideContainer,
                            children: (0, a.jsx)(_.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: P,
                                history: L,
                                onModalClose: r.onClose,
                                onSelectChild: w,
                                onNavigateBack: G,
                                multiSelect: O,
                                textInput: C,
                                successNodeId: S,
                                failNodeId: A,
                                onSubmit: x,
                                reportId: D
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
t.Z = h;
