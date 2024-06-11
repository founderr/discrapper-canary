"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  },
  useEmbeddedApps: function() {
    return c
  },
  useEmbeddedAppsByChannel: function() {
    return _
  },
  useEmbeddedAppsWithPresence: function() {
    return E
  }
}), n("47120"), n("653041");
var i = n("470079"),
  r = n("442837"),
  s = n("835473"),
  a = n("158776"),
  o = n("594174"),
  l = n("823379"),
  u = n("317381");

function d(e, t) {
  return c((0, r.useStateFromStoresArray)([u.default], () => null != e && null != e.id && "" !== e.id ? u.default.getEmbeddedActivitiesForChannel(e.id) : u.NO_ACTIVITIES), t)
}

function _(e) {
  let t = c((0, r.useStateFromStores)([u.default], () => null != e ? u.default.getEmbeddedActivitiesForGuild(e) : u.NO_ACTIVITIES));
  return i.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      var n;
      let i = t.embeddedActivity.channelId,
        r = null !== (n = e.get(i)) && void 0 !== n ? n : [];
      r.push(t), e.set(i, r)
    }), e
  }, [t])
}

function c(e, t) {
  let n = e.map(e => e.applicationId),
    a = (0, s.default)(n),
    u = new Set([]);
  for (let t of e)
    for (let e of t.userIds) u.add(e);
  let d = (0, r.useStateFromStoresArray)([o.default], () => {
    let e = [];
    for (let t of u) e.push(o.default.getUser(t));
    return e
  }, [u]);
  return i.useMemo(() => {
    let n = new Map;
    return d.forEach(e => {
      null != e && n.set(e.id, e)
    }), e.map((e, i) => {
      let r = a[i],
        s = [];
      if (null != s)
        for (let i of e.userIds) {
          let e = n.get(i);
          if (null != e && null != t) {
            let n = t(e);
            null != n && s.push(n)
          }
        }
      return null == r ? null : {
        embeddedActivity: e,
        application: r,
        userParticipantAvatarUrls: s
      }
    }).filter(l.isNotNullish)
  }, [e, a, d, t])
}

function E(e) {
  return (0, r.useStateFromStores)([a.default], () => {
    let t = new Map;
    return e.forEach(e => {
      var n;
      let i = a.default.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var n;
        return t.application_id === (null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id)
      });
      t.set(null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id, {
        ...e,
        presenceActivity: i
      })
    }), t
  }, [e], r.statesWillNeverBeEqual)
}