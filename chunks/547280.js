i.d(t, {
  b: function() {
    return u
  },
  o: function() {
    return p
  }
});
var c = i(570140),
  n = i(605236),
  d = i(626135),
  s = i(445507),
  a = i(981631),
  o = i(921944);

function p(e) {
  let {
    targetKey: t,
    dismissibleContent: i,
    data: p,
    completed: u
  } = e;
  null != p.selectedOptionKey && (!(0, n.un)(i) && d.default.track(a.rMx.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: p.selectedOptionKey,
    email: p.email,
    guild_id: p.guildId,
    metadata: (0, s.mU)(p),
    completed: u
  }), (0, n.EW)(i, {
    dismissAction: o.L.PRIMARY,
    forceTrack: !0
  }), c.Z.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: p.email,
    targetKey: t,
    selectedOptionKey: p.selectedOptionKey
  }))
}

function u(e, t) {
  (0, n.EW)(t, {
    dismissAction: o.L.DISMISS,
    forceTrack: !0
  }), c.Z.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: e
  })
}