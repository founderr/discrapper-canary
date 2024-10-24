n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(909820),
    u = n(518950),
    d = n(594174),
    h = n(63063),
    p = n(981631),
    m = n(689938),
    _ = n(277865),
    f = n(454120);
function E(e) {
    let { buttonRef: t, userId: a, streaming: E, onClose: g } = e,
        C = (0, r.e7)([d.default], () => d.default.getUser(a)),
        I = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        { avatarSrc: T, eventHandlers: x } = (0, u.Z)({
            user: C,
            size: o.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        S = s.useMemo(
            () =>
                null == C || null == I
                    ? ''
                    : C.id === I.id
                      ? m.Z.Messages.CONSUMABLE_HD_STREAMING_BANNER_SELF_COPY
                      : !0 === E
                        ? m.Z.Messages.CONSUMABLE_HD_STREAMING_BANNER_COPY_STREAMERS.format({
                              username: C.username,
                              helpCenterLink: h.Z.getArticleURL(p.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
                          })
                        : m.Z.Messages.CONSUMABLE_HD_STREAMING_BANNER_COPY.format({ username: C.username }),
            [C, I, E]
        );
    if (null == C || null == I) return null;
    let v = () => {
        if (!0 === E && I.id === C.id) {
            g();
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
                    className: _.banner,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Avatar, {
                                    src: T,
                                    'aria-label': C.username,
                                    size: o.AvatarSizes.SIZE_48,
                                    ...x
                                }),
                                (0, i.jsx)('img', {
                                    className: _.potion,
                                    src: f,
                                    alt: ''
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-sm/medium',
                            children: S
                        }),
                        (0, i.jsxs)('div', {
                            className: _.subsection,
                            children: [
                                (0, i.jsx)(o.Button, {
                                    onClick: v,
                                    className: l()({ [_.actionButton]: !0 !== E }),
                                    children: !0 === E && I.id === C.id ? m.Z.Messages.CONSUMABLE_HD_STREAMING_BANNER_DISMISS_BUTTON_COPY : m.Z.Messages.CONSUMABLE_HD_STREAMING_BANNER_BUTTON_COPY
                                }),
                                !0 !== E &&
                                    (0, i.jsx)(o.Clickable, {
                                        className: _.x,
                                        onClick: g,
                                        children: (0, i.jsx)(o.XSmallIcon, { name: 'close' })
                                    })
                            ]
                        })
                    ]
                })
        })
    });
}
