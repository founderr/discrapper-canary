t.d(n, {
    J9: function () {
        return f;
    },
    K0: function () {
        return v;
    },
    Kq: function () {
        return b;
    },
    P$: function () {
        return p;
    },
    TA: function () {
        return u;
    },
    Vv: function () {
        return C;
    },
    W1: function () {
        return h;
    },
    aC: function () {
        return c;
    },
    i3: function () {
        return d;
    },
    le: function () {
        return l;
    },
    mA: function () {
        return x;
    },
    t$: function () {
        return g;
    },
    zH: function () {
        return m;
    }
});
var r = t(544891),
    a = t(570140),
    i = t(706454),
    o = t(150192),
    s = t(981631);
async function l() {
    let e = i.default.locale;
    if (e === o.Z.getFetchedLocale()) return;
    let n = await r.tn.get({
        url: s.ANM.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0
    });
    a.Z.dispatch({
        type: 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS',
        categories: n.body,
        locale: e
    });
}
async function c(e) {
    try {
        let {
                primary_category_id: n,
                category_ids: t,
                keywords: i,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: l,
                partner_application_timestamp: c,
                is_published: d,
                reasons_to_join: u,
                social_links: m,
                about: f
            } = (
                await r.tn.get({
                    url: s.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0
                })
            ).body,
            h = {
                primaryCategoryId: n,
                secondaryCategoryIds: t,
                keywords: i,
                emojiDiscoverabilityEnabled: o,
                partnerActionedTimestamp: l,
                partnerApplicationTimestamp: c,
                isPublished: d,
                reasonsToJoin: u,
                socialLinks: m,
                about: f
            };
        return (
            a.Z.dispatch({
                type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
                guildId: e,
                metadata: h
            }),
            h
        );
    } catch (e) {
        a.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
    }
}
async function d(e) {
    try {
        let n = (await r.tn.get({ url: s.ANM.GUILD_DISCOVERY_SLUG(e) })).body.slug;
        a.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS',
            slug: n
        });
    } catch {
        a.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_FAIL',
            guildId: e
        });
    }
}
function u(e, n) {
    a.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        primaryCategoryId: n
    });
}
function m(e, n) {
    a.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        keywords: n
    });
}
function f(e, n) {
    a.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        emojiDiscoverabilityEnabled: n
    });
}
function h(e, n) {
    a.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        isPublished: n
    });
}
function x(e, n) {
    a.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        about: n
    });
}
function p(e, n) {
    a.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: n
    });
}
function g(e, n) {
    a.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: n
    });
}
async function C(e) {
    let { guildId: n, primaryCategoryId: t, keywords: i, emojiDiscoverabilityEnabled: o, partnerActionedTimestamp: l, partnerApplicationTimestamp: c, isPublished: d, reasonsToJoin: u, socialLinks: m, about: f } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: h,
            keywords: x,
            emoji_discoverability_enabled: p,
            partner_actioned_timestamp: g,
            partner_application_timestamp: C,
            is_published: b,
            reasons_to_join: v,
            social_links: _,
            about: y
        } = (
            await r.tn.patch({
                url: s.ANM.GUILD_DISCOVERY_METADATA(n),
                body: {
                    primary_category_id: t,
                    emoji_discoverability_enabled: o,
                    partner_actioned_timestamp: l,
                    partner_application_timestamp: c,
                    keywords: i,
                    is_published: d,
                    reasons_to_join: u,
                    social_links: m,
                    about: f
                },
                oldFormErrors: !0
            })
        ).body;
        a.Z.dispatch({
            type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
            guildId: n,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: h,
                keywords: x,
                emojiDiscoverabilityEnabled: p,
                partnerActionedTimestamp: g,
                partnerApplicationTimestamp: C,
                isPublished: b,
                reasonsToJoin: v,
                socialLinks: _,
                about: y
            }
        });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: n,
                errors: e.body
            }),
            e)
        );
    }
}
function b(e, n) {
    r.tn
        .put({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
            oldFormErrors: !0
        })
        .then(() => {
            a.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_ADD',
                guildId: e,
                categoryId: n
            });
        })
        .catch((n) => {
            a.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: n.body
            });
        });
}
function v(e, n) {
    r.tn
        .del({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
            oldFormErrors: !0
        })
        .then(() => {
            a.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_DELETE',
                guildId: e,
                categoryId: n
            });
        })
        .catch((n) => {
            a.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: n.body
            });
        });
}
