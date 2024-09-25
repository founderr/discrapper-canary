n.d(t, {
    Dr: function () {
        return h;
    },
    YO: function () {
        return _;
    },
    _X: function () {
        return p;
    },
    _o: function () {
        return E;
    },
    nb: function () {
        return m;
    },
    zO: function () {
        return d;
    }
});
var r = n(570140),
    i = n(434404),
    a = n(703656),
    o = n(430824),
    s = n(241559),
    l = n(327999),
    u = n(981631),
    c = n(176505);
async function d(e) {
    await r.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: e
    });
}
function _(e) {
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: e
    });
}
function E(e, t) {
    let { continuationToken: n, ...i } = t;
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: i
    });
}
function f(e, t) {
    Dispatcher.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE',
        guildId: e,
        continuationToken: t
    });
}
async function h(e, t) {
    await r.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function p(e) {
    let t = (0, s.lv)(e),
        n = o.Z.getGuild(e);
    return !!t && null != n && (n.hasFeature(u.oNc.COMMUNITY) || n.hasFeature(u.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, a.uL)(u.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0) : (i.Z.open(n.id, u.pNK.MEMBERS), !0));
}
async function m(e, t) {
    let n = await (0, l._2)(e, t);
    return 0 === n.length
        ? []
        : (await r.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
