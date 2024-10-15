t.d(n, {
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
        return O;
    },
    UE: function () {
        return L;
    },
    Xx: function () {
        return m;
    },
    mm: function () {
        return A;
    },
    qY: function () {
        return C;
    }
}),
    t(47120);
var i = t(544891),
    r = t(570140),
    l = t(367907),
    o = t(430824),
    u = t(496675),
    s = t(823379),
    a = t(709054),
    c = t(177862),
    d = t(787824),
    _ = t(226192),
    E = t(981631);
function f(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
    };
}
function I(e) {
    var n, t;
    let i = (0, d.X)(e.triggerMetadata);
    return (
        null != i && delete i.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: i,
            actions: e.actions.filter(s.lm).map(f),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null !== (n = e.exemptChannels) && void 0 !== n ? n : []),
            exempt_roles: Array.from(null !== (t = e.exemptRoles) && void 0 !== t ? t : [])
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
    var n, t, i;
    let r = {
        id: null !== (n = e.id) && void 0 !== n ? n : a.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(s.lm).map(S),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null !== (t = e.exempt_channels) && void 0 !== t ? t : []),
        exemptRoles: new Set(null !== (i = e.exempt_roles) && void 0 !== i ? i : [])
    };
    return null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r;
}
async function C(e) {
    let n = I(e),
        t = await i.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: n
        });
    return (0, d.C)(t.body);
}
async function p(e) {
    let n = I(e);
    return (
        delete n.id,
        T(
            (
                await i.tn.post({
                    url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: n
                })
            ).body
        )
    );
}
async function N(e) {
    let n = I(e);
    return T(
        (
            await i.tn.patch({
                url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: n
            })
        ).body
    );
}
async function A(e, n) {
    return await i.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(n, e) }), !0;
}
async function g(e) {
    let n = await i.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(e) });
    return Array.isArray(n.body) ? n.body.map(T) : [];
}
async function m(e, n, t) {
    if (!!u.Z.can(E.Plq.MANAGE_MESSAGES, n))
        await i.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: {
                message_id: e,
                channel_id: n.id,
                alert_action_type: t
            }
        });
}
function L(e, n, t) {
    let r = o.Z.getGuild(e);
    if (null != r && !!u.Z.can(E.Plq.MANAGE_GUILD, r))
        (0, _.UV)(() => {
            (0, l.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: n
            }),
                i.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
                t();
        });
}
function O(e) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
