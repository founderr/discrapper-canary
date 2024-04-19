"use strict";
s.r(e), s.d(e, {
  completeSignUp: function() {
    return d
  },
  dismissSignUp: function() {
    return r
  }
});
var i = s("570140"),
  n = s("605236"),
  a = s("626135"),
  c = s("445507"),
  l = s("981631"),
  o = s("921944");

function d(t) {
  let {
    targetKey: e,
    dismissibleContent: s,
    data: d,
    completed: r
  } = t;
  null != d.selectedOptionKey && (!(0, n.isDismissibleContentDismissed)(s) && a.default.track(l.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: e,
    selected_option_key: d.selectedOptionKey,
    email: d.email,
    guild_id: d.guildId,
    metadata: (0, c.extractMetadata)(d),
    completed: r
  }), (0, n.markDismissibleContentAsDismissed)(s, {
    dismissAction: o.ContentDismissActionType.PRIMARY,
    forceTrack: !0
  }), i.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: d.email,
    targetKey: e,
    selectedOptionKey: d.selectedOptionKey
  }))
}

function r(t, e) {
  (0, n.markDismissibleContentAsDismissed)(e, {
    dismissAction: o.ContentDismissActionType.DISMISS,
    forceTrack: !0
  }), i.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: t
  })
}