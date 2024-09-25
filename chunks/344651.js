n.d(t, {
    Z: function () {
        return Y;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(789020);
var o = n(411104);
var s = n(392711),
    l = n.n(s);
n(724522);
var u = n(442837),
    c = n(570140),
    d = n(749210),
    _ = n(821849),
    E = n(232567),
    f = n(864106),
    h = n(710845),
    p = n(292419),
    m = n(566006),
    I = n(686478),
    T = n(952537),
    g = n(218543),
    S = n(48481),
    A = n(131704),
    v = n(209747),
    N = n(598077),
    O = n(592125),
    R = n(271383),
    C = n(819640),
    y = n(594174),
    b = n(979651),
    L = n(509545),
    D = n(78839),
    M = n(936101),
    P = n(868158),
    U = n(483012),
    w = n(955132);
let x = new h.Z('ConnectionStore'),
    G = new U.Z(
        w.Wb,
        (e, t) => {
            var n;
            e =
                null != e
                    ? e
                    : {
                          type: 'CHANNEL_UPDATES',
                          channels: []
                      };
            let r = (0, A.q_)(t),
                i = O.Z.getChannel(t.id),
                a =
                    null == i
                        ? void 0
                        : i.merge({
                              ...r,
                              recipients: i.recipients,
                              bitrate: null !== (n = r.bitrate) && void 0 !== n ? n : i.bitrate
                          });
            return e.channels.push(null != a ? a : r), e;
        },
        (e) => 'CHANNEL_UPDATE' !== e
    ),
    k = new U.Z(
        w.Wb,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: 'SOUNDBOARD_SOUNDS_RECEIVED',
                          updates: []
                      }
                    : e).updates.push({
                guildId: t.guild_id,
                sounds: t.soundboard_sounds.map((e) => ({
                    name: e.name,
                    soundId: e.sound_id,
                    emojiName: e.emoji_name,
                    emojiId: e.emoji_id,
                    userId: e.user_id,
                    volume: e.volume,
                    available: e.available,
                    guildId: t.guild_id
                }))
            }),
            e
        ),
        (e) => 'SOUNDBOARD_SOUNDS' !== e
    ),
    B = new U.Z(
        w.Wb,
        (e, t) => (
            (e =
                null != e
                    ? e
                    : {
                          type: 'GUILD_MEMBERS_CHUNK_BATCH',
                          chunks: []
                      }).chunks.push(t),
            e
        ),
        (e) => 'GUILD_MEMBERS_CHUNK' !== e
    ),
    F = new U.Z(
        w.Wb,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: 'PRESENCE_UPDATES',
                          updates: []
                      }
                    : e).updates.push(t),
            e
        ),
        (e) => 'PRESENCE_UPDATE' !== e && 'GUILD_MEMBERS_CHUNK' !== e
    ),
    Z = {};
