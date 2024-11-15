t(47120);
var i,
    l = t(200651),
    r = t(192379),
    u = t(120356),
    a = t.n(u),
    d = t(481060),
    o = t(37234),
    s = t(230711),
    c = t(981631),
    f = t(388032),
    _ = t(213914);
function E(n, e, t) {
    return (
        e in n
            ? Object.defineProperty(n, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (n[e] = t),
        n
    );
}
class p extends (i = r.Component) {
    render() {
        return (0, l.jsxs)('div', {
            className: _.streamerModeEnabled,
            children: [
                (0, l.jsx)('div', { className: _.streamerModeEnabledImage }),
                (0, l.jsx)(d.Clickable, {
                    className: a()(_.streamerModeEnabledBtn, { [_.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...n) {
        super(...n),
            E(this, 'handleClick', () => {
                !this.props.disableButton && ((0, o.jN)(c.S9g.USER_SETTINGS), s.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
E(p, 'defaultProps', { disableButton: !1 }), (e.Z = p);
