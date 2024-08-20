t.d(n, {
    Z: function () {
        return v;
    }
});
var l = t(735250);
t(470079);
var i = t(120356),
    r = t.n(i),
    a = t(481060),
    o = t(256139),
    s = t(328731),
    c = t(435439),
    u = t(206295),
    d = t(297781),
    m = t(43205),
    f = t(313201),
    _ = t(792125),
    p = t(231338),
    h = t(689938),
    C = t(917056);
function v(e) {
    let { entry: n, channel: t, title: i, subtitle: v, thumbnailUrl: x, onClickTitle: E, onClickSubtitle: I, onClickThumbnail: T, providerIconProps: g, style: N = {} } = e,
        b = (0, f.Dt)(),
        { primaryColor: S, secondaryColor: O } = (0, u.Z)(x);
    return (
        null != x && (N.background = 'linear-gradient(45deg, '.concat(S, ', ').concat(O, ')')),
        (0, l.jsx)(a.ThemeContextProvider, {
            theme: p.BR.DARK,
            children: (0, l.jsxs)('figure', {
                'aria-roledescription': h.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                'aria-labelledby': b,
                'data-disable-adaptive-theme': !0,
                className: r()(C.container, (0, _.Q)(p.BR.DARK)),
                style: N,
                children: [
                    (0, l.jsx)(a.Clickable, {
                        onClick: T,
                        className: r()(C.thumbnailContainer, null != T && C.clickable),
                        children: (0, l.jsx)(m.f, {
                            src: x,
                            constrain: 'width',
                            size: 64
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: C.infoContainer,
                        children: [
                            (0, l.jsx)(s.Z, {
                                channel: t,
                                entry: n,
                                className: C.users
                            }),
                            (0, l.jsx)(a.Spacer, { size: 2 }),
                            (0, l.jsx)(o.Z, {
                                onClick: E,
                                className: C.clickableText,
                                children: (0, l.jsx)(a.Heading, {
                                    id: b,
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: r()(C.textPrimary, C.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: i
                                })
                            }),
                            null != v
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(a.Spacer, { size: 2 }),
                                          (0, l.jsx)(o.Z, {
                                              onClick: I,
                                              className: C.clickableText,
                                              children: (0, l.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: r()(C.textSecondary, C.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: v
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, l.jsx)(d.PZ, {
                                className: C.badges,
                                entry: n,
                                location: d.Gt.EMBED
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: C.headerIcons,
                        children: null != g ? (0, l.jsx)(c.Z, { ...g }) : null
                    })
                ]
            })
        })
    );
}
