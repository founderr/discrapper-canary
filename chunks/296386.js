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
        return p;
    },
    TA: function () {
        return d;
    },
    Vv: function () {
        return f;
    },
    W1: function () {
        return h;
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
        return E;
    },
    t$: function () {
        return I;
    },
    zH: function () {
        return _;
    }
});
var r = n(544891),
    i = n(570140),
    o = n(706454),
    a = n(150192),
    l = n(981631);
async function s() {
    let e = o.default.locale;
    if (e === a.Z.getFetchedLocale()) return;
    let t = await r.tn.get({
        url: l.ANM.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0,
        rejectWithError: !1
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
                keywords: o,
                emoji_discoverability_enabled: a,
                partner_actioned_timestamp: s,
                partner_application_timestamp: c,
                is_published: u,
                reasons_to_join: d,
                social_links: _,
                about: m
            } = (
                await r.tn.get({
                    url: l.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body,
            h = {
                primaryCategoryId: t,
                secondaryCategoryIds: n,
                keywords: o,
                emojiDiscoverabilityEnabled: a,
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
                metadata: h
            }),
            h
        );
    } catch (e) {
        i.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
    }
}
async function u(e) {
    try {
        let t = (
            await r.tn.get({
                url: l.ANM.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !1
            })
        ).body.slug;
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
function h(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        isPublished: t
    });
}
function E(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        about: t
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: t
    });
}
function I(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: t
    });
}
async function f(e) {
    let { guildId: t, primaryCategoryId: n, keywords: o, emojiDiscoverabilityEnabled: a, partnerActionedTimestamp: s, partnerApplicationTimestamp: c, isPublished: u, reasonsToJoin: d, socialLinks: _, about: m } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: h,
            keywords: E,
            emoji_discoverability_enabled: p,
            partner_actioned_timestamp: I,
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
                    emoji_discoverability_enabled: a,
                    partner_actioned_timestamp: s,
                    partner_application_timestamp: c,
                    keywords: o,
                    is_published: u,
                    reasons_to_join: d,
                    social_links: _,
                    about: m
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        i.Z.dispatch({
            type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: h,
                keywords: E,
                emojiDiscoverabilityEnabled: p,
                partnerActionedTimestamp: I,
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
            oldFormErrors: !0,
            rejectWithError: !1
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
            oldFormErrors: !0,
            rejectWithError: !1
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
