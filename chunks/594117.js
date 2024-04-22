"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var n = a("735250");
a("470079");
var s = a("685072"),
  l = a("287734"),
  i = a("67212"),
  r = a("158631"),
  o = a("15274"),
  u = a("389303"),
  d = a("881824"),
  c = a("719100"),
  f = a("976401"),
  E = a("689938");

function h(e) {
  let {
    tooltipText: t,
    onClick: a
  } = e, l = (0, s.useEndCallLottie)();
  return (0, n.jsx)(f.default, {
    tooltipText: t,
    onClick: a,
    ...l.events,
    icon: l.Component
  })
}

function _() {
  return (0, n.jsx)(h, {
    tooltipText: E.default.Messages.DISCONNECT_SELF,
    onClick: () => {
      (0, i.stopBroadcast)(), l.default.disconnect()
    }
  })
}

function C(e) {
  let {
    channel: t
  } = e;
  return (0, n.jsx)(h, {
    tooltipText: E.default.Messages.AUDIENCE_DISCONNECT,
    onClick: () => {
      if ((0, c.default)(t)) {
        (0, d.openEndStageModal)(t);
        return
      }
      l.default.disconnect()
    }
  })
}

function m(e) {
  let {
    channel: t
  } = e;
  return (0, n.jsx)(h, {
    tooltipText: E.default.Messages.DISCONNECT_SELF,
    onClick: () => {
      if ((0, u.default)(t)) {
        (0, o.openEndEventModal)(t);
        return
      }
      l.default.disconnect()
    }
  })
}

function S(e) {
  let {
    channel: t
  } = e, a = (0, r.default)();
  return t.isGuildStageVoice() ? (0, n.jsx)(C, {
    channel: t
  }) : a && t.isBroadcastChannel() ? (0, n.jsx)(_, {}) : (0, n.jsx)(m, {
    channel: t
  })
}