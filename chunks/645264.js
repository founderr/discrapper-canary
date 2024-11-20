t.r(n);
var o = t(200651),
    r = t(192379),
    i = t(442837),
    a = t(215569),
    s = t(481060),
    l = t(852860),
    c = t(313201),
    u = t(944163),
    d = t(266395),
    f = t(200305),
    m = t(592286),
    h = t(388032),
    b = t(27471);
let _ = () =>
    (0, o.jsx)(l.Z, {
        submitting: !1,
        message: h.intl.string(h.t['8g514e']),
        onReset: () => {
            (0, d.PE)(!1);
        },
        onResetText: h.intl.string(h.t['ETE/oK']),
        onSave: () => {
            (0, d.PE)(!1), (0, s.closeModal)(m.Pn);
        },
        onSaveText: h.intl.string(h.t['Xt+UaW']),
        onSaveButtonColor: s.ButtonColors.RED
    });
n.default = (e) => {
    let { guildId: n, transitionState: t, onClose: l, onComplete: m, isPreview: h = !1 } = e,
        p = (0, d.rb)((e) => e.shouldShowWarning),
        x = (0, i.e7)([u.Z], () => u.Z.get(n)),
        C = (0, c.Dt)();
    return (r.useEffect(() => {
        x === u.t && l();
    }, [l, x]),
    x === u.t)
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsxs)(s.ModalRoot, {
                      size: s.ModalSize.MEDIUM,
                      className: b.container,
                      transitionState: t,
                      'aria-labelledby': C,
                      children: [
                          (0, o.jsx)(s.ModalCloseButton, {
                              onClick: () => l(!1),
                              className: b.closeButton
                          }),
                          (0, o.jsx)(f.Z, {
                              headerId: C,
                              guildId: n,
                              onClose: l,
                              onComplete: m,
                              isPreview: h
                          })
                      ]
                  }),
                  (0, o.jsx)(a.W, {
                      children:
                          !0 === p &&
                          (0, o.jsx)(s.SlideIn, {
                              className: b.notice,
                              children: (0, o.jsx)(_, {})
                          })
                  })
              ]
          });
};
