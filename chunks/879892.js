n.d(t, {
    u: function () {
        return m;
    }
}),
    n(653041),
    n(998459),
    n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(355467),
    s = n(179360),
    o = n(821849),
    l = n(594174),
    u = n(314884),
    c = n(509545),
    d = n(626135),
    f = n(267642),
    _ = n(852679),
    h = n(981631);
let p = 'apply-guild-boost-modal';
async function m(e) {
    let { analyticsLocations: t, analyticsLocation: m, analyticsSourceLocation: g, numberOfBoostsToAdd: E, onClose: v, closeLayer: I, onSubscriptionConfirmation: S, guild: b, handleSubscribeModalClose: T, disablePremiumUpsell: y, inPopout: A, applicationId: N } = e,
        C = A ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT,
        R = l.default.getCurrentUser();
    if (null == R) return;
    if (!R.verified) {
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
    let O = [];
    !c.Z.isLoadedForPremiumSKUs() && O.push((0, o.Y2)()), !u.Z.hasFetched && (O.push(a.jg()), O.push((0, s.X8)())), O.length > 0 && (await Promise.allSettled(O));
    let D = (0, f.vx)(u.Z.boostSlots),
        L = D.length,
        x = (e) => {
            null == v || v(), null == T || T(e);
        };
    if (L > 0 && (null == E || L >= E)) {
        let e;
        1 === L ? (e = D.slice(0, 1)) : null != E && (e = D.slice(0, E)),
            await (0, i.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([n.e('29549'), n.e('12013'), n.e('8016'), n.e('52249'), n.e('22646'), n.e('30419'), n.e('27133')]).then(n.bind(n, 760558));
                    return (n) => {
                        let { onClose: i, ...a } = n;
                        return (0, r.jsx)(t, {
                            ...a,
                            onClose: (e) => {
                                i(), x(e);
                            },
                            selectedGuild: b,
                            locationSection: h.ZY5.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e
                        });
                    };
                },
                {
                    modalKey: p,
                    onCloseRequest: () => {
                        (0, i.closeModal)(p), x(!1);
                    },
                    contextKey: C
                }
            );
    } else
        (0, _.Z)({
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            guildId: b.id,
            closeLayer: () => {
                null == v || v(),
                    null == I || I(),
                    d.default.track(h.rMx.MODAL_DISMISSED, {
                        type: h.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_section: m.section
                    });
            },
            totalNumberOfSlotsToAssign: null != E ? E : 1,
            onCloseModal: x,
            disablePremiumUpsell: y,
            onSubscriptionConfirmation: S,
            inPopout: A,
            applicationId: N
        });
}
