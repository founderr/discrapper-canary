let l;
t.d(n, {
  Sz: function() {
    return C
  },
  Vg: function() {
    return D
  },
  an: function() {
    return A
  },
  bm: function() {
    return i
  },
  rh: function() {
    return Z
  }
}), t(653041), t(47120);
var i, s, r = t(317381),
  u = t(592125),
  a = t(271383),
  I = t(306680),
  o = t(699516),
  E = t(594174),
  c = t(55589),
  _ = t(483360),
  N = t(981631),
  d = t(245335),
  T = t(689938);
l = t(603617), (s = i || (i = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
let S = (e, n) => null != e && a.ZP.isMember(e, n),
  O = e => {
    let {
      omitUserIds: n,
      suggestedUserIds: t,
      maxRowsWithoutQuery: l,
      omitGuildId: i,
      shownUserIds: s,
      rows: r,
      counts: u
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != l && l > 0 && r.length >= l) break;
        if (n.has(e) || s.has(e)) continue;
        let t = E.default.getUser(e);
        !(null == t || S(i, t.id)) && (s.add(t.id), r.push({
          type: "FRIEND",
          item: t,
          isSuggested: !0
        }), u.numFriends++)
      }
  },
  f = e => {
    let {
      suggestedChannelIds: n,
      maxRowsWithoutQuery: t,
      rows: l,
      counts: i
    } = e;
    if (null != n)
      for (let e of n) {
        if (null != t && t > 0 && l.length >= t) break;
        let n = u.Z.getChannel(e);
        null != n && (l.push({
          type: "CHANNEL",
          item: n,
          isSuggested: !0
        }), i.numChannels++)
      }
  },
  h = e => {
    let {
      omitUserIds: n,
      maxRowsWithoutQuery: t,
      omitGuildId: l,
      shownUserIds: i,
      rows: s,
      counts: r,
      includeGroupDms: a,
      limit: o
    } = e, _ = 0;
    for (let e of c.Z.getPrivateChannelIds()) {
      if (null != t && t > 0 && s.length >= t || null != o && _ >= o) break;
      let c = u.Z.getChannel(e);
      if (null == c || !c.isPrivate()) continue;
      if (a && c.type === N.d4z.GROUP_DM) {
        s.push({
          type: "GROUP_DM",
          item: c,
          isSuggested: !1
        }), r.numGroupDms++, _++;
        continue
      }
      if (null == I.ZP.lastMessageId(c.id)) continue;
      let d = c.getRecipientId();
      if (null != d && !n.has(d) && !i.has(d)) {
        let e = E.default.getUser(d);
        if (null == e || e.bot || S(l, e.id)) continue;
        i.add(e.id), s.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), r.numDms++, _++
      }
    }
  },
  m = e => {
    let {
      omitUserIds: n,
      maxRowsWithoutQuery: t,
      omitGuildId: l,
      shownUserIds: i,
      rows: s,
      counts: r
    } = e;
    for (let e of o.Z.getFriendIDs()) {
      if (null != t && t > 0 && s.length >= t) break;
      if (n.has(e) || i.has(e)) continue;
      let u = E.default.getUser(e);
      !(null == u || S(l, u.id)) && (s.push({
        type: "FRIEND",
        item: u,
        isSuggested: !1
      }), r.numFriends++)
    }
  },
  g = e => {
    let {
      query: n,
      rows: t,
      counts: l,
      inviteTargetType: i
    } = e;
    i === d.Iq.EMBEDDED_APPLICATION && _.ZP.queryChannels({
      query: n,
      limit: 3,
      guildId: void 0
    }).forEach(e => {
      let {
        record: n
      } = e;
      t.push({
        type: "CHANNEL",
        item: n,
        isSuggested: !1
      }), l.numChannels++
    })
  },
  P = e => {
    let {
      query: n,
      omitUserIds: t,
      shownUserIds: l,
      rows: i,
      counts: s
    } = e;
    _.ZP.queryDMUsers({
      query: n,
      limit: 50
    }).forEach(e => {
      let {
        record: n
      } = e;
      if (t.has(n.id)) return;
      let r = u.Z.getDMFromUserId(n.id);
      if (null != r && null != I.ZP.lastMessageId(r)) l.add(n.id), i.push({
        type: "DM",
        item: n,
        isSuggested: !1
      }), s.numDms++
    })
  },
  M = e => {
    let {
      query: n,
      rows: t,
      counts: l
    } = e;
    _.ZP.queryGroupDMs({
      query: n,
      limit: 50,
      fuzzy: !1
    }).forEach(e => {
      let {
        record: n
      } = e;
      t.push({
        type: "GROUP_DM",
        item: n,
        isSuggested: !1
      }), l.numGroupDms++
    })
  },
  v = e => {
    let {
      query: n,
      rows: t,
      counts: l,
      omitUserIds: i,
      shownUserIds: s
    } = e;
    _.ZP.queryFriends({
      query: n,
      limit: 500,
      _fuzzy: !1
    }).forEach(e => {
      let {
        record: n
      } = e;
      if (!(i.has(n.id) || s.has(n.id))) s.add(n.id), t.push({
        type: "FRIEND",
        item: n,
        isSuggested: !1
      }), l.numFriends++
    })
  };

