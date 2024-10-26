t(653041), t(47120);
var r,
    i = t(200651),
    l = t(192379),
    o = t(120356),
    u = t.n(o),
    s = t(481060),
    a = t(598077),
    c = t(908860),
    d = t(579861);
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
class E extends (r = l.PureComponent) {
    renderUsers() {
        let { users: e, max: n, renderUser: t = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            i = [],
            l = e.length === n ? e.length : n - 1,
            o = 0;
        for (; o < l && o < e.length; ) {
            let n = o === e.length - 1;
            i.push(t(e[o] || null, n ? null : c.avatarMasked, 'user-'.concat(o), n)), o++;
        }
        if (o < e.length) {
            let n = Math.min(e.length - o, 99);
            i.push(r('+'.concat(n), c.moreUsers, 'more-users', n));
        }
        return i;
    }
    renderIcon() {
        return this.props.icon
            ? (0, i.jsx)('div', {
                  className: c.iconContainer,
                  children: (0, i.jsx)(s.VoiceNormalIcon, {
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
        return (0, i.jsxs)('div', {
            className: u()(e, c.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_ref', void 0),
            _(this, 'defaultRenderUser', (e, n, t, r) => {
                let { onClick: l, size: o, guildId: _ } = this.props,
                    E = e instanceof a.Z ? e : null != e ? e.user : null;
                return null == E
                    ? (0, i.jsx)('div', { className: u()(c.emptyUser, n) }, t)
                    : (0, i.jsx)(
                          s.Avatar,
                          {
                              tabIndex: 0,
                              src: E.getAvatarURL(_, (0, s.getAvatarSize)(o)),
                              size: o,
                              'aria-label': E.username,
                              className: u()(n, d.cursorPointer, c.avatarSize),
                              onClick: (e) => (null != l ? l(e, E, this._ref) : null)
                          },
                          E.id
                      );
            });
    }
}
_(E, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, n, t) {
        return (0, i.jsx)(
            'div',
            {
                className: n,
                children: e
            },
            t
        );
    },
    size: s.AvatarSizes.SIZE_24
}),
    (n.Z = E);
