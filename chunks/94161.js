n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(976649),
    l = n(318766),
    u = n(28546),
    c = n(957825),
    d = n(482133);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a } = e,
            [f, _, p] = (0, u.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], o.X),
            h = i.useCallback(() => {
                (0, u.RO)(c.X1.EMOJI, a);
            }, [a]);
        return n
            ? null
            : (0, r.jsx)('div', {
                  className: s()(c.CT, d.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(l.Z, {
                      className: d.emojiButton,
                      onClick: h,
                      active: f === c.X1.EMOJI && _ === a,
                      'aria-controls': p,
                      tabIndex: 0,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: -4,
                              right: -4
                          }
                      }
                  })
              });
    })
);
