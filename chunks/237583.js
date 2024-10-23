t(653041), t(47120);
var a,
    r = t(200651),
    s = t(192379),
    i = t(120356),
    o = t.n(i),
    l = t(481060),
    c = t(598077),
    d = t(908860),
    u = t(579861);
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
class E extends (a = s.PureComponent) {
    renderUsers() {
        let { users: e, max: n, renderUser: t = this.defaultRenderUser, renderMoreUsers: a } = this.props,
            r = [],
            s = e.length === n ? e.length : n - 1,
            i = 0;
        for (; i < s && i < e.length; ) {
            let n = i === e.length - 1;
            r.push(t(e[i] || null, n ? null : d.avatarMasked, 'user-'.concat(i), n)), i++;
        }
        if (i < e.length) {
            let n = Math.min(e.length - i, 99);
            r.push(a('+'.concat(n), d.moreUsers, 'more-users', n));
        }
        return r;
    }
    renderIcon() {
        return this.props.icon
            ? (0, r.jsx)('div', {
                  className: d.iconContainer,
                  children: (0, r.jsx)(l.VoiceNormalIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      colorClass: d.foreground,
                      className: d.icon
                  })
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)('div', {
            className: o()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_ref', void 0),
            _(this, 'defaultRenderUser', (e, n, t, a) => {
                let { onClick: s, size: i, guildId: _ } = this.props,
                    E = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == E
                    ? (0, r.jsx)('div', { className: o()(d.emptyUser, n) }, t)
                    : (0, r.jsx)(
                          l.Avatar,
                          {
                              tabIndex: 0,
                              src: E.getAvatarURL(_, (0, l.getAvatarSize)(i)),
                              size: i,
                              'aria-label': E.username,
                              className: o()(n, u.cursorPointer, d.avatarSize),
                              onClick: (e) => (null != s ? s(e, E, this._ref) : null)
                          },
                          E.id
                      );
            });
    }
}
_(E, 'defaultProps', {
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
    size: l.AvatarSizes.SIZE_24
}),
    (n.Z = E);
