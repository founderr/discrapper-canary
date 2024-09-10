t.d(e, {
    $Y: function () {
        return U;
    },
    JK: function () {
        return T;
    },
    Je: function () {
        return L;
    },
    T9: function () {
        return p;
    },
    UE: function () {
        return S;
    },
    Xx: function () {
        return D;
    },
    mm: function () {
        return N;
    },
    qY: function () {
        return I;
    }
}),
    t(47120);
var r = t(544891),
    u = t(570140),
    i = t(367907),
    a = t(430824),
    o = t(496675),
    l = t(823379),
    c = t(709054),
    d = t(177862),
    _ = t(787824),
    s = t(226192),
    E = t(981631);
function M(n) {
    return {
        type: n.type,
        metadata: (0, _.X)(n.metadata)
    };
}
function f(n) {
    var e, t;
    let r = (0, _.X)(n.triggerMetadata);
    return (
        null != r && delete r.keywordLists,
        {
            id: n.id,
            name: n.name,
            guild_id: n.guildId,
            event_type: n.eventType,
            trigger_type: n.triggerType,
            trigger_metadata: r,
            actions: n.actions.filter(l.lm).map(M),
            enabled: n.enabled,
            creator_id: n.creatorId,
            position: n.position,
            exempt_channels: Array.from(null !== (e = n.exemptChannels) && void 0 !== e ? e : []),
            exempt_roles: Array.from(null !== (t = n.exemptRoles) && void 0 !== t ? t : [])
        }
    );
}
function A(n) {
    return {
        type: n.type,
        metadata: (0, _.C)(n.metadata)
    };
}
function O(n) {
    var e, t, r;
    let u = {
        id: null !== (e = n.id) && void 0 !== e ? e : c.default.fromTimestamp(Date.now()),
        name: n.name,
        guildId: n.guild_id,
        eventType: n.event_type,
        triggerType: n.trigger_type,
        triggerMetadata: (0, _.C)(n.trigger_metadata),
        actions: n.actions.filter(l.lm).map(A),
        enabled: n.enabled,
        creatorId: n.creator_id,
        position: n.position,
        exemptChannels: new Set(null !== (t = n.exempt_channels) && void 0 !== t ? t : []),
        exemptRoles: new Set(null !== (r = n.exempt_roles) && void 0 !== r ? r : [])
    };
    return null != u.triggerMetadata && delete u.triggerMetadata.keywordLists, u;
}
async function I(n) {
    let e = f(n),
        t = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(n.guildId),
            body: e
        });
    return (0, _.C)(t.body);
}
async function T(n) {
    let e = f(n);
    return (
        delete e.id,
        O(
            (
                await r.tn.post({
                    url: E.ANM.GUILD_AUTOMOD_RULES(n.guildId),
                    body: e
                })
            ).body
        )
    );
}
async function L(n) {
    let e = f(n);
    return O(
        (
            await r.tn.patch({
                url: E.ANM.GUILD_AUTOMOD_RULE(n.guildId, n.id),
                body: e
            })
        ).body
    );
}
async function N(n, e) {
    return await r.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(e, n) }), !0;
}
async function U(n) {
    let e = await r.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(n) });
    return Array.isArray(e.body) ? e.body.map(O) : [];
}
async function D(n, e, t) {
    if (!!o.Z.can(E.Plq.MANAGE_MESSAGES, e))
        await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
            body: {
                message_id: n,
                channel_id: e.id,
                alert_action_type: t
            }
        });
}
function S(n, e, t) {
    let u = a.Z.getGuild(n);
    if (null != u && !!o.Z.can(E.Plq.MANAGE_GUILD, u))
        (0, s.UV)(() => {
            (0, i.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: e
            }),
                r.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(n) }),
                t();
        });
}
function p(n) {
    u.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: n
    });
}
