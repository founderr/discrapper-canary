n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var s = n(685072),
  l = n(287734),
  a = n(67212),
  r = n(158631),
  o = n(15274),
  c = n(389303),
  u = n(881824),
  d = n(719100),
  E = n(976401),
  h = n(689938);

function _(e) {
  let {
    tooltipText: t,
    onClick: n
  } = e, l = (0, s.K)();
  return (0, i.jsx)(E.Z, {
    tooltipText: t,
    onClick: n,
    ...l.events,
    icon: l.Component
  })
}

function I() {
  return (0, i.jsx)(_, {
    tooltipText: h.Z.Messages.DISCONNECT_SELF,
    onClick: () => {
      (0, a.b_)(), l.default.disconnect()
    }
  })
}

function m(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(_, {
    tooltipText: h.Z.Messages.AUDIENCE_DISCONNECT,
    onClick: () => {
      if ((0, d.Z)(t)) {
        (0, u.Us)(t);
        return
      }
      l.default.disconnect()
    }
  })
}

function g(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(_, {
    tooltipText: h.Z.Messages.DISCONNECT_SELF,
    onClick: () => {
      if ((0, c.Z)(t)) {
        (0, o.lC)(t);
        return
      }
      l.default.disconnect()
    }
  })
}

function p(e) {
  let {
    channel: t
  } = e, n = (0, r.ZP)();
  return t.isGuildStageVoice() ? (0, i.jsx)(m, {
    channel: t
  }) : n && t.isBroadcastChannel() ? (0, i.jsx)(I, {}) : (0, i.jsx)(g, {
    channel: t
  })
}