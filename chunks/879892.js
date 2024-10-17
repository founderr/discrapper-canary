n.d(t, {
    u: function () {
        return p;
    }
}),
    n(653041),
    n(998459),
    n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(355467),
    s = n(179360),
    o = n(821849),
    l = n(594174),
    u = n(314884),
    c = n(509545),
    d = n(626135),
    _ = n(267642),
    E = n(852679),
    f = n(981631);
let h = 'apply-guild-boost-modal';
async function p(e) {
    let { analyticsLocations: t, analyticsLocation: p, analyticsSourceLocation: I, numberOfBoostsToAdd: m, onClose: T, closeLayer: S, onSubscriptionConfirmation: g, guild: A, handleSubscribeModalClose: N, disablePremiumUpsell: R, inPopout: O, applicationId: v } = e,
        C = O ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT,
        L = l.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified) {
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                return (t) => {
                    let { onClose: n, ...i } = t;
                    return (0, r.jsx)(e, {
                        ...i,
                        onClose: n
                    });
                };
            },
            { contextKey: C }
        );
        return;
    }
    let y = [];
    !c.Z.isLoadedForPremiumSKUs() && y.push((0, o.Y2)()), !u.Z.hasFetched && (y.push(a.jg()), y.push((0, s.X8)())), y.length > 0 && (await Promise.allSettled(y));
    let D = (0, _.vx)(u.Z.boostSlots),
        b = D.length,
        M = (e) => {
            null == T || T(), null == N || N(e);
        };
    if (b > 0 && (null == m || b >= m)) {
        let e;
        1 === b ? (e = D.slice(0, 1)) : null != m && (e = D.slice(0, m)),
            await (0, i.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([n.e('29549'), n.e('8016'), n.e('12013'), n.e('52249'), n.e('22646'), n.e('30419'), n.e('94872')]).then(n.bind(n, 760558));
                    return (n) => {
                        let { onClose: i, ...a } = n;
                        return (0, r.jsx)(t, {
                            ...a,
                            onClose: (e) => {
                                i(), M(e);
                            },
                            selectedGuild: A,
                            locationSection: f.ZY5.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        (0, i.closeModal)(h), M(!1);
                    },
                    contextKey: C
                }
            );
    } else
        (0, E.Z)({
            analyticsLocations: t,
            analyticsLocation: p,
            analyticsSourceLocation: I,
            guildId: A.id,
            closeLayer: () => {
                null == T || T(),
                    null == S || S(),
                    d.default.track(f.rMx.MODAL_DISMISSED, {
                        type: f.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_section: p.section
                    });
            },
            totalNumberOfSlotsToAssign: null != m ? m : 1,
            onCloseModal: M,
            disablePremiumUpsell: R,
            onSubscriptionConfirmation: g,
            inPopout: O,
            applicationId: v
        });
}
