t.d(n, {
    $Y: function () {
        return C;
    },
    JK: function () {
        return I;
    },
    Je: function () {
        return S;
    },
    T9: function () {
        return b;
    },
    UE: function () {
        return N;
    },
    Xx: function () {
        return T;
    },
    mm: function () {
        return v;
    },
    qY: function () {
        return h;
    }
}),
    t(47120);
var i = t(544891),
    r = t(570140),
    l = t(367907),
    o = t(430824),
    u = t(496675),
    a = t(823379),
    s = t(709054),
    c = t(177862),
    d = t(787824),
    f = t(226192),
    p = t(981631);
function _(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
    };
}
function E(e) {
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
            actions: e.actions.filter(a.lm).map(_),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null !== (n = e.exemptChannels) && void 0 !== n ? n : []),
            exempt_roles: Array.from(null !== (t = e.exemptRoles) && void 0 !== t ? t : [])
        }
    );
}
function g(e) {
    return {
        type: e.type,
        metadata: (0, d.C)(e.metadata)
    };
}
function m(e) {
    var n, t, i;
    let r = {
        id: null !== (n = e.id) && void 0 !== n ? n : s.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(a.lm).map(g),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null !== (t = e.exempt_channels) && void 0 !== t ? t : []),
        exemptRoles: new Set(null !== (i = e.exempt_roles) && void 0 !== i ? i : [])
    };
    return null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r;
}
async function h(e) {
    let n = E(e),
        t = await i.tn.post({
            url: p.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: n
        });
    return (0, d.C)(t.body);
}
async function I(e) {
    let n = E(e);
    return (
        delete n.id,
        m(
            (
                await i.tn.post({
                    url: p.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: n
                })
            ).body
        )
    );
}
async function S(e) {
    let n = E(e);
    return m(
        (
            await i.tn.patch({
                url: p.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: n
            })
        ).body
    );
}
async function v(e, n) {
    return await i.tn.del({ url: p.ANM.GUILD_AUTOMOD_RULE(n, e) }), !0;
}
async function C(e) {
    let n = await i.tn.get({ url: p.ANM.GUILD_AUTOMOD_RULES(e) });
    return Array.isArray(n.body) ? n.body.map(m) : [];
}
async function T(e, n, t) {
    if (!!u.Z.can(p.Plq.MANAGE_MESSAGES, n))
        await i.tn.post({
            url: p.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: {
                message_id: e,
                channel_id: n.id,
                alert_action_type: t
            }
        });
}
function N(e, n, t) {
    let r = o.Z.getGuild(e);
    if (null != r && !!u.Z.can(p.Plq.MANAGE_GUILD, r))
        (0, f.UV)(() => {
            (0, l.yw)(p.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: n
            }),
                i.tn.post({ url: p.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
                t();
        });
}
function b(e) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
