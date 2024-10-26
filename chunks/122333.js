let i;
n(47120);
var a = n(200651);
n(192379);
var s = n(481060),
    r = n(570140),
    l = n(317770),
    o = n(622822),
    c = n(391650),
    d = n(305325),
    u = n(341298),
    _ = n(390885),
    E = n(524329),
    h = n(995532),
    m = n(486472),
    I = n(430824),
    p = n(914010),
    g = n(594174),
    T = n(823379),
    S = n(358085),
    C = n(929809),
    f = n(179645),
    N = n(701476),
    A = n(785997),
    v = n(981631),
    Z = n(188785),
    L = n(630724);
function R() {
    null != i && (0, s.closeModal)(i);
}
class O extends l.Z {
    _initialize() {
        r.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), r.Z.subscribe('LOGOUT', R);
    }
    _terminate() {
        r.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), r.Z.unsubscribe('LOGOUT', R);
    }
    handleConnectionOpen() {
        var e;
        let t,
            r = f.Z.getType();
        if (null == r) return;
        switch (r) {
            case N.M5.INVITE_UNCLAIMED:
                _.Z.flowStart(L.MK.INVITE, L.EW.NUF_STARTED);
                break;
            case N.M5.ORGANIC_REGISTERED:
                _.Z.flowStart(L.MK.ORGANIC, L.EW.NUF_STARTED);
                break;
            case N.M5.MARKETING_UNCLAIMED:
                _.Z.flowStart(L.MK.ORGANIC_MARKETING, L.EW.NUF_STARTED);
        }
        let l = !1,
            R = p.Z.getGuildId();
        if (r === N.M5.INVITE_UNCLAIMED) {
            let e = I.Z.getGuild(R);
            (null == e ? void 0 : e.hasVerificationGate()) && ((l = !0), (0, E.RM)(e.id));
        }
        let O = () => 0 === m.Z.totalGuilds && !S.isPlatformEmbedded,
            x = o.b();
        (e = [
            {
                key: 'Unified NUF Modal',
                open: async function e(e) {
                    let t = (e) => {
                        switch (e) {
                            case A.F.AGE_GATE:
                                _.Z.flowStep(L.MK.ANY, L.EW.AGE_GATE);
                                break;
                            case A.F.CHOOSE_TEMPLATE:
                                _.Z.flowStep(L.MK.ANY, L.X2.GUILD_TEMPLATES);
                                break;
                            case A.F.CUSTOMIZE_GUILD:
                                _.Z.flowStep(L.MK.ANY, L.X2.GUILD_CREATE);
                                break;
                            case A.F.CHANNEL_PROMPT:
                                _.Z.flowStep(L.MK.ANY, L.X2.CHANNEL_PROMPT);
                                break;
                            case A.F.JOIN_GUILD:
                                _.Z.flowStep(L.MK.ANY, L.X2.JOIN_GUILD);
                                break;
                            case A.F.CREATION_INTENT:
                                _.Z.flowStep(L.MK.ANY, L.X2.CREATION_INTENT);
                                break;
                            case A.F.COMPLETE:
                                _.Z.flowStep(L.MK.ANY, L.X2.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                T.vE(e);
                        }
                    };
                    i = await (0, s.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('42483'), n.e('17525')]).then(n.bind(n, 599219));
                            return (n) =>
                                (0, a.jsx)(e, {
                                    ...n,
                                    onSlideChange: t
                                });
                        },
                        {
                            onCloseRequest: v.dG4,
                            onCloseCallback: e,
                            modalKey: i
                        }
                    );
                },
                predicate: () => O() && !Z.a
            },
            {
                key: 'New User Age Gate',
                open: c.i,
                predicate: () => x && !O() && !Z.a
            },
            {
                key: 'Claim Account Modal',
                open: (e) => c.j(S.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return !l && null != g.default.getCurrentUser() && !(null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !Z.a && !(0, u.g)('new_user_manager');
                }
            },
            {
                key: 'Verification Gate with Claim Account',
                open: (e) => (0, d.hk)(R, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return l && !(null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !Z.a;
                }
            },
            {
                key: 'Guild Welcome Modal',
                open: (e) =>
                    (0, s.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    guildId: R
                                });
                        },
                        { onCloseCallback: e }
                    ),
                predicate: () => null != R && null != h.Z.get(R) && h.Z.get(R) !== h.a
            }
        ]),
            (t = () => {
                C.H(), _.Z.flowStep(L.MK.ANY, L.EW.NUF_COMPLETE, !0);
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
t.Z = new O();
