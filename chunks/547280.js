"use strict";
t.r(i), t.d(i, {
  completeSignUp: function() {
    return l
  },
  dismissSignUp: function() {
    return p
  }
});
var s = t("570140"),
  n = t("605236"),
  c = t("626135"),
  a = t("445507"),
  d = t("981631"),
  o = t("921944");

function l(e) {
  let {
    targetKey: i,
    dismissibleContent: t,
    data: l,
    completed: p
  } = e;
  null != l.selectedOptionKey && (!(0, n.isDismissibleContentDismissed)(t) && c.default.track(d.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: i,
    selected_option_key: l.selectedOptionKey,
    email: l.email,
    guild_id: l.guildId,
    metadata: (0, a.extractMetadata)(l),
    completed: p
  }), (0, n.markDismissibleContentAsDismissed)(t, {
    dismissAction: o.ContentDismissActionType.PRIMARY,
    forceTrack: !0
  }), s.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: l.email,
    targetKey: i,
    selectedOptionKey: l.selectedOptionKey
  }))
}

function p(e, i) {
  (0, n.markDismissibleContentAsDismissed)(i, {
    dismissAction: o.ContentDismissActionType.DISMISS,
    forceTrack: !0
  }), s.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: e
  })
}