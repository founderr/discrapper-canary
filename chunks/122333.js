let i;
n(47120);
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(622822),
    c = n(391650),
    d = n(305325),
    u = n(983736),
    h = n(341298),
    m = n(390885),
    p = n(524329),
    g = n(995532),
    f = n(486472),
    _ = n(430824),
    E = n(914010),
    I = n(594174),
    C = n(823379),
    v = n(358085),
    S = n(929809),
    N = n(179645),
    T = n(701476),
    b = n(785997),
    x = n(981631),
    A = n(188785),
    Z = n(630724);
function L() {
    null != i && (0, l.closeModal)(i);
}
class P extends o.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.subscribe('LOGOUT', L);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.unsubscribe('LOGOUT', L);
    }
    handleConnectionOpen() {
        var e;
        let t,
            a = N.Z.getType();
        if (null == a) return;
        switch (a) {
            case T.M5.INVITE_UNCLAIMED:
                m.Z.flowStart(Z.MK.INVITE, Z.EW.NUF_STARTED);
                break;
            case T.M5.ORGANIC_REGISTERED:
                m.Z.flowStart(Z.MK.ORGANIC, Z.EW.NUF_STARTED);
                break;
            case T.M5.MARKETING_UNCLAIMED:
                m.Z.flowStart(Z.MK.ORGANIC_MARKETING, Z.EW.NUF_STARTED);
        }
        let o = !1,
            L = E.Z.getGuildId();
        if (a === T.M5.INVITE_UNCLAIMED) {
            let e = _.Z.getGuild(L);
            null != e && (0, u.Dc)(e) && ((o = !0), (0, p.RM)(e.id));
        }
        let P = () => 0 === f.Z.totalGuilds && !v.isPlatformEmbedded,
            y = s.b();
        (e = [
            {
                key: 'Unified NUF Modal',
                open: async function e(e) {
                    let t = (e) => {
                        switch (e) {
                            case b.F.AGE_GATE:
                                m.Z.flowStep(Z.MK.ANY, Z.EW.AGE_GATE);
                                break;
                            case b.F.CHOOSE_TEMPLATE:
                                m.Z.flowStep(Z.MK.ANY, Z.X2.GUILD_TEMPLATES);
                                break;
                            case b.F.CUSTOMIZE_GUILD:
                                m.Z.flowStep(Z.MK.ANY, Z.X2.GUILD_CREATE);
                                break;
                            case b.F.CHANNEL_PROMPT:
                                m.Z.flowStep(Z.MK.ANY, Z.X2.CHANNEL_PROMPT);
                                break;
                            case b.F.JOIN_GUILD:
                                m.Z.flowStep(Z.MK.ANY, Z.X2.JOIN_GUILD);
                                break;
                            case b.F.CREATION_INTENT:
                                m.Z.flowStep(Z.MK.ANY, Z.X2.CREATION_INTENT);
                                break;
                            case b.F.COMPLETE:
                                m.Z.flowStep(Z.MK.ANY, Z.X2.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                C.vE(e);
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
                            onCloseRequest: x.dG4,
                            onCloseCallback: e,
                            modalKey: i
                        }
                    );
                },
                predicate: () => P() && !A.a
            },
            {
                key: 'New User Age Gate',
                open: c.i,
                predicate: () => y && !P() && !A.a
            },
            {
                key: 'Claim Account Modal',
                open: (e) => c.j(v.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return !o && null != I.default.getCurrentUser() && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !A.a && !(0, h.g)('new_user_manager');
                }
            },
            {
                key: 'Verification Gate with Claim Account',
                open: (e) => (0, d.hk)(L, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return o && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !A.a;
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
                                    guildId: L
                                });
                        },
                        { onCloseCallback: e }
                    ),
                predicate: () => null != L && null != g.Z.get(L) && g.Z.get(L) !== g.a
            }
        ]),
            (t = () => {
                S.H(), m.Z.flowStep(Z.MK.ANY, Z.EW.NUF_COMPLETE, !0);
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
t.Z = new P();
