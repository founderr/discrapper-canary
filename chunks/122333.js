let i;
n(47120);
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(570140),
    s = n(317770),
    o = n(622822),
    c = n(391650),
    d = n(305325),
    u = n(341298),
    h = n(390885),
    m = n(524329),
    p = n(995532),
    g = n(486472),
    f = n(430824),
    _ = n(914010),
    E = n(594174),
    I = n(823379),
    C = n(358085),
    v = n(929809),
    N = n(179645),
    S = n(701476),
    T = n(785997),
    b = n(981631),
    x = n(188785),
    A = n(630724);
function Z() {
    null != i && (0, l.closeModal)(i);
}
class L extends s.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.subscribe('LOGOUT', Z);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.unsubscribe('LOGOUT', Z);
    }
    handleConnectionOpen() {
        var e;
        let t,
            a = N.Z.getType();
        if (null == a) return;
        switch (a) {
            case S.M5.INVITE_UNCLAIMED:
                h.Z.flowStart(A.MK.INVITE, A.EW.NUF_STARTED);
                break;
            case S.M5.ORGANIC_REGISTERED:
                h.Z.flowStart(A.MK.ORGANIC, A.EW.NUF_STARTED);
                break;
            case S.M5.MARKETING_UNCLAIMED:
                h.Z.flowStart(A.MK.ORGANIC_MARKETING, A.EW.NUF_STARTED);
        }
        let s = !1,
            Z = _.Z.getGuildId();
        if (a === S.M5.INVITE_UNCLAIMED) {
            let e = f.Z.getGuild(Z);
            (null == e ? void 0 : e.hasVerificationGate()) && ((s = !0), (0, m.RM)(e.id));
        }
        let L = () => 0 === g.Z.totalGuilds && !C.isPlatformEmbedded,
            y = o.b();
        (e = [
            {
                key: 'Unified NUF Modal',
                open: async function e(e) {
                    let t = (e) => {
                        switch (e) {
                            case T.F.AGE_GATE:
                                h.Z.flowStep(A.MK.ANY, A.EW.AGE_GATE);
                                break;
                            case T.F.CHOOSE_TEMPLATE:
                                h.Z.flowStep(A.MK.ANY, A.X2.GUILD_TEMPLATES);
                                break;
                            case T.F.CUSTOMIZE_GUILD:
                                h.Z.flowStep(A.MK.ANY, A.X2.GUILD_CREATE);
                                break;
                            case T.F.CHANNEL_PROMPT:
                                h.Z.flowStep(A.MK.ANY, A.X2.CHANNEL_PROMPT);
                                break;
                            case T.F.JOIN_GUILD:
                                h.Z.flowStep(A.MK.ANY, A.X2.JOIN_GUILD);
                                break;
                            case T.F.CREATION_INTENT:
                                h.Z.flowStep(A.MK.ANY, A.X2.CREATION_INTENT);
                                break;
                            case T.F.COMPLETE:
                                h.Z.flowStep(A.MK.ANY, A.X2.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                I.vE(e);
                        }
                    };
                    i = await (0, l.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('42483'), n.e('62245')]).then(n.bind(n, 599219));
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    onSlideChange: t
                                });
                        },
                        {
                            onCloseRequest: b.dG4,
                            onCloseCallback: e,
                            modalKey: i
                        }
                    );
                },
                predicate: () => L() && !x.a
            },
            {
                key: 'New User Age Gate',
                open: c.i,
                predicate: () => y && !L() && !x.a
            },
            {
                key: 'Claim Account Modal',
                open: (e) => c.j(C.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return !s && null != E.default.getCurrentUser() && !(null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !x.a && !(0, u.g)('new_user_manager');
                }
            },
            {
                key: 'Verification Gate with Claim Account',
                open: (e) => (0, d.hk)(Z, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return s && !(null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !x.a;
                }
            },
            {
                key: 'Guild Welcome Modal',
                open: (e) =>
                    (0, l.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    guildId: Z
                                });
                        },
                        { onCloseCallback: e }
                    ),
                predicate: () => null != Z && null != p.Z.get(Z) && p.Z.get(Z) !== p.a
            }
        ]),
            (t = () => {
                v.H(), h.Z.flowStep(A.MK.ANY, A.EW.NUF_COMPLETE, !0);
            }),
            [...e].reverse().forEach((e) => {
                let n = t;
                t = () => {
                    e.predicate() ? e.open(n) : n();
                };
            }),
            t();
    }
}
t.Z = new L();
