n(411104), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(100621),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(358221),
    h = n(43267),
    p = n(933557),
    m = n(93687),
    f = n(266076),
    g = n(199902),
    C = n(19780),
    _ = n(306680),
    v = n(944486),
    x = n(594174),
    I = n(451478),
    b = n(276952),
    E = n(682662),
    S = n(662146),
    Z = n(674552),
    N = n(981631),
    y = n(410357);
function T(e, t, n) {
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
let j = {
    friction: 28,
    tension: 600
};
function A(e) {
    switch (e) {
        case 'height':
        case 'opacity':
            return {
                duration: 150,
                ...j
            };
        case 'scale':
            return { ...j };
        default:
            throw Error('DirectMessage: getSpringConfigs() - Invalid spring '.concat(String(e)));
    }
}
class P extends (i = r.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !I.Z.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: A
                })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({
            immediate: !0,
            scale: 1,
            opacity: 1,
            height: 1,
            config: A
        })
            .start()
            .then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t
                .update({
                    immediate: !I.Z.isFocused(),
                    height: 0,
                    opacity: 0,
                    scale: 0,
                    config: A
                })
                .start()
                .then(e)
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { controller: e } = this.state,
            { opacity: t, height: n, scale: i } = e.springs;
        return {
            opacity: t,
            height: n.to([0, 1], [0, 56]),
            transform: i.to([0, 1], [0.5, 1]).to((e) => 'scale('.concat(e, ')'))
        };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === N.d4z.DM ? x.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: i, audio: r, video: s, stream: u, isCurrentUserInThisDMCall: d, unread: h, isGDMFacepileEnabled: p } = this.props,
            { hovered: m, animating: g } = this.state,
            C = e.isMultiUserDM() && null == e.icon && p;
        return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(E.H, {
                children: [
                    (0, l.jsx)(b.Z, {
                        hovered: !g && m,
                        selected: !g && n,
                        unread: !g && h,
                        className: y.pill
                    }),
                    (0, l.jsx)(S.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, l.jsx)(c.BlobMask, {
                            selected: n || m,
                            lowerBadge: i > 0 ? (0, Z.Ne)(i) : null,
                            upperBadge: (0, Z.Or)({
                                audio: r,
                                video: s,
                                screenshare: u,
                                isCurrentUserConnected: d
                            }),
                            lowerBadgeSize: { width: (0, c.getBadgeWidthForValue)(i) },
                            children: (0, l.jsx)(o.mh, {
                                id: e.id,
                                children: (i) =>
                                    (0, l.jsx)(c.NavItem, {
                                        to: N.Z5c.CHANNEL(N.ME, e.id),
                                        onMouseEnter: () => this.setState({ hovered: !0 }),
                                        onMouseLeave: () => this.setState({ hovered: !1 }),
                                        selected: n || m,
                                        ariaLabel: null != t ? t : '',
                                        onContextMenu: this.handleContextMenu,
                                        icon: C ? void 0 : this.getChannelIcon(),
                                        backgroundStyle: C ? 'on-hover' : 'always',
                                        children: C
                                            ? (0, l.jsx)(f.Z, {
                                                  channel: e,
                                                  size: c.AvatarSizes.SIZE_48,
                                                  facepileSizeOverride: c.AvatarSizes.SIZE_32,
                                                  experimentLocation: 'unread_gdm',
                                                  'aria-hidden': !0
                                              })
                                            : void 0,
                                        ...i
                                    })
                            })
                        })
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
                hovered: !1,
                animating: !0,
                controller: new a.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: A
                })
            }),
            T(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = t.type === N.d4z.DM ? x.default.getUser(t.getRecipientId()) : null;
                null != i
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('12327')]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  user: i
                              });
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  selected: !1
                              });
                      });
            });
    }
}
T(P, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
}),
    (t.Z = r.forwardRef(function (e, t) {
        let n = e.channel.id,
            i = (0, p.ZP)(e.channel),
            r = (0, s.e7)([C.Z], () => C.Z.getChannelId(), []),
            a = (0, s.e7)([d.Z], () => (null != r ? d.Z.getMode(r) : N.WtW.VOICE), [r]),
            o = (0, s.e7)([g.Z], () => g.Z.getAllApplicationStreamsForChannel(n).length > 0),
            c = (0, s.e7)([v.Z], () => v.Z.getChannelId(), []),
            u = (0, s.e7)([_.ZP], () => _.ZP.getMentionCount(n), [n]),
            { isFacepileEnabled: h } = m.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
            f = r === n,
            x = !1,
            I = !1;
        return (
            f && ((x = a === N.WtW.VOICE), (I = a === N.WtW.VIDEO)),
            (0, l.jsx)(P, {
                ...e,
                ref: t,
                channelName: i,
                unread: u > 0,
                selected: c === n,
                badge: u,
                audio: x,
                video: I,
                stream: o,
                isCurrentUserInThisDMCall: f,
                isGDMFacepileEnabled: h
            })
        );
    }));
