n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(568154),
    o = n(703656),
    c = n(430824),
    d = n(449934),
    u = n(768581),
    h = n(693546),
    m = n(863249),
    p = n(944163),
    g = n(246364),
    f = n(937111),
    _ = n(523924),
    E = n(390500),
    I = n(200305),
    C = n(981631),
    v = n(898625),
    S = n(388032),
    N = n(250010);
t.Z = (e) => {
    var t;
    let n, T;
    let { guildId: x, inviteCode: b } = e,
        [A, Z] = r.useState(v.hO.INITIAL),
        y = (0, l.e7)([p.Z], () => p.Z.get(x)),
        L = (0, l.e7)([f.Z], () => f.Z.getRequest(x)),
        R = (0, l.e7)([c.Z], () => c.Z.getGuild(x)),
        { hasFetchedRequestToJoinGuilds: O, guildPreviewDisabled: P } = (0, l.cj)([f.Z], () => ({
            hasFetchedRequestToJoinGuilds: f.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: f.Z.getJoinRequestGuild(x)
        }));
    r.useEffect(() => {
        null != R && (0, o.uL)(C.Z5c.CHANNEL(x));
    }, [R, x]),
        r.useEffect(() => {
            !O && h.Z.fetchRequestToJoinGuilds();
        }, [O]);
    let j = r.useCallback((e) => {
            Z((t) => Math.max(t, e));
        }, []),
        D = async (e) => {
            await m.ZP.submitVerificationForm(x, e);
        },
        M = () => {
            h.Z.resetGuildJoinRequest(x);
        };
    let w =
            ((n = S.intl.format(S.t['9ZezpK'], { name: null == P ? void 0 : P.toString() })),
            (T = () => {
                Z(Math.max(A, v.hO.FILLING)), h.Z.removeGuildJoinRequest(x), (0, o.uL)(C.Z5c.ME);
            }),
            () => {
                (0, a.openModal)((e) =>
                    (0, i.jsx)(a.ConfirmModal, {
                        header: S.intl.string(S.t.y0CVen),
                        cancelText: S.intl.string(S.t.oEAioK),
                        onConfirm: T,
                        confirmText: S.intl.string(S.t.p89ACg),
                        confirmButtonColor: a.Button.Colors.RED,
                        ...e,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: n
                        })
                    })
                );
            }),
        k =
            (null == y ? void 0 : null === (t = y.guild) || void 0 === t ? void 0 : t.splash) != null
                ? u.ZP.getGuildSplashURL({
                      id: y.guild.id,
                      splash: y.guild.splash
                  })
                : (0, d.gK)();
    return (0, i.jsx)('div', {
        className: N.page,
        children: (0, i.jsxs)(s.Z, {
            embedded: !0,
            splash: k,
            waveState: A,
            showLogo: !1,
            updateWaveState: j,
            children: [
                (0, i.jsx)('div', { className: N.dragRegion }),
                (0, i.jsx)('div', {
                    className: N.contentWrapper,
                    children: (() => {
                        switch (null == L ? void 0 : L.applicationStatus) {
                            case g.wB.SUBMITTED:
                                return (0, i.jsx)(E.Z, {
                                    onWithdrawApplication: w,
                                    guild: P
                                });
                            case g.wB.REJECTED:
                                return (0, i.jsx)(_.Z, {
                                    reapplyText: S.intl.string(S.t.I1LYVl),
                                    onReapply: M,
                                    confirmText: S.intl.string(S.t.mqtdmZ),
                                    onWithdrawApplication: w,
                                    rejectionReason: null == L ? void 0 : L.rejectionReason,
                                    guild: P
                                });
                            default:
                                return (0, i.jsx)(I.Z, {
                                    guildId: x,
                                    inviteCode: b,
                                    onComplete: D,
                                    disableVerification: !0
                                });
                        }
                    })()
                })
            ]
        })
    });
};
