"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  },
  useEmbeddedAppsByChannel: function() {
    return s
  },
  useEmbeddedApps: function() {
    return f
  },
  useEmbeddedAppsWithPresence: function() {
    return p
  }
}), l("222007"), l("424973");
var i = l("884691"),
  n = l("446674"),
  a = l("442939"),
  d = l("824563"),
  u = l("697218"),
  o = l("449008"),
  r = l("191225");

function c(e, t) {
  let l = (0, n.useStateFromStoresArray)([r.default], () => null != e && null != e.id && "" !== e.id ? r.default.getEmbeddedActivitiesForChannel(e.id) : r.NO_ACTIVITIES),
    i = f(l, t);
  return i
}

function s(e) {
  let t = (0, n.useStateFromStores)([r.default], () => null != e ? r.default.getEmbeddedActivitiesForGuild(e) : r.NO_ACTIVITIES),
    l = f(t),
    a = i.useMemo(() => {
      let e = new Map;
      return l.forEach(t => {
        var l;
        let i = t.embeddedActivity.channelId,
          n = null !== (l = e.get(i)) && void 0 !== l ? l : [];
        n.push(t), e.set(i, n)
      }), e
    }, [l]);
  return a
}

function f(e, t) {
  let l = e.map(e => e.applicationId),
    d = (0, a.default)(l),
    r = new Set([]);
  for (let t of e)
    for (let e of t.userIds) r.add(e);
  let c = (0, n.useStateFromStoresArray)([u.default], () => {
      let e = [];
      for (let t of r) e.push(u.default.getUser(t));
      return e
    }, [r]),
    s = i.useMemo(() => {
      let l = new Map;
      c.forEach(e => {
        null != e && l.set(e.id, e)
      });
      let i = e.map((e, i) => {
        let n = d[i],
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
      }).filter(o.isNotNullish);
      return i
    }, [e, d, c, t]);
  return s
}

function p(e) {
  let t = (0, n.useStateFromStores)([d.default], () => {
    let t = new Map;
    return e.forEach(e => {
      var l;
      let i = d.default.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var l;
        return t.application_id === (null == e ? void 0 : null === (l = e.application) || void 0 === l ? void 0 : l.id)
      });
      t.set(null == e ? void 0 : null === (l = e.application) || void 0 === l ? void 0 : l.id, {
        ...e,
        presenceActivity: i
      })
    }), t
  }, [e], n.statesWillNeverBeEqual);
  return t
}