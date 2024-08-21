t.d(n, {
    Z: function () {
        return T;
    }
});
var l = t(735250);
t(470079);
var i = t(120356),
    a = t.n(i),
    r = t(481060),
    o = t(328731),
    s = t(435439),
    c = t(206295),
    u = t(297781),
    d = t(43205),
    m = t(313201),
    f = t(792125),
    _ = t(231338),
    p = t(689938),
    C = t(917056),
    h = t(671656);
function E(e) {
    let { className: n, clickableClassName: t, clickable: i, children: o } = e,
        s = (0, m.Dt)();
    if (null != i && 'href' in i) {
        let { ariaDescription: e, href: c } = i;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.HiddenVisually, {
                    id: s,
                    children: e
                }),
                (0, l.jsx)(r.Anchor, {
                    className: a()(n, t),
                    href: c,
                    'aria-describedby': s,
                    children: o
                })
            ]
        });
    }
    let { onClick: c, ariaDescription: u } = null != i ? i : {};
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
                className: a()(n, null != c && t),
                children: o
            })
        ]
    });
}
function I(e) {
    let { clickable: n, ...t } = e;
    return (0, l.jsx)(E, {
        ...t,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: h.clickable
    });
}
function T(e) {
    let { entry: n, channel: t, title: i, subtitle: h, thumbnailUrl: T, titleClickable: x, subtitleClickable: N, thumbnailClickable: v, providerIconProps: g, style: b = {} } = e,
        O = (0, m.Dt)(),
        { primaryColor: S, secondaryColor: j } = (0, c.Z)(T);
    return (
        null != T && (b.background = 'linear-gradient(45deg, '.concat(S, ', ').concat(j, ')')),
        (0, l.jsx)(r.ThemeContextProvider, {
            theme: _.BR.DARK,
            children: (0, l.jsxs)('figure', {
                'aria-roledescription': p.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                'aria-labelledby': O,
                'data-disable-adaptive-theme': !0,
                className: a()(C.container, (0, f.Q)(_.BR.DARK)),
                style: b,
                children: [
                    (0, l.jsx)(E, {
                        className: C.thumbnailContainer,
                        clickableClassName: C.clickable,
                        clickable: v,
                        children: (0, l.jsx)(d.f, {
                            src: T,
                            constrain: 'width',
                            size: 64,
                            'aria-hidden': !0
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: C.infoContainer,
                        children: [
                            (0, l.jsx)(o.Z, {
                                channel: t,
                                entry: n,
                                className: C.users
                            }),
                            (0, l.jsx)(r.Spacer, { size: 2 }),
                            (0, l.jsx)(I, {
                                clickable: x,
                                className: C.clickableText,
                                children: (0, l.jsx)(r.Heading, {
                                    id: O,
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: a()(C.textPrimary, C.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: i
                                })
                            }),
                            null != h
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(r.Spacer, { size: 2 }),
                                          (0, l.jsx)(I, {
                                              clickable: N,
                                              className: C.clickableText,
                                              children: (0, l.jsx)(r.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: a()(C.textSecondary, C.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: h
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, l.jsx)(u.PZ, {
                                className: C.badges,
                                entry: n,
                                location: u.Gt.EMBED
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: C.headerIcons,
                        children: null != g ? (0, l.jsx)(s.Z, { ...g }) : null
                    })
                ]
            })
        })
    );
}
