"use strict";
n.r(t), n("653041"), n("47120");
var i, r = n("735250"),
  s = n("470079"),
  l = n("120356"),
  o = n.n(l),
  u = n("481060"),
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
class _ extends(i = s.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: i
    } = this.props, r = [], s = e.length === t ? e.length : t - 1, l = 0;
    for (; l < s && l < e.length;) {
      let t = l === e.length - 1;
      r.push(n(e[l] || null, t ? null : c.avatarMasked, "user-".concat(l), t)), l++
    }
    if (l < e.length) {
      let t = Math.min(e.length - l, 99);
      r.push(i("+".concat(t), c.moreUsers, "more-users", t))
    }
    return r
  }
  renderIcon() {
    return this.props.icon ? (0, r.jsx)("div", {
      className: c.iconContainer,
      children: (0, r.jsx)(d.default, {
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
    return (0, r.jsxs)("div", {
      className: o()(e, c.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), S(this, "_ref", void 0), S(this, "defaultRenderUser", (e, t, n, i) => {
      let {
        onClick: s,
        size: l,
        guildId: d
      } = this.props, S = e instanceof a.default ? e : null != e ? e.user : null;
      return null == S ? (0, r.jsx)("div", {
        className: o()(c.emptyUser, t)
      }, n) : (0, r.jsx)(u.Avatar, {
        tabIndex: 0,
        src: S.getAvatarURL(d, (0, u.getAvatarSize)(l)),
        size: l,
        "aria-label": S.username,
        className: o()(t, f.cursorPointer, c.avatarSize),
        onClick: e => null != s ? s(e, S, this._ref) : null
      }, S.id)
    })
  }
}
S(_, "defaultProps", {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, r.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: u.AvatarSizes.SIZE_24
}), t.default = _