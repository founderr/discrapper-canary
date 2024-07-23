s(47120);
var T = s(735250),
  o = s(470079),
  n = s(481060),
  a = s(230711),
  l = s(63063),
  i = s(378298),
  _ = s(584656),
  r = s(993750),
  S = s(981631),
  E = s(526761),
  c = s(689938),
  O = s(220623);
t.Z = function(e) {
  let {
onClose: t,
channelId: s
  } = e, [u, d] = o.useState(!1), A = o.useCallback(() => {
a.Z.open(S.oAB.PRIVACY_AND_SAFETY, null, {
  scrollPosition: E.to.DM_SAFETY_ALERTS
}), t();
  }, [t]), I = o.useCallback(() => {
!u && (d(!0), (0, i.Uj)(s).then(() => {
  t(), (0, _.t)({
    text: c.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
    id: 'safety-tools-report-false-positive'
  });
}).catch(() => {
  d(!1), (0, n.showToast)((0, n.createToast)(c.Z.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE));
}));
  }, [
s,
t,
u
  ]);
  return (0, T.jsxs)(r.Z, {
style: O.wrapperStyle,
children: [
  (0, T.jsx)(n.Text, {
    variant: 'text-md/medium',
    children: c.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({
      learnMoreLink: l.Z.getArticleURL(S.BhN.SAFETY_ALERTS)
    })
  }),
  (0, T.jsx)(n.Button, {
    className: O.settingsButton,
    onClick: A,
    fullWidth: !0,
    children: c.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
  }),
  (0, T.jsx)('div', {
    children: (0, T.jsx)(n.Text, {
      variant: 'text-sm/normal',
      color: 'text-muted',
      className: O.reportFalsePositiveText,
      children: c.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
        reportFalsePositiveHook: (e, t) => (0, T.jsx)(n.Button, {
          className: O.reportFalsePositiveButton,
          size: n.Button.Sizes.NONE,
          color: n.Button.Colors.LINK,
          look: n.Button.Looks.LINK,
          disabled: u,
          onClick: I,
          children: e
        }, t)
      })
    })
  })
]
  });
};