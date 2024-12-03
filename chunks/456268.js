n.d(t, {
    J9: function () {
        return h;
    },
    K0: function () {
        return f;
    },
    Kq: function () {
        return C;
    },
    P$: function () {
        return E;
    },
    TA: function () {
        return d;
    },
    Vv: function () {
        return T;
    },
    W1: function () {
        return m;
    },
    aC: function () {
        return c;
    },
    i3: function () {
        return u;
    },
    le: function () {
        return l;
    },
    mA: function () {
        return p;
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
    a = n(706454),
    o = n(526429),
    s = n(981631);
async function l() {
    let e = a.default.locale;
    if (e === o.Z.getFetchedLocale()) return;
    let t = await r.tn.get({
        url: s.ANM.GUILD_DISCOVERY_CATEGORIES,
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
                keywords: a,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: l,
                partner_application_timestamp: c,
                is_published: u,
                reasons_to_join: d,
                social_links: _,
                about: h
            } = (
                await r.tn.get({
                    url: s.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
            ).body,
            m = {
                primaryCategoryId: t,
                secondaryCategoryIds: n,
                keywords: a,
                emojiDiscoverabilityEnabled: o,
                partnerActionedTimestamp: l,
                partnerApplicationTimestamp: c,
                isPublished: u,
                reasonsToJoin: d,
                socialLinks: _,
                about: h
            };
        return (
            i.Z.dispatch({
                type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
                guildId: e,
                metadata: m
            }),
            m
        );
    } catch (e) {
        i.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
    }
}
async function u(e) {
    try {
        let t = (
            await r.tn.get({
                url: s.ANM.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !0
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
function h(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        emojiDiscoverabilityEnabled: t
    });
}
function m(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        isPublished: t
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        about: t
    });
}
function E(e, t) {
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
async function T(e) {
    let { guildId: t, primaryCategoryId: n, keywords: a, emojiDiscoverabilityEnabled: o, partnerActionedTimestamp: l, partnerApplicationTimestamp: c, isPublished: u, reasonsToJoin: d, socialLinks: _, about: h } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: m,
            keywords: p,
            emoji_discoverability_enabled: E,
            partner_actioned_timestamp: I,
            partner_application_timestamp: T,
            is_published: C,
            reasons_to_join: f,
            social_links: A,
            about: N
        } = (
            await r.tn.patch({
                url: s.ANM.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: n,
                    emoji_discoverability_enabled: o,
                    partner_actioned_timestamp: l,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: u,
                    reasons_to_join: d,
                    social_links: _,
                    about: h
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
                secondaryCategoryIds: m,
                keywords: p,
                emojiDiscoverabilityEnabled: E,
                partnerActionedTimestamp: I,
                partnerApplicationTimestamp: T,
                isPublished: C,
                reasonsToJoin: f,
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
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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
function f(e, t) {
    r.tn
        .del({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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
