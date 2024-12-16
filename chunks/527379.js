n.d(t, {
    Dr: function () {
        return g;
    },
    YO: function () {
        return _;
    },
    _X: function () {
        return E;
    },
    _o: function () {
        return p;
    },
    nb: function () {
        return m;
    },
    zO: function () {
        return f;
    }
});
var i = n(570140),
    r = n(63568),
    l = n(434404),
    o = n(703656),
    u = n(430824),
    a = n(241559),
    s = n(327999),
    c = n(981631),
    d = n(176505);
async function f(e) {
    await i.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: e
    });
}
function _(e) {
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
async function g(e, t) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function E(e) {
    let t = (0, a.lv)(e),
        n = u.Z.getGuild(e);
    return !!t && null != n && (((0, r.K2)(e, 'Guild Sidebar') && n.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || n.hasFeature(c.oNc.COMMUNITY) || n.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, o.uL)(c.Z5c.CHANNEL(e, d.oC.MEMBER_SAFETY)), !0) : (l.Z.open(n.id, c.pNK.MEMBERS), !0));
}
async function m(e, t) {
    let n = await (0, s._2)(e, t);
    return 0 === n.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
