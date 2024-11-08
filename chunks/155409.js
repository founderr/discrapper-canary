n.d(t, {
    Z: function () {
        return C;
    }
});
var i,
    l,
    a,
    r,
    s = n(200651),
    o = n(192379),
    c = n(995295),
    d = n(374470),
    u = n(442837),
    h = n(260300),
    p = n(451478),
    m = n(5560),
    f = n(10401);
class g extends (r = o.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: i, tutorialId: l, visible: a, windowSize: r } = e;
        l !== this.props.tutorialId ? h.Z.hide(l) : (a !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || i !== this.props.offsetY || r !== this.props.windowSize) && this.show(this.props.visible);
    }
    show(e) {
        let { tutorialId: t, position: n, offsetX: i, offsetY: l, visible: a, inlineSpecs: r, autoInvert: s } = this.props;
        if (e && null == r) {
            let e = (0, c.findDOMNode)(this);
            if (!(0, d.k)(e)) return;
            let { top: a, left: r, right: o, bottom: u } = e.getBoundingClientRect();
            h.Z.show(t, {
                position: n,
                targetWidth: o - r,
                targetHeight: u - a,
                autoInvert: s,
                origin: {
                    x: r,
                    y: a
                },
                offset: {
                    x: i,
                    y: l
                }
            });
        } else a && h.Z.hide(t);
    }
    render() {
        let { inlineSpecs: e, tutorialId: t, children: n, visible: i, windowFocused: l, position: a, autoInvert: r } = this.props,
            c = f.Z.getData()[t];
        return null != e && null != c
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      n,
                      i &&
                          (0, s.jsx)(m.V, {
                              autoInvert: r,
                              position: a,
                              tutorialId: t,
                              tutorialDefinition: c,
                              focused: l,
                              ...e
                          })
                  ]
              })
            : o.Children.only(n);
    }
}
function C(e) {
    let { tutorialId: t } = e,
        n = (0, u.e7)([f.Z], () => f.Z.shouldShow(t), [t]),
        i = (0, u.e7)([p.Z], () => p.Z.isFocused()),
        l = (0, u.e7)([p.Z], () => p.Z.windowSize(), []);
    return (0, s.jsx)(g, {
        ...e,
        visible: n,
        windowFocused: i,
        windowSize: l
    });
}
(a = {
    position: 'top',
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0
}),
    (l = 'defaultProps') in (i = g)
        ? Object.defineProperty(i, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = a);
