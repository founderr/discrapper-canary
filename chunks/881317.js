n(47120);
var s = n(735250),
  r = n(470079),
  i = n(990547),
  l = n(442837),
  a = n(481060),
  o = n(893776),
  c = n(232567),
  u = n(388905),
  d = n(353926),
  E = n(82554),
  _ = n(726521),
  h = n(185625),
  I = n(314897),
  p = n(63063),
  N = n(981631),
  g = n(689938),
  m = n(102122),
  T = n(331651);
l.ZP.initialize();
let f = e => {
  let {
    title: t,
    menuType: r
  } = e, l = () => {
    (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("93288")]).then(n.bind(n, 396410));
      return t => (0, s.jsx)(e, {
        ...t,
        onSuccess: o,
        headerText: g.Z.Messages.ENTER_EMAIL,
        confirmButtonText: g.Z.Messages.NEXT,
        confirmButtonColor: a.Button.Colors.BRAND,
        impressionName: i.ImpressionNames.URF_ENTER_EMAIL
      })
    })
  }, o = e => {
    let t = async () => {
      await (0, h.yL)(r, e)
    }, l = async t => await (0, h.RV)(r, e, t), o = e => {
      let t = null == e ? void 0 : e.token;
      r === E.B.MESSAGE ? (0, _.eE)(t) : r === E.B.USER && (0, _.JM)(t)
    };
    t(), (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("94566")]).then(n.bind(n, 965072));
      return n => (0, s.jsx)(e, {
        ...n,
        onFormSubmit: l,
        onResend: t,
        onSuccess: o,
        headerText: g.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
        confirmButtonText: g.Z.Messages.VERIFY,
        confirmButtonColor: a.Button.Colors.BRAND,
        impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      })
    })
  };
  return (0, s.jsx)("div", {
    className: m.buttonColumn,
    children: (0, s.jsx)(a.Button, {
      className: T.__invalid_reportButton,
      fullWidth: !0,
      color: a.Button.Colors.BRAND,
      onClick: () => l(),
      children: t
    })
  })
};
t.Z = () => {
  let [e, t] = r.useState(!0), [n, i] = r.useState(!1), _ = (0, l.e7)([I.default], () => I.default.isAuthenticated()), Z = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments), A = () => {
    (0, h.qJ)().then(() => {
      t(!1), i(!0)
    }).catch(() => {
      t(!1), i(!1)
    })
  };
  return r.useEffect(() => {
    _ ? (t(!0), c.k({
      withAnalyticsToken: !0
    }).then(() => A()).catch(() => t(!1))) : A()
  }, [_]), r.useEffect(() => {
    (async () => {
      !Z && (await o.Z.getLocationMetadata(), o.Z.getExperiments())
    })()
  }, [Z]), e || !Z ? (0, s.jsx)(u.ZP, {
    children: (0, s.jsx)(a.Spinner, {})
  }) : n && (0, s.jsxs)(u.ZP, {
    children: [(0, s.jsx)(u.Dx, {
      className: T.marginBottom8,
      children: g.Z.Messages.URF_LANDING_PAGE_TITLE
    }), (0, s.jsx)(u.DK, {
      className: T.marginBottom8,
      children: g.Z.Messages.URF_LANDING_PAGE_SUBTITLE.format({
        supportURL: p.Z.getArticleURL(N.BhN.COPYRIGHT_AND_IP_POLICY)
      })
    }), (0, s.jsxs)("div", {
      className: m.container,
      children: [(0, s.jsx)(f, {
        title: g.Z.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
        menuType: E.B.MESSAGE
      }), (0, s.jsx)(f, {
        title: g.Z.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
        menuType: E.B.USER
      })]
    })]
  })
}