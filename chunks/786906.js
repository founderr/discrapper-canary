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
    l = n(442837),
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
    Z = n(518084),
    S = n(388032),
    C = n(64437);
function I(e, t, n) {
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
class y extends s.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e, t;
        let { channel: n, channelHasActiveCall: s, userIsInChannelCall: r, isBlocked: a } = this.props;
        if (!(0, f.hv)(n.type)) return null;
        let l = o.PhoneCallIcon,
            c = !1;
        return (
            s ? (r ? ((e = S.intl.string(S.t['4ry6ys'])), (l = o.PhoneHangUpIcon)) : (e = S.intl.string(S.t['0D/6R0']))) : a ? ((e = S.intl.string(S.t.PHzjvb)), (t = o.Tooltip.Colors.RED), (c = !0)) : (e = S.intl.string(S.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: l,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: c
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: s, channelName: r, guild: l, onMouseDown: c, onContextMenu: d, isPreviewingInGame: u, disableDragIndicator: f } = this.props,
            { showOpacitySlider: m } = this.state;
        return m && !n
            ? (0, i.jsxs)(Z.ZP.Bar, {
                  className: C.opacityHeader,
                  children: [
                      (0, i.jsx)(x.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: o.XSmallIcon,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: S.intl.string(S.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(Z.ZP.Background, {
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
                                  : (0, i.jsx)(o.DragIcon, {
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
                              n ? null : (0, p.v0)(s, l)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', { showOpacitySlider: !1 }),
            I(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            I(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            I(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            I(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            I(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    r = n ? S.intl.string(S.t.cSu80t) : S.intl.string(S.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: o.BrowserCheckeredIcon,
                                        tooltip: S.intl.string(S.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? o.PinUprightSlashIcon : o.PinUprightIcon,
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
        s = (0, l.e7)([E.Z, g.Z], () => {
            let e = E.Z.getVoiceChannelId();
            return g.Z.getChannel(e);
        }),
        r = (0, l.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
        a = (0, l.e7)([m.Z], () => m.Z.isCallActive(t.id)),
        o = (0, u.ZP)(t),
        c = (0, l.e7)([_.Z], () => !!t.isDM() && null != t.getRecipientId() && _.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(y, {
        channel: t,
        channelName: o,
        guild: r,
        channelHasActiveCall: a,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: c,
        ...n
    });
}
