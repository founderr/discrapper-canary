n.r(t), n(47120);
var s = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(279837),
    a = n(479531),
    r = n(144114),
    h = n(145454),
    u = n(23434),
    d = n(594174),
    c = n(1964),
    p = n(388032);
t.default = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: m, transitionState: f, reason: g } = e,
        C = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        y = (0, o.e7)([u.Z], () => u.Z.getAction()),
        [x, b] = i.useState(null),
        [j, v] = i.useState(null),
        [N, P] = i.useState(null),
        [R, w] = i.useState(!1),
        k = i.useCallback(
            async (e) => {
                w(!0);
                try {
                    c.Z.isPhoneReverification(C, y) ? await r.Z.beginReverifyPhone(e, g) : await r.Z.beginAddPhone(e, g), P(null), b(e);
                } catch (e) {
                    P(new a.Z(e));
                }
                w(!1);
            },
            [C, g, y]
        ),
        S = i.useCallback(
            async (e) => {
                if (null != x && null != C) {
                    w(!0);
                    try {
                        let { token: t } = await r.Z.verifyPhone(x, e);
                        P(null), v(t);
                    } catch (e) {
                        P(new a.Z(e));
                    }
                    w(!1);
                }
            },
            [C, x]
        ),
        Z = i.useCallback(
            async (e) => {
                if (null != j) c.Z.isPhoneReverification(C, y) ? await r.Z.reverifyPhone(j, e, g) : await r.Z.addPhone(j, e, g), null == n || n(), m();
            },
            [n, m, j, g, C, y]
        );
    return null != j
        ? (0, s.jsx)(l.default, {
              onClose: m,
              transitionState: f,
              title: p.intl.string(p.t.ZtCDc3),
              handleSubmit: Z
          })
        : (0, s.jsx)(h.Z, {
              onClose: m,
              transitionState: f,
              error: null == N ? void 0 : N.getAnyErrorMessage(),
              working: R,
              validPhone: null != x,
              onAddPhone: k,
              onVerifyPhone: S
          });
});
