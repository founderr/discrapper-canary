"use strict";
n.r(t), n.d(t, {
  getActivityVoiceChannelSuggestion: function() {
    return m
  },
  useSelectVoiceChannelOptions: function() {
    return I
  }
}), n("653041"), n("47120");
var i = n("442837"),
  s = n("592125"),
  u = n("324067"),
  a = n("430824"),
  l = n("496675"),
  r = n("944486"),
  c = n("979651"),
  o = n("938475"),
  g = n("823379"),
  d = n("374065"),
  p = n("981631");

function f(e, t, n, i, s) {
  let u = (0, d.getEmbeddedActivityLaunchability)({
    channelId: e.id,
    ChannelStore: t,
    GuildStore: n,
    PermissionStore: i,
    VoiceStateStore: s
  });
  return e.type === p.ChannelTypes.GUILD_VOICE && u === d.EmbeddedActivityLaunchability.CAN_LAUNCH || !1
}

function m(e) {
  var t, n, i;
  let {
    guildId: d,
    allowGdmActivityChannelSuggestion: p = !1
  } = e;
  if (null == d && !p) return null;
  let m = r.default.getVoiceChannelId(),
    S = s.default.getChannel(m);
  if (null != S && (null != S.guild_id || p)) return S.id;
  let I = [];
  for (let e of Object.values(u.default.getCategories(d)))
    for (let t of e) f(t.channel, s.default, a.default, l.default, c.default) && I.push({
      channel: t.channel,
      users: o.default.getVoiceStatesForChannel(t.channel).filter(g.isNotNullish)
    });
  return null !== (i = null === (n = I.sort((e, t) => e.users.length > t.users.length ? -1 : 1)[0]) || void 0 === n ? void 0 : null === (t = n.channel) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null
}

function S(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
  return !0
}

function I(e) {
  return (0, i.useStateFromStores)([u.default, s.default, a.default, l.default, c.default, o.default], () => {
    if (null == e) return [];
    let t = [];
    return Object.values(u.default.getCategories(e)).forEach(e => {
      e.forEach(e => {
        let {
          channel: n
        } = e;
        f(n, s.default, a.default, l.default, c.default) && t.push(n)
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
  }, [e], S)
}