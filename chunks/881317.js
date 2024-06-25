n(47120);
var s = n(735250),
  i = n(470079),
  r = n(990547),
  a = n(442837),
  l = n(481060),
  o = n(893776),
  c = n(232567),
  u = n(388905),
  d = n(353926),
  _ = n(82554),
  E = n(726521),
  I = n(185625),
  h = n(314897),
  p = n(63063),
  g = n(981631),
  f = n(689938),
  N = n(102122),
  m = n(331651);
a.ZP.initialize();
let T = e => {
  let {
    title: t,
    menuType: i
  } = e, a = () => {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("93288").then(n.bind(n, 396410));
      return t => (0, s.jsx)(e, {
        ...t,
        onSuccess: o,
        headerText: f.Z.Messages.ENTER_EMAIL,
        confirmButtonText: f.Z.Messages.NEXT,
        confirmButtonColor: l.Button.Colors.BRAND,
        impressionName: r.ImpressionNames.URF_ENTER_EMAIL
      })
    })
  }, o = e => {
    let t = async () => {
      await (0, I.yL)(i, e)
    }, a = async t => await (0, I.RV)(i, e, t), o = e => {
      let t = null == e ? void 0 : e.token;
      i === _.B.MESSAGE ? (0, E.eE)(t) : i === _.B.USER && (0, E.JM)(t)
    };
    t(), (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("94566").then(n.bind(n, 965072));
      return n => (0, s.jsx)(e, {
        ...n,
        onFormSubmit: a,
        onResend: t,
        onSuccess: o,
        headerText: f.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
        confirmButtonText: f.Z.Messages.VERIFY,
        confirmButtonColor: l.Button.Colors.BRAND,
        impressionName: r.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      })
    })
  };
  return (0, s.jsx)("div", {
    className: N.buttonColumn,
    children: (0, s.jsx)(l.Button, {
      className: m.__invalid_reportButton,
      fullWidth: !0,
      color: l.Button.Colors.BRAND,
      onClick: () => a(),
      children: t
    })
  })
};
t.Z = () => {
  let [e, t] = i.useState(!0), [n, r] = i.useState(!1), E = (0, a.e7)([h.default], () => h.default.isAuthenticated()), A = (0, a.e7)([d.Z], () => d.Z.hasLoadedExperiments), Z = () => {
    (0, I.qJ)().then(() => {
      t(!1), r(!0)
    }).catch(() => {
      t(!1), r(!1)
    })
  };
  return i.useEffect(() => {
    E ? (t(!0), c.k({
      withAnalyticsToken: !0
    }).then(() => Z()).catch(() => t(!1))) : Z()
  }, [E]), i.useEffect(() => {
    (async () => {
      !A && (await o.Z.getLocationMetadata(), o.Z.getExperiments())
    })()
  }, [A]), e || !A ? (0, s.jsx)(u.ZP, {
    children: (0, s.jsx)(l.Spinner, {})
  }) : n && (0, s.jsxs)(u.ZP, {
    children: [(0, s.jsx)(u.Dx, {
      className: m.marginBottom8,
      children: f.Z.Messages.URF_LANDING_PAGE_TITLE
    }), (0, s.jsx)(u.DK, {
      className: m.marginBottom8,
      children: f.Z.Messages.URF_LANDING_PAGE_SUBTITLE.format({
        supportURL: p.Z.getArticleURL(g.BhN.COPYRIGHT_AND_IP_POLICY)
      })
    }), (0, s.jsxs)("div", {
      className: N.container,
      children: [(0, s.jsx)(T, {
        title: f.Z.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
        menuType: _.B.MESSAGE
      }), (0, s.jsx)(T, {
        title: f.Z.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
        menuType: _.B.USER
      })]
    })]
  })
}