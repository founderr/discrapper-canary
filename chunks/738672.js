n.d(t, {
    h: function () {
        return d;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(481060),
    r = n(909820),
    o = n(740492),
    c = n(937995),
    u = n(618158);
function d(e) {
    let { buttonRef: t, dismissed: n, onDismiss: d, renderComponent: h } = e,
        p = s.useContext(c.h9),
        [m, _] = s.useState(''),
        [f, E] = s.useState(!1),
        g = (0, a.e7)([o.ZP], () => o.ZP.callHeaderHeight),
        C = s.createRef(),
        I = s.useRef(0);
    s.useEffect(() => {
        var e, t;
        _(String(I.current)), E(void 0 !== g && g < (null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), (I.current += 1);
    }, [g, C]);
    let { preventIdle: T, allowIdle: x } = (0, u.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(r.ZP, {
              children: (0, i.jsx)(l.ReferencePositionLayer, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  nudgeAlignIntoViewport: !1,
                  positionKey: m,
                  children: () =>
                      (0, i.jsx)('div', {
                          ref: C,
                          onMouseOver: T,
                          onFocus: T,
                          onBlur: x,
                          onMouseLeave: x,
                          children: h({
                              hidden: f || p || n,
                              onDismiss: d
                          })
                      })
              })
          });
}
