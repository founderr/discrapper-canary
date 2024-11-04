n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(909820),
    u = n(518950),
    d = n(594174),
    h = n(63063),
    m = n(981631),
    p = n(388032),
    f = n(277865),
    g = n(454120);
function C(e) {
    let { buttonRef: t, userId: r, streaming: C, onClose: x } = e,
        v = (0, a.e7)([d.default], () => d.default.getUser(r)),
        _ = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { avatarSrc: I, eventHandlers: E } = (0, u.Z)({
            user: v,
            size: o.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        b = l.useMemo(
            () =>
                null == v || null == _
                    ? ''
                    : v.id === _.id
                      ? p.intl.string(p.t.IjKvNT)
                      : !0 === C
                        ? p.intl.format(p.t.JkWoqK, {
                              username: v.username,
                              helpCenterLink: h.Z.getArticleURL(m.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
                          })
                        : p.intl.formatToPlainString(p.t.vNbVXF, { username: v.username }),
            [v, _, C]
        );
    if (null == v || null == _) return null;
    let S = () => {
        if (!0 === C && _.id === v.id) {
            x();
            return;
        }
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
            return (t) =>
                (0, i.jsx)(e, {
                    analyticsLocation: 'HDStreamingPotionBanner',
                    ...t
                });
        });
    };
    return (0, i.jsx)(c.ZP, {
        children: (0, i.jsx)(o.ReferencePositionLayer, {
            targetRef: t,
            position: 'top',
            align: 'center',
            spacing: 30,
            children: () =>
                (0, i.jsxs)('div', {
                    className: f.banner,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Avatar, {
                                    src: I,
                                    'aria-label': v.username,
                                    size: o.AvatarSizes.SIZE_48,
                                    ...E
                                }),
                                (0, i.jsx)('img', {
                                    className: f.potion,
                                    src: g,
                                    alt: ''
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-sm/medium',
                            children: b
                        }),
                        (0, i.jsxs)('div', {
                            className: f.subsection,
                            children: [
                                (0, i.jsx)(o.Button, {
                                    onClick: S,
                                    className: s()({ [f.actionButton]: !0 !== C }),
                                    children: !0 === C && _.id === v.id ? p.intl.string(p.t.r6xhBw) : p.intl.string(p.t.yKw8Dg)
                                }),
                                !0 !== C &&
                                    (0, i.jsx)(o.Clickable, {
                                        className: f.x,
                                        onClick: x,
                                        children: (0, i.jsx)(o.XSmallIcon, { name: 'close' })
                                    })
                            ]
                        })
                    ]
                })
        })
    });
}
