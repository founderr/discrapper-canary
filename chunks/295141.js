n.d(t, {
    HT: function () {
        return T;
    },
    K5: function () {
        return p;
    },
    LB: function () {
        return b;
    },
    MI: function () {
        return v;
    },
    V_: function () {
        return g;
    },
    X: function () {
        return _;
    },
    X2: function () {
        return d;
    },
    aG: function () {
        return l;
    },
    bg: function () {
        return o;
    },
    ci: function () {
        return f;
    },
    eI: function () {
        return E;
    },
    es: function () {
        return m;
    },
    iW: function () {
        return h;
    },
    j8: function () {
        return I;
    },
    nU: function () {
        return u;
    },
    rD: function () {
        return c;
    }
});
var r = n(544891),
    i = n(881052),
    a = n(981631),
    s = n(231338);
let o = async (e, t) => {
        try {
            return (
                await r.tn.post({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    body: t,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    l = async (e, t, n) => {
        let { priceTier: s, ...o } = n;
        try {
            return (
                await r.tn.post({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                    body: {
                        ...o,
                        price_tier: s
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    u = async (e, t, n, s) => {
        let { priceTier: o, ...l } = s;
        try {
            return (
                await r.tn.patch({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                    body: {
                        ...l,
                        price_tier: o
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    c = async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 },
            n = {
                include_soft_deleted: t.includeSoftDeleted,
                country_code: t.countryCode
            };
        try {
            return (
                await r.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    query: n,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    d = async (e) =>
        (
            await r.tn.get({
                url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                rejectWithError: !1
            })
        ).body,
    f = async (e, t) => {
        try {
            return (
                await r.tn.patch({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                    body: t,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    _ = async (e) => {
        try {
            return (
                await r.tn.get({
                    url: a.ANM.PRICE_TIERS,
                    query: {
                        price_tier_type: s.RG.GUILD_ROLE_SUBSCRIPTIONS,
                        guild_id: e
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    p = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            return (
                await r.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                    query: {
                        include_draft_listings: n.includeDraftListings,
                        include_archived_listings: n.includeArchivedListings
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    h = async (e) => {
        try {
            return (
                await r.tn.get({
                    url: a.ANM.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    m = async (e, t, n) => {
        try {
            await r.tn.del({
                url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                rejectWithError: !1
            });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    g = async (e, t, n) => {
        try {
            return (
                await r.tn.post({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    E = async (e) => {
        try {
            return (
                await r.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIALS(e),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    v = async (e, t, n) => {
        try {
            return (
                await r.tn.patch({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                    body: n,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    b = async (e, t, n) => {
        try {
            return (
                await r.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    I = async function (e) {
        let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            return (
                await r.tn.get({
                    url: a.ANM.CREATOR_MONETIZATION_RESTRICTIONS(e),
                    signal: t,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    T = async (e) => {
        try {
            var t;
            let n = await r.tn.get({
                url: a.ANM.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !1
            });
            return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text);
        } catch (e) {
            throw new i.Hx(e);
        }
    };
