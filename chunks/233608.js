_(47120);
var s = _(230711),
    I = _(581364),
    e = _(797610),
    N = _(200876),
    R = _(456269),
    M = _(228392),
    O = _(676317),
    A = _(434404),
    P = _(208884),
    t = _(71275),
    T = _(60222),
    i = _(665906),
    l = _(131704),
    n = _(430824),
    r = _(63063),
    a = _(981631),
    C = _(71080),
    o = _(689938);
function D(E) {
    let S = (0, T.A)(E),
        _ = (0, R.Eg)(E),
        M = n.Z.getGuild(E),
        O = null == M ? void 0 : M.hasFeature(a.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        A = null != M && (0, N.l)(M),
        P = (0, e.M9)(M),
        t = (0, I.vC)(E, { location: 'get_permission_options' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: o.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
            keybind: o.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
            onClick: () => {
                s.Z.open(a.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: o.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({ helpCenterArticle: r.Z.getArticleURL(a.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: S,
        showExperimental: !0,
        showForumPermissions: _,
        showMembershipManualApprovalPermissions: O,
        showCreatorMonetizationAnalyticsPermission: A,
        showClydeAIPermissions: P,
        externalAppsEnabled: t
    };
}
function g(E, S) {
    return E ? [S()] : [];
}
S.Z = {
    generateChannelPermissionSpec: function (E, S, _, s) {
        var I, N, T, r, g, L;
        let U = (0, R.Eg)(E),
            Z = (0, C.IG)(S, _, U, s),
            G = D(E),
            u =
                i.tM.getCurrentConfig({
                    guildId: E,
                    location: '3ad37d_1'
                }).enabled && l.Um.has(S.type),
            c = (0, t.tu)(E),
            p = (0, O.ze)(E),
            d = S.isMediaChannel(),
            f = n.Z.getGuild(E),
            V = (0, e.M9)(f);
        switch (S.type) {
            case a.d4z.GUILD_CATEGORY:
                return [
                    P.zO(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY),
                    P.Ny(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    P.vq(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V
                    }),
                    P.WV(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
                    P.xU(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                    ...((I = G.showStageChannelPermissions), (N = () => P.kv(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE)), I ? [N()] : []),
                    P.uu(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)
                ];
            case a.d4z.GUILD_VOICE:
                return [
                    P.zO(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, { showManageWebhooks: !0 }),
                    P.Ny(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    P.WV(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
                    P.aW(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                        sectionDescription: p
                            ? o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                  setUpAutomod: () => {
                                      A.Z.open(E, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0
                    }),
                    P.uu(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
                    P.xU(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS)
                ];
            case a.d4z.GUILD_STAGE_VOICE:
                return [
                    P.zO(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, { showManageWebhooks: !1 }),
                    P.Ny(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    P.FX(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE, c),
                    P.kv(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE),
                    P.uu(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
                    P.aW(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                        sectionDescription: p
                            ? o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                  setUpAutomod: () => {
                                      A.Z.open(E, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0
                    })
                ];
            case a.d4z.GUILD_FORUM:
            case a.d4z.GUILD_MEDIA:
                let H = d ? o.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : o.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
                    h = d ? o.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : o.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
                return [
                    P.zO(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
                    P.Ny(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    P.vq(Z, H, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: p
                            ? h.format({
                                  setUpAutomod: () => {
                                      !d && (0, M.MO)(), A.Z.open(E, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: V
                    }),
                    P.xU(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                    ...((T = u), (r = () => P.WV(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE)), T ? [r()] : [])
                ];
            default:
                return [
                    P.zO(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
                    P.Ny(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    P.vq(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                        showPrivateThreads: S.type !== a.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V
                    }),
                    P.xU(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                    ...((g = u), (L = () => P.WV(Z, o.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE)), g ? [L()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (E) {
        var S, _;
        let s = new Set();
        return (
            !E.hasFeature(a.oNc.COMMUNITY) && s.add(a.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (S = P.s4(D(E.id))),
            0 === (_ = s).size
                ? S
                : S.map((E) => ({
                      ...E,
                      permissions: E.permissions.filter((E) => !_.has(E.flag.toString()))
                  }))
        );
    },
    getGuildPermissionSpecMap: function (E) {
        return P.WW(D(E.id));
    }
};
