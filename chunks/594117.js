"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250");
n("470079");
var s = n("685072"),
  i = n("287734"),
  l = n("67212"),
  r = n("158631"),
  o = n("15274"),
  u = n("389303"),
  d = n("881824"),
  c = n("719100"),
  f = n("976401"),
  E = n("689938");

function h(e) {
  let {
    tooltipText: t,
    onClick: n
  } = e, i = (0, s.useEndCallLottie)();
  return (0, a.jsx)(f.default, {
    tooltipText: t,
    onClick: n,
    ...i.events,
    icon: i.Component
  })
}

function _() {
  return (0, a.jsx)(h, {
    tooltipText: E.default.Messages.DISCONNECT_SELF,
    onClick: () => {
      (0, l.stopBroadcast)(), i.default.disconnect()
    }
  })
}

function C(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsx)(h, {
    tooltipText: E.default.Messages.AUDIENCE_DISCONNECT,
    onClick: () => {
      if ((0, c.default)(t)) {
        (0, d.openEndStageModal)(t);
        return
      }
      i.default.disconnect()
    }
  })
}

function m(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsx)(h, {
    tooltipText: E.default.Messages.DISCONNECT_SELF,
    onClick: () => {
      if ((0, u.default)(t)) {
        (0, o.openEndEventModal)(t);
        return
      }
      i.default.disconnect()
    }
  })
}

function S(e) {
  let {
    channel: t
  } = e, n = (0, r.default)();
  return t.isGuildStageVoice() ? (0, a.jsx)(C, {
    channel: t
  }) : n && t.isBroadcastChannel() ? (0, a.jsx)(_, {}) : (0, a.jsx)(m, {
    channel: t
  })
}