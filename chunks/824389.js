n.d(t, {
    Je: function () {
        return l;
    },
    gs: function () {
        return d;
    },
    mh: function () {
        return s;
    },
    p9: function () {
        return c;
    },
    uV: function () {
        return a;
    }
});
var r = n(544891),
    i = n(881052),
    o = n(73346),
    u = n(981631);
let l = async (e, t, n) => {
        let { priceTier: o, imageName: l, createNewRole: s, unlinkRole: a, ...c } = n;
        try {
            return (
                await r.tn.patch({
                    url: u.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body: {
                        ...c,
                        image_name: l,
                        price_tier: o,
                        create_new_role: s,
                        unlink_role: a
                    }
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    s = async (e, t) => {
        try {
            await r.tn.del({ url: u.ANM.GUILD_PRODUCT_LISTINGS(e, t) });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    a = async (e) => {
        try {
            return (await (0, o.Kb)({ url: u.ANM.GUILD_PRODUCT_LISTINGS(e) })).body.listings;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    c = async (e, t) => {
        try {
            return (await (0, o.Kb)({ url: u.ANM.GUILD_PRODUCT_LISTINGS(e, t) })).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: t, productId: n, attachmentId: o } = e;
        try {
            return (await r.tn.post({ url: u.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, o) })).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    };
