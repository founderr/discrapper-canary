n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(512722),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(893776),
    u = n(528963),
    d = n(749210),
    h = n(607070),
    m = n(391650),
    p = n(645896),
    _ = n(353093),
    f = n(717057),
    E = n(693546),
    g = n(881952),
    C = n(305325),
    I = n(246364),
    T = n(937111),
    x = n(270801),
    S = n(652730),
    v = n(41776),
    N = n(657352),
    A = n(33154),
    Z = n(144114),
    M = n(703656),
    b = n(210887),
    R = n(237904),
    L = n(271383),
    j = n(430824),
    P = n(607744),
    O = n(496675),
    y = n(594174),
    D = n(700785),
    U = n(862679),
    k = n(981631),
    w = n(815660),
    B = n(689938),
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
class V extends s.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && u.Z.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: i, clanInfo: s } = this.props;
        if (!i && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
            if ((0, _.EJ)(n) && null == s) return;
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
        }
    }
    render() {
        let { isFollowable: e, isLurking: t, notClaimed: a, notPhoneVerified: l, notEmailVerified: r, newMember: c, memberDeadline: u, newAccount: d, accountDeadline: h, theme: m, children: p, canSendMessages: _, channelFollowingUsersSeen: f, showLurkerModeUpsellPopout: E, showMemberVerificationModal: g, useReducedMotion: C, isStaff: T, guildJoinRequest: x } = this.props,
            { shouldShowLurkerModeUpsellPopout: S, shouldShowLurkerModeSuccessPopout: v } = this.state,
            N = {
                theme: m,
                useReducedMotion: C
            };
        if (e && !_) {
            if (((N.message = B.Z.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE), null != f && f >= 1000)) {
                let e = 1000 * Math.floor(f / 1000);
                N.subtitle = B.Z.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({ count: e.toLocaleString() });
            }
            (N.buttonText = B.Z.Messages.FOLLOW), (N.onButtonClick = this.handleFollowAnnouncement), (N.imageSrc = n(485195)), t && ((N.onSecondaryButtonClick = this.handleJoinServer), (N.secondaryButtonText = B.Z.Messages.LURKER_MODE_CHAT_INPUT_BUTTON));
        } else if (a) (N.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED), (N.buttonText = B.Z.Messages.CLAIM_ACCOUNT), (N.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount), (N.imageSrc = n(102811));
        else if (g)
            switch (null == x ? void 0 : x.applicationStatus) {
                case I.wB.SUBMITTED:
                    (N.message = B.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE), (N.subtitle = B.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE), (N.buttonText = B.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION), (N.onButtonClick = this.handleCancelApplication), (N.imageSrc = n(281958));
                    break;
                case I.wB.REJECTED:
                    (N.message = B.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE), (N.buttonText = B.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE), (N.onButtonClick = this.handleViewApplicationRejection), (N.imageSrc = n(809844));
                    break;
                default:
                    (N.message = B.Z.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT), (N.buttonText = B.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA), (N.buttonColor = o.ButtonColors.BRAND), (N.onButtonClick = this.handleShowMemberVerification);
                    N.animationSrc = () =>
                        n
                            .e('26176')
                            .then(n.t.bind(n, 737848, 19))
                            .then((e) => {
                                let { default: t } = e;
                                return t;
                            });
            }
        else l && !T ? ((N.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED), (N.buttonText = B.Z.Messages.VERIFY_PHONE), (N.onButtonClick = this.handleVerifyPhone), (N.imageSrc = n(98063))) : r ? ((N.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED), (N.buttonText = B.Z.Messages.RESEND_VERIFICATION_EMAIL), (N.onButtonClick = this.handleResendVerification), (N.imageSrc = n(102811))) : c ? ((N.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({ min: k.YeM.MEMBER_AGE })), (N.countdown = u)) : d && ((N.message = B.Z.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({ min: k.YeM.ACCOUNT_AGE })), (N.countdown = h));
        return (0, i.jsx)(o.Popout, {
            position: 'top',
            align: 'left',
            shouldShow: v,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(U.Z, {
                    ...N,
                    children: (0, i.jsxs)(s.Fragment, {
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            E
                                ? (0, i.jsx)(o.Popout, {
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: S,
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
            G(this, 'state', {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1
            }),
            G(this, 'renderSuccessPopout', (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    l()(null != n, 'This guildID cannot be null'),
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
                            header: B.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                            confirmText: B.Z.Messages.CONFIRM,
                            cancelText: B.Z.Messages.CANCEL,
                            onConfirm: () => E.Z.removeGuildJoinRequest(e.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...t,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: B.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
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
                null != e && (0, C.hk)(e.id);
            }),
            G(this, 'handleClaimAccount', () => {
                m.j();
            }),
            G(this, 'handleVerifyPhone', () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('63461')]).then(n.bind(n, 607018));
                        return (t) =>
                            (0, i.jsx)(e, {
                                reason: Z.L.GUILD_PHONE_REQUIRED,
                                ...t
                            });
                    },
                    { modalKey: w.M }
                );
            }),
            G(this, 'handleResendVerification', () => {
                var e;
                c.Z.verifyResend();
                let t = null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
                null != t &&
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            ...e,
                            header: B.Z.Messages.VERIFICATION_EMAIL_TITLE,
                            confirmText: B.Z.Messages.OKAY,
                            confirmButtonColor: o.Button.Colors.BRAND,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: B.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: t })
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
                    await d.Z.joinGuild(e, { source: k.vtS.CHAT_INPUT_BLOCKER });
                } catch {
                    this.setState({ submitting: !1 });
                }
            }),
            G(this, 'handleGoBack', () => {
                this.setState({ submitting: !0 }), (0, M.s1)().goBack();
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
                    l()(null != e, 'GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined'),
                    (0, i.jsx)(A.Z, {
                        type: A.s.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout
                    })
                );
            }),
            G(this, 'renderMemberVerificationSuccessModal', () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === I.wB.APPROVED;
                if (null == e || null == t || !n || (0, g.d3)(t)) return null;
                let s = () => {
                    E.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, _.EJ)(e)
                    ? (0, i.jsx)(o.Modal, {
                          renderModal: (t) =>
                              (0, i.jsx)(f.default, {
                                  ...t,
                                  onAccept: s,
                                  guildId: e.id
                              }),
                          onCloseRequest: s
                      })
                    : (0, i.jsx)(o.Modal, {
                          renderModal: (t) =>
                              (0, i.jsx)(x.Z, {
                                  ...t,
                                  onAccept: s,
                                  guildName: e.name
                              }),
                          onCloseRequest: s
                      });
            });
    }
}
function F(e) {
    var t, n;
    let { channel: a, children: l } = e,
        o = a.getGuildId(),
        c = (0, r.e7)([j.Z], () => j.Z.getGuild(o)),
        u = (0, r.e7)([P.Z], () => P.Z.getCheck(o)),
        d = a.type === k.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(k.oNc.NEWS),
        m = (0, r.e7)([R.Z], () => (d ? R.Z.getFollowerStatsForChannel(a.id) : null)),
        f = (0, r.e7)([v.Z], () => v.Z.isLurking(o)),
        E = (0, r.e7)([y.default], () => y.default.getCurrentUser()),
        C = null !== (t = null == E ? void 0 : E.isStaff()) && void 0 !== t && t,
        x = (0, r.e7)([L.ZP], () => {
            var e, t;
            return null != E && null !== (t = null === (e = L.ZP.getMember(o, E.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t;
        }),
        N = !!(null == c ? void 0 : c.hasVerificationGate()),
        A = (x || u.notClaimed) && N,
        Z = (0, r.e7)([S.Z], () => S.Z.shouldShowPopout(o)),
        M = (0, r.e7)([O.Z], () => O.Z.can(k.Plq.SEND_MESSAGES, a)),
        U = (0, r.e7)([T.Z], () => T.Z.getRequest(o)),
        [w, B] = (0, p.L_)(o),
        H = (0, p.Cc)(o),
        G = (null == U ? void 0 : U.applicationStatus) === I.wB.APPROVED;
    s.useEffect(() => {
        if (!(!(0, _.EJ)(c) || !G || (0, g.d3)(U)) && null == H) B();
    }, [c, G, U, H]);
    let F = {
        ...u,
        guild: c,
        isLurking: f,
        isFollowable: d,
        shouldShowLurkerModeSuccessPopout: Z,
        showLurkerModeUpsellPopout: f && null != c && D.Uu(k.Plq.SEND_MESSAGES, a),
        theme: b.Z.theme,
        canSendMessages: M,
        channelFollowingUsersSeen: null != m ? m.usersSeenEver : null,
        hasVerificationGate: N,
        showMemberVerificationModal: A,
        guildJoinRequestStatus: null !== (n = null == U ? void 0 : U.applicationStatus) && void 0 !== n ? n : I.wB.STARTED,
        guildJoinRequest: U,
        useReducedMotion: h.Z.useReducedMotion,
        isStaff: C,
        isLoading: w,
        clanInfo: H
    };
    return (0, i.jsx)(V, {
        ...F,
        channel: a,
        children: l
    });
}
