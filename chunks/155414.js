n.d(t, {
    X: function () {
        return u;
    }
});
var r = n(544891),
    i = n(881052),
    o = n(981631);
let u = async (e, t) => {
    try {
        return (
            await r.tn.get({
                url: o.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: t,
                    guild_id: e
                }
            })
        ).body;
    } catch (e) {
        throw new i.Hx(e);
    }
};
