e.d(n, {
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
var i = e(544891),
    r = e(881052),
    l = e(73346),
    o = e(981631);
let u = async (t, n, e) => {
        let { priceTier: l, imageName: u, createNewRole: a, unlinkRole: s, ...c } = e;
        try {
            return (
                await i.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(t, n),
                    body: {
                        ...c,
                        image_name: u,
                        price_tier: l,
                        create_new_role: a,
                        unlink_role: s
                    }
                })
            ).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    a = async (t, n) => {
        try {
            await i.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(t, n) });
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    s = async (t) => {
        try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(t) })).body.listings;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    c = async (t, n) => {
        try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(t, n) })).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    d = async (t) => {
        let { guildId: n, productId: e, attachmentId: l } = t;
        try {
            return (await i.tn.post({ url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, e, l) })).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    };
