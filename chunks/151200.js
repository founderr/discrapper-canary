t.d(n, {
    Z: function () {
        return v;
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
    h = t(790246),
    _ = t(615934);
function x(e) {
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
    return (0, l.jsx)(x, {
        ...t,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: _.clickable
    });
}
function v(e) {
    let { entry: n, channel: t, title: i, subtitle: _, thumbnailUrl: v, titleClickable: b, subtitleClickable: g, thumbnailClickable: I, providerIconProps: S, style: j = {} } = e,
        y = (0, m.Dt)(),
        { primaryColor: E, secondaryColor: T } = (0, u.Z)(v);
    return (
        null != v && (j.background = 'linear-gradient(45deg, '.concat(E, ', ').concat(T, ')')),
        (0, l.jsx)(a.ThemeProvider, {
            theme: f.BR.DARK,
            children: (e) =>
                (0, l.jsxs)('figure', {
                    'aria-roledescription': p.intl.string(p.t.zFfUhI),
                    'aria-labelledby': y,
                    'data-disable-adaptive-theme': !0,
                    className: r()(h.container, e),
                    style: j,
                    children: [
                        (0, l.jsx)(x, {
                            className: h.thumbnailContainer,
                            clickableClassName: h.clickable,
                            clickable: I,
                            children: (0, l.jsx)(s.f, {
                                src: v,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, l.jsxs)('div', {
                            className: h.infoContainer,
                            children: [
                                (0, l.jsx)(o.Z, {
                                    channel: t,
                                    entry: n,
                                    className: h.users
                                }),
                                (0, l.jsx)(a.Spacer, { size: 2 }),
                                (0, l.jsx)(C, {
                                    clickable: b,
                                    className: h.clickableText,
                                    children: (0, l.jsx)(a.Heading, {
                                        id: y,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: r()(h.textPrimary, h.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: i
                                    })
                                }),
                                null != _
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(a.Spacer, { size: 2 }),
                                              (0, l.jsx)(C, {
                                                  clickable: g,
                                                  className: h.clickableText,
                                                  children: (0, l.jsx)(a.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: r()(h.textSecondary, h.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: _
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, l.jsx)(d.PZ, {
                                    className: h.badges,
                                    entry: n,
                                    location: d.Gt.EMBED
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: h.headerIcons,
                            children: null != S ? (0, l.jsx)(c.Z, { ...S }) : null
                        })
                    ]
                })
        })
    );
}