function A(e) {
  let {
    query: n,
    inviteTargetType: t,
    omitUserIds: l,
    suggestedUserIds: i,
    suggestedChannelIds: s,
    maxRowsWithoutQuery: r,
    omitGuildId: u
  } = e, a = new Set, I = [], o = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === n) {
    let e = {
      omitUserIds: l,
      maxRowsWithoutQuery: r,
      omitGuildId: u,
      shownUserIds: a,
      rows: I,
      counts: o
    };
    t === d.Iq.EMBEDDED_APPLICATION && (h({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), f({
      ...e,
      suggestedChannelIds: s
    })), O({
      ...e,
      suggestedUserIds: i
    }), h({
      ...e,
      includeGroupDms: !0
    }), m(e)
  } else {
    let e = {
      query: n,
      rows: I,
      counts: o
    };
    t === d.Iq.EMBEDDED_APPLICATION && g({
      ...e,
      inviteTargetType: t
    }), P({
      ...e,
      omitUserIds: l,
      shownUserIds: a
    }), M(e), v({
      ...e,
      omitUserIds: l,
      shownUserIds: a
    })
  }
  return {
    rows: I,
    counts: o
  }
}

function Z(e, n) {
  for (let t of c.Z.getPrivateChannelIds()) {
    let l = u.Z.getChannel(t);
    if (null == l || !l.isDM() || null == I.ZP.lastMessageId(l.id)) continue;
    let i = l.getRecipientId();
    if (null != i && !e.has(i)) {
      let e = E.default.getUser(i);
      if (null == e || e.bot || S(n, e.id)) continue;
      return e
    }
  }
  return null
}

function C(e) {
  let {
    channel: n,
    inviteTargetType: t,
    applicationId: l
  } = e;
  if (t === d.Iq.EMBEDDED_APPLICATION) {
    if (null != n) {
      for (let e of r.ZP.getEmbeddedActivitiesForChannel(n.id))
        if (e.applicationId === l) return new Set(e.userIds)
    }
  }
  return new Set
}
let R = {
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    NEVER: "never"
  },
  U = {
    [l.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: R.MINUTES
    },
    [l.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: R.HOURS
    },
    [l.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: R.HOURS
    },
    [l.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: R.HOURS
    },
    [l.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: R.DAYS
    },
    [l.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: R.DAYS
    },
    [l.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: R.NEVER
    }
  };

function D(e, n) {
  let t = parseInt(n, 10),
    l = 0 === t,
    i = U[e].value;
  switch (U[e].type) {
    case R.MINUTES:
      if (l) return T.Z.Messages.INVITE_EXPIRES_MINUTES;
      return T.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: t
      });
    case R.HOURS:
      if (l) return T.Z.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: i
      });
      return T.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: i,
        numUses: t
      });
    case R.DAYS:
      if (l) return T.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: i
      });
      return T.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: i,
        numUses: t
      });
    case R.NEVER:
      if (l) return T.Z.Messages.INVITE_EXPIRES_NEVER;
      return T.Z.Messages.INVITE_EXPIRES_USES.format({
        numUses: t
      });
    default:
      return ""
  }
}
n.ZP = {
  getMaxAgeOptions: l.MAX_AGE_OPTIONS,
  getMaxUsesOptions: l.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_12_HOURS: l.INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: l.INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_1_HOUR: l.INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: l.INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: l.INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: l.INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: l.INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: l.INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: l.INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: l.INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: l.INVITE_OPTIONS_100_TIMES
}