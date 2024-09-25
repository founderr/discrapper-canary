n.d(t, {
    X: function () {
        return o;
    }
});
var r = n(544891),
    i = n(881052),
    a = n(981631);
let o = async (e, t) => {
    try {
        return (
            await r.tn.get({
                url: a.ANM.PRICE_TIERS,
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
