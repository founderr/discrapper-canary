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
    let { buttonRef: t, dismissed: n, onDismiss: u, renderComponent: h } = e,
        p = l.useContext(c.h9),
        [m, f] = l.useState(''),
        [g, C] = l.useState(!1),
        x = (0, r.e7)([o.ZP], () => o.ZP.callHeaderHeight),
        _ = l.createRef(),
        v = l.useRef(0);
    l.useEffect(() => {
        var e, t;
        f(String(v.current)), C(void 0 !== x && x < (null !== (t = null === (e = _.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), (v.current += 1);
    }, [x, _]);
    let { preventIdle: I, allowIdle: E } = (0, d.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(s.ZP, {
              children: (0, i.jsx)(a.ReferencePositionLayer, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  nudgeAlignIntoViewport: !1,
                  positionKey: m,
                  children: () =>
                      (0, i.jsx)('div', {
                          ref: _,
                          onMouseOver: I,
                          onFocus: I,
                          onBlur: E,
                          onMouseLeave: E,
                          children: h({
                              hidden: g || p || n,
                              onDismiss: u
                          })
                      })
              })
          });
}
