t(653041), t(47120);
var i,
    r = t(200651),
    l = t(192379),
    o = t(120356),
    u = t.n(o),
    a = t(481060),
    s = t(598077),
    c = t(918708),
    d = t(845370);
function f(e, n, t) {
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
class p extends (i = l.PureComponent) {
    renderUsers() {
        let { users: e, max: n, renderUser: t = this.defaultRenderUser, renderMoreUsers: i } = this.props,
            r = [],
            l = e.length === n ? e.length : n - 1,
            o = 0;
        for (; o < l && o < e.length; ) {
            let n = o === e.length - 1;
            r.push(t(e[o] || null, n ? null : c.avatarMasked, 'user-'.concat(o), n)), o++;
        }
        if (o < e.length) {
            let n = Math.min(e.length - o, 99);
            r.push(i('+'.concat(n), c.moreUsers, 'more-users', n));
        }
        return r;
    }
    renderIcon() {
        return this.props.icon
            ? (0, r.jsx)('div', {
                  className: c.iconContainer,
                  children: (0, r.jsx)(a.VoiceNormalIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      colorClass: c.foreground,
                      className: c.icon
                  })
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)('div', {
            className: u()(e, c.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_ref', void 0),
            f(this, 'defaultRenderUser', (e, n, t, i) => {
                let { onClick: l, size: o, guildId: f } = this.props,
                    p = e instanceof s.Z ? e : null != e ? e.user : null;
                return null == p
                    ? (0, r.jsx)('div', { className: u()(c.emptyUser, n) }, t)
                    : (0, r.jsx)(
                          a.Avatar,
                          {
                              tabIndex: 0,
                              src: p.getAvatarURL(f, (0, a.getAvatarSize)(o)),
                              size: o,
                              'aria-label': p.username,
                              className: u()(n, d.cursorPointer, c.avatarSize),
                              onClick: (e) => (null != l ? l(e, p, this._ref) : null)
                          },
                          p.id
                      );
            });
    }
}
f(p, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, n, t) {
        return (0, r.jsx)(
            'div',
            {
                className: n,
                children: e
            },
            t
        );
    },
    size: a.AvatarSizes.SIZE_24
}),
    (n.Z = p);
