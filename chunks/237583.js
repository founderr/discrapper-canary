n(653041), n(47120);
var t,
    r = n(735250),
    s = n(470079),
    o = n(120356),
    i = n.n(o),
    l = n(481060),
    c = n(598077),
    u = n(940942),
    _ = n(585867);
function E(e, a, n) {
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
class d extends (t = s.PureComponent) {
    renderUsers() {
        let { users: e, max: a, renderUser: n = this.defaultRenderUser, renderMoreUsers: t } = this.props,
            r = [],
            s = e.length === a ? e.length : a - 1,
            o = 0;
        for (; o < s && o < e.length; ) {
            let a = o === e.length - 1;
            r.push(n(e[o] || null, a ? null : u.avatarMasked, 'user-'.concat(o), a)), o++;
        }
        if (o < e.length) {
            let a = Math.min(e.length - o, 99);
            r.push(t('+'.concat(a), u.moreUsers, 'more-users', a));
        }
        return r;
    }
    renderIcon() {
        return this.props.icon
            ? (0, r.jsx)('div', {
                  className: u.iconContainer,
                  children: (0, r.jsx)(l.VoiceNormalIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      colorClass: u.foreground,
                      className: u.icon
                  })
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)('div', {
            className: i()(e, u.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, '_ref', void 0),
            E(this, 'defaultRenderUser', (e, a, n, t) => {
                let { onClick: s, size: o, guildId: E } = this.props,
                    d = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == d
                    ? (0, r.jsx)('div', { className: i()(u.emptyUser, a) }, n)
                    : (0, r.jsx)(
                          l.Avatar,
                          {
                              tabIndex: 0,
                              src: d.getAvatarURL(E, (0, l.getAvatarSize)(o)),
                              size: o,
                              'aria-label': d.username,
                              className: i()(a, _.cursorPointer, u.avatarSize),
                              onClick: (e) => (null != s ? s(e, d, this._ref) : null)
                          },
                          d.id
                      );
            });
    }
}
E(d, 'defaultProps', {
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
    (a.Z = d);
