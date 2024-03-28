"use strict";
n.r(t), n.d(t, {
  completeSignUp: function() {
    return d
  },
  dismissSignUp: function() {
    return c
  }
});
var a = n("524437"),
  s = n("570140"),
  l = n("605236"),
  i = n("626135"),
  r = n("445507"),
  o = n("981631"),
  u = n("921944");

function d(e) {
  let {
    targetKey: t,
    data: n,
    completed: d
  } = e;
  null != n.selectedOptionKey && (!(0, l.isDismissibleContentDismissed)(a.DismissibleContent.GAME_ONE_USER_SIGNUPS) && i.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: n.selectedOptionKey,
    email: n.email,
    guild_id: n.guildId,
    metadata: (0, r.extractMetadata)(n),
    completed: d
  }), (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: u.ContentDismissActionType.PRIMARY
  }), s.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: n.email,
    targetKey: t,
    selectedOptionKey: n.selectedOptionKey
  }))
}

function c(e) {
  (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: u.ContentDismissActionType.DISMISS
  }), s.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: e
  })
}