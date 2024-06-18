"use strict";
n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(481060),
  c = n(285952),
  d = n(873768);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).SINGLE_AVATAR = "1", s.MULTIPLE_AVATAR = "2";
let I = {
  [_.AvatarSizes.SIZE_32]: d.avatarSmall,
  [_.AvatarSizes.SIZE_40]: d.avatarLarge
};
class T extends(r = a.Component) {
  render() {
    let {
      type: e,
      avatarSize: t,
      className: n
    } = this.props;
    return "2" === e ? (0, o.jsxs)("div", {
      className: u()(d.multiplePlaceholder, n),
      children: [(0, o.jsxs)(c.Z, {
        children: [(0, o.jsx)("div", {
          className: u()(d.placeholderAvatar, I[t], d.avatarMasked)
        }), (0, o.jsx)("div", {
          className: u()(d.placeholderAvatar, I[t], d.avatarMasked)
        }), (0, o.jsx)("div", {
          className: u()(d.placeholderAvatar, I[t])
        })]
      }), (0, o.jsx)(c.Z, {
        grow: 1,
        className: d.mulitplePlaceholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    }) : (0, o.jsxs)(c.Z, {
      className: u()(d.placeholder, n),
      children: [(0, o.jsx)("div", {
        className: u()(d.placeholderAvatar, I[t])
      }), (0, o.jsx)(c.Z, {
        grow: 1,
        className: d.placeholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%"))
  }
}
E(T, "defaultProps", {
  type: "1"
}), E(T, "Types", i), t.Z = T