n.d(t, {
    h: function () {
        return _;
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
    h = n(584825),
    g = n(305342),
    p = n(293810),
    x = n(388032),
    S = n(196844);
let T = (e) => {
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
    E = (e) => {
        var t;
        let { transitionState: n, groupListing: s, guildId: r, listing: o, subscription: E, onClose: _ } = e,
            C = (0, u.Dt)(),
            I = (0, h.YB)(r),
            f = (null == I ? void 0 : null === (t = I.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, m._W)(I.cover_image_asset.application_id, I.cover_image_asset, 440) : void 0,
            { analyticsLocations: N } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: A, error: b, submitting: v } = T(N),
            j = async () => {
                (await A(E.id)) && _();
            },
            O = o.role_benefits.benefits.filter((e) => e.ref_type === p.Qs.CHANNEL),
            R = o.role_benefits.benefits.filter((e) => e.ref_type === p.Qs.INTANGIBLE),
            P = l()(E.currentPeriodEnd).format('MMMM Do, YYYY'),
            D = x.intl.formatToPlainString(x.t.KsMRPz, {
                numChannels: O.length,
                numAdditionalBenefits: R.length,
                subscriptionEndDate: P
            });
        return (0, i.jsxs)(a.ModalRoot, {
            transitionState: n,
            className: S.__invalid_modal,
            'aria-labelledby': C,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('img', {
                            src: f,
                            alt: '',
                            className: S.headerImage
                        }),
                        (0, i.jsx)(a.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: S.closeButton,
                            onClick: _
                        })
                    ]
                }),
                null != b ? (0, i.jsx)(a.FormErrorBlock, { children: b.message }) : null,
                (0, i.jsxs)(a.ModalContent, {
                    className: S.content,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            id: C,
                            variant: 'text-md/medium',
                            className: S.title,
                            children: x.intl.string(x.t.O6l5tL)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: S.description,
                            variant: 'text-sm/normal',
                            children: D
                        }),
                        (0, i.jsx)(g.c, {
                            listingId: o.id,
                            guildId: s.guild_id,
                            className: S.benefits
                        })
                    ]
                }),
                (0, i.jsxs)(a.ModalFooter, {
                    className: S.footer,
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
                            className: S.goBackButton,
                            onClick: _,
                            children: x.intl.string(x.t.EP6EPT)
                        })
                    ]
                })
            ]
        });
    },
    _ = (e) => {
        (0, a.openModal)((t) =>
            (0, i.jsx)(E, {
                ...t,
                ...e
            })
        );
    };
