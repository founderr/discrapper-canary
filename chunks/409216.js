"use strict";
n.r(t), n("653041"), n("47120");
var i, r = n("735250"),
  l = n("470079"),
  s = n("120356"),
  u = n.n(s),
  o = n("481060"),
  a = n("598077"),
  d = n("632184"),
  c = n("821285"),
  f = n("543205");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends(i = l.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: i
    } = this.props, r = [], l = e.length === t ? e.length : t - 1, s = 0;
    for (; s < l && s < e.length;) {
      let t = s === e.length - 1;
      r.push(n(e[s] || null, t ? null : c.avatarMasked, "user-".concat(s), t)), s++
    }
    if (s < e.length) {
      let t = Math.min(e.length - s, 99);
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
      className: u()(e, c.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), S(this, "_ref", void 0), S(this, "defaultRenderUser", (e, t, n, i) => {
      let {
        onClick: l,
        size: s,
        guildId: d
      } = this.props, S = e instanceof a.default ? e : null != e ? e.user : null;
      return null == S ? (0, r.jsx)("div", {
        className: u()(c.emptyUser, t)
      }, n) : (0, r.jsx)(o.Avatar, {
        tabIndex: 0,
        src: S.getAvatarURL(d, (0, o.getAvatarSize)(s)),
        size: s,
        "aria-label": S.username,
        className: u()(t, f.cursorPointer, c.avatarSize),
        onClick: e => null != l ? l(e, S, this._ref) : null
      }, S.id)
    })
  }
}
S(E, "defaultProps", {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, r.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: o.AvatarSizes.SIZE_24
}), t.default = E