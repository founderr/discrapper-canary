"use strict";
let n;
s.r(t), s.d(t, {
  RowTypes: function() {
    return r
  },
  generateRowsForQuery: function() {
    return A
  },
  getMostRecentDMedUser: function() {
    return V
  },
  getUsersAlreadyJoined: function() {
    return P
  },
  maxAgeString: function() {
    return D
  }
}), s("653041"), s("47120");
var r, a, l = s("317381"),
  u = s("592125"),
  i = s("271383"),
  I = s("306680"),
  d = s("699516"),
  _ = s("594174"),
  o = s("55589"),
  f = s("483360"),
  c = s("981631"),
  E = s("245335"),
  N = s("689938");
n = s("603617"), (a = r || (r = {})).GROUP_DM = "GROUP_DM", a.DM = "DM", a.FRIEND = "FRIEND", a.CHANNEL = "CHANNEL";
let S = (e, t) => null != e && i.default.isMember(e, t),
  T = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: s,
      maxRowsWithoutQuery: n,
      omitGuildId: r,
      shownUserIds: a,
      rows: l,
      counts: u
    } = e;
    if (null != s)
      for (let e of s) {
        if (null != n && n > 0 && l.length >= n) break;
        if (t.has(e) || a.has(e)) continue;
        let s = _.default.getUser(e);
        !(null == s || S(r, s.id)) && (a.add(s.id), l.push({
          type: "FRIEND",
          item: s,
          isSuggested: !0
        }), u.numFriends++)
      }
  },
  O = e => {
    let {
      suggestedChannelIds: t,
      maxRowsWithoutQuery: s,
      rows: n,
      counts: r
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != s && s > 0 && n.length >= s) break;
        let t = u.default.getChannel(e);
        null != t && (n.push({
          type: "CHANNEL",
          item: t,
          isSuggested: !0
        }), r.numChannels++)
      }
  },
  h = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: s,
      omitGuildId: n,
      shownUserIds: r,
      rows: a,
      counts: l,
      includeGroupDms: i,
      limit: d
    } = e, f = 0;
    for (let e of o.default.getPrivateChannelIds()) {
      if (null != s && s > 0 && a.length >= s || null != d && f >= d) break;
      let o = u.default.getChannel(e);
      if (null == o || !o.isPrivate()) continue;
      if (i && o.type === c.ChannelTypes.GROUP_DM) {
        a.push({
          type: "GROUP_DM",
          item: o,
          isSuggested: !1
        }), l.numGroupDms++, f++;
        continue
      }
      if (null == I.default.lastMessageId(o.id)) continue;
      let E = o.getRecipientId();
      if (null != E && !t.has(E) && !r.has(E)) {
        let e = _.default.getUser(E);
        if (null == e || e.bot || S(n, e.id)) continue;
        r.add(e.id), a.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), l.numDms++, f++
      }
    }
  },
  g = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: s,
      omitGuildId: n,
      shownUserIds: r,
      rows: a,
      counts: l
    } = e;
    for (let e of d.default.getFriendIDs()) {
      if (null != s && s > 0 && a.length >= s) break;
      if (t.has(e) || r.has(e)) continue;
      let u = _.default.getUser(e);
      !(null == u || S(n, u.id)) && (a.push({
        type: "FRIEND",
        item: u,
        isSuggested: !1
      }), l.numFriends++)
    }
  },
  M = e => {
    let {
      query: t,
      rows: s,
      counts: n,
      inviteTargetType: r
    } = e;
    r === E.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
      query: t,
      limit: 3,
      guildId: void 0
    }).forEach(e => {
      let {
        record: t
      } = e;
      s.push({
        type: "CHANNEL",
        item: t,
        isSuggested: !1
      }), n.numChannels++
    })
  },
  p = e => {
    let {
      query: t,
      omitUserIds: s,
      shownUserIds: n,
      rows: r,
      counts: a
    } = e;
    f.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (s.has(t.id)) return;
      let l = u.default.getDMFromUserId(t.id);
      if (null != l) null != I.default.lastMessageId(l) && (n.add(t.id), r.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), a.numDms++)
    })
  },
  m = e => {
    let {
      query: t,
      rows: s,
      counts: n
    } = e;
    f.default.queryGroupDMs({
      query: t,
      limit: 50,
      fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      s.push({
        type: "GROUP_DM",
        item: t,
        isSuggested: !1
      }), n.numGroupDms++
    })
  },
  v = e => {
    let {
      query: t,
      rows: s,
      counts: n,
      omitUserIds: r,
      shownUserIds: a
    } = e;
    f.default.queryFriends({
      query: t,
      limit: 500,
      _fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      !(r.has(t.id) || a.has(t.id)) && (a.add(t.id), s.push({
        type: "FRIEND",
        item: t,
        isSuggested: !1
      }), n.numFriends++)
    })
  };

