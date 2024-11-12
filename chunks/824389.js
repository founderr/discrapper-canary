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
    l = n(73346),
    o = n(981631);
let u = async (e, t, n) => {
        let { priceTier: l, imageName: u, createNewRole: a, unlinkRole: s, ...c } = n;
        try {
            return (
                await i.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
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
    a = async (e, t) => {
        try {
            await i.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t) });
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
    c = async (e, t) => {
        try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t) })).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: t, productId: n, attachmentId: l } = e;
        try {
            return (await i.tn.post({ url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l) })).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    };
