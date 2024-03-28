"use strict";
s.r(e), s.d(e, {
  completeSignUp: function() {
    return r
  },
  dismissSignUp: function() {
    return p
  }
});
var i = s("524437"),
  n = s("570140"),
  a = s("605236"),
  c = s("626135"),
  l = s("445507"),
  o = s("981631"),
  d = s("921944");

function r(t) {
  let {
    targetKey: e,
    data: s,
    completed: r
  } = t;
  null != s.selectedOptionKey && (!(0, a.isDismissibleContentDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS) && c.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: e,
    selected_option_key: s.selectedOptionKey,
    email: s.email,
    guild_id: s.guildId,
    metadata: (0, l.extractMetadata)(s),
    completed: r
  }), (0, a.markDismissibleContentAsDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: d.ContentDismissActionType.PRIMARY,
    forceTrack: !0
  }), n.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: s.email,
    targetKey: e,
    selectedOptionKey: s.selectedOptionKey
  }))
}

function p(t) {
  (0, a.markDismissibleContentAsDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: d.ContentDismissActionType.DISMISS,
    forceTrack: !0
  }), n.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: t
  })
}