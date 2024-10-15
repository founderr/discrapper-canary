n(47120);
var s = n(735250),
    r = n(470079),
    i = n(442837),
    a = n(481060),
    o = n(893776),
    l = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    _ = n(185625),
    h = n(551549),
    E = n(108427),
    g = n(314897),
    p = n(981631),
    m = n(689938),
    f = n(113207);
i.ZP.initialize();
t.Z = (e) => {
    let { location: t } = e,
        n = (0, i.e7)([g.default], () => g.default.isAuthenticated()),
        I = (0, i.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        N = (0, h.oK)('RSL - Landing Page'),
        [T, x] = r.useState(!1),
        [A, C] = r.useState(m.Z.Messages.AUTHORIZING),
        [v, Z] = r.useState(!0),
        R = (e) => {
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
                ? (Z(!0),
                  l
                      .k({ withAnalyticsToken: !0 })
                      .then(() => Z(!1))
                      .catch(() => Z(!1)))
                : Z(!1);
        }, [n]),
        r.useEffect(() => {
            !I && !N && o.Z.getExperiments();
        }, [I, N]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, _.hs)(e) : void 0;
                    null != n ? C(m.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : R(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    R(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    x(!1);
                }
            };
            x(!0), e((0, c.Z)(t)), (0, E.e)('report_second_look');
        }, [t]),
        N &&
            !v &&
            (0, s.jsxs)(u.ZP, {
                children: [
                    (0, s.jsx)(u.Dx, {
                        className: f.marginBottom8,
                        children: A
                    }),
                    T && (0, s.jsx)(a.Spinner, {})
                ]
            })
    );
};
