n.d(t, {
    h: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(909820),
    o = n(740492),
    c = n(937995),
    d = n(618158);
function u(e) {
    let { buttonRef: t, dismissed: n, onDismiss: u, renderComponent: h, nudgeAlignIntoViewport: p = !1, skipForceHide: m = !1 } = e,
        f = l.useContext(c.h9),
        [g, C] = l.useState(''),
        [x, v] = l.useState(!1),
        _ = (0, r.e7)([o.ZP], () => o.ZP.callHeaderHeight),
        I = l.createRef(),
        E = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener('click', u), () => e.removeEventListener('click', u);
    }),
        l.useEffect(() => {
            if (!m) {
                var e, t;
                C(String(E.current)), v(void 0 !== _ && _ < (null !== (t = null === (e = I.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), (E.current += 1);
            }
        }, [_, I, m]);
    let { preventIdle: b, allowIdle: Z } = (0, d.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(s.ZP, {
              children: (0, i.jsx)(a.ReferencePositionLayer, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: p,
                  children: () =>
                      (0, i.jsx)('div', {
                          ref: I,
                          onMouseOver: b,
                          onFocus: b,
                          onBlur: Z,
                          onMouseLeave: Z,
                          children: h({
                              hidden: x || f || n,
                              onDismiss: u
                          })
                      })
              })
          });
}
