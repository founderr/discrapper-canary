"use strict";
n.r(t), n.d(t, {
  getActivityVoiceChannelSuggestion: function() {
    return m
  },
  useSelectVoiceChannelOptions: function() {
    return S
  }
}), n("653041"), n("47120");
var s = n("442837"),
  i = n("592125"),
  a = n("324067"),
  u = n("430824"),
  l = n("496675"),
  r = n("944486"),
  c = n("979651"),
  o = n("938475"),
  g = n("823379"),
  d = n("374065"),
  p = n("981631");

function f(e, t, n, s, i) {
  let a = (0, d.getEmbeddedActivityLaunchability)({
    channelId: e.id,
    ChannelStore: t,
    GuildStore: n,
    PermissionStore: s,
    VoiceStateStore: i
  });
  return e.type === p.ChannelTypes.GUILD_VOICE && a === d.EmbeddedActivityLaunchability.CAN_LAUNCH || !1
}

function m(e) {
  var t, n, s;
  let {
    guildId: d,
    allowGdmActivityChannelSuggestion: p = !1
  } = e;
  if (null == d && !p) return null;
  let m = r.default.getVoiceChannelId(),
    I = i.default.getChannel(m);
  if (null != I && (null != I.guild_id || p)) return I.id;
  let S = [];
  for (let e of Object.values(a.default.getCategories(d)))
    for (let t of e) f(t.channel, i.default, u.default, l.default, c.default) && S.push({
      channel: t.channel,
      users: o.default.getVoiceStatesForChannel(t.channel).filter(g.isNotNullish)
    });
  return null !== (s = null === (n = S.sort((e, t) => e.users.length > t.users.length ? -1 : 1)[0]) || void 0 === n ? void 0 : null === (t = n.channel) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
}

function I(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
  return !0
}

function S(e) {
  return (0, s.useStateFromStores)([a.default, i.default, u.default, l.default, c.default, o.default], () => {
    if (null == e) return [];
    let t = [];
    return Object.values(a.default.getCategories(e)).forEach(e => {
      e.forEach(e => {
        let {
          channel: n
        } = e;
        f(n, i.default, u.default, l.default, c.default) && t.push(n)
      })
    }), t.map(e => {
      let t = o.default.getVoiceStatesForChannel(e).filter(g.isNotNullish);
      return {
        value: {
          channel: e,
          users: t
        },
        label: e.name
      }
    }).sort((e, t) => e.value.users.length > t.value.users.length ? -1 : 1)
  }, [e], I)
}