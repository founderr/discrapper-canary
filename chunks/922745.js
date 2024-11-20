n.d(t, {
    Z: function () {
        return b;
    },
    r: function () {
        return I;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(692547),
    l = n(215569),
    u = n(481060),
    c = n(600164),
    d = n(528144),
    f = n(312956),
    _ = n(501967),
    p = n(19780),
    h = n(540028),
    m = n(507675),
    g = n(273716),
    E = n(388032),
    v = n(497041);
function I(e) {
    let { title: t, onJumpToChannel: n, onHide: i, idle: a, preventIdleComponent: l } = e,
        c = (0, s.e7)([p.Z], () => p.Z.getChannelId()),
        _ =
            null != c
                ? (0, r.jsx)(h.Z, {
                      voiceChannelId: c,
                      idle: a
                  })
                : null,
        { enabled: m } = f.Z.useExperiment({ location: 'PictureInPicturePlayer' });
    return (0, r.jsxs)(l, {
        className: v.headerIdleContainer,
        children: [
            (0, r.jsxs)(u.Clickable, {
                className: v.headerTitle,
                onClick: n,
                children: [
                    (0, r.jsx)(u.ArrowSmallLeftIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        'aria-label': E.intl.string(E.t.mSfLs7),
                        className: v.backButton,
                        width: 20,
                        height: 20
                    }),
                    (0, r.jsx)(d.Z, {
                        className: v.headerText,
                        size: d.Z.Sizes.SIZE_16,
                        color: o.Z.unsafe_rawColors.WHITE_500.css,
                        children: t
                    })
                ]
            }),
            m && null != i
                ? (0, r.jsx)(g.Z, {
                      onClick: i,
                      label: E.intl.string(E.t.BEuDEh)
                  })
                : null,
            _
        ]
    });
}
function b(e) {
    let { children: t, idle: n, onJumpToChannel: i, onHide: s, backgroundKey: o, onActive: u, onForceIdle: d, renderBottomLeftControls: f, renderBottomRightControls: p, screenMessage: h, hideControls: g = !1, className: E, innerClassName: b, ...T } = e;
    return (0, r.jsxs)('div', {
        onMouseMove: u,
        onMouseDown: u,
        onMouseLeave: d,
        className: a()(v.pictureInPictureVideo, { [v.idle]: n }, E),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(l.W, {
                children: (0, r.jsx)(
                    _.B,
                    {
                        className: b,
                        children: t
                    },
                    o
                )
            }),
            null != h
                ? (0, r.jsx)(m.Z, {
                      size: 'small',
                      ...h
                  })
                : null,
            !g &&
                (0, r.jsxs)('div', {
                    className: a()(v.videoControls, 'theme-dark'),
                    children: [
                        (0, r.jsx)('div', {
                            className: v.topControls,
                            children: (0, r.jsx)(I, {
                                idle: n,
                                onJumpToChannel: i,
                                onHide: s,
                                ...T
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: v.bottomControls,
                            children: [
                                (0, r.jsx)(c.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: '50%',
                                    align: c.Z.Align.CENTER,
                                    className: v.bottomLeftControls,
                                    children: null == f ? void 0 : f()
                                }),
                                (0, r.jsx)(c.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: c.Z.Justify.END,
                                    basis: '50%',
                                    align: c.Z.Align.CENTER,
                                    children: null == p ? void 0 : p()
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
