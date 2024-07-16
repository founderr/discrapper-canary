n.d(t, {
  i: function() {
return c;
  },
  l: function() {
return d;
  }
}), n(47120);
var r = n(652874),
  i = n(143927),
  a = n(12336),
  s = n(433517),
  o = n(590433);
let l = (0, a.Z)((e, t) => {
var n;
return {
  notificationDismissedInGuilds: new Set(null !== (n = s.K.get(o.hL)) && void 0 !== n ? n : []),
  dismissNotification: n => {
    let r = t().notificationDismissedInGuilds;
    r.add(n), s.K.set(o.hL, r), e({
      notificationDismissedInGuilds: r
    });
  },
  resetNotification: n => {
    let r = t().notificationDismissedInGuilds;
    r.has(n) && (r.delete(n), s.K.set(o.hL, r), e({
      notificationDismissedInGuilds: r
    }));
  }
};
  }),
  u = (0, r.Z)(l);

function c(e) {
  let [t, n] = u(e => [
e.notificationDismissedInGuilds,
e.dismissNotification
  ], i.Z);
  return [
!t.has(e),
n
  ];
}

function d(e) {
  return l.getState().resetNotification(e);
}