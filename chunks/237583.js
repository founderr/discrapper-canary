n(653041), n(47120);
var i,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    u = n.n(o),
    a = n(481060),
    s = n(598077),
    c = n(918708),
    d = n(845370);
function f(e, t, n) {
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
class p extends (i = l.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: i } = this.props,
            r = [],
            l = e.length === t ? e.length : t - 1,
            o = 0;
        for (; o < l && o < e.length; ) {
            let t = o === e.length - 1;
            r.push(n(e[o] || null, t ? null : c.avatarMasked, 'user-'.concat(o), t)), o++;
        }
        if (o < e.length) {
            let t = Math.min(e.length - o, 99);
            r.push(i('+'.concat(t), c.moreUsers, 'more-users', t));
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
            f(this, 'defaultRenderUser', (e, t, n, i) => {
                let { onClick: l, size: o, guildId: f } = this.props,
                    p = e instanceof s.Z ? e : null != e ? e.user : null;
                return null == p
                    ? (0, r.jsx)('div', { className: u()(c.emptyUser, t) }, n)
                    : (0, r.jsx)(
                          a.Avatar,
                          {
                              tabIndex: 0,
                              src: p.getAvatarURL(f, (0, a.getAvatarSize)(o)),
                              size: o,
                              'aria-label': p.username,
                              className: u()(t, d.cursorPointer, c.avatarSize),
                              onClick: (e) => (null != l ? l(e, p, this._ref) : null)
                          },
                          p.id
                      );
            });
    }
}
f(p, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, t, n) {
        return (0, r.jsx)(
            'div',
            {
                className: t,
                children: e
            },
            n
        );
    },
    size: a.AvatarSizes.SIZE_24
}),
    (t.Z = p);
