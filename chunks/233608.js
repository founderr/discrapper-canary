n(47120);
var E = n(230711),
    l = n(581364),
    r = n(797610),
    S = n(200876),
    e = n(456269),
    s = n(228392),
    A = n(676317),
    o = n(63568),
    _ = n(434404),
    P = n(208884),
    N = n(722932),
    T = n(368442),
    g = n(60222),
    I = n(665906),
    M = n(131704),
    a = n(430824),
    R = n(63063),
    u = n(981631),
    D = n(71080),
    O = n(388032);
function c(t) {
    let i = (0, g.A)(t),
        n = (0, e.Eg)(t),
        s = a.Z.getGuild(t),
        A = (0, o.K2)(null == s ? void 0 : s.id, 'permissions') || (null == s ? void 0 : s.hasFeature(u.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)),
        _ = null != s && (0, S.l)(s),
        P = (0, r.M9)(s),
        T = (0, l.vC)(t, { location: 'get_permission_options' }),
        I = (0, N.uH)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
            keybind: O.intl.string(O.t.DkSwJy),
            onClick: () => {
                E.Z.open(u.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, { helpCenterArticle: R.Z.getArticleURL(u.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showForumPermissions: n,
        showMembershipManualApprovalPermissions: A,
        showCreatorMonetizationAnalyticsPermission: _,
        showClydeAIPermissions: P,
        externalAppsEnabled: T,
        inSoundmojiExperiment: I
    };
}
function p(t, i) {
    return t ? [i()] : [];
}
i.Z = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var l, S, o, g, R, p;
        let C = (0, e.Eg)(t),
            d = (0, D.IG)(i, n, C, E),
            f = c(t),
            U =
                I.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && M.Um.has(i.type),
            L = (0, T.tu)(t),
            G = (0, A.ze)(t),
            h = i.isMediaChannel(),
            m = a.Z.getGuild(t),
            V = (0, r.M9)(m),
            B = (0, N.uH)({ location: 'generateChannelPermissionSpec' });
        switch (i.type) {
            case u.d4z.GUILD_CATEGORY:
                return [
                    P.zO(d, O.intl.string(O.t.AkPxc3)),
                    P.Ny(d, O.intl.string(O.t.Ny49TE)),
                    P.vq(d, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    P.WV(d, O.intl.string(O.t['46Ra1d'])),
                    P.xU(d, O.intl.string(O.t['rrh/W1'])),
                    ...((l = f.showStageChannelPermissions), (S = () => P.kv(d, O.intl.string(O.t.yniaur))), l ? [S()] : []),
                    P.uu(d, O.intl.string(O.t.b8lplZ))
                ];
            case u.d4z.GUILD_VOICE:
                return [
                    P.zO(d, O.intl.string(O.t.ouHggI), { showManageWebhooks: !0 }),
                    P.Ny(d, O.intl.string(O.t.Ny49TE)),
                    P.WV(d, O.intl.string(O.t['46Ra1d'])),
                    P.aW(d, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: G
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      _.Z.open(t, u.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: B
                    }),
                    P.uu(d, O.intl.string(O.t.b8lplZ)),
                    P.xU(d, O.intl.string(O.t['rrh/W1']))
                ];
            case u.d4z.GUILD_STAGE_VOICE:
                return [
                    P.zO(d, O.intl.string(O.t.ouHggI), { showManageWebhooks: !1 }),
                    P.Ny(d, O.intl.string(O.t.Ny49TE)),
                    P.FX(d, O.intl.string(O.t['46Ra1d']), L),
                    P.kv(d, O.intl.string(O.t.yniaur)),
                    P.uu(d, O.intl.string(O.t.b8lplZ)),
                    P.aW(d, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: G
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      _.Z.open(t, u.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: B
                    })
                ];
            case u.d4z.GUILD_FORUM:
            case u.d4z.GUILD_MEDIA:
                let H = h ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
                    K = h ? O.t.YjJTtL : O.t['1MTnqa'];
                return [
                    P.zO(d, O.intl.string(O.t.ouHggI)),
                    P.Ny(d, O.intl.string(O.t.Ny49TE)),
                    P.vq(d, H, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: G
                            ? O.intl.format(K, {
                                  setUpAutomod: () => {
                                      !h && (0, s.MO)(), _.Z.open(t, u.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    P.xU(d, O.intl.string(O.t['rrh/W1'])),
                    ...((o = U), (g = () => P.WV(d, O.intl.string(O.t['46Ra1d']))), o ? [g()] : [])
                ];
            default:
                return [
                    P.zO(d, O.intl.string(O.t.ouHggI)),
                    P.Ny(d, O.intl.string(O.t.Ny49TE)),
                    P.vq(d, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: i.type !== u.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    P.xU(d, O.intl.string(O.t['rrh/W1'])),
                    ...((R = U), (p = () => P.WV(d, O.intl.string(O.t['46Ra1d']))), R ? [p()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i, n;
        let E = new Set();
        return (
            !t.hasFeature(u.oNc.COMMUNITY) && E.add(u.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = P.s4(c(t.id))),
            0 === (n = E).size
                ? i
                : i.map((t) => ({
                      ...t,
                      permissions: t.permissions.filter((t) => !n.has(t.flag.toString()))
                  }))
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return P.WW(c(t.id));
    }
};
