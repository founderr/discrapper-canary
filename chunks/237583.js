n(653041), n(47120);
var a,
    r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(481060),
    c = n(598077),
    d = n(908860),
    u = n(579861);
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
class E extends (a = s.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: a } = this.props,
            r = [],
            s = e.length === t ? e.length : t - 1,
            i = 0;
        for (; i < s && i < e.length; ) {
            let t = i === e.length - 1;
            r.push(n(e[i] || null, t ? null : d.avatarMasked, 'user-'.concat(i), t)), i++;
        }
        if (i < e.length) {
            let t = Math.min(e.length - i, 99);
            r.push(a('+'.concat(t), d.moreUsers, 'more-users', t));
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
            _(this, 'defaultRenderUser', (e, t, n, a) => {
                let { onClick: s, size: i, guildId: _ } = this.props,
                    E = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == E
                    ? (0, r.jsx)('div', { className: o()(d.emptyUser, t) }, n)
                    : (0, r.jsx)(
                          l.Avatar,
                          {
                              tabIndex: 0,
                              src: E.getAvatarURL(_, (0, l.getAvatarSize)(i)),
                              size: i,
                              'aria-label': E.username,
                              className: o()(t, u.cursorPointer, d.avatarSize),
                              onClick: (e) => (null != s ? s(e, E, this._ref) : null)
                          },
                          E.id
                      );
            });
    }
}
_(E, 'defaultProps', {
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
    size: l.AvatarSizes.SIZE_24
}),
    (t.Z = E);
