n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(893776),
    o = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    h = n(185625),
    g = n(551549),
    m = n(108427),
    f = n(314897),
    p = n(981631),
    x = n(388032),
    _ = n(232186);
s.ZP.initialize();
t.Z = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([f.default], () => f.default.isAuthenticated()),
        E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        I = (0, g.oK)('RSL - Landing Page'),
        [v, N] = r.useState(!1),
        [C, b] = r.useState(x.intl.string(x.t['9exy+f'])),
        [S, A] = r.useState(!0),
        j = (e) => {
            switch (e) {
                case p.evJ.INVALID_FORM_BODY:
                case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    b(x.intl.string(x.t.bzXDfX));
                    break;
                case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                    b(x.intl.string(x.t.rV00ws));
                    break;
                case p.evJ.DSA_RSL_LIMITED_TIME:
                    b(x.intl.string(x.t['0dI29v']));
                    break;
                case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    b(x.intl.string(x.t['RGa/GR']));
                    break;
                default:
                    b(x.intl.string(x.t['0QLzfn']));
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (A(!0),
                  o
                      .k({ withAnalyticsToken: !0 })
                      .then(() => A(!1))
                      .catch(() => A(!1)))
                : A(!1);
        }, [n]),
        r.useEffect(() => {
            !E && !I && a.Z.getExperiments();
        }, [E, I]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? b(x.intl.string(x.t.e6mZMj)) : j(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    j(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    N(!1);
                }
            };
            N(!0), e((0, c.Z)(t)), (0, m.e)('report_second_look');
        }, [t]),
        I &&
            !S &&
            (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Dx, {
                        className: _.marginBottom8,
                        children: C
                    }),
                    v && (0, i.jsx)(l.Spinner, {})
                ]
            })
    );
};
