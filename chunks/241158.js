n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(481060),
    o = n(70097),
    c = n(409100),
    d = n(783589),
    _ = n(689938),
    u = n(916548);
let E = (e) => {
    let { title: t, description: n, descriptionCta: r, previewImage: d, videoUrl: _, shouldLoadVideo: E, index: T } = e,
        I = a.useRef(null),
        [R, g] = a.useState(0),
        N = () => {
            null != I.current && ((I.current.currentTime = R), I.current.play());
        },
        C = () => {
            null != I.current && (g(I.current.currentTime), I.current.pause());
        },
        m = () =>
            (0, s.jsxs)('div', {
                className: u.whatsNewTextBoxOuter,
                children: [
                    (0, s.jsx)(l.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: u.whatsNewBoxHeader,
                        children: t
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: u.whatsNewBoxDescription,
                        children: n
                    }),
                    (0, s.jsx)(c.Z, {
                        className: u.whatsNewBoxButton,
                        buttonText: r,
                        color: l.Button.Colors.BRAND,
                        look: l.Button.Looks.FILLED,
                        showIcon: !1
                    })
                ]
            }),
        p = (e) => {
            let { isLeft: t } = e;
            return (0, s.jsx)('div', {
                className: u.whatsNewArtContainer,
                children: (0, s.jsx)(o.Z, {
                    src: _,
                    playsInline: !0,
                    preload: E ? 'auto' : 'none',
                    muted: !0,
                    poster: d,
                    loop: !0,
                    className: i()(u.perkBoxVideo, { [u.leftSideArt]: t }),
                    ref: I
                })
            });
        };
    return T % 2 != 0
        ? (0, s.jsxs)('div', {
              className: i()(u.whatsNewBoxContainer),
              onMouseEnter: N,
              onFocus: N,
              onBlur: C,
              onMouseLeave: C,
              children: [(0, s.jsx)(m, {}), (0, s.jsx)(p, { isLeft: !1 })]
          })
        : (0, s.jsxs)('div', {
              className: i()(u.whatsNewBoxContainer),
              onMouseEnter: N,
              onFocus: N,
              onBlur: C,
              onMouseLeave: C,
              children: [(0, s.jsx)(p, { isLeft: !0 }), (0, s.jsx)(m, {})]
          });
};
t.Z = a.memo(function (e) {
    let { className: t, shouldLoadVideo: n } = e,
        a = Object.values((0, d.Z)());
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: i()(u.boxBackdrop, t),
            children: [
                (0, s.jsx)(l.Heading, {
                    className: u.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: _.Z.Messages.WHATS_NEW
                }),
                a.map((e, t) =>
                    (0, s.jsx)(
                        E,
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
