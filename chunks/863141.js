r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(789020);
function a(e) {
    let { id: n, username: r, discriminator: i, globalName: a, avatar: s, avatarDecoration: o, bot: l, flags: u, premiumType: c } = e;
    return {
        id: n,
        username: r,
        discriminator: i,
        global_name: a,
        avatar: s,
        avatar_decoration_data:
            null != o
                ? {
                      asset: o.asset,
                      sku_id: o.skuId
                  }
                : null,
        bot: l,
        flags: u,
        premium_type: null != c ? c : 0
    };
}
