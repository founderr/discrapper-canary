var l = t(266067),
  i = t(652874),
  a = t(981631);

function r(e) {
  let n = (0, l.LX)(null != e ? e : '', {
path: a.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != n) {
let {
  guildId: e,
  channelId: t
} = n.params;
return {
  guildId: e === a.ME ? null : e,
  channelId: null != t ? t : null
};
  }
  let t = (0, l.LX)(null != e ? e : '', {
path: a.Z5c.GUILD_BOOSTING_MARKETING(':guildId')
  });
  return null != t ? {
guildId: t.params.guildId,
channelId: null
  } : {
guildId: null,
channelId: null
  };
}
n.Z = (0, i.Z)(e => ({
  path: null,
  basePath: '/',
  guildId: null,
  channelId: null,
  updatePath(n) {
let {
  guildId: t,
  channelId: l
} = r(n);
e({
  path: n,
  guildId: t,
  channelId: l
});
  },
  resetPath(n) {
let {
  guildId: t,
  channelId: l
} = r(n);
e({
  path: null,
  guildId: t,
  channelId: l,
  basePath: n
});
  }
}));