n.d(t, {
    AJ: function () {
        return _;
    },
    te: function () {
        return f;
    },
    zP: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(393903),
    u = n(388032),
    c = n(749579);
function d(e) {
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
function f(e) {
    let { items: t, renderItem: n, ...i } = e;
    return (0, r.jsx)(o.Tooltip, {
        ...i,
        text: (0, r.jsx)('div', {
            className: c.tooltip,
            children: t.map(n)
        }),
        'aria-label': 'overflow',
        children: (e) =>
            (0, r.jsx)('div', {
                ...e,
                children: n(u.intl.formatToPlainString(u.t.Zvfz1d, { count: t.length }))
            })
    });
}
function _(e) {
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
t.ZP = function (e) {
    let { className: t, items: n, renderItem: a, itemGapPx: o = 0, maxLines: h, renderOverflow: p } = e,
        { ref: m, width: g } = (function () {
            let [e, t] = i.useState(0);
            return {
                ref: (0, l.y)((e) => {
                    let n = null == e ? void 0 : e.getBoundingClientRect();
                    null != n && t(n.width);
                }),
                width: e
            };
        })(),
        {
            lastVisibleIndex: E,
            onItemLayout: v,
            overflowItemsRef: I
        } = d({
            items: n,
            itemGapPx: o,
            maxLines: h,
            containerWidth: g
        }),
        S = i.useCallback(
            (e) =>
                (0, r.jsx)(f, {
                    items: e,
                    renderItem: a
                }),
            [a]
        ),
        T = i.useMemo(() => n.slice(0, E + 1), [n, E]),
        b = i.useMemo(() => n.slice(E + 1), [n, E]);
    return (0, r.jsxs)('div', {
        className: s()(t, c.items),
        ref: m,
        children: [
            (0, r.jsxs)('div', {
                'aria-hidden': !0,
                className: c.measurements,
                children: [
                    (0, r.jsx)('div', {
                        className: c.itemMeasurements,
                        children: n.map((e, t) =>
                            (0, r.jsx)(
                                _,
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
                        className: c.overflowMeasurement,
                        ref: I,
                        children: a(u.intl.formatToPlainString(u.t.Zvfz1d, { count: Number('1'.concat(n.length)) }))
                    })
                ]
            }),
            T.map(a),
            b.length > 0 && (null != p ? p : S)(b)
        ]
    });
};
