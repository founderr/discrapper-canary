var r,
    i,
    a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(481060),
    d = n(600164),
    _ = n(661354);
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
!(function (e) {
    (e.SINGLE_AVATAR = '1'), (e.MULTIPLE_AVATAR = '2');
})(r || (r = {}));
let f = {
    [c.AvatarSizes.SIZE_32]: _.avatarSmall,
    [c.AvatarSizes.SIZE_40]: _.avatarLarge
};
class h extends (i = s.Component) {
    render() {
        let { type: e, avatarSize: t, className: n } = this.props;
        return '2' === e
            ? (0, o.jsxs)('div', {
                  className: u()(_.multiplePlaceholder, n),
                  children: [
                      (0, o.jsxs)(d.Z, {
                          children: [(0, o.jsx)('div', { className: u()(_.placeholderAvatar, f[t], _.avatarMasked) }), (0, o.jsx)('div', { className: u()(_.placeholderAvatar, f[t], _.avatarMasked) }), (0, o.jsx)('div', { className: u()(_.placeholderAvatar, f[t]) })]
                      }),
                      (0, o.jsx)(d.Z, {
                          grow: 1,
                          className: _.mulitplePlaceholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              })
            : (0, o.jsxs)(d.Z, {
                  className: u()(_.placeholder, n),
                  children: [
                      (0, o.jsx)('div', { className: u()(_.placeholderAvatar, f[t]) }),
                      (0, o.jsx)(d.Z, {
                          grow: 1,
                          className: _.placeholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e), E(this, 'placeholderMaxWidth', ''.concat(Math.floor(40 * Math.random()) + 40, '%'));
    }
}
E(h, 'defaultProps', { type: '1' }), E(h, 'Types', r), (t.Z = h);
