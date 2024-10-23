n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(793030),
    r = n(442837),
    l = n(445986),
    o = n(9807),
    c = n(341176),
    d = n(312097),
    u = n(451478),
    _ = n(981631),
    E = n(689938),
    h = n(408313),
    m = n(902294);
function I(e) {
    let { application: t, carouselItems: n } = e,
        I = (0, r.e7)([u.Z], () => u.Z.isFocused()),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    className: h.errorImage,
                    src: m,
                    'aria-hidden': !0,
                    alt: ''
                }),
                (0, i.jsx)(s.X6, {
                    variant: 'heading-xl/semibold',
                    children: E.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                })
            ]
        });
    n.forEach((e, i) => {
        e.alt = E.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
            index: i + 1,
            totalImages: n.length,
            name: t.name
        });
    });
    let g = a.useCallback(
        (e, t) => {
            if (e.type === _.s9s.IMG) {
                let t = n.filter((e) => e.type === _.s9s.IMG),
                    i = t.findIndex((t) => t === e);
                if (i < 0) return;
                let a = t.map((e) => ({
                    url: (0, l.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: 'IMAGE'
                }));
                (0, d.K)({
                    items: a,
                    startingIndex: i,
                    fit: c.D.CONTAIN,
                    shouldHideMediaOptions: !0,
                    shouldAnimateCarousel: !0,
                    location: 'GlobalDiscoveryAppsDetailCarousel'
                });
            }
        },
        [n]
    );
    return 0 === n.length
        ? null
        : (0, i.jsx)(o.Z, {
              className: h.carousel,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8000,
              paused: !I,
              videoAutoPlay: !0,
              onCurrentItemClick: g,
              errorComponent: p
          });
}
