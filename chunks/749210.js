n.d(t, {
    V: function () {
        return P;
    }
});
var r = n(411104);
var i = n(177593);
var a = n(990547),
    o = n(149765),
    s = n(544891),
    l = n(570140),
    u = n(34756),
    c = n(408987),
    d = n(280837),
    _ = n(895886),
    E = n(35225),
    f = n(703656),
    h = n(314897),
    p = n(664915),
    m = n(984933),
    I = n(430824),
    T = n(944486),
    g = n(914010),
    S = n(594174),
    A = n(626135),
    v = n(700785),
    N = n(74538),
    O = n(573261),
    R = n(668781),
    C = n(981631),
    y = n(689938);
let b = (e) => {
        R.Z.show({
            title: y.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
            body: y.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({ quantity: e })
        });
    },
    L = (e) => {
        l.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    D = () => {
        R.Z.show({
            title: y.Z.Messages.SERVER_IS_CURRENTLY_FULL,
            body: y.Z.Messages.PLEASE_TRY_AGAIN_LATER
        });
    };
async function M(e) {
    var t, r, i, a, o;
    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { source: c, loadId: d, lurkLocation: E } = u,
        p = null !== (t = u.lurker) && void 0 !== t && t,
        m = S.default.getCurrentUser();
    if (null !== (r = null == m ? void 0 : m.hasFlag(C.xW$.QUARANTINED)) && void 0 !== r && r) return (0, _.default)(), new Promise((e, t) => t(Error()));
    l.Z.wait(() =>
        l.Z.dispatch({
            type: 'GUILD_JOIN',
            guildId: e,
            lurker: p,
            source: c,
            loadId: d
        })
    );
    try {
        let t = g.Z.getGuildId(),
            r = e === t && null != I.Z.getGuild(e) ? T.Z.getChannelId(e) : null,
            i = await s.tn.put({
                url: C.ANM.GUILD_JOIN(e),
                query: {
                    lurker: p,
                    session_id: p ? h.default.getSessionId() : null,
                    recommendation_load_id: d,
                    location: p && null != E ? E : null
                },
                context: { source: c },
                oldFormErrors: !0,
                body: {}
            });
        if (
            (null != i.body.join_request &&
                l.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: i.body.join_request
                }),
            null == I.Z.getGuild(e) && i.body.show_verification_form)
        )
            return (0, f.uL)(C.Z5c.GUILD_MEMBER_VERIFICATION(e)), i;
        if (
            (null != i.body.welcome_screen &&
                l.Z.dispatch({
                    type: 'WELCOME_SCREEN_UPDATE',
                    guildId: i.body.id,
                    welcomeScreen: i.body.welcome_screen
                }),
            null != i.body.approximate_presence_count &&
                l.Z.dispatch({
                    type: 'ONLINE_GUILD_MEMBER_COUNT_UPDATE',
                    guildId: i.body.id,
                    count: i.body.approximate_presence_count
                }),
            !p)
        ) {
            let { default: t } = await Promise.resolve().then(n.bind(n, 17181));
            await t({
                guildId: e,
                returnChannelId: r
            });
        }
        return i;
    } catch (t) {
        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === C.evJ.TOO_MANY_USER_GUILDS) {
            let e = S.default.getCurrentUser();
            N.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? b(C.tHP) : b(C.DZw);
        }
        throw ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === C.evJ.GUILD_AT_CAPACITY && D(), p && (null === (o = t.body) || void 0 === o ? void 0 : o.code) === C.evJ.UNKNOWN_GUILD && L(e), t);
    }
}
function P(e) {
    return new Promise((t) =>
        I.Z.addConditionalChangeListener(() => {
            let n = I.Z.getGuild(e);
            return null == n || (t(n), !1);
        })
    );
}
function U(e, t) {
    return null != t ? t : (0, E.V)(e);
}
t.Z = {
    joinGuild: M,
    waitForGuild: P,
    async transitionToGuildSync(e, t, n) {
        let r = U((await P(e)).id, n),
            i = t;
        (null == t ? void 0 : t.hasOwnProperty('welcomeModalChannelId')) &&
            null == t.welcomeModalChannelId &&
            (i = {
                ...t,
                welcomeModalChannelId: null != r ? r : void 0
            }),
            (0, f.uL)(C.Z5c.CHANNEL(e, r), i),
            await new Promise(setImmediate);
    },
    deleteGuild: L,
    selectGuild(e) {
        (0, d.a)(e);
    },
    createGuild(e) {
        l.Z.dispatch({
            type: 'GUILD_CREATE',
            guild: e
        });
    },
    setServerMute: (e, t, n) =>
        s.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { mute: n },
            oldFormErrors: !0
        }),
    setServerDeaf: (e, t, n) =>
        s.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { deaf: n },
            oldFormErrors: !0
        }),
    setChannel(e, t, n) {
        s.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { channel_id: n },
            oldFormErrors: !0
        });
    },
    setMemberFlags(e, t, n) {
        s.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { flags: n },
            oldFormErrors: !0
        });
    },
    kickUser: (e, t, n) =>
        s.tn.del({
            url: C.ANM.GUILD_MEMBER(e, t),
            reason: n,
            oldFormErrors: !0
        }),
    setCommunicationDisabledUntil(e) {
        let { guildId: t, userId: n, communicationDisabledUntilTimestamp: r, duration: i, reason: o, location: s } = e;
        return O.Z.patch({
            url: C.ANM.GUILD_MEMBER(t, n),
            reason: o,
            body: { communication_disabled_until: r },
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != i ? i : null,
                    reason: null != o ? o : null,
                    communication_disabled_until: r,
                    location: null != s ? s : null
                }
            }
        });
    },
    banUser: (e, t, n, r) =>
        s.tn.put({
            url: C.ANM.GUILD_BAN(e, t),
            reason: r,
            body: { delete_message_seconds: n },
            oldFormErrors: !0
        }),
    unbanUser: (e, t) =>
        s.tn.del({
            url: C.ANM.GUILD_BAN(e, t),
            oldFormErrors: !0
        }),
    banMultipleUsers: (e, t, n, r) =>
        s.tn.post({
            url: C.ANM.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: r,
            oldFormErrors: !0
        }),
    async createRole(e, t, n) {
        let r = {
            name: null != t && '' !== t ? t : y.Z.Messages.NEW_ROLE,
            color: null != n ? n : 0,
            permissions: v.Hn
        };
        try {
            let t = await s.tn.post({
                    url: C.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: r
                }),
                n = t.body;
            return (
                (n.permissions = o.vB(n.permissions)),
                l.Z.dispatch({
                    type: 'GUILD_SETTINGS_ROLE_SELECT',
                    roleId: t.body.id,
                    role: n
                }),
                c.Z.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new u.Z(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: r, unicodeEmoji: i, ...a } = n,
            o = null === r || (null == r ? void 0 : r.startsWith('data:')) ? r : void 0,
            l = await s.tn.patch({
                url: C.ANM.GUILD_ROLE(e, t),
                body: {
                    ...a,
                    icon: o,
                    unicode_emoji: i
                },
                oldFormErrors: !0
            });
        return c.Z.checkGuildTemplateDirty(e), l;
    },
    updateRolePermissions: (e, t, n) =>
        s.tn.patch({
            url: C.ANM.GUILD_ROLE(e, t),
            body: { permissions: n },
            oldFormErrors: !0
        }),
    deleteRole(e, t) {
        s.tn
            .del({
                url: C.ANM.GUILD_ROLE(e, t),
                oldFormErrors: !0
            })
            .then(() => {
                c.Z.checkGuildTemplateDirty(e);
            });
    },
    async batchChannelUpdate(e, t) {
        let n = await s.tn.patch({
            url: C.ANM.GUILD_CHANNELS(e),
            body: t,
            oldFormErrors: !0
        });
        return c.Z.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await s.tn.patch({
            url: C.ANM.GUILD_ROLES(e),
            body: t,
            oldFormErrors: !0
        });
        return c.Z.checkGuildTemplateDirty(e), n;
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return l.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: r
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: r } = null != t ? t : {};
        return l.Z.dispatch({
            type: 'GUILD_SEARCH_RECENT_MEMBERS',
            guildId: e,
            query: n,
            continuationToken: r
        });
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return l.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n
        });
    },
    move(e, t, n, r) {
        l.Z.dispatch({
            type: 'GUILD_MOVE',
            fromIndex: e,
            toIndex: t,
            fromFolderIndex: n,
            toFolderIndex: r
        });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t) throw Error('GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: '.concat(e));
        l.Z.dispatch({
            type: 'GUILD_MOVE_BY_ID',
            sourceId: e,
            targetId: t,
            moveToBelow: n,
            combine: r
        });
    },
    createGuildFolderLocal(e, t) {
        A.default.track(C.rMx.GUILD_FOLDER_CREATED),
            l.Z.dispatch({
                type: 'GUILD_FOLDER_CREATE_LOCAL',
                sourceIds: e,
                name: t
            });
    },
    editGuildFolderLocal(e, t, n) {
        l.Z.dispatch({
            type: 'GUILD_FOLDER_EDIT_LOCAL',
            targetId: e,
            sourceIds: t,
            name: n
        });
    },
    deleteGuildFolderLocal(e) {
        l.Z.dispatch({
            type: 'GUILD_FOLDER_DELETE_LOCAL',
            targetId: e
        });
    },
    toggleGuildFolderExpand(e) {
        let t = p.Z.isFolderExpanded(e);
        A.default.track(C.rMx.GUILD_FOLDER_CLICKED, {
            source: 'sidebar',
            action: t ? 'collapsed' : 'expanded'
        }),
            l.Z.dispatch({
                type: 'TOGGLE_GUILD_FOLDER_EXPAND',
                folderId: e
            });
    },
    setGuildFolderExpanded(e, t) {
        l.Z.dispatch({
            type: 'SET_GUILD_FOLDER_EXPANDED',
            folderId: e,
            expanded: t
        });
    },
    collapseAllFolders() {
        l.Z.dispatch({ type: 'GUILD_FOLDER_COLLAPSE' });
    },
    nsfwAgree(e) {
        l.Z.dispatch({
            type: 'GUILD_NSFW_AGREE',
            guildId: e
        });
    },
    nsfwReturnToSafety(e) {
        if (null == e) {
            (0, f.uL)(C.Z5c.FRIENDS);
            return;
        }
        let t = m.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() ? (0, f.uL)(C.Z5c.FRIENDS) : (0, f.uL)(C.Z5c.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = m.ZP.getDefaultChannel(e);
        null != t ? (0, f.uL)(C.Z5c.CHANNEL(e, t.id)) : (0, f.uL)(C.Z5c.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = {
            url: C.ANM.GUILD_APPLICATIONS(e),
            oldFormErrors: !0
        };
        null != t && (n.query = { channel_id: t });
        let r = (await s.tn.get(n)).body;
        l.Z.dispatch({
            type: 'GUILD_APPLICATIONS_FETCH_SUCCESS',
            guildId: e,
            applications: r
        });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = { limit: t };
        null != n && (r.after = n),
            await s.tn
                .get({
                    url: C.ANM.GUILD_BANS(e),
                    oldFormErrors: !0,
                    query: r
                })
                .then((t) => {
                    l.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                });
    },
    async searchGuildBans(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            i = { limit: r };
        null != n && n.length > 0 && (i.user_ids = n),
            null != t && t.trim().length > 0 && (i.query = t),
            await s.tn
                .get({
                    url: C.ANM.GUILD_BANS_SEARCH(e),
                    oldFormErrors: !0,
                    query: i
                })
                .then((t) => {
                    l.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                });
    },
    async fetchGuildBans(e) {
        await s.tn
            .get({
                url: C.ANM.GUILD_BANS(e),
                oldFormErrors: !0
            })
            .then((e) => {
                l.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_BANS',
                    bans: e.body
                });
            });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        s.tn
            .get({
                url: C.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
                oldFormErrors: !0
            })
            .then((e) => {
                let { body: n } = e;
                return (
                    l.Z.dispatch({
                        type: 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS',
                        roleId: t,
                        roleConnectionEligibility: n
                    }),
                    n
                );
            }),
    async assignGuildRoleConnection(e, t) {
        await s.tn.post({
            url: C.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
            oldFormErrors: !0
        });
    },
    async unassignGuildRoleConnection(e, t) {
        await s.tn.post({
            url: C.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
            oldFormErrors: !0
        });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await s.tn.get({
                url: C.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0
            })
        ).body
};
