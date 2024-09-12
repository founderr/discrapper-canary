n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(704215),
    r = n(481060),
    o = n(26151),
    c = n(287734),
    u = n(40851),
    d = n(607070),
    h = n(451576),
    m = n(358221),
    p = n(605236),
    _ = n(243778),
    f = n(590293),
    E = n(970731),
    g = n(560688),
    C = n(173507),
    I = n(523746),
    x = n(819640),
    T = n(131951),
    v = n(699516),
    S = n(594174),
    N = n(979651),
    A = n(585483),
    Z = n(63063),
    M = n(665149),
    b = n(981631),
    R = n(921944),
    L = n(65154),
    j = n(689938),
    P = n(648298);
function O(e, t, n) {
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
class y extends s.PureComponent {
    componentDidMount() {
        A.S.subscribe(b.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        A.S.unsubscribe(b.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e, t;
        let { inCall: n, callActive: s, callUnavailable: a, isBlocked: l, channel: o, mode: c } = this.props;
        if (n || (s && c === b.WtW.VOICE)) return null;
        let u = o.isManaged(),
            d = null,
            h = !1;
        return (
            T.Z.supports(L.AN.VIDEO) ? (l ? ((d = j.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS), (e = r.Tooltip.Colors.RED), (h = !0)) : s && c === b.WtW.VIDEO ? ((t = this.handleJoinVideoCall), (d = u ? j.Z.Messages.CONNECT : j.Z.Messages.JOIN_VIDEO_CALL)) : ((t = this.handleStartVideoCall), (d = u ? j.Z.Messages.CONNECT : j.Z.Messages.START_VIDEO_CALL))) : ((h = !0), (t = this.handleBrowserNotSupported), (d = j.Z.Messages.BROWSER_NOT_SUPPORTED)),
            (0, i.jsx)(M.ZP.Icon, {
                icon: r.VideoIcon,
                onClick: t,
                disabled: h || a,
                tooltip: d,
                tooltipColor: e
            })
        );
    }
    renderVoiceCallButton() {
        let e;
        let { inCall: t, canShowTooltip: n, callActive: s, callUnavailable: a, isBlocked: o, channel: c, canShowActivityGdmTooltip: u, dismissibleContentTypes: d } = this.props;
        if (t) return null;
        let h = c.isManaged(),
            m = '',
            p = !1;
        a ? ((m = h ? j.Z.Messages.VOICE_UNAVAILABLE : j.Z.Messages.CALL_UNAVAILABLE), (e = r.Tooltip.Colors.RED), (p = !0)) : o ? ((m = j.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS), (e = r.Tooltip.Colors.RED), (p = !0)) : (m = s ? (h ? j.Z.Messages.CONNECT : j.Z.Messages.JOIN_VOICE_CALL) : h ? j.Z.Messages.CONNECT : j.Z.Messages.START_VOICE_CALL);
        let f = (0, i.jsx)(M.ZP.Icon, {
            icon: r.PhoneCallIcon,
            onClick: this.handleVoiceClick,
            disabled: p,
            tooltip: m,
            tooltipColor: e
        });
        return (0, i.jsx)(_.ZP, {
            contentTypes: d,
            children: (e) => {
                let { visibleContent: s, markAsDismissed: a } = e;
                if (s === l.z.ACTIVITY_GDM_CALL_TOOLTIP)
                    return (0, i.jsx)(r.Popout, {
                        position: 'bottom',
                        align: 'center',
                        animation: r.Popout.Animation.TRANSLATE,
                        shouldShow: n && u && !t,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(E.ZP, {
                                header: (0, i.jsx)(r.Heading, {
                                    variant: 'heading-md/bold',
                                    color: 'always-white',
                                    children: j.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_HEADER
                                }),
                                content: (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'always-white',
                                            children: j.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_BODY
                                        }),
                                        (0, i.jsx)(r.Anchor, {
                                            href: Z.Z.getArticleURL(b.BhN.ACTIVITIES),
                                            children: j.Z.Messages.LEARN_MORE
                                        })
                                    ]
                                }),
                                buttonCTA: j.Z.Messages.GOT_IT,
                                onClick: () => {
                                    t(), a(R.L.UNKNOWN);
                                },
                                className: P.tooltip
                            });
                        },
                        children: () => f
                    });
                return f;
            }
        });
    }
    render() {
        return (0, i.jsxs)(s.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'handleStartCall', (e, t) => {
                let { channel: n, notFriend: i, appContext: s } = this.props,
                    a = i ? n.getRecipientId() : null,
                    l = () => o.Z.call(n.id, t, !i && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), a);
                t ? (0, C.Z)(l, s) : l();
            }),
            O(this, 'handleJoinCall', (e) => {
                c.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            O(this, 'handleVoiceClick', (e) => {
                let { callUnavailable: t, callActive: n, canShowActivityGdmTooltip: i } = this.props;
                if ((i && (0, p.EW)(l.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: R.L.AUTO }), t));
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            O(this, 'handleStartVideoCall', (e) => {
                this.handleStartCall(e, !0);
            }),
            O(this, 'handleJoinVideoCall', () => {
                let { appContext: e } = this.props;
                (0, C.Z)(() => this.handleJoinCall(!0), e);
            }),
            O(this, 'handleBrowserNotSupported', () => {
                (0, g.Z)();
            });
    }
}
function D(e) {
    let { channel: t } = e,
        n = (0, f.Z)(),
        r = (0, a.e7)([m.Z], () => m.Z.getMode(t.id)),
        o = (0, a.e7)([N.Z], () => N.Z.isInChannel(t.id)),
        c = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        { callActive: p, callUnavailable: _ } = (0, a.cj)([I.Z], () => ({
            callActive: I.Z.isCallActive(t.id),
            callUnavailable: I.Z.isCallUnavailable(t.id)
        })),
        E = t.getRecipientId(),
        { notFriend: g, isBlocked: C } = (0, a.cj)([v.Z], () => ({
            notFriend: t.type === b.d4z.DM && null != E && !v.Z.isFriend(E),
            isBlocked: t.type === b.d4z.DM && null != E && v.Z.isBlocked(E)
        })),
        T = (0, a.e7)([S.default], () => S.default.getUser(E)),
        A = (0, u.bp)(),
        Z = [],
        M = (0, h.Z)(t.id),
        R = (0, a.e7)([x.Z], () => x.Z.hasLayers());
    M && !R && Z.push(l.z.ACTIVITY_GDM_CALL_TOOLTIP);
    let [L, j] = s.useState(!1);
    return (s.useEffect(() => {
        let e = setTimeout(() => {
            j(!0);
        }, 250);
        return () => clearTimeout(e);
    }, []),
    n || (null == T ? void 0 : T.bot))
        ? null
        : (0, i.jsx)(y, {
              channel: t,
              mode: r,
              inCall: o,
              callActive: p,
              callUnavailable: _,
              notFriend: g,
              isBlocked: C,
              appContext: A,
              canShowTooltip: L,
              canShowActivityGdmTooltip: M,
              dismissibleContentTypes: Z,
              useReducedMotion: c
          });
}
