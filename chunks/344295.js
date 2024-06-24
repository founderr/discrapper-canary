n(789020), n(47120);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  l = n.n(i),
  a = n(533800),
  o = n(756647),
  c = n(442837),
  u = n(298444),
  d = n(447543),
  E = n(881052),
  _ = n(899370),
  I = n(267394),
  h = n(388905),
  N = n(639946),
  p = n(792766),
  g = n(362762),
  m = n(978684),
  T = n(264229),
  Z = n(929809),
  A = n(703656),
  f = n(108427),
  x = n(314897),
  O = n(896797),
  S = n(701190),
  v = n(626135),
  D = n(630388),
  P = n(63063),
  C = n(782605),
  R = n(954824),
  M = n(588705),
  L = n(781428),
  j = n(423527),
  U = n(981631),
  G = n(188785),
  B = n(701476),
  y = n(436620),
  b = n(689938),
  V = n(331651);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
c.ZP.initialize();
let k = "Accept Invite Page",
  H = {
    REGISTER: "register",
    LOGIN: "login"
  };
async function w(e) {
  let {
    invite: t
  } = await d.Z.resolveInvite(e, k);
  if (null != t)(0, I.A)(t)
}
class z extends r.PureComponent {
  componentDidMount() {
    let {
      isUnderage: e,
      login: t,
      inviteKey: n
    } = this.props;
    if (v.default.track(U.rMx.INVITE_VIEWED, {
        invite_code: n
      }, {
        flush: !0
      }), (0, f.e)("invite"), !y.KO) {
      let e = this.getInviteKey();
      R.Z.launch("discord://" + U.Z5c.INVITE(e), () => void 0)
    }
    if (!t && e) {
      let e = this.getInviteKey(),
        {
          baseCode: t
        } = (0, T.fU)(e);
      (0, A.dL)(U.Z5c.INVITE_LOGIN(t))
    }
  }
  componentDidUpdate(e) {
    let {
      invite: t,
      nativeAppState: n,
      authenticated: s,
      transitionTo: r
    } = this.props, i = this.getInviteKey();
    if (i !== this.getInviteKey(e)) w(i);
    else if (t.state === U.r2o.APP_NOT_OPENED) this.handleContinue();
    else if (this.getMode() === H.LOGIN && s !== e.authenticated && s) {
      let e = x.default.getFingerprint();
      if (null != e) {
        let t = (0, o.s)(e);
        this.track(U.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
          prev_user_id: t
        })
      }
      d.Z.acceptInvite({
        inviteKey: i,
        context: this.getAcceptInviteContext(k),
        skipOnboarding: !0,
        callback: this.handleContinue
      })
    }
    if (n !== e.nativeAppState && n === U.kEZ.OPEN && this.track(U.rMx.INVITE_APP_INVOKED, !1), this.getMode() === H.REGISTER && s && !e.authenticated) {
      let {
        channel: e
      } = t;
      null != e && ((0, Z.c)(B.M5.INVITE_UNCLAIMED), null != t.guild ? r(U.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(t, r))
    }
  }
  getInviteKey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return e.inviteKey
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return G.a ? H.REGISTER : e.login ? H.LOGIN : H.REGISTER
  }
  track(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      {
        invite: s
      } = this.props,
      r = this.getInviteKey(),
      i = (0, T.jX)(r),
      l = t ? {
        guild_id: null != s.guild ? s.guild.id : null,
        channel_id: null != s.channel ? s.channel.id : null,
        inviter_id: null != s.inviter ? s.inviter.id : null,
        invite_code: i
      } : {
        invite_code: i
      };
    v.default.track(e, {
      ...l,
      ...n
    })
  }
  renderSpinner(e) {
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(h.Dx, {
        children: e
      }), (0, s.jsx)(h.Hh, {})]
    })
  }
  renderInvalidInvite() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(h.Ee, {
        src: n(167969),
        className: V.marginBottom8
      }), (0, s.jsx)(h.Dx, {
        className: l()(V.marginTop8, V.marginBottom8),
        children: b.Z.Messages.AUTH_INVALID_INVITE_TITLE
      }), (0, s.jsx)(h.DK, {
        children: e ? b.Z.Messages.AUTH_BANNED_INVITE_BODY : b.Z.Messages.AUTH_INVALID_INVITE_BODY
      }), this.renderButton(b.Z.Messages.CONTINUE_TO_WEBAPP), (0, s.jsx)(h.zx, {
        onClick: () => window.open(P.Z.getArticleURL(U.BhN.INVALID_INVITES), "_blank"),
        look: h.zx.Looks.LINK,
        color: h.zx.Colors.LINK,
        className: V.marginTop8,
        children: b.Z.Messages.AUTH_INVALID_INVITE_TIP
      })]
    })
  }
  renderErrorInvite() {
    var e, t;
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(M.Z, {
        invite: this.props.invite,
        error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
      }), (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === U.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(b.Z.Messages.CONTINUE_TO_WEBAPP) : this.renderButton(b.Z.Messages.INSTANT_INVITE_ACCEPT, this.handleAccept)]
    })
  }
  renderExpiredInvite() {
    return this.renderInvalidInvite(!1)
  }
  renderBannedInvite() {
    return this.renderInvalidInvite(!0)
  }
  renderAppOpened(e) {
    let t = null != e ? e : this.handleContinue;
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(h.Dx, {
        className: V.marginBottom8,
        children: b.Z.Messages.APP_OPENED_TITLE
      }), (0, s.jsx)(h.DK, {
        children: b.Z.Messages.APP_OPENED_BODY
      }), this.renderButton(b.Z.Messages.CONTINUE_TO_WEBAPP, () => t())]
    })
  }
  renderAuthenticatedHeader() {
    let {
      invite: e
    } = this.props;
    return null != e.stage_instance && null != e.guild ? (0, s.jsx)(p.Z, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : null != e.guild_scheduled_event ? (0, s.jsx)(N.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, s.jsx)(M.Z, {
      invite: e
    })
  }
  renderAuthenicatedFooter() {
    let {
      invite: e
    } = this.props;
    return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, s.jsx)(h.ZP, {
      className: V.marginTop20,
      children: (0, s.jsx)(p.y, {
        guild: e.guild,
        onlineCount: e.approximate_presence_count
      })
    }) : null
  }
  renderAuthenticatedOrDownload() {
    let {
      invite: e
    } = this.props, t = null != e.stage_instance ? b.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : b.Z.Messages.INSTANT_INVITE_ACCEPT;
    return (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(h.ZP, {
        children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
      }), this.renderAuthenicatedFooter()]
    })
  }
  renderContinue() {
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(h.Dx, {
        children: b.Z.Messages.APP_NOT_OPENED
      }), this.renderButton(b.Z.Messages.CONTINUE_TO_WEBAPP)]
    })
  }
  render() {
    let {
      invite: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: r,
      location: i
    } = this.props;
    if (t === U.kEZ.OPEN) return this.renderAppOpened();
    switch (e.state) {
      case U.r2o.APP_OPENED:
        return this.renderAppOpened();
      case U.r2o.APP_NOT_OPENED:
        return this.renderContinue();
      case U.r2o.RESOLVING:
        return G.a ? this.renderSpinner(b.Z.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(b.Z.Messages.APP_OPENING);
      case U.r2o.APP_OPENING:
        return this.renderSpinner(b.Z.Messages.APP_OPENING);
      case U.r2o.RESOLVED:
        var l;
        if (n && (0, D.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, a.$.IS_GUEST_INVITE)) return d.Z.openApp(e.code), u.x.set(m.J, e.code), this.renderAppOpened(() => r(U.Z5c.APP));
        if (n || !y.KO) return this.renderAuthenticatedOrDownload();
        else if (this.getMode() === H.LOGIN) return (0, s.jsx)(L.Z, {
          invite: e,
          transitionTo: r,
          location: i
        });
        else return (0, s.jsx)(j.Z, {
          invite: e,
          onLoginStart: () => this.track(U.rMx.INVITE_LOGIN, !0),
          location: i,
          transitionTo: r
        });
      case U.r2o.ACCEPTING:
        return this.renderSpinner(b.Z.Messages.INSTANT_INVITE_ACCEPTING);
      case U.r2o.EXPIRED:
        return this.renderExpiredInvite();
      case U.r2o.BANNED:
        return this.renderBannedInvite();
      case U.r2o.ERROR:
        return this.renderErrorInvite();
      case U.r2o.ACCEPTED:
      default:
        return null
    }
  }
  constructor(...e) {
    var t;
    super(...e), t = this, F(this, "state", {
      error: null
    }), F(this, "getAcceptInviteContext", e => d.Z.getInviteContext(e, this.props.invite)), F(this, "handleContinue", e => {
      let {
        invite: t,
        transitionTo: n
      } = this.props;
      if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
        var s;
        (null === (s = t.guild) || void 0 === s ? void 0 : s.id) != null ? n(U.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(null != e ? e : t, n)
      }
    }), F(this, "handleAccept", () => {
      this.setState({
        error: null
      });
      let e = this.getInviteKey();
      d.Z.acceptInvite({
        inviteKey: e,
        context: this.getAcceptInviteContext(k),
        skipOnboarding: !0,
        callback: t => {
          (0, I.A)(t), null != t.channel && d.Z.openApp(e, t.channel.id)
        }
      }).catch(e => {
        if (e instanceof E.yZ || e instanceof E.Hx) {
          let t = (0, C.O)(e.code);
          this.setState({
            error: {
              code: e.code,
              message: t
            }
          })
        } else this.setState({
          error: {
            code: e.code,
            message: b.Z.Messages.INVITE_MODAL_ERROR_DEFAULT
          }
        })
      })
    }), F(this, "handleDefaultTransition", () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }), F(this, "renderButton", function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
        {
          invite: r
        } = t.props,
        i = null != r.stage_instance || null != r.guild_scheduled_event;
      return y.KO ? (0, s.jsx)(h.zx, {
        className: i ? V.marginTop20 : V.marginTop40,
        onClick: n,
        color: i ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
        children: e
      }) : (0, s.jsx)(h.v6, {
        className: V.marginTop40
      })
    })
  }
}
t.Z = c.ZP.connectStores([S.Z, O.Z, x.default, g.Z, _.Z], e => {
  var t;
  let {
    inviteKey: n
  } = e;
  return {
    invite: null !== (t = S.Z.getInvite(n)) && void 0 !== t ? t : {},
    nativeAppState: g.Z.getState(n),
    authenticated: x.default.isAuthenticated(),
    defaultRoute: O.Z.defaultRoute,
    isUnderage: _.Z.isUnderageAnonymous()
  }
})(z)