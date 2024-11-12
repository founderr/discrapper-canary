n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(893776),
    o = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    g = n(551549),
    m = n(108427),
    p = n(314897),
    f = n(981631),
    _ = n(388032),
    x = n(113207);
s.ZP.initialize();
t.Z = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([p.default], () => p.default.isAuthenticated()),
        E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, g.oK)('RSL - Landing Page'),
        [I, b] = r.useState(!1),
        [N, C] = r.useState(_.intl.string(_.t['9exy+f'])),
        [S, T] = r.useState(!0),
        A = (e) => {
            switch (e) {
                case f.evJ.INVALID_FORM_BODY:
                case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    C(_.intl.string(_.t.bzXDfX));
                    break;
                case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                    C(_.intl.string(_.t.rV00ws));
                    break;
                case f.evJ.DSA_RSL_LIMITED_TIME:
                    C(_.intl.string(_.t['0dI29v']));
                    break;
                case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    C(_.intl.string(_.t['RGa/GR']));
                    break;
                default:
                    C(_.intl.string(_.t['0QLzfn']));
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (T(!0),
                  o
                      .k({ withAnalyticsToken: !0 })
                      .then(() => T(!1))
                      .catch(() => T(!1)))
                : T(!1);
        }, [n]),
        r.useEffect(() => {
            !E && !v && l.Z.getExperiments();
        }, [E, v]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? C(_.intl.string(_.t.e6mZMj)) : A(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    A(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    b(!1);
                }
            };
            b(!0), e((0, c.Z)(t)), (0, m.e)('report_second_look');
        }, [t]),
        v &&
            !S &&
            (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: N
                    }),
                    I && (0, i.jsx)(a.Spinner, {})
                ]
            })
    );
};
