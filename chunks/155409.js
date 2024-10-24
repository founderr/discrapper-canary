n.d(t, {
    Z: function () {
        return E;
    }
});
var i,
    s,
    a,
    l,
    r = n(200651),
    o = n(192379),
    c = n(995295),
    u = n(374470),
    d = n(442837),
    h = n(260300),
    p = n(451478),
    m = n(5560),
    _ = n(10401);
class f extends (l = o.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: i, tutorialId: s, visible: a, windowSize: l } = e;
        s !== this.props.tutorialId ? h.Z.hide(s) : (a !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || i !== this.props.offsetY || l !== this.props.windowSize) && this.show(this.props.visible);
    }
    show(e) {
        let { tutorialId: t, position: n, offsetX: i, offsetY: s, visible: a, inlineSpecs: l, autoInvert: r } = this.props;
        if (e && null == l) {
            let e = (0, c.findDOMNode)(this);
            if (!(0, u.k)(e)) return;
            let { top: a, left: l, right: o, bottom: d } = e.getBoundingClientRect();
            h.Z.show(t, {
                position: n,
                targetWidth: o - l,
                targetHeight: d - a,
                autoInvert: r,
                origin: {
                    x: l,
                    y: a
                },
                offset: {
                    x: i,
                    y: s
                }
            });
        } else a && h.Z.hide(t);
    }
    render() {
        let { inlineSpecs: e, tutorialId: t, children: n, visible: i, windowFocused: s, position: a, autoInvert: l } = this.props,
            c = _.Z.getData()[t];
        return null != e && null != c
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      n,
                      i &&
                          (0, r.jsx)(m.V, {
                              autoInvert: l,
                              position: a,
                              tutorialId: t,
                              tutorialDefinition: c,
                              focused: s,
                              ...e
                          })
                  ]
              })
            : o.Children.only(n);
    }
}
function E(e) {
    let { tutorialId: t } = e,
        n = (0, d.e7)([_.Z], () => _.Z.shouldShow(t), [t]),
        i = (0, d.e7)([p.Z], () => p.Z.isFocused()),
        s = (0, d.e7)([p.Z], () => p.Z.windowSize(), []);
    return (0, r.jsx)(f, {
        ...e,
        visible: n,
        windowFocused: i,
        windowSize: s
    });
}
(a = {
    position: 'top',
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0
}),
    (s = 'defaultProps') in (i = f)
        ? Object.defineProperty(i, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = a);
