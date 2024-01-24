"use strict";
n.r(t), n.d(t, {
  guessGuildModeWithRemoteData: function() {
    return c
  },
  guessGuildModeWithLocalData: function() {
    return m
  }
}), n("808653");
var i = n("917351"),
  a = n.n(i),
  l = n("233069"),
  s = n("42203"),
  r = n("319781"),
  o = n("525065"),
  u = n("718517"),
  d = n("380353");

function c(e, t, n, i) {
  var a, l, r;
  let u = s.default.getMutableGuildChannelsForGuild(e.id),
    c = i.filter(e => e.channel_id in u),
    m = null !== (a = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
    h = o.default.getMemberCount(e.id),
    g = f("year", i, c, e => {
      var t;
      return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
    }),
    _ = f("one month", i, c, e => {
      var t;
      return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
    }),
    p = f("three month", i, c, e => {
      var t;
      return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
    }),
    S = f("six month", i, c, e => {
      var t;
      return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
    }),
    v = [_, p, S, g],
    T = 0,
    E = 0;
  c.forEach(e => {
    var t;
    T++, E += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
  });
  let N = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (l = m.everyones) && void 0 !== l ? l : 0], "\n- Messages: ").concat(d.PainLevel[null !== (r = m.messages) && void 0 !== r ? r : 0], "\n- Size: ").concat(h, "\n**Remote**:\n- Channels: ").concat(T, "\n- AllVisits: ").concat(v.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(v.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(v.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(v.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(E, "\n"),
    I = p.guildOpens >= .02 * p.totalOpensAcrossAllServers;
  return m.messages !== d.PainLevel.High || I ? [d.Mode.KeepAsIs, I, "KeepAsIs" + N] : [d.Mode.UseGreyDot, I, "UseGreyDot" + N]
}

function f(e, t, n, i) {
  let l = t.reduce((e, t) => e + i(t), 0),
    s = n.reduce((e, t) => e + i(t), 0),
    r = a.sortBy(n, i).reverse()[0],
    o = null == r ? 0 : i(r),
    u = (o / s * 100).toFixed(1);
  return {
    label: e,
    totalOpensAcrossAllServers: l,
    guildOpens: s,
    biggestChannel: o,
    biggestChannelFormatted: u
  }
}

function m(e, t) {
  var n, i;
  let a = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
    s = null !== (i = o.default.getMemberCount(e.id)) && void 0 !== i ? i : 0,
    c = Date.now() - u.default.Millis.DAYS_30,
    f = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof l.ChannelRecordBase && t.guild_id === e.id),
    m = f.filter(e => {
      var t, n;
      let i = null !== (n = null === (t = r.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
      return 0 !== i.length && i[i.length - 1] >= c
    }),
    h = m.length >= 5,
    g = f.reduce((e, t) => {
      var n, i;
      return e + (null !== (i = null === (n = r.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0)
    }, 0),
    _ = "\n- **Local**:\n    - Guild Visits: ".concat(g, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(m.length, "\n");
  return a.messages === d.PainLevel.High || s > 1e3 ? [d.Mode.UseGreyDot, h, "SuggestGreyDot" + _] : [d.Mode.KeepAsIs, h, "KeepAsIs" + _]
}