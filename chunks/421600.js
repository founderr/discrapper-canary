"use strict";
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(481060),
  c = n(806519),
  d = n(52244);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = r || (r = {}))[i.OUTGOING = 0] = "OUTGOING", i[i.INCOMING = 1] = "INCOMING";
class I extends(s = a.PureComponent) {
  renderStatus() {
    let {
      muted: e,
      deafen: t
    } = this.props, n = t ? _.HeadphonesSlashIcon : _.MicrophoneSlashIcon;
    return e || t ? (0, o.jsx)(n, {
      className: d.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, o.jsx)("div", {
      className: u()(d.border, {
        [d.speaking]: e
      })
    }, "border")
  }
  renderMask() {
    let {
      muted: e,
      speaking: t,
      deafen: n
    } = this.props;
    return e && t ? (0, o.jsxs)(o.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || n ? (0, o.jsx)(o.Fragment, {
      children: this.renderStatus()
    }) : (0, o.jsx)(o.Fragment, {
      children: this.renderBorder()
    })
  }
  renderVoiceCallAvatar() {
    let {
      src: e,
      disabled: t,
      ringing: n,
      ringingType: i,
      avatarClassName: r,
      muted: s,
      deafen: a,
      size: l,
      renderIcon: E
    } = this.props, I = (0, _.getAvatarSize)(l), T = (0, o.jsx)("img", {
      src: e,
      alt: " ",
      className: u()(d.voiceAvatar, r, {
        [d.ringingOutgoing]: n && 0 === i
      })
    });
    if (t) return T;
    let h = c.QS.AVATAR_DEFAULT;
    return null != E ? h = l === _.AvatarSizes.SIZE_32 ? c.QS.AVATAR_CALL_ICON_32 : c.QS.AVATAR_CALL_ICON : (s || a) && (h = c.QS.AVATAR_VOICE_CALL_80), (0, o.jsxs)("div", {
      className: d.callAvatarMaskContainer,
      children: [(0, o.jsxs)(c.ZP, {
        className: d.callAvatarMask,
        width: I,
        height: I,
        mask: h,
        children: [null == E ? void 0 : E(), T]
      }), this.renderMask()]
    })
  }
  render() {
    let {
      size: e,
      onClick: t,
      style: n,
      onContextMenu: i,
      className: r,
      ringingType: s,
      ringing: a
    } = this.props, l = u()(d.wrapper, {
      [d.clickable]: null != t,
      [d.ringingOutgoing]: a && 0 === s,
      [d.ringingIncoming]: a && 1 === s
    }, r), c = (0, _.getAvatarSize)(e), E = {
      height: c,
      width: c,
      ...n
    };
    return (0, o.jsx)("div", {
      style: E,
      onContextMenu: i,
      className: l,
      children: this.renderVoiceCallAvatar()
    })
  }
}
E(I, "defaultProps", {
  size: _.AvatarSizes.SIZE_80,
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
}), E(I, "RingingType", r), t.Z = I