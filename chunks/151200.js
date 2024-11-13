t.d(n, {
    Z: function () {
        return _;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(481060),
    o = t(328731),
    s = t(442550),
    c = t(435439),
    u = t(206295),
    d = t(297781),
    m = t(313201),
    f = t(231338),
    p = t(388032),
    x = t(790246),
    h = t(615934);
function v(e) {
    let { className: n, clickableClassName: t, clickable: i, children: o } = e,
        s = (0, m.Dt)();
    if (null != i && 'href' in i) {
        let { ariaDescription: e, href: c } = i;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(a.HiddenVisually, {
                    id: s,
                    children: e
                }),
                (0, l.jsx)(a.Anchor, {
                    className: r()(n, t),
                    href: c,
                    'aria-describedby': s,
                    children: o
                })
            ]
        });
    }
    let { onClick: c, ariaDescription: u } = null != i ? i : {};
    return (0, l.jsxs)(a.BlockInteractionsContext.Provider, {
        value: null == c,
        children: [
            null != c &&
                null != u &&
                (0, l.jsx)(a.HiddenVisually, {
                    id: s,
                    children: u
                }),
            (0, l.jsx)(a.Clickable, {
                onClick: c,
                'aria-describedby': null == c ? void 0 : s,
                className: r()(n, null != c && t),
                children: o
            })
        ]
    });
}
function C(e) {
    let { clickable: n, ...t } = e;
    return (0, l.jsx)(v, {
        ...t,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: h.clickable
    });
}
function _(e) {
    let { entry: n, channel: t, title: i, subtitle: h, thumbnailUrl: _, titleClickable: g, subtitleClickable: I, thumbnailClickable: b, providerIconProps: j, style: S = {} } = e,
        N = (0, m.Dt)(),
        { primaryColor: E, secondaryColor: T } = (0, u.Z)(_);
    return (
        null != _ && (S.background = 'linear-gradient(45deg, '.concat(E, ', ').concat(T, ')')),
        (0, l.jsx)(a.ThemeProvider, {
            theme: f.BR.DARK,
            children: (e) =>
                (0, l.jsxs)('figure', {
                    'aria-roledescription': p.intl.string(p.t.zFfUhI),
                    'aria-labelledby': N,
                    'data-disable-adaptive-theme': !0,
                    className: r()(x.container, e),
                    style: S,
                    children: [
                        (0, l.jsx)(v, {
                            className: x.thumbnailContainer,
                            clickableClassName: x.clickable,
                            clickable: b,
                            children: (0, l.jsx)(s.f, {
                                src: _,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, l.jsxs)('div', {
                            className: x.infoContainer,
                            children: [
                                (0, l.jsx)(o.Z, {
                                    channel: t,
                                    entry: n,
                                    className: x.users
                                }),
                                (0, l.jsx)(a.Spacer, { size: 2 }),
                                (0, l.jsx)(C, {
                                    clickable: g,
                                    className: x.clickableText,
                                    children: (0, l.jsx)(a.Heading, {
                                        id: N,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: r()(x.textPrimary, x.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: i
                                    })
                                }),
                                null != h
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(a.Spacer, { size: 2 }),
                                              (0, l.jsx)(C, {
                                                  clickable: I,
                                                  className: x.clickableText,
                                                  children: (0, l.jsx)(a.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: r()(x.textSecondary, x.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: h
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, l.jsx)(d.PZ, {
                                    className: x.badges,
                                    entry: n,
                                    location: d.Gt.EMBED
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: x.headerIcons,
                            children: null != j ? (0, l.jsx)(c.Z, { ...j }) : null
                        })
                    ]
                })
        })
    );
}
