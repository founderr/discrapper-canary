n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(793030),
    r = n(442837),
    l = n(481060),
    o = n(445986),
    c = n(9807),
    d = n(341176),
    u = n(451478),
    _ = n(981631),
    E = n(701865),
    h = n(689938),
    m = n(408313),
    I = n(902294);
function p(e) {
    let { application: t, carouselItems: p } = e,
        g = (0, r.e7)([u.Z], () => u.Z.isFocused()),
        T = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    className: m.errorImage,
                    src: I,
                    'aria-hidden': !0,
                    alt: ''
                }),
                (0, i.jsx)(s.X6, {
                    variant: 'heading-xl/semibold',
                    children: h.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                })
            ]
        });
    p.forEach((e, n) => {
        e.alt = h.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
            index: n + 1,
            totalImages: p.length,
            name: t.name
        });
    });
    let S = a.useCallback(
        (e, t) => {
            if (e.type === _.s9s.IMG) {
                let t = p.filter((e) => e.type === _.s9s.IMG),
                    a = t.findIndex((t) => t === e);
                if (a < 0) return;
                let s = t.map((e) => ({
                    url: (0, o.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: 'IMAGE'
                }));
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 950120));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                items: s,
                                startingIndex: a,
                                fit: d.D.CONTAIN,
                                shouldHideMediaOptions: !0,
                                shouldAnimateCarousel: !0
                            });
                    },
                    { modalKey: E.U }
                );
            }
        },
        [p]
    );
    return 0 === p.length
        ? null
        : (0, i.jsx)(c.Z, {
              className: m.carousel,
              themedPagination: !0,
              items: p,
              autoplayInterval: 8000,
              paused: !g,
              videoAutoPlay: !0,
              onCurrentItemClick: S,
              errorComponent: T
          });
}
