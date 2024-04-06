"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("990547"),
  i = n("442837"),
  r = n("481060"),
  u = n("893776"),
  o = n("232567"),
  d = n("82554"),
  c = n("726521"),
  f = n("185625"),
  E = n("551549"),
  _ = n("314897"),
  I = n("828695"),
  p = n("819570"),
  h = n("63063"),
  T = n("981631"),
  N = n("689938"),
  g = n("78019"),
  m = n("794711");
i.default.initialize();
let A = e => {
  let {
    title: t,
    menuType: a
  } = e, i = () => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("93288")]).then(n.bind(n, "396410"));
      return t => (0, s.jsx)(e, {
        ...t,
        onSuccess: u,
        headerText: N.default.Messages.ENTER_EMAIL,
        confirmButtonText: N.default.Messages.NEXT,
        confirmButtonColor: r.Button.Colors.BRAND_NEW,
        impressionName: l.ImpressionNames.URF_ENTER_EMAIL
      })
    })
  }, u = e => {
    let t = async () => {
      await (0, f.sendUnauthenticatedReportPincode)(a, e)
    }, i = async t => await (0, f.verifyUnauthenticatedReport)(a, e, t), u = e => {
      let t = null == e ? void 0 : e.token;
      a === d.UnauthenticatedReportNames.MESSAGE ? (0, c.showUnauthenticatedReportModalForMessage)(t) : a === d.UnauthenticatedReportNames.USER && (0, c.showUnauthenticatedReportModalForUser)(t)
    };
    t(), (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("94566")]).then(n.bind(n, "965072"));
      return n => (0, s.jsx)(e, {
        ...n,
        onFormSubmit: i,
        onResend: t,
        onSuccess: u,
        headerText: N.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
        confirmButtonText: N.default.Messages.VERIFY,
        confirmButtonColor: r.Button.Colors.BRAND_NEW,
        impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      })
    })
  };
  return (0, s.jsx)("div", {
    className: g.buttonColumn,
    children: (0, s.jsx)(r.Button, {
      className: m.__invalid_reportButton,
      fullWidth: !0,
      color: r.Button.Colors.BRAND_NEW,
      hover: r.Button.Colors.BRAND_NEW,
      onClick: () => i(),
      children: t
    })
  })
};
t.default = () => {
  let e = (0, i.useStateFromStores)([_.default], () => _.default.isAuthenticated()),
    t = (0, i.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments),
    n = (0, E.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"),
    [l, c] = a.useState(!0);
  return a.useEffect(() => {
    e ? (c(!0), o.fetchCurrentUser({
      withAnalyticsToken: !0
    }).then(() => c(!1)).catch(() => c(!1))) : c(!1)
  }, [e]), a.useEffect(() => {
    (async () => {
      !t && !n && (await u.default.getLocationMetadata(), u.default.getExperiments())
    })()
  }, [t, n]), l ? (0, s.jsx)(p.default, {
    children: (0, s.jsx)(r.Spinner, {})
  }) : n && (0, s.jsxs)(p.default, {
    children: [(0, s.jsx)(p.Title, {
      className: m.marginBottom8,
      children: N.default.Messages.URF_LANDING_PAGE_TITLE
    }), (0, s.jsx)(p.SubTitle, {
      className: m.marginBottom8,
      children: N.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
        supportURL: h.default.getArticleURL(T.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
      })
    }), (0, s.jsxs)("div", {
      className: g.container,
      children: [(0, s.jsx)(A, {
        title: N.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
        menuType: d.UnauthenticatedReportNames.MESSAGE
      }), (0, s.jsx)(A, {
        title: N.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
        menuType: d.UnauthenticatedReportNames.USER
      })]
    })]
  })
}