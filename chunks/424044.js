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
    p = n(551549),
    g = n(108427),
    m = n(314897),
    f = n(981631),
    x = n(388032),
    _ = n(232186);
s.ZP.initialize();
t.Z = (e) => {
    let { location: t } = e,
        n = (0, s.e7)([m.default], () => m.default.isAuthenticated()),
        E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        v = (0, p.oK)('RSL - Landing Page'),
        [I, b] = r.useState(!1),
        [N, C] = r.useState(x.intl.string(x.t['9exy+f'])),
        [S, A] = r.useState(!0),
        T = (e) => {
            switch (e) {
                case f.evJ.INVALID_FORM_BODY:
                case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    C(x.intl.string(x.t.bzXDfX));
                    break;
                case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                    C(x.intl.string(x.t.rV00ws));
                    break;
                case f.evJ.DSA_RSL_LIMITED_TIME:
                    C(x.intl.string(x.t['0dI29v']));
                    break;
                case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    C(x.intl.string(x.t['RGa/GR']));
                    break;
                default:
                    C(x.intl.string(x.t['0QLzfn']));
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
            !E && !v && a.Z.getExperiments();
        }, [E, v]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, h.hs)(e) : void 0;
                    null != n ? C(x.intl.string(x.t.e6mZMj)) : T(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    T(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    b(!1);
                }
            };
            b(!0), e((0, c.Z)(t)), (0, g.e)('report_second_look');
        }, [t]),
        v &&
            !S &&
            (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Dx, {
                        className: _.marginBottom8,
                        children: N
                    }),
                    I && (0, i.jsx)(l.Spinner, {})
                ]
            })
    );
};
