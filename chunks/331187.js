"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("703656"),
  i = a("970731"),
  r = a("626135"),
  o = a("63063"),
  u = a("973005"),
  d = a("981631"),
  c = a("921944"),
  f = a("689938"),
  E = a("981594");
t.default = e => {
  let {
    markAsDismissed: t
  } = e;
  return s.useEffect(() => {
    r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
      action: u.DMSafetyCoachmarkActions.VIEW
    })
  }, []), (0, n.jsx)(i.default, {
    header: f.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_HEADER_V2,
    content: f.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_CONTENT_V2.format({
      helpdeskArticle: o.default.getArticleURL(d.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
    }),
    buttonCTA: f.default.Messages.GOT_IT,
    secondaryButtonCTA: f.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_REDIRECT,
    className: E.coachmark,
    onClick: e => {
      e.stopPropagation(), t(c.ContentDismissActionType.UNKNOWN), r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
        action: u.DMSafetyCoachmarkActions.DISMISS
      })
    },
    onSecondaryClick: () => {
      (0, l.transitionTo)(d.Routes.SETTINGS("privacy-and-safety")), r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
        action: u.DMSafetyCoachmarkActions.CHANGE_SETTING
      })
    },
    markAsDismissed: t,
    caretPosition: i.CaretPosition.BOTTOM_CENTER,
    headerClassName: E.__invalid_header
  })
}