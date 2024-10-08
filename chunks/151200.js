t.d(n, {
    Z: function () {
        return I;
    }
});
var l = t(735250);
t(470079);
var i = t(120356),
    a = t.n(i),
    r = t(481060),
    o = t(328731),
    s = t(442550),
    c = t(435439),
    u = t(206295),
    d = t(297781),
    m = t(313201),
    _ = t(231338),
    f = t(689938),
    p = t(790246),
    C = t(615934);
function h(e) {
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
function E(e) {
    let { clickable: n, ...t } = e;
    return (0, l.jsx)(h, {
        ...t,
        clickable: {
            ...n,
            ariaDescription: ''
        },
        clickableClassName: C.clickable
    });
}
function I(e) {
    let { entry: n, channel: t, title: i, subtitle: C, thumbnailUrl: I, titleClickable: x, subtitleClickable: v, thumbnailClickable: T, providerIconProps: N, style: b = {} } = e,
        g = (0, m.Dt)(),
        { primaryColor: S, secondaryColor: O } = (0, u.Z)(I);
    return (
        null != I && (b.background = 'linear-gradient(45deg, '.concat(S, ', ').concat(O, ')')),
        (0, l.jsx)(r.ThemeProvider, {
            theme: _.BR.DARK,
            children: (e) =>
                (0, l.jsxs)('figure', {
                    'aria-roledescription': f.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                    'aria-labelledby': g,
                    'data-disable-adaptive-theme': !0,
                    className: a()(p.container, e),
                    style: b,
                    children: [
                        (0, l.jsx)(h, {
                            className: p.thumbnailContainer,
                            clickableClassName: p.clickable,
                            clickable: T,
                            children: (0, l.jsx)(s.f, {
                                src: I,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, l.jsxs)('div', {
                            className: p.infoContainer,
                            children: [
                                (0, l.jsx)(o.Z, {
                                    channel: t,
                                    entry: n,
                                    className: p.users
                                }),
                                (0, l.jsx)(r.Spacer, { size: 2 }),
                                (0, l.jsx)(E, {
                                    clickable: x,
                                    className: p.clickableText,
                                    children: (0, l.jsx)(r.Heading, {
                                        id: g,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: a()(p.textPrimary, p.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: i
                                    })
                                }),
                                null != C
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(r.Spacer, { size: 2 }),
                                              (0, l.jsx)(E, {
                                                  clickable: v,
                                                  className: p.clickableText,
                                                  children: (0, l.jsx)(r.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: a()(p.textSecondary, p.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: C
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, l.jsx)(d.PZ, {
                                    className: p.badges,
                                    entry: n,
                                    location: d.Gt.EMBED
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: p.headerIcons,
                            children: null != N ? (0, l.jsx)(c.Z, { ...N }) : null
                        })
                    ]
                })
        })
    );
}
