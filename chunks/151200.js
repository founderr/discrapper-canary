l.d(n, {
    Z: function () {
        return g;
    }
});
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(481060),
    s = l(328731),
    o = l(442550),
    u = l(435439),
    c = l(206295),
    d = l(297781),
    m = l(313201),
    p = l(231338),
    f = l(388032),
    x = l(346615),
    v = l(40305);
function h(e) {
    let { className: n, clickableClassName: l, clickable: i, children: s } = e,
        o = (0, m.Dt)();
    if (null != i && 'href' in i) {
        let { ariaDescription: e, href: u } = i;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(a.HiddenVisually, {
                    id: o,
                    children: e
                }),
                (0, t.jsx)(a.Anchor, {
                    className: r()(n, l),
                    href: u,
                    'aria-describedby': o,
                    children: s
                })
            ]
        });
    }
    let { onClick: u, ariaDescription: c } = null != i ? i : {};
    return (0, t.jsxs)(a.BlockInteractionsContext.Provider, {
        value: null == u,
        children: [
            null != u &&
                null != c &&
                (0, t.jsx)(a.HiddenVisually, {
                    id: o,
                    children: c
                }),
            (0, t.jsx)(a.Clickable, {
                onClick: u,
                'aria-describedby': null == u ? void 0 : o,
                className: r()(n, null != u && l),
                children: s
            })
        ]
    });
}
function C(e) {
    let { clickable: n, ...l } = e;
    return (0, t.jsx)(h, {
        ...l,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: v.clickable
    });
}
function g(e) {
    let { entry: n, channel: l, title: i, subtitle: v, thumbnailUrl: g, titleClickable: j, subtitleClickable: S, thumbnailClickable: I, providerIconProps: N, style: E = {} } = e,
        b = (0, m.Dt)(),
        { primaryColor: Z, secondaryColor: T } = (0, c.Z)(g);
    return (
        null != g && (E.background = 'linear-gradient(45deg, '.concat(Z, ', ').concat(T, ')')),
        (0, t.jsx)(a.ThemeProvider, {
            theme: p.BR.DARK,
            children: (e) =>
                (0, t.jsxs)('figure', {
                    'aria-roledescription': f.intl.string(f.t.zFfUhI),
                    'aria-labelledby': b,
                    'data-disable-adaptive-theme': !0,
                    className: r()(x.container, e),
                    style: E,
                    children: [
                        (0, t.jsx)(h, {
                            className: x.thumbnailContainer,
                            clickableClassName: x.clickable,
                            clickable: I,
                            children: (0, t.jsx)(o.f, {
                                src: g,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, t.jsxs)('div', {
                            className: x.infoContainer,
                            children: [
                                (0, t.jsx)(s.Z, {
                                    channel: l,
                                    entry: n,
                                    className: x.users
                                }),
                                (0, t.jsx)(a.Spacer, { size: 2 }),
                                (0, t.jsx)(C, {
                                    clickable: j,
                                    className: x.clickableText,
                                    children: (0, t.jsx)(a.Heading, {
                                        id: b,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: r()(x.textPrimary, x.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: i
                                    })
                                }),
                                null != v
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(a.Spacer, { size: 2 }),
                                              (0, t.jsx)(C, {
                                                  clickable: S,
                                                  className: x.clickableText,
                                                  children: (0, t.jsx)(a.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: r()(x.textSecondary, x.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: v
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, t.jsx)(d.PZ, {
                                    className: x.badges,
                                    entry: n,
                                    location: d.Gt.EMBED
                                })
                            ]
                        }),
                        (0, t.jsx)('div', {
                            className: x.headerIcons,
                            children: null != N ? (0, t.jsx)(u.Z, { ...N }) : null
                        })
                    ]
                })
        })
    );
}
