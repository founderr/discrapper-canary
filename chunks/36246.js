n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(873546),
    a = n(481060),
    o = n(470134),
    c = n(678064);
function u(e) {
    let { guildId: t, children: n, className: l } = e,
        { horizontalScrollNotice: u, handleScroll: d, handleSetScrollerRef: h, handleSetContainerRef: m } = (0, o.Z)(t),
        p = (0, i.jsx)('div', {
            className: c.tierPreviewsContainer,
            children: (0, i.jsx)('div', {
                className: r()(c.tierPreviews, l),
                children: n
            })
        });
    return (
        !s.tq &&
            (p = (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(a.AdvancedScroller, {
                        className: c.scroller,
                        orientation: 'horizontal',
                        ref: h,
                        onScroll: d,
                        children: p
                    })
                ]
            })),
        (0, i.jsx)('div', {
            className: c.carouselMaxWidth,
            ref: m,
            children: p
        })
    );
}
