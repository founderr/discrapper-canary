n.d(t, {
    R: function () {
        return r;
    },
    Z: function () {
        return T;
    }
});
var i,
    r,
    l = n(192379),
    a = n(442837),
    s = n(179360),
    o = n(897285),
    c = n(300213),
    d = n(554747),
    u = n(499137),
    h = n(929507),
    m = n(270144),
    p = n(400271),
    g = n(678513),
    f = n(899667),
    _ = n(496675),
    E = n(541566),
    I = n(192513),
    C = n(255791),
    v = n(70956),
    S = n(267642),
    N = n(981631);
function T(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.lds,
        { lastFetchedAt: i } = (0, a.cj)([f.Z], () => ({
            appliedGuildBoosts: f.Z.getAppliedGuildBoostsForGuild(n),
            lastFetchedAt: f.Z.getLastFetchedAtForGuild(n)
        })),
        { lastDismissedGracePeriod: r, isGracePeriodVisible: T } = (0, a.cj)([E.Z], () => ({
            lastDismissedGracePeriod: E.Z.getLastDismissedGracePeriodForGuild(n),
            isGracePeriodVisible: E.Z.isVisible(n)
        })),
        x = (0, a.e7)([p.Z], () => p.Z.isVisible(e)),
        A = (0, a.e7)([C.Z], () => C.Z.isVisible(e)),
        b = (0, a.e7)([_.Z], () => _.Z.can(N.Plq.ADMINISTRATOR, e)),
        Z = null != r && Date.now() - r <= N.Dge,
        y = null != e ? e.premiumSubscriberCount : 0,
        L = (0, S.rF)(y, n) !== N.Eu4.NONE,
        R = null != i && Date.now() - i <= 43200000,
        j = !R && !Z && b && L,
        O = (0, c.m)(n),
        P = (0, a.e7)([I.Z], () => I.Z.isVisible(e)),
        D = h.Z.useShouldShowChannelNotice(n),
        M = (0, m.h6)(e),
        { enableStudyGroup: w } = (0, u.s)(e),
        k = M.length > 0,
        U = w && !(null == e ? void 0 : e.hasFeature(N.oNc.HUB)),
        G = (0, d.Vm)(n),
        B = (0, a.e7)([g.Z], () => null != g.Z.getActiveGuildSignUp(n));
    if (
        (l.useEffect(() => {
            o.Z.getGuildEventsForCurrentUser(n);
        }, [n]),
        l.useEffect(() => {
            let e = -1;
            return (
                j &&
                    (e = window.setTimeout(
                        () => {
                            null != n && (0, s.C0)(n);
                        },
                        30 * Math.random() * v.Z.Millis.SECOND
                    )),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [n, j]),
        x)
    )
        return 0;
    if (T) return 1;
    if (A) return 2;
    else if (O || null != G) return 3;
    else if (P) return 4;
    else if (D) return 5;
    else if (k) return 6;
    else if (U) return 7;
    else if (B) return 8;
    return null;
}
((i = r || (r = {}))[(i.ENABLE_PUBLIC_GUILD = 0)] = 'ENABLE_PUBLIC_GUILD'), (i[(i.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1)] = 'APPLIED_GUILD_BOOST_GRACE_PERIOD'), (i[(i.MAX_MEMBER_COUNT = 2)] = 'MAX_MEMBER_COUNT'), (i[(i.GUILD_LIVE_CHANNEL = 3)] = 'GUILD_LIVE_CHANNEL'), (i[(i.GUILD_MFA_WARNING = 4)] = 'GUILD_MFA_WARNING'), (i[(i.COMMANDS_MIGRATION = 5)] = 'COMMANDS_MIGRATION'), (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 6)] = 'APPLICATION_SUBSCRIPTION_EXPIRATION'), (i[(i.HUB_STUDY_ROOM = 7)] = 'HUB_STUDY_ROOM'), (i[(i.SIGNUP = 8)] = 'SIGNUP'), (i[(i.CLAN_UPSELL = 9)] = 'CLAN_UPSELL');
