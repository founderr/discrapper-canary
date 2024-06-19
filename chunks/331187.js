var i = n(735250),
  s = n(470079),
  l = n(703656),
  a = n(970731),
  r = n(626135),
  o = n(63063),
  c = n(973005),
  u = n(981631),
  d = n(921944),
  E = n(689938),
  h = n(854966);
t.Z = e => {
  let {
    markAsDismissed: t
  } = e;
  return s.useEffect(() => {
    r.default.track(u.rMx.DM_SAFETY_COACHMARK_ACTION, {
      action: c.Rv.VIEW
    })
  }, []), (0, i.jsx)(a.ZP, {
    header: E.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_HEADER_V2,
    content: E.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_CONTENT_V2.format({
      helpdeskArticle: o.Z.getArticleURL(u.BhN.SAFE_DIRECT_MESSAGING)
    }),
    buttonCTA: E.Z.Messages.GOT_IT,
    secondaryButtonCTA: E.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_REDIRECT,
    className: h.coachmark,
    onClick: e => {
      e.stopPropagation(), t(d.L.UNKNOWN), r.default.track(u.rMx.DM_SAFETY_COACHMARK_ACTION, {
        action: c.Rv.DISMISS
      })
    },
    onSecondaryClick: () => {
      (0, l.uL)(u.Z5c.SETTINGS("privacy-and-safety")), r.default.track(u.rMx.DM_SAFETY_COACHMARK_ACTION, {
        action: c.Rv.CHANGE_SETTING
      })
    },
    markAsDismissed: t,
    caretPosition: a.DF.BOTTOM_CENTER,
    headerClassName: h.__invalid_header
  })
}