n.d(t, {
    Dr: function () {
        return f;
    },
    YO: function () {
        return _;
    },
    _X: function () {
        return I;
    },
    _o: function () {
        return E;
    },
    nb: function () {
        return S;
    },
    zO: function () {
        return d;
    }
});
var r = n(570140),
    i = n(434404),
    o = n(703656),
    u = n(430824),
    l = n(241559),
    s = n(327999),
    a = n(981631),
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
async function f(e, t) {
    await r.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function I(e) {
    let t = (0, l.lv)(e),
        n = u.Z.getGuild(e);
    return !!t && null != n && (n.hasFeature(a.oNc.COMMUNITY) || n.hasFeature(a.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, o.uL)(a.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0) : (i.Z.open(n.id, a.pNK.MEMBERS), !0));
}
async function S(e, t) {
    let n = await (0, s._2)(e, t);
    return 0 === n.length
        ? []
        : (await r.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
