t(653041), t(47120);
var a,
    r = t(735250),
    s = t(470079),
    o = t(120356),
    i = t.n(o),
    l = t(481060),
    c = t(598077),
    d = t(940942),
    u = t(585867);
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
            o = 0;
        for (; o < s && o < e.length; ) {
            let n = o === e.length - 1;
            r.push(t(e[o] || null, n ? null : d.avatarMasked, 'user-'.concat(o), n)), o++;
        }
        if (o < e.length) {
            let n = Math.min(e.length - o, 99);
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
            className: i()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_ref', void 0),
            _(this, 'defaultRenderUser', (e, n, t, a) => {
                let { onClick: s, size: o, guildId: _ } = this.props,
                    E = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == E
                    ? (0, r.jsx)('div', { className: i()(d.emptyUser, n) }, t)
                    : (0, r.jsx)(
                          l.Avatar,
                          {
                              tabIndex: 0,
                              src: E.getAvatarURL(_, (0, l.getAvatarSize)(o)),
                              size: o,
                              'aria-label': E.username,
                              className: i()(n, u.cursorPointer, d.avatarSize),
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
