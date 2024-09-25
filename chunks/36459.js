n.d(t, {
    $Y: function () {
        return v;
    },
    JK: function () {
        return g;
    },
    Je: function () {
        return S;
    },
    T9: function () {
        return R;
    },
    UE: function () {
        return O;
    },
    Xx: function () {
        return N;
    },
    mm: function () {
        return A;
    },
    qY: function () {
        return T;
    }
});
var r = n(47120);
var i = n(544891),
    a = n(570140),
    o = n(367907),
    s = n(430824),
    l = n(496675),
    u = n(823379),
    c = n(709054),
    d = n(177862),
    _ = n(787824),
    E = n(226192),
    f = n(981631);
function h(e) {
    return {
        type: e.type,
        metadata: (0, _.X)(e.metadata)
    };
}
function p(e) {
    var t, n;
    let r = (0, _.X)(e.triggerMetadata);
    return (
        null != r && delete r.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: r,
            actions: e.actions.filter(u.lm).map(h),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
            exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
        }
    );
}
function m(e) {
    return {
        type: e.type,
        metadata: (0, _.C)(e.metadata)
    };
}
function I(e) {
    var t, n, r;
    let i = {
        id: null !== (t = e.id) && void 0 !== t ? t : c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, _.C)(e.trigger_metadata),
        actions: e.actions.filter(u.lm).map(m),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
        exemptRoles: new Set(null !== (r = e.exempt_roles) && void 0 !== r ? r : [])
    };
    return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function T(e) {
    let t = p(e),
        n = await i.tn.post({
            url: f.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t
        });
    return (0, _.C)(n.body);
}
async function g(e) {
    let t = p(e);
    return (
        delete t.id,
        I(
            (
                await i.tn.post({
                    url: f.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t
                })
            ).body
        )
    );
}
async function S(e) {
    let t = p(e);
    return I(
        (
            await i.tn.patch({
                url: f.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t
            })
        ).body
    );
}
async function A(e, t) {
    return await i.tn.del({ url: f.ANM.GUILD_AUTOMOD_RULE(t, e) }), !0;
}
async function v(e) {
    let t = await i.tn.get({ url: f.ANM.GUILD_AUTOMOD_RULES(e) });
    return Array.isArray(t.body) ? t.body.map(I) : [];
}
async function N(e, t, n) {
    if (!!l.Z.can(f.Plq.MANAGE_MESSAGES, t))
        await i.tn.post({
            url: f.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            }
        });
}
function O(e, t, n) {
    let r = s.Z.getGuild(e);
    if (null == r || !l.Z.can(f.Plq.MANAGE_GUILD, r)) return;
    let a = () => {
        (0, o.yw)(f.rMx.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: t
        }),
            i.tn.post({ url: f.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
            n();
    };
    (0, E.UV)(a);
}
function R(e) {
    a.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
