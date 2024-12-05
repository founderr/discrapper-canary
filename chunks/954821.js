n.d(t, {
    h: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(481060),
    o = n(355467),
    c = n(100527),
    d = n(906732),
    u = n(313201),
    m = n(73346),
    g = n(584825),
    h = n(305342),
    p = n(293810),
    x = n(388032),
    T = n(196844);
let S = (e) => {
        let [t, n] = s.useState(!1),
            [i, r] = s.useState(null);
        return {
            cancelSubscription: async (t) => {
                try {
                    return n(!0), await o.EO(t, e), !0;
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            },
            error: i,
            submitting: t
        };
    },
    _ = (e) => {
        var t;
        let { transitionState: n, groupListing: s, guildId: r, listing: o, subscription: _, onClose: E } = e,
            C = (0, u.Dt)(),
            f = (0, g.YB)(r),
            I = (null == f ? void 0 : null === (t = f.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, m._W)(f.cover_image_asset.application_id, f.cover_image_asset, 440) : void 0,
            { analyticsLocations: N } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: A, error: b, submitting: v } = S(N),
            j = async () => {
                (await A(_.id)) && E();
            },
            O = o.role_benefits.benefits.filter((e) => e.ref_type === p.Qs.CHANNEL),
            R = o.role_benefits.benefits.filter((e) => e.ref_type === p.Qs.INTANGIBLE),
            P = l()(_.currentPeriodEnd).format('MMMM Do, YYYY'),
            D = x.intl.formatToPlainString(x.t.KsMRPz, {
                numChannels: O.length,
                numAdditionalBenefits: R.length,
                subscriptionEndDate: P
            });
        return (0, i.jsxs)(a.ModalRoot, {
            transitionState: n,
            className: T.__invalid_modal,
            'aria-labelledby': C,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('img', {
                            src: I,
                            alt: '',
                            className: T.headerImage
                        }),
                        (0, i.jsx)(a.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: T.closeButton,
                            onClick: E
                        })
                    ]
                }),
                null != b ? (0, i.jsx)(a.FormErrorBlock, { children: b.message }) : null,
                (0, i.jsxs)(a.ModalContent, {
                    className: T.content,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            id: C,
                            variant: 'text-md/medium',
                            className: T.title,
                            children: x.intl.string(x.t.O6l5tL)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: T.description,
                            variant: 'text-sm/normal',
                            children: D
                        }),
                        (0, i.jsx)(h.c, {
                            listingId: o.id,
                            guildId: s.guild_id,
                            className: T.benefits
                        })
                    ]
                }),
                (0, i.jsxs)(a.ModalFooter, {
                    className: T.footer,
                    children: [
                        (0, i.jsx)(a.Button, {
                            color: a.Button.Colors.RED,
                            onClick: j,
                            submitting: v,
                            children: x.intl.string(x.t.F6lUDA)
                        }),
                        (0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.WHITE,
                            className: T.goBackButton,
                            onClick: E,
                            children: x.intl.string(x.t.EP6EPT)
                        })
                    ]
                })
            ]
        });
    },
    E = (e) => {
        (0, a.openModal)((t) =>
            (0, i.jsx)(_, {
                ...t,
                ...e
            })
        );
    };
