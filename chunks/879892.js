n.d(t, {
    u: function () {
        return T;
    }
});
var r = n(653041);
var i = n(998459);
var a = n(47120);
var o = n(735250);
n(470079);
var s = n(481060),
    l = n(355467),
    u = n(179360),
    c = n(821849),
    d = n(594174),
    _ = n(314884),
    E = n(509545),
    f = n(626135),
    h = n(267642),
    p = n(852679),
    m = n(981631);
let I = 'apply-guild-boost-modal';
async function T(e) {
    let { analyticsLocations: t, analyticsLocation: r, analyticsSourceLocation: i, numberOfBoostsToAdd: a, onClose: T, closeLayer: g, onSubscriptionConfirmation: S, guild: A, handleSubscribeModalClose: v, disablePremiumUpsell: N, inPopout: O, applicationId: R } = e,
        C = O ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT,
        y = d.default.getCurrentUser();
    if (null == y) return;
    if (!y.verified) {
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                return (t) => {
                    let { onClose: n, ...r } = t;
                    return (0, o.jsx)(e, {
                        ...r,
                        onClose: n
                    });
                };
            },
            { contextKey: C }
        );
        return;
    }
    let b = [];
    !E.Z.isLoadedForPremiumSKUs() && b.push((0, c.Y2)()), !_.Z.hasFetched && (b.push(l.jg()), b.push((0, u.X8)())), b.length > 0 && (await Promise.allSettled(b));
    let L = (0, h.vx)(_.Z.boostSlots),
        D = L.length,
        M = (e) => {
            null == T || T(), null == v || v(e);
        },
        P = () => {
            null == T || T(),
                null == g || g(),
                f.default.track(m.rMx.MODAL_DISMISSED, {
                    type: m.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_section: r.section
                });
        };
    if (D > 0 && (null == a || D >= a)) {
        let e;
        1 === D ? (e = L.slice(0, 1)) : null != a && (e = L.slice(0, a)),
            await (0, s.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([n.e('52249'), n.e('15685'), n.e('8016'), n.e('22646'), n.e('30419'), n.e('26249')]).then(n.bind(n, 760558));
                    return (n) => {
                        let { onClose: r, ...i } = n;
                        return (0, o.jsx)(t, {
                            ...i,
                            onClose: (e) => {
                                r(), M(e);
                            },
                            selectedGuild: A,
                            locationSection: m.ZY5.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e
                        });
                    };
                },
                {
                    modalKey: I,
                    onCloseRequest: () => {
                        (0, s.closeModal)(I), M(!1);
                    },
                    contextKey: C
                }
            );
    } else
        (0, p.Z)({
            analyticsLocations: t,
            analyticsLocation: r,
            analyticsSourceLocation: i,
            guildId: A.id,
            closeLayer: P,
            totalNumberOfSlotsToAssign: null != a ? a : 1,
            onCloseModal: M,
            disablePremiumUpsell: N,
            onSubscriptionConfirmation: S,
            inPopout: O,
            applicationId: R
        });
}
