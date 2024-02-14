"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("437822"),
  u = n("327037"),
  o = n("457108"),
  d = n("965153"),
  c = n("105029"),
  f = n("970366"),
  E = n("271938"),
  I = n("760190"),
  _ = n("124969"),
  p = n("49111"),
  h = n("782340"),
  T = n("890957");
l.default.initialize();
var N = e => {
  let {
    location: t
  } = e, n = (0, l.useStateFromStores)([E.default], () => E.default.isAuthenticated()), N = (0, l.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments), g = (0, c.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [m, A] = a.useState(!1), [S, v] = a.useState(h.default.Messages.AUTHORIZING), [C, R] = a.useState(!0), O = e => {
    switch (e) {
      case p.AbortCodes.INVALID_FORM_BODY:
      case p.AbortCodes.DSA_RSL_REPORT_NOT_FOUND:
        v(h.default.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
        break;
      case p.AbortCodes.DSA_RSL_ALREADY_REQUESTED:
        v(h.default.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
        break;
      case p.AbortCodes.DSA_RSL_LIMITED_TIME:
        v(h.default.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
        break;
      case p.AbortCodes.DSA_RSL_REPORT_INELIGIBLE:
        v(h.default.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
        break;
      default:
        v(h.default.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
    }
  };
  return a.useEffect(() => {
    n ? (R(!0), u.fetchCurrentUser({
      withAnalyticsToken: !0
    }).then(() => R(!1)).catch(() => R(!1))) : R(!1)
  }, [n]), a.useEffect(() => {
    !N && !g && r.default.getExperiments()
  }, [N, g]), a.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, d.submitReportSecondLook)(e) : void 0;
        null != n ? v(h.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : O(null === (t = n.body) || void 0 === t ? void 0 : t.code)
      } catch (e) {
        O(null === (n = e.body) || void 0 === n ? void 0 : n.code)
      } finally {
        A(!1)
      }
    };
    A(!0);
    let n = (0, o.default)(t);
    e(n), (0, f.trackAppUIViewed)("report_second_look")
  }, [t]), g && !C && (0, s.jsxs)(_.default, {
    children: [(0, s.jsx)(_.Title, {
      className: T.marginBottom8,
      children: S
    }), m && (0, s.jsx)(i.Spinner, {})]
  })
}