"use strict";
t.r(n), t.d(n, {
  default: function() {
    return i
  },
  getEventException: function() {
    return a
  }
});
var l = t("446674"),
  s = t("398604");

function i(e, n) {
  let t = (0, l.useStateFromStoresArray)([s.default], () => {
    var e, t;
    return null !== (t = null === (e = s.default.getGuildScheduledEvent(n)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== t ? t : []
  });
  return u(t, e)
}

function a(e, n) {
  var t, l;
  let i = null !== (l = null === (t = s.default.getGuildScheduledEvent(n)) || void 0 === t ? void 0 : t.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
  return u(i, e)
}

function u(e, n) {
  let t = null == e ? void 0 : e.find(e => e.event_exception_id === n);
  return t
}