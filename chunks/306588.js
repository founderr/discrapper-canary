"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("437822"),
  d = n("429224"),
  c = n("851387"),
  f = n("206230"),
  h = n("774146"),
  C = n("549103"),
  p = n("591023"),
  E = n("233322"),
  m = n("567054"),
  g = n("982527"),
  S = n("388166"),
  _ = n("631360"),
  T = n("267567"),
  A = n("88187"),
  M = n("13066"),
  I = n("878720"),
  N = n("393414"),
  v = n("161778"),
  L = n("935692"),
  R = n("26989"),
  x = n("305961"),
  y = n("88093"),
  O = n("957255"),
  D = n("697218"),
  P = n("991170"),
  j = n("361528"),
  b = n("49111"),
  H = n("482931"),
  F = n("782340"),
  U = n("297310");
class k extends s.PureComponent {
  componentDidMount() {
    let {
      isFollowable: e,
      channelFollowingUsersSeen: t,
      channel: n
    } = this.props;
    e && null == t && d.default.fetchChannelFollowerStats(n.id)
  }
  componentDidUpdate(e) {
    let {
      shouldShowLurkerModeSuccessPopout: t,
      guild: n,
      showMemberVerificationModal: a
    } = this.props;
    !a && !e.shouldShowLurkerModeSuccessPopout && t && null != n && this.setState({
      shouldShowLurkerModeSuccessPopout: !0
    })
  }
  render() {
    let {
      isFollowable: e,
      isLurking: t,
      notClaimed: l,
      notPhoneVerified: i,
      notEmailVerified: r,
      newMember: u,
      memberDeadline: d,
      newAccount: c,
      accountDeadline: f,
      theme: h,
      children: C,
      canSendMessages: p,
      channelFollowingUsersSeen: E,
      showLurkerModeUpsellPopout: g,
      showMemberVerificationModal: S,
      useReducedMotion: _,
      isStaff: T,
      guildJoinRequest: A
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: M,
      shouldShowLurkerModeSuccessPopout: I
    } = this.state, N = {
      theme: h,
      useReducedMotion: _
    };
    if (e && !p) N.message = F.default.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != E && E >= 1e3 && (N.subtitle = F.default.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
      count: (1e3 * Math.floor(E / 1e3)).toLocaleString()
    })), N.buttonText = F.default.Messages.FOLLOW, N.onButtonClick = this.handleFollowAnnouncement, N.imageSrc = n("757000"), t && (N.onSecondaryButtonClick = this.handleJoinServer, N.secondaryButtonText = F.default.Messages.LURKER_MODE_CHAT_INPUT_BUTTON);
    else if (l) N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, N.buttonText = F.default.Messages.CLAIM_ACCOUNT, N.onButtonClick = S ? this.handleShowMemberVerification : this.handleClaimAccount, N.imageSrc = n("524939");
    else if (S) switch (null == A ? void 0 : A.applicationStatus) {
      case m.GuildJoinRequestApplicationStatuses.SUBMITTED:
        N.message = F.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, N.subtitle = F.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, N.buttonText = F.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, N.onButtonClick = this.handleCancelApplication, N.imageSrc = n("897176");
        break;
      case m.GuildJoinRequestApplicationStatuses.REJECTED:
        N.message = F.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, N.buttonText = F.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, N.onButtonClick = this.handleViewApplicationRejection, N.imageSrc = n("376180");
        break;
      default:
        N.message = F.default.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, N.buttonText = F.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, N.buttonColor = o.ButtonColors.BRAND, N.onButtonClick = this.handleShowMemberVerification;
        N.animationSrc = () => n.el("170206").then(n.t.bind(n, "170206", 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        })
    } else i && !T ? (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, N.buttonText = F.default.Messages.VERIFY_PHONE, N.onButtonClick = this.handleVerifyPhone, N.imageSrc = n("958347")) : r ? (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, N.buttonText = F.default.Messages.RESEND_VERIFICATION_EMAIL, N.onButtonClick = this.handleResendVerification, N.imageSrc = n("524939")) : u ? (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
      min: b.VerificationCriteria.MEMBER_AGE
    }), N.countdown = d) : c && (N.message = F.default.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
      min: b.VerificationCriteria.ACCOUNT_AGE
    }), N.countdown = f);
    return (0, a.jsx)(o.Popout, {
      position: "top",
      align: "left",
      shouldShow: I,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: !1
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, a.jsx)(j.default, {
        ...N,
        children: (0, a.jsxs)(s.Fragment, {
          children: [this.renderMemberVerificationSuccessModal(), g ? (0, a.jsx)(o.Popout, {
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: M,
            position: "top",
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: U.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: C
            })
          }) : C]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      submitting: !1,
      shouldShowLurkerModeUpsellPopout: !1,
      shouldShowLurkerModeSuccessPopout: !1
    }, this.renderSuccessPopout = e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return i(null != n, "This guildID cannot be null"), (0, a.jsx)(A.default, {
        onClose: t,
        guild: n
      })
    }, this.handleCancelApplication = () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
        header: F.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
        confirmText: F.default.Messages.CONFIRM,
        cancelText: F.default.Messages.CANCEL,
        onConfirm: () => C.default.removeGuildJoinRequest(e.id),
        confirmButtonColor: o.Button.Colors.BRAND,
        ...t,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: F.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
        })
      }))
    }, this.handleViewApplicationRejection = () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("388435").then(n.bind(n, "388435"));
        return n => (0, a.jsx)(t, {
          guildId: e.id,
          ...n
        })
      })
    }, this.handleShowMemberVerification = () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, E.openMemberVerificationModal)(e.id)
    }, this.handleClaimAccount = () => {
      h.openClaimAccountModal()
    }, this.handleVerifyPhone = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("601745").then(n.bind(n, "601745"));
        return t => (0, a.jsx)(e, {
          reason: I.ChangePhoneReason.GUILD_PHONE_REQUIRED,
          ...t
        })
      }, {
        modalKey: H.PHONE_VERIFICATION_MODAL_KEY
      })
    }, this.handleResendVerification = () => {
      var e;
      u.default.verifyResend();
      let t = null === (e = D.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
      null != t && (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
        ...e,
        header: F.default.Messages.VERIFICATION_EMAIL_TITLE,
        confirmText: F.default.Messages.OKAY,
        confirmButtonColor: o.Button.Colors.BRAND,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: F.default.Messages.VERIFICATION_EMAIL_BODY.format({
            email: t
          })
        })
      }))
    }, this.handleTextAreaClick = () => {
      let {
        showLurkerModeUpsellPopout: e
      } = this.props;
      this.setState({
        shouldShowLurkerModeUpsellPopout: e
      })
    }, this.handleJoinServer = async () => {
      this.setState({
        submitting: !0
      });
      let e = this.props.channel.getGuildId();
      try {
        await c.default.joinGuild(e, {
          source: b.JoinGuildSources.CHAT_INPUT_BLOCKER
        })
      } catch {
        this.setState({
          submitting: !1
        })
      }
    }, this.handleGoBack = () => {
      this.setState({
        submitting: !0
      });
      let e = (0, N.getHistory)();
      e.goBack()
    }, this.handleFollowAnnouncement = () => {
      let {
        channel: e
      } = this.props;
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("996177").then(n.bind(n, "996177"));
        return n => (0, a.jsx)(t, {
          channel: e,
          ...n
        })
      })
    }, this.closeLurkerModeUpsellPopout = () => {
      this.setState({
        shouldShowLurkerModeUpsellPopout: !1
      })
    }, this.renderLurkerModeUpsellPopout = () => {
      let {
        guild: e
      } = this.props;
      return i(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, a.jsx)(M.default, {
        type: M.LurkerModeUpsellPopoutTypes.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }, this.renderMemberVerificationSuccessModal = () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? void 0 : t.applicationStatus) === m.GuildJoinRequestApplicationStatuses.APPROVED;
      if (null == e || null == t || !n || (0, p.isApprovedAndAcked)(t)) return null;
      let s = () => C.default.ackUserGuildJoinRequest(e.id, t.id);
      return (0, a.jsx)(o.Modal, {
        renderModal: t => (0, a.jsx)(S.default, {
          ...t,
          onAccept: s,
          guildName: e.name
        }),
        onCloseRequest: s
      })
    }
  }
}

