var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(501834);
function c(e, t, n) {
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
let d = {
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left'
    },
    _ = {
        [d.UP]: u.up,
        [d.RIGHT]: u.right,
        [d.DOWN]: u.down,
        [d.LEFT]: u.left
    };
class E extends (r = a.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(l.ArrowSmallUpIcon, {
            size: 'md',
            color: 'currentColor',
            className: s()(u.__invalid_arrow, t, { [_[e]]: !0 })
        });
    }
}
c(E, 'Directions', d), (t.Z = E);
