n.d(t, {
    EB: function () {
        return l;
    },
    Je: function () {
        return a;
    },
    cf: function () {
        return u;
    },
    mh: function () {
        return s;
    }
});
var i = n(570140),
    r = n(881052),
    o = n(824389);
let l = async (e) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCTS_FETCH',
            guildId: e
        });
        try {
            let t = await o.uV(e);
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_SUCCESS',
                guildId: e,
                products: t
            });
        } catch (t) {
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_FAILURE',
                guildId: e
            });
        }
    },
    u = async (e, t) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_FETCH',
            productId: t
        });
        try {
            let n = await o.p9(e, t);
            return (
                i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_SUCCESS',
                    product: n
                }),
                n
            );
        } catch (e) {
            throw (
                (i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_FAILURE',
                    productId: t,
                    error: new r.Hx(e)
                }),
                e)
            );
        }
    };
async function a(e, t, n) {
    let r = await o.Je(e, t, n);
    return (
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_UPDATE',
            product: r
        }),
        r
    );
}
async function s(e, t) {
    return (
        await o.mh(e, t),
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_DELETE',
            productId: t
        }),
        !0
    );
}
