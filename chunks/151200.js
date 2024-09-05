l.d(n, {
    Z: function () {
        return h;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    i = l.n(r),
    a = l(481060),
    s = l(328731),
    u = l(442550),
    o = l(435439),
    c = l(206295),
    d = l(297781),
    m = l(313201),
    p = l(231338),
    f = l(689938),
    E = l(917056),
    N = l(671656);
function C(e) {
    let { className: n, clickableClassName: l, clickable: r, children: s } = e,
        u = (0, m.Dt)();
    if (null != r && 'href' in r) {
        let { ariaDescription: e, href: o } = r;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(a.HiddenVisually, {
                    id: u,
                    children: e
                }),
                (0, t.jsx)(a.Anchor, {
                    className: i()(n, l),
                    href: o,
                    'aria-describedby': u,
                    children: s
                })
            ]
        });
    }
    let { onClick: o, ariaDescription: c } = null != r ? r : {};
    return (0, t.jsxs)(a.BlockInteractionsContext.Provider, {
        value: null == o,
        children: [
            null != o &&
                null != c &&
                (0, t.jsx)(a.HiddenVisually, {
                    id: u,
                    children: c
                }),
            (0, t.jsx)(a.Clickable, {
                onClick: o,
                'aria-describedby': null == o ? void 0 : u,
                className: i()(n, null != o && l),
                children: s
            })
        ]
    });
}
function v(e) {
    let { clickable: n, ...l } = e;
    return (0, t.jsx)(C, {
        ...l,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: N.clickable
    });
}
function h(e) {
    let { entry: n, channel: l, title: r, subtitle: N, thumbnailUrl: h, titleClickable: _, subtitleClickable: x, thumbnailClickable: T, providerIconProps: I, style: g = {} } = e,
        S = (0, m.Dt)(),
        { primaryColor: O, secondaryColor: j } = (0, c.Z)(h);
    return (
        null != h && (g.background = 'linear-gradient(45deg, '.concat(O, ', ').concat(j, ')')),
        (0, t.jsx)(a.ThemeProvider, {
            theme: p.BR.DARK,
            children: (e) =>
                (0, t.jsxs)('figure', {
                    'aria-roledescription': f.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                    'aria-labelledby': S,
                    'data-disable-adaptive-theme': !0,
                    className: i()(E.container, e),
                    style: g,
                    children: [
                        (0, t.jsx)(C, {
                            className: E.thumbnailContainer,
                            clickableClassName: E.clickable,
                            clickable: T,
                            children: (0, t.jsx)(u.f, {
                                src: h,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, t.jsxs)('div', {
                            className: E.infoContainer,
                            children: [
                                (0, t.jsx)(s.Z, {
                                    channel: l,
                                    entry: n,
                                    className: E.users
                                }),
                                (0, t.jsx)(a.Spacer, { size: 2 }),
                                (0, t.jsx)(v, {
                                    clickable: _,
                                    className: E.clickableText,
                                    children: (0, t.jsx)(a.Heading, {
                                        id: S,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: i()(E.textPrimary, E.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: r
                                    })
                                }),
                                null != N
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(a.Spacer, { size: 2 }),
                                              (0, t.jsx)(v, {
                                                  clickable: x,
                                                  className: E.clickableText,
                                                  children: (0, t.jsx)(a.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: i()(E.textSecondary, E.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: N
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, t.jsx)(d.PZ, {
                                    className: E.badges,
                                    entry: n,
                                    location: d.Gt.EMBED
                                })
                            ]
                        }),
                        (0, t.jsx)('div', {
                            className: E.headerIcons,
                            children: null != I ? (0, t.jsx)(o.Z, { ...I }) : null
                        })
                    ]
                })
        })
    );
}
