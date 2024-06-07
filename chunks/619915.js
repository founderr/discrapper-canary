"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  },
  useEmbeddedApps: function() {
    return f
  },
  useEmbeddedAppsByChannel: function() {
    return c
  },
  useEmbeddedAppsWithPresence: function() {
    return p
  }
}), l("47120"), l("653041");
var i = l("470079"),
  n = l("442837"),
  a = l("835473"),
  u = l("158776"),
  d = l("594174"),
  r = l("823379"),
  o = l("317381");

function s(e, t) {
  return f((0, n.useStateFromStoresArray)([o.default], () => null != e && null != e.id && "" !== e.id ? o.default.getEmbeddedActivitiesForChannel(e.id) : o.NO_ACTIVITIES), t)
}

function c(e) {
  let t = f((0, n.useStateFromStores)([o.default], () => null != e ? o.default.getEmbeddedActivitiesForGuild(e) : o.NO_ACTIVITIES));
  return i.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      var l;
      let i = t.embeddedActivity.channelId,
        n = null !== (l = e.get(i)) && void 0 !== l ? l : [];
      n.push(t), e.set(i, n)
    }), e
  }, [t])
}

function f(e, t) {
  let l = e.map(e => e.applicationId),
    u = (0, a.default)(l),
    o = new Set([]);
  for (let t of e)
    for (let e of t.userIds) o.add(e);
  let s = (0, n.useStateFromStoresArray)([d.default], () => {
    let e = [];
    for (let t of o) e.push(d.default.getUser(t));
    return e
  }, [o]);
  return i.useMemo(() => {
    let l = new Map;
    return s.forEach(e => {
      null != e && l.set(e.id, e)
    }), e.map((e, i) => {
      let n = u[i],
        a = [];
      if (null != a)
        for (let i of e.userIds) {
          let e = l.get(i);
          if (null != e && null != t) {
            let l = t(e);
            null != l && a.push(l)
          }
        }
      return null == n ? null : {
        embeddedActivity: e,
        application: n,
        userParticipantAvatarUrls: a
      }
    }).filter(r.isNotNullish)
  }, [e, u, s, t])
}

function p(e) {
  return (0, n.useStateFromStores)([u.default], () => {
    let t = new Map;
    return e.forEach(e => {
      var l;
      let i = u.default.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var l;
        return t.application_id === (null == e ? void 0 : null === (l = e.application) || void 0 === l ? void 0 : l.id)
      });
      t.set(null == e ? void 0 : null === (l = e.application) || void 0 === l ? void 0 : l.id, {
        ...e,
        presenceActivity: i
      })
    }), t
  }, [e], n.statesWillNeverBeEqual)
}