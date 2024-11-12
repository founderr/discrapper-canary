n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(367907),
    o = n(313201),
    l = n(82554),
    u = n(185625),
    c = n(255514),
    d = n(981631),
    f = n(43255);
t.Z = (e) => {
    let { reportType: t, menu: n, modalProps: _, onSubmit: p, onNavigate: h, emailToken: m, isAuthenticated: g = !0 } = e,
        E = (0, o.Dt)(),
        { nodes: v, root_node_id: I, success_node_id: b, fail_node_id: S } = n,
        [T, y] = i.useState(I),
        [A, N] = i.useState(void 0),
        [C, R] = i.useState(void 0),
        [O, D] = i.useState([]),
        [L, x] = i.useState(void 0),
        [w, M] = i.useState(void 0),
        P = (e) => {
            var n;
            let { destination: r } = e,
                [, i] = r,
                a = v[i];
            if (a.elements.some((e) => 'skip' === e.type) && (null === (n = a.button) || void 0 === n ? void 0 : n.type) === 'next')
                return P({
                    ...e,
                    destination: ['', a.button.target]
                });
            if ((D([...O, e]), null != a.key && (null == h || h(a.key)), N(void 0), R(void 0), t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM)) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: v[T].id,
                    next_node: a.id
                });
            }
            y(i);
        },
        k = async (e) => {
            var r;
            let i = g ? await (0, u.ZD)(n, t, [...O, e]) : await (0, u.fw)(n, t, [...O, e], m),
                a = null == i ? void 0 : null === (r = i.body) || void 0 === r ? void 0 : r.report_id;
            null != a && x(a), M(v[e.nodeRef].report_type), null == p || p(a);
        },
        U = () => {
            var e, n;
            if (O.length < 1) return;
            let r = [...O],
                i = r.pop(),
                a = null !== (n = null == i ? void 0 : i.nodeRef) && void 0 !== n ? n : I;
            if (t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: v[a].report_type,
                    current_node: v[T].id,
                    next_node: v[a].id
                });
            }
            N(null == i ? void 0 : null === (e = i.multiSelect) || void 0 === e ? void 0 : e.state), R(null == i ? void 0 : i.textInput), y(a), D(r), null == h || h('..');
        },
        B = i.useMemo(() => {
            let e = [],
                t = [];
            for (let a in v) {
                var n, r, i;
                let s = v[a];
                if (s.id !== b && s.id !== S && s.id !== I) {
                    if (s.key.endsWith('_SUBMIT') || (null === (n = s.button) || void 0 === n ? void 0 : n.type) === 'submit') {
                        t.push(s);
                        continue;
                    }
                    if ((e.push(s), (null === (r = s.button) || void 0 === r ? void 0 : r.type) === 'next')) {
                        let t = null === (i = s.button) || void 0 === i ? void 0 : i.target,
                            n = e.indexOf(v[t]);
                        -1 !== n && (e.splice(n, 1), e.push(v[t]));
                    }
                }
            }
            return [v[I], ...e, ...t, v[b], v[S]];
        }, [v, I, S, b]);
    return (0, r.jsx)(a.ModalRoot, {
        transitionState: _.transitionState,
        'aria-labelledby': E,
        children: (0, r.jsx)(a.Slides, {
            width: 440,
            activeSlide: T,
            centered: !1,
            children: B.map((e) =>
                (0, r.jsx)(
                    a.Slide,
                    {
                        id: e.id,
                        children: (0, r.jsx)('div', {
                            className: f.slideContainer,
                            children: (0, r.jsx)(c.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: w,
                                history: O,
                                onModalClose: _.onClose,
                                onSelectChild: P,
                                onNavigateBack: U,
                                multiSelect: A,
                                textInput: C,
                                successNodeId: b,
                                failNodeId: S,
                                onSubmit: k,
                                reportId: L
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