function w(e) {
  var t, n;
  let {
    channel: s,
    children: l
  } = e, i = s.getGuildId(), o = (0, r.useStateFromStores)([x.default], () => x.default.getGuild(i)), u = (0, r.useStateFromStores)([y.default], () => y.default.getCheck(i)), d = s.type === b.ChannelTypes.GUILD_ANNOUNCEMENT && null != o && o.hasFeature(b.GuildFeatures.NEWS), c = (0, r.useStateFromStores)([L.default], () => d ? L.default.getFollowerStatsForChannel(s.id) : null), h = (0, r.useStateFromStores)([T.default], () => T.default.isLurking(i)), C = (0, r.useStateFromStores)([D.default], () => D.default.getCurrentUser()), p = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t, E = (0, r.useStateFromStores)([R.default], () => {
    var e, t;
    return null != C && null !== (t = null === (e = R.default.getMember(i, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }), S = !!(null == o ? void 0 : o.hasVerificationGate()), A = (E || u.notClaimed) && S, M = (0, r.useStateFromStores)([_.default], () => _.default.shouldShowPopout(i)), I = (0, r.useStateFromStores)([O.default], () => O.default.can(b.Permissions.SEND_MESSAGES, s)), N = (0, r.useStateFromStores)([g.default], () => g.default.getRequest(i)), j = {
    ...u,
    guild: o,
    isLurking: h,
    isFollowable: d,
    shouldShowLurkerModeSuccessPopout: M,
    showLurkerModeUpsellPopout: h && null != o && P.default.canEveryoneRole(b.Permissions.SEND_MESSAGES, s),
    theme: v.default.theme,
    canSendMessages: I,
    channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
    hasVerificationGate: S,
    showMemberVerificationModal: A,
    guildJoinRequestStatus: null !== (n = null == N ? void 0 : N.applicationStatus) && void 0 !== n ? n : m.GuildJoinRequestApplicationStatuses.STARTED,
    guildJoinRequest: N,
    useReducedMotion: f.default.useReducedMotion,
    isStaff: p
  };
  return (0, a.jsx)(k, {
    ...j,
    channel: s,
    children: l
  })
}