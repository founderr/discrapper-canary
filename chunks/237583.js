e(653041), e(47120);
var i,
    r = e(200651),
    l = e(192379),
    o = e(120356),
    u = e.n(o),
    a = e(481060),
    s = e(598077),
    c = e(908860),
    d = e(579861);
function f(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
        t
    );
}
class _ extends (i = l.PureComponent) {
    renderUsers() {
        let { users: t, max: n, renderUser: e = this.defaultRenderUser, renderMoreUsers: i } = this.props,
            r = [],
            l = t.length === n ? t.length : n - 1,
            o = 0;
        for (; o < l && o < t.length; ) {
            let n = o === t.length - 1;
            r.push(e(t[o] || null, n ? null : c.avatarMasked, 'user-'.concat(o), n)), o++;
        }
        if (o < t.length) {
            let n = Math.min(t.length - o, 99);
            r.push(i('+'.concat(n), c.moreUsers, 'more-users', n));
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
        let { className: t } = this.props;
        return (0, r.jsxs)('div', {
            className: u()(t, c.container),
            ref: (t) => (this._ref = t),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...t) {
        super(...t),
            f(this, '_ref', void 0),
            f(this, 'defaultRenderUser', (t, n, e, i) => {
                let { onClick: l, size: o, guildId: f } = this.props,
                    _ = t instanceof s.Z ? t : null != t ? t.user : null;
                return null == _
                    ? (0, r.jsx)('div', { className: u()(c.emptyUser, n) }, e)
                    : (0, r.jsx)(
                          a.Avatar,
                          {
                              tabIndex: 0,
                              src: _.getAvatarURL(f, (0, a.getAvatarSize)(o)),
                              size: o,
                              'aria-label': _.username,
                              className: u()(n, d.cursorPointer, c.avatarSize),
                              onClick: (t) => (null != l ? l(t, _, this._ref) : null)
                          },
                          _.id
                      );
            });
    }
}
f(_, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (t, n, e) {
        return (0, r.jsx)(
            'div',
            {
                className: n,
                children: t
            },
            e
        );
    },
    size: a.AvatarSizes.SIZE_24
}),
    (n.Z = _);
