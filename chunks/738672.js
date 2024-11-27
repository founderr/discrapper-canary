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
    let { buttonRef: t, dismissed: n, onDismiss: u, renderComponent: h, nudgeAlignIntoViewport: p = !1 } = e,
        m = l.useContext(c.h9),
        [f, g] = l.useState(''),
        [C, x] = l.useState(!1),
        _ = (0, r.e7)([o.ZP], () => o.ZP.callHeaderHeight),
        v = l.createRef(),
        I = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener('click', u), () => e.removeEventListener('click', u);
    }),
        l.useEffect(() => {
            var e, t;
            g(String(I.current)), x(void 0 !== _ && _ < (null !== (t = null === (e = v.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), (I.current += 1);
        }, [_, v]);
    let { preventIdle: E, allowIdle: b } = (0, d.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(s.ZP, {
              children: (0, i.jsx)(a.ReferencePositionLayer, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  nudgeAlignIntoViewport: p,
                  positionKey: f,
                  children: () =>
                      (0, i.jsx)('div', {
                          ref: v,
                          onMouseOver: E,
                          onFocus: E,
                          onBlur: b,
                          onMouseLeave: b,
                          children: h({
                              hidden: C || m || n,
                              onDismiss: u
                          })
                      })
              })
          });
}
