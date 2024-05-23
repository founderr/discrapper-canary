"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  },
  useEmbeddedApps: function() {
    return f
  },
  useEmbeddedAppsByChannel: function() {
    return s
  },
  useEmbeddedAppsWithPresence: function() {
    return p
  }
}), i("47120"), i("653041");
var l = i("470079"),
  n = i("442837"),
  a = i("835473"),
  d = i("158776"),
  u = i("594174"),
  r = i("823379"),
  o = i("317381");

function c(e, t) {
  return f((0, n.useStateFromStoresArray)([o.default], () => null != e && null != e.id && "" !== e.id ? o.default.getEmbeddedActivitiesForChannel(e.id) : o.NO_ACTIVITIES), t)
}

function s(e) {
  let t = f((0, n.useStateFromStores)([o.default], () => null != e ? o.default.getEmbeddedActivitiesForGuild(e) : o.NO_ACTIVITIES));
  return l.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      var i;
      let l = t.embeddedActivity.channelId,
        n = null !== (i = e.get(l)) && void 0 !== i ? i : [];
      n.push(t), e.set(l, n)
    }), e
  }, [t])
}

function f(e, t) {
  let i = e.map(e => e.applicationId),
    d = (0, a.default)(i),
    o = new Set([]);
  for (let t of e)
    for (let e of t.userIds) o.add(e);
  let c = (0, n.useStateFromStoresArray)([u.default], () => {
    let e = [];
    for (let t of o) e.push(u.default.getUser(t));
    return e
  }, [o]);
  return l.useMemo(() => {
    let i = new Map;
    return c.forEach(e => {
      null != e && i.set(e.id, e)
    }), e.map((e, l) => {
      let n = d[l],
        a = [];
      if (null != a)
        for (let l of e.userIds) {
          let e = i.get(l);
          if (null != e && null != t) {
            let i = t(e);
            null != i && a.push(i)
          }
        }
      return null == n ? null : {
        embeddedActivity: e,
        application: n,
        userParticipantAvatarUrls: a
      }
    }).filter(r.isNotNullish)
  }, [e, d, c, t])
}

function p(e) {
  return (0, n.useStateFromStores)([d.default], () => {
    let t = new Map;
    return e.forEach(e => {
      var i;
      let l = d.default.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var i;
        return t.application_id === (null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id)
      });
      t.set(null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id, {
        ...e,
        presenceActivity: l
      })
    }), t
  }, [e], n.statesWillNeverBeEqual)
}