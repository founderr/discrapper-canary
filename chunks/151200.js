t.d(n, {
    Z: function () {
        return N;
    }
});
var l = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(328731),
    s = t(435439),
    c = t(206295),
    u = t(297781),
    d = t(43205),
    m = t(313201),
    _ = t(792125),
    f = t(231338),
    p = t(689938),
    E = t(917056),
    I = t(671656);
function C(e) {
    let { className: n, clickableClassName: t, clickable: a, children: o } = e,
        s = (0, m.Dt)();
    if (null != a && 'href' in a) {
        let { ariaDescription: e, href: c } = a;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.HiddenVisually, {
                    id: s,
                    children: e
                }),
                (0, l.jsx)(r.Anchor, {
                    className: i()(n, t),
                    href: c,
                    'aria-describedby': s,
                    children: o
                })
            ]
        });
    }
    let { onClick: c, ariaDescription: u } = null != a ? a : {};
    return (0, l.jsxs)(r.BlockInteractionsContext.Provider, {
        value: null == c,
        children: [
            null != c &&
                null != u &&
                (0, l.jsx)(r.HiddenVisually, {
                    id: s,
                    children: u
                }),
            (0, l.jsx)(r.Clickable, {
                onClick: c,
                'aria-describedby': null == c ? void 0 : s,
                className: i()(n, null != c && t),
                children: o
            })
        ]
    });
}
function h(e) {
    let { clickable: n, ...t } = e;
    return (0, l.jsx)(C, {
        ...t,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: I.clickable
    });
}
function N(e) {
    let { entry: n, channel: t, title: a, subtitle: I, thumbnailUrl: N, titleClickable: T, subtitleClickable: x, thumbnailClickable: v, providerIconProps: g, style: b = {} } = e,
        S = (0, m.Dt)(),
        { primaryColor: O, secondaryColor: j } = (0, c.Z)(N);
    return (
        null != N && (b.background = 'linear-gradient(45deg, '.concat(O, ', ').concat(j, ')')),
        (0, l.jsx)(r.ThemeContextProvider, {
            theme: f.BR.DARK,
            children: (0, l.jsxs)('figure', {
                'aria-roledescription': p.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                'aria-labelledby': S,
                'data-disable-adaptive-theme': !0,
                className: i()(E.container, (0, _.Q)(f.BR.DARK)),
                style: b,
                children: [
                    (0, l.jsx)(C, {
                        className: E.thumbnailContainer,
                        clickableClassName: E.clickable,
                        clickable: v,
                        children: (0, l.jsx)(d.f, {
                            src: N,
                            constrain: 'width',
                            size: 64,
                            'aria-hidden': !0
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: E.infoContainer,
                        children: [
                            (0, l.jsx)(o.Z, {
                                channel: t,
                                entry: n,
                                className: E.users
                            }),
                            (0, l.jsx)(r.Spacer, { size: 2 }),
                            (0, l.jsx)(h, {
                                clickable: T,
                                className: E.clickableText,
                                children: (0, l.jsx)(r.Heading, {
                                    id: S,
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: i()(E.textPrimary, E.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: a
                                })
                            }),
                            null != I
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(r.Spacer, { size: 2 }),
                                          (0, l.jsx)(h, {
                                              clickable: x,
                                              className: E.clickableText,
                                              children: (0, l.jsx)(r.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: i()(E.textSecondary, E.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: I
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, l.jsx)(u.PZ, {
                                className: E.badges,
                                entry: n,
                                location: u.Gt.EMBED
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: E.headerIcons,
                        children: null != g ? (0, l.jsx)(s.Z, { ...g }) : null
                    })
                ]
            })
        })
    );
}
