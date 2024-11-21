n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
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
    _ = n(305325),
    v = n(246364),
    I = n(937111),
    E = n(270801),
    b = n(652730),
    Z = n(41776),
    N = n(657352),
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
    H = n(621904);
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
        let { isFollowable: e, isLurking: t, notClaimed: r, notPhoneVerified: a, notEmailVerified: s, newMember: c, memberDeadline: d, newAccount: u, accountDeadline: h, theme: p, children: m, canSendMessages: f, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: C, showMemberVerificationModal: x, useReducedMotion: _, isStaff: I, guildJoinRequest: E } = this.props,
            { shouldShowLurkerModeUpsellPopout: b, shouldShowLurkerModeSuccessPopout: Z } = this.state,
            N = {
                theme: p,
                useReducedMotion: _
            };
        if (e && !f) {
            if (((N.message = U.intl.string(U.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                N.subtitle = U.intl.formatToPlainString(U.t.C5bgrK, { count: e.toLocaleString() });
            }
            (N.buttonText = U.intl.string(U.t['3aOv+v'])), (N.onButtonClick = this.handleFollowAnnouncement), (N.imageSrc = n(485195)), t && ((N.onSecondaryButtonClick = this.handleJoinServer), (N.secondaryButtonText = U.intl.string(U.t['RLch7+'])));
        } else if (r) (N.message = U.intl.string(U.t['Eg3/c3'])), (N.buttonText = U.intl.string(U.t.fiNVio)), (N.onButtonClick = x ? this.handleShowMemberVerification : this.handleClaimAccount), (N.imageSrc = n(102811));
        else if (x)
            switch (null == E ? void 0 : E.applicationStatus) {
                case v.wB.SUBMITTED:
                    (N.message = U.intl.string(U.t['5iLvS0'])), (N.subtitle = U.intl.string(U.t.FdsK4u)), (N.buttonText = U.intl.string(U.t.mqtdmZ)), (N.onButtonClick = this.handleCancelApplication), (N.imageSrc = n(281958));
                    break;
                case v.wB.REJECTED:
                    (N.message = U.intl.string(U.t.lk30cX)), (N.buttonText = U.intl.string(U.t['8RrsHh'])), (N.onButtonClick = this.handleViewApplicationRejection), (N.imageSrc = n(809844));
                    break;
                default:
                    (N.message = U.intl.string(U.t.rEBKvr)), (N.buttonText = U.intl.string(U.t['r8/DT0'])), (N.buttonColor = o.ButtonColors.BRAND), (N.onButtonClick = this.handleShowMemberVerification);
                    N.animationSrc = () =>
                        n
                            .e('26176')
                            .then(n.t.bind(n, 737848, 19))
                            .then((e) => {
                                let { default: t } = e;
                                return t;
                            });
            }
        else a && !I ? ((N.message = U.intl.string(U.t['2dThMD'])), (N.buttonText = U.intl.string(U.t['50gfOj'])), (N.onButtonClick = this.handleVerifyPhone), (N.imageSrc = n(98063))) : s ? ((N.message = U.intl.string(U.t.FkGPS0)), (N.buttonText = U.intl.string(U.t.lm1UKi)), (N.onButtonClick = this.handleResendVerification), (N.imageSrc = n(102811))) : c ? ((N.message = U.intl.formatToPlainString(U.t.IH7RMD, { min: w.YeM.MEMBER_AGE })), (N.countdown = d)) : u && ((N.message = U.intl.formatToPlainString(U.t['2JA2GB'], { min: w.YeM.ACCOUNT_AGE })), (N.countdown = h));
        return (0, i.jsx)(o.Popout, {
            position: 'top',
            align: 'left',
            shouldShow: Z,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(D.Z, {
                    ...N,
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
                    a()(null != n, 'This guildID cannot be null'),
                    (0, i.jsx)(N.Z, {
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
                null != e && (0, _.hk)(e.id);
            }),
            G(this, 'handleClaimAccount', () => {
                p.j();
            }),
            G(this, 'handleVerifyPhone', () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('63461')]).then(n.bind(n, 607018));
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
                    a()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, i.jsx)(S.Z, {
                        type: S.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            G(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === v.wB.APPROVED;
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
    let { channel: r, children: a } = e,
        o = r.getGuildId(),
        c = (0, s.e7)([M.Z], () => M.Z.getGuild(o)),
        d = (0, s.e7)([R.Z], () => R.Z.getCheck(o)),
        u = r.type === w.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(w.oNc.NEWS),
        p = (0, s.e7)([y.Z], () => (u ? y.Z.getFollowerStatsForChannel(r.id) : null)),
        g = (0, s.e7)([Z.Z], () => Z.Z.isLurking(o)),
        C = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        _ = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t,
        E = (0, s.e7)([P.ZP], () => {
            var e, t;
            return null != C && null !== (t = null === (e = P.ZP.getMember(o, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
        }),
        N = !!(null == c ? void 0 : c.hasVerificationGate()),
        S = (E || d.notClaimed) && N,
        T = (0, s.e7)([b.Z], () => b.Z.shouldShowPopout(o)),
        j = (0, s.e7)([L.Z], () => L.Z.can(w.Plq.SEND_MESSAGES, r)),
        D = (0, s.e7)([I.Z], () => I.Z.getRequest(o)),
        [B, U] = (0, m.L_)(o),
        H = (0, m.Cc)(o),
        G = (null == D ? void 0 : D.applicationStatus) === v.wB.APPROVED;
    l.useEffect(() => {
        if (!(!(0, f.EJ)(c) || !G || (0, x.d3)(D)) && null == H) U();
    }, [c, G, D, H]);
    let V = {
        ...d,
        guild: c,
        isLurking: g,
        isFollowable: u,
        shouldShowLurkerModeSuccessPopout: T,
        showLurkerModeUpsellPopout: g && null != c && O.Uu(w.Plq.SEND_MESSAGES, r),
        theme: A.Z.theme,
        canSendMessages: j,
        channelFollowingUsersSeen: null != p ? p.usersSeenEver : null,
        hasVerificationGate: N,
        showMemberVerificationModal: S,
        guildJoinRequestStatus: null !== (n = null == D ? void 0 : D.applicationStatus) && void 0 !== n ? n : v.wB.STARTED,
        guildJoinRequest: D,
        useReducedMotion: h.Z.useReducedMotion,
        isStaff: _,
        isLoading: B,
        clanInfo: H
    };
    return (0, i.jsx)(F, {
        ...V,
        channel: r,
        children: a
    });
}
