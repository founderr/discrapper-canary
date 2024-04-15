"use strict";
n.r(t);
var s, a, l, r = n("735250"),
  i = n("470079"),
  o = n("120356"),
  c = n.n(o),
  d = n("481060"),
  u = n("381238"),
  h = n("255439"),
  f = n("806519"),
  _ = n("210442");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = a || (a = {}))[s.OUTGOING = 0] = "OUTGOING", s[s.INCOMING = 1] = "INCOMING";
class E extends(l = i.PureComponent) {
  renderStatus() {
    let {
      muted: e,
      deafen: t
    } = this.props, n = t ? u.default : h.default;
    return e || t ? (0, r.jsx)(n, {
      className: _.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: c()(_.border, {
        [_.speaking]: e
      })
    }, "border")
  }
  renderMask() {
    let {
      muted: e,
      speaking: t,
      deafen: n
    } = this.props;
    return e && t ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || n ? (0, r.jsx)(r.Fragment, {
      children: this.renderStatus()
    }) : (0, r.jsx)(r.Fragment, {
      children: this.renderBorder()
    })
  }
  renderVoiceCallAvatar() {
    let {
      src: e,
      disabled: t,
      ringing: n,
      ringingType: s,
      avatarClassName: a,
      muted: l,
      deafen: i,
      size: o,
      renderIcon: u
    } = this.props, h = (0, d.getAvatarSize)(o), g = (0, r.jsx)("img", {
      src: e,
      alt: " ",
      className: c()(_.voiceAvatar, a, {
        [_.ringingOutgoing]: n && 0 === s
      })
    });
    if (t) return g;
    let E = f.MaskIDs.AVATAR_DEFAULT;
    return null != u ? E = o === d.AvatarSizes.SIZE_32 ? f.MaskIDs.AVATAR_CALL_ICON_32 : f.MaskIDs.AVATAR_CALL_ICON : (l || i) && (E = f.MaskIDs.AVATAR_VOICE_CALL_80), (0, r.jsxs)("div", {
      className: _.callAvatarMaskContainer,
      children: [(0, r.jsxs)(f.default, {
        className: _.callAvatarMask,
        width: h,
        height: h,
        mask: E,
        children: [null == u ? void 0 : u(), g]
      }), this.renderMask()]
    })
  }
  render() {
    let {
      size: e,
      onClick: t,
      style: n,
      onContextMenu: s,
      className: a,
      ringingType: l,
      ringing: i
    } = this.props, o = c()(_.wrapper, {
      [_.clickable]: null != t,
      [_.ringingOutgoing]: i && 0 === l,
      [_.ringingIncoming]: i && 1 === l
    }, a), u = (0, d.getAvatarSize)(e), h = {
      height: u,
      width: u,
      ...n
    };
    return (0, r.jsx)("div", {
      style: h,
      onContextMenu: s,
      className: o,
      children: this.renderVoiceCallAvatar()
    })
  }
}
g(E, "defaultProps", {
  size: d.AvatarSizes.SIZE_80,
  ringingType: 0,
  speaking: !1,
  soundsharing: !1,
  ringing: !1,
  muted: !1,
  deafen: !1,
  hasVideo: !1,
  mirror: !1,
  disabled: !1,
  paused: !1
}), g(E, "RingingType", a), t.default = E