n(47120);
var s = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    l = n(893776),
    o = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    _ = n(185625),
    h = n(551549),
    E = n(108427),
    g = n(314897),
    p = n(981631),
    m = n(689938),
    I = n(113207);
i.ZP.initialize();
t.Z = (e) => {
    let { location: t } = e,
        n = (0, i.e7)([g.default], () => g.default.isAuthenticated()),
        f = (0, i.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        N = (0, h.oK)('RSL - Landing Page'),
        [T, A] = r.useState(!1),
        [x, C] = r.useState(m.Z.Messages.AUTHORIZING),
        [R, S] = r.useState(!0),
        O = (e) => {
            switch (e) {
                case p.evJ.INVALID_FORM_BODY:
                case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    C(m.Z.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                    break;
                case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                    C(m.Z.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
                    break;
                case p.evJ.DSA_RSL_LIMITED_TIME:
                    C(m.Z.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                    break;
                case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    C(m.Z.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                    break;
                default:
                    C(m.Z.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR);
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (S(!0),
                  o
                      .k({ withAnalyticsToken: !0 })
                      .then(() => S(!1))
                      .catch(() => S(!1)))
                : S(!1);
        }, [n]),
        r.useEffect(() => {
            !f && !N && l.Z.getExperiments();
        }, [f, N]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, _.hs)(e) : void 0;
                    null != n ? C(m.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : O(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    O(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    A(!1);
                }
            };
            A(!0), e((0, c.Z)(t)), (0, E.e)('report_second_look');
        }, [t]),
        N &&
            !R &&
            (0, s.jsxs)(u.ZP, {
                children: [
                    (0, s.jsx)(u.Dx, {
                        className: I.marginBottom8,
                        children: x
                    }),
                    T && (0, s.jsx)(a.Spinner, {})
                ]
            })
    );
};
