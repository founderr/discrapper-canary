n.d(t, {
    AJ: function () {
        return p;
    },
    zP: function () {
        return f;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(393903),
    c = n(689938),
    d = n(516617);
function _(e) {
    let { items: t, maxLines: n, itemWidths: r, itemGapPx: i, containerWidth: a, overflowWidth: o } = e,
        s = 0,
        l = 0,
        u = 0;
    for (let e = 0; e < t.length; e++) {
        let c = r[e];
        if (isNaN(c) || c > a) continue;
        let d = s === n - 1,
            _ = e === t.length - 1;
        if (!(Math.round(l + c + (d && !_ ? o + i : 0)) < Math.round(a))) {
            if (d) break;
            s++, (l = 0);
        }
        (u = e), (l += c + i);
    }
    return u;
}
function E() {
    let [e, t] = a.useState(0);
    return {
        ref: (0, u.y)((e) => {
            let n = null == e ? void 0 : e.getBoundingClientRect();
            null != n && t(n.width);
        }),
        width: e
    };
}
function f(e) {
    let { itemGapPx: t, items: n, maxLines: r, containerWidth: i } = e,
        [o, s] = a.useState(0),
        l = a.useRef([]),
        u = a.useRef(0),
        c = a.useRef(0),
        d = a.useRef(null),
        E = a.useCallback((e, t) => {
            l.current[e] = t;
        }, []);
    return (
        a.useLayoutEffect(() => {
            var e;
            if (null == d.current) return;
            (l.current.length = n.length), (u.current = null !== (e = d.current.getBoundingClientRect().width) && void 0 !== e ? e : 0);
            let a = _({
                items: n,
                maxLines: r,
                itemGapPx: t,
                containerWidth: i,
                itemWidths: l.current,
                overflowWidth: u.current
            });
            a !== c.current && ((c.current = a), s((e) => e + 1));
        }, [i, t, n, r]),
        a.useMemo(
            () => ({
                lastVisibleIndex: c.current,
                onItemLayout: E,
                overflowItemsRef: d,
                itemWidthsRef: l,
                version: o
            }),
            [E, o]
        )
    );
}
function h(e) {
    let { items: t, renderItem: n } = e;
    return (0, i.jsx)(l.Tooltip, {
        text: (0, i.jsx)('div', {
            className: d.tooltip,
            children: t.map(n)
        }),
        'aria-label': 'overflow',
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                children: n(c.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({ count: t.length }))
            })
    });
}
function p(e) {
    let { onItemLayout: t, index: n, children: r } = e,
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            if (null != o.current) t(n, o.current.getBoundingClientRect().width);
        }),
        (0, i.jsx)('div', {
            ref: o,
            children: r
        })
    );
}
function m(e) {
    let { className: t, items: n, renderItem: r, itemGapPx: o = 0, maxLines: l, renderOverflow: u } = e,
        { ref: _, width: m } = E(),
        {
            lastVisibleIndex: I,
            onItemLayout: T,
            overflowItemsRef: g
        } = f({
            items: n,
            itemGapPx: o,
            maxLines: l,
            containerWidth: m
        }),
        S = a.useCallback(
            (e) =>
                (0, i.jsx)(h, {
                    items: e,
                    renderItem: r
                }),
            [r]
        ),
        A = null != u ? u : S,
        v = a.useMemo(() => n.slice(0, I + 1), [n, I]),
        N = a.useMemo(() => n.slice(I + 1), [n, I]);
    return (0, i.jsxs)('div', {
        className: s()(t, d.items),
        ref: _,
        children: [
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                className: d.measurements,
                children: [
                    (0, i.jsx)('div', {
                        className: d.itemMeasurements,
                        children: n.map((e, t) =>
                            (0, i.jsx)(
                                p,
                                {
                                    index: t,
                                    onItemLayout: T,
                                    children: r(e)
                                },
                                e
                            )
                        )
                    }),
                    (0, i.jsx)('div', {
                        className: d.overflowMeasurement,
                        ref: g,
                        children: r(c.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({ count: Number('1'.concat(n.length)) }))
                    })
                ]
            }),
            v.map(r),
            N.length > 0 && A(N)
        ]
    });
}
t.ZP = m;
