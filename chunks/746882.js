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
    E = n(600164),
    m = n(313201),
    _ = n(592125),
    A = n(944486),
    y = n(594174),
    p = n(626135),
    x = n(63063),
    T = n(771308),
    b = n(758119),
    N = n(13430),
    g = n(723359),
    M = n(981631),
    R = n(388032),
    G = n(240791);
function v(e) {
    let { transitionState: t, source: a } = e,
        l = (0, d.e7)([y.default], () => y.default.getCurrentUser()),
        o = (0, d.e7)([A.Z, _.Z], () => _.Z.getChannel(A.Z.getChannelId())),
        [u, v] = i.useState(null),
        [C, k] = i.useState(null),
        [j, S] = i.useState(!1),
        [D, L] = i.useState(0),
        O = i.createRef(),
        Z = i.createRef(),
        I = (0, m.Dt)(),
        U = null != u ? c()().diff(u, 'years') : null;
    function F() {
        if (a === g.L0.NSFW_SERVER_INVITE_EMBED) {
            (0, b.qV)(a);
            return;
        }
        let e = null == o ? void 0 : o.getGuildId();
        h.Z.nsfwReturnToSafety(e), (0, b.qV)(a);
    }
    async function B() {
        s()(null != u, 'Cannot submit null birthday.');
        try {
            return k(null), S(!0), await (0, T.Av)(u, a);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, b.C8)(a, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? k(R.intl.string(R.t['TGg/2t'])) : k(null == t ? void 0 : t.body.message), S(!1);
            }
        }
    }
    async function w() {
        if ((s()(null != U, "Cannot submit if we haven't been able to calculate age."), U < 18)) {
            L(1);
            return;
        }
        await B();
    }
    async function Y(e) {
        e.preventDefault(), !j && null != u && (await w());
    }
    async function P() {
        null == (await B()) && L(0);
    }
    i.useEffect(() => {
        null != l && null != l.nsfwAllowed && (0, b.qq)(a);
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
                      if (a === g.L0.FAMILY_CENTER) return R.intl.string(R.t.M7mt7u);
                      return R.intl.string(R.t.F8otRk);
                  })(),
                  l = (() => {
                      switch (a) {
                          case g.L0.FAMILY_CENTER:
                              return R.intl.string(R.t.mhUrKS);
                          case g.L0.DEEP_LINK_PROMPT:
                              return R.intl.format(R.t.iyhg2t, { helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE) });
                          default:
                              return R.intl.format(R.t.n3QjDA, { helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE) });
                      }
                  })();
              return (0, r.jsxs)(f.ModalRoot, {
                  transitionState: t,
                  size: f.ModalSize.SMALL,
                  'aria-labelledby': I,
                  children: [
                      (0, r.jsxs)(f.ModalContent, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: G.container,
                                  children: [
                                      (0, r.jsx)('img', {
                                          alt: '',
                                          src: n(462991),
                                          className: G.img
                                      }),
                                      (0, r.jsx)(f.Heading, {
                                          variant: 'heading-xl/semibold',
                                          className: G.title,
                                          id: I,
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
                                      label: R.intl.string(R.t.rhBeKS),
                                      wrapperClassName: G.birthday,
                                      name: 'date_of_birth',
                                      onChange: z,
                                      onPopulated: W,
                                      error: C,
                                      value: u,
                                      ref: O,
                                      autoFocus: !0
                                  })
                              })
                          ]
                      }),
                      (0, r.jsxs)(f.ModalFooter, {
                          justify: E.Z.Justify.BETWEEN,
                          children: [
                              (0, r.jsx)(f.Button, {
                                  buttonRef: Z,
                                  submitting: j,
                                  disabled: null == u,
                                  size: f.ButtonSizes.SMALL,
                                  onClick: w,
                                  children: R.intl.string(R.t.uBFuoq)
                              }),
                              (0, r.jsx)(f.Button, {
                                  look: f.Button.Looks.LINK,
                                  size: f.Button.Sizes.NONE,
                                  color: f.Button.Colors.PRIMARY,
                                  onClick: F,
                                  children: R.intl.string(R.t['1MrpWF'])
                              })
                          ]
                      })
                  ]
              });
          })()
        : (0, r.jsxs)(f.ModalRoot, {
              transitionState: f.ModalTransitionState.ENTERED,
              size: f.ModalSize.SMALL,
              'aria-labelledby': I,
              children: [
                  (0, r.jsx)(f.ModalContent, {
                      children: (0, r.jsxs)('div', {
                          className: G.confirmContainer,
                          children: [
                              (0, r.jsx)(f.Heading, {
                                  variant: 'heading-xl/semibold',
                                  className: G.confirmTitle,
                                  id: I,
                                  children: R.intl.format(R.t.wumolZ, { age: U })
                              }),
                              (0, r.jsx)(f.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: R.intl.format(R.t.n3QjDA, { helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE) })
                              })
                          ]
                      })
                  }),
                  (0, r.jsxs)(f.ModalFooter, {
                      className: G.confirmFooter,
                      children: [
                          (0, r.jsx)(f.Button, {
                              look: f.Button.Looks.LINK,
                              size: f.Button.Sizes.NONE,
                              color: f.Button.Colors.PRIMARY,
                              onClick: () => L(0),
                              children: R.intl.string(R.t.cfYCra)
                          }),
                          (0, r.jsx)(f.Button, {
                              color: f.Button.Colors.BRAND,
                              onClick: P,
                              children: R.intl.string(R.t['6tahio'])
                          })
                      ]
                  })
              ]
          });
}
((l = a || (a = {}))[(l.AGE_GATE_FORM = 0)] = 'AGE_GATE_FORM'), (l[(l.CONFIRM = 1)] = 'CONFIRM');
