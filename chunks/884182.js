t(47120);
var i = t(200651),
    l = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(512722),
    r = t.n(a),
    u = t(392711),
    d = t.n(u),
    m = t(947849),
    c = t(499376),
    h = t(546432),
    I = t(217702),
    x = t(421502);
let g = Math.round((I.mT - 8) / 3),
    p = Math.round((I.mT - 4) / 2),
    f = Math.round((I.Jj - 4) / 2),
    C = Math.round((2 * (I.mT - 4)) / 3),
    j = C / 2;
function v(e) {
    let { visualMediaItems: n, footer: t } = e;
    null != t && r()(1 === n.length, 'footer only gets applied to single items');
    let l = n.length;
    if (1 === l)
        return (0, i.jsx)(y, {
            itemsForLayout: n,
            isSingleImage: !0,
            footer: t
        });
    if (2 === l) return (0, i.jsx)(T, { itemsForLayout: n });
    if (3 === l) return (0, i.jsx)(E, { itemsForLayout: n });
    if (4 === l) return (0, i.jsx)(M, { itemsForLayout: n });
    let o = l % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [1 === o && (0, i.jsx)(y, { itemsForLayout: n.slice(0, o) }), 2 === o && (0, i.jsx)(T, { itemsForLayout: n.slice(0, o) }), 0 === o ? (0, i.jsx)(N, { itemsForLayout: n }) : (0, i.jsx)(N, { itemsForLayout: n.slice(o) })]
    });
}
function y(e) {
    let { itemsForLayout: n, isSingleImage: t, footer: l } = e,
        o = n[0];
    return (0, i.jsx)('div', {
        className: s()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: t,
            [x.oneByOneGridMosaic]: !t,
            [x.hasFooter]: null != l
        }),
        children: (0, i.jsx)(L, {
            props: o,
            useFullWidth: !t,
            isSingleItem: !0,
            footer: l
        })
    });
}
function T(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsx)('div', {
        className: x.oneByTwoGrid,
        children: n.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: x.oneByTwoGridItem,
                    children: (0, i.jsx)(L, {
                        props: e,
                        maxWidth: p,
                        maxHeight: p
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function E(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: x.oneByTwoSoloItem,
                children: (0, i.jsx)(L, {
                    props: n[0],
                    maxWidth: C
                })
            }),
            (0, i.jsx)('div', {
                className: x.oneByTwoDuoItem,
                children: (0, i.jsx)('div', {
                    className: x.twoByOneGrid,
                    children: n.splice(1).map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: x.twoByOneGridItem,
                                children: (0, i.jsx)(L, {
                                    props: e,
                                    maxWidth: j,
                                    maxHeight: f
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
function M(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsx)('div', {
        className: x.twoByTwoGrid,
        children: n.map((e) =>
            (0, i.jsx)(
                L,
                {
                    props: e,
                    maxWidth: p,
                    maxHeight: f
                },
                e.item.uniqueId
            )
        )
    });
}
function N(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsx)('div', {
        className: x.threeByThreeGrid,
        children: n.map((e) =>
            (0, i.jsx)(
                L,
                {
                    props: e,
                    maxWidth: g,
                    maxHeight: g
                },
                e.item.uniqueId
            )
        )
    });
}
let w = (e) => ({
        className: s()(e, x.itemContentContainer),
        imgContainerClassName: x.lazyImgContainer,
        imgClassName: x.lazyImg
    }),
    O = (e) => ({ className: s()(e, x.lazyImg) });
function L(e) {
    let { props: n, maxWidth: t = I.mT, maxHeight: l = I.Jj, useFullWidth: o = !0, isSingleItem: s = !1, footer: a } = e,
        r = n.item.type,
        u = {
            ...n,
            ...('IMAGE' === r && w(n.className)),
            ...('VIDEO' === r && O(n.className)),
            mediaLayoutType: I.hV.MOSAIC,
            maxWidth: t,
            maxHeight: l,
            useFullWidth: o,
            isSingleMosaicItem: s
        };
    return (0, i.jsx)(m.h.Provider, {
        value: n.gifFavoriteButton,
        children: (0, i.jsx)(h.Z, {
            ...u,
            footer: a
        })
    });
}
n.Z = function (e) {
    let { items: n, inlineForwardButton: t } = e,
        {
            groupableVisualMediaItems: o,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: r
        } = (function (e) {
            return l.useMemo(() => {
                let [n, t] = d().partition(e, (e) => (0, c.R_)(e.item.type)),
                    [i, l] = d().partition(n, (e) => (0, c.Ld)(e.item.type));
                return {
                    groupableVisualMediaItems: i,
                    nonGroupableVisualMediaItems: l,
                    nonVisualMediaItems: t
                };
            }, [e]);
        })(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o.length > 0 &&
                (null != t
                    ? (0, i.jsxs)('div', {
                          className: s()(x.mosaicContainer, 1 === o.length && x.single),
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.visualMediaItemContainer,
                                  children: (0, i.jsx)(v, { visualMediaItems: o })
                              }),
                              t
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: x.visualMediaItemContainer,
                          children: (0, i.jsx)(v, { visualMediaItems: o })
                      })),
            a.length > 0 &&
                a.map((e) => {
                    let n = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, i.jsx)(
                        'div',
                        {
                            className: x.visualMediaItemContainer,
                            children: (0, i.jsx)(v, {
                                visualMediaItems: [e],
                                footer: n
                            })
                        },
                        e.item.uniqueId
                    );
                }),
            r.length > 0 &&
                (0, i.jsx)('div', {
                    className: x.nonVisualMediaItemContainer,
                    children: r.map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: x.nonVisualMediaItem,
                                children: (0, i.jsx)(L, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
};
