n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    l = n(481060),
    c = n(13245),
    d = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    f = n(131704),
    _ = n(523746),
    E = n(592125),
    g = n(430824),
    m = n(699516),
    I = n(944486),
    Z = n(707878),
    v = n(518084),
    S = n(689938),
    C = n(64437);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class T extends s.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e, t;
        let { channel: n, channelHasActiveCall: s, userIsInChannelCall: r, isBlocked: a } = this.props;
        if (!(0, f.hv)(n.type)) return null;
        let o = l.PhoneCallIcon,
            c = !1;
        return (
            s ? (r ? ((e = S.Z.Messages.LEAVE_CALL), (o = l.PhoneHangUpIcon)) : (e = S.Z.Messages.JOIN_CALL)) : a ? ((e = S.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS), (t = l.Tooltip.Colors.RED), (c = !0)) : (e = S.Z.Messages.START_VOICE_CALL),
            (0, i.jsx)(h.Z.Icon, {
                icon: o,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: c
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: s, channelName: r, guild: o, onMouseDown: c, onContextMenu: d, isPreviewingInGame: u, disableDragIndicator: f } = this.props,
            { showOpacitySlider: _ } = this.state;
        return _ && !n
            ? (0, i.jsxs)(v.ZP.Bar, {
                  className: C.opacityHeader,
                  children: [
                      (0, i.jsx)(Z.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: l.XSmallIcon,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: S.Z.Messages.CLOSE
                      })
                  ]
              })
            : (0, i.jsx)(v.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: a()(e, t, C.headerContainer),
                      onMouseDown: c,
                      onContextMenu: d,
                      children: (0, i.jsxs)(h.Z, {
                          guildId: s.guild_id,
                          channelId: s.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || f
                                  ? null
                                  : (0, i.jsx)(l.DragIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: a()(C.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: s,
                                  channelName: r
                              }),
                              n ? null : (0, p.v0)(s, o)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', { showOpacitySlider: !1 }),
            x(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            x(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            x(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            x(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            x(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    r = n ? S.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : S.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
                return e
                    ? null
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: l.BrowserCheckeredIcon,
                                        tooltip: S.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? l.PinUprightSlashIcon : l.PinUprightIcon,
                                  tooltip: r,
                                  selected: n,
                                  onClick: t
                              })
                          ]
                      });
            });
    }
}
function N(e) {
    let { channel: t, ...n } = e,
        s = (0, o.e7)([I.Z, E.Z], () => {
            let e = I.Z.getVoiceChannelId();
            return E.Z.getChannel(e);
        }),
        r = (0, o.e7)([g.Z], () => g.Z.getGuild(t.guild_id)),
        a = (0, o.e7)([_.Z], () => _.Z.isCallActive(t.id)),
        l = (0, u.ZP)(t),
        c = (0, o.e7)([m.Z], () => !!t.isDM() && null != t.getRecipientId() && m.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(T, {
        channel: t,
        channelName: l,
        guild: r,
        channelHasActiveCall: a,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: c,
        ...n
    });
}
