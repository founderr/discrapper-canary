"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  s = n("158776"),
  a = n("78675"),
  o = n("438163"),
  l = n("513099"),
  u = n("228168"),
  d = n("981631"),
  _ = n("170022");

function c(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: c,
    channelId: E,
    onOpenProfile: I
  } = e, T = (0, r.useStateFromStores)([s.default], () => s.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === d.ActivityTypes.CUSTOM_STATUS
  }));
  return (0, i.jsxs)("header", {
    className: _.header,
    children: [(0, i.jsx)(a.default, {
      user: t,
      displayProfile: n,
      guildId: c,
      profileType: u.UserProfileTypes.BITE_SIZE,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
    }), (0, i.jsx)(l.default, {
      user: t,
      displayProfile: n,
      guildId: c,
      channelId: E,
      onOpenProfile: I
    }), (0, i.jsx)(o.UserProfileCustomStatusBubble, {
      statusActivity: T,
      profileType: u.UserProfileTypes.BITE_SIZE
    })]
  })
}