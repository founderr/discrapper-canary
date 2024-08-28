n(653041), n(47120);
var s,
    r = n(735250),
    t = n(470079),
    o = n(120356),
    i = n.n(o),
    l = n(481060),
    c = n(598077),
    _ = n(940942),
    E = n(585867);
function d(e, a, n) {
    return (
        a in e
            ? Object.defineProperty(e, a, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[a] = n),
        e
    );
}
class u extends (s = t.PureComponent) {
    renderUsers() {
        let { users: e, max: a, renderUser: n = this.defaultRenderUser, renderMoreUsers: s } = this.props,
            r = [],
            t = e.length === a ? e.length : a - 1,
            o = 0;
        for (; o < t && o < e.length; ) {
            let a = o === e.length - 1;
            r.push(n(e[o] || null, a ? null : _.avatarMasked, 'user-'.concat(o), a)), o++;
        }
        if (o < e.length) {
            let a = Math.min(e.length - o, 99);
            r.push(s('+'.concat(a), _.moreUsers, 'more-users', a));
        }
        return r;
    }
    renderIcon() {
        return this.props.icon
            ? (0, r.jsx)('div', {
                  className: _.iconContainer,
                  children: (0, r.jsx)(l.VoiceNormalIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      colorClass: _.foreground,
                      className: _.icon
                  })
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)('div', {
            className: i()(e, _.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            d(this, '_ref', void 0),
            d(this, 'defaultRenderUser', (e, a, n, s) => {
                let { onClick: t, size: o, guildId: d } = this.props,
                    u = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == u
                    ? (0, r.jsx)('div', { className: i()(_.emptyUser, a) }, n)
                    : (0, r.jsx)(
                          l.Avatar,
                          {
                              tabIndex: 0,
                              src: u.getAvatarURL(d, (0, l.getAvatarSize)(o)),
                              size: o,
                              'aria-label': u.username,
                              className: i()(a, E.cursorPointer, _.avatarSize),
                              onClick: (e) => (null != t ? t(e, u, this._ref) : null)
                          },
                          u.id
                      );
            });
    }
}
d(u, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, a, n) {
        return (0, r.jsx)(
            'div',
            {
                className: a,
                children: e
            },
            n
        );
    },
    size: l.AvatarSizes.SIZE_24
}),
    (a.Z = u);
