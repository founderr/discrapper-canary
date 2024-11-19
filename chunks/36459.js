e.d(t, {
    $Y: function () {
        return g;
    },
    JK: function () {
        return N;
    },
    Je: function () {
        return T;
    },
    T9: function () {
        return U;
    },
    UE: function () {
        return S;
    },
    Xx: function () {
        return p;
    },
    mm: function () {
        return L;
    },
    qY: function () {
        return O;
    }
}),
    e(47120);
var r = e(544891),
    i = e(570140),
    u = e(367907),
    a = e(430824),
    l = e(496675),
    o = e(823379),
    c = e(709054),
    d = e(177862),
    s = e(787824),
    _ = e(226192),
    E = e(981631);
function f(n) {
    return {
        type: n.type,
        metadata: (0, s.X)(n.metadata)
    };
}
function M(n) {
    var t, e;
    let r = (0, s.X)(n.triggerMetadata);
    return (
        null != r && delete r.keywordLists,
        {
            id: n.id,
            name: n.name,
            guild_id: n.guildId,
            event_type: n.eventType,
            trigger_type: n.triggerType,
            trigger_metadata: r,
            actions: n.actions.filter(o.lm).map(f),
            enabled: n.enabled,
            creator_id: n.creatorId,
            position: n.position,
            exempt_channels: Array.from(null !== (t = n.exemptChannels) && void 0 !== t ? t : []),
            exempt_roles: Array.from(null !== (e = n.exemptRoles) && void 0 !== e ? e : [])
        }
    );
}
function A(n) {
    return {
        type: n.type,
        metadata: (0, s.C)(n.metadata)
    };
}
function I(n) {
    var t, e, r;
    let i = {
        id: null !== (t = n.id) && void 0 !== t ? t : c.default.fromTimestamp(Date.now()),
        name: n.name,
        guildId: n.guild_id,
        eventType: n.event_type,
        triggerType: n.trigger_type,
        triggerMetadata: (0, s.C)(n.trigger_metadata),
        actions: n.actions.filter(o.lm).map(A),
        enabled: n.enabled,
        creatorId: n.creator_id,
        position: n.position,
        exemptChannels: new Set(null !== (e = n.exempt_channels) && void 0 !== e ? e : []),
        exemptRoles: new Set(null !== (r = n.exempt_roles) && void 0 !== r ? r : [])
    };
    return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function O(n) {
    let t = M(n),
        e = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(n.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, s.C)(e.body);
}
async function N(n) {
    let t = M(n);
    return (
        delete t.id,
        I(
            (
                await r.tn.post({
                    url: E.ANM.GUILD_AUTOMOD_RULES(n.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function T(n) {
    let t = M(n);
    return I(
        (
            await r.tn.patch({
                url: E.ANM.GUILD_AUTOMOD_RULE(n.guildId, n.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function L(n, t) {
    return (
        await r.tn.del({
            url: E.ANM.GUILD_AUTOMOD_RULE(t, n),
            rejectWithError: !1
        }),
        !0
    );
}
async function g(n) {
    let t = await r.tn.get({
        url: E.ANM.GUILD_AUTOMOD_RULES(n),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(I) : [];
}
async function p(n, t, e) {
    if (!!l.Z.can(E.Plq.MANAGE_MESSAGES, t))
        await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: n,
                channel_id: t.id,
                alert_action_type: e
            },
            rejectWithError: !1
        });
}
function S(n, t, e) {
    let i = a.Z.getGuild(n);
    if (null != i && !!l.Z.can(E.Plq.MANAGE_GUILD, i))
        (0, _.UV)(() => {
            (0, u.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                r.tn.post({
                    url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(n),
                    rejectWithError: !0
                }),
                e();
        });
}
function U(n) {
    i.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: n
    });
}
