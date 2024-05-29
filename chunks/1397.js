"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("893776"),
  d = n("528963"),
  c = n("749210"),
  f = n("607070"),
  h = n("391650"),
  m = n("645896"),
  p = n("353093"),
  E = n("717057"),
  C = n("693546"),
  g = n("881952"),
  S = n("305325"),
  _ = n("246364"),
  T = n("937111"),
  I = n("270801"),
  A = n("652730"),
  v = n("41776"),
  x = n("657352"),
  N = n("33154"),
  M = n("144114"),
  R = n("703656"),
  y = n("210887"),
  L = n("606956"),
  O = n("271383"),
  j = n("430824"),
  P = n("607744"),
  D = n("496675"),
  b = n("594174"),
  U = n("700785"),
  F = n("862679"),
  w = n("981631"),
  k = n("815660"),
  H = n("689938"),
  G = n("596047");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class V extends l.PureComponent {
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
      showMemberVerificationModal: a,
      clanInfo: l
    } = this.props;
    if (!a && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
      if ((0, p.isGuildAClan)(n) && null == l) return;
      this.setState({
        shouldShowLurkerModeSuccessPopout: !0
      })
    }
  }
  render() {
    let {
      isFollowable: e,
      isLurking: t,
      notClaimed: s,
      notPhoneVerified: i,
      notEmailVerified: r,
      newMember: u,
      memberDeadline: d,
      newAccount: c,
      accountDeadline: f,
      theme: h,
      children: m,
      canSendMessages: p,
      channelFollowingUsersSeen: E,
      showLurkerModeUpsellPopout: C,
      showMemberVerificationModal: g,
      useReducedMotion: S,
      isStaff: T,
      guildJoinRequest: I
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: A,
      shouldShowLurkerModeSuccessPopout: v
    } = this.state, x = {
      theme: h,
      useReducedMotion: S
    };
    if (e && !p) x.message = H.default.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != E && E >= 1e3 && (x.subtitle = H.default.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
      count: (1e3 * Math.floor(E / 1e3)).toLocaleString()
    })), x.buttonText = H.default.Messages.FOLLOW, x.onButtonClick = this.handleFollowAnnouncement, x.imageSrc = n("485195"), t && (x.onSecondaryButtonClick = this.handleJoinServer, x.secondaryButtonText = H.default.Messages.LURKER_MODE_CHAT_INPUT_BUTTON);
    else if (s) x.message = H.default.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, x.buttonText = H.default.Messages.CLAIM_ACCOUNT, x.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount, x.imageSrc = n("102811");
    else if (g) switch (null == I ? void 0 : I.applicationStatus) {
      case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
        x.message = H.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, x.subtitle = H.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, x.buttonText = H.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, x.onButtonClick = this.handleCancelApplication, x.imageSrc = n("281958");
        break;
      case _.GuildJoinRequestApplicationStatuses.REJECTED:
        x.message = H.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, x.buttonText = H.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, x.onButtonClick = this.handleViewApplicationRejection, x.imageSrc = n("809844");
        break;
      default:
        x.message = H.default.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, x.buttonText = H.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, x.buttonColor = o.ButtonColors.BRAND, x.onButtonClick = this.handleShowMemberVerification;
        x.animationSrc = () => n.e("26176").then(n.t.bind(n, "737848", 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        })
    } else i && !T ? (x.message = H.default.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, x.buttonText = H.default.Messages.VERIFY_PHONE, x.onButtonClick = this.handleVerifyPhone, x.imageSrc = n("98063")) : r ? (x.message = H.default.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, x.buttonText = H.default.Messages.RESEND_VERIFICATION_EMAIL, x.onButtonClick = this.handleResendVerification, x.imageSrc = n("102811")) : u ? (x.message = H.default.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
      min: w.VerificationCriteria.MEMBER_AGE
    }), x.countdown = d) : c && (x.message = H.default.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
      min: w.VerificationCriteria.ACCOUNT_AGE
    }), x.countdown = f);
    return (0, a.jsx)(o.Popout, {
      position: "top",
      align: "left",
      shouldShow: v,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: !1
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, a.jsx)(F.default, {
        ...x,
        children: (0, a.jsxs)(l.Fragment, {
          children: [this.renderMemberVerificationSuccessModal(), C ? (0, a.jsx)(o.Popout, {
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: A,
            position: "top",
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: G.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: m
            })
          }) : m]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      submitting: !1,
      shouldShowLurkerModeUpsellPopout: !1,
      shouldShowLurkerModeSuccessPopout: !1
    }), B(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return i()(null != n, "This guildID cannot be null"), (0, a.jsx)(x.default, {
        onClose: t,
        guild: n
      })
    }), B(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
        header: H.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
        confirmText: H.default.Messages.CONFIRM,
        cancelText: H.default.Messages.CANCEL,
        onConfirm: () => C.default.removeGuildJoinRequest(e.id),
        confirmButtonColor: o.Button.Colors.BRAND,
        ...t,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: H.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
        })
      }))
    }), B(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("3378")]).then(n.bind(n, "76075"));
        return n => (0, a.jsx)(t, {
          guildId: e.id,
          ...n
        })
      })
    }), B(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, S.openMemberVerificationModal)(e.id)
    }), B(this, "handleClaimAccount", () => {
      h.openClaimAccountModal()
    }), B(this, "handleVerifyPhone", () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("7954")]).then(n.bind(n, "607018"));
        return t => (0, a.jsx)(e, {
          reason: M.ChangePhoneReason.GUILD_PHONE_REQUIRED,
          ...t
        })
      }, {
        modalKey: k.PHONE_VERIFICATION_MODAL_KEY
      })
    }), B(this, "handleResendVerification", () => {
      var e;
      u.default.verifyResend();
      let t = null === (e = b.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
      null != t && (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
        ...e,
        header: H.default.Messages.VERIFICATION_EMAIL_TITLE,
        confirmText: H.default.Messages.OKAY,
        confirmButtonColor: o.Button.Colors.BRAND,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: H.default.Messages.VERIFICATION_EMAIL_BODY.format({
            email: t
          })
        })
      }))
    }), B(this, "handleTextAreaClick", () => {
      let {
        showLurkerModeUpsellPopout: e
      } = this.props;
      this.setState({
        shouldShowLurkerModeUpsellPopout: e
      })
    }), B(this, "handleJoinServer", async () => {
      this.setState({
        submitting: !0
      });
      let e = this.props.channel.getGuildId();
      try {
        await c.default.joinGuild(e, {
          source: w.JoinGuildSources.CHAT_INPUT_BLOCKER
        })
      } catch {
        this.setState({
          submitting: !1
        })
      }
    }), B(this, "handleGoBack", () => {
      this.setState({
        submitting: !0
      }), (0, R.getHistory)().goBack()
    }), B(this, "handleFollowAnnouncement", () => {
      let {
        channel: e
      } = this.props;
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, "720589"));
        return n => (0, a.jsx)(t, {
          channel: e,
          ...n
        })
      })
    }), B(this, "closeLurkerModeUpsellPopout", () => {
      this.setState({
        shouldShowLurkerModeUpsellPopout: !1
      })
    }), B(this, "renderLurkerModeUpsellPopout", () => {
      let {
        guild: e
      } = this.props;
      return i()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, a.jsx)(N.default, {
        type: N.LurkerModeUpsellPopoutTypes.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), B(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? void 0 : t.applicationStatus) === _.GuildJoinRequestApplicationStatuses.APPROVED;
      if (null == e || null == t || !n || (0, g.isApprovedAndAcked)(t)) return null;
      let l = () => {
        C.default.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, p.isGuildAClan)(e) ? (0, a.jsx)(o.Modal, {
        renderModal: t => (0, a.jsx)(E.default, {
          ...t,
          onAccept: l,
          guildId: e.id
        }),
        onCloseRequest: l
      }) : (0, a.jsx)(o.Modal, {
        renderModal: t => (0, a.jsx)(I.default, {
          ...t,
          onAccept: l,
          guildName: e.name
        }),
        onCloseRequest: l
      })
    })
  }
}

