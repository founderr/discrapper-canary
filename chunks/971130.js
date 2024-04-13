"use strict";
let l;
n.r(t), n.d(t, {
  RowTypes: function() {
    return a
  },
  generateRowsForQuery: function() {
    return p
  },
  getMostRecentDMedUser: function() {
    return A
  },
  getUsersAlreadyJoined: function() {
    return R
  },
  maxAgeString: function() {
    return P
  }
}), n("653041"), n("47120");
var a, s, i = n("317381"),
  r = n("592125"),
  u = n("271383"),
  d = n("306680"),
  o = n("699516"),
  c = n("594174"),
  I = n("55589"),
  f = n("483360"),
  E = n("981631"),
  _ = n("245335"),
  N = n("689938");
l = n("603617"), (s = a || (a = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
let h = (e, t) => null != e && u.default.isMember(e, t),
  T = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: n,
      maxRowsWithoutQuery: l,
      omitGuildId: a,
      shownUserIds: s,
      rows: i,
      counts: r
    } = e;
    if (null != n)
      for (let e of n) {
        if (null != l && l > 0 && i.length >= l) break;
        if (t.has(e) || s.has(e)) continue;
        let n = c.default.getUser(e);
        !(null == n || h(a, n.id)) && (s.add(n.id), i.push({
          type: "FRIEND",
          item: n,
          isSuggested: !0
        }), r.numFriends++)
      }
  },
  S = e => {
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
  O = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: a,
      rows: s,
      counts: i,
      includeGroupDms: u,
      limit: o
    } = e, f = 0;
    for (let e of I.default.getPrivateChannelIds()) {
      if (null != n && n > 0 && s.length >= n || null != o && f >= o) break;
      let I = r.default.getChannel(e);
      if (null == I || !I.isPrivate()) continue;
      if (u && I.type === E.ChannelTypes.GROUP_DM) {
        s.push({
          type: "GROUP_DM",
          item: I,
          isSuggested: !1
        }), i.numGroupDms++, f++;
        continue
      }
      if (null == d.default.lastMessageId(I.id)) continue;
      let _ = I.getRecipientId();
      if (null != _ && !t.has(_) && !a.has(_)) {
        let e = c.default.getUser(_);
        if (null == e || e.bot || h(l, e.id)) continue;
        a.add(e.id), s.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), i.numDms++, f++
      }
    }
  },
  g = e => {
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
      let r = c.default.getUser(e);
      !(null == r || h(l, r.id)) && (s.push({
        type: "FRIEND",
        item: r,
        isSuggested: !1
      }), i.numFriends++)
    }
  },
  v = e => {
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
      counts: s
    } = e;
    f.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (n.has(t.id)) return;
      let i = r.default.getDMFromUserId(t.id);
      if (null != i) null != d.default.lastMessageId(i) && (l.add(t.id), a.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), s.numDms++)
    })
  },
  C = e => {
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
  M = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      omitUserIds: a,
      shownUserIds: s
    } = e;
    f.default.queryFriends({
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

function p(e) {
  let {
    query: t,
    inviteTargetType: n,
    omitUserIds: l,
    suggestedUserIds: a,
    suggestedChannelIds: s,
    maxRowsWithoutQuery: i,
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
      maxRowsWithoutQuery: i,
      omitGuildId: r,
      shownUserIds: u,
      rows: d,
      counts: o
    };
    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && (O({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), S({
      ...e,
      suggestedChannelIds: s
    })), T({
      ...e,
      suggestedUserIds: a
    }), O({
      ...e,
      includeGroupDms: !0
    }), g(e)
  } else {
    let e = {
      query: t,
      rows: d,
      counts: o
    };
    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && v({
      ...e,
      inviteTargetType: n
    }), m({
      ...e,
      omitUserIds: l,
      shownUserIds: u
    }), C(e), M({
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

function A(e, t) {
  for (let n of I.default.getPrivateChannelIds()) {
    let l = r.default.getChannel(n);
    if (null == l || !l.isDM() || null == d.default.lastMessageId(l.id)) continue;
    let a = l.getRecipientId();
    if (null != a && !e.has(a)) {
      let e = c.default.getUser(a);
      if (null == e || e.bot || h(t, e.id)) continue;
      return e
    }
  }
  return null
}

function R(e) {
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
let V = {
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    NEVER: "never"
  },
  x = {
    [l.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: V.MINUTES
    },
    [l.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: V.HOURS
    },
    [l.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: V.HOURS
    },
    [l.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: V.HOURS
    },
    [l.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: V.DAYS
    },
    [l.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: V.DAYS
    },
    [l.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: V.NEVER
    }
  };

function P(e, t) {
  let n = parseInt(t, 10),
    l = 0 === n,
    a = x[e].value;
  switch (x[e].type) {
    case V.MINUTES:
      if (l) return N.default.Messages.INVITE_EXPIRES_MINUTES;
      return N.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: n
      });
    case V.HOURS:
      if (l) return N.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: a
      });
      return N.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: a,
        numUses: n
      });
    case V.DAYS:
      if (l) return N.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: a
      });
      return N.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: a,
        numUses: n
      });
    case V.NEVER:
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