var r,
    i = n(653041);
var a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(481060),
    d = n(598077),
    _ = n(908860),
    E = n(579861);
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
function h(e, t, n) {
    return (0, o.jsx)(
        'div',
        {
            className: t,
            children: e
        },
        n
    );
}
class p extends (r = s.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            i = [],
            a = e.length === t ? e.length : t - 1,
            o = 0;
        for (; o < a && o < e.length; ) {
            let t = o === e.length - 1;
            i.push(n(e[o] || null, t ? null : _.avatarMasked, 'user-'.concat(o), t)), o++;
        }
        if (o < e.length) {
            let t = Math.min(e.length - o, 99);
            i.push(r('+'.concat(t), _.moreUsers, 'more-users', t));
        }
        return i;
    }
    renderIcon() {
        return this.props.icon
            ? (0, o.jsx)('div', {
                  className: _.iconContainer,
                  children: (0, o.jsx)(c.VoiceNormalIcon, {
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
        return (0, o.jsxs)('div', {
            className: u()(e, _.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_ref', void 0),
            f(this, 'defaultRenderUser', (e, t, n, r) => {
                let { onClick: i, size: a, guildId: s } = this.props,
                    l = e instanceof d.Z ? e : null != e ? e.user : null;
                return null == l
                    ? (0, o.jsx)('div', { className: u()(_.emptyUser, t) }, n)
                    : (0, o.jsx)(
                          c.Avatar,
                          {
                              tabIndex: 0,
                              src: l.getAvatarURL(s, (0, c.getAvatarSize)(a)),
                              size: a,
                              'aria-label': l.username,
                              className: u()(t, E.cursorPointer, _.avatarSize),
                              onClick: (e) => (null != i ? i(e, l, this._ref) : null)
                          },
                          l.id
                      );
            });
    }
}
f(p, 'defaultProps', {
    max: 10,
    renderMoreUsers: h,
    size: c.AvatarSizes.SIZE_24
}),
    (t.Z = p);
