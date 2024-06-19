t(47120);
var T = t(735250),
  n = t(470079),
  l = t(481060),
  o = t(230711),
  a = t(63063),
  _ = t(378298),
  S = t(584656),
  r = t(993750),
  i = t(981631),
  E = t(526761),
  O = t(689938),
  c = t(330731);
s.Z = function(e) {
  let {
    onClose: s,
    channelId: t
  } = e, [A, d] = n.useState(!1), u = n.useCallback(() => {
    o.Z.open(i.oAB.PRIVACY_AND_SAFETY, null, {
      scrollPosition: E.to.DM_SAFETY_ALERTS
    }), s()
  }, [s]), I = n.useCallback(() => {
    !A && (d(!0), (0, _.Uj)(t).then(() => {
      s(), (0, S.t)({
        text: O.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      d(!1), (0, l.showToast)((0, l.createToast)(O.Z.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
    }))
  }, [t, s, A]);
  return (0, T.jsxs)(r.Z, {
    style: c.wrapperStyle,
    children: [(0, T.jsx)(l.Text, {
      variant: "text-md/medium",
      children: O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
        learnMoreLink: a.Z.getArticleURL(i.BhN.SAFETY_ALERTS)
      })
    }), (0, T.jsx)(l.Button, {
      className: c.settingsButton,
      onClick: u,
      fullWidth: !0,
      children: O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
    }), (0, T.jsx)("div", {
      children: (0, T.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: c.reportFalsePositiveText,
        children: O.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
          reportFalsePositiveHook: (e, s) => (0, T.jsx)(l.Button, {
            className: c.reportFalsePositiveButton,
            size: l.Button.Sizes.NONE,
            color: l.Button.Colors.LINK,
            look: l.Button.Looks.LINK,
            disabled: A,
            onClick: I,
            children: e
          }, s)
        })
      })
    })]
  })
}