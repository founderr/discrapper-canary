n.d(t, {
    Je: function () {
        return s;
    },
    gs: function () {
        return d;
    },
    mh: function () {
        return l;
    },
    p9: function () {
        return c;
    },
    uV: function () {
        return u;
    }
});
var r = n(544891),
    i = n(881052),
    a = n(73346),
    o = n(981631);
let s = async (e, t, n) => {
        let { priceTier: a, imageName: s, createNewRole: l, unlinkRole: u, ...c } = n;
        try {
            return (
                await r.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body: {
                        ...c,
                        image_name: s,
                        price_tier: a,
                        create_new_role: l,
                        unlink_role: u
                    }
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    l = async (e, t) => {
        try {
            await r.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t) });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    u = async (e) => {
        try {
            return (await (0, a.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e) })).body.listings;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    c = async (e, t) => {
        try {
            return (await (0, a.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t) })).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: t, productId: n, attachmentId: a } = e;
        try {
            return (await r.tn.post({ url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, a) })).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    };
