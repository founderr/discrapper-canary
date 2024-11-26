n(47120);
var i,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    u = n.n(o),
    a = n(481060),
    s = n(37234),
    c = n(230711),
    d = n(981631),
    f = n(388032),
    _ = n(261121);
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
class p extends (i = l.Component) {
    render() {
        return (0, r.jsxs)('div', {
            className: _.streamerModeEnabled,
            children: [
                (0, r.jsx)('div', { className: _.streamerModeEnabledImage }),
                (0, r.jsx)(a.Clickable, {
                    className: u()(_.streamerModeEnabledBtn, { [_.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleClick', () => {
                !this.props.disableButton && ((0, s.jN)(d.S9g.USER_SETTINGS), c.Z.setSection(d.oAB.STREAMER_MODE));
            });
    }
}
E(p, 'defaultProps', { disableButton: !1 }), (t.Z = p);
