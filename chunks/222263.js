n.d(t, {
  Z: function() {
    return s
  }
});

function s(e) {
  let {
    userId: t,
    nick: n,
    guildId: s,
    avatar: i,
    avatarDecoration: l,
    banner: a,
    bio: r,
    pronouns: o,
    colorString: c
  } = e;
  return {
    user_id: t,
    nick: n,
    guild_id: s,
    avatar: i,
    avatar_decoration_data: null != l ? {
      asset: l.asset,
      sku_id: l.skuId
    } : null,
    banner: a,
    bio: r,
    pronouns: o,
    color_string: c
  }
}