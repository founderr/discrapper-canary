"use strict";
n.d(t, {
  Z: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  r = n(481060),
  c = n(13245),
  d = n(287734),
  u = n(933557),
  h = n(984370),
  p = n(910611),
  f = n(131704),
  E = n(523746),
  g = n(592125),
  m = n(430824),
  Z = n(699516),
  I = n(944486),
  S = n(547881),
  _ = n(707878),
  C = n(689938),
  v = n(906009);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class N extends s.Component {
  componentDidUpdate() {
    this.props.locked && this.state.showOpacitySlider && this.setState({
      showOpacitySlider: !1
    })
  }
  renderCallButton() {
    let e, t;
    let {
      channel: n,
      channelHasActiveCall: s,
      userIsInChannelCall: l,
      isBlocked: o
    } = this.props;
    if (!(0, f.hv)(n.type)) return null;
    let a = r.PhoneCallIcon,
      c = !1;
    return s ? l ? (e = C.Z.Messages.LEAVE_CALL, a = r.PhoneHangUpIcon) : e = C.Z.Messages.JOIN_CALL : o ? (e = C.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, t = r.Tooltip.Colors.RED, c = !0) : e = C.Z.Messages.START_VOICE_CALL, (0, i.jsx)(h.Z.Icon, {
      icon: a,
      tooltip: e,
      onClick: this.handleClickCall,
      tooltipColor: t,
      disabled: c
    })
  }
  render() {
    let {
      className: e,
      draggableClassName: t,
      locked: n,
      channel: s,
      channelName: l,
      guild: a,
      onMouseDown: c,
      onContextMenu: d,
      isPreviewingInGame: u,
      disableDragIndicator: f
    } = this.props, {
      showOpacitySlider: E
    } = this.state;
    return E && !n ? (0, i.jsxs)(S.ZP.Bar, {
      className: v.opacityHeader,
      children: [(0, i.jsx)(_.Z, {}), (0, i.jsx)(h.Z.Icon, {
        icon: r.CloseSmallIcon,
        onClick: this.handleCloseOpacitySettings,
        tooltip: C.Z.Messages.CLOSE
      })]
    }) : (0, i.jsx)(S.ZP.Background, {
      opacityOverride: n || u ? null : 1,
      children: (0, i.jsx)("div", {
        className: o()(e, t, v.headerContainer),
        onMouseDown: c,
        onContextMenu: d,
        children: (0, i.jsxs)(h.Z, {
          guildId: s.guild_id,
          channelId: s.id,
          toolbar: this.renderWidgetButtons(),
          transparent: !0,
          children: [u || n || f ? null : (0, i.jsx)(r.DragIcon, {
            size: "custom",
            color: "currentColor",
            className: o()(v.dragIcon, t),
            width: 20,
            height: 20
          }), (0, p.ud)({
            channel: s,
            channelName: l
          }), n ? null : (0, p.v0)(s, a)]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      showOpacitySlider: !1
    }), x(this, "handleClickCall", e => {
      let {
        channel: t,
        userIsInChannelCall: n,
        channelHasActiveCall: i
      } = this.props;
      if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
      else {
        let n = !i && !e.shiftKey;
        c.Z.callPrivateChannel(t.id, n)
      }
    }), x(this, "handleOpenOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !0
      }), e && c.Z.setPreviewInGameMode(!0)
    }), x(this, "handleCloseOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !1
      }), e && c.Z.setPreviewInGameMode(!1)
    }), x(this, "handleMouseDown", e => {
      let {
        onMouseDown: t
      } = this.props;
      null != t && t(e)
    }), x(this, "renderWidgetButtons", () => {
      let {
        locked: e,
        handlePin: t,
        pinned: n
      } = this.props, l = n ? C.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : C.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
      return e ? null : (0, i.jsxs)(s.Fragment, {
        children: [this.renderCallButton(), n ? (0, i.jsx)(h.Z.Icon, {
          icon: r.BrowserCheckeredIcon,
          tooltip: C.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
          onClick: this.handleOpenOpacitySettings
        }) : null, (0, i.jsx)(h.Z.Icon, {
          icon: n ? r.PinUprightSlashIcon : r.PinUprightIcon,
          tooltip: l,
          selected: n,
          onClick: t
        })]
      })
    })
  }
}

function T(e) {
  let {
    channel: t,
    ...n
  } = e, s = (0, a.e7)([I.Z, g.Z], () => {
    let e = I.Z.getVoiceChannelId();
    return g.Z.getChannel(e)
  }), l = (0, a.e7)([m.Z], () => m.Z.getGuild(t.guild_id)), o = (0, a.e7)([E.Z], () => E.Z.isCallActive(t.id)), r = (0, u.ZP)(t), c = (0, a.e7)([Z.Z], () => !!t.isDM() && null != t.getRecipientId() && Z.Z.isBlocked(t.getRecipientId()));
  return (0, i.jsx)(N, {
    channel: t,
    channelName: r,
    guild: l,
    channelHasActiveCall: o,
    userIsInChannelCall: null != s && s.id === t.id,
    isBlocked: c,
    ...n
  })
}