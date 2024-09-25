n.d(t, {
    u: function () {
        return S;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(512722),
    d = n.n(c),
    _ = n(481060),
    E = n(686546),
    f = n(184301),
    h = n(347475),
    p = n(598077),
    m = n(594174),
    I = n(426563),
    T = n(621925);
function g(e, t, n) {
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
let S = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
};
function A(e, t) {
    let n = e instanceof p.Z ? e : null != e ? e.user : null;
    return null != n ? n.id : 'user-'.concat(t);
}
function v(e) {
    return (0, o.jsx)('div', {
        className: T.moreUsers,
        children: e
    });
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
    switch (e) {
        case S.SIZE_16:
            return T.size16;
        case S.SIZE_24:
            return T.size24;
        case S.SIZE_32:
            return T.size32;
        case S.SIZE_56:
            return T.size56;
        default:
            return T.size24;
    }
}
class O extends (r = s.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: i } = this.props,
            a = [],
            s = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(s),
            u = 0;
        for (; u < s && u < e.length; ) {
            var c;
            let t = null == l && null == i && u === e.length - 1,
                s = n(e[u], t, u);
            a.push(
                t
                    ? (0, o.jsx)(
                          'div',
                          {
                              className: T.avatarContainer,
                              children: s
                          },
                          A(null !== (c = e[u]) && void 0 !== c ? c : null, u)
                      )
                    : (0, o.jsx)(
                          E.ZP,
                          {
                              className: T.avatarContainerMasked,
                              height: r,
                              width: r,
                              mask: E.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: s
                          },
                          A(e[u], u)
                      )
            ),
                u++;
        }
        return null != i ? a.push(i) : null != l && a.push(l), a;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: r, renderMoreUsers: i, users: a } = this.props,
            l = Math.min(e, a.length);
        if (!r) {
            if (null != n) {
                if (n >= t) return (0, o.jsx)(s.Fragment, { children: i(''.concat(t, '+'), t) }, 'more-users');
                if (n > a.length) {
                    let e = n - a.length;
                    return (0, o.jsx)(s.Fragment, { children: i('+'.concat(e), e) }, 'more-users');
                }
            } else if (l < a.length) {
                let e = Math.min(a.length - l, 99);
                return (0, o.jsx)(s.Fragment, { children: i('+'.concat(e), e) }, 'more-users');
            }
        }
    }
    renderIcon() {
        return this.props.renderIcon
            ? (0, o.jsx)(_.VoiceNormalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: T.__invalid_foreground,
                  className: T.icon
              })
            : null;
    }
    render() {
        let { className: e, size: t, users: n, guildId: r, showUserPopout: i, useFallbackUserForPopout: a } = this.props,
            { popoutUserId: s } = this.state,
            l = n.find((e) => null != e && e.id === s),
            c = a && null == m.default.getUser(s);
        return (0, o.jsx)(_.Popout, {
            position: 'right',
            preload: null == l ? void 0 : () => (0, f.Z)(l.id, l.getAvatarURL(r, 80), { guildId: r }),
            shouldShow: !0 === i && null != s,
            fixed: !0,
            renderPopout: (e) => (
                d()(null != s, 'UserSummaryItem.render - renderPopout: popoutUserId cannot be null'),
                (0, o.jsx)(h.Z, {
                    ...this.props,
                    user: c && null != l ? l : void 0,
                    ...e,
                    userId: s,
                    guildId: this.props.guildId
                })
            ),
            onRequestClose: () => this.setState({ popoutUserId: null }),
            children: (n) =>
                (0, o.jsxs)('div', {
                    className: u()(e, T.container, N(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()]
                })
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { popoutUserId: null }),
            g(this, '_ref', s.createRef()),
            g(this, 'defaultRenderUser', (e, t, n) => {
                let { showUserPopout: r, guildId: i, size: a } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, o.jsx)('div', { className: T.emptyUser });
                    {
                        let e = (null != n ? n : 0) % I.Z.DEFAULT_AVATARS.length,
                            t = I.Z.DEFAULT_AVATARS[e];
                        return (0, o.jsx)('img', {
                            src: t,
                            alt: '',
                            className: T.avatar
                        });
                    }
                }
                let s = (0, o.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(i, a),
                        alt: e.username,
                        className: T.avatar
                    },
                    e.id
                );
                return r
                    ? (0, o.jsx)(
                          _.Clickable,
                          {
                              className: T.clickableAvatar,
                              onClick: () => {
                                  null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                              },
                              tabIndex: -1,
                              children: s
                          },
                          e.id
                      )
                    : s;
            });
    }
}
g(O, 'defaultProps', {
    max: 10,
    renderMoreUsers: v,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: S.SIZE_24
}),
    (t.Z = O);
