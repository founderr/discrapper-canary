var r,
    i,
    a,
    s,
    o = n(200651),
    l = n(192379),
    u = n(120356),
    c = n.n(u),
    d = n(481060),
    f = n(998076);
let _ = {
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left'
    },
    p = {
        [_.UP]: f.up,
        [_.RIGHT]: f.right,
        [_.DOWN]: f.down,
        [_.LEFT]: f.left
    };
class h extends (s = l.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, o.jsx)(d.ArrowSmallUpIcon, {
            size: 'md',
            color: 'currentColor',
            className: c()(f.__invalid_arrow, t, { [p[e]]: !0 })
        });
    }
}
(r = h),
    (i = 'Directions'),
    (a = _),
    i in r
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = h);
