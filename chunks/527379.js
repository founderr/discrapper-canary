n.d(t, {
    Dr: function () {
        return _;
    },
    YO: function () {
        return f;
    },
    _X: function () {
        return E;
    },
    _o: function () {
        return p;
    },
    nb: function () {
        return g;
    },
    zO: function () {
        return d;
    }
});
var i = n(570140),
    r = n(434404),
    l = n(703656),
    o = n(430824),
    u = n(241559),
    a = n(327999),
    s = n(981631),
    c = n(176505);
async function d(e) {
    await i.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: e
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: e
    });
}
function p(e, t) {
    let { continuationToken: n, ...r } = t;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: r
    });
}
async function _(e, t) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function E(e) {
    let t = (0, u.lv)(e),
        n = o.Z.getGuild(e);
    return !!t && null != n && (n.hasFeature(s.oNc.COMMUNITY) || n.hasFeature(s.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, l.uL)(s.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0) : (r.Z.open(n.id, s.pNK.MEMBERS), !0));
}
async function g(e, t) {
    let n = await (0, a._2)(e, t);
    return 0 === n.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
