n.d(t, {
    AE: function () {
        return g;
    },
    FP: function () {
        return p;
    },
    I1: function () {
        return S;
    },
    O0: function () {
        return N;
    },
    Qb: function () {
        return f;
    },
    W2: function () {
        return h;
    },
    Xj: function () {
        return O;
    },
    _d: function () {
        return T;
    },
    dA: function () {
        return v;
    },
    uw: function () {
        return m;
    },
    vY: function () {
        return I;
    }
});
var r = n(47120);
var i = n(379649),
    a = n(570140),
    o = n(355467),
    s = n(821849),
    l = n(367907),
    u = n(626135),
    c = n(70956),
    d = n(295141),
    _ = n(981631);
let E = 3;
async function f(e) {
    let t = await d.X2(e);
    a.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: t
    });
}
async function h(e, t) {
    let n = await d.ci(e, t);
    a.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: n
    });
}
async function p(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    a.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS',
        guildId: e
    });
    try {
        let [r, i, s] = await Promise.all([
            d.rD(e, {
                includeSoftDeleted: t,
                countryCode: n
            }),
            d.X2(e),
            d.eI(e),
            (0, o.jg)()
        ]);
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
            guildId: e,
            groupListings: r,
            settings: i,
            subscriptionTrials: s
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            guildId: e
        });
    }
}
async function m(e, t) {
    let n = await d.bg(e, t);
    return (
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: n
        }),
        n
    );
}
async function I(e) {
    var t;
    a.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    let n = await d.iW(e);
    for (let r of (a.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
        groupListing: n
    }),
    null !== (t = n.subscription_listings) && void 0 !== t ? t : []))
        r.subscription_plans[0].id === e && (await s.GZ(r.id, void 0, void 0, !0));
}
async function T(e, t, n) {
    await d.es(e, t, n),
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING',
            listingId: n
        });
}
async function g(e, t, n) {
    let r = await d.V_(e, t, n);
    a.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
        listing: r
    });
}
async function S(e, t, n) {
    let r = await d.MI(e, t, n);
    a.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL',
        subscriptionTrial: r
    });
}
async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = await d.K5(e, t, n);
    return (
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: r
        }),
        r
    );
}
async function v(e) {
    let { guildId: t, groupListingId: n, data: r, analyticsContext: i, onBeforeDispatchNewListing: o } = e,
        s = await d.aG(t, n, r);
    return (
        u.default.track(_.rMx.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: s.id,
            role_subscription_group_listing_id: n,
            template_name: i.templateCategory,
            has_change_from_template: i.hasChangeFromTemplate,
            ...(0, l.hH)(t)
        }),
        await A(t, n, { includeArchivedListings: !0 }),
        null == o || o(s),
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: s
        }),
        s
    );
}
async function N(e) {
    let { guildId: t, listingId: n, groupListingId: r, data: i } = e,
        o = await d.nU(t, r, n, i);
    return (
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: o
        }),
        await A(t, r, { includeArchivedListings: !0 }),
        o
    );
}
async function O(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let r = 0; r < E; r++)
        try {
            if (null == t ? void 0 : t.aborted) {
                a.Z.dispatch({
                    type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED',
                    guildId: e
                });
                return;
            }
            a.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS',
                guildId: e
            });
            let { restrictions: r } = await d.j8(e, { signal: t });
            a.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
                guildId: e,
                restrictions: null != r ? r : []
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, i._v)((r + 1) * c.Z.Millis.SECOND);
        }
    !n &&
        a.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE',
            guildId: e
        });
}
