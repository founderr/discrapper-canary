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
    N = n(388032),
    S = n(301219);
t.Z = (e) => {
    var t;
    let n, T;
    let { guildId: b, inviteCode: x } = e,
        [A, Z] = r.useState(v.hO.INITIAL),
        L = (0, l.e7)([p.Z], () => p.Z.get(b)),
        y = (0, l.e7)([f.Z], () => f.Z.getRequest(b)),
        P = (0, l.e7)([c.Z], () => c.Z.getGuild(b)),
        { hasFetchedRequestToJoinGuilds: O, guildPreviewDisabled: R } = (0, l.cj)([f.Z], () => ({
            hasFetchedRequestToJoinGuilds: f.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: f.Z.getJoinRequestGuild(b)
        }));
    r.useEffect(() => {
        null != P && (0, o.uL)(C.Z5c.CHANNEL(b));
    }, [P, b]),
        r.useEffect(() => {
            !O && h.Z.fetchRequestToJoinGuilds();
        }, [O]);
    let j = r.useCallback((e) => {
            Z((t) => Math.max(t, e));
        }, []),
        D = async (e) => {
            await m.ZP.submitVerificationForm(b, e);
        },
        M = () => {
            h.Z.resetGuildJoinRequest(b);
        };
    let w =
            ((n = N.intl.format(N.t['9ZezpK'], { name: null == R ? void 0 : R.toString() })),
            (T = () => {
                Z(Math.max(A, v.hO.FILLING)), h.Z.removeGuildJoinRequest(b), (0, o.uL)(C.Z5c.ME);
            }),
            () => {
                (0, a.openModal)((e) =>
                    (0, i.jsx)(a.ConfirmModal, {
                        header: N.intl.string(N.t.y0CVen),
                        cancelText: N.intl.string(N.t.oEAioK),
                        onConfirm: T,
                        confirmText: N.intl.string(N.t.p89ACg),
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
            (null == L ? void 0 : null === (t = L.guild) || void 0 === t ? void 0 : t.splash) != null
                ? u.ZP.getGuildSplashURL({
                      id: L.guild.id,
                      splash: L.guild.splash
                  })
                : (0, d.gK)();
    return (0, i.jsx)('div', {
        className: S.page,
        children: (0, i.jsxs)(s.Z, {
            embedded: !0,
            splash: k,
            waveState: A,
            showLogo: !1,
            updateWaveState: j,
            children: [
                (0, i.jsx)('div', { className: S.dragRegion }),
                (0, i.jsx)('div', {
                    className: S.contentWrapper,
                    children: (() => {
                        switch (null == y ? void 0 : y.applicationStatus) {
                            case g.wB.SUBMITTED:
                                return (0, i.jsx)(E.Z, {
                                    onWithdrawApplication: w,
                                    guild: R
                                });
                            case g.wB.REJECTED:
                                return (0, i.jsx)(_.Z, {
                                    reapplyText: N.intl.string(N.t.I1LYVl),
                                    onReapply: M,
                                    confirmText: N.intl.string(N.t.mqtdmZ),
                                    onWithdrawApplication: w,
                                    rejectionReason: null == y ? void 0 : y.rejectionReason,
                                    guild: R
                                });
                            default:
                                return (0, i.jsx)(I.Z, {
                                    guildId: b,
                                    inviteCode: x,
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
