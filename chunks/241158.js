n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(392711),
    o = n(481060),
    c = n(70097),
    d = n(626135),
    _ = n(526167),
    u = n(409100),
    E = n(783589),
    T = n(981631),
    I = n(869783),
    R = n(689938),
    g = n(916548);
let N = (e) => {
    let { name: t, title: n, description: r, descriptionCta: E, previewImage: R, videoUrl: N, shouldLoadVideo: C, index: m } = e,
        p = (0, _.rO)(),
        A = a.useRef(null),
        [f, h] = a.useState(0),
        M = (0, l.debounce)(() => {
            d.default.track(T.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        S = () => {
            null != A.current && ((A.current.currentTime = f), A.current.play());
        },
        x = () => {
            null != A.current && (h(A.current.currentTime), A.current.pause());
        },
        b = () =>
            (0, s.jsxs)('div', {
                className: g.whatsNewTextBoxOuter,
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: g.whatsNewBoxHeader,
                        children: n
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: g.whatsNewBoxDescription,
                        children: r
                    }),
                    (0, s.jsx)(u.Z, {
                        className: g.whatsNewBoxButton,
                        onClick: M,
                        buttonText: E,
                        color: o.Button.Colors.BRAND,
                        look: o.Button.Looks.FILLED,
                        showIcon: !1
                    })
                ]
            }),
        O = (e) => {
            let { isLeft: t } = e;
            return (0, s.jsx)('div', {
                className: g.whatsNewArtContainer,
                children: (0, s.jsx)(c.Z, {
                    playsInline: !0,
                    preload: C ? 'auto' : 'none',
                    muted: !0,
                    poster: R,
                    loop: !0,
                    className: i()(g.perkBoxVideo, { [g.leftSideArt]: t }),
                    ref: A,
                    children: (0, s.jsx)('source', {
                        src: N,
                        type: p ? I.m.MP4 : I.m.WEBM
                    })
                })
            });
        };
    return m % 2 != 0
        ? (0, s.jsxs)('div', {
              className: i()(g.whatsNewBoxContainer),
              onMouseEnter: S,
              onFocus: S,
              onBlur: x,
              onMouseLeave: x,
              children: [(0, s.jsx)(b, {}), (0, s.jsx)(O, { isLeft: !1 })]
          })
        : (0, s.jsxs)('div', {
              className: i()(g.whatsNewBoxContainer),
              onMouseEnter: S,
              onFocus: S,
              onBlur: x,
              onMouseLeave: x,
              children: [(0, s.jsx)(O, { isLeft: !0 }), (0, s.jsx)(b, {})]
          });
};
t.Z = a.memo(function (e) {
    let { className: t, shouldLoadVideo: n } = e,
        a = Object.values((0, E.Z)());
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: i()(g.boxBackdrop, t),
            children: [
                (0, s.jsx)(o.Heading, {
                    className: g.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: R.Z.Messages.WHATS_NEW
                }),
                a.map((e, t) =>
                    (0, s.jsx)(
                        N,
                        {
                            shouldLoadVideo: n,
                            ...e,
                            index: t
                        },
                        e.name
                    )
                )
            ]
        })
    });
});
