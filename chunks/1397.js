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
    u = n(528963),
    d = n(749210),
    h = n(607070),
    m = n(391650),
    p = n(645896),
    f = n(353093),
    g = n(717057),
    C = n(693546),
    x = n(881952),
    v = n(305325),
    _ = n(246364),
    I = n(937111),
    E = n(270801),
    b = n(652730),
    S = n(41776),
    Z = n(657352),
    T = n(33154),
    N = n(144114),
    j = n(703656),
    A = n(210887),
    y = n(237904),
    P = n(271383),
    M = n(430824),
    R = n(607744),
    L = n(496675),
    k = n(594174),
    O = n(700785),
    w = n(862679),
    D = n(981631),
    U = n(815660),
    B = n(388032),
    H = n(621904);
function F(e, t, n) {
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
class G extends l.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && u.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: i, clanInfo: l } = this.props;
        if (!i && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
            if ((0, f.EJ)(n) && null == l) return;
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
        }
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: r, notPhoneVerified: a, notEmailVerified: s, newMember: c, memberDeadline: u, newAccount: d, accountDeadline: h, theme: m, children: p, canSendMessages: f, channelFollowingUsersSeen: g, showLurkerModeUpsellPopout: C, showMemberVerificationModal: x, useReducedMotion: v, isStaff: I, guildJoinRequest: E } = this.props,
            { shouldShowLurkerModeUpsellPopout: b, shouldShowLurkerModeSuccessPopout: S } = this.state,
            Z = {
                theme: m,
                useReducedMotion: v
            };
        if (e && !f) {
            if (((Z.message = B.intl.string(B.t.Hl0Mqq)), null != g && g >= 1000)) {
                let e = 1000 * Math.floor(g / 1000);
                Z.subtitle = B.intl.formatToPlainString(B.t.C5bgrK, { count: e.toLocaleString() });
            }
            (Z.buttonText = B.intl.string(B.t['3aOv+v'])), (Z.onButtonClick = this.handleFollowAnnouncement), (Z.imageSrc = n(485195)), t && ((Z.onSecondaryButtonClick = this.handleJoinServer), (Z.secondaryButtonText = B.intl.string(B.t['RLch7+'])));
        } else if (r) (Z.message = B.intl.string(B.t['Eg3/c3'])), (Z.buttonText = B.intl.string(B.t.fiNVio)), (Z.onButtonClick = x ? this.handleShowMemberVerification : this.handleClaimAccount), (Z.imageSrc = n(102811));
        else if (x)
            switch (null == E ? void 0 : E.applicationStatus) {
                case _.wB.SUBMITTED:
                    (Z.message = B.intl.string(B.t['5iLvS0'])), (Z.subtitle = B.intl.string(B.t.FdsK4u)), (Z.buttonText = B.intl.string(B.t.mqtdmZ)), (Z.onButtonClick = this.handleCancelApplication), (Z.imageSrc = n(281958));
                    break;
                case _.wB.REJECTED:
                    (Z.message = B.intl.string(B.t.lk30cX)), (Z.buttonText = B.intl.string(B.t['8RrsHh'])), (Z.onButtonClick = this.handleViewApplicationRejection), (Z.imageSrc = n(809844));
                    break;
                default:
                    (Z.message = B.intl.string(B.t.rEBKvr)), (Z.buttonText = B.intl.string(B.t['r8/DT0'])), (Z.buttonColor = o.ButtonColors.BRAND), (Z.onButtonClick = this.handleShowMemberVerification);
                    Z.animationSrc = () =>
                        n
                            .e('26176')
                            .then(n.t.bind(n, 737848, 19))
                            .then((e) => {
                                let { default: t } = e;
                                return t;
                            });
            }
        else a && !I ? ((Z.message = B.intl.string(B.t['2dThMD'])), (Z.buttonText = B.intl.string(B.t['50gfOj'])), (Z.onButtonClick = this.handleVerifyPhone), (Z.imageSrc = n(98063))) : s ? ((Z.message = B.intl.string(B.t.FkGPS0)), (Z.buttonText = B.intl.string(B.t.lm1UKi)), (Z.onButtonClick = this.handleResendVerification), (Z.imageSrc = n(102811))) : c ? ((Z.message = B.intl.formatToPlainString(B.t.IH7RMD, { min: D.YeM.MEMBER_AGE })), (Z.countdown = u)) : d && ((Z.message = B.intl.formatToPlainString(B.t['2JA2GB'], { min: D.YeM.ACCOUNT_AGE })), (Z.countdown = h));
        return (0, i.jsx)(o.Popout, {
            position: 'top',
            align: 'left',
            shouldShow: S,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(w.Z, {
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
                                              children: p
                                          })
                                  })
                                : p
                        ]
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            F(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    a()(null != n, 'This guildID cannot be null'),
                    (0, i.jsx)(Z.Z, {
                        onClose: t,
                        guild: n
                    })
                );
            }),
            F(this, 'handleCancelApplication', () => {
                let { guild: e } = this.props;
                if (null != e)
                    (0, o.openModal)((t) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: B.intl.string(B.t.aIz1oa),
                            confirmText: B.intl.string(B.t['cY+Ooa']),
                            cancelText: B.intl.string(B.t['ETE/oK']),
                            onConfirm: () => C.Z.removeGuildJoinRequest(e.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...t,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: B.intl.string(B.t['13tjTU'])
                            })
                        })
                    );
            }),
            F(this, 'handleViewApplicationRejection', () => {
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
            F(this, 'handleShowMemberVerification', () => {
                let { guild: e } = this.props;
                null != e && (0, v.hk)(e.id);
            }),
            F(this, 'handleClaimAccount', () => {
                m.j();
            }),
            F(this, 'handleVerifyPhone', () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('63461')]).then(n.bind(n, 607018));
                        return (t) =>
                            (0, i.jsx)(e, {
                                reason: N.L.GUILD_PHONE_REQUIRED,
                                ...t
                            });
                    },
                    { modalKey: U.M }
                );
            }),
            F(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null === (e = k.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
                null != t &&
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            ...e,
                            header: B.intl.string(B.t.LykQYm),
                            confirmText: B.intl.string(B.t.BddRzc),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: B.intl.format(B.t.azKEPz, { email: t })
                            })
                        })
                    );
            }),
            F(this, 'handleTextAreaClick', () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            F(this, 'handleJoinServer', async () => {
                this.setState({ submitting: !0 });
                let e = this.props.channel.getGuildId();
                try {
                    await d.Z.joinGuild(e, { source: D.vtS.CHAT_INPUT_BLOCKER });
                } catch {
                    this.setState({ submitting: !1 });
                }
            }),
            F(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, j.s1)().goBack();
            }),
            F(this, 'handleFollowAnnouncement', () => {
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
            F(this, 'closeLurkerModeUpsellPopout', () => {
                this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            F(this, 'renderLurkerModeUpsellPopout', () => {
                let { guild: e } = this.props;
                return (
                    a()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, i.jsx)(T.Z, {
                        type: T.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            F(this, 'renderMemberVerificationSuccessModal', () => {
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
    let { channel: r, children: a } = e,
        o = r.getGuildId(),
        c = (0, s.e7)([M.Z], () => M.Z.getGuild(o)),
        u = (0, s.e7)([R.Z], () => R.Z.getCheck(o)),
        d = r.type === D.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(D.oNc.NEWS),
        m = (0, s.e7)([y.Z], () => (d ? y.Z.getFollowerStatsForChannel(r.id) : null)),
        g = (0, s.e7)([S.Z], () => S.Z.isLurking(o)),
        C = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        v = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t,
        E = (0, s.e7)([P.ZP], () => {
            var e, t;
            return null != C && null !== (t = null === (e = P.ZP.getMember(o, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
        }),
        Z = !!(null == c ? void 0 : c.hasVerificationGate()),
        T = (E || u.notClaimed) && Z,
        N = (0, s.e7)([b.Z], () => b.Z.shouldShowPopout(o)),
        j = (0, s.e7)([L.Z], () => L.Z.can(D.Plq.SEND_MESSAGES, r)),
        w = (0, s.e7)([I.Z], () => I.Z.getRequest(o)),
        [U, B] = (0, p.L_)(o),
        H = (0, p.Cc)(o),
        F = (null == w ? void 0 : w.applicationStatus) === _.wB.APPROVED;
    l.useEffect(() => {
        if (!(!(0, f.EJ)(c) || !F || (0, x.d3)(w)) && null == H) B();
    }, [c, F, w, H]);
    let V = {
        ...u,
        guild: c,
        isLurking: g,
        isFollowable: d,
        shouldShowLurkerModeSuccessPopout: N,
        showLurkerModeUpsellPopout: g && null != c && O.Uu(D.Plq.SEND_MESSAGES, r),
        theme: A.Z.theme,
        canSendMessages: j,
        channelFollowingUsersSeen: null != m ? m.usersSeenEver : null,
        hasVerificationGate: Z,
        showMemberVerificationModal: T,
        guildJoinRequestStatus: null !== (n = null == w ? void 0 : w.applicationStatus) && void 0 !== n ? n : _.wB.STARTED,
        guildJoinRequest: w,
        useReducedMotion: h.Z.useReducedMotion,
        isStaff: v,
        isLoading: U,
        clanInfo: H
    };
    return (0, i.jsx)(G, {
        ...V,
        channel: r,
        children: a
    });
}
