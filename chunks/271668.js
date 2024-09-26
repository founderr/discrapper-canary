var r = n(47120);
var i = n(724458);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(788911),
    _ = n(911969),
    E = n(367907),
    f = n(588468),
    h = n(30465),
    p = n(218867),
    m = n(313201),
    I = n(806966),
    T = n(98528),
    g = n(551058),
    S = n(555573),
    A = n(10718),
    v = n(367790),
    N = n(895924),
    O = n(581364),
    R = n(56801),
    C = n(342687),
    y = n(826298),
    L = n(689079),
    b = n(981631),
    D = n(689938),
    M = n(590515),
    P = n(239840);
let U = 512,
    w = 7,
    x = 56,
    G = 16,
    k = 32,
    B = 20,
    F = 420,
    Z = [8, 8, 0, 8],
    V = c().debounce(() => {
        (0, E.yw)(b.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300);
function H(e) {
    e.preventDefault();
}
t.Z = o.forwardRef(function (e, t) {
    let { channel: n, canOnlyUseTextCommands: r } = e,
        i = o.useRef(!1),
        s = o.useRef(0),
        [u, c] = o.useState(0),
        Y = o.useRef(null),
        [j, W] = o.useState(!1),
        K = I.Xn.useStore((e) => e.activeCategoryIndex);
    o.useEffect(() => {
        (0, E.yw)(b.rMx.APPLICATION_COMMAND_BROWSER_OPENED);
    }, []);
    let {
            sectionDescriptors: z,
            activeSections: q,
            commandsByActiveSection: Q,
            hasMoreAfter: X,
            commands: $,
            filteredSectionId: J,
            scrollDown: ee,
            filterSection: et
        } = A.wi(
            n,
            {
                commandTypes: [_.yU.CHAT],
                builtIns: r ? v.D.ONLY_TEXT : v.D.ALLOW,
                applicationCommands: !r
            },
            {
                placeholderCount: w,
                limit: L.tn,
                includeFrecency: !0
            }
        ),
        en = (0, T.Qs)({
            activeCategoryIndex: K,
            isScrolling: i,
            listRef: Y,
            onActiveCategoryIndexChange: (e) => {
                let t = q[e];
                if (null != t) {
                    let e = z.findIndex((e) => e.id === t.id);
                    I.Xn.setActiveCategoryIndex(e);
                }
            },
            scrollOffset: B,
            searchQuery: ''
        }),
        er = (e) => {
            let t = q.length,
                n = t * (k + G) + (Q.reduce((e, t) => e + t.data.length, 0) - (X ? w : 0)) * x - U;
            X && e + F > n && ee(), en(e), V(), (s.current = e);
        };
    o.useEffect(() => {
        er(s.current);
    }, [$]);
    let ei = o.useCallback((e) => (e !== q.length - 1 || X ? G : 0), [q.length, X]),
        ea = Q.map((e) => e.data.length);
    o.useEffect(() => {
        null != Y.current && j && null != u && Y.current.scrollRowIntoView(u);
    }, [j, u]),
        o.useLayoutEffect(() => {
            if (null != J) {
                var e;
                null === (e = Y.current) || void 0 === e || e.scrollToSectionTop(0);
            }
        }, [$, J]);
    let eo = o.useCallback(
            (e) => {
                if (e.id === J || e.id === L.bi.FRECENCY) {
                    var t;
                    et(null), null === (t = Y.current) || void 0 === t || t.scrollToSectionTop(0);
                } else et(e.id);
            },
            [et, J]
        ),
        es = o.useCallback(
            (e, t, r) => {
                S.Po({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: N.Vh.DISCOVERY,
                    triggerSection: r
                });
            },
            [n.id]
        );
    o.useImperativeHandle(
        t,
        () => ({
            onTabOrEnter: (e) => {
                if (null == u) return !e && (c(0), !0);
                if (null == u) return !1;
                let t = 0,
                    n = 0;
                for (let e of Q)
                    if (((t = n), u < (n += e.data.length))) {
                        let n = e.data[u - t],
                            r = z.find((e) => e.id === n.applicationId);
                        es(n, r, (0, O.tI)(e.section));
                        break;
                    }
                return !0;
            },
            onMoveSelection: (e) => {
                if (0 === $.length) return !0;
                let t = X ? w : 0,
                    n = $.length + t,
                    r = null == u ? 0 : u + e;
                return r >= n ? (r = n - 1) : r < 0 && (r = 0), c(r), W(!0), !0;
            }
        }),
        [$.length, Q, X, z, es, u]
    );
    let el = o.useCallback(
            (e) => {
                let t = q[e];
                if (null == t) return null;
                let r = (0, y.ky)(t),
                    i = (0, a.jsx)(r, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, a.jsx)(
                    g.Z,
                    {
                        className: M.categoryHeader,
                        icon: i,
                        children: t.name
                    },
                    e
                );
            },
            [n, q]
        ),
        eu = o.useCallback(
            (e, t) => {
                let n = e === q.length - 1,
                    r = q[e],
                    { data: i } = Q[e];
                return (0, a.jsxs)(
                    'ul',
                    {
                        role: 'group',
                        'aria-label': r.name,
                        className: l()(M.categorySection, { [M.categorySectionLast]: n }),
                        children: [
                            t,
                            0 === i.length &&
                                (0, a.jsx)(d.Z, {
                                    message: D.Z.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({ applicationName: r.name }),
                                    noResultsImageURL: P,
                                    className: M.noSearchResults
                                })
                        ]
                    },
                    e
                );
            },
            [q, Q]
        ),
        ec = o.useCallback(
            (e, t) => {
                var r;
                let i = Q[t.sectionIndex],
                    o = i.data[t.sectionRowIndex],
                    s = ''.concat(i.section.id, ':').concat(null !== (r = null == o ? void 0 : o.id) && void 0 !== r ? r : e);
                if (null == o || (i.section.id !== o.applicationId && i.section.id !== L.bi.FRECENCY) || o.inputType === N.iw.PLACEHOLDER) return (0, a.jsx)(C.Z, {}, s);
                let l = z.find((e) => e.id === o.applicationId);
                return (0, a.jsx)(
                    f.ZP.NewCommand,
                    {
                        index: e,
                        command: o,
                        channel: n,
                        className: M.itemWrapper,
                        selected: u === e,
                        showImage: i.section.id !== o.applicationId,
                        section: l,
                        onClick: () => es(o, l, (0, O.tI)(i.section)),
                        onHover: () => {
                            c(null), W(!1);
                        }
                    },
                    s
                );
            },
            [n, Q, es, z, u]
        ),
        ed = (0, m.Dt)();
    return (
        (0, h.KR)(ed, !0, (0, f.DJ)(u)),
        o.useEffect(
            () => () => {
                (0, h.sJ)();
            },
            []
        ),
        (0, a.jsxs)(f.ZP, {
            id: ed,
            className: M.outerWrapper,
            innerClassName: M.wrapper,
            onMouseDown: H,
            children: [
                (0, a.jsx)(R.Z, {
                    className: M.rail,
                    channel: n,
                    sections: z,
                    filteredSectionId: J,
                    activeCategoryIndex: K,
                    onSectionClick: eo,
                    applicationCommandListRef: Y
                }),
                (0, a.jsx)(p.Z, {
                    role: 'listbox',
                    className: M.list,
                    listPadding: Z,
                    onScroll: er,
                    renderRow: ec,
                    renderSection: eu,
                    renderSectionHeader: el,
                    rowCount: q.length,
                    rowCountBySection: ea,
                    rowHeight: x,
                    sectionHeaderHeight: k,
                    sectionMarginBottom: ei,
                    ref: Y,
                    stickyHeaders: !0
                })
            ]
        })
    );
});
