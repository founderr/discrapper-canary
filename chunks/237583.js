n(653041), n(47120);
var s,
    t = n(735250),
    r = n(470079),
    o = n(120356),
    i = n.n(o),
    l = n(481060),
    c = n(598077),
    _ = n(940942),
    E = n(585867);
function u(e, a, n) {
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
class d extends (s = r.PureComponent) {
    renderUsers() {
        let { users: e, max: a, renderUser: n = this.defaultRenderUser, renderMoreUsers: s } = this.props,
            t = [],
            r = e.length === a ? e.length : a - 1,
            o = 0;
        for (; o < r && o < e.length; ) {
            let a = o === e.length - 1;
            t.push(n(e[o] || null, a ? null : _.avatarMasked, 'user-'.concat(o), a)), o++;
        }
        if (o < e.length) {
            let a = Math.min(e.length - o, 99);
            t.push(s('+'.concat(a), _.moreUsers, 'more-users', a));
        }
        return t;
    }
    renderIcon() {
        return this.props.icon
            ? (0, t.jsx)('div', {
                  className: _.iconContainer,
                  children: (0, t.jsx)(l.VoiceNormalIcon, {
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
        return (0, t.jsxs)('div', {
            className: i()(e, _.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            u(this, '_ref', void 0),
            u(this, 'defaultRenderUser', (e, a, n, s) => {
                let { onClick: r, size: o, guildId: u } = this.props,
                    d = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == d
                    ? (0, t.jsx)('div', { className: i()(_.emptyUser, a) }, n)
                    : (0, t.jsx)(
                          l.Avatar,
                          {
                              tabIndex: 0,
                              src: d.getAvatarURL(u, (0, l.getAvatarSize)(o)),
                              size: o,
                              'aria-label': d.username,
                              className: i()(a, E.cursorPointer, _.avatarSize),
                              onClick: (e) => (null != r ? r(e, d, this._ref) : null)
                          },
                          d.id
                      );
            });
    }
}
u(d, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, a, n) {
        return (0, t.jsx)(
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
