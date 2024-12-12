r.d(n, {
    Af: function () {
        return h;
    },
    GO: function () {
        return _;
    },
    Gh: function () {
        return y;
    },
    Pq: function () {
        return g;
    },
    Q2: function () {
        return v;
    },
    Qh: function () {
        return p;
    },
    UE: function () {
        return i;
    },
    Vr: function () {
        return d;
    },
    _v: function () {
        return S;
    },
    aC: function () {
        return E;
    },
    bH: function () {
        return T;
    },
    hM: function () {
        return m;
    },
    hx: function () {
        return f;
    },
    r: function () {
        return b;
    },
    r2: function () {
        return I;
    },
    u0: function () {
        return c;
    }
}),
    r(704215),
    r(605236);
var i,
    a = r(314897),
    s = r(271383),
    o = r(626135),
    l = r(308083),
    u = r(981631);
function c(e) {
    let { guildId: n, hasJoinRequest: r, source: i, messageId: l, tagUserId: c, location: d } = e,
        f = a.default.getId(),
        _ = s.ZP.getMember(n, a.default.getId()),
        h = (null == _ ? void 0 : _.joinedAt) != null;
    o.default.track(u.rMx.CLAN_PROFILE_VIEWED, {
        guild_id: n,
        is_member: h,
        has_join_request: r,
        source: i,
        location: d,
        viewing_user_id: f,
        tag_owner_user_id: c,
        message_id: l
    });
}
function d(e) {
    let { guildId: n, source: r, location: i, messageId: s, tagUserId: l } = e,
        c = a.default.getId();
    o.default.track(u.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        guild_id: n,
        source: r,
        location: i,
        viewing_user_id: c,
        tag_owner_user_id: l,
        message_id: s
    });
}
function f(e) {
    let { guildId: n, userId: r, source: i } = e;
    o.default.track(u.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: n,
        user_id: r,
        source: i
    });
}
r(921944),
    !(function (e) {
        (e.TAG_ADOPTION = 'to-tag-adoption'), (e.APPLY_FLOW = 'to-apply-flow'), (e.APPLICATION = 'to-application'), (e.GUILD = 'to-guild'), (e.DISCOVERY = 'to-discovery'), (e.ASK_TO_JOIN = 'ask-to-join');
    })(i || (i = {}));
function _(e, n) {
    o.default.track(u.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: n
    });
}
function h(e) {
    o.default.track(u.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function p(e) {
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
function m(e, n) {
    o.default.track(u.rMx.RAPIDASH_PROFILE_CTA_CLICKED, {
        guild_id: e,
        action_type: n
    });
}
function g(e) {
    o.default.track(u.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function E(e) {
    var n;
    let { guildId: r, messageId: i, channelId: l, joinRequestStatus: c, joinRequestUserId: d } = e,
        f = a.default.getId(),
        _ = (null === (n = s.ZP.getMember(r, f)) || void 0 === n ? void 0 : n.joinedAt) != null;
    o.default.track(u.rMx.CLAN_SEND_INTERVIEW_MESSAGE, {
        guild_id: r,
        channel_id: l,
        message_id: i,
        message_user_id: f,
        is_member: _,
        join_request_status: c,
        join_request_user_id: d
    });
}
function v(e) {
    let { guildId: n, source: r, tab: i } = e;
    o.default.track(u.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: n,
        source: r,
        tab: i
    });
}
function I(e) {
    let { guildId: n, actionType: r, applicationUserId: i } = e;
    o.default.track(u.rMx.CLAN_APPLICATION_ACTION, {
        guild_id: n,
        action_type: r,
        application_user_id: i,
        viewing_user_id: a.default.getId()
    });
}
function T(e) {
    let { guildId: n, applicationUserId: r, applicationStatus: i } = e;
    o.default.track(u.rMx.CLAN_APPLICATION_VIEWED, {
        guild_id: n,
        viewing_user_id: a.default.getId(),
        application_user_id: r,
        application_status: i
    });
}
function b(e) {
    let { guildId: n, position: r } = e;
    o.default.track(u.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        guild_id: n,
        position: r
    });
}
function y(e) {
    let { feature: n, guildId: r, position: i } = e;
    o.default.track(u.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        guild_id: r,
        feature: n,
        position: i
    });
}
function S(e) {
    let { guildId: n, position: r } = e;
    o.default.track(u.rMx.GUILD_APPLICATION_ABANDONED, {
        guild_id: n,
        position: r
    });
}
