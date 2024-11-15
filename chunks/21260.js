n.d(t, {
    AJ: function () {
        return f;
    },
    Ep: function () {
        return _;
    },
    te: function () {
        return d;
    },
    zP: function () {
        return c;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(388032),
    u = n(31894);
function c(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: a } = e,
        [s, o] = i.useState(0),
        l = i.useRef([]),
        u = i.useRef(0),
        c = i.useRef(0),
        d = i.useRef(null),
        f = i.useCallback((e, t) => {
            l.current[e] = t;
        }, []);
    return (
        i.useLayoutEffect(() => {
            var e;
            if (null == d.current) return;
            (l.current.length = n.length), (u.current = null !== (e = d.current.getBoundingClientRect().width) && void 0 !== e ? e : 0);
            let i = (function (e) {
                let { items: t, maxLines: n, itemWidths: r, itemGapPx: i, containerWidth: a, overflowWidth: s } = e,
                    o = 0,
                    l = 0,
                    u = 0;
                for (let e = 0; e < t.length; e++) {
                    let c = r[e];
                    if (isNaN(c) || c > a) continue;
                    let d = o === n - 1,
                        f = e === t.length - 1;
                    if (!(Math.round(l + c + (d && !f ? s + i : 0)) < Math.round(a))) {
                        if (d) break;
                        o++, (l = 0);
                    }
                    (u = e), (l += c + i);
                }
                return u;
            })({
                items: n,
                maxLines: r,
                itemGapPx: t,
                containerWidth: a,
                itemWidths: l.current,
                overflowWidth: u.current
            });
            i !== c.current && ((c.current = i), o((e) => e + 1));
        }, [a, t, n, r]),
        i.useMemo(
            () => ({
                lastVisibleIndex: c.current,
                onItemLayout: f,
                overflowItemsRef: d,
                itemWidthsRef: l,
                version: s
            }),
            [f, s]
        )
    );
}
function d(e) {
    let { items: t, renderItem: n, ...i } = e;
    return (0, r.jsx)(o.Tooltip, {
        ...i,
        text: (0, r.jsx)('div', {
            className: u.tooltip,
            children: t.map(n)
        }),
        'aria-label': 'overflow',
        children: (e) =>
            (0, r.jsx)('div', {
                ...e,
                children: n(l.intl.formatToPlainString(l.t.vGclWl, { count: t.length }))
            })
    });
}
function f(e) {
    let { onItemLayout: t, index: n, children: a } = e,
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            if (null != s.current) t(n, s.current.getBoundingClientRect().width);
        }),
        (0, r.jsx)('div', {
            ref: s,
            children: a
        })
    );
}
function _(e) {
    let { className: t, items: n, renderItem: a, itemGapPx: _ = 0, maxLines: p, renderOverflow: h } = e,
        { ref: m, width: g } = (function () {
            let [e, t] = i.useState(0),
                n = i.useRef(null),
                r = new Map(),
                a = new ResizeObserver((e) => {
                    e.forEach((e) => {
                        var t;
                        let { target: n } = e;
                        null === (t = r.get(n)) || void 0 === t || t(e);
                    });
                });
            return (
                (0, o.useResizeObserverSubscription)({
                    ref: n,
                    key: 'horizontal-overflow-list',
                    onUpdate: (e) => {
                        var n;
                        let r = null === (n = e.target) || void 0 === n ? void 0 : n.getBoundingClientRect();
                        null != r && t(r.width);
                    },
                    resizeObserver: a,
                    listenerMap: r
                }),
                {
                    ref: n,
                    width: e
                }
            );
        })(),
        {
            lastVisibleIndex: E,
            onItemLayout: v,
            overflowItemsRef: I
        } = c({
            items: n,
            itemGapPx: _,
            maxLines: p,
            containerWidth: g
        }),
        b = i.useCallback(
            (e) =>
                (0, r.jsx)(d, {
                    items: e,
                    renderItem: a
                }),
            [a]
        ),
        S = i.useMemo(() => n.slice(0, E + 1), [n, E]),
        T = i.useMemo(() => n.slice(E + 1), [n, E]);
    return (0, r.jsxs)('div', {
        className: s()(t, u.items),
        ref: m,
        children: [
            (0, r.jsxs)('div', {
                'aria-hidden': !0,
                className: u.measurements,
                children: [
                    (0, r.jsx)('div', {
                        className: u.itemMeasurements,
                        children: n.map((e, t) =>
                            (0, r.jsx)(
                                f,
                                {
                                    index: t,
                                    onItemLayout: v,
                                    children: a(e)
                                },
                                e
                            )
                        )
                    }),
                    (0, r.jsx)('div', {
                        className: u.overflowMeasurement,
                        ref: I,
                        children: a(l.intl.formatToPlainString(l.t.vGclWl, { count: Number('1'.concat(n.length)) }))
                    })
                ]
            }),
            S.map(a),
            T.length > 0 && (null != h ? h : b)(T)
        ]
    });
}
