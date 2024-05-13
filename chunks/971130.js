"use strict";
let l;
n.r(t), n.d(t, {
  RowTypes: function() {
    return a
  },
  generateRowsForQuery: function() {
    return R
  },
  getMostRecentDMedUser: function() {
    return A
  },
  getUsersAlreadyJoined: function() {
    return p
  },
  maxAgeString: function() {
    return U
  }
}), n("653041"), n("47120");
var a, i, u = n("317381"),
  s = n("592125"),
  r = n("271383"),
  d = n("306680"),
  o = n("699516"),
  I = n("594174"),
  c = n("55589"),
  f = n("483360"),
  E = n("981631"),
  _ = n("245335"),
  N = n("689938");
l = n("603617"), (i = a || (a = {})).GROUP_DM = "GROUP_DM", i.DM = "DM", i.FRIEND = "FRIEND", i.CHANNEL = "CHANNEL";
let T = (e, t) => null != e && r.default.isMember(e, t),
  S = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: n,
      maxRowsWithoutQuery: l,
      omitGuildId: a,
      shownUserIds: i,
      rows: u,
      counts: s
    } = e;
    if (null != n)
      for (let e of n) {
        if (null != l && l > 0 && u.length >= l) break;
        if (t.has(e) || i.has(e)) continue;
        let n = I.default.getUser(e);
        !(null == n || T(a, n.id)) && (i.add(n.id), u.push({
          type: "FRIEND",
          item: n,
          isSuggested: !0
        }), s.numFriends++)
      }
  },
  O = e => {
    let {
      suggestedChannelIds: t,
      maxRowsWithoutQuery: n,
      rows: l,
      counts: a
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != n && n > 0 && l.length >= n) break;
        let t = s.default.getChannel(e);
        null != t && (l.push({
          type: "CHANNEL",
          item: t,
          isSuggested: !0
        }), a.numChannels++)
      }
  },
  h = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: a,
      rows: i,
      counts: u,
      includeGroupDms: r,
      limit: o
    } = e, f = 0;
    for (let e of c.default.getPrivateChannelIds()) {
      if (null != n && n > 0 && i.length >= n || null != o && f >= o) break;
      let c = s.default.getChannel(e);
      if (null == c || !c.isPrivate()) continue;
      if (r && c.type === E.ChannelTypes.GROUP_DM) {
        i.push({
          type: "GROUP_DM",
          item: c,
          isSuggested: !1
        }), u.numGroupDms++, f++;
        continue
      }
      if (null == d.default.lastMessageId(c.id)) continue;
      let _ = c.getRecipientId();
      if (null != _ && !t.has(_) && !a.has(_)) {
        let e = I.default.getUser(_);
        if (null == e || e.bot || T(l, e.id)) continue;
        a.add(e.id), i.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), u.numDms++, f++
      }
    }
  },
  v = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: a,
      rows: i,
      counts: u
    } = e;
    for (let e of o.default.getFriendIDs()) {
      if (null != n && n > 0 && i.length >= n) break;
      if (t.has(e) || a.has(e)) continue;
      let s = I.default.getUser(e);
      !(null == s || T(l, s.id)) && (i.push({
        type: "FRIEND",
        item: s,
        isSuggested: !1
      }), u.numFriends++)
    }
  },
  g = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      inviteTargetType: a
    } = e;
    a === _.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
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
  m = e => {
    let {
      query: t,
      omitUserIds: n,
      shownUserIds: l,
      rows: a,
      counts: i
    } = e;
    f.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (n.has(t.id)) return;
      let u = s.default.getDMFromUserId(t.id);
      if (null != u) null != d.default.lastMessageId(u) && (l.add(t.id), a.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), i.numDms++)
    })
  },
  M = e => {
    let {
      query: t,
      rows: n,
      counts: l
    } = e;
    f.default.queryGroupDMs({
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
  C = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      omitUserIds: a,
      shownUserIds: i
    } = e;
    f.default.queryFriends({
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

function R(e) {
  let {
    query: t,
    inviteTargetType: n,
    omitUserIds: l,
    suggestedUserIds: a,
    suggestedChannelIds: i,
    maxRowsWithoutQuery: u,
    omitGuildId: s
  } = e, r = new Set, d = [], o = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: l,
      maxRowsWithoutQuery: u,
      omitGuildId: s,
      shownUserIds: r,
      rows: d,
      counts: o
    };
    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && (h({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), O({
      ...e,
      suggestedChannelIds: i
    })), S({
      ...e,
      suggestedUserIds: a
    }), h({
      ...e,
      includeGroupDms: !0
    }), v(e)
  } else {
    let e = {
      query: t,
      rows: d,
      counts: o
    };
    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && g({
      ...e,
      inviteTargetType: n
    }), m({
      ...e,
      omitUserIds: l,
      shownUserIds: r
    }), M(e), C({
      ...e,
      omitUserIds: l,
      shownUserIds: r
    })
  }
  return {
    rows: d,
    counts: o
  }
}

function A(e, t) {
  for (let n of c.default.getPrivateChannelIds()) {
    let l = s.default.getChannel(n);
    if (null == l || !l.isDM() || null == d.default.lastMessageId(l.id)) continue;
    let a = l.getRecipientId();
    if (null != a && !e.has(a)) {
      let e = I.default.getUser(a);
      if (null == e || e.bot || T(t, e.id)) continue;
      return e
    }
  }
  return null
}

function p(e) {
  let {
    channel: t,
    inviteTargetType: n,
    applicationId: l
  } = e;
  if (n === _.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of u.default.getEmbeddedActivitiesForChannel(t.id))
        if (e.applicationId === l) return new Set(e.userIds)
    }
  }
  return new Set
}
let P = {
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    NEVER: "never"
  },
  V = {
    [l.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: P.MINUTES
    },
    [l.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: P.HOURS
    },
    [l.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: P.HOURS
    },
    [l.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: P.HOURS
    },
    [l.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: P.DAYS
    },
    [l.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: P.DAYS
    },
    [l.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: P.NEVER
    }
  };

function U(e, t) {
  let n = parseInt(t, 10),
    l = 0 === n,
    a = V[e].value;
  switch (V[e].type) {
    case P.MINUTES:
      if (l) return N.default.Messages.INVITE_EXPIRES_MINUTES;
      return N.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: n
      });
    case P.HOURS:
      if (l) return N.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: a
      });
      return N.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: a,
        numUses: n
      });
    case P.DAYS:
      if (l) return N.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: a
      });
      return N.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: a,
        numUses: n
      });
    case P.NEVER:
      if (l) return N.default.Messages.INVITE_EXPIRES_NEVER;
      return N.default.Messages.INVITE_EXPIRES_USES.format({
        numUses: n
      });
    default:
      return ""
  }
}
t.default = {
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