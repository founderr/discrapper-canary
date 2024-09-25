n.d(t, {
    C3: function () {
        return g;
    },
    Fg: function () {
        return T;
    },
    Oh: function () {
        return A;
    },
    cP: function () {
        return I;
    },
    gp: function () {
        return S;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(544891),
    o = n(570140),
    s = n(904245),
    l = n(593472),
    u = n(160404),
    c = n(359110),
    d = n(592125),
    _ = n(626135),
    E = n(709054),
    f = n(563534),
    h = n(734893),
    p = n(846121),
    m = n(981631);
let I = async (e) => {
        o.Z.dispatch({
            type: 'GUILD_HOME_SETTINGS_FETCH_START',
            guildId: e
        });
        try {
            let t = await a.tn.get({
                    url: m.ANM.GUILD_HOME_SETTINGS(e),
                    oldFormErrors: !0
                }),
                n = (0, h.tB)(t.body);
            return (
                o.Z.dispatch({
                    type: 'GUILD_HOME_SETTINGS_FETCH_SUCCESS',
                    guildId: e,
                    homeSettings: n
                }),
                n
            );
        } catch (t) {
            o.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_FETCH_FAIL',
                guildId: e
            });
        }
    },
    T = async (e) => {
        if (!u.Z.isFullServerPreview(e)) {
            o.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START',
                guildId: e
            });
            try {
                let t = await a.tn.get({
                        url: m.ANM.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0
                    }),
                    n = (0, h.rk)(t.body);
                return (
                    o.Z.dispatch({
                        type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS',
                        guildId: e,
                        memberActions: n
                    }),
                    n
                );
            } catch (t) {
                o.Z.dispatch({
                    type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL',
                    guildId: e
                });
            }
        }
    },
    g = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (
            (o.Z.dispatch({
                type: 'SELECT_HOME_RESOURCE_CHANNEL',
                guildId: e,
                channelId: t
            }),
            null == t)
        )
            return;
        let r = d.Z.getChannel(t),
            i = f.Z.getResourceForChannel(e, t);
        null != e &&
            !u.Z.isFullServerPreview(e) &&
            null != r &&
            null != i &&
            _.default.track(m.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: r.id,
                server_guide_channel_type: 'resource',
                channel_action_type: -1
            }),
            n && (0, c.Kh)(t);
        s.Z.jumpToMessage({
            channelId: t,
            messageId: E.default.castChannelIdAsMessageId(t),
            flash: !1,
            jumpType: l.SR.INSTANT
        });
    },
    S = (e, t) => {
        o.Z.dispatch({
            type: 'SELECT_NEW_MEMBER_ACTION_CHANNEL',
            guildId: e,
            channelId: t
        });
        let n = d.Z.getChannel(t),
            r = f.Z.getActionForChannel(e, t);
        null != e &&
            !u.Z.isFullServerPreview(e) &&
            null != n &&
            null != r &&
            _.default.track(m.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: 'member action',
                channel_action_type: r.actionType
            }),
            (0, c.Kh)(t);
    },
    A = (e, t) => {
        if (
            (o.Z.dispatch({
                type: 'COMPLETE_NEW_MEMBER_ACTION',
                guildId: e,
                channelId: t
            }),
            u.Z.isFullServerPreview(e))
        )
            return;
        let n = d.Z.getChannel(t),
            r = f.Z.getActionForChannel(e, t);
        if (null != n && null != r) {
            var i, s;
            let t = E.default.keys(null !== (i = p.Z.getCompletedActions(e)) && void 0 !== i ? i : {}),
                a = null !== (s = f.Z.getNewMemberActions(e)) && void 0 !== s ? s : [];
            _.default.track(m.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_action_type: r.actionType,
                has_completed_all: a.reduce((e, n) => e && t.includes(n.channelId), !0)
            });
        }
        a.tn.post({ url: m.ANM.GUILD_MEMBER_ACTION_UPDATE(e, t) });
    };
