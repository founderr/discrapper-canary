"use strict";
let l;
n.r(t), n.d(t, {
  RowTypes: function() {
    return a
  },
  generateRowsForQuery: function() {
    return L
  },
  getMostRecentDMedUser: function() {
    return O
  },
  getUsersAlreadyJoined: function() {
    return A
  },
  maxAgeString: function() {
    return y
  },
  default: function() {
    return D
  }
}), n("424973"), n("222007");
var a, i, s = n("191225"),
  r = n("42203"),
  u = n("26989"),
  d = n("660478"),
  o = n("27618"),
  c = n("697218"),
  f = n("287850"),
  E = n("25292"),
  I = n("49111"),
  _ = n("91366"),
  h = n("782340");
l = n("591205"), (i = a || (a = {})).GROUP_DM = "GROUP_DM", i.DM = "DM", i.FRIEND = "FRIEND", i.CHANNEL = "CHANNEL";
let T = (e, t) => null != e && u.default.isMember(e, t),
  v = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: n,
      maxRowsWithoutQuery: l,
      omitGuildId: a,
      shownUserIds: i,
      rows: s,
      counts: r
    } = e;
    if (null != n)
      for (let e of n) {
        if (null != l && l > 0 && s.length >= l) break;
        if (t.has(e) || i.has(e)) continue;
        let n = c.default.getUser(e);
        !(null == n || T(a, n.id)) && (i.add(n.id), s.push({
          type: "FRIEND",
          item: n,
          isSuggested: !0
        }), r.numFriends++)
      }
  },
  N = e => {
    let {
      suggestedChannelIds: t,
      maxRowsWithoutQuery: n,
      rows: l,
      counts: a
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != n && n > 0 && l.length >= n) break;
        let t = r.default.getChannel(e);
        null != t && (l.push({
          type: "CHANNEL",
          item: t,
          isSuggested: !0
        }), a.numChannels++)
      }
  },
  m = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: a,
      rows: i,
      counts: s,
      includeGroupDms: u,
      limit: o
    } = e, E = 0;
    for (let e of f.default.getPrivateChannelIds()) {
      if (null != n && n > 0 && i.length >= n || null != o && E >= o) break;
      let f = r.default.getChannel(e);
      if (null == f || !f.isPrivate()) continue;
      if (u && f.type === I.ChannelTypes.GROUP_DM) {
        i.push({
          type: "GROUP_DM",
          item: f,
          isSuggested: !1
        }), s.numGroupDms++, E++;
        continue
      }
      let _ = d.default.lastMessageId(f.id);
      if (null == _) continue;
      let h = f.getRecipientId();
      if (null != h && !t.has(h) && !a.has(h)) {
        let e = c.default.getUser(h);
        if (null == e || e.bot || T(l, e.id)) continue;
        a.add(e.id), i.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), s.numDms++, E++
      }
    }
  },
  S = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: a,
      rows: i,
      counts: s
    } = e;
    for (let e of o.default.getFriendIDs()) {
      if (null != n && n > 0 && i.length >= n) break;
      if (t.has(e) || a.has(e)) continue;
      let r = c.default.getUser(e);
      !(null == r || T(l, r.id)) && (i.push({
        type: "FRIEND",
        item: r,
        isSuggested: !1
      }), s.numFriends++)
    }
  },
  g = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      inviteTargetType: a
    } = e;
    a === _.InviteTargetTypes.EMBEDDED_APPLICATION && E.default.queryChannels({
      query: t,
      limit: 3,
      guildId: void 0
    }).forEach(e => {
      let {
        record: t
      } = e;
      n.push({
        type: "CHANNEL",
        item: t,
        isSuggested: !1
      }), l.numChannels++
    })
  },
  C = e => {
    let {
      query: t,
      omitUserIds: n,
      shownUserIds: l,
      rows: a,
      counts: i
    } = e;
    E.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (n.has(t.id)) return;
      let s = r.default.getDMFromUserId(t.id);
      if (null == s) return;
      let u = d.default.lastMessageId(s);
      null != u && (l.add(t.id), a.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), i.numDms++)
    })
  },
  p = e => {
    let {
      query: t,
      rows: n,
      counts: l
    } = e;
    E.default.queryGroupDMs({
      query: t,
      limit: 50,
      fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      n.push({
        type: "GROUP_DM",
        item: t,
        isSuggested: !1
      }), l.numGroupDms++
    })
  },
  x = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      omitUserIds: a,
      shownUserIds: i
    } = e;
    E.default.queryFriends({
      query: t,
      limit: 500,
      _fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      !(a.has(t.id) || i.has(t.id)) && (i.add(t.id), n.push({
        type: "FRIEND",
        item: t,
        isSuggested: !1
      }), l.numFriends++)
    })
  };

function L(e) {
  let {
    query: t,
    inviteTargetType: n,
    omitUserIds: l,
    suggestedUserIds: a,
    suggestedChannelIds: i,
    maxRowsWithoutQuery: s,
    omitGuildId: r
  } = e, u = new Set, d = [], o = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: l,
      maxRowsWithoutQuery: s,
      omitGuildId: r,
      shownUserIds: u,
      rows: d,
      counts: o
    };
    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && (m({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), N({
      ...e,
      suggestedChannelIds: i
    })), v({
      ...e,
      suggestedUserIds: a
    }), m({
      ...e,
      includeGroupDms: !0
    }), S(e)
  } else {
    let e = {
      query: t,
      rows: d,
      counts: o
    };
    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && g({
      ...e,
      inviteTargetType: n
    }), C({
      ...e,
      omitUserIds: l,
      shownUserIds: u
    }), p(e), x({
      ...e,
      omitUserIds: l,
      shownUserIds: u
    })
  }
  return {
    rows: d,
    counts: o
  }
}

function O(e, t) {
  for (let n of f.default.getPrivateChannelIds()) {
    let l = r.default.getChannel(n);
    if (null == l || !l.isDM() || null == d.default.lastMessageId(l.id)) continue;
    let a = l.getRecipientId();
    if (null != a && !e.has(a)) {
      let e = c.default.getUser(a);
      if (null == e || e.bot || T(t, e.id)) continue;
      return e
    }
  }
  return null
}

function A(e) {
  let {
    channel: t,
    inviteTargetType: n,
    applicationId: l
  } = e;
  if (n === _.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of s.default.getEmbeddedActivitiesForChannel(t.id))
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
  M = {
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
    [l.INVITE_OPTIONS_30_DAYS.value]: {
      value: 30,
      type: R.DAYS
    },
    [l.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: R.NEVER
    }
  };

function y(e, t) {
  let n = parseInt(t, 10),
    l = 0 === n,
    a = M[e].value,
    i = M[e].type;
  switch (i) {
    case R.MINUTES:
      if (l) return h.default.Messages.INVITE_EXPIRES_MINUTES;
      return h.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: n
      });
    case R.HOURS:
      if (l) return h.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: a
      });
      return h.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: a,
        numUses: n
      });
    case R.DAYS:
      if (l) return h.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: a
      });
      return h.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: a,
        numUses: n
      });
    case R.NEVER:
      if (l) return h.default.Messages.INVITE_EXPIRES_NEVER;
      return h.default.Messages.INVITE_EXPIRES_USES.format({
        numUses: n
      });
    default:
      return ""
  }
}
var D = {
  getMaxAgeOptions: l.MAX_AGE_OPTIONS,
  getMaxUsesOptions: l.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_30_DAYS: l.INVITE_OPTIONS_30_DAYS,
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