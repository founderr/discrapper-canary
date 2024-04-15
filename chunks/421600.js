"use strict";
n.r(t);
var s, a, l, r = n("735250"),
  i = n("470079"),
  d = n("120356"),
  o = n.n(d),
  c = n("481060"),
  u = n("381238"),
  h = n("255439"),
  f = n("806519"),
  _ = n("210442");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = a || (a = {}))[s.OUTGOING = 0] = "OUTGOING", s[s.INCOMING = 1] = "INCOMING";
class T extends(l = i.PureComponent) {
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
      className: o()(_.border, {
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
      size: d,
      renderIcon: u
    } = this.props, h = (0, c.getAvatarSize)(d), E = (0, r.jsx)("img", {
      src: e,
      alt: " ",
      className: o()(_.voiceAvatar, a, {
        [_.ringingOutgoing]: n && 0 === s
      })
    });
    if (t) return E;
    let T = f.MaskIDs.AVATAR_DEFAULT;
    return null != u ? T = d === c.AvatarSizes.SIZE_32 ? f.MaskIDs.AVATAR_CALL_ICON_32 : f.MaskIDs.AVATAR_CALL_ICON : (l || i) && (T = f.MaskIDs.AVATAR_VOICE_CALL_80), (0, r.jsxs)("div", {
      className: _.callAvatarMaskContainer,
      children: [(0, r.jsxs)(f.default, {
        className: _.callAvatarMask,
        width: h,
        height: h,
        mask: T,
        children: [null == u ? void 0 : u(), E]
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
    } = this.props, d = o()(_.wrapper, {
      [_.clickable]: null != t,
      [_.ringingOutgoing]: i && 0 === l,
      [_.ringingIncoming]: i && 1 === l
    }, a), u = (0, c.getAvatarSize)(e), h = {
      height: u,
      width: u,
      ...n
    };
    return (0, r.jsx)("div", {
      style: h,
      onContextMenu: s,
      className: d,
      children: this.renderVoiceCallAvatar()
    })
  }
}
E(T, "defaultProps", {
  size: c.AvatarSizes.SIZE_80,
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
}), E(T, "RingingType", a), t.default = T