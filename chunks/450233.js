n.d(t, {
    G: function () {
        return s;
    }
});
var i,
    r,
    a,
    l,
    s,
    o,
    c = n(200651),
    d = n(192379),
    u = n(442837),
    h = n(570140),
    m = n(16084),
    p = n(855775),
    g = n(388032);
((i = s || (s = {})).SHORT = 'SHORT'), (i.LONG = 'LONG');
class f extends (o = d.PureComponent) {
    getText(e, t) {
        if (429 === e.status)
            switch (t) {
                case 'SHORT':
                    return g.intl.string(g.t.T15lqq);
                case 'LONG':
                    return g.intl.string(g.t.XFShdH);
            }
        switch (t) {
            case 'SHORT':
                return g.intl.string(g.t['+XstBw']);
            case 'LONG':
                return g.intl.string(g.t.epyCur);
        }
    }
    componentWillUnmount() {
        null != this.props.purchaseError && h.Z.wait(() => m.pB());
    }
    render() {
        let { className: e, purchaseError: t, messageStyle: n } = this.props;
        return null == t
            ? null
            : (0, c.jsx)('div', {
                  className: e,
                  children: this.getText(t, n)
              });
    }
}
(l = { messageStyle: 'LONG' }),
    (a = 'defaultProps') in (r = f)
        ? Object.defineProperty(r, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = l),
    (t.Z = u.ZP.connectStores([p.Z], () => ({ purchaseError: p.Z.error }))(f));