function W(e) {
  var t, n;
  let {
    channel: s,
    children: i
  } = e, o = s.getGuildId(), u = (0, r.useStateFromStores)([j.default], () => j.default.getGuild(o)), d = (0, r.useStateFromStores)([P.default], () => P.default.getCheck(o)), c = s.type === w.ChannelTypes.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(w.GuildFeatures.NEWS), h = (0, r.useStateFromStores)([L.default], () => c ? L.default.getFollowerStatsForChannel(s.id) : null), E = (0, r.useStateFromStores)([v.default], () => v.default.isLurking(o)), C = (0, r.useStateFromStores)([b.default], () => b.default.getCurrentUser()), S = null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t, I = (0, r.useStateFromStores)([O.default], () => {
    var e, t;
    return null != C && null !== (t = null === (e = O.default.getMember(o, C.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }), x = !!(null == u ? void 0 : u.hasVerificationGate()), N = (I || d.notClaimed) && x, M = (0, r.useStateFromStores)([A.default], () => A.default.shouldShowPopout(o)), R = (0, r.useStateFromStores)([D.default], () => D.default.can(w.Permissions.SEND_MESSAGES, s)), F = (0, r.useStateFromStores)([T.default], () => T.default.getRequest(o)), [k, H] = (0, m.useFetchClanInfo)(o), G = (0, m.useClanInfo)(o), B = (null == F ? void 0 : F.applicationStatus) === _.GuildJoinRequestApplicationStatuses.APPROVED;
  l.useEffect(() => {
    if (!(!(0, p.isGuildAClan)(u) || !B || (0, g.isApprovedAndAcked)(F))) null == G && H()
  }, [u, B, F, G]);
  let W = {
    ...d,
    guild: u,
    isLurking: E,
    isFollowable: c,
    shouldShowLurkerModeSuccessPopout: M,
    showLurkerModeUpsellPopout: E && null != u && U.canEveryoneRole(w.Permissions.SEND_MESSAGES, s),
    theme: y.default.theme,
    canSendMessages: R,
    channelFollowingUsersSeen: null != h ? h.usersSeenEver : null,
    hasVerificationGate: x,
    showMemberVerificationModal: N,
    guildJoinRequestStatus: null !== (n = null == F ? void 0 : F.applicationStatus) && void 0 !== n ? n : _.GuildJoinRequestApplicationStatuses.STARTED,
    guildJoinRequest: F,
    useReducedMotion: f.default.useReducedMotion,
    isStaff: S,
    isLoading: k,
    clanInfo: G
  };
  return (0, a.jsx)(V, {
    ...W,
    channel: s,
    children: i
  })
}