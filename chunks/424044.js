n(47120);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  l = n(481060),
  a = n(893776),
  o = n(232567),
  c = n(129293),
  u = n(388905),
  d = n(353926),
  E = n(185625),
  _ = n(551549),
  h = n(108427),
  I = n(314897),
  p = n(981631),
  N = n(689938),
  g = n(331651);
i.ZP.initialize();
t.Z = e => {
  let {
    location: t
  } = e, n = (0, i.e7)([I.default], () => I.default.isAuthenticated()), m = (0, i.e7)([d.Z], () => d.Z.hasLoadedExperiments), T = (0, _.oK)("RSL - Landing Page"), [f, Z] = r.useState(!1), [A, x] = r.useState(N.Z.Messages.AUTHORIZING), [v, O] = r.useState(!0), S = e => {
    switch (e) {
      case p.evJ.INVALID_FORM_BODY:
      case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
        x(N.Z.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
        break;
      case p.evJ.DSA_RSL_ALREADY_REQUESTED:
        x(N.Z.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
        break;
      case p.evJ.DSA_RSL_LIMITED_TIME:
        x(N.Z.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
        break;
      case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
        x(N.Z.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
        break;
      default:
        x(N.Z.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
    }
  };
  return r.useEffect(() => {
    n ? (O(!0), o.k({
      withAnalyticsToken: !0
    }).then(() => O(!1)).catch(() => O(!1))) : O(!1)
  }, [n]), r.useEffect(() => {
    !m && !T && a.Z.getExperiments()
  }, [m, T]), r.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, E.hs)(e) : void 0;
        null != n ? x(N.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : S(null === (t = n.body) || void 0 === t ? void 0 : t.code)
      } catch (e) {
        S(null === (n = e.body) || void 0 === n ? void 0 : n.code)
      } finally {
        Z(!1)
      }
    };
    Z(!0), e((0, c.Z)(t)), (0, h.e)("report_second_look")
  }, [t]), T && !v && (0, s.jsxs)(u.ZP, {
    children: [(0, s.jsx)(u.Dx, {
      className: g.marginBottom8,
      children: A
    }), f && (0, s.jsx)(l.Spinner, {})]
  })
}