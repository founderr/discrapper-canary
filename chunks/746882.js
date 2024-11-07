n.r(t),
    n.d(t, {
        default: function () {
            return v;
        }
    }),
    n(47120);
var a,
    l,
    r = n(200651),
    i = n(192379),
    o = n(512722),
    s = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(442837),
    f = n(481060),
    h = n(749210),
    m = n(600164),
    E = n(313201),
    _ = n(592125),
    A = n(944486),
    y = n(594174),
    p = n(626135),
    x = n(63063),
    b = n(771308),
    T = n(758119),
    N = n(13430),
    g = n(723359),
    M = n(981631),
    G = n(388032),
    R = n(580764);
function v(e) {
    let { transitionState: t, source: a } = e,
        l = (0, d.e7)([y.default], () => y.default.getCurrentUser()),
        o = (0, d.e7)([A.Z, _.Z], () => _.Z.getChannel(A.Z.getChannelId())),
        [u, v] = i.useState(null),
        [C, k] = i.useState(null),
        [j, S] = i.useState(!1),
        [D, O] = i.useState(0),
        L = i.createRef(),
        Z = i.createRef(),
        U = (0, E.Dt)(),
        I = null != u ? c()().diff(u, 'years') : null;
    function F() {
        let e = null == o ? void 0 : o.getGuildId();
        h.Z.nsfwReturnToSafety(e), (0, T.qV)(a);
    }
    async function w() {
        s()(null != u, 'Cannot submit null birthday.');
        try {
            return k(null), S(!0), await (0, b.Av)(u, a);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, T.C8)(a, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? k(G.intl.string(G.t['TGg/2t'])) : k(null == t ? void 0 : t.body.message), S(!1);
            }
        }
    }
    async function B() {
        if ((s()(null != I, "Cannot submit if we haven't been able to calculate age."), I < 18)) {
            O(1);
            return;
        }
        await w();
    }
    async function Y(e) {
        e.preventDefault(), !j && null != u && (await B());
    }
    async function P() {
        null == (await w()) && O(0);
    }
    i.useEffect(() => {
        null != l && null != l.nsfwAllowed && (0, T.qq)(a);
    }),
        i.useEffect(() => {
            p.default.track(M.rMx.AGE_GATE_ACTION, {
                source: a,
                action: g.Al.AGE_GATE_OPEN
            });
        }, [a]);
    let z = i.useCallback(
            (e) => {
                v(e);
            },
            [v]
        ),
        W = i.useCallback(() => {
            var e;
            null === (e = Z.current) || void 0 === e || e.focus();
        }, [Z]);
    return 0 === D
        ? (function () {
              let e = (() => {
                      if (a === g.L0.FAMILY_CENTER) return G.intl.string(G.t.M7mt7u);
                      return G.intl.string(G.t.F8otRk);
                  })(),
                  l = (() => {
                      switch (a) {
                          case g.L0.FAMILY_CENTER:
                              return G.intl.string(G.t.mhUrKS);
                          case g.L0.DEEP_LINK_PROMPT:
                              return G.intl.format(G.t.iyhg2t, { helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE) });
                          default:
                              return G.intl.format(G.t.n3QjDA, { helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE) });
                      }
                  })();
              return (0, r.jsxs)(f.ModalRoot, {
                  transitionState: t,
                  size: f.ModalSize.SMALL,
                  'aria-labelledby': U,
                  children: [
                      (0, r.jsxs)(f.ModalContent, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: R.container,
                                  children: [
                                      (0, r.jsx)('img', {
                                          alt: '',
                                          src: n(462991),
                                          className: R.img
                                      }),
                                      (0, r.jsx)(f.Heading, {
                                          variant: 'heading-xl/semibold',
                                          className: R.title,
                                          id: U,
                                          children: e
                                      }),
                                      (0, r.jsx)(f.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: l
                                      })
                                  ]
                              }),
                              (0, r.jsx)('form', {
                                  onSubmit: Y,
                                  children: (0, r.jsx)(N.Z, {
                                      label: G.intl.string(G.t.rhBeKS),
                                      wrapperClassName: R.birthday,
                                      name: 'date_of_birth',
                                      onChange: z,
                                      onPopulated: W,
                                      error: C,
                                      value: u,
                                      ref: L,
                                      autoFocus: !0
                                  })
                              })
                          ]
                      }),
                      (0, r.jsxs)(f.ModalFooter, {
                          justify: m.Z.Justify.BETWEEN,
                          children: [
                              (0, r.jsx)(f.Button, {
                                  buttonRef: Z,
                                  submitting: j,
                                  disabled: null == u,
                                  size: f.ButtonSizes.SMALL,
                                  onClick: B,
                                  children: G.intl.string(G.t.uBFuoq)
                              }),
                              (0, r.jsx)(f.Button, {
                                  look: f.Button.Looks.LINK,
                                  size: f.Button.Sizes.NONE,
                                  color: f.Button.Colors.PRIMARY,
                                  onClick: F,
                                  children: G.intl.string(G.t['1MrpWF'])
                              })
                          ]
                      })
                  ]
              });
          })()
        : (0, r.jsxs)(f.ModalRoot, {
              transitionState: f.ModalTransitionState.ENTERED,
              size: f.ModalSize.SMALL,
              'aria-labelledby': U,
              children: [
                  (0, r.jsx)(f.ModalContent, {
                      children: (0, r.jsxs)('div', {
                          className: R.confirmContainer,
                          children: [
                              (0, r.jsx)(f.Heading, {
                                  variant: 'heading-xl/semibold',
                                  className: R.confirmTitle,
                                  id: U,
                                  children: G.intl.format(G.t.wumolZ, { age: I })
                              }),
                              (0, r.jsx)(f.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: G.intl.format(G.t.n3QjDA, { helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE) })
                              })
                          ]
                      })
                  }),
                  (0, r.jsxs)(f.ModalFooter, {
                      className: R.confirmFooter,
                      children: [
                          (0, r.jsx)(f.Button, {
                              look: f.Button.Looks.LINK,
                              size: f.Button.Sizes.NONE,
                              color: f.Button.Colors.PRIMARY,
                              onClick: () => O(0),
                              children: G.intl.string(G.t.cfYCra)
                          }),
                          (0, r.jsx)(f.Button, {
                              color: f.Button.Colors.BRAND,
                              onClick: P,
                              children: G.intl.string(G.t['6tahio'])
                          })
                      ]
                  })
              ]
          });
}
((l = a || (a = {}))[(l.AGE_GATE_FORM = 0)] = 'AGE_GATE_FORM'), (l[(l.CONFIRM = 1)] = 'CONFIRM');
