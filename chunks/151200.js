l.d(n, {
    Z: function () {
        return v;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    a = l.n(r),
    i = l(481060),
    s = l(328731),
    u = l(442550),
    o = l(435439),
    c = l(206295),
    d = l(297781),
    m = l(313201),
    E = l(792125),
    p = l(231338),
    N = l(689938),
    f = l(917056),
    _ = l(671656);
function C(e) {
    let { className: n, clickableClassName: l, clickable: r, children: s } = e,
        u = (0, m.Dt)();
    if (null != r && 'href' in r) {
        let { ariaDescription: e, href: o } = r;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(i.HiddenVisually, {
                    id: u,
                    children: e
                }),
                (0, t.jsx)(i.Anchor, {
                    className: a()(n, l),
                    href: o,
                    'aria-describedby': u,
                    children: s
                })
            ]
        });
    }
    let { onClick: o, ariaDescription: c } = null != r ? r : {};
    return (0, t.jsxs)(i.BlockInteractionsContext.Provider, {
        value: null == o,
        children: [
            null != o &&
                null != c &&
                (0, t.jsx)(i.HiddenVisually, {
                    id: u,
                    children: c
                }),
            (0, t.jsx)(i.Clickable, {
                onClick: o,
                'aria-describedby': null == o ? void 0 : u,
                className: a()(n, null != o && l),
                children: s
            })
        ]
    });
}
function T(e) {
    let { clickable: n, ...l } = e;
    return (0, t.jsx)(C, {
        ...l,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: _.clickable
    });
}
function v(e) {
    let { entry: n, channel: l, title: r, subtitle: _, thumbnailUrl: v, titleClickable: h, subtitleClickable: x, thumbnailClickable: I, providerIconProps: S, style: O = {} } = e,
        g = (0, m.Dt)(),
        { primaryColor: j, secondaryColor: Z } = (0, c.Z)(v);
    return (
        null != v && (O.background = 'linear-gradient(45deg, '.concat(j, ', ').concat(Z, ')')),
        (0, t.jsx)(i.ThemeContextProvider, {
            theme: p.BR.DARK,
            children: (0, t.jsxs)('figure', {
                'aria-roledescription': N.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                'aria-labelledby': g,
                'data-disable-adaptive-theme': !0,
                className: a()(f.container, (0, E.Q)(p.BR.DARK)),
                style: O,
                children: [
                    (0, t.jsx)(C, {
                        className: f.thumbnailContainer,
                        clickableClassName: f.clickable,
                        clickable: I,
                        children: (0, t.jsx)(u.f, {
                            src: v,
                            constrain: 'width',
                            size: 64,
                            'aria-hidden': !0
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: f.infoContainer,
                        children: [
                            (0, t.jsx)(s.Z, {
                                channel: l,
                                entry: n,
                                className: f.users
                            }),
                            (0, t.jsx)(i.Spacer, { size: 2 }),
                            (0, t.jsx)(T, {
                                clickable: h,
                                className: f.clickableText,
                                children: (0, t.jsx)(i.Heading, {
                                    id: g,
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: a()(f.textPrimary, f.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: r
                                })
                            }),
                            null != _
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(i.Spacer, { size: 2 }),
                                          (0, t.jsx)(T, {
                                              clickable: x,
                                              className: f.clickableText,
                                              children: (0, t.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: a()(f.textSecondary, f.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: _
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, t.jsx)(d.PZ, {
                                className: f.badges,
                                entry: n,
                                location: d.Gt.EMBED
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: f.headerIcons,
                        children: null != S ? (0, t.jsx)(o.Z, { ...S }) : null
                    })
                ]
            })
        })
    );
}
