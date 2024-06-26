"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(78675),
  s = n(438163),
  o = n(513099),
  a = n(228168),
  l = n(472375);

function u(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: u,
    channelId: _,
    onOpenProfile: c,
    onClose: d
  } = e;
  return (0, i.jsxs)("header", {
    className: l.header,
    children: [(0, i.jsx)(r.Z, {
      user: t,
      displayProfile: n,
      guildId: u,
      profileType: a.y0.BITE_SIZE,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
    }), (0, i.jsx)(o.Z, {
      user: t,
      displayProfile: n,
      guildId: u,
      channelId: _,
      onOpenProfile: c
    }), (0, i.jsx)(s.Z, {
      user: t,
      profileType: a.y0.BITE_SIZE,
      onClose: d
    })]
  })
}