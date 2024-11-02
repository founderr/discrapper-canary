e.d(n, {
    X: function () {
        return o;
    }
});
var i = e(544891),
    r = e(881052),
    l = e(981631);
let o = async (t, n) => {
    try {
        return (
            await i.tn.get({
                url: l.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: n,
                    guild_id: t
                }
            })
        ).body;
    } catch (t) {
        throw new r.Hx(t);
    }
};
