n.d(t, {
    Af: function () {
        return g;
    },
    GO: function () {
        return m;
    },
    Gh: function () {
        return N;
    },
    Pq: function () {
        return I;
    },
    Q2: function () {
        return S;
    },
    Qh: function () {
        return E;
    },
    UE: function () {
        return i;
    },
    Vr: function () {
        return p;
    },
    _v: function () {
        return C;
    },
    aC: function () {
        return b;
    },
    bH: function () {
        return y;
    },
    hM: function () {
        return v;
    },
    hx: function () {
        return h;
    },
    jK: function () {
        return f;
    },
    r: function () {
        return A;
    },
    r2: function () {
        return T;
    },
    u0: function () {
        return _;
    }
}),
    n(704215);
var r,
    i,
    a = n(229893);
n(605236);
var s = n(314897),
    o = n(271383),
    l = n(626135),
    u = n(308083),
    c = n(981631),
    d = n(976757);
function f(e) {
    let { outcome: t } = null != e ? e : {};
    return {
        recommendation_id: a.Z.getCurrentRecommendationId(),
        recommendation_context: d.Br.GLOBAL_DISCOVERY_TOP_PICKS,
        recommendation_outcome: null != t ? t : d.qz.SHOWN
    };
}
function _(e) {
    let { guildId: t, hasJoinRequest: n, source: r, messageId: i, tagUserId: a, location: u } = e,
        d = s.default.getId(),
        f = o.ZP.getMember(t, s.default.getId()),
        _ = (null == f ? void 0 : f.joinedAt) != null;
    l.default.track(c.rMx.CLAN_PROFILE_VIEWED, {
        guild_id: t,
        is_member: _,
        has_join_request: n,
        source: r,
        location: u,
        viewing_user_id: d,
        tag_owner_user_id: a,
        message_id: i
    });
}
function p(e) {
    let { guildId: t, source: n, location: r, messageId: i, tagUserId: a } = e,
        o = s.default.getId();
    l.default.track(c.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        ...f(),
        guild_id: t,
        source: n,
        location: r,
        viewing_user_id: o,
        tag_owner_user_id: a,
        message_id: i
    });
}
function h(e) {
    let { guildId: t, userId: n, source: r } = e;
    l.default.track(c.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: r
    });
}
function m(e, t) {
    l.default.track(c.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function g(e) {
    l.default.track(c.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function E(e) {
    switch (e) {
        case u.Wy.GAMES:
            return 'games';
        case u.Wy.PLAYSTYLE:
            return 'playstyle';
        case u.Wy.UTILITY_TRAITS:
            return 'utility_traits';
        case u.Wy.INTERESTS:
            return 'interests';
        case u.Wy.DESCRIPTION:
            return 'description';
        case u.Wy.CUSTOMIZE_TAG_BADGE:
            return 'tag';
        case u.Wy.CUSTOMIZE_BANNER:
            return 'banner';
        case u.Wy.MEMBER_APPLICATION:
            return 'member_application';
        default:
            return e;
    }
}
function v(e, t) {
    l.default.track(c.rMx.RAPIDASH_PROFILE_CTA_CLICKED, {
        guild_id: e,
        action_type: t
    });
}
function I(e) {
    l.default.track(c.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function b(e) {
    var t;
    let { guildId: n, messageId: r, channelId: i, joinRequestStatus: a, joinRequestUserId: u } = e,
        d = s.default.getId(),
        f = (null === (t = o.ZP.getMember(n, d)) || void 0 === t ? void 0 : t.joinedAt) != null;
    l.default.track(c.rMx.CLAN_SEND_INTERVIEW_MESSAGE, {
        guild_id: n,
        channel_id: i,
        message_id: r,
        message_user_id: d,
        is_member: f,
        join_request_status: a,
        join_request_user_id: u
    });
}
function S(e) {
    let { guildId: t, source: n, tab: r } = e;
    l.default.track(c.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: r
    });
}
function T(e) {
    let { guildId: t, actionType: n, applicationUserId: r } = e;
    l.default.track(c.rMx.CLAN_APPLICATION_ACTION, {
        guild_id: t,
        action_type: n,
        application_user_id: r,
        viewing_user_id: s.default.getId()
    });
}
function y(e) {
    let { guildId: t, applicationUserId: n, applicationStatus: r } = e;
    l.default.track(c.rMx.CLAN_APPLICATION_VIEWED, {
        guild_id: t,
        viewing_user_id: s.default.getId(),
        application_user_id: n,
        application_status: r
    });
}
function A(e) {
    let { guildId: t, position: n } = e;
    l.default.track(c.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        ...f({ outcome: d.qz.HIT }),
        guild_id: t,
        position: n
    });
}
function N(e) {
    let { feature: t, guildId: n, position: r } = e;
    l.default.track(c.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        ...f(),
        guild_id: n,
        feature: t,
        position: r
    });
}
function C(e) {
    let { guildId: t, position: n } = e;
    l.default.track(c.rMx.GUILD_APPLICATION_ABANDONED, {
        ...f({ outcome: d.qz.HIT }),
        guild_id: t,
        position: n
    });
}
n(921944), ((r = i || (i = {})).TAG_ADOPTION = 'to-tag-adoption'), (r.APPLY_FLOW = 'to-apply-flow'), (r.APPLICATION = 'to-application'), (r.GUILD = 'to-guild'), (r.DISCOVERY = 'to-discovery'), (r.ASK_TO_JOIN = 'ask-to-join');
