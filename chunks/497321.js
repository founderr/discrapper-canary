t(47120);
var n,
    a = t(200651),
    r = t(192379),
    o = t(120356),
    i = t.n(o),
    c = t(481060),
    u = t(37234),
    d = t(230711),
    l = t(981631),
    f = t(689938),
    _ = t(243014);
function p(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
class g extends (n = r.Component) {
    render() {
        return (0, a.jsxs)('div', {
            className: _.streamerModeEnabled,
            children: [
                (0, a.jsx)('div', { className: _.streamerModeEnabledImage }),
                (0, a.jsx)(c.Clickable, {
                    className: i()(_.streamerModeEnabledBtn, { [_.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.Z.Messages.STREAMER_MODE_ENABLED
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleClick', () => {
                !this.props.disableButton && ((0, u.jN)(l.S9g.USER_SETTINGS), d.Z.setSection(l.oAB.STREAMER_MODE));
            });
    }
}
p(g, 'defaultProps', { disableButton: !1 }), (s.Z = g);
