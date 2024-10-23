n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(873546),
    r = n(481060),
    o = n(470134),
    c = n(678064);
function u(e) {
    let { guildId: t, children: n, className: s } = e,
        { horizontalScrollNotice: u, handleScroll: d, handleSetScrollerRef: h, handleSetContainerRef: m } = (0, o.Z)(t),
        p = (0, i.jsx)('div', {
            className: c.tierPreviewsContainer,
            children: (0, i.jsx)('div', {
                className: a()(c.tierPreviews, s),
                children: n
            })
        });
    return (
        !l.tq &&
            (p = (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(r.AdvancedScroller, {
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
