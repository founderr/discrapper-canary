e.d(n, {
    Dr: function () {
        return p;
    },
    YO: function () {
        return f;
    },
    _X: function () {
        return E;
    },
    _o: function () {
        return _;
    },
    nb: function () {
        return g;
    },
    zO: function () {
        return d;
    }
});
var i = e(570140),
    r = e(434404),
    l = e(703656),
    o = e(430824),
    u = e(241559),
    a = e(327999),
    s = e(981631),
    c = e(176505);
async function d(t) {
    await i.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: t
    });
}
function f(t) {
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: t
    });
}
function _(t, n) {
    let { continuationToken: e, ...r } = n;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: t,
        pagination: r
    });
}
async function p(t, n) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: t,
        searchState: n
    });
}
function E(t) {
    let n = (0, u.lv)(t),
        e = o.Z.getGuild(t);
    return !!n && null != e && (e.hasFeature(s.oNc.COMMUNITY) || e.hasFeature(s.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, l.uL)(s.Z5c.CHANNEL(t, c.oC.MEMBER_SAFETY)), !0) : (r.Z.open(e.id, s.pNK.MEMBERS), !0));
}
async function g(t, n) {
    let e = await (0, a._2)(t, n);
    return 0 === e.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: t,
              memberSupplementals: e
          }),
          e);
}
