n.d(t, {
    Z: function () {
        return i;
    }
});
function i(e) {
    let { userId: t, nick: n, guildId: i, avatar: r, avatarDecoration: a, banner: l, bio: s, pronouns: o, colorString: c } = e;
    return {
        user_id: t,
        nick: n,
        guild_id: i,
        avatar: r,
        avatar_decoration_data:
            null != a
                ? {
                      asset: a.asset,
                      sku_id: a.skuId
                  }
                : null,
        banner: l,
        bio: s,
        pronouns: o,
        color_string: c
    };
}
