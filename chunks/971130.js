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
    return P
  },
  maxAgeString: function() {
    return V
  }
}), n("653041"), n("47120");
var a, s, i = n("317381"),
  u = n("592125"),
  r = n("271383"),
  d = n("306680"),
  o = n("699516"),
  I = n("594174"),
  c = n("55589"),
  E = n("483360"),
  f = n("981631"),
  _ = n("245335"),
  N = n("689938");
l = n("603617"), (s = a || (a = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
let T = (e, t) => null != e && r.default.isMember(e, t),
  S = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: n,
      maxRowsWithoutQuery: l,
      omitGuildId: a,
      shownUserIds: s,
      rows: i,
      counts: u
    } = e;
    if (null != n)
      for (let e of n) {
        if (null != l && l > 0 && i.length >= l) break;
        if (t.has(e) || s.has(e)) continue;
        let n = I.default.getUser(e);
        !(null == n || T(a, n.id)) && (s.add(n.id), i.push({
          type: "FRIEND",
          item: n,
          isSuggested: !0
        }), u.numFriends++)
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
        let t = u.default.getChannel(e);
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
      rows: s,
      counts: i,
      includeGroupDms: r,
      limit: o
    } = e, E = 0;
    for (let e of c.default.getPrivateChannelIds()) {
      if (null != n && n > 0 && s.length >= n || null != o && E >= o) break;
      let c = u.default.getChannel(e);
      if (null == c || !c.isPrivate()) continue;
      if (r && c.type === f.ChannelTypes.GROUP_DM) {
        s.push({
          type: "GROUP_DM",
          item: c,
          isSuggested: !1
        }), i.numGroupDms++, E++;
        continue
      }
      if (null == d.default.lastMessageId(c.id)) continue;
      let _ = c.getRecipientId();
      if (null != _ && !t.has(_) && !a.has(_)) {
        let e = I.default.getUser(_);
        if (null == e || e.bot || T(l, e.id)) continue;
        a.add(e.id), s.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), i.numDms++, E++
      }
    }
  },
  m = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: a,
      rows: s,
      counts: i
    } = e;
    for (let e of o.default.getFriendIDs()) {
      if (null != n && n > 0 && s.length >= n) break;
      if (t.has(e) || a.has(e)) continue;
      let u = I.default.getUser(e);
      !(null == u || T(l, u.id)) && (s.push({
        type: "FRIEND",
        item: u,
        isSuggested: !1
      }), i.numFriends++)
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
  v = e => {
    let {
      query: t,
      omitUserIds: n,
      shownUserIds: l,
      rows: a,
      counts: s
    } = e;
    E.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (n.has(t.id)) return;
      let i = u.default.getDMFromUserId(t.id);
      if (null != i) null != d.default.lastMessageId(i) && (l.add(t.id), a.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), s.numDms++)
    })
  },
  M = e => {
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
  C = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      omitUserIds: a,
      shownUserIds: s
    } = e;
    E.default.queryFriends({
      query: t,
      limit: 500,
      _fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      !(a.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
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
    suggestedChannelIds: s,
    maxRowsWithoutQuery: i,
    omitGuildId: u
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
      maxRowsWithoutQuery: i,
      omitGuildId: u,
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
      suggestedChannelIds: s
    })), S({
      ...e,
      suggestedUserIds: a
    }), h({
      ...e,
      includeGroupDms: !0
    }), m(e)
  } else {
    let e = {
      query: t,
      rows: d,
      counts: o
    };
    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && g({
      ...e,
      inviteTargetType: n
    }), v({
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
    let l = u.default.getChannel(n);
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

function P(e) {
  let {
    channel: t,
    inviteTargetType: n,
    applicationId: l
  } = e;
  if (n === _.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of i.default.getEmbeddedActivitiesForChannel(t.id))
        if (e.applicationId === l) return new Set(e.userIds)
    }
  }
  return new Set
}
let p = {
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    NEVER: "never"
  },
  U = {
    [l.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: p.MINUTES
    },
    [l.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: p.HOURS
    },
    [l.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: p.HOURS
    },
    [l.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: p.HOURS
    },
    [l.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: p.DAYS
    },
    [l.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: p.DAYS
    },
    [l.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: p.NEVER
    }
  };

function V(e, t) {
  let n = parseInt(t, 10),
    l = 0 === n,
    a = U[e].value;
  switch (U[e].type) {
    case p.MINUTES:
      if (l) return N.default.Messages.INVITE_EXPIRES_MINUTES;
      return N.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: n
      });
    case p.HOURS:
      if (l) return N.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: a
      });
      return N.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: a,
        numUses: n
      });
    case p.DAYS:
      if (l) return N.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: a
      });
      return N.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: a,
        numUses: n
      });
    case p.NEVER:
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