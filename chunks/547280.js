"use strict";
e.r(s), e.d(s, {
  completeSignUp: function() {
    return r
  },
  dismissSignUp: function() {
    return p
  }
});
var i = e("524437"),
  n = e("570140"),
  l = e("605236"),
  a = e("626135"),
  c = e("445507"),
  o = e("981631"),
  d = e("921944");

function r(t) {
  let {
    targetKey: s,
    data: e,
    completed: r
  } = t;
  null != e.selectedOptionKey && (!(0, l.isDismissibleContentDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS) && a.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: s,
    selected_option_key: e.selectedOptionKey,
    email: e.email,
    guild_id: e.guildId,
    metadata: (0, c.extractMetadata)(e),
    completed: r
  }), (0, l.markDismissibleContentAsDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: d.ContentDismissActionType.PRIMARY
  }), n.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: e.email,
    targetKey: s,
    selectedOptionKey: e.selectedOptionKey
  }))
}

function p(t) {
  (0, l.markDismissibleContentAsDismissed)(i.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: d.ContentDismissActionType.DISMISS
  }), n.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: t
  })
}