t.d(n, {
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
var i = t(544891),
    r = t(881052),
    l = t(73346),
    o = t(981631);
let u = async (e, n, t) => {
        let { priceTier: l, imageName: u, createNewRole: a, unlinkRole: s, ...c } = t;
        try {
            return (
                await i.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n),
                    body: {
                        ...c,
                        image_name: u,
                        price_tier: l,
                        create_new_role: a,
                        unlink_role: s
                    }
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    a = async (e, n) => {
        try {
            await i.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n) });
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    s = async (e) => {
        try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e) })).body.listings;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    c = async (e, n) => {
        try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n) })).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: n, productId: t, attachmentId: l } = e;
        try {
            return (await i.tn.post({ url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, t, l) })).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    };
