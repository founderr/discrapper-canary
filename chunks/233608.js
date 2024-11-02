n(47120);
var E = n(230711),
    l = n(581364),
    r = n(797610),
    S = n(200876),
    e = n(456269),
    s = n(228392),
    A = n(676317),
    o = n(434404),
    _ = n(208884),
    P = n(71275),
    N = n(60222),
    T = n(665906),
    g = n(131704),
    I = n(430824),
    M = n(63063),
    a = n(981631),
    R = n(71080),
    u = n(388032);
function D(t) {
    let i = (0, N.A)(t),
        n = (0, e.Eg)(t),
        s = I.Z.getGuild(t),
        A = null == s ? void 0 : s.hasFeature(a.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        o = null != s && (0, S.l)(s),
        _ = (0, r.M9)(s),
        P = (0, l.vC)(t, { location: 'get_permission_options' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: u.intl.format(u.t.j66HgY, {
            keybind: u.intl.string(u.t.DkSwJy),
            onClick: () => {
                E.Z.open(a.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: u.intl.format(u.t.fVE8y8, { helpCenterArticle: M.Z.getArticleURL(a.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showForumPermissions: n,
        showMembershipManualApprovalPermissions: A,
        showCreatorMonetizationAnalyticsPermission: o,
        showClydeAIPermissions: _,
        externalAppsEnabled: P
    };
}
function c(t, i) {
    return t ? [i()] : [];
}
i.Z = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var l, S, N, M, c, O;
        let C = (0, e.Eg)(t),
            p = (0, R.IG)(i, n, C, E),
            d = D(t),
            f =
                T.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && g.Um.has(i.type),
            U = (0, P.tu)(t),
            L = (0, A.ze)(t),
            G = i.isMediaChannel(),
            h = I.Z.getGuild(t),
            m = (0, r.M9)(h);
        switch (i.type) {
            case a.d4z.GUILD_CATEGORY:
                return [
                    _.zO(p, u.intl.string(u.t.AkPxc3)),
                    _.Ny(p, u.intl.string(u.t.Ny49TE)),
                    _.vq(p, u.intl.string(u.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: m
                    }),
                    _.WV(p, u.intl.string(u.t['46Ra1d'])),
                    _.xU(p, u.intl.string(u.t['rrh/W1'])),
                    ...((l = d.showStageChannelPermissions), (S = () => _.kv(p, u.intl.string(u.t.yniaur))), l ? [S()] : []),
                    _.uu(p, u.intl.string(u.t.b8lplZ))
                ];
            case a.d4z.GUILD_VOICE:
                return [
                    _.zO(p, u.intl.string(u.t.ouHggI), { showManageWebhooks: !0 }),
                    _.Ny(p, u.intl.string(u.t.Ny49TE)),
                    _.WV(p, u.intl.string(u.t['46Ra1d'])),
                    _.aW(p, u.intl.string(u.t.iqlsnJ), {
                        sectionDescription: L
                            ? u.intl.format(u.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0
                    }),
                    _.uu(p, u.intl.string(u.t.b8lplZ)),
                    _.xU(p, u.intl.string(u.t['rrh/W1']))
                ];
            case a.d4z.GUILD_STAGE_VOICE:
                return [
                    _.zO(p, u.intl.string(u.t.ouHggI), { showManageWebhooks: !1 }),
                    _.Ny(p, u.intl.string(u.t.Ny49TE)),
                    _.FX(p, u.intl.string(u.t['46Ra1d']), U),
                    _.kv(p, u.intl.string(u.t.yniaur)),
                    _.uu(p, u.intl.string(u.t.b8lplZ)),
                    _.aW(p, u.intl.string(u.t.iqlsnJ), {
                        sectionDescription: L
                            ? u.intl.format(u.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0
                    })
                ];
            case a.d4z.GUILD_FORUM:
            case a.d4z.GUILD_MEDIA:
                let V = G ? u.intl.string(u.t.aSjPg4) : u.intl.string(u.t.TS7CnZ),
                    B = G ? u.t.YjJTtL : u.t['1MTnqa'];
                return [
                    _.zO(p, u.intl.string(u.t.ouHggI)),
                    _.Ny(p, u.intl.string(u.t.Ny49TE)),
                    _.vq(p, V, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: L
                            ? u.intl.format(B, {
                                  setUpAutomod: () => {
                                      !G && (0, s.MO)(), o.Z.open(t, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: m
                    }),
                    _.xU(p, u.intl.string(u.t['rrh/W1'])),
                    ...((N = f), (M = () => _.WV(p, u.intl.string(u.t['46Ra1d']))), N ? [M()] : [])
                ];
            default:
                return [
                    _.zO(p, u.intl.string(u.t.ouHggI)),
                    _.Ny(p, u.intl.string(u.t.Ny49TE)),
                    _.vq(p, u.intl.string(u.t.cKobOz), {
                        showPrivateThreads: i.type !== a.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: m
                    }),
                    _.xU(p, u.intl.string(u.t['rrh/W1'])),
                    ...((c = f), (O = () => _.WV(p, u.intl.string(u.t['46Ra1d']))), c ? [O()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i, n;
        let E = new Set();
        return (
            !t.hasFeature(a.oNc.COMMUNITY) && E.add(a.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = _.s4(D(t.id))),
            0 === (n = E).size
                ? i
                : i.map((t) => ({
                      ...t,
                      permissions: t.permissions.filter((t) => !n.has(t.flag.toString()))
                  }))
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return _.WW(D(t.id));
    }
};
