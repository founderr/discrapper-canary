r.d(n, {
    HT: function () {
        return y;
    },
    K5: function () {
        return p;
    },
    LB: function () {
        return T;
    },
    MI: function () {
        return I;
    },
    V_: function () {
        return E;
    },
    X: function () {
        return h;
    },
    X2: function () {
        return f;
    },
    aG: function () {
        return u;
    },
    bg: function () {
        return l;
    },
    ci: function () {
        return _;
    },
    eI: function () {
        return v;
    },
    es: function () {
        return g;
    },
    iW: function () {
        return m;
    },
    j8: function () {
        return b;
    },
    nU: function () {
        return c;
    },
    rD: function () {
        return d;
    }
});
var i = r(544891),
    a = r(881052),
    s = r(981631),
    o = r(231338);
let l = async (e, n) => {
        try {
            return (
                await i.tn.post({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    body: n,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    u = async (e, n, r) => {
        let { priceTier: o, ...l } = r;
        try {
            return (
                await i.tn.post({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, n),
                    body: {
                        ...l,
                        price_tier: o
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    c = async (e, n, r, o) => {
        let { priceTier: l, ...u } = o;
        try {
            return (
                await i.tn.patch({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, n, r),
                    body: {
                        ...u,
                        price_tier: l
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    d = async function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 },
            r = {
                include_soft_deleted: n.includeSoftDeleted,
                country_code: n.countryCode
            };
        try {
            return (
                await i.tn.get({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    query: r,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    f = async (e) =>
        (
            await i.tn.get({
                url: s.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                rejectWithError: !1
            })
        ).body,
    _ = async (e, n) => {
        try {
            return (
                await i.tn.patch({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                    body: n,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    h = async (e) => {
        try {
            return (
                await i.tn.get({
                    url: s.ANM.PRICE_TIERS,
                    query: {
                        price_tier_type: o.RG.GUILD_ROLE_SUBSCRIPTIONS,
                        guild_id: e
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    p = async function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            return (
                await i.tn.get({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, n),
                    query: {
                        include_draft_listings: r.includeDraftListings,
                        include_archived_listings: r.includeArchivedListings
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    m = async (e) => {
        try {
            return (
                await i.tn.get({
                    url: s.ANM.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    g = async (e, n, r) => {
        try {
            await i.tn.del({
                url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, n, r),
                rejectWithError: !1
            });
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    E = async (e, n, r) => {
        try {
            return (
                await i.tn.post({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, n, r),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    v = async (e) => {
        try {
            return (
                await i.tn.get({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_TRIALS(e),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    I = async (e, n, r) => {
        try {
            return (
                await i.tn.patch({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, n),
                    body: r,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    T = async (e, n, r) => {
        try {
            return (
                await i.tn.get({
                    url: s.ANM.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, n, r),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    b = async function (e) {
        let { signal: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            return (
                await i.tn.get({
                    url: s.ANM.CREATOR_MONETIZATION_RESTRICTIONS(e),
                    signal: n,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    y = async (e) => {
        try {
            var n;
            let r = await i.tn.get({
                url: s.ANM.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !1
            });
            return null !== (n = r.body) && void 0 !== n ? n : JSON.parse(r.text);
        } catch (e) {
            throw new a.Hx(e);
        }
    };
