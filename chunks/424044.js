n(47120);
var s = n(735250),
  i = n(470079),
  r = n(442837),
  a = n(481060),
  l = n(893776),
  o = n(232567),
  c = n(129293),
  u = n(388905),
  d = n(353926),
  _ = n(185625),
  E = n(551549),
  I = n(108427),
  h = n(314897),
  p = n(981631),
  g = n(689938),
  f = n(331651);
r.ZP.initialize();
t.Z = e => {
  let {
    location: t
  } = e, n = (0, r.e7)([h.default], () => h.default.isAuthenticated()), N = (0, r.e7)([d.Z], () => d.Z.hasLoadedExperiments), m = (0, E.oK)("RSL - Landing Page"), [T, A] = i.useState(!1), [Z, x] = i.useState(g.Z.Messages.AUTHORIZING), [S, O] = i.useState(!0), v = e => {
    switch (e) {
      case p.evJ.INVALID_FORM_BODY:
      case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
        x(g.Z.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
        break;
      case p.evJ.DSA_RSL_ALREADY_REQUESTED:
        x(g.Z.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
        break;
      case p.evJ.DSA_RSL_LIMITED_TIME:
        x(g.Z.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
        break;
      case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
        x(g.Z.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
        break;
      default:
        x(g.Z.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
    }
  };
  return i.useEffect(() => {
    n ? (O(!0), o.k({
      withAnalyticsToken: !0
    }).then(() => O(!1)).catch(() => O(!1))) : O(!1)
  }, [n]), i.useEffect(() => {
    !N && !m && l.Z.getExperiments()
  }, [N, m]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, _.hs)(e) : void 0;
        null != n ? x(g.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : v(null === (t = n.body) || void 0 === t ? void 0 : t.code)
      } catch (e) {
        v(null === (n = e.body) || void 0 === n ? void 0 : n.code)
      } finally {
        A(!1)
      }
    };
    A(!0), e((0, c.Z)(t)), (0, I.e)("report_second_look")
  }, [t]), m && !S && (0, s.jsxs)(u.ZP, {
    children: [(0, s.jsx)(u.Dx, {
      className: f.marginBottom8,
      children: Z
    }), T && (0, s.jsx)(a.Spinner, {})]
  })
}