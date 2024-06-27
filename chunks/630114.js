"use strict";
n.d(t, {
  Z: function() {
    return S
  }
}), n(653041), n(47120), n(789020), n(724458);
var i = n(392711),
  r = n.n(i),
  s = n(131704),
  o = n(680089),
  a = n(592125),
  l = n(480294),
  u = n(580005),
  _ = n(496675),
  c = n(9156),
  d = n(70956),
  E = n(630388),
  I = n(823379),
  T = n(789662),
  h = n(981631),
  f = n(526761);

function S(e, t, n, i, E) {
  if (t !== T.AR.UseGreyDot) return [{
    label: "Setting the guild to a white dot unread",
    apply: (e, t) => {
      A(e, t, !0)
    }
  }];
  let f = [],
    S = Object.values(a.Z.getMutableGuildChannelsForGuild(e.id)).filter(e => _.Z.can(h.Plq.VIEW_CHANNEL, e));
  return f.push(... function(e, t) {
    if (!(c.ZP.isMuted(e.id) && !c.ZP.isTemporarilyMuted(e.id))) return [];
    let n = [{
        label: "Unmuting the guild and marking it as read",
        apply: e => {
          e.muted = !1, e.mute_config = null
        },
        needsMarkedAsRead: !0
      }],
      i = t.filter(t => c.ZP.getChannelMessageNotifications(e.id, t.id) === h.bL.ALL_MESSAGES);
    return i.length > 0 && n.push({
      label: "Setting ".concat(i.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
      debug: i.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of i) N(e, t, n.id, e => {
          e.message_notifications = h.bL.ONLY_MENTIONS
        })
      }
    }), n
  }(e, S)), f.push(function(e) {
    if (c.ZP.getMessageNotifications(e.id) === h.bL.ALL_MESSAGES) return {
      label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
      apply: e => {
        e.message_notifications = h.bL.ONLY_MENTIONS
      }
    }
  }(e)), f.push(function() {
    return {
      label: "Setting the guild to a grey dot unread",
      apply: (e, t) => {
        A(e, t, !1)
      }
    }
  }()), f.push(... function(e) {
    let t = [],
      [n, i] = r()(e).filter(e => e.type === h.d4z.GUILD_ANNOUNCEMENT).partition(e => c.ZP.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && c.ZP.isChannelMuted(e.guild_id, e.parent_id)).value();
    return n.length > 0 && t.push({
      label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
      debug: n.map(e => "\n    - #".concat(e.name)).join("")
    }), i.length > 0 && t.push({
      label: "Setting ".concat(i.length, " announcement channels to white-dot"),
      debug: i.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of i) m(e, t, n.id, !0)
      }
    }), t
  }(S)), f.push(... function(e) {
    let t = [],
      n = [];
    for (let t of e) c.ZP.isChannelMuted(t.guild_id, t.id) && t.isCategory() && !o.Z.isCollapsed(t.id) && n.push(t);
    return n.length > 0 && t.push({
      label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
      debug: n.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let i of n) m(e, t, i.id, !1), N(e, t, i.id, e => {
          e.muted = !1, e.mute_config = null
        })
      }
    }), t
  }(S)), f.push(... function(e) {
    let t = [],
      n = [],
      i = [];
    return e.forEach(e => {
      if (c.ZP.isChannelMuted(e.guild_id, e.id)) return;
      let t = c.ZP.getChannelMessageNotifications(e.guild_id, e.id);
      t === h.bL.ALL_MESSAGES ? n.push(e) : t === h.bL.ONLY_MENTIONS && i.push(e)
    }), n.length > 0 && t.push({
      label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
      debug: n.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let i of n) m(e, t, i.id, !0)
      }
    }), i.length > 0 && t.push({
      label: "Setting ".concat(i.length, " channels to grey-dot since they were explicitly Mentions Only"),
      debug: i.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of i) m(e, t, n.id, !1)
      }
    }), t
  }(S)), l.Z.hasConsented(h.pjP.PERSONALIZATION) ? f.push(... function(e, t, n, i, s) {
    if (c.ZP.isMuted(e.id) && !c.ZP.isTemporarilyMuted(e.id)) return [];
    let o = new Set(t.map(e => e.id)),
      a = i.filter(e => o.has(e.channel_id)),
      l = r().keyBy(a, "channel_id"),
      u = Math.max(n.messages === T.XR.High ? s.frecency.yearMinOpensLargeServer : s.frecency.yearMinOpensSmallServer, a.reduce((e, t) => {
        var n;
        return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
      }, 0) * s.frecency.totalOpensPercent),
      _ = Math.max(s.frecency.monthMinOpens, a.reduce((e, t) => {
        var n;
        return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
      }, 0) * s.frecency.totalOpensPercent),
      d = [],
      E = [];
    t.forEach(e => {
      var t, n, i, r;
      let s = null !== (t = l[e.id]) && void 0 !== t ? t : {};
      Number(null !== (n = s.num_year_opens) && void 0 !== n ? n : 0) > u || Number(null !== (i = s.num_month_opens) && void 0 !== i ? i : 0) > _ ? d.push(e) : Number(null !== (r = s.num_three_month_opens) && void 0 !== r ? r : 0) > 2 && E.push(e)
    });
    let I = [];
    return d.length > 0 && I.push({
      label: "Setting ".concat(d.length, " channels to white-dot since they are recent and frequently viewed"),
      debug: d.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(l[e.id]), ")")).join(""),
      apply: (e, t) => {
        for (let n of d) m(e, t, n.id, !0)
      }
    }), E.length > 0 && I.push({
      label: "NOT setting ".concat(E.length, " channels to white-dot because they were only viewed a little."),
      debug: E.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(l[e.id]), ")")).join("")
    }), I
  }(e, S, n, i, E)) : f.push(... function(e, t) {
    if (c.ZP.isMuted(e.id) && !c.ZP.isTemporarilyMuted(e.id)) return [];
    let n = [],
      i = new Set(t.map(e => e.id)),
      r = Date.now() - d.Z.Millis.DAYS_30,
      o = u.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof s.Sf && i.has(e.id)).filter(e => {
        var t, n;
        let i = null !== (n = null === (t = u.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
        return 0 !== i.length && i[i.length - 1] >= r
      });
    return o.length > 0 && n.push({
      label: "Setting ".concat(o.length, " channels to white-dot since they are recent and frequently viewed"),
      debug: o.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of o) m(e, t, n.id, !0)
      }
    }), n
  }(e, S)), f.filter(I.lm)
}

function A(e, t, n) {
  var i, r;
  e.flags = (0, E.mB)(null !== (r = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== r ? r : 0, f.vc.UNREADS_ALL_MESSAGES, n), e.flags = (0, E.mB)(e.flags, f.vc.UNREADS_ONLY_MENTIONS, !n)
}

function N(e, t, n, i) {
  var s, o, a, l;
  let u = null !== (a = null === (s = e.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== a ? a : {};
  i(u, null !== (l = null === (o = t.channel_overrides) || void 0 === o ? void 0 : o[n]) && void 0 !== l ? l : {}), !r().isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u)
}

function m(e, t, n, i) {
  N(e, t, n, (e, t) => {
    var n, r;
    e.flags = (0, E.mB)(null !== (r = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== r ? r : 0, f.ic.UNREADS_ALL_MESSAGES, i), e.flags = (0, E.mB)(e.flags, f.ic.UNREADS_ONLY_MENTIONS, !i)
  })
}