"use strict";
a.r(t), a.d(t, {
  completeSignUp: function() {
    return u
  },
  dismissSignUp: function() {
    return d
  }
});
var n = a("570140"),
  s = a("605236"),
  l = a("626135"),
  i = a("445507"),
  r = a("981631"),
  o = a("921944");

function u(e) {
  let {
    targetKey: t,
    dismissibleContent: a,
    data: u,
    completed: d
  } = e;
  null != u.selectedOptionKey && (!(0, s.isDismissibleContentDismissed)(a) && l.default.track(r.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: u.selectedOptionKey,
    email: u.email,
    guild_id: u.guildId,
    metadata: (0, i.extractMetadata)(u),
    completed: d
  }), (0, s.markDismissibleContentAsDismissed)(a, {
    dismissAction: o.ContentDismissActionType.PRIMARY,
    forceTrack: !0
  }), n.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: u.email,
    targetKey: t,
    selectedOptionKey: u.selectedOptionKey
  }))
}

function d(e, t) {
  (0, s.markDismissibleContentAsDismissed)(t, {
    dismissAction: o.ContentDismissActionType.DISMISS,
    forceTrack: !0
  }), n.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: e
  })
}