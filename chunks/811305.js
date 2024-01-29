"use strict";
n.r(t), n.d(t, {
  Sizes: function() {
    return I
  },
  default: function() {
    return T
  }
}), n("424973"), n("222007");
var s = n("37983"),
  r = n("884691"),
  i = n("414456"),
  l = n.n(i),
  a = n("627445"),
  u = n.n(a),
  o = n("77078"),
  d = n("506885"),
  c = n("981601"),
  f = n("766274"),
  p = n("697218"),
  E = n("368121"),
  S = n("523096"),
  h = n("587974"),
  m = n("494101");
let I = {
  SIZE_16: 16,
  SIZE_24: 24,
  SIZE_32: 32,
  SIZE_56: 56
};

function _(e, t) {
  let n = e instanceof f.default ? e : null != e ? e.user : null;
  return null != n ? n.id : "user-".concat(t)
}
class C extends r.PureComponent {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      size: r,
      extraDetail: i
    } = this.props, l = [], a = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(a), o = 0;
    for (; o < a && o < e.length;) {
      var d;
      let t = null == u && null == i && o === e.length - 1,
        a = n(e[o], t, o);
      l.push(t ? (0, s.jsx)("div", {
        className: m.avatarContainer,
        children: a
      }, _(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, s.jsx)(h.default, {
        className: m.avatarContainerMasked,
        height: r,
        width: r,
        mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
        children: a
      }, _(e[o], o))), o++
    }
    return null != i ? l.push(i) : null != u && l.push(u), l
  }
  renderMoreUsers(e) {
    let {
      max: t,
      count: n,
      hideMoreUsers: i,
      renderMoreUsers: l,
      users: a
    } = this.props, u = Math.min(e, a.length);
    if (!i) {
      if (null != n) {
        if (n >= t) return (0, s.jsx)(r.Fragment, {
          children: l("".concat(t, "+"), t)
        }, "more-users");
        if (n > a.length) {
          let e = n - a.length;
          return (0, s.jsx)(r.Fragment, {
            children: l("+".concat(e), e)
          }, "more-users")
        }
      } else if (u < a.length) {
        let e = Math.min(a.length - u, 99);
        return (0, s.jsx)(r.Fragment, {
          children: l("+".concat(e), e)
        }, "more-users")
      }
    }
  }
  renderIcon() {
    return this.props.renderIcon ? (0, s.jsx)(E.default, {
      foreground: m.foreground,
      className: m.icon
    }) : null
  }
  render() {
    let {
      className: e,
      size: t,
      users: n,
      guildId: r,
      showUserPopout: i,
      useFallbackUserForPopout: a
    } = this.props, {
      popoutUserId: f
    } = this.state, E = n.find(e => null != e && e.id === f), S = a && null == p.default.getUser(f);
    return (0, s.jsx)(o.Popout, {
      position: "right",
      preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(r, 80), {
        guildId: r
      }),
      shouldShow: !0 === i && null != f,
      fixed: !0,
      renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(c.default, {
        ...this.props,
        user: S && null != E ? E : void 0,
        ...e,
        userId: f,
        guildId: this.props.guildId
      })),
      onRequestClose: () => this.setState({
        popoutUserId: null
      }),
      children: n => (0, s.jsxs)("div", {
        className: l(e, m.container, function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.SIZE_24;
          switch (e) {
            case I.SIZE_16:
              return m.size16;
            case I.SIZE_24:
              return m.size24;
            case I.SIZE_32:
              return m.size32;
            case I.SIZE_56:
              return m.size56;
            default:
              return m.size24
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
        guildId: i,
        size: l
      } = this.props;
      if (null == e) {
        if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
          className: m.emptyUser
        });
        {
          let e = (null != n ? n : 0) % S.default.DEFAULT_AVATARS.length,
            t = S.default.DEFAULT_AVATARS[e];
          return (0, s.jsx)("img", {
            src: t,
            alt: "",
            className: m.avatar
          })
        }
      }
      let a = (0, s.jsx)("img", {
        src: e.getAvatarURL(i, l),
        alt: e.username,
        className: m.avatar
      }, e.id);
      return r ? (0, s.jsx)(o.Clickable, {
        className: m.clickableAvatar,
        onClick: () => {
          null != this._ref.current && null != e && this.setState({
            popoutUserId: e.id
          })
        },
        tabIndex: -1,
        children: a
      }, e.id) : a
    }
  }
}
C.defaultProps = {
  max: 10,
  renderMoreUsers: function(e) {
    return (0, s.jsx)("div", {
      className: m.moreUsers,
      children: e
    })
  },
  renderIcon: !1,
  showDefaultAvatarsForNullUsers: !1,
  size: I.SIZE_24
};
var T = C