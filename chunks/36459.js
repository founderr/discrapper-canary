n.d(t, {
    $Y: function () {
        return T;
    },
    JK: function () {
        return I;
    },
    Je: function () {
        return S;
    },
    T9: function () {
        return A;
    },
    UE: function () {
        return N;
    },
    Xx: function () {
        return v;
    },
    mm: function () {
        return C;
    },
    qY: function () {
        return h;
    }
}),
    n(47120);
var i = n(544891),
    r = n(570140),
    l = n(367907),
    o = n(430824),
    u = n(496675),
    a = n(823379),
    s = n(709054),
    c = n(177862),
    d = n(787824),
    f = n(226192),
    _ = n(981631);
function E(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
    };
}
function p(e) {
    var t, n;
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
            actions: e.actions.filter(a.lm).map(E),
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
        metadata: (0, d.C)(e.metadata)
    };
}
function g(e) {
    var t, n, i;
    let r = {
        id: null !== (t = e.id) && void 0 !== t ? t : s.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(a.lm).map(m),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
        exemptRoles: new Set(null !== (i = e.exempt_roles) && void 0 !== i ? i : [])
    };
    return null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r;
}
async function h(e) {
    let t = p(e),
        n = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, d.C)(n.body);
}
async function I(e) {
    let t = p(e);
    return (
        delete t.id,
        g(
            (
                await i.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function S(e) {
    let t = p(e);
    return g(
        (
            await i.tn.patch({
                url: _.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function C(e, t) {
    return (
        await i.tn.del({
            url: _.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function T(e) {
    let t = await i.tn.get({
        url: _.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(g) : [];
}
async function v(e, t, n) {
    if (!!u.Z.can(_.Plq.MANAGE_MESSAGES, t))
        await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        });
}
function N(e, t, n) {
    let r = o.Z.getGuild(e);
    if (null != r && !!u.Z.can(_.Plq.MANAGE_GUILD, r))
        (0, f.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                i.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n();
        });
}
function A(e) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
