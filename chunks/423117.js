n.d(t, {
    AE: function () {
        return E;
    },
    FP: function () {
        return p;
    },
    I1: function () {
        return v;
    },
    O0: function () {
        return T;
    },
    Qb: function () {
        return f;
    },
    W2: function () {
        return _;
    },
    Xj: function () {
        return S;
    },
    _d: function () {
        return g;
    },
    dA: function () {
        return I;
    },
    uw: function () {
        return h;
    },
    vY: function () {
        return m;
    }
}),
    n(47120);
var r = n(379649),
    i = n(570140),
    a = n(355467),
    s = n(821849),
    o = n(367907),
    l = n(626135),
    u = n(70956),
    c = n(295141),
    d = n(981631);
async function f(e) {
    let t = await c.X2(e);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: t
    });
}
async function _(e, t) {
    let n = await c.ci(e, t);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: n
    });
}
async function p(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS',
        guildId: e
    });
    try {
        let [r, s, o] = await Promise.all([
            c.rD(e, {
                includeSoftDeleted: t,
                countryCode: n
            }),
            c.X2(e),
            c.eI(e),
            (0, a.jg)()
        ]);
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
            guildId: e,
            groupListings: r,
            settings: s,
            subscriptionTrials: o
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            guildId: e
        });
    }
}
async function h(e, t) {
    let n = await c.bg(e, t);
    return (
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: n
        }),
        n
    );
}
async function m(e) {
    var t;
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    let n = await c.iW(e);
    for (let r of (i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
        groupListing: n
    }),
    null !== (t = n.subscription_listings) && void 0 !== t ? t : []))
        r.subscription_plans[0].id === e && (await s.GZ(r.id, void 0, void 0, !0));
}
async function g(e, t, n) {
    await c.es(e, t, n),
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING',
            listingId: n
        });
}
async function E(e, t, n) {
    let r = await c.V_(e, t, n);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
        listing: r
    });
}
async function v(e, t, n) {
    let r = await c.MI(e, t, n);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL',
        subscriptionTrial: r
    });
}
async function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = await c.K5(e, t, n);
    return (
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: r
        }),
        r
    );
}
async function I(e) {
    let { guildId: t, groupListingId: n, data: r, analyticsContext: a, onBeforeDispatchNewListing: s } = e,
        u = await c.aG(t, n, r);
    return (
        l.default.track(d.rMx.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: a.templateCategory,
            has_change_from_template: a.hasChangeFromTemplate,
            ...(0, o.hH)(t)
        }),
        await b(t, n, { includeArchivedListings: !0 }),
        null == s || s(u),
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: u
        }),
        u
    );
}
async function T(e) {
    let { guildId: t, listingId: n, groupListingId: r, data: a } = e,
        s = await c.nU(t, r, n, a);
    return (
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: s
        }),
        await b(t, r, { includeArchivedListings: !0 }),
        s
    );
}
async function S(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let a = 0; a < 3; a++)
        try {
            if (null == t ? void 0 : t.aborted) {
                i.Z.dispatch({
                    type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED',
                    guildId: e
                });
                return;
            }
            i.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS',
                guildId: e
            });
            let { restrictions: r } = await c.j8(e, { signal: t });
            i.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
                guildId: e,
                restrictions: null != r ? r : []
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, r._v)((a + 1) * u.Z.Millis.SECOND);
        }
    !n &&
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE',
            guildId: e
        });
}
