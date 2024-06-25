n.d(t, {
  Z: function() {
    return F
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(893776),
  u = n(528963),
  d = n(749210),
  h = n(607070),
  m = n(391650),
  E = n(645896),
  p = n(353093),
  g = n(717057),
  f = n(693546),
  C = n(881952),
  _ = n(305325),
  I = n(246364),
  x = n(937111),
  T = n(270801),
  N = n(652730),
  Z = n(41776),
  S = n(657352),
  v = n(33154),
  A = n(144114),
  M = n(703656),
  R = n(210887),
  j = n(237904),
  L = n(271383),
  O = n(430824),
  P = n(607744),
  y = n(496675),
  b = n(594174),
  D = n(700785),
  U = n(862679),
  k = n(981631),
  w = n(815660),
  H = n(689938),
  G = n(796340);

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class V extends i.PureComponent {
  componentDidMount() {
    let {
      isFollowable: e,
      channelFollowingUsersSeen: t,
      channel: n
    } = this.props;
    e && null == t && u.Z.fetchChannelFollowerStats(n.id)
  }
  componentDidUpdate(e) {
    let {
      shouldShowLurkerModeSuccessPopout: t,
      guild: n,
      showMemberVerificationModal: l,
      clanInfo: i
    } = this.props;
    if (!l && !e.shouldShowLurkerModeSuccessPopout && t && null != n) {
      if ((0, p.EJ)(n) && null == i) return;
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
      notPhoneVerified: a,
      notEmailVerified: r,
      newMember: c,
      memberDeadline: u,
      newAccount: d,
      accountDeadline: h,
      theme: m,
      children: E,
      canSendMessages: p,
      channelFollowingUsersSeen: g,
      showLurkerModeUpsellPopout: f,
      showMemberVerificationModal: C,
      useReducedMotion: _,
      isStaff: x,
      guildJoinRequest: T
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: N,
      shouldShowLurkerModeSuccessPopout: Z
    } = this.state, S = {
      theme: m,
      useReducedMotion: _
    };
    if (e && !p) {
      if (S.message = H.Z.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != g && g >= 1e3) {
        let e = 1e3 * Math.floor(g / 1e3);
        S.subtitle = H.Z.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
          count: e.toLocaleString()
        })
      }
      S.buttonText = H.Z.Messages.FOLLOW, S.onButtonClick = this.handleFollowAnnouncement, S.imageSrc = n(485195), t && (S.onSecondaryButtonClick = this.handleJoinServer, S.secondaryButtonText = H.Z.Messages.LURKER_MODE_CHAT_INPUT_BUTTON)
    } else if (s) S.message = H.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, S.buttonText = H.Z.Messages.CLAIM_ACCOUNT, S.onButtonClick = C ? this.handleShowMemberVerification : this.handleClaimAccount, S.imageSrc = n(102811);
    else if (C) switch (null == T ? void 0 : T.applicationStatus) {
      case I.wB.SUBMITTED:
        S.message = H.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, S.subtitle = H.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, S.buttonText = H.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, S.onButtonClick = this.handleCancelApplication, S.imageSrc = n(281958);
        break;
      case I.wB.REJECTED:
        S.message = H.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, S.buttonText = H.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE, S.onButtonClick = this.handleViewApplicationRejection, S.imageSrc = n(809844);
        break;
      default:
        S.message = H.Z.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, S.buttonText = H.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA, S.buttonColor = o.ButtonColors.BRAND, S.onButtonClick = this.handleShowMemberVerification;
        S.animationSrc = () => n.e("26176").then(n.t.bind(n, 737848, 19)).then(e => {
          let {
            default: t
          } = e;
          return t
        })
    } else a && !x ? (S.message = H.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, S.buttonText = H.Z.Messages.VERIFY_PHONE, S.onButtonClick = this.handleVerifyPhone, S.imageSrc = n(98063)) : r ? (S.message = H.Z.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, S.buttonText = H.Z.Messages.RESEND_VERIFICATION_EMAIL, S.onButtonClick = this.handleResendVerification, S.imageSrc = n(102811)) : c ? (S.message = H.Z.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
      min: k.YeM.MEMBER_AGE
    }), S.countdown = u) : d && (S.message = H.Z.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
      min: k.YeM.ACCOUNT_AGE
    }), S.countdown = h);
    return (0, l.jsx)(o.Popout, {
      position: "top",
      align: "left",
      shouldShow: Z,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: !1
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, l.jsx)(U.Z, {
        ...S,
        children: (0, l.jsxs)(i.Fragment, {
          children: [this.renderMemberVerificationSuccessModal(), f ? (0, l.jsx)(o.Popout, {
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: N,
            position: "top",
            children: e => (0, l.jsx)(o.Clickable, {
              ...e,
              className: G.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: E
            })
          }) : E]
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
      return a()(null != n, "This guildID cannot be null"), (0, l.jsx)(S.Z, {
        onClose: t,
        guild: n
      })
    }), B(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      if (null != e)(0, o.openModal)(t => (0, l.jsx)(o.ConfirmModal, {
        header: H.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
        confirmText: H.Z.Messages.CONFIRM,
        cancelText: H.Z.Messages.CANCEL,
        onConfirm: () => f.Z.removeGuildJoinRequest(e.id),
        confirmButtonColor: o.Button.Colors.BRAND,
        ...t,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          children: H.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
        })
      }))
    }), B(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      if (null != e)(0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("3378")]).then(n.bind(n, 76075));
        return n => (0, l.jsx)(t, {
          guildId: e.id,
          ...n
        })
      })
    }), B(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, _.hk)(e.id)
    }), B(this, "handleClaimAccount", () => {
      m.j()
    }), B(this, "handleVerifyPhone", () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("7954")]).then(n.bind(n, 607018));
        return t => (0, l.jsx)(e, {
          reason: A.L.GUILD_PHONE_REQUIRED,
          ...t
        })
      }, {
        modalKey: w.M
      })
    }), B(this, "handleResendVerification", () => {
      var e;
      c.Z.verifyResend();
      let t = null === (e = b.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
      null != t && (0, o.openModal)(e => (0, l.jsx)(o.ConfirmModal, {
        ...e,
        header: H.Z.Messages.VERIFICATION_EMAIL_TITLE,
        confirmText: H.Z.Messages.OKAY,
        confirmButtonColor: o.Button.Colors.BRAND,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          children: H.Z.Messages.VERIFICATION_EMAIL_BODY.format({
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
        await d.Z.joinGuild(e, {
          source: k.vtS.CHAT_INPUT_BLOCKER
        })
      } catch {
        this.setState({
          submitting: !1
        })
      }
    }), B(this, "handleGoBack", () => {
      this.setState({
        submitting: !0
      }), (0, M.s1)().goBack()
    }), B(this, "handleFollowAnnouncement", () => {
      let {
        channel: e
      } = this.props;
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, 720589));
        return n => (0, l.jsx)(t, {
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
      return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, l.jsx)(v.Z, {
        type: v.s.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), B(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? void 0 : t.applicationStatus) === I.wB.APPROVED;
      if (null == e || null == t || !n || (0, C.d3)(t)) return null;
      let i = () => {
        f.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, p.EJ)(e) ? (0, l.jsx)(o.Modal, {
        renderModal: t => (0, l.jsx)(g.Z, {
          ...t,
          onAccept: i,
          guildId: e.id
        }),
        onCloseRequest: i
      }) : (0, l.jsx)(o.Modal, {
        renderModal: t => (0, l.jsx)(T.Z, {
          ...t,
          onAccept: i,
          guildName: e.name
        }),
        onCloseRequest: i
      })
    })
  }
}

function F(e) {
  var t, n;
  let {
    channel: s,
    children: a
  } = e, o = s.getGuildId(), c = (0, r.e7)([O.Z], () => O.Z.getGuild(o)), u = (0, r.e7)([P.Z], () => P.Z.getCheck(o)), d = s.type === k.d4z.GUILD_ANNOUNCEMENT && null != c && c.hasFeature(k.oNc.NEWS), m = (0, r.e7)([j.Z], () => d ? j.Z.getFollowerStatsForChannel(s.id) : null), g = (0, r.e7)([Z.Z], () => Z.Z.isLurking(o)), f = (0, r.e7)([b.default], () => b.default.getCurrentUser()), _ = null !== (t = null == f ? void 0 : f.isStaff()) && void 0 !== t && t, T = (0, r.e7)([L.ZP], () => {
    var e, t;
    return null != f && null !== (t = null === (e = L.ZP.getMember(o, f.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }), S = !!(null == c ? void 0 : c.hasVerificationGate()), v = (T || u.notClaimed) && S, A = (0, r.e7)([N.Z], () => N.Z.shouldShowPopout(o)), M = (0, r.e7)([y.Z], () => y.Z.can(k.Plq.SEND_MESSAGES, s)), U = (0, r.e7)([x.Z], () => x.Z.getRequest(o)), [w, H] = (0, E.L_)(o), G = (0, E.Cc)(o), B = (null == U ? void 0 : U.applicationStatus) === I.wB.APPROVED;
  i.useEffect(() => {
    if (!(!(0, p.EJ)(c) || !B || (0, C.d3)(U)) && null == G) H()
  }, [c, B, U, G]);
  let F = {
    ...u,
    guild: c,
    isLurking: g,
    isFollowable: d,
    shouldShowLurkerModeSuccessPopout: A,
    showLurkerModeUpsellPopout: g && null != c && D.Uu(k.Plq.SEND_MESSAGES, s),
    theme: R.Z.theme,
    canSendMessages: M,
    channelFollowingUsersSeen: null != m ? m.usersSeenEver : null,
    hasVerificationGate: S,
    showMemberVerificationModal: v,
    guildJoinRequestStatus: null !== (n = null == U ? void 0 : U.applicationStatus) && void 0 !== n ? n : I.wB.STARTED,
    guildJoinRequest: U,
    useReducedMotion: h.Z.useReducedMotion,
    isStaff: _,
    isLoading: w,
    clanInfo: G
  };
  return (0, l.jsx)(V, {
    ...F,
    channel: s,
    children: a
  })
}