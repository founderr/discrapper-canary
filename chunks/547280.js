n.d(t, {
  b: function() {
    return u
  },
  o: function() {
    return c
  }
});
var i = n(570140),
  s = n(605236),
  l = n(626135),
  a = n(445507),
  r = n(981631),
  o = n(921944);

function c(e) {
  let {
    targetKey: t,
    dismissibleContent: n,
    data: c,
    completed: u
  } = e;
  null != c.selectedOptionKey && (!(0, s.un)(n) && l.default.track(r.rMx.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: c.selectedOptionKey,
    email: c.email,
    guild_id: c.guildId,
    metadata: (0, a.mU)(c),
    completed: u
  }), (0, s.EW)(n, {
    dismissAction: o.L.PRIMARY,
    forceTrack: !0
  }), i.Z.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: c.email,
    targetKey: t,
    selectedOptionKey: c.selectedOptionKey
  }))
}

function u(e, t) {
  (0, s.EW)(t, {
    dismissAction: o.L.DISMISS,
    forceTrack: !0
  }), i.Z.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: e
  })
}