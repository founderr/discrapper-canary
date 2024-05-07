"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("703656"),
  l = n("970731"),
  r = n("626135"),
  o = n("63063"),
  u = n("973005"),
  d = n("981631"),
  c = n("921944"),
  f = n("689938"),
  E = n("981594");
t.default = e => {
  let {
    markAsDismissed: t
  } = e;
  return s.useEffect(() => {
    r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
      action: u.DMSafetyCoachmarkActions.VIEW
    })
  }, []), (0, a.jsx)(l.default, {
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
      (0, i.transitionTo)(d.Routes.SETTINGS("privacy-and-safety")), r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
        action: u.DMSafetyCoachmarkActions.CHANGE_SETTING
      })
    },
    markAsDismissed: t,
    caretPosition: l.CaretPosition.BOTTOM_CENTER,
    headerClassName: E.__invalid_header
  })
}