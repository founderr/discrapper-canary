var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(947849),
    E = n(499376),
    f = n(546432),
    h = n(217702),
    p = n(834909);
let m = 4,
    I = Math.round((h.mT - 2 * m) / 3),
    T = Math.round((h.mT - m) / 2),
    g = Math.round((h.Jj - m) / 2),
    S = Math.round((2 * (h.mT - m)) / 3),
    A = S / 2;
function v(e) {
    let { items: t, inlineForwardButton: n } = e,
        { groupableVisualMediaItems: r, nonGroupableVisualMediaItems: a, nonVisualMediaItems: o } = N(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.length > 0 &&
                (null != n
                    ? (0, i.jsxs)('div', {
                          className: s()(p.mosaicContainer, 1 === r.length && p.single),
                          children: [
                              (0, i.jsx)('div', {
                                  className: p.visualMediaItemContainer,
                                  children: (0, i.jsx)(O, { visualMediaItems: r })
                              }),
                              n
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: p.visualMediaItemContainer,
                          children: (0, i.jsx)(O, { visualMediaItems: r })
                      })),
            a.length > 0 &&
                a.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, i.jsx)(
                        'div',
                        {
                            className: p.visualMediaItemContainer,
                            children: (0, i.jsx)(O, {
                                visualMediaItems: [e],
                                footer: t
                            })
                        },
                        e.item.uniqueId
                    );
                }),
            o.length > 0 &&
                (0, i.jsx)('div', {
                    className: p.nonVisualMediaItemContainer,
                    children: o.map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: p.nonVisualMediaItem,
                                children: (0, i.jsx)(P, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
}
function N(e) {
    return a.useMemo(() => {
        let [t, n] = d().partition(e, (e) => (0, E.R_)(e.item.type)),
            [r, i] = d().partition(t, (e) => (0, E.Ld)(e.item.type));
        return {
            groupableVisualMediaItems: r,
            nonGroupableVisualMediaItems: i,
            nonVisualMediaItems: n
        };
    }, [e]);
}
function O(e) {
    let { visualMediaItems: t, footer: n } = e;
    null != n && u()(1 === t.length, 'footer only gets applied to single items');
    let r = t.length;
    if (1 === r)
        return (0, i.jsx)(R, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: n
        });
    if (2 === r) return (0, i.jsx)(C, { itemsForLayout: t });
    if (3 === r) return (0, i.jsx)(y, { itemsForLayout: t });
    if (4 === r) return (0, i.jsx)(L, { itemsForLayout: t });
    let a = r % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [1 === a && (0, i.jsx)(R, { itemsForLayout: t.slice(0, a) }), 2 === a && (0, i.jsx)(C, { itemsForLayout: t.slice(0, a) }), 0 === a ? (0, i.jsx)(b, { itemsForLayout: t }) : (0, i.jsx)(b, { itemsForLayout: t.slice(a) })]
    });
}
function R(e) {
    let { itemsForLayout: t, isSingleImage: n, footer: r } = e,
        a = t[0];
    return (0, i.jsx)('div', {
        className: s()(p.oneByOneGrid, {
            [p.oneByOneGridSingle]: n,
            [p.oneByOneGridMosaic]: !n,
            [p.hasFooter]: null != r
        }),
        children: (0, i.jsx)(P, {
            props: a,
            useFullWidth: !n,
            isSingleItem: !0,
            footer: r
        })
    });
}
function C(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: p.oneByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: p.oneByTwoGridItem,
                    children: (0, i.jsx)(P, {
                        props: e,
                        maxWidth: T,
                        maxHeight: T
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function y(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsxs)('div', {
        className: s()(p.oneByTwoGrid, p.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: p.oneByTwoSoloItem,
                children: (0, i.jsx)(P, {
                    props: t[0],
                    maxWidth: S
                })
            }),
            (0, i.jsx)('div', {
                className: p.oneByTwoDuoItem,
                children: (0, i.jsx)('div', {
                    className: p.twoByOneGrid,
                    children: t.splice(1).map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: p.twoByOneGridItem,
                                children: (0, i.jsx)(P, {
                                    props: e,
                                    maxWidth: A,
                                    maxHeight: g
                                })
                            },
                            e.item.uniqueId
                        )
                    )
                })
            })
        ]
    });
}
function L(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: p.twoByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                P,
                {
                    props: e,
                    maxWidth: T,
                    maxHeight: g
                },
                e.item.uniqueId
            )
        )
    });
}
function b(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: p.threeByThreeGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                P,
                {
                    props: e,
                    maxWidth: I,
                    maxHeight: I
                },
                e.item.uniqueId
            )
        )
    });
}
let D = (e) => ({
        className: s()(e, p.itemContentContainer),
        imgContainerClassName: p.lazyImgContainer,
        imgClassName: p.lazyImg
    }),
    M = (e) => ({ className: s()(e, p.lazyImg) });
function P(e) {
    let { props: t, maxWidth: n = h.mT, maxHeight: r = h.Jj, useFullWidth: a = !0, isSingleItem: o = !1, footer: s } = e,
        l = t.item.type,
        u = {
            ...t,
            ...('IMAGE' === l && D(t.className)),
            ...('VIDEO' === l && M(t.className)),
            mediaLayoutType: h.hV.MOSAIC,
            maxWidth: n,
            maxHeight: r,
            useFullWidth: a,
            isSingleMosaicItem: o
        };
    return (0, i.jsx)(_.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, i.jsx)(f.Z, {
            ...u,
            footer: s
        })
    });
}
t.Z = v;
