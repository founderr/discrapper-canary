"use strict";
n.r(t), n.d(t, {
  Sizes: function() {
    return p
  },
  default: function() {
    return C
  }
}), n("424973"), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  u = n("627445"),
  o = n.n(u),
  a = n("77078"),
  c = n("506885"),
  d = n("981601"),
  f = n("766274"),
  E = n("697218"),
  _ = n("368121"),
  I = n("523096"),
  S = n("587974"),
  h = n("494101");
let p = {
  SIZE_16: 16,
  SIZE_24: 24,
  SIZE_32: 32,
  SIZE_56: 56
};

function T(e, t) {
  let n = e instanceof f.default ? e : null != e ? e.user : null;
  return null != n ? n.id : "user-".concat(t)
}
class N extends r.PureComponent {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      size: r,
      extraDetail: l
    } = this.props, s = [], u = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(u), a = 0;
    for (; a < u && a < e.length;) {
      var c;
      let t = null == o && null == l && a === e.length - 1,
        u = n(e[a], t, a);
      s.push(t ? (0, i.jsx)("div", {
        className: h.avatarContainer,
        children: u
      }, T(null !== (c = e[a]) && void 0 !== c ? c : null, a)) : (0, i.jsx)(S.default, {
        className: h.avatarContainerMasked,
        height: r,
        width: r,
        mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
        children: u
      }, T(e[a], a))), a++
    }
    return null != l ? s.push(l) : null != o && s.push(o), s
  }
  renderMoreUsers(e) {
    let {
      max: t,
      count: n,
      hideMoreUsers: l,
      renderMoreUsers: s,
      users: u
    } = this.props, o = Math.min(e, u.length);
    if (!l) {
      if (null != n) {
        if (n >= t) return (0, i.jsx)(r.Fragment, {
          children: s("".concat(t, "+"), t)
        }, "more-users");
        if (n > u.length) {
          let e = n - u.length;
          return (0, i.jsx)(r.Fragment, {
            children: s("+".concat(e), e)
          }, "more-users")
        }
      } else if (o < u.length) {
        let e = Math.min(u.length - o, 99);
        return (0, i.jsx)(r.Fragment, {
          children: s("+".concat(e), e)
        }, "more-users")
      }
    }
  }
  renderIcon() {
    return this.props.renderIcon ? (0, i.jsx)(_.default, {
      foreground: h.foreground,
      className: h.icon
    }) : null
  }
  render() {
    let {
      className: e,
      size: t,
      users: n,
      guildId: r,
      showUserPopout: l,
      useFallbackUserForPopout: u
    } = this.props, {
      popoutUserId: f
    } = this.state, _ = n.find(e => null != e && e.id === f), I = u && null == E.default.getUser(f);
    return (0, i.jsx)(a.Popout, {
      position: "right",
      preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(r, 80), {
        guildId: r
      }),
      shouldShow: !0 === l && null != f,
      fixed: !0,
      renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(d.default, {
        ...this.props,
        user: I && null != _ ? _ : void 0,
        ...e,
        userId: f,
        guildId: this.props.guildId
      })),
      onRequestClose: () => this.setState({
        popoutUserId: null
      }),
      children: n => (0, i.jsxs)("div", {
        className: s(e, h.container, function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
          switch (e) {
            case p.SIZE_16:
              return h.size16;
            case p.SIZE_24:
              return h.size24;
            case p.SIZE_32:
              return h.size32;
            case p.SIZE_56:
              return h.size56;
            default:
              return h.size24
          }
        }(t)),
        ref: this._ref,
        ...n,
        children: [this.renderIcon(), this.renderUsers()]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      popoutUserId: null
    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
      let {
        showUserPopout: r,
        guildId: l,
        size: s
      } = this.props;
      if (null == e) {
        if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
          className: h.emptyUser
        });
        {
          let e = (null != n ? n : 0) % I.default.DEFAULT_AVATARS.length,
            t = I.default.DEFAULT_AVATARS[e];
          return (0, i.jsx)("img", {
            src: t,
            alt: "",
            className: h.avatar
          })
        }
      }
      let u = (0, i.jsx)("img", {
        src: e.getAvatarURL(l, s),
        alt: e.username,
        className: h.avatar
      }, e.id);
      return r ? (0, i.jsx)(a.Clickable, {
        className: h.clickableAvatar,
        onClick: () => {
          null != this._ref.current && null != e && this.setState({
            popoutUserId: e.id
          })
        },
        tabIndex: -1,
        children: u
      }, e.id) : u
    }
  }
}
N.defaultProps = {
  max: 10,
  renderMoreUsers: function(e) {
    return (0, i.jsx)("div", {
      className: h.moreUsers,
      children: e
    })
  },
  renderIcon: !1,
  showDefaultAvatarsForNullUsers: !1,
  size: p.SIZE_24
};
var C = N