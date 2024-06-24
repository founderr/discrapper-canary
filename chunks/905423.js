var a = t(266067),
  n = t(652874),
  i = t(981631);

function l(e) {
  let r = (0, a.LX)(null != e ? e : "", {
    path: i.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
  });
  if (null != r) {
    let {
      guildId: e,
      channelId: t
    } = r.params;
    return {
      guildId: e === i.ME ? null : e,
      channelId: null != t ? t : null
    }
  }
  let t = (0, a.LX)(null != e ? e : "", {
    path: i.Z5c.GUILD_BOOSTING_MARKETING(":guildId")
  });
  return null != t ? {
    guildId: t.params.guildId,
    channelId: null
  } : {
    guildId: null,
    channelId: null
  }
}
r.Z = (0, n.Z)(e => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(r) {
    let {
      guildId: t,
      channelId: a
    } = l(r);
    e({
      path: r,
      guildId: t,
      channelId: a
    })
  },
  resetPath(r) {
    let {
      guildId: t,
      channelId: a
    } = l(r);
    e({
      path: null,
      guildId: t,
      channelId: a,
      basePath: r
    })
  }
}))