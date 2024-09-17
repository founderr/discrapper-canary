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
    m = n(916548);
let g = (e) => {
    let { name: t, title: n, description: r, descriptionCta: E, previewImage: R, videoUrl: g, shouldLoadVideo: N, index: C } = e,
        p = (0, _.rO)(),
        A = a.useRef(null),
        [f, h] = a.useState(0),
        S = (0, l.debounce)(() => {
            d.default.track(T.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        M = () => {
            null != A.current && ((A.current.currentTime = f), A.current.play());
        },
        x = () => {
            null != A.current && (h(A.current.currentTime), A.current.pause());
        },
        b = () =>
            (0, s.jsxs)('div', {
                className: m.whatsNewTextBoxOuter,
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: m.whatsNewBoxHeader,
                        children: n
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: m.whatsNewBoxDescription,
                        children: r
                    }),
                    (0, s.jsx)(u.Z, {
                        className: m.whatsNewBoxButton,
                        onClick: S,
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
                className: m.whatsNewArtContainer,
                children: (0, s.jsx)(c.Z, {
                    playsInline: !0,
                    preload: N ? 'auto' : 'none',
                    muted: !0,
                    poster: R,
                    loop: !0,
                    className: i()(m.perkBoxVideo, { [m.leftSideArt]: t }),
                    ref: A,
                    children: (0, s.jsx)('source', {
                        src: g,
                        type: p ? I.m.MP4 : I.m.WEBM
                    })
                })
            });
        };
    return C % 2 != 0
        ? (0, s.jsxs)('div', {
              className: i()(m.whatsNewBoxContainer),
              onMouseEnter: M,
              onFocus: M,
              onBlur: x,
              onMouseLeave: x,
              children: [(0, s.jsx)(b, {}), (0, s.jsx)(O, { isLeft: !1 })]
          })
        : (0, s.jsxs)('div', {
              className: i()(m.whatsNewBoxContainer),
              onMouseEnter: M,
              onFocus: M,
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
            className: i()(m.boxBackdrop, t),
            children: [
                (0, s.jsx)(o.Heading, {
                    className: m.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: R.Z.Messages.WHATS_NEW
                }),
                a.map((e, t) =>
                    (0, s.jsx)(
                        g,
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
