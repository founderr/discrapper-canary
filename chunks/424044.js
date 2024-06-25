n(47120);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  l = n(481060),
  a = n(893776),
  o = n(232567),
  u = n(129293),
  c = n(388905),
  d = n(353926),
  E = n(185625),
  _ = n(551549),
  h = n(108427),
  I = n(314897),
  N = n(981631),
  p = n(689938),
  g = n(331651);
i.ZP.initialize();
t.Z = e => {
  let {
    location: t
  } = e, n = (0, i.e7)([I.default], () => I.default.isAuthenticated()), m = (0, i.e7)([d.Z], () => d.Z.hasLoadedExperiments), T = (0, _.oK)("RSL - Landing Page"), [f, A] = r.useState(!1), [Z, x] = r.useState(p.Z.Messages.AUTHORIZING), [O, S] = r.useState(!0), v = e => {
    switch (e) {
      case N.evJ.INVALID_FORM_BODY:
      case N.evJ.DSA_RSL_REPORT_NOT_FOUND:
        x(p.Z.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
        break;
      case N.evJ.DSA_RSL_ALREADY_REQUESTED:
        x(p.Z.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
        break;
      case N.evJ.DSA_RSL_LIMITED_TIME:
        x(p.Z.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
        break;
      case N.evJ.DSA_RSL_REPORT_INELIGIBLE:
        x(p.Z.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
        break;
      default:
        x(p.Z.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
    }
  };
  return r.useEffect(() => {
    n ? (S(!0), o.k({
      withAnalyticsToken: !0
    }).then(() => S(!1)).catch(() => S(!1))) : S(!1)
  }, [n]), r.useEffect(() => {
    !m && !T && a.Z.getExperiments()
  }, [m, T]), r.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, E.hs)(e) : void 0;
        null != n ? x(p.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : v(null === (t = n.body) || void 0 === t ? void 0 : t.code)
      } catch (e) {
        v(null === (n = e.body) || void 0 === n ? void 0 : n.code)
      } finally {
        A(!1)
      }
    };
    A(!0), e((0, u.Z)(t)), (0, h.e)("report_second_look")
  }, [t]), T && !O && (0, s.jsxs)(c.ZP, {
    children: [(0, s.jsx)(c.Dx, {
      className: g.marginBottom8,
      children: Z
    }), f && (0, s.jsx)(l.Spinner, {})]
  })
}