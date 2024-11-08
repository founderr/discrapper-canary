n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(893776),
    d = n(528963),
    u = n(749210),
    h = n(607070),
    p = n(391650),
    m = n(645896),
    f = n(353093),
    g = n(717057),
    C = n(693546),
    x = n(881952),
    v = n(305325),
    _ = n(246364),
    I = n(937111),
    E = n(270801),
    b = n(652730),
    N = n(41776),
    Z = n(657352),
    S = n(33154),
    T = n(144114),
    j = n(703656),
    A = n(210887),
    y = n(237904),
    P = n(271383),
    M = n(430824),
    R = n(607744),
    L = n(496675),
    k = n(594174),
    O = n(700785),
    D = n(862679),
    w = n(981631),
    B = n(815660),
    U = n(388032),
    H = n(111001);
function G(e, t, n) {
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
class F extends l.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && d.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: i, clanInfo: l } = this.props;
        if (!i && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
            if ((0, f.EJ)(n) && null == l) return;
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
        }
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: a, notPhoneVerified: r, notEmailVerified: s, newMember: c, memberDeadline: d, newAccount: u, accountDeadline: h, theme: p, children: m, canSendMessages: f, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: C, showMemberVerificationModal: x, useReducedMotion: v, isStaff: I, guildJoinRequest: E } = this.props,
            { shouldShowLurkerModeUpsellPopout: b, shouldShowLurkerModeSuccessPopout: N } = this.state,
            Z = {
                theme: p,
                useReducedMotion: v
            };
        if (e && !f) {
            if (((Z.message = U.intl.string(U.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                Z.subtitle = U.intl.formatToPlainString(U.t.C5bgrK, { count: e.toLocaleString() });
            }
            (Z.buttonText = U.intl.string(U.t['3aOv+v'])), (Z.onButtonClick = this.handleFollowAnnouncement), (Z.imageSrc = n(485195)), t && ((Z.onSecondaryButtonClick = this.handleJoinServer), (Z.secondaryButtonText = U.intl.string(U.t['RLch7+'])));
        } else if (a) (Z.message = U.intl.string(U.t['Eg3/c3'])), (Z.buttonText = U.intl.string(U.t.fiNVio)), (Z.onButtonClick = x ? this.handleShowMemberVerification : this.handleClaimAccount), (Z.imageSrc = n(102811));
        else if (x)
            switch (null == E ? void 0 : E.applicationStatus) {
                case _.wB.SUBMITTED:
                    (Z.message = U.intl.string(U.t['5iLvS0'])), (Z.subtitle = U.intl.string(U.t.FdsK4u)), (Z.buttonText = U.intl.string(U.t.mqtdmZ)), (Z.onButtonClick = this.handleCancelApplication), (Z.imageSrc = n(281958));
                    break;
                case _.wB.REJECTED:
                    (Z.message = U.intl.string(U.t.lk30cX)), (Z.buttonText = U.intl.string(U.t['8RrsHh'])), (Z.onButtonClick = this.handleViewApplicationRejection), (Z.imageSrc = n(809844));
                    break;
                default:
                    (Z.message = U.intl.string(U.t.rEBKvr)), (Z.buttonText = U.intl.string(U.t['r8/DT0'])), (Z.buttonColor = o.ButtonColors.BRAND), (Z.onButtonClick = this.handleShowMemberVerification);
                    Z.animationSrc = () =>
                        n
                            .e('26176')
                            .then(n.t.bind(n, 737848, 19))
                            .then((e) => {
                                let { default: t } = e;
                                return t;
                            });
            }
        else r && !I ? ((Z.message = U.intl.string(U.t['2dThMD'])), (Z.buttonText = U.intl.string(U.t['50gfOj'])), (Z.onButtonClick = this.handleVerifyPhone), (Z.imageSrc = n(98063))) : s ? ((Z.message = U.intl.string(U.t.FkGPS0)), (Z.buttonText = U.intl.string(U.t.lm1UKi)), (Z.onButtonClick = this.handleResendVerification), (Z.imageSrc = n(102811))) : c ? ((Z.message = U.intl.formatToPlainString(U.t.IH7RMD, { min: w.YeM.MEMBER_AGE })), (Z.countdown = d)) : u && ((Z.message = U.intl.formatToPlainString(U.t['2JA2GB'], { min: w.YeM.ACCOUNT_AGE })), (Z.countdown = h));
        return (0, i.jsx)(o.Popout, {
            position: 'top',
            align: 'left',
            shouldShow: N,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(D.Z, {
                    ...Z,
                    children: (0, i.jsxs)(l.Fragment, {
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            C
                                ? (0, i.jsx)(o.Popout, {
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: b,
                                      position: 'top',
                                      children: (e) =>
                                          (0, i.jsx)(o.Clickable, {
                                              ...e,
                                              className: H.clickableChannelTextArea,
                                              onClick: this.handleTextAreaClick,
                                              children: m
                                          })
                                  })
                                : m
                        ]
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            G(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    r()(null != n, 'This guildID cannot be null'),
                    (0, i.jsx)(Z.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            G(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                if (null != e)
                    (0, o.openModal)((t) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: U.intl.string(U.t.aIz1oa),
                            confirmText: U.intl.string(U.t['cY+Ooa']),
                            cancelText: U.intl.string(U.t['ETE/oK']),
                            onConfirm: () => C.Z.removeGuildJoinRequest(e.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...t,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: U.intl.string(U.t['13tjTU'])
                            })
                        })
                    );
            }),
            G(this, 'handleViewApplicationRejection', () => {
                let { guild: e } = this.props;
                if (null != e)
                    (0, o.openModalLazy)(async () => {
                        let { default: t } = await n.e('3378').then(n.bind(n, 76075));
                        return (n) =>
                            (0, i.jsx)(t, {
                                guildId: e.id,
                                ...n
                            });
                    });
            }),
            G(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, v.hk)(e.id);
            }),
            G(this, 'handleClaimAccount', () => {
                p.j();
            }),
            G(this, 'handleVerifyPhone', () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('35052')]).then(n.bind(n, 607018));
                        return (t) =>
                            (0, i.jsx)(e, {
                                reason: T.L.GUILD_PHONE_REQUIRED,
                                ...t
                            });
                    },
                    { modalKey: B.M }
                );
            }),
            G(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null === (e = k.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
                null != t &&
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            ...e,
                            header: U.intl.string(U.t.LykQYm),
                            confirmText: U.intl.string(U.t.BddRzc),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: U.intl.format(U.t.azKEPz, { email: t })
                            })
                        })
                    );
            }),
            G(this, 'handleTextAreaClick', () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            G(this, 'handleJoinServer', async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await u.Z.joinGuild(e, { source: w.vtS.CHAT_INPUT_BLOCKER });
                } catch {
                    this.setState({ submitting: !1 });
                }
            }),
            G(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, j.s1)().goBack();
            }),
            G(this, 'handleFollowAnnouncement', () => {
                let { channel: e } = this.props;
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await n.e('54642').then(n.bind(n, 720589));
                    return (n) =>
                        (0, i.jsx)(t, {
                            channel: e,
                            ...n
                        });
                });
            }),
            G(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            G(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    r()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, i.jsx)(S.Z, {
                        type: S.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            G(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === _.wB.APPROVED;
                if (null == e || null == t || !n || (0, x.d3)(t)) return null;
                let l = () => {
                    C.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, f.EJ)(e)
                    ? (0, i.jsx)(o.Modal, {
                          renderModal: (t) =>
                              (0, i.jsx)(g.default, {
                                  ...t,
                                  onAccept: l,
                                  guildId: e.id
                              }),
                          onCloseRequest: l
                      })
                    : (0, i.jsx)(o.Modal, {
                          renderModal: (t) =>
                              (0, i.jsx)(E.Z, {
                                  ...t,
                                  onAccept: l,
                                  guildName: e.name
                              }),
                          onCloseRequest: l
                      });
            });
    }
}
function V(e) {
    var t, n;
    let { channel: a, children: r } = e,
        o = a.getGuildId(),
        c = (0, s.e7)([M.Z], () => M.Z.getGuild(o)),
        d = (0, s.e7)([R.Z], () => R.Z.getCheck(o)),
        u = a.type === w.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(w.oNc.NEWS),
        p = (0, s.e7)([y.Z], () => (u ? y.Z.getFollowerStatsForChannel(a.id) : null)),
        g = (0, s.e7)([N.Z], () => N.Z.isLurking(o)),
        C = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        v = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t,
        E = (0, s.e7)([P.ZP], () => {
            var e, t;
            return null != C && null !== (t = null === (e = P.ZP.getMember(o, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
        }),
        Z = !!(null == c ? void 0 : c.hasVerificationGate()),
        S = (E || d.notClaimed) && Z,
        T = (0, s.e7)([b.Z], () => b.Z.shouldShowPopout(o)),
        j = (0, s.e7)([L.Z], () => L.Z.can(w.Plq.SEND_MESSAGES, a)),
        D = (0, s.e7)([I.Z], () => I.Z.getRequest(o)),
        [B, U] = (0, m.L_)(o),
        H = (0, m.Cc)(o),
        G = (null == D ? void 0 : D.applicationStatus) === _.wB.APPROVED;
    l.useEffect(() => {
        if (!(!(0, f.EJ)(c) || !G || (0, x.d3)(D)) && null == H) U();
    }, [c, G, D, H]);
    let V = {
        ...d,
        guild: c,
        isLurking: g,
        isFollowable: u,
        shouldShowLurkerModeSuccessPopout: T,
        showLurkerModeUpsellPopout: g && null != c && O.Uu(w.Plq.SEND_MESSAGES, a),
        theme: A.Z.theme,
        canSendMessages: j,
        channelFollowingUsersSeen: null != p ? p.usersSeenEver : null,
        hasVerificationGate: Z,
        showMemberVerificationModal: S,
        guildJoinRequestStatus: null !== (n = null == D ? void 0 : D.applicationStatus) && void 0 !== n ? n : _.wB.STARTED,
        guildJoinRequest: D,
        useReducedMotion: h.Z.useReducedMotion,
        isStaff: v,
        isLoading: B,
        clanInfo: H
    };
    return (0, i.jsx)(F, {
        ...V,
        channel: a,
        children: r
    });
}
