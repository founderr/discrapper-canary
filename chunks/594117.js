"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var s = n("685072"),
  l = n("287734"),
  i = n("67212"),
  r = n("158631"),
  o = n("15274"),
  u = n("389303"),
  d = n("881824"),
  c = n("719100"),
  f = n("976401"),
  E = n("689938");

function C(e) {
  let {
    tooltipText: t,
    onClick: n
  } = e, l = (0, s.useEndCallLottie)();
  return (0, a.jsx)(f.default, {
    tooltipText: t,
    onClick: n,
    ...l.events,
    icon: l.Component
  })
}

function h() {
  return (0, a.jsx)(C, {
    tooltipText: E.default.Messages.DISCONNECT_SELF,
    onClick: () => {
      (0, i.stopBroadcast)(), l.default.disconnect()
    }
  })
}

function _(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsx)(C, {
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

function S(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsx)(C, {
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

function m(e) {
  let {
    channel: t
  } = e, n = (0, r.default)();
  return t.isGuildStageVoice() ? (0, a.jsx)(_, {
    channel: t
  }) : n && t.isBroadcastChannel() ? (0, a.jsx)(h, {}) : (0, a.jsx)(S, {
    channel: t
  })
}