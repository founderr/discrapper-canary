n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(13245),
    d = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    f = n(131704),
    m = n(523746),
    g = n(592125),
    v = n(430824),
    _ = n(699516),
    E = n(944486),
    x = n(707878),
    I = n(518084),
    Z = n(388032),
    S = n(64437);
function C(e, t, n) {
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
        let { channel: n, channelHasActiveCall: r, userIsInChannelCall: s, isBlocked: l } = this.props;
        if (!(0, f.hv)(n.type)) return null;
        let a = o.PhoneCallIcon,
            c = !1;
        return (
            r ? (s ? ((e = Z.intl.string(Z.t['4ry6ys'])), (a = o.PhoneHangUpIcon)) : (e = Z.intl.string(Z.t['0D/6R0']))) : l ? ((e = Z.intl.string(Z.t.PHzjvb)), (t = o.Tooltip.Colors.RED), (c = !0)) : (e = Z.intl.string(Z.t.focH1t)),
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
            { showOpacitySlider: m } = this.state;
        return m && !n
            ? (0, i.jsxs)(I.ZP.Bar, {
                  className: S.opacityHeader,
                  children: [
                      (0, i.jsx)(x.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: o.XSmallIcon,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: Z.intl.string(Z.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(I.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: l()(e, t, S.headerContainer),
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
                                  : (0, i.jsx)(o.DragIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: l()(S.dragIcon, t),
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
            C(this, 'state', { showOpacitySlider: !1 }),
            C(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            C(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            C(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            C(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            C(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    s = n ? Z.intl.string(Z.t.cSu80t) : Z.intl.string(Z.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: o.BrowserCheckeredIcon,
                                        tooltip: Z.intl.string(Z.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? o.PinUprightSlashIcon : o.PinUprightIcon,
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
        r = (0, a.e7)([E.Z, g.Z], () => {
            let e = E.Z.getVoiceChannelId();
            return g.Z.getChannel(e);
        }),
        s = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
        l = (0, a.e7)([m.Z], () => m.Z.isCallActive(t.id)),
        o = (0, u.ZP)(t),
        c = (0, a.e7)([_.Z], () => !!t.isDM() && null != t.getRecipientId() && _.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(y, {
        channel: t,
        channelName: o,
        guild: s,
        channelHasActiveCall: l,
        userIsInChannelCall: null != r && r.id === t.id,
        isBlocked: c,
        ...n
    });
}
