n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(442837),
    l = n(481060),
    c = n(13245),
    d = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    f = n(131704),
    g = n(523746),
    m = n(592125),
    v = n(430824),
    _ = n(699516),
    E = n(944486),
    Z = n(707878),
    x = n(518084),
    I = n(388032),
    C = n(64437);
function S(e, t, n) {
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
class y extends r.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e, t;
        let { channel: n, channelHasActiveCall: r, userIsInChannelCall: s, isBlocked: o } = this.props;
        if (!(0, f.hv)(n.type)) return null;
        let a = l.PhoneCallIcon,
            c = !1;
        return (
            r ? (s ? ((e = I.intl.string(I.t['4ry6ys'])), (a = l.PhoneHangUpIcon)) : (e = I.intl.string(I.t['0D/6R0']))) : o ? ((e = I.intl.string(I.t.PHzjvb)), (t = l.Tooltip.Colors.RED), (c = !0)) : (e = I.intl.string(I.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: a,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: c
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: r, channelName: s, guild: a, onMouseDown: c, onContextMenu: d, isPreviewingInGame: u, disableDragIndicator: f } = this.props,
            { showOpacitySlider: g } = this.state;
        return g && !n
            ? (0, i.jsxs)(x.ZP.Bar, {
                  className: C.opacityHeader,
                  children: [
                      (0, i.jsx)(Z.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: l.XSmallIcon,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: I.intl.string(I.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(x.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: o()(e, t, C.headerContainer),
                      onMouseDown: c,
                      onContextMenu: d,
                      children: (0, i.jsxs)(h.Z, {
                          guildId: r.guild_id,
                          channelId: r.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || f
                                  ? null
                                  : (0, i.jsx)(l.DragIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: o()(C.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: r,
                                  channelName: s
                              }),
                              n ? null : (0, p.v0)(r, a)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { showOpacitySlider: !1 }),
            S(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            S(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            S(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            S(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            S(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    s = n ? I.intl.string(I.t.cSu80t) : I.intl.string(I.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: l.BrowserCheckeredIcon,
                                        tooltip: I.intl.string(I.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? l.PinUprightSlashIcon : l.PinUprightIcon,
                                  tooltip: s,
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
        r = (0, a.e7)([E.Z, m.Z], () => {
            let e = E.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
        }),
        s = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
        o = (0, a.e7)([g.Z], () => g.Z.isCallActive(t.id)),
        l = (0, u.ZP)(t),
        c = (0, a.e7)([_.Z], () => !!t.isDM() && null != t.getRecipientId() && _.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(y, {
        channel: t,
        channelName: l,
        guild: s,
        channelHasActiveCall: o,
        userIsInChannelCall: null != r && r.id === t.id,
        isBlocked: c,
        ...n
    });
}
