t.d(s, {
    h: function () {
        return C;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(913527),
    r = t.n(i),
    o = t(481060),
    l = t(355467),
    c = t(100527),
    d = t(906732),
    _ = t(313201),
    u = t(73346),
    E = t(584825),
    T = t(305342),
    S = t(293810),
    I = t(689938),
    N = t(154371);
let A = (e) => {
        let [s, t] = a.useState(!1),
            [n, i] = a.useState(null);
        return {
            cancelSubscription: async (s) => {
                try {
                    return t(!0), await l.EO(s, e), !0;
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            },
            error: n,
            submitting: s
        };
    },
    m = (e) => {
        var s;
        let { transitionState: t, groupListing: a, guildId: i, listing: l, subscription: m, onClose: C } = e,
            g = (0, _.Dt)(),
            h = (0, E.YB)(i),
            O = (null == h ? void 0 : null === (s = h.cover_image_asset) || void 0 === s ? void 0 : s.application_id) != null ? (0, u._W)(h.cover_image_asset.application_id, h.cover_image_asset, 440) : void 0,
            { analyticsLocations: p } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: R, error: x, submitting: f } = A(p),
            M = async () => {
                (await R(m.id)) && C();
            },
            D = l.role_benefits.benefits.filter((e) => e.ref_type === S.Qs.CHANNEL),
            P = l.role_benefits.benefits.filter((e) => e.ref_type === S.Qs.INTANGIBLE),
            L = r()(m.currentPeriodEnd).format('MMMM Do, YYYY'),
            b = I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                numChannels: D.length,
                numAdditionalBenefits: P.length,
                subscriptionEndDate: L
            });
        return (0, n.jsxs)(o.ModalRoot, {
            transitionState: t,
            className: N.__invalid_modal,
            'aria-labelledby': g,
            children: [
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)('img', {
                            src: O,
                            alt: '',
                            className: N.headerImage
                        }),
                        (0, n.jsx)(o.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: N.closeButton,
                            onClick: C
                        })
                    ]
                }),
                null != x ? (0, n.jsx)(o.FormErrorBlock, { children: x.message }) : null,
                (0, n.jsxs)(o.ModalContent, {
                    className: N.content,
                    children: [
                        (0, n.jsx)(o.Heading, {
                            id: g,
                            variant: 'text-md/medium',
                            className: N.title,
                            children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
                        }),
                        (0, n.jsx)(o.Text, {
                            className: N.description,
                            variant: 'text-sm/normal',
                            children: b
                        }),
                        (0, n.jsx)(T.c, {
                            listingId: l.id,
                            guildId: a.guild_id,
                            className: N.benefits
                        })
                    ]
                }),
                (0, n.jsxs)(o.ModalFooter, {
                    className: N.footer,
                    children: [
                        (0, n.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: M,
                            submitting: f,
                            children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
                        }),
                        (0, n.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.WHITE,
                            className: N.goBackButton,
                            onClick: C,
                            children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
                        })
                    ]
                })
            ]
        });
    },
    C = (e) => {
        (0, o.openModal)((s) =>
            (0, n.jsx)(m, {
                ...s,
                ...e
            })
        );
    };
