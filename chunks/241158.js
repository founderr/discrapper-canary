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
    E = n(831964),
    T = n(981631),
    I = n(869783),
    R = n(689938),
    m = n(916548);
let N = (e) => {
    let { name: t, title: n, description: r, descriptionCta: E, previewImage: R, videoUrl: N, shouldLoadVideo: g, isCompact: C, onClick: p, index: f } = e,
        A = (0, _.rO)(),
        h = a.useRef(null),
        [S, M] = a.useState(0),
        x = (0, l.debounce)(() => {
            d.default.track(T.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        b = () => {
            null != h.current && ((h.current.currentTime = S), h.current.play());
        },
        O = () => {
            null != h.current && (M(h.current.currentTime), h.current.pause());
        },
        v = () =>
            (0, s.jsxs)('div', {
                className: i()({
                    [m.whatsNewTextBoxOuter]: !C,
                    [m.compactTextBox]: C
                }),
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: i()({
                            [m.whatsNewBoxHeader]: !C,
                            [m.compactBoxHeader]: C
                        }),
                        children: n
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: m.whatsNewBoxDescription,
                        children: r
                    }),
                    null != E &&
                        (null != p
                            ? (0, s.jsx)(o.Button, {
                                  className: m.whatsNewBoxButton,
                                  onClick: () => {
                                      x(), p();
                                  },
                                  children: E
                              })
                            : (0, s.jsx)(u.Z, {
                                  className: m.whatsNewBoxButton,
                                  onClick: x,
                                  buttonText: E,
                                  color: o.Button.Colors.BRAND,
                                  look: o.Button.Looks.FILLED,
                                  showIcon: !1
                              }))
                ]
            }),
        P = (e) => {
            let { isLeft: t } = e;
            return (0, s.jsx)('div', {
                className: i()({
                    [m.whatsNewArtContainer]: !C,
                    [m.compactBoxArtContainer]: C
                }),
                children: (0, s.jsx)(c.Z, {
                    playsInline: !0,
                    preload: g ? 'auto' : 'none',
                    muted: !0,
                    poster: R,
                    loop: !0,
                    className: i()({
                        [m.perkBoxVideo]: !C,
                        [m.leftSideArt]: t && !C,
                        [m.compactBoxVideo]: C
                    }),
                    ref: h,
                    children: (0, s.jsx)('source', {
                        src: N,
                        type: A ? I.m.MP4 : I.m.WEBM
                    })
                })
            });
        };
    return f % 2 != 0
        ? (0, s.jsxs)('div', {
              className: i()({
                  [m.whatsNewBoxContainer]: !C,
                  [m.compactBoxContainer]: C
              }),
              onMouseEnter: b,
              onFocus: b,
              onBlur: O,
              onMouseLeave: O,
              children: [(0, s.jsx)(v, {}), (0, s.jsx)(P, { isLeft: !1 })]
          })
        : (0, s.jsxs)('div', {
              className: i()({
                  [m.whatsNewBoxContainer]: !C,
                  [m.compactBoxContainer]: C
              }),
              onMouseEnter: b,
              onFocus: b,
              onBlur: O,
              onMouseLeave: O,
              children: [(0, s.jsx)(P, { isLeft: !0 }), (0, s.jsx)(v, {})]
          });
};
t.Z = a.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: a = !1 } = e,
        r = Object.values((0, E.ZP)(a)),
        l = a ? Object.values((0, E.__)()) : null;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: i()(m.boxBackdrop, t),
            children: [
                (0, s.jsx)(o.Heading, {
                    className: m.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: a ? R.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO : R.Z.Messages.WHATS_NEW
                }),
                r.map((e, t) =>
                    (0, s.jsx)(
                        N,
                        {
                            shouldLoadVideo: n,
                            ...e,
                            index: t
                        },
                        e.name
                    )
                ),
                null != l &&
                    (0, s.jsx)('div', {
                        className: m.compactBoxOuterContainer,
                        children: l.map((e, t) =>
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
                    })
            ]
        })
    });
});
