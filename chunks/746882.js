a.r(t),
    a.d(t, {
        default: function () {
            return C;
        }
    }),
    a(47120);
var n,
    l,
    s = a(735250),
    r = a(470079),
    o = a(512722),
    i = a.n(o),
    u = a(913527),
    c = a.n(u),
    d = a(442837),
    _ = a(481060),
    E = a(749210),
    A = a(600164),
    f = a(313201),
    h = a(592125),
    T = a(944486),
    G = a(594174),
    m = a(626135),
    M = a(63063),
    y = a(771308),
    N = a(758119),
    p = a(13430),
    R = a(723359),
    x = a(981631),
    b = a(689938),
    g = a(240791);
function C(e) {
    let { transitionState: t, source: n } = e,
        l = (0, d.e7)([G.default], () => G.default.getCurrentUser()),
        o = (0, d.e7)([T.Z, h.Z], () => h.Z.getChannel(T.Z.getChannelId())),
        [u, C] = r.useState(null),
        [O, D] = r.useState(null),
        [v, Z] = r.useState(!1),
        [I, S] = r.useState(0),
        B = r.createRef(),
        k = r.createRef(),
        j = (0, f.Dt)(),
        L = null != u ? c()().diff(u, 'years') : null;
    function Y() {
        let e = null == o ? void 0 : o.getGuildId();
        E.Z.nsfwReturnToSafety(e), (0, N.qV)(n);
    }
    async function U() {
        i()(null != u, 'Cannot submit null birthday.');
        try {
            return D(null), Z(!0), await (0, y.Av)(u, n);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, N.C8)(n, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? D(b.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : D(null == t ? void 0 : t.body.message), Z(!1);
            }
        }
    }
    async function F() {
        if ((i()(null != L, "Cannot submit if we haven't been able to calculate age."), L < 18)) {
            S(1);
            return;
        }
        await U();
    }
    async function P(e) {
        e.preventDefault(), !v && null != u && (await F());
    }
    async function w() {
        null == (await U()) && S(0);
    }
    r.useEffect(() => {
        null != l && null != l.nsfwAllowed && (0, N.qq)(n);
    }),
        r.useEffect(() => {
            m.default.track(x.rMx.AGE_GATE_ACTION, {
                source: n,
                action: R.Al.AGE_GATE_OPEN
            });
        }, [n]);
    let H = r.useCallback(
            (e) => {
                C(e);
            },
            [C]
        ),
        z = r.useCallback(() => {
            var e;
            null === (e = k.current) || void 0 === e || e.focus();
        }, [k]);
    return 0 === I
        ? (function () {
              let e = (() => {
                      if (n === R.L0.FAMILY_CENTER) return b.Z.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
                      return b.Z.Messages.AGE_GATE_EXISTING_HEADER;
                  })(),
                  l = (() => {
                      switch (n) {
                          case R.L0.FAMILY_CENTER:
                              return b.Z.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                          case R.L0.DEEP_LINK_PROMPT:
                              return b.Z.Messages.AGE_GATE_DEEP_LINK_BODY.format({ helpURL: M.Z.getArticleURL(x.BhN.AGE_GATE) });
                          default:
                              return b.Z.Messages.AGE_GATE_NSFW_BODY.format({ helpURL: M.Z.getArticleURL(x.BhN.AGE_GATE) });
                      }
                  })();
              return (0, s.jsxs)(_.ModalRoot, {
                  transitionState: t,
                  size: _.ModalSize.SMALL,
                  'aria-labelledby': j,
                  children: [
                      (0, s.jsxs)(_.ModalContent, {
                          children: [
                              (0, s.jsxs)('div', {
                                  className: g.container,
                                  children: [
                                      (0, s.jsx)('img', {
                                          alt: '',
                                          src: a(462991),
                                          className: g.img
                                      }),
                                      (0, s.jsx)(_.Heading, {
                                          variant: 'heading-xl/semibold',
                                          className: g.title,
                                          id: j,
                                          children: e
                                      }),
                                      (0, s.jsx)(_.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: l
                                      })
                                  ]
                              }),
                              (0, s.jsx)('form', {
                                  onSubmit: P,
                                  children: (0, s.jsx)(p.Z, {
                                      label: b.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                      wrapperClassName: g.birthday,
                                      name: 'date_of_birth',
                                      onChange: H,
                                      onPopulated: z,
                                      error: O,
                                      value: u,
                                      ref: B,
                                      autoFocus: !0
                                  })
                              })
                          ]
                      }),
                      (0, s.jsxs)(_.ModalFooter, {
                          justify: A.Z.Justify.BETWEEN,
                          children: [
                              (0, s.jsx)(_.Button, {
                                  buttonRef: k,
                                  submitting: v,
                                  disabled: null == u,
                                  size: _.ButtonSizes.SMALL,
                                  onClick: F,
                                  children: b.Z.Messages.AGE_GATE_SUBMIT
                              }),
                              (0, s.jsx)(_.Button, {
                                  look: _.Button.Looks.LINK,
                                  size: _.Button.Sizes.NONE,
                                  color: _.Button.Colors.PRIMARY,
                                  onClick: Y,
                                  children: b.Z.Messages.AGE_GATE_GO_BACK
                              })
                          ]
                      })
                  ]
              });
          })()
        : (0, s.jsxs)(_.ModalRoot, {
              transitionState: _.ModalTransitionState.ENTERED,
              size: _.ModalSize.SMALL,
              'aria-labelledby': j,
              children: [
                  (0, s.jsx)(_.ModalContent, {
                      children: (0, s.jsxs)('div', {
                          className: g.confirmContainer,
                          children: [
                              (0, s.jsx)(_.Heading, {
                                  variant: 'heading-xl/semibold',
                                  className: g.confirmTitle,
                                  id: j,
                                  children: b.Z.Messages.AGE_GATE_CONFIRM_HEADER.format({ age: L })
                              }),
                              (0, s.jsx)(_.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: b.Z.Messages.AGE_GATE_NSFW_BODY.format({ helpURL: M.Z.getArticleURL(x.BhN.AGE_GATE) })
                              })
                          ]
                      })
                  }),
                  (0, s.jsxs)(_.ModalFooter, {
                      className: g.confirmFooter,
                      children: [
                          (0, s.jsx)(_.Button, {
                              look: _.Button.Looks.LINK,
                              size: _.Button.Sizes.NONE,
                              color: _.Button.Colors.PRIMARY,
                              onClick: () => S(0),
                              children: b.Z.Messages.AGE_GATE_CONFIRM_GO_BACK
                          }),
                          (0, s.jsx)(_.Button, {
                              color: _.Button.Colors.BRAND,
                              onClick: w,
                              children: b.Z.Messages.AGE_GATE_CONFIRM_BUTTON
                          })
                      ]
                  })
              ]
          });
}
((l = n || (n = {}))[(l.AGE_GATE_FORM = 0)] = 'AGE_GATE_FORM'), (l[(l.CONFIRM = 1)] = 'CONFIRM');
