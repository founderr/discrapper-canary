t.d(n, {
    X: function () {
        return o;
    }
});
var i = t(544891),
    r = t(881052),
    l = t(981631);
let o = async (e, n) => {
    try {
        return (
            await i.tn.get({
                url: l.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: n,
                    guild_id: e
                }
            })
        ).body;
    } catch (e) {
        throw new r.Hx(e);
    }
};
