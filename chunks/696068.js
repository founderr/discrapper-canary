"use strict";
n.r(t), n.d(t, {
  getActivityVoiceChannelSuggestion: function() {
    return f
  },
  useSelectVoiceChannelOptions: function() {
    return I
  }
}), n("653041"), n("47120");
var s = n("442837"),
  i = n("592125"),
  u = n("324067"),
  a = n("430824"),
  l = n("496675"),
  r = n("944486"),
  c = n("938475"),
  o = n("823379"),
  g = n("374065"),
  p = n("981631");

function d(e, t, n, s) {
  let i = (0, g.getEmbeddedActivityLaunchability)({
    channelId: e.id,
    ChannelStore: t,
    GuildStore: n,
    PermissionStore: s
  });
  return e.type === p.ChannelTypes.GUILD_VOICE && i === g.EmbeddedActivityLaunchability.CAN_LAUNCH || !1
}

function f(e) {
  var t, n, s;
  let {
    guildId: g,
    allowGdmActivityChannelSuggestion: p = !1
  } = e;
  if (null == g && !p) return null;
  let f = r.default.getVoiceChannelId(),
    m = i.default.getChannel(f);
  if (null != m && (null != m.guild_id || p)) return m.id;
  let I = [];
  for (let e of Object.values(u.default.getCategories(g)))
    for (let t of e) d(t.channel, i.default, a.default, l.default) && I.push({
      channel: t.channel,
      users: c.default.getVoiceStatesForChannel(t.channel).filter(o.isNotNullish)
    });
  return null !== (s = null === (n = I.sort((e, t) => e.users.length > t.users.length ? -1 : 1)[0]) || void 0 === n ? void 0 : null === (t = n.channel) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
}

function m(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
  return !0
}

function I(e) {
  return (0, s.useStateFromStores)([u.default, c.default, i.default, a.default, l.default], () => {
    if (null == e) return [];
    let t = [];
    return Object.values(u.default.getCategories(e)).forEach(e => {
      e.forEach(e => {
        let {
          channel: n
        } = e;
        d(n, i.default, a.default, l.default) && t.push(n)
      })
    }), t.map(e => {
      let t = c.default.getVoiceStatesForChannel(e).filter(o.isNotNullish);
      return {
        value: {
          channel: e,
          users: t
        },
        label: e.name
      }
    }).sort((e, t) => e.value.users.length > t.value.users.length ? -1 : 1)
  }, [e], m)
}