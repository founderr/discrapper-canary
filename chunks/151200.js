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
    p = l(792125),
    E = l(231338),
    f = l(689938),
    N = l(917056),
    C = l(671656);
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
        clickableClassName: C.clickable
    });
}
function h(e) {
    let { entry: n, channel: l, title: r, subtitle: C, thumbnailUrl: h, titleClickable: x, subtitleClickable: T, thumbnailClickable: I, providerIconProps: g, style: S = {} } = e,
        O = (0, m.Dt)(),
        { primaryColor: j, secondaryColor: Z } = (0, c.Z)(h);
    return (
        null != h && (S.background = 'linear-gradient(45deg, '.concat(j, ', ').concat(Z, ')')),
        (0, t.jsx)(a.ThemeContextProvider, {
            theme: E.BR.DARK,
            children: (0, t.jsxs)('figure', {
                'aria-roledescription': f.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                'aria-labelledby': O,
                'data-disable-adaptive-theme': !0,
                className: i()(N.container, (0, p.Q)(E.BR.DARK)),
                style: S,
                children: [
                    (0, t.jsx)(v, {
                        className: N.thumbnailContainer,
                        clickableClassName: N.clickable,
                        clickable: I,
                        children: (0, t.jsx)(u.f, {
                            src: h,
                            constrain: 'width',
                            size: 64,
                            'aria-hidden': !0
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: N.infoContainer,
                        children: [
                            (0, t.jsx)(s.Z, {
                                channel: l,
                                entry: n,
                                className: N.users
                            }),
                            (0, t.jsx)(a.Spacer, { size: 2 }),
                            (0, t.jsx)(_, {
                                clickable: x,
                                className: N.clickableText,
                                children: (0, t.jsx)(a.Heading, {
                                    id: O,
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: i()(N.textPrimary, N.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: r
                                })
                            }),
                            null != C
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(a.Spacer, { size: 2 }),
                                          (0, t.jsx)(_, {
                                              clickable: T,
                                              className: N.clickableText,
                                              children: (0, t.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: i()(N.textSecondary, N.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: C
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, t.jsx)(d.PZ, {
                                className: N.badges,
                                entry: n,
                                location: d.Gt.EMBED
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: N.headerIcons,
                        children: null != g ? (0, t.jsx)(o.Z, { ...g }) : null
                    })
                ]
            })
        })
    );
}