function V(e, t) {
    for (let n of e)
        Z[n] = {
            preload: () => null,
            dispatch: t
        };
}
function H(e, t, n) {
    for (let r of e)
        Z[r] = {
            preload: t,
            dispatch: n
        };
}
function Y(e) {
    return Z[e];
}
function j(e) {
    c.Z.dispatch(e).catch((t) =>
        w.Wb.resetSocketOnDispatchError({
            error: t,
            action: e.type
        })
    );
}
function W(e, t, n) {
    var r;
    let { roles: i, nick: a, avatar: o, avatar_decoration_data: s, flags: u, premium_since: c, pending: d, joined_at: _, communication_disabled_until: E, unusual_dm_activity_until: h } = n,
        p = R.ZP.getMember(e, t.id);
    if (!(null != p && p.nick === a && p.avatar === o && l().isEqual(p.roles, i) && (0, f.sr)(p.avatarDecoration, s)) || p.premiumSince !== c || p.isPending !== d || p.joinedAt !== _ || p.communicationDisabledUntil !== E || p.flags !== u || (null !== (r = p.unusualDMActivityUntil) && void 0 !== r ? r : null) !== (null != h ? h : null))
        j({
            type: 'GUILD_MEMBER_ADD',
            guildId: e,
            user: t,
            roles: i,
            nick: a,
            avatar: o,
            avatarDecoration: s,
            premiumSince: c,
            isPending: d,
            joinedAt: _,
            communicationDisabledUntil: E,
            unusualDMActivityUntil: h,
            flags: u
        });
}
function K(e) {
    let { member: t, mentions: n, author: r, guild_id: i } = e;
    null != t && null != i && W(i, r, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != i) {
                    let { member: t } = e;
                    delete e.member, W(i, e, t);
                }
            });
}
function z(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: e.activities,
        active: !!e.active,
        clientInfo: e.client_info
    }));
}
function q(e) {
    let { guildId: t, user: n, status: r, activities: i, clientStatus: a } = e;
    F.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: a,
        activities: i
    });
}
H(
    ['INITIAL_GUILD'],
    (e) => ('full' === e.data_mode ? null : O.o.loadGuildIds([e.id])),
    (e) => {
        g.Z.initialGuild.measure(() => {
            u.ZP.Emitter.batched(() => {
                let t = P.Fx(e, w.Wb.identifyStartTime);
                null != y.default.getCurrentUser() &&
                    (j({
                        type: 'GUILD_CREATE',
                        guild: t
                    }),
                    j({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: t.voice_states.map((e) => {
                            var n, r;
                            return {
                                userId: e.user_id,
                                guildId: t.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null,
                                discoverable: null === (r = e.discoverable) || void 0 === r || r
                            };
                        })
                    }),
                    x.log('Dispatched INITIAL_GUILD '.concat(e.id)));
            });
        });
    }
),
    V(['READY_SUPPLEMENTAL'], (e) => {
        g.Z.readySupplemental.measure(() => {
            u.ZP.Emitter.batched(() => {
                var t, n;
                e = g.Z.hydrateReadySupplemental.measure(() => P.r$(e, w.Wb.identifyStartTime));
                let r = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities
                        })),
                    i = e.guilds.filter((e) => !0 !== e.unavailable);
                i.forEach((e) => {
                    e.presences = r(e.presences || []);
                });
                let a = e.presences ? r(e.presences) : [],
                    o = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map((e) => (0, A.q_)(e)),
                    s = null !== (n = e.game_invites) && void 0 !== n ? n : [];
                g.Z.dispatchReadySupplemental.measure(() => {
                    j({
                        type: 'CONNECTION_OPEN_SUPPLEMENTAL',
                        guilds: i,
                        presences: a,
                        lazyPrivateChannels: o,
                        gameInvites: s
                    });
                });
                let l = [];
                i.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        var n, r;
                        l.push({
                            userId: t.user_id,
                            guildId: e.id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf,
                            selfVideo: t.self_video || !1,
                            suppress: t.suppress,
                            selfStream: t.self_stream || !1,
                            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null,
                            discoverable: null === (r = t.discoverable) || void 0 === r || r
                        });
                    });
                }),
                    j({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: l,
                        initial: !0
                    }),
                    w.GC.update();
            });
        }),
            setTimeout(() => j({ type: 'POST_CONNECTION_OPEN' }), 2000);
    }),
    H(
        ['READY'],
        (e) => {
            var t;
            let n = P.Eb(),
                r = e.guilds
                    .filter((e) => {
                        var t, n;
                        return !e.unavailable && 'partial' === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0);
                    })
                    .map((e) => e.id);
            return Promise.all([n, null !== (t = O.o.loadGuildIds(r)) && void 0 !== t ? t : Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            if (e.user.bot) {
                j({ type: 'LOGOUT' });
                return;
            }
            g.Z.ready.measure(() => {
                u.ZP.Emitter.batched(() => {
                    let t = (e = g.Z.hydrateReady.measure(() => P.IM(e, w.Wb.identifyStartTime, n))).private_channels.map((e) => (0, A.q_)(e)),
                        r = e.guilds.filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted).map((e) => e.id),
                        i = e.guilds.filter((e) => !0 !== e.unavailable),
                        a = e.guilds.filter((e) => !0 === e.geo_restricted);
                    i.forEach((e) => {
                        e.presences = [];
                    });
                    let o = null == e.user_settings_proto ? void 0 : (0, S.ac)(e.user_settings_proto);
                    g.Z.dispatchReady.measure(() => {
                        var n;
                        j({
                            type: 'CONNECTION_OPEN',
                            sessionId: e.session_id,
                            authSessionIdHash: e.auth_session_id_hash,
                            staticAuthSessionId: e.static_client_session_id,
                            user: e.user,
                            users: e.users,
                            guilds: i,
                            initialPrivateChannels: t,
                            unavailableGuilds: r,
                            readState: e.read_state,
                            userGuildSettings: e.user_guild_settings,
                            tutorial: e.tutorial,
                            relationships: e.relationships,
                            friendSuggestionCount: e.friend_suggestion_count,
                            presences: e.presences,
                            analyticsToken: e.analytics_token,
                            experiments: e.experiments,
                            connectedAccounts: e.connected_accounts,
                            guildExperiments: e.guild_experiments,
                            requiredAction: e.required_action,
                            consents: e.consents,
                            sessions: z(e.sessions || []),
                            pendingPayments: e.pending_payments,
                            countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
                            guildJoinRequests: e.guild_join_requests || [],
                            userSettingsProto: o,
                            apiCodeVersion: e.api_code_version,
                            auth: e.auth,
                            notificationSettings: { flags: e.notification_settings.flags },
                            geoRestrictedGuilds: a,
                            explicitContentScanVersion: e.explicit_content_scan_version
                        });
                    }),
                        null != e.auth_token &&
                            j({
                                type: 'UPDATE_TOKEN',
                                token: e.auth_token,
                                userId: e.user.id
                            }),
                        w.RR.update(),
                        w.GC.update();
                });
            });
        }
    ),
    V(['RESUMED'], () => {
        w.RR.forceUpdate(), w.GC.forceUpdate(), j({ type: 'CONNECTION_RESUMED' });
    }),
    V(['TYPING_START'], (e) => {
        null != e.member && W(e.guild_id, e.member.user, e.member),
            j({
                type: 'TYPING_START',
                channelId: e.channel_id,
                userId: e.user_id
            });
    }),
    V(['ACTIVITY_START'], (e) => {
        j({
            type: 'ACTIVITY_START',
            userId: e.user_id,
            activity: e.activity
        });
    }),
    V(['ACTIVITY_USER_ACTION'], (e) => {
        j({
            type: 'ACTIVITY_USER_ACTION',
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    H(
        ['MESSAGE_CREATE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            K(e),
                null != e.author &&
                    j({
                        type: 'MESSAGE_CREATE',
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1
                    });
        }
    ),
    H(
        ['MESSAGE_UPDATE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            K(e),
                j({
                    type: 'MESSAGE_UPDATE',
                    guildId: e.guild_id,
                    message: e
                });
        }
    ),
    H(
        ['MESSAGE_DELETE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'MESSAGE_DELETE',
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id
            });
        }
    ),
    H(
        ['MESSAGE_DELETE_BULK'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'MESSAGE_DELETE_BULK',
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id
            });
        }
    ),
    H(
        ['MESSAGE_ACK'],
        (e) => O.o.loadGuildFromChannelId(e.channel_id),
        (e) => {
            j({
                type: 'MESSAGE_ACK',
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version
            });
        }
    ),
    V(['GUILD_FEATURE_ACK'], (e) => {
        j({
            type: 'GUILD_FEATURE_ACK',
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    V(['USER_NON_CHANNEL_ACK'], (e) => {
        j({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    H(
        ['CHANNEL_PINS_ACK'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'CHANNEL_PINS_ACK',
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version
            });
        }
    ),
    H(
        ['CHANNEL_PINS_UPDATE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'CHANNEL_PINS_UPDATE',
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp
            });
        }
    ),
    H(
        ['CHANNEL_CREATE', 'CHANNEL_DELETE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            j({
                type: t,
                channel: (0, A.q_)(e)
            });
        }
    ),
    V(['VOICE_CHANNEL_STATUS_UPDATE'], (e, t) => {
        j({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        });
    }),
    V(['CHANNEL_STATUSES'], (e, t) => {
        j({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        });
    }),
    H(
        ['CHANNEL_UPDATE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            G.add(e);
        }
    ),
    H(
        ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...r } = e;
            j({
                type: t,
                isNewlyCreated: n,
                channel: (0, A.q_)(r)
            });
        }
    ),
    H(
        ['THREAD_LIST_SYNC'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'THREAD_LIST_SYNC',
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = O.Z.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, A.q_)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? l().map(e.members, T.Z) : void 0,
                channelIds: e.channel_ids
            });
        }
    ),
    V(['THREAD_MEMBER_UPDATE'], (e) => {
        j({
            type: 'THREAD_MEMBER_UPDATE',
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp
        });
    }),
    V(['THREAD_MEMBERS_UPDATE'], (e) => {
        var t;
        j({
            type: 'THREAD_MEMBERS_UPDATE',
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers:
                null === (t = e.added_members) || void 0 === t
                    ? void 0
                    : t.map((t) => ({
                          id: t.id,
                          guildId: e.guild_id,
                          userId: t.user_id,
                          flags: t.flags,
                          joinTimestamp: t.join_timestamp
                      })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview
        });
    }),
    V(['FORUM_UNREADS'], (e) => {
        !e.permission_denied &&
            j({
                type: 'FORUM_UNREADS',
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count
                }))
            });
    }),
    V(['SOUNDBOARD_SOUNDS'], (e) => {
        k.add(e);
    }),
    V(['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'], (e, t) => {
        let n = O.Z.getBasicChannel(e.channel_id);
        j({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        });
    }),
    H(
        ['GUILD_CREATE'],
        (e) => ('full' === e.data_mode ? null : O.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                j({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
            else {
                let t = P.J2(e);
                d.Z.createGuild(t),
                    j({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: t.voice_states.map((e) => {
                            var n, r;
                            return {
                                userId: e.user_id,
                                guildId: t.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null,
                                discoverable: null === (r = e.discoverable) || void 0 === r || r
                            };
                        })
                    });
            }
        }
    ),
    V(['GUILD_UPDATE'], (e) => {
        j({
            type: 'GUILD_UPDATE',
            guild: e
        }),
            e.unavailable &&
                j({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
    }),
    V(['GUILD_DELETE'], (e) => {
        j({
            type: 'GUILD_DELETE',
            guild: e
        }),
            e.geo_restricted
                ? j({
                      type: 'GUILD_GEO_RESTRICTED',
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name
                  })
                : e.unavailable &&
                  j({
                      type: 'GUILD_UNAVAILABLE',
                      guildId: e.id
                  });
    }),
    V(['GUILD_MEMBERS_CHUNK'], (e) => {
        u.ZP.Emitter.batched(() => {
            B.add({
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: r, client_status: i, activities: a } = t;
                        return q({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            clientStatus: i
                        });
                    }),
                U.Z.flush('GUILD_MEMBERS_CHUNK');
        });
    }),
    V(['THREAD_MEMBER_LIST_UPDATE'], (e) => {
        u.ZP.Emitter.batched(() => {
            j({
                type: 'THREAD_MEMBER_LIST_UPDATE',
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: r, client_status: i, activities: a } = t;
                        return q({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            clientStatus: i
                        });
                    }),
                U.Z.flush();
        });
    }),
    V(['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'], (e, t) => {
        j({
            type: t,
            guildId: e.guild_id,
            user: e.user,
            avatar: e.avatar,
            avatarDecoration: e.avatar_decoration_data,
            roles: e.roles,
            nick: e.nick,
            premiumSince: e.premium_since,
            isPending: e.pending,
            joinedAt: e.joined_at,
            communicationDisabledUntil: e.communication_disabled_until,
            unusualDMActivityUntil: e.unusual_dm_activity_until,
            flags: e.flags
        });
    }),
    H(
        ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            j({
                type: t,
                guildId: e.guild_id,
                role: e.role
            });
        }
    ),
    H(
        ['GUILD_ROLE_DELETE'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'GUILD_ROLE_DELETE',
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version
            });
        }
    ),
    V(['GUILD_EMOJIS_UPDATE'], (e) => {
        j({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e.guild_id,
            emojis: e.emojis
        });
    }),
    V(['GUILD_STICKERS_UPDATE'], (e) => {
        j({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e.guild_id,
            stickers: e.stickers
        });
    }),
    V(['GUILD_INTEGRATIONS_UPDATE'], (e) => {
        j({
            type: 'GUILD_INTEGRATIONS_UPDATE',
            guildId: e.guild_id
        });
    }),
    V(['INTEGRATION_CREATE'], (e) => {
        j({
            type: 'INTEGRATION_CREATE',
            application: e.application,
            guildId: e.guild_id
        });
    }),
    V(['INTEGRATION_DELETE'], (e) => {
        j({
            type: 'INTEGRATION_DELETE',
            applicationId: e.application_id,
            guildId: e.guild_id
        });
    }),
    V(['USER_UPDATE'], (e) => {
        j({
            type: 'CURRENT_USER_UPDATE',
            user: e
        });
    }),
    V(['USER_SETTINGS_PROTO_UPDATE'], (e) => {
        let t = (0, S.kI)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ('string' == typeof t)
                throw (
                    (console.error('Invalid proto: |'.concat(t, '| |').concat(e.settings.proto, '|')),
                    console.error({
                        parsed: t,
                        wire: e.settings.proto,
                        type: e.settings.type
                    }),
                    Error('UserSettingsProto must not be a string'))
                );
            j({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            });
        }
    }),
    V(['USER_GUILD_SETTINGS_UPDATE'], (e) => {
        j({
            type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
            userGuildSettings: [e]
        });
    }),
    V(['USER_CONNECTIONS_UPDATE'], () => {
        j({ type: 'USER_CONNECTIONS_UPDATE' });
    }),
    V(['USER_REQUIRED_ACTION_UPDATE'], (e) => {
        j({
            type: 'USER_REQUIRED_ACTION_UPDATE',
            requiredAction: e.required_action
        });
    }),
    V(['USER_NOTE_UPDATE'], (e) => {
        j({
            type: 'USER_NOTE_UPDATE',
            ...e
        });
    }),
    V(['RELATIONSHIP_ADD'], (e) => {
        j({
            type: 'RELATIONSHIP_ADD',
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname,
                isSpamRequest: e.is_spam_request || !1
            },
            shouldNotify: !0 === e.should_notify
        });
    }),
    V(['RELATIONSHIP_REMOVE'], (e) => {
        j({
            type: 'RELATIONSHIP_REMOVE',
            relationship: e
        });
    }),
    V(['RELATIONSHIP_UPDATE'], (e) => {
        j({
            type: 'RELATIONSHIP_UPDATE',
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                nickname: e.nickname,
                since: e.since,
                isSpamRequest: e.is_spam_request || !1
            }
        });
    }),
    V(['PRESENCE_UPDATE'], (e) => {
        q({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            clientStatus: e.client_status
        });
    }),
    V(['PRESENCES_REPLACE'], (e) => {
        j({
            type: 'PRESENCES_REPLACE',
            presences: e
        });
    }),
    V(['SESSIONS_REPLACE'], (e) => {
        j({
            type: 'SESSIONS_REPLACE',
            sessions: z(e)
        });
    }),
    V(['VOICE_STATE_UPDATE'], (e) => {
        var t, n;
        null != e.member && W(e.guild_id, e.member.user, e.member),
            j({
                type: 'VOICE_STATE_UPDATES',
                voiceStates: [
                    {
                        userId: e.user_id,
                        guildId: e.guild_id,
                        sessionId: e.session_id,
                        channelId: e.channel_id,
                        mute: e.mute,
                        deaf: e.deaf,
                        selfMute: e.self_mute,
                        selfDeaf: e.self_deaf,
                        selfVideo: e.self_video || !1,
                        suppress: e.suppress,
                        selfStream: e.self_stream || !1,
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        discoverable: null === (n = e.discoverable) || void 0 === n || n,
                        oldChannelId: b.Z.getUserVoiceChannelId(e.guild_id, e.user_id)
                    }
                ]
            });
    }),
    V(['VOICE_SERVER_UPDATE'], (e) => {
        j({
            type: 'VOICE_SERVER_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    V(['CALL_CREATE'], (e) => {
        j({
            type: 'CALL_CREATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
        let t = e.voice_states;
        null != t &&
            j({
                type: 'VOICE_STATE_UPDATES',
                voiceStates: t.map((e) => {
                    var t, n;
                    return {
                        userId: e.user_id,
                        guildId: null,
                        sessionId: e.session_id,
                        channelId: e.channel_id,
                        mute: e.mute,
                        deaf: e.deaf,
                        selfMute: e.self_mute,
                        selfDeaf: e.self_deaf,
                        selfVideo: e.self_video || !1,
                        suppress: e.suppress,
                        selfStream: e.self_stream || !1,
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        discoverable: null === (n = e.discoverable) || void 0 === n || n
                    };
                })
            });
    }),
    V(['CALL_UPDATE'], (e) => {
        j({
            type: 'CALL_UPDATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
    }),
    V(['CALL_DELETE'], (e) => {
        j({
            type: 'CALL_DELETE',
            channelId: e.channel_id,
            unavailable: e.unavailable
        });
    }),
    V(['OAUTH2_TOKEN_REVOKE'], (e) => {
        j({
            type: 'OAUTH2_TOKEN_REVOKE',
            accessToken: e.access_token
        });
    }),
    V(['RECENT_MENTION_DELETE'], (e) => {
        j({
            type: 'RECENT_MENTION_DELETE',
            id: e.message_id
        });
    }),
    V(['SAVED_MESSAGE_CREATE'], (e) => {
        j({
            type: 'SAVED_MESSAGE_CREATE',
            savedMessage: (0, I.jk)(e)
        });
    }),
    V(['SAVED_MESSAGE_DELETE'], (e) => {
        j({
            type: 'SAVED_MESSAGE_DELETE',
            savedMessageData: (0, I.$_)(e)
        });
    }),
    V(['FRIEND_SUGGESTION_CREATE'], (e) => {
        j({
            type: 'FRIEND_SUGGESTION_CREATE',
            suggestion: e
        });
    }),
    V(['FRIEND_SUGGESTION_DELETE'], (e) => {
        j({
            type: 'FRIEND_SUGGESTION_DELETE',
            suggestedUserId: e.suggested_user_id
        });
    }),
    V(['WEBHOOKS_UPDATE'], (e) => {
        j({
            type: 'WEBHOOKS_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id
        });
    }),
    V(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'], (e, t) => {
        j({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type,
            messageAuthorId: e.message_author_id
        });
    }),
    V(['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'], (e, t) => {
        j({
            type: 'MESSAGE_POLL_VOTE_ADD' === t ? 'MESSAGE_REACTION_ADD' : 'MESSAGE_REACTION_REMOVE',
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: ''
            },
            reactionType: m.O.VOTE
        });
    }),
    V(['MESSAGE_REACTION_REMOVE_ALL'], (e) => {
        j({
            type: 'MESSAGE_REACTION_REMOVE_ALL',
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    V(['MESSAGE_REACTION_REMOVE_EMOJI'], (e) => {
        j({
            type: 'MESSAGE_REACTION_REMOVE_EMOJI',
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        });
    }),
    V(['MESSAGE_REACTION_ADD_MANY'], (e) => {
        j({
            type: 'MESSAGE_REACTION_ADD_MANY',
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        });
    }),
    V(['PAYMENT_UPDATE'], (e) => {
        j({
            type: 'PAYMENT_UPDATE',
            payment: e
        });
    }),
    V(['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'], (e, t) => {
        j({
            type: t,
            entitlement: e
        });
    }),
    V(['USER_PAYMENT_SOURCES_UPDATE'], () => {
        C.Z.hasLayers() && (n(355467).tZ(), _.Gn(L.Z.getFetchedSKUIDs()));
    }),
    V(['USER_SUBSCRIPTIONS_UPDATE'], () => {
        E.k(), C.Z.hasLayers() && n(355467).jg();
    }),
    V(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'], (e) => {
        j({
            type: 'GUILD_BOOST_SLOT_CREATE',
            guildBoostSlot: v.Z.createFromServer(e, D.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    V(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'], (e) => {
        j({
            type: 'GUILD_BOOST_SLOT_UPDATE',
            guildBoostSlot: v.Z.createFromServer(e, D.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    V(['BILLING_POPUP_BRIDGE_CALLBACK'], (e) => {
        j({
            type: 'BILLING_POPUP_BRIDGE_CALLBACK',
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        });
    }),
    V(['USER_PAYMENT_BROWSER_CHECKOUT_DONE'], (e) => {
        j({
            type: 'USER_PAYMENT_BROWSER_CHECKOUT_DONE',
            loadId: e.load_id
        });
    }),
    V(['USER_PAYMENT_CLIENT_ADD'], (e) => {
        (0, M.L)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                j({
                    type: 'USER_PAYMENT_CLIENT_ADD',
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at
                });
        });
    }),
    V(['GUILD_MEMBER_LIST_UPDATE'], (e) => {
        u.ZP.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((W(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                q({
                    guildId: e.guild_id,
                    user: r.user,
                    status: r.status,
                    activities: r.activities,
                    clientStatus: r.client_status
                });
            };
            e.ops.forEach((e) => {
                let { op: n, items: r, item: i } = e;
                switch (n) {
                    case 'SYNC':
                        r.forEach(t);
                        break;
                    case 'UPDATE':
                    case 'INSERT':
                        t(i);
                }
            }),
                U.Z.flush(),
                j({
                    type: 'GUILD_MEMBER_LIST_UPDATE',
                    guildId: e.guild_id,
                    id: e.id,
                    ops: e.ops,
                    groups: e.groups,
                    memberCount: e.member_count,
                    onlineCount: e.online_count
                });
        });
    }),
    V(['GIFT_CODE_UPDATE'], (e) => {
        j({
            type: 'GIFT_CODE_UPDATE',
            uses: e.uses,
            code: e.code
        });
    }),
    V(['GIFT_CODE_CREATE'], (e) => {
        j({
            type: 'GIFT_CODE_CREATE',
            giftCode: e
        });
    }),
    V(['USER_ACHIEVEMENT_UPDATE'], (e) => {
        j({
            type: 'USER_ACHIEVEMENT_UPDATE',
            userAchievement: e
        });
    }),
    V(['LIBRARY_APPLICATION_UPDATE'], (e) => {
        j({
            type: 'LIBRARY_APPLICATION_UPDATE',
            libraryApplication: e
        });
    }),
    V(['STREAM_CREATE'], (e) => {
        j({
            type: 'STREAM_CREATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        });
    }),
    V(['STREAM_SERVER_UPDATE'], (e) => {
        j({
            type: 'STREAM_SERVER_UPDATE',
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    V(['STREAM_UPDATE'], (e) => {
        j({
            type: 'STREAM_UPDATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        });
    }),
    V(['STREAM_DELETE'], (e) => {
        j({
            type: 'STREAM_DELETE',
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        });
    }),
    V(['GENERIC_PUSH_NOTIFICATION_SENT'], (e) => {
        j({
            type: 'GENERIC_PUSH_NOTIFICATION_SENT',
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        });
    }),
    V(['REACTION_NOTIFICATION_SENT'], (e) => {
        j({
            type: 'REACTION_NOTIFICATION_SENT',
            route: e.route,
            message: e.message,
            emoji: e.emoji,
            reactorUserId: e.reactor_user_id
        });
    }),
    V(['NOTIFICATION_CENTER_ITEM_CREATE'], (e) => {
        j({
            type: 'NOTIFICATION_CENTER_ITEM_CREATE',
            item: e
        });
    }),
    V(['NOTIFICATION_CENTER_ITEM_DELETE'], (e) => {
        j({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        });
    }),
    V(['NOTIFICATION_CENTER_ITEMS_ACK'], (e) => {
        j({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            ids: [e.id],
            optimistic: !1
        });
    }),
    V(['NOTIFICATION_CENTER_ITEM_COMPLETED'], (e) => {
        j({
            type: 'NOTIFICATION_CENTER_ITEM_COMPLETED',
            item_enum: e.item_enum
        });
    }),
    V(['QUESTS_USER_STATUS_UPDATE'], (e) => {
        j({
            type: 'QUESTS_USER_STATUS_UPDATE',
            user_status: e.user_status
        });
    }),
    V(['APPLICATION_COMMAND_PERMISSIONS_UPDATE'], (e, t) => {
        j({
            type: t,
            guildId: e.guild_id
        });
    }),
    V(['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'], (e) => {
        j({
            type: 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE',
            guildId: e.guild_id,
            version: e.version
        });
    }),
    V(['GUILD_JOIN_REQUEST_CREATE'], (e) => {
        j({
            type: 'GUILD_JOIN_REQUEST_CREATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    V(['GUILD_JOIN_REQUEST_UPDATE'], (e) => {
        j({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    V(['GUILD_JOIN_REQUEST_DELETE'], (e) => {
        j({
            type: 'GUILD_JOIN_REQUEST_DELETE',
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        });
    }),
    V(['INTERACTION_CREATE'], (e) => {
        j({
            type: 'INTERACTION_CREATE',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    V(['INTERACTION_SUCCESS'], (e) => {
        j({
            type: 'INTERACTION_SUCCESS',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    V(['INTERACTION_FAILURE'], (e) => {
        j({
            type: 'INTERACTION_FAILURE',
            nonce: e.nonce,
            reasonCode: e.reason_code
        });
    }),
    V(['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'], (e) => {
        j({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE',
            choices: e.choices,
            nonce: e.nonce
        });
    }),
    V(['INTERACTION_MODAL_CREATE'], (e) => {
        j({
            type: 'INTERACTION_MODAL_CREATE',
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, p.uZ)(e.components),
            nonce: e.nonce
        });
    }),
    V(['INTERACTION_IFRAME_MODAL_CREATE'], (e) => {
        j({
            type: 'INTERACTION_IFRAME_MODAL_CREATE',
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            iframePath: e.iframe_path,
            modalSize: e.modal_size,
            nonce: e.nonce
        });
    }),
    V(['STAGE_INSTANCE_CREATE'], (e) => {
        j({
            type: 'STAGE_INSTANCE_CREATE',
            instance: e
        });
    }),
    V(['STAGE_INSTANCE_UPDATE'], (e) => {
        j({
            type: 'STAGE_INSTANCE_UPDATE',
            instance: e
        });
    }),
    V(['STAGE_INSTANCE_DELETE'], (e) => {
        j({
            type: 'STAGE_INSTANCE_DELETE',
            instance: e
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_CREATE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_CREATE',
            guildScheduledEvent: e
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_UPDATE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_UPDATE',
            guildScheduledEvent: e
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_DELETE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_DELETE',
            guildScheduledEvent: e
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE',
            eventException: e
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE',
            eventException: e
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE',
            eventException: e
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE',
            eventId: e.event_id
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_USER_ADD'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    V(['GUILD_SCHEDULED_EVENT_USER_REMOVE'], (e) => {
        j({
            type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    V(['GUILD_DIRECTORY_ENTRY_CREATE'], (e) => {
        j({
            type: 'GUILD_DIRECTORY_ENTRY_CREATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    V(['GUILD_DIRECTORY_ENTRY_UPDATE'], (e) => {
        j({
            type: 'GUILD_DIRECTORY_ENTRY_UPDATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    V(['GUILD_DIRECTORY_ENTRY_DELETE'], (e) => {
        j({
            type: 'GUILD_DIRECTORY_ENTRY_DELETE',
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        });
    }),
    V(['AUTO_MODERATION_MENTION_RAID_DETECTION'], (e) => {
        j({
            type: 'AUTO_MODERATION_MENTION_RAID_DETECTION',
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        });
    }),
    V(['VOICE_CHANNEL_EFFECT_SEND'], (e) => {
        j({
            type: 'VOICE_CHANNEL_EFFECT_SEND',
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
            points: e.points,
            streamerId: e.streamer_id,
            lineId: e.line_id,
            emojiHose: e.emoji_hose
        });
    }),
    V(['GUILD_SOUNDBOARD_SOUND_CREATE'], (e) => {
        j({
            type: 'GUILD_SOUNDBOARD_SOUND_CREATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new N.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    V(['GUILD_SOUNDBOARD_SOUND_UPDATE'], (e) => {
        j({
            type: 'GUILD_SOUNDBOARD_SOUND_UPDATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new N.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    V(['GUILD_SOUNDBOARD_SOUND_DELETE'], (e) => {
        j({
            type: 'GUILD_SOUNDBOARD_SOUND_DELETE',
            guildId: e.guild_id,
            soundId: e.sound_id
        });
    }),
    V(['GUILD_SOUNDBOARD_SOUNDS_UPDATE'], (e) => {
        j({
            type: 'GUILD_SOUNDBOARD_SOUNDS_UPDATE',
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map((t) => ({
                name: t.name,
                soundId: t.sound_id,
                emojiName: t.emoji_name,
                emojiId: t.emoji_id,
                userId: t.user_id,
                volume: t.volume,
                available: t.available,
                guildId: e.guild_id
            }))
        });
    }),
    H(
        ['EMBEDDED_ACTIVITY_UPDATE_V2'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'EMBEDDED_ACTIVITY_UPDATE_V2',
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants
            });
        }
    ),
    V(['AUTH_SESSION_CHANGE'], (e) => {
        j({
            type: 'AUTH_SESSION_CHANGE',
            authSessionIdHash: e.auth_session_id_hash
        });
    }),
    V(['USER_CONNECTIONS_LINK_CALLBACK'], (e) => {
        j({
            type: 'USER_CONNECTIONS_LINK_CALLBACK',
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        });
    }),
    V(['USER_CONNECTIONS_CALLBACK'], (e) => {
        j({
            type: 'USER_CONNECTIONS_CALLBACK',
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params
        });
    }),
    V(['DELETED_ENTITY_IDS'], (e) => {
        j({
            type: 'DELETED_ENTITY_IDS',
            ...e
        });
    }),
    V(['CONSOLE_COMMAND_UPDATE'], (e) => {
        j({
            type: 'CONSOLE_COMMAND_UPDATE',
            id: e.id,
            result: e.result,
            error: e.error
        });
    }),
    H(
        ['PASSIVE_UPDATE_V2'],
        (e) => O.o.loadGuildIds([e.guild_id]),
        (e) => {
            j({
                type: 'PASSIVE_UPDATE_V2',
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp
                })),
                voiceStates: e.updated_voice_states.map((e) => {
                    var t, n;
                    return {
                        channelId: e.channel_id,
                        deaf: e.deaf || !1,
                        mute: e.mute || !1,
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        selfDeaf: e.self_deaf || !1,
                        selfMute: e.self_mute || !1,
                        selfStream: e.self_stream || !1,
                        selfVideo: e.self_video || !1,
                        sessionId: e.session_id,
                        suppress: e.suppress,
                        userId: e.user_id,
                        discoverable: null === (n = e.discoverable) || void 0 === n || n
                    };
                }),
                removedVoiceStateUsers: e.removed_voice_states
            });
        }
    ),
    V(['PRIVATE_CHANNEL_INTEGRATION_CREATE'], (e) => {
        j({
            type: 'PRIVATE_CHANNEL_INTEGRATION_CREATE',
            integration: e
        });
    }),
    V(['PRIVATE_CHANNEL_INTEGRATION_UPDATE'], (e) => {
        j({
            type: 'PRIVATE_CHANNEL_INTEGRATION_UPDATE',
            integration: e
        });
    }),
    V(['PRIVATE_CHANNEL_INTEGRATION_DELETE'], (e) => {
        j({
            type: 'PRIVATE_CHANNEL_INTEGRATION_DELETE',
            channelId: e.channel_id,
            applicationId: e.application_id
        });
    }),
    V(['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'], (e) => {
        j({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
            guildId: e.guild_id,
            restrictions: e.restrictions
        });
    }),
    V(['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'], (e) => {
        j({
            type: 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE',
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        });
    }),
    V(['LAST_MESSAGES'], (e) => {
        j({
            type: 'MESSAGE_PREVIEWS_LOADED',
            guildId: e.guild_id,
            messages: e.messages
        });
    }),
    V(['AUTHENTICATOR_UPDATE'], (e) => {
        j({
            type: 'AUTHENTICATOR_UPDATE',
            credential: e
        });
    }),
    V(['AUTHENTICATOR_CREATE'], (e) => {
        j({
            type: 'AUTHENTICATOR_CREATE',
            credential: e
        });
    }),
    V(['AUTHENTICATOR_DELETE'], (e) => {
        j({
            type: 'AUTHENTICATOR_DELETE',
            credential: e
        });
    }),
    V(['NOTIFICATION_SETTINGS_UPDATE'], (e) => {
        j({
            type: 'NOTIFICATION_SETTINGS_UPDATE',
            settings: { flags: e.flags }
        });
    }),
    V(['GAME_INVITE_CREATE'], (e) => {
        j({
            type: 'GAME_INVITE_CREATE',
            gameInvite: e
        });
    }),
    V(['GAME_INVITE_DELETE'], (e) => {
        j({
            type: 'GAME_INVITE_DELETE',
            inviteId: e.invite_id
        });
    }),
    V(['GAME_INVITE_DELETE_MANY'], (e) => {
        j({
            type: 'GAME_INVITE_DELETE_MANY',
            inviteIds: e.invite_ids
        });
    }),
    V(['CONVERSATION_SUMMARY_UPDATE'], (e) => {
        j({
            type: 'CONVERSATION_SUMMARY_UPDATE',
            ...e
        });
    }),
    V(['PREMIUM_MARKETING_PREVIEW'], (e) => {
        j({
            type: 'PREMIUM_MARKETING_PREVIEW',
            properties: e.properties
        });
    }),
    V(['USER_APPLICATION_UPDATE'], (e) => {
        j({
            type: 'USER_APPLICATION_UPDATE',
            applicationId: e.application_id
        });
    }),
    V(['USER_APPLICATION_REMOVE'], (e) => {
        j({
            type: 'USER_APPLICATION_REMOVE',
            applicationId: e.application_id
        });
    }),
    V(['DM_SETTINGS_UPSELL_SHOW'], (e) => {
        j({
            type: 'DM_SETTINGS_UPSELL_SHOW',
            guildId: e.guild_id
        });
    }),
    V(['CONTENT_INVENTORY_INBOX_STALE'], (e) => {
        j({
            type: 'CONTENT_INVENTORY_INBOX_STALE',
            refreshAfterMs: e.refresh_after_ms
        });
    });
