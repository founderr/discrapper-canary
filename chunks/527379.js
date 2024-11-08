t.d(n, {
    Dr: function () {
        return _;
    },
    YO: function () {
        return f;
    },
    _X: function () {
        return m;
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
var i = t(570140),
    r = t(434404),
    l = t(703656),
    o = t(430824),
    u = t(241559),
    a = t(327999),
    s = t(981631),
    c = t(176505);
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
function p(e, n) {
    let { continuationToken: t, ...r } = n;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: r
    });
}
async function _(e, n) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: n
    });
}
function m(e) {
    let n = (0, u.lv)(e),
        t = o.Z.getGuild(e);
    return !!n && null != t && (t.hasFeature(s.oNc.COMMUNITY) || t.hasFeature(s.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, l.uL)(s.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0) : (r.Z.open(t.id, s.pNK.MEMBERS), !0));
}
async function g(e, n) {
    let t = await (0, a._2)(e, n);
    return 0 === t.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: t
          }),
          t);
}
