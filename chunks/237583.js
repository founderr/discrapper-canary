a(653041), a(47120);
var t,
    r = a(735250),
    s = a(470079),
    i = a(120356),
    o = a.n(i),
    l = a(481060),
    c = a(598077),
    d = a(908860),
    u = a(579861);
function _(e, n, a) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = a),
        e
    );
}
class E extends (t = s.PureComponent) {
    renderUsers() {
        let { users: e, max: n, renderUser: a = this.defaultRenderUser, renderMoreUsers: t } = this.props,
            r = [],
            s = e.length === n ? e.length : n - 1,
            i = 0;
        for (; i < s && i < e.length; ) {
            let n = i === e.length - 1;
            r.push(a(e[i] || null, n ? null : d.avatarMasked, 'user-'.concat(i), n)), i++;
        }
        if (i < e.length) {
            let n = Math.min(e.length - i, 99);
            r.push(t('+'.concat(n), d.moreUsers, 'more-users', n));
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
            _(this, 'defaultRenderUser', (e, n, a, t) => {
                let { onClick: s, size: i, guildId: _ } = this.props,
                    E = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == E
                    ? (0, r.jsx)('div', { className: o()(d.emptyUser, n) }, a)
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
    renderMoreUsers: function (e, n, a) {
        return (0, r.jsx)(
            'div',
            {
                className: n,
                children: e
            },
            a
        );
    },
    size: l.AvatarSizes.SIZE_24
}),
    (n.Z = E);
