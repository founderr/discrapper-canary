l.d(n, {
    Z: function () {
        return T;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    i = l.n(r),
    a = l(481060),
    s = l(328731),
    u = l(435439),
    o = l(206295),
    c = l(297781),
    d = l(43205),
    m = l(313201),
    f = l(792125),
    E = l(231338),
    p = l(689938),
    C = l(917056),
    N = l(671656);
function v(e) {
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
function _(e) {
    let { clickable: n, ...l } = e;
    return (0, t.jsx)(v, {
        ...l,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: N.clickable
    });
}
function T(e) {
    let { entry: n, channel: l, title: r, subtitle: N, thumbnailUrl: T, titleClickable: h, subtitleClickable: I, thumbnailClickable: x, providerIconProps: O, style: S = {} } = e,
        g = (0, m.Dt)(),
        { primaryColor: Z, secondaryColor: A } = (0, o.Z)(T);
    return (
        null != T && (S.background = 'linear-gradient(45deg, '.concat(Z, ', ').concat(A, ')')),
        (0, t.jsx)(a.ThemeContextProvider, {
            theme: E.BR.DARK,
            children: (0, t.jsxs)('figure', {
                'aria-roledescription': p.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                'aria-labelledby': g,
                'data-disable-adaptive-theme': !0,
                className: i()(C.container, (0, f.Q)(E.BR.DARK)),
                style: S,
                children: [
                    (0, t.jsx)(v, {
                        className: C.thumbnailContainer,
                        clickableClassName: C.clickable,
                        clickable: x,
                        children: (0, t.jsx)(d.f, {
                            src: T,
                            constrain: 'width',
                            size: 64,
                            'aria-hidden': !0
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: C.infoContainer,
                        children: [
                            (0, t.jsx)(s.Z, {
                                channel: l,
                                entry: n,
                                className: C.users
                            }),
                            (0, t.jsx)(a.Spacer, { size: 2 }),
                            (0, t.jsx)(_, {
                                clickable: h,
                                children: (0, t.jsx)(a.Heading, {
                                    id: g,
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: i()(C.textPrimary, C.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: r
                                })
                            }),
                            null != N
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(a.Spacer, { size: 2 }),
                                          (0, t.jsx)(_, {
                                              clickable: I,
                                              children: (0, t.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: i()(C.textSecondary, C.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: N
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, t.jsx)(c.PZ, {
                                className: C.badges,
                                entry: n,
                                location: c.Gt.EMBED
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: C.headerIcons,
                        children: null != O ? (0, t.jsx)(u.Z, { ...O }) : null
                    })
                ]
            })
        })
    );
}
