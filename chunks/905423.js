var l = t(266067),
  a = t(652874),
  r = t(731965),
  i = t(981631);

function s(e) {
  let n = (0, l.LX)(null != e ? e : '', {
path: i.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != n) {
let {
  guildId: e,
  channelId: t
} = n.params;
return {
  guildId: e === i.ME ? null : e,
  channelId: null != t ? t : null
};
  }
  let t = (0, l.LX)(null != e ? e : '', {
path: i.Z5c.GUILD_BOOSTING_MARKETING(':guildId')
  });
  return null != t ? {
guildId: t.params.guildId,
channelId: null
  } : {
guildId: null,
channelId: null
  };
}
n.Z = (0, a.Z)(e => ({
  path: null,
  basePath: '/',
  guildId: null,
  channelId: null,
  updatePath(n) {
let {
  guildId: t,
  channelId: l
} = s(n);
(0, r.j)(() => e({
  path: n,
  guildId: t,
  channelId: l
}));
  },
  resetPath(n) {
let {
  guildId: t,
  channelId: l
} = s(n);
(0, r.j)(() => e({
  path: null,
  guildId: t,
  channelId: l,
  basePath: n
}));
  }
}));