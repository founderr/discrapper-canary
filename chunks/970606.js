n.d(t, {
    Af: function () {
        return p;
    },
    GO: function () {
        return _;
    },
    Gh: function () {
        return S;
    },
    Pq: function () {
        return g;
    },
    Q2: function () {
        return v;
    },
    Qh: function () {
        return h;
    },
    UE: function () {
        return i;
    },
    Vr: function () {
        return d;
    },
    _v: function () {
        return y;
    },
    aC: function () {
        return E;
    },
    bH: function () {
        return I;
    },
    hM: function () {
        return m;
    },
    hx: function () {
        return f;
    },
    r: function () {
        return T;
    },
    r2: function () {
        return b;
    },
    u0: function () {
        return c;
    }
}),
    n(704215),
    n(605236);
var r,
    i,
    a = n(314897),
    s = n(271383),
    o = n(626135),
    l = n(308083),
    u = n(981631);
function c(e) {
    let { guildId: t, hasJoinRequest: n, source: r, messageId: i, tagUserId: l, location: c } = e,
        d = a.default.getId(),
        f = s.ZP.getMember(t, a.default.getId()),
        _ = (null == f ? void 0 : f.joinedAt) != null;
    o.default.track(u.rMx.CLAN_PROFILE_VIEWED, {
        guild_id: t,
        is_member: _,
        has_join_request: n,
        source: r,
        location: c,
        viewing_user_id: d,
        tag_owner_user_id: l,
        message_id: i
    });
}
function d(e) {
    let { guildId: t, source: n, location: r, messageId: i, tagUserId: s } = e,
        l = a.default.getId();
    o.default.track(u.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        guild_id: t,
        source: n,
        location: r,
        viewing_user_id: l,
        tag_owner_user_id: s,
        message_id: i
    });
}
function f(e) {
    let { guildId: t, userId: n, source: r } = e;
    o.default.track(u.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: r
    });
}
function _(e, t) {
    o.default.track(u.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function p(e) {
    o.default.track(u.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function h(e) {
    switch (e) {
        case l.Wy.GAMES:
            return 'games';
        case l.Wy.PLAYSTYLE:
            return 'playstyle';
        case l.Wy.UTILITY_TRAITS:
            return 'utility_traits';
        case l.Wy.INTERESTS:
            return 'interests';
        case l.Wy.DESCRIPTION:
            return 'description';
        case l.Wy.CUSTOMIZE_TAG_BADGE:
            return 'tag';
        case l.Wy.CUSTOMIZE_BANNER:
            return 'banner';
        case l.Wy.MEMBER_APPLICATION:
            return 'member_application';
        default:
            return e;
    }
}
function m(e, t) {
    o.default.track(u.rMx.RAPIDASH_PROFILE_CTA_CLICKED, {
        guild_id: e,
        action_type: t
    });
}
function g(e) {
    o.default.track(u.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function E(e) {
    var t;
    let { guildId: n, messageId: r, channelId: i, joinRequestStatus: l, joinRequestUserId: c } = e,
        d = a.default.getId(),
        f = (null === (t = s.ZP.getMember(n, d)) || void 0 === t ? void 0 : t.joinedAt) != null;
    o.default.track(u.rMx.CLAN_SEND_INTERVIEW_MESSAGE, {
        guild_id: n,
        channel_id: i,
        message_id: r,
        message_user_id: d,
        is_member: f,
        join_request_status: l,
        join_request_user_id: c
    });
}
function v(e) {
    let { guildId: t, source: n, tab: r } = e;
    o.default.track(u.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: r
    });
}
function b(e) {
    let { guildId: t, actionType: n, applicationUserId: r } = e;
    o.default.track(u.rMx.CLAN_APPLICATION_ACTION, {
        guild_id: t,
        action_type: n,
        application_user_id: r,
        viewing_user_id: a.default.getId()
    });
}
function I(e) {
    let { guildId: t, applicationUserId: n, applicationStatus: r } = e;
    o.default.track(u.rMx.CLAN_APPLICATION_VIEWED, {
        guild_id: t,
        viewing_user_id: a.default.getId(),
        application_user_id: n,
        application_status: r
    });
}
function T(e) {
    let { guildId: t, position: n } = e;
    o.default.track(u.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        guild_id: t,
        position: n
    });
}
function S(e) {
    let { feature: t, guildId: n, position: r } = e;
    o.default.track(u.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        guild_id: n,
        feature: t,
        position: r
    });
}
function y(e) {
    let { guildId: t, position: n } = e;
    o.default.track(u.rMx.GUILD_APPLICATION_ABANDONED, {
        guild_id: t,
        position: n
    });
}
n(921944), ((r = i || (i = {})).TAG_ADOPTION = 'to-tag-adoption'), (r.APPLY_FLOW = 'to-apply-flow'), (r.APPLICATION = 'to-application'), (r.GUILD = 'to-guild'), (r.DISCOVERY = 'to-discovery'), (r.ASK_TO_JOIN = 'ask-to-join');
