r.d(t, {
    J9: function () {
        return E;
    },
    K0: function () {
        return D;
    },
    Kq: function () {
        return C;
    },
    P$: function () {
        return A;
    },
    TA: function () {
        return d;
    },
    Vv: function () {
        return h;
    },
    W1: function () {
        return I;
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
        return p;
    },
    t$: function () {
        return T;
    },
    zH: function () {
        return _;
    }
});
var n = r(544891),
    i = r(570140),
    a = r(706454),
    o = r(526429),
    l = r(981631);
async function s() {
    let e = a.default.locale;
    if (e === o.Z.getFetchedLocale()) return;
    let t = await n.tn.get({
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
                category_ids: r,
                keywords: a,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: s,
                partner_application_timestamp: c,
                is_published: u,
                reasons_to_join: d,
                social_links: _,
                about: E
            } = (
                await n.tn.get({
                    url: l.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
            ).body,
            I = {
                primaryCategoryId: t,
                secondaryCategoryIds: r,
                keywords: a,
                emojiDiscoverabilityEnabled: o,
                partnerActionedTimestamp: s,
                partnerApplicationTimestamp: c,
                isPublished: u,
                reasonsToJoin: d,
                socialLinks: _,
                about: E
            };
        return (
            i.Z.dispatch({
                type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
                guildId: e,
                metadata: I
            }),
            I
        );
    } catch (e) {
        i.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
    }
}
async function u(e) {
    try {
        let t = (
            await n.tn.get({
                url: l.ANM.GUILD_DISCOVERY_SLUG(e),
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
function E(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        emojiDiscoverabilityEnabled: t
    });
}
function I(e, t) {
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
function A(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: t
    });
}
function T(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: t
    });
}
async function h(e) {
    let { guildId: t, primaryCategoryId: r, keywords: a, emojiDiscoverabilityEnabled: o, partnerActionedTimestamp: s, partnerApplicationTimestamp: c, isPublished: u, reasonsToJoin: d, socialLinks: _, about: E } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: I,
            keywords: p,
            emoji_discoverability_enabled: A,
            partner_actioned_timestamp: T,
            partner_application_timestamp: h,
            is_published: C,
            reasons_to_join: D,
            social_links: S,
            about: m
        } = (
            await n.tn.patch({
                url: l.ANM.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: r,
                    emoji_discoverability_enabled: o,
                    partner_actioned_timestamp: s,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: u,
                    reasons_to_join: d,
                    social_links: _,
                    about: E
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
                secondaryCategoryIds: I,
                keywords: p,
                emojiDiscoverabilityEnabled: A,
                partnerActionedTimestamp: T,
                partnerApplicationTimestamp: h,
                isPublished: C,
                reasonsToJoin: D,
                socialLinks: S,
                about: m
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
    n.tn
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
function D(e, t) {
    n.tn
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
