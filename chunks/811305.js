"use strict";
n.r(t), n.d(t, {
  Sizes: function() {
    return S
  },
  default: function() {
    return N
  }
}), n("424973"), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  o = n.n(l),
  s = n("627445"),
  a = n.n(s),
  u = n("77078"),
  c = n("506885"),
  d = n("981601"),
  f = n("766274"),
  E = n("697218"),
  _ = n("368121"),
  I = n("523096"),
  h = n("587974"),
  p = n("494101");
let S = {
  SIZE_16: 16,
  SIZE_24: 24,
  SIZE_32: 32,
  SIZE_56: 56
};

function C(e, t) {
  let n = e instanceof f.default ? e : null != e ? e.user : null;
  return null != n ? n.id : "user-".concat(t)
}
class T extends r.PureComponent {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      size: r,
      extraDetail: l
    } = this.props, o = [], s = e.length === t ? e.length : t - 1, a = this.renderMoreUsers(s), u = 0;
    for (; u < s && u < e.length;) {
      var c;
      let t = null == a && null == l && u === e.length - 1,
        s = n(e[u], t, u);
      o.push(t ? (0, i.jsx)("div", {
        className: p.avatarContainer,
        children: s
      }, C(null !== (c = e[u]) && void 0 !== c ? c : null, u)) : (0, i.jsx)(h.default, {
        className: p.avatarContainerMasked,
        height: r,
        width: r,
        mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
        children: s
      }, C(e[u], u))), u++
    }
    return null != l ? o.push(l) : null != a && o.push(a), o
  }
  renderMoreUsers(e) {
    let {
      max: t,
      count: n,
      hideMoreUsers: l,
      renderMoreUsers: o,
      users: s
    } = this.props, a = Math.min(e, s.length);
    if (!l) {
      if (null != n) {
        if (n >= t) return (0, i.jsx)(r.Fragment, {
          children: o("".concat(t, "+"), t)
        }, "more-users");
        if (n > s.length) {
          let e = n - s.length;
          return (0, i.jsx)(r.Fragment, {
            children: o("+".concat(e), e)
          }, "more-users")
        }
      } else if (a < s.length) {
        let e = Math.min(s.length - a, 99);
        return (0, i.jsx)(r.Fragment, {
          children: o("+".concat(e), e)
        }, "more-users")
      }
    }
  }
  renderIcon() {
    return this.props.renderIcon ? (0, i.jsx)(_.default, {
      foreground: p.foreground,
      className: p.icon
    }) : null
  }
  render() {
    let {
      className: e,
      size: t,
      users: n,
      guildId: r,
      showUserPopout: l,
      useFallbackUserForPopout: s
    } = this.props, {
      popoutUserId: f
    } = this.state, _ = n.find(e => null != e && e.id === f), I = s && null == E.default.getUser(f);
    return (0, i.jsx)(u.Popout, {
      position: "right",
      preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(r, 80), {
        guildId: r
      }),
      shouldShow: !0 === l && null != f,
      fixed: !0,
      renderPopout: e => (a(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(d.default, {
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
        className: o(e, p.container, function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
          switch (e) {
            case S.SIZE_16:
              return p.size16;
            case S.SIZE_24:
              return p.size24;
            case S.SIZE_32:
              return p.size32;
            case S.SIZE_56:
              return p.size56;
            default:
              return p.size24
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
        size: o
      } = this.props;
      if (null == e) {
        if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
          className: p.emptyUser
        });
        {
          let e = (null != n ? n : 0) % I.default.DEFAULT_AVATARS.length,
            t = I.default.DEFAULT_AVATARS[e];
          return (0, i.jsx)("img", {
            src: t,
            alt: "",
            className: p.avatar
          })
        }
      }
      let s = (0, i.jsx)("img", {
        src: e.getAvatarURL(l, o),
        alt: e.username,
        className: p.avatar
      }, e.id);
      return r ? (0, i.jsx)(u.Clickable, {
        className: p.clickableAvatar,
        onClick: () => {
          null != this._ref.current && null != e && this.setState({
            popoutUserId: e.id
          })
        },
        tabIndex: -1,
        children: s
      }, e.id) : s
    }
  }
}
T.defaultProps = {
  max: 10,
  renderMoreUsers: function(e) {
    return (0, i.jsx)("div", {
      className: p.moreUsers,
      children: e
    })
  },
  renderIcon: !1,
  showDefaultAvatarsForNullUsers: !1,
  size: S.SIZE_24
};
var N = T