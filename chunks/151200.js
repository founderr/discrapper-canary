n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(328731),
    l = n(442550),
    u = n(435439),
    c = n(206295),
    d = n(297781),
    _ = n(313201),
    E = n(231338),
    f = n(689938),
    h = n(790246),
    p = n(615934);
function m(e) {
    let { className: t, clickableClassName: n, clickable: i, children: s } = e,
        l = (0, _.Dt)();
    if (null != i && 'href' in i) {
        let { ariaDescription: e, href: u } = i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.HiddenVisually, {
                    id: l,
                    children: e
                }),
                (0, r.jsx)(o.Anchor, {
                    className: a()(t, n),
                    href: u,
                    'aria-describedby': l,
                    children: s
                })
            ]
        });
    }
    let { onClick: u, ariaDescription: c } = null != i ? i : {};
    return (0, r.jsxs)(o.BlockInteractionsContext.Provider, {
        value: null == u,
        children: [
            null != u &&
                null != c &&
                (0, r.jsx)(o.HiddenVisually, {
                    id: l,
                    children: c
                }),
            (0, r.jsx)(o.Clickable, {
                onClick: u,
                'aria-describedby': null == u ? void 0 : l,
                className: a()(t, null != u && n),
                children: s
            })
        ]
    });
}
function I(e) {
    let { clickable: t, ...n } = e;
    return (0, r.jsx)(m, {
        ...n,
        clickable: {
            ...t,
            ariaDescription: ''
        },
        clickableClassName: p.clickable
    });
}
function T(e) {
    let { entry: t, channel: n, title: i, subtitle: p, thumbnailUrl: T, titleClickable: g, subtitleClickable: S, thumbnailClickable: A, providerIconProps: v, style: N = {} } = e,
        O = (0, _.Dt)(),
        { primaryColor: R, secondaryColor: C } = (0, c.Z)(T);
    return (
        null != T && (N.background = 'linear-gradient(45deg, '.concat(R, ', ').concat(C, ')')),
        (0, r.jsx)(o.ThemeProvider, {
            theme: E.BR.DARK,
            children: (e) =>
                (0, r.jsxs)('figure', {
                    'aria-roledescription': f.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                    'aria-labelledby': O,
                    'data-disable-adaptive-theme': !0,
                    className: a()(h.container, e),
                    style: N,
                    children: [
                        (0, r.jsx)(m, {
                            className: h.thumbnailContainer,
                            clickableClassName: h.clickable,
                            clickable: A,
                            children: (0, r.jsx)(l.f, {
                                src: T,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: h.infoContainer,
                            children: [
                                (0, r.jsx)(s.Z, {
                                    channel: n,
                                    entry: t,
                                    className: h.users
                                }),
                                (0, r.jsx)(o.Spacer, { size: 2 }),
                                (0, r.jsx)(I, {
                                    clickable: g,
                                    className: h.clickableText,
                                    children: (0, r.jsx)(o.Heading, {
                                        id: O,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: a()(h.textPrimary, h.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: i
                                    })
                                }),
                                null != p
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Spacer, { size: 2 }),
                                              (0, r.jsx)(I, {
                                                  clickable: S,
                                                  className: h.clickableText,
                                                  children: (0, r.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: a()(h.textSecondary, h.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: p
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, r.jsx)(d.PZ, {
                                    className: h.badges,
                                    entry: t,
                                    location: d.Gt.EMBED
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: h.headerIcons,
                            children: null != v ? (0, r.jsx)(u.Z, { ...v }) : null
                        })
                    ]
                })
        })
    );
}