function A(e) {
  let {
    query: t,
    inviteTargetType: s,
    omitUserIds: n,
    suggestedUserIds: r,
    suggestedChannelIds: a,
    maxRowsWithoutQuery: l,
    omitGuildId: u
  } = e, i = new Set, I = [], d = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: n,
      maxRowsWithoutQuery: l,
      omitGuildId: u,
      shownUserIds: i,
      rows: I,
      counts: d
    };
    s === E.InviteTargetTypes.EMBEDDED_APPLICATION && (h({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), O({
      ...e,
      suggestedChannelIds: a
    })), T({
      ...e,
      suggestedUserIds: r
    }), h({
      ...e,
      includeGroupDms: !0
    }), g(e)
  } else {
    let e = {
      query: t,
      rows: I,
      counts: d
    };
    s === E.InviteTargetTypes.EMBEDDED_APPLICATION && M({
      ...e,
      inviteTargetType: s
    }), p({
      ...e,
      omitUserIds: n,
      shownUserIds: i
    }), m(e), v({
      ...e,
      omitUserIds: n,
      shownUserIds: i
    })
  }
  return {
    rows: I,
    counts: d
  }
}

function V(e, t) {
  for (let s of o.default.getPrivateChannelIds()) {
    let n = u.default.getChannel(s);
    if (null == n || !n.isDM() || null == I.default.lastMessageId(n.id)) continue;
    let r = n.getRecipientId();
    if (null != r && !e.has(r)) {
      let e = _.default.getUser(r);
      if (null == e || e.bot || S(t, e.id)) continue;
      return e
    }
  }
  return null
}

function P(e) {
  let {
    channel: t,
    inviteTargetType: s,
    applicationId: n
  } = e;
  if (s === E.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of l.default.getEmbeddedActivitiesForChannel(t.id))
        if (e.applicationId === n) return new Set(e.userIds)
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
    [n.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: R.MINUTES
    },
    [n.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: R.HOURS
    },
    [n.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: R.HOURS
    },
    [n.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: R.HOURS
    },
    [n.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: R.DAYS
    },
    [n.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: R.DAYS
    },
    [n.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: R.NEVER
    }
  };

function D(e, t) {
  let s = parseInt(t, 10),
    n = 0 === s,
    r = U[e].value;
  switch (U[e].type) {
    case R.MINUTES:
      if (n) return N.default.Messages.INVITE_EXPIRES_MINUTES;
      return N.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: s
      });
    case R.HOURS:
      if (n) return N.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: r
      });
      return N.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: r,
        numUses: s
      });
    case R.DAYS:
      if (n) return N.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: r
      });
      return N.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: r,
        numUses: s
      });
    case R.NEVER:
      if (n) return N.default.Messages.INVITE_EXPIRES_NEVER;
      return N.default.Messages.INVITE_EXPIRES_USES.format({
        numUses: s
      });
    default:
      return ""
  }
}
t.default = {
  getMaxAgeOptions: n.MAX_AGE_OPTIONS,
  getMaxUsesOptions: n.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES
}