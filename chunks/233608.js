n(47120);
var E = n(230711),
    l = n(581364),
    r = n(797610),
    e = n(200876),
    S = n(456269),
    s = n(228392),
    o = n(676317),
    A = n(434404),
    _ = n(208884),
    P = n(722932),
    N = n(368442),
    T = n(60222),
    g = n(665906),
    I = n(131704),
    a = n(430824),
    M = n(63063),
    R = n(981631),
    u = n(71080),
    c = n(388032);
function D(t) {
    let i = (0, T.A)(t),
        n = (0, S.Eg)(t),
        s = a.Z.getGuild(t),
        o = null == s ? void 0 : s.hasFeature(R.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        A = null != s && (0, e.l)(s),
        _ = (0, r.M9)(s),
        N = (0, l.vC)(t, { location: 'get_permission_options' }),
        g = (0, P.u)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: c.intl.format(c.t.j66HgY, {
            keybind: c.intl.string(c.t.DkSwJy),
            onClick: () => {
                E.Z.open(R.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: c.intl.format(c.t.fVE8y8, { helpCenterArticle: M.Z.getArticleURL(R.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showForumPermissions: n,
        showMembershipManualApprovalPermissions: o,
        showCreatorMonetizationAnalyticsPermission: A,
        showClydeAIPermissions: _,
        externalAppsEnabled: N,
        inSoundmojiExperiment: g
    };
}
function O(t, i) {
    return t ? [i()] : [];
}
i.Z = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var l, e, T, M, O, p;
        let C = (0, S.Eg)(t),
            d = (0, u.IG)(i, n, C, E),
            f = D(t),
            U =
                g.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && I.Um.has(i.type),
            L = (0, N.tu)(t),
            G = (0, o.ze)(t),
            h = i.isMediaChannel(),
            m = a.Z.getGuild(t),
            V = (0, r.M9)(m),
            B = (0, P.u)({ location: 'generateChannelPermissionSpec' });
        switch (i.type) {
            case R.d4z.GUILD_CATEGORY:
                return [
                    _.zO(d, c.intl.string(c.t.AkPxc3)),
                    _.Ny(d, c.intl.string(c.t.Ny49TE)),
                    _.vq(d, c.intl.string(c.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    _.WV(d, c.intl.string(c.t['46Ra1d'])),
                    _.xU(d, c.intl.string(c.t['rrh/W1'])),
                    ...((l = f.showStageChannelPermissions), (e = () => _.kv(d, c.intl.string(c.t.yniaur))), l ? [e()] : []),
                    _.uu(d, c.intl.string(c.t.b8lplZ))
                ];
            case R.d4z.GUILD_VOICE:
                return [
                    _.zO(d, c.intl.string(c.t.ouHggI), { showManageWebhooks: !0 }),
                    _.Ny(d, c.intl.string(c.t.Ny49TE)),
                    _.WV(d, c.intl.string(c.t['46Ra1d'])),
                    _.aW(d, c.intl.string(c.t.iqlsnJ), {
                        sectionDescription: G
                            ? c.intl.format(c.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      A.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: B
                    }),
                    _.uu(d, c.intl.string(c.t.b8lplZ)),
                    _.xU(d, c.intl.string(c.t['rrh/W1']))
                ];
            case R.d4z.GUILD_STAGE_VOICE:
                return [
                    _.zO(d, c.intl.string(c.t.ouHggI), { showManageWebhooks: !1 }),
                    _.Ny(d, c.intl.string(c.t.Ny49TE)),
                    _.FX(d, c.intl.string(c.t['46Ra1d']), L),
                    _.kv(d, c.intl.string(c.t.yniaur)),
                    _.uu(d, c.intl.string(c.t.b8lplZ)),
                    _.aW(d, c.intl.string(c.t.iqlsnJ), {
                        sectionDescription: G
                            ? c.intl.format(c.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      A.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: B
                    })
                ];
            case R.d4z.GUILD_FORUM:
            case R.d4z.GUILD_MEDIA:
                let K = h ? c.intl.string(c.t.aSjPg4) : c.intl.string(c.t.TS7CnZ),
                    H = h ? c.t.YjJTtL : c.t['1MTnqa'];
                return [
                    _.zO(d, c.intl.string(c.t.ouHggI)),
                    _.Ny(d, c.intl.string(c.t.Ny49TE)),
                    _.vq(d, K, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: G
                            ? c.intl.format(H, {
                                  setUpAutomod: () => {
                                      !h && (0, s.MO)(), A.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    _.xU(d, c.intl.string(c.t['rrh/W1'])),
                    ...((T = U), (M = () => _.WV(d, c.intl.string(c.t['46Ra1d']))), T ? [M()] : [])
                ];
            default:
                return [
                    _.zO(d, c.intl.string(c.t.ouHggI)),
                    _.Ny(d, c.intl.string(c.t.Ny49TE)),
                    _.vq(d, c.intl.string(c.t.cKobOz), {
                        showPrivateThreads: i.type !== R.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    _.xU(d, c.intl.string(c.t['rrh/W1'])),
                    ...((O = U), (p = () => _.WV(d, c.intl.string(c.t['46Ra1d']))), O ? [p()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i, n;
        let E = new Set();
        return (
            !t.hasFeature(R.oNc.COMMUNITY) && E.add(R.Plq.VIEW_GUILD_ANALYTICS.toString()),
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
