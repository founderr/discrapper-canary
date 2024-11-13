n.d(t, {
    J9: function () {
        return m;
    },
    K0: function () {
        return T;
    },
    Kq: function () {
        return C;
    },
    P$: function () {
        return I;
    },
    TA: function () {
        return d;
    },
    Vv: function () {
        return f;
    },
    W1: function () {
        return p;
    },
    aC: function () {
        return c;
    },
    i3: function () {
        return u;
    },
    le: function () {
        return s;
    },
    mA: function () {
        return h;
    },
    t$: function () {
        return E;
    },
    zH: function () {
        return _;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(706454),
    o = n(150192),
    l = n(981631);
async function s() {
    let e = a.default.locale;
    if (e === o.Z.getFetchedLocale()) return;
    let t = await r.tn.get({
        url: l.ANM.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0
    });
    i.Z.dispatch({
        type: 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS',
        categories: t.body,
        locale: e
    });
}
async function c(e) {
    try {
        let {
                primary_category_id: t,
                category_ids: n,
                keywords: a,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: s,
                partner_application_timestamp: c,
                is_published: u,
                reasons_to_join: d,
                social_links: _,
                about: m
            } = (
                await r.tn.get({
                    url: l.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0
                })
            ).body,
            p = {
                primaryCategoryId: t,
                secondaryCategoryIds: n,
                keywords: a,
                emojiDiscoverabilityEnabled: o,
                partnerActionedTimestamp: s,
                partnerApplicationTimestamp: c,
                isPublished: u,
                reasonsToJoin: d,
                socialLinks: _,
                about: m
            };
        return (
            i.Z.dispatch({
                type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
                guildId: e,
                metadata: p
            }),
            p
        );
    } catch (e) {
        i.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
    }
}
async function u(e) {
    try {
        let t = (await r.tn.get({ url: l.ANM.GUILD_DISCOVERY_SLUG(e) })).body.slug;
        i.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS',
            slug: t
        });
    } catch {
        i.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_FAIL',
            guildId: e
        });
    }
}
function d(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        primaryCategoryId: t
    });
}
function _(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        keywords: t
    });
}
function m(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        emojiDiscoverabilityEnabled: t
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        isPublished: t
    });
}
function h(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        about: t
    });
}
function I(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: t
    });
}
function E(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: t
    });
}
async function f(e) {
    let { guildId: t, primaryCategoryId: n, keywords: a, emojiDiscoverabilityEnabled: o, partnerActionedTimestamp: s, partnerApplicationTimestamp: c, isPublished: u, reasonsToJoin: d, socialLinks: _, about: m } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: p,
            keywords: h,
            emoji_discoverability_enabled: I,
            partner_actioned_timestamp: E,
            partner_application_timestamp: f,
            is_published: C,
            reasons_to_join: T,
            social_links: A,
            about: N
        } = (
            await r.tn.patch({
                url: l.ANM.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: n,
                    emoji_discoverability_enabled: o,
                    partner_actioned_timestamp: s,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: u,
                    reasons_to_join: d,
                    social_links: _,
                    about: m
                },
                oldFormErrors: !0
            })
        ).body;
        i.Z.dispatch({
            type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: p,
                keywords: h,
                emojiDiscoverabilityEnabled: I,
                partnerActionedTimestamp: E,
                partnerApplicationTimestamp: f,
                isPublished: C,
                reasonsToJoin: T,
                socialLinks: A,
                about: N
            }
        });
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: t,
                errors: e.body
            }),
            e)
        );
    }
}
function C(e, t) {
    r.tn
        .put({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0
        })
        .then(() => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_ADD',
                guildId: e,
                categoryId: t
            });
        })
        .catch((t) => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: t.body
            });
        });
}
function T(e, t) {
    r.tn
        .del({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0
        })
        .then(() => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_DELETE',
                guildId: e,
                categoryId: t
            });
        })
        .catch((t) => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: t.body
            });
        });
}
