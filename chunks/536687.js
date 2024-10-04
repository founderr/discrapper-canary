n.d(t, {
    R: function () {
        return a;
    },
    Z: function () {
        return A;
    }
});
var i,
    a,
    s = n(470079),
    r = n(442837),
    l = n(179360),
    o = n(897285),
    c = n(300213),
    d = n(554747),
    u = n(499137),
    _ = n(929507),
    E = n(270144),
    h = n(400271),
    m = n(678513),
    I = n(899667),
    p = n(496675),
    g = n(541566),
    T = n(192513),
    f = n(255791),
    S = n(70956),
    C = n(267642),
    N = n(981631);
function A(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.lds,
        { lastFetchedAt: i } = (0, r.cj)([I.Z], () => ({
            appliedGuildBoosts: I.Z.getAppliedGuildBoostsForGuild(n),
            lastFetchedAt: I.Z.getLastFetchedAtForGuild(n)
        })),
        { lastDismissedGracePeriod: a, isGracePeriodVisible: A } = (0, r.cj)([g.Z], () => ({
            lastDismissedGracePeriod: g.Z.getLastDismissedGracePeriodForGuild(n),
            isGracePeriodVisible: g.Z.isVisible(n)
        })),
        v = (0, r.e7)([h.Z], () => h.Z.isVisible(e)),
        Z = (0, r.e7)([f.Z], () => f.Z.isVisible(e)),
        L = (0, r.e7)([p.Z], () => p.Z.can(N.Plq.ADMINISTRATOR, e)),
        R = null != a && Date.now() - a <= N.Dge,
        O = null != e ? e.premiumSubscriberCount : 0,
        x = (0, C.rF)(O, n) !== N.Eu4.NONE,
        b = null != i && Date.now() - i <= 43200000,
        M = !b && !R && L && x,
        P = (0, c.m)(n),
        D = (0, r.e7)([T.Z], () => T.Z.isVisible(e)),
        y = _.Z.useShouldShowChannelNotice(n),
        j = (0, E.h6)(e),
        { enableStudyGroup: U } = (0, u.s)(e),
        G = j.length > 0,
        w = U && !(null == e ? void 0 : e.hasFeature(N.oNc.HUB)),
        k = (0, d.Vm)(n),
        B = (0, r.e7)([m.Z], () => null != m.Z.getActiveGuildSignUp(n));
    if (
        (s.useEffect(() => {
            o.Z.getGuildEventsForCurrentUser(n);
        }, [n]),
        s.useEffect(() => {
            let e = -1;
            return (
                M &&
                    (e = window.setTimeout(
                        () => {
                            null != n && (0, l.C0)(n);
                        },
                        30 * Math.random() * S.Z.Millis.SECOND
                    )),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [n, M]),
        v)
    )
        return 0;
    if (A) return 1;
    if (Z) return 2;
    else if (P || null != k) return 3;
    else if (D) return 4;
    else if (y) return 5;
    else if (G) return 6;
    else if (w) return 7;
    else if (B) return 8;
    return null;
}
((i = a || (a = {}))[(i.ENABLE_PUBLIC_GUILD = 0)] = 'ENABLE_PUBLIC_GUILD'), (i[(i.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1)] = 'APPLIED_GUILD_BOOST_GRACE_PERIOD'), (i[(i.MAX_MEMBER_COUNT = 2)] = 'MAX_MEMBER_COUNT'), (i[(i.GUILD_LIVE_CHANNEL = 3)] = 'GUILD_LIVE_CHANNEL'), (i[(i.GUILD_MFA_WARNING = 4)] = 'GUILD_MFA_WARNING'), (i[(i.COMMANDS_MIGRATION = 5)] = 'COMMANDS_MIGRATION'), (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 6)] = 'APPLICATION_SUBSCRIPTION_EXPIRATION'), (i[(i.HUB_STUDY_ROOM = 7)] = 'HUB_STUDY_ROOM'), (i[(i.SIGNUP = 8)] = 'SIGNUP'), (i[(i.CLAN_UPSELL = 9)] = 'CLAN_UPSELL');
