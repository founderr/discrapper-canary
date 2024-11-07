n(47120);
var r,
    i,
    a,
    s = n(200651),
    o = n(192379),
    l = n(120356),
    u = n.n(l),
    c = n(481060),
    d = n(600164),
    f = n(139555);
function _(e, t, n) {
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
((a = r || (r = {})).SINGLE_AVATAR = '1'), (a.MULTIPLE_AVATAR = '2');
let h = {
    [c.AvatarSizes.SIZE_32]: f.avatarSmall,
    [c.AvatarSizes.SIZE_40]: f.avatarLarge
};
class p extends (i = o.Component) {
    render() {
        let { type: e, avatarSize: t, className: n } = this.props;
        return '2' === e
            ? (0, s.jsxs)('div', {
                  className: u()(f.multiplePlaceholder, n),
                  children: [
                      (0, s.jsxs)(d.Z, {
                          children: [(0, s.jsx)('div', { className: u()(f.placeholderAvatar, h[t], f.avatarMasked) }), (0, s.jsx)('div', { className: u()(f.placeholderAvatar, h[t], f.avatarMasked) }), (0, s.jsx)('div', { className: u()(f.placeholderAvatar, h[t]) })]
                      }),
                      (0, s.jsx)(d.Z, {
                          grow: 1,
                          className: f.mulitplePlaceholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              })
            : (0, s.jsxs)(d.Z, {
                  className: u()(f.placeholder, n),
                  children: [
                      (0, s.jsx)('div', { className: u()(f.placeholderAvatar, h[t]) }),
                      (0, s.jsx)(d.Z, {
                          grow: 1,
                          className: f.placeholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e), _(this, 'placeholderMaxWidth', ''.concat(Math.floor(40 * Math.random()) + 40, '%'));
    }
}
_(p, 'defaultProps', { type: '1' }), _(p, 'Types', r), (t.Z = p);
