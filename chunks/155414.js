n.d(t, {
    X: function () {
        return l;
    }
});
var i = n(544891),
    r = n(881052),
    o = n(981631);
let l = async (e, t) => {
    try {
        return (
            await i.tn.get({
                url: o.ANM.PRICE_TIERS,
                query: {
                    price_tier_type: t,
                    guild_id: e
                },
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        throw new r.Hx(e);
    }
};
