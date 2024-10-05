n.d(t, {
    $Y: function () {
        return g;
    },
    JK: function () {
        return p;
    },
    Je: function () {
        return N;
    },
    T9: function () {
        return h;
    },
    UE: function () {
        return R;
    },
    Xx: function () {
        return m;
    },
    mm: function () {
        return O;
    },
    qY: function () {
        return C;
    }
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    o = n(367907),
    u = n(430824),
    l = n(496675),
    s = n(823379),
    a = n(709054),
    c = n(177862),
    d = n(787824),
    _ = n(226192),
    E = n(981631);
function f(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
    };
}
function I(e) {
    var t, n;
    let r = (0, d.X)(e.triggerMetadata);
    return (
        null != r && delete r.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: r,
            actions: e.actions.filter(s.lm).map(f),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
            exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
        }
    );
}
function S(e) {
    return {
        type: e.type,
        metadata: (0, d.C)(e.metadata)
    };
}
function T(e) {
    var t, n, r;
    let i = {
        id: null !== (t = e.id) && void 0 !== t ? t : a.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(s.lm).map(S),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
        exemptRoles: new Set(null !== (r = e.exempt_roles) && void 0 !== r ? r : [])
    };
    return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function C(e) {
    let t = I(e),
        n = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t
        });
    return (0, d.C)(n.body);
}
async function p(e) {
    let t = I(e);
    return (
        delete t.id,
        T(
            (
                await r.tn.post({
                    url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t
                })
            ).body
        )
    );
}
async function N(e) {
    let t = I(e);
    return T(
        (
            await r.tn.patch({
                url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t
            })
        ).body
    );
}
async function O(e, t) {
    return await r.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(t, e) }), !0;
}
async function g(e) {
    let t = await r.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(e) });
    return Array.isArray(t.body) ? t.body.map(T) : [];
}
async function m(e, t, n) {
    if (!!l.Z.can(E.Plq.MANAGE_MESSAGES, t))
        await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            }
        });
}
function R(e, t, n) {
    let i = u.Z.getGuild(e);
    if (null != i && !!l.Z.can(E.Plq.MANAGE_GUILD, i))
        (0, _.UV)(() => {
            (0, o.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                r.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
                n();
        });
}
function h(e) {
    i.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
