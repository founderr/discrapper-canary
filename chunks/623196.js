n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(668781),
    d = n(594174),
    u = n(63063),
    m = n(88658),
    g = n(398826),
    h = n(575356),
    p = n(838436),
    x = n(726985),
    T = n(981631),
    S = n(388032),
    _ = n(565696);
let E = (e) => {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await n.e('25120').then(n.bind(n, 926281));
        return (n) =>
            (0, i.jsx)(t, {
                modalProps: n,
                settings: e
            });
    });
};
function C() {
    let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: n } = (0, a.cj)([h.Z], () => ({
            currentHarvestType: h.Z.harvestType,
            awaitingInitialRequest: h.Z.requestingHarvest
        })),
        [r, C] = s.useState(!1);
    if (null == e) return null;
    let f = (0, m.$6)(t, e) || n,
        I = f && null != t,
        N = () => {
            E({
                header: S.intl.string(S.t.jxXMEx),
                body: S.intl.format(S.t.fSv59f, { helpdeskArticle: u.Z.getArticleURL(T.BhN.GDPR_PACKAGE_CONTENTS) }),
                confirmText: S.intl.string(S.t.NYgNg4),
                cancelText: S.intl.string(S.t.jpVjsr),
                confirmButtonColor: o.Button.Colors.BRAND,
                onConfirm: (e) => {
                    C(!0),
                        (0, g.h)(e)
                            .then(
                                (e) => {
                                    null != e && null != e.body
                                        ? c.Z.show({ body: S.intl.string(S.t['6Nmv4u']) })
                                        : c.Z.show({
                                              title: S.intl.string(S.t.OjbtDg),
                                              body: S.intl.string(S.t['0F5Jys'])
                                          });
                                },
                                () =>
                                    c.Z.show({
                                        title: S.intl.string(S.t.OjbtDg),
                                        body: S.intl.string(S.t['0F5Jys'])
                                    })
                            )
                            .finally(() => C(!1));
                }
            });
        };
    return (0, i.jsxs)(p.U, {
        setting: x.s6.PRIVACY_DATA_REQUEST,
        children: [
            (0, i.jsx)(p.H, {
                header: S.intl.string(S.t.XAHCgI),
                description: S.intl.format(S.t.P3kNfn, { helpdeskArticle: u.Z.getArticleURL(T.BhN.GDPR_REQUEST_DATA) })
            }),
            I
                ? (0, i.jsx)(o.Card, {
                      className: _.card,
                      children: (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: S.intl.format(S.t.RNDlV1, { date: l()(t.created_at).add(T.eBq, 'days').format('MMMM Do YYYY') })
                      })
                  })
                : (0, i.jsx)('div', {
                      className: _.button,
                      children: (0, i.jsx)(o.Tooltip, {
                          text: e.verified ? null : S.intl.string(S.t['c1f88/']),
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: s } = e;
                              return (0, i.jsx)(o.Button, {
                                  disabled: f,
                                  onClick: N,
                                  onMouseEnter: t,
                                  onMouseLeave: s,
                                  look: o.Button.Looks.FILLED,
                                  color: o.Button.Colors.BRAND,
                                  submitting: r || n,
                                  children: S.intl.string(S.t.dmBSKi)
                              });
                          }
                      })
                  })
        ]
    });
}
