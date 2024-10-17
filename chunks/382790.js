n(47120);
var i,
    s = n(735250),
    a = n(470079),
    r = n(120356),
    o = n.n(r),
    l = n(442837),
    c = n(552062),
    d = n(416568),
    u = n(914010),
    h = n(518084),
    p = n(178528),
    f = n(669083),
    _ = n(483962),
    E = n(711553),
    g = n(689938),
    m = n(925790);
function I(e, t, n) {
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
function Z(e) {
    let { closePopout: t } = e;
    return (0, s.jsx)(f.Z, { onClose: t });
}
class v extends (i = a.PureComponent) {
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
                    : (0, s.jsx)(E.Z, {
                          title: g.Z.Messages.DIRECT_MESSAGES,
                          renderSettings: Z,
                          onDragStart: this.onDragStart,
                          children: (0, s.jsx)(_.Z, {})
                      }),
            a = n ? 'div' : h.ZP;
        return (0, s.jsxs)(a, {
            className: o()(m.base, { [m.widget]: !n }),
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
            I(this, 'onDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
I(v, 'defaultProps', { contained: !1 }), (t.Z = l.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(v));
