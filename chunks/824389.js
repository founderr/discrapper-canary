n.d(t, {
    Je: function () {
        return u;
    },
    gs: function () {
        return d;
    },
    mh: function () {
        return a;
    },
    p9: function () {
        return c;
    },
    uV: function () {
        return s;
    }
});
var i = n(544891),
    r = n(881052),
    o = n(73346),
    l = n(981631);
let u = async (e, t, n) => {
        let { priceTier: o, imageName: u, createNewRole: a, unlinkRole: s, ...c } = n;
        try {
            return (
                await i.tn.patch({
                    url: l.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body: {
                        ...c,
                        image_name: u,
                        price_tier: o,
                        create_new_role: a,
                        unlink_role: s
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    a = async (e, t) => {
        try {
            await i.tn.del({
                url: l.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1
            });
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    s = async (e) => {
        try {
            return (
                await (0, o.Kb)({
                    url: l.ANM.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    c = async (e, t) => {
        try {
            return (
                await (0, o.Kb)({
                    url: l.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: t, productId: n, attachmentId: o } = e;
        try {
            return (
                await i.tn.post({
                    url: l.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, o),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    };
