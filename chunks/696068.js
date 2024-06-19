i.d(n, {
  F: function() {
    return v
  },
  d: function() {
    return x
  }
}), i(653041), i(47120);
var a = i(442837),
  l = i(592125),
  t = i(324067),
  s = i(430824),
  r = i(496675),
  o = i(944486),
  u = i(979651),
  c = i(938475),
  d = i(823379),
  g = i(374065),
  p = i(981631);

function m(e, n, i, a, l) {
  let t = (0, g.e4)({
    channelId: e.id,
    ChannelStore: n,
    GuildStore: i,
    PermissionStore: a,
    VoiceStateStore: l
  });
  return e.type === p.d4z.GUILD_VOICE && t === g.jy.CAN_LAUNCH || !1
}

function x(e) {
  var n, i, a;
  let {
    guildId: g,
    allowGdmActivityChannelSuggestion: p = !1
  } = e;
  if (null == g && !p) return null;
  let x = o.Z.getVoiceChannelId(),
    f = l.Z.getChannel(x);
  if (null != f && (null != f.guild_id || p)) return f.id;
  let v = [];
  for (let e of Object.values(t.Z.getCategories(g)))
    for (let n of e) m(n.channel, l.Z, s.Z, r.Z, u.Z) && v.push({
      channel: n.channel,
      users: c.ZP.getVoiceStatesForChannel(n.channel).filter(d.lm)
    });
  return null !== (a = null === (i = v.sort((e, n) => e.users.length > n.users.length ? -1 : 1)[0]) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : null
}

function f(e, n) {
  if (e.length !== n.length) return !1;
  for (let i = 0; i < e.length; i++)
    if (e[i].value.channel.id !== n[i].value.channel.id) return !1;
  return !0
}

function v(e) {
  return (0, a.e7)([t.Z, l.Z, s.Z, r.Z, u.Z, c.ZP], () => {
    if (null == e) return [];
    let n = [];
    return Object.values(t.Z.getCategories(e)).forEach(e => {
      e.forEach(e => {
        let {
          channel: i
        } = e;
        m(i, l.Z, s.Z, r.Z, u.Z) && n.push(i)
      })
    }), n.map(e => {
      let n = c.ZP.getVoiceStatesForChannel(e).filter(d.lm);
      return {
        value: {
          channel: e,
          users: n
        },
        label: e.name
      }
    }).sort((e, n) => e.value.users.length > n.value.users.length ? -1 : 1)
  }, [e], f)
}