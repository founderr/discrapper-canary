"use strict";
n.r(t), n("653041"), n("47120");
var r, i = n("735250"),
  s = n("470079"),
  l = n("120356"),
  u = n.n(l),
  o = n("481060"),
  a = n("598077"),
  d = n("632184"),
  c = n("696540"),
  f = n("663086");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ extends(r = s.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: r
    } = this.props, i = [], s = e.length === t ? e.length : t - 1, l = 0;
    for (; l < s && l < e.length;) {
      let t = l === e.length - 1;
      i.push(n(e[l] || null, t ? null : c.avatarMasked, "user-".concat(l), t)), l++
    }
    if (l < e.length) {
      let t = Math.min(e.length - l, 99);
      i.push(r("+".concat(t), c.moreUsers, "more-users", t))
    }
    return i
  }
  renderIcon() {
    return this.props.icon ? (0, i.jsx)("div", {
      className: c.iconContainer,
      children: (0, i.jsx)(d.default, {
        width: 16,
        height: 16,
        foreground: c.foreground,
        className: c.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: u()(e, c.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), S(this, "_ref", void 0), S(this, "defaultRenderUser", (e, t, n, r) => {
      let {
        onClick: s,
        size: l,
        guildId: d
      } = this.props, S = e instanceof a.default ? e : null != e ? e.user : null;
      return null == S ? (0, i.jsx)("div", {
        className: u()(c.emptyUser, t)
      }, n) : (0, i.jsx)(o.Avatar, {
        tabIndex: 0,
        src: S.getAvatarURL(d, (0, o.getAvatarSize)(l)),
        size: l,
        "aria-label": S.username,
        className: u()(t, f.cursorPointer, c.avatarSize),
        onClick: e => null != s ? s(e, S, this._ref) : null
      }, S.id)
    })
  }
}
S(_, "defaultProps", {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, i.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: o.AvatarSizes.SIZE_24
}), t.default = _