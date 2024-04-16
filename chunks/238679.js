"use strict";
a.r(t), a.d(t, {
  activityInstanceConnectedParticipants: function() {
    return f
  },
  activityInstanceConnectedParticipantsScope: function() {
    return E
  },
  activityInstanceConnectedParticipantsUpdateEvent: function() {
    return h
  },
  subscribeToActivityInstanceConnectedParticipants: function() {
    return _
  }
});
var n = a("392711"),
  s = a.n(n),
  l = a("570140"),
  i = a("317381"),
  r = a("594174"),
  o = a("823379"),
  u = a("5192"),
  d = a("863141"),
  c = a("186901");

function f() {
  let e = i.default.getCurrentEmbeddedActivity();
  if (null == e) return {
    participants: []
  };
  let {
    guildId: t,
    channelId: a
  } = e;
  return {
    participants: Array.from(e.userIds, e => {
      let n = r.default.getUser(e);
      if (null == n) return;
      let s = (0, u.getNickname)(t, a, n);
      return {
        ...(0, d.default)(n),
        nickname: null != s ? s : void 0
      }
    }).filter(o.isNotNullish)
  }
}
let E = {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE]
  },
  h = {
    scope: E,
    handler: () => e => {
      let {
        prevState: t,
        dispatch: a
      } = e, n = f();
      return !s().isEqual(n, t) && a(n), n
    }
  };

function _(e) {
  let t = "EMBEDDED_ACTIVITY_UPDATE",
    a = () => {
      e(f())
    };
  return l.default.subscribe(t, a), () => l.default.unsubscribe(t, a)
}