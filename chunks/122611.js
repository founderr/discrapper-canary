n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(704215),
    s = n(433517),
    o = n(963202),
    c = n(824991),
    d = n(705348),
    u = n(243778),
    h = n(360453),
    m = n(377743),
    p = n(834743),
    g = n(862099),
    f = n(704631),
    _ = n(819792),
    E = n(919285),
    I = n(118470),
    C = n(413307),
    v = n(849688),
    S = n(374023),
    N = n(661599),
    T = n(617899),
    x = n(8521),
    b = n(760326),
    A = n(785203),
    Z = n(652785),
    y = n(981631),
    L = n(921944);
function R(e) {
    e.stopPropagation();
}
function j(e) {
    var t;
    let { guild: n } = e,
        [h, g] = r.useState(null !== (t = s.K.get(Z.Iv)) && void 0 !== t ? t : 0),
        _ = (e) => {
            s.K.set(Z.Iv, e), g(e);
        },
        { defaultGameId: E, enableClanCreation: I } = (0, o.St)({
            guild: n,
            location: 'ChannelNoticesGuard',
            includeConverted: !1
        }),
        C = (0, l.Wu)(Z.HG, () =>
            Z.XN.filter((e) => {
                let { type: t, store: i } = e;
                if (t === y.vID.CLAN_ADMIN_UPSELL) return !n.hasFeature(y.oNc.CLAN) && I;
                return null == i ? void 0 : i.channelNoticePredicate(n, h);
            }).map((e) => e.dismissibleContentType)
        );
    return (0, i.jsx)(u.ZP, {
        contentTypes: C,
        groupName: L.R.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e,
                l = () => {
                    _(Date.now()), r(L.L.UNKNOWN);
                },
                s = (() => {
                    switch (t) {
                        case a.z.CHANNEL_NOTICE_HUBLINK:
                            return (0, i.jsx)(f.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_INVITE:
                            return (0, i.jsx)(T.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, i.jsx)(p.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, i.jsx)(b.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, i.jsx)(m.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.LINKED_ROLE_ADMIN_GUILD:
                            return (0, i.jsx)(d.Z, {
                                guild: n,
                                markAsDismissed: () => r(L.L.UNKNOWN)
                            });
                        case a.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL:
                            return (0, i.jsx)(c.ZP, {
                                guild: n,
                                markAsDismissed: l,
                                defaultGameId: E
                            });
                        default:
                            return null;
                    }
                })();
            return null == s
                ? null
                : (0, i.jsx)('div', {
                      onContextMenu: R,
                      children: s
                  });
        }
    });
}
t.Z = (e) => {
    let { guild: t } = e;
    switch ((0, A.Z)(t)) {
        case A.R.ENABLE_PUBLIC_GUILD:
            return (0, i.jsx)(C.Z, { guild: t });
        case A.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
            return (0, i.jsx)(h.Z, { guild: t });
        case A.R.MAX_MEMBER_COUNT:
            return (0, i.jsx)(x.Z, { guild: t });
        case A.R.GUILD_LIVE_CHANNEL:
            return (0, i.jsx)(g.ZP, { guild: t });
        case A.R.GUILD_MFA_WARNING:
            return (0, i.jsx)(N.Z, { guild: t });
        case A.R.COMMANDS_MIGRATION:
            return (0, i.jsx)(E.Z, { guild: t });
        case A.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, i.jsx)(I.Z, { guild: t });
        case A.R.HUB_STUDY_ROOM:
            return (0, i.jsx)(_.Z, { guild: t });
        case A.R.SIGNUP:
            return (0, i.jsx)(v.Z, { guild: t });
    }
    return S.s.isDisallowPopupsSet() ? null : (0, i.jsx)(j, { guild: e.guild });
};
