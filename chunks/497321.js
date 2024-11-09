t(47120);
var i,
    r = t(200651),
    l = t(192379),
    o = t(120356),
    u = t.n(o),
    a = t(481060),
    s = t(37234),
    c = t(230711),
    d = t(981631),
    f = t(388032),
    p = t(243014);
function _(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class m extends (i = l.Component) {
    render() {
        return (0, r.jsxs)('div', {
            className: p.streamerModeEnabled,
            children: [
                (0, r.jsx)('div', { className: p.streamerModeEnabledImage }),
                (0, r.jsx)(a.Clickable, {
                    className: u()(p.streamerModeEnabledBtn, { [p.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleClick', () => {
                !this.props.disableButton && ((0, s.jN)(d.S9g.USER_SETTINGS), c.Z.setSection(d.oAB.STREAMER_MODE));
            });
    }
}
_(m, 'defaultProps', { disableButton: !1 }), (n.Z = m);
