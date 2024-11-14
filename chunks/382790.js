n(47120);
var i,
    s = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(552062),
    d = n(416568),
    u = n(914010),
    h = n(518084),
    p = n(178528),
    f = n(669083),
    m = n(483962),
    g = n(711553),
    v = n(388032),
    _ = n(925790);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    let { closePopout: t } = e;
    return (0, s.jsx)(f.Z, { onClose: t });
}
class Z extends (i = r.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n } = this.props,
            i =
                null != e
                    ? (0, s.jsx)(
                          p.Z,
                          {
                              guildId: e,
                              onDragStart: this.onDragStart
                          },
                          e
                      )
                    : (0, s.jsx)(g.Z, {
                          title: v.intl.string(v.t.YUU0RE),
                          renderSettings: x,
                          onDragStart: this.onDragStart,
                          children: (0, s.jsx)(m.Z, {})
                      }),
            r = n ? 'div' : h.ZP;
        return (0, s.jsxs)(r, {
            className: l()(_.base, { [_.widget]: !n }),
            children: [
                (0, s.jsx)(d.Z, {
                    isOverlay: !0,
                    disableAppDownload: !0,
                    isVisible: !t
                }),
                i
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'onDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
E(Z, 'defaultProps', { contained: !1 }), (t.Z = o.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(Z));
