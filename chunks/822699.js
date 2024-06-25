n.r(t), n(47120);
var s = n(735250),
  r = n(470079),
  i = n(593473),
  l = n(990547),
  a = n(873546),
  o = n(442837),
  u = n(570140),
  c = n(893776),
  d = n(533307),
  E = n(447543),
  _ = n(126399),
  h = n(765717),
  I = n(267394),
  N = n(761305),
  p = n(698177),
  g = n(353926),
  m = n(409059),
  T = n(962220),
  f = n(637776),
  A = n(264229),
  Z = n(677760),
  x = n(314897),
  O = n(82142),
  S = n(701190),
  v = n(626135),
  P = n(81063),
  D = n(449934),
  C = n(768581),
  R = n(625054),
  L = n(645499),
  M = n(320830),
  j = n(721751),
  U = n(718182),
  G = n(223543),
  b = n(73906),
  y = n(299852),
  B = n(39514),
  F = n(236446),
  V = n(9325),
  k = n(344295),
  H = n(781428),
  w = n(209411),
  z = n(649156),
  K = n(423527),
  Y = n(424044),
  W = n(479495),
  J = n(881317),
  X = n(886806),
  q = n(981631),
  Q = n(188785);
n(179645);
o.ZP.initialize();
let $ = (0, M.Z)(H.Z),
  ee = (0, M.Z)(w.Z),
  et = (0, M.Z)(k.Z),
  en = (0, M.Z)(F.Z),
  es = (0, M.Z)(B.Z),
  er = (0, M.Z)(Z.Z),
  ei = (0, M.Z)(K.Z),
  el = (0, M.Z)(U.Z),
  ea = (0, M.Z)(G.Z),
  eo = (0, M.Z)(X.Z),
  eu = (0, M.Z)(p.Z),
  ec = (0, M.Z)(W.Z),
  ed = (0, M.Z)(y.Z),
  eE = (0, M.Z)(N.Z),
  e_ = (0, M.Z)(f.Z),
  eh = (0, M.Z)(b.Z),
  eI = (0, M.Z)(z.Z),
  eN = (0, M.Z)(J.Z),
  ep = (0, M.Z)(Y.Z);
class eg extends r.PureComponent {
  static getDerivedStateFromProps(e, t) {
    var n;
    let {
      invite: s,
      location: r
    } = e, {
      backgroundId: l
    } = t, a = null !== (n = (0, i.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
    (null == a || "" === a || !(0, L.B)(a) || a.startsWith(q.Z5c.ME)) && (a = null);
    let o = null;
    if (null == s) o = (0, D.gK)(a);
    else if ((null == s ? void 0 : s.state) === q.r2o.RESOLVED) {
      let {
        guild: e,
        target_application: t
      } = s;
      null != t ? null != l && (o = (0, P.getAssetImage)(t.id, l, 1024)) : null != e && "string" == typeof e.splash && (o = C.ZP.getGuildSplashURL({
        id: e.id,
        splash: e.splash
      }))
    }
    return {
      redirectTo: a,
      splash: o
    }
  }
  componentDidMount() {
    let {
      inviteKey: e,
      hasLoadedExperiments: t,
      isAuthenticated: n
    } = this.props;
    null != e && (!t && n && c.Z.getExperiments(!0), v.default.track(q.rMx.INVITE_OPENED, {
      invite_code: (0, A.jX)(e),
      load_time: R.Z.getTimeSinceNavigationStart()
    }, {
      flush: !0
    })), (t || Q.a) && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), _.Z.initialize()
  }
  componentDidUpdate(e) {
    var t, n;
    !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !Q.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash()
  }
  componentWillUnmount() {
    _.Z.terminate()
  }
  maybeFetchApplicationSplash() {
    let {
      invite: e
    } = this.props;
    if ((null == e ? void 0 : e.state) === q.r2o.RESOLVED) {
      let {
        target_application: t
      } = e;
      null != t && (0, P.fetchAssetIds)(t.id, ["embedded_splash"]).then(e => {
        let [t] = e;
        return this.setState({
          backgroundId: t
        })
      })
    }
  }
  resolveInvite() {
    let {
      inviteKey: e
    } = this.props;
    if (null != e)(async () => {
      let {
        invite: t
      } = await E.Z.resolveInvite(e, q.Usc.INVITE);
      null != t && (0, I.A)(t)
    })(), E.Z.openNativeAppModal(e)
  }
  resolveGuildTemplate() {
    let {
      guildTemplateCode: e
    } = this.props;
    if (null != e) v.default.track(q.rMx.GUILD_TEMPLATE_OPENED, {
      guild_template_code: e,
      load_time: R.Z.getTimeSinceNavigationStart()
    }, {
      flush: !0
    }), T.Z.resolveGuildTemplate(e), T.Z.openNativeAppModal(e)
  }
  resolveGiftCode() {
    let {
      giftCode: e
    } = this.props;
    if (null != e) d.Z.resolveGiftCode(e, !0, !0).then(t => {
      null != t && null == t.giftCode.promotion && u.Z.wait(() => d.Z.openNativeGiftCodeModal(e))
    })
  }
  render() {
    let {
      splash: e,
      redirectTo: t
    } = this.state, {
      inviteKey: n
    } = this.props;
    return (0, s.jsxs)(j.Z, {
      splash: e,
      children: [(0, s.jsx)(h.Z, {
        path: q.Z5c.LOGIN_HANDOFF,
        render: e => (0, s.jsx)(ee, {
          ...e,
          redirectTo: t
        })
      }), (0, s.jsx)(h.Z, {
        impressionName: l.ImpressionNames.USER_LOGIN,
        path: q.Z5c.LOGIN,
        render: e => (0, s.jsx)($, {
          ...e,
          redirectTo: t
        })
      }), (0, s.jsx)(h.Z, {
        impressionName: l.ImpressionNames.USER_REGISTRATION,
        path: q.Z5c.REGISTER,
        render: e => Q.a ? (0, s.jsx)(et, {
          ...e,
          redirectTo: t,
          inviteKey: n
        }) : (0, s.jsx)(ei, {
          ...e,
          redirectTo: t
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.GIFT_CODE_LOGIN(":giftCode"),
        render: e => (0, s.jsx)(es, {
          login: !0,
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.GIFT_CODE(":giftCode"),
        render: e => (0, s.jsx)(es, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: [q.Z5c.INVITE_LOGIN(":inviteCode"), q.Z5c.INVITE(":inviteCode")],
        render: e => {
          let {
            match: {
              params: {
                inviteCode: t
              },
              path: n
            },
            location: r,
            transitionTo: i
          } = e, l = (0, A.mb)(t, r.search);
          return a.tq || a.Em ? (0, s.jsx)(er, {
            inviteKey: l,
            transitionTo: i
          }, l) : (0, s.jsx)(et, {
            inviteKey: l,
            location: r,
            transitionTo: i,
            login: n === q.Z5c.INVITE_LOGIN(":inviteCode")
          })
        }
      }), (0, s.jsx)(h.Z, {
        path: [q.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), q.Z5c.GUILD_TEMPLATE(":guildTemplateCode")],
        render: e => {
          let {
            match: {
              params: {
                guildTemplateCode: t
              },
              path: n
            },
            location: r,
            transitionTo: i
          } = e;
          return a.tq || a.Em ? (0, s.jsx)(V.Z, {
            code: t
          }, t) : (0, s.jsx)(en, {
            code: t,
            location: r,
            transitionTo: i,
            login: n === q.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
          })
        }
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.VERIFY,
        render: e => (0, s.jsx)(eo, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.VERIFY_HUB_EMAIL,
        render: e => (0, s.jsx)(e_, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.VERIFY_REQUEST,
        render: e => (0, s.jsx)(eu, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
        render: e => (0, s.jsx)(ed, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        render: e => (0, s.jsx)(eE, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.AUTHORIZE_IP,
        render: e => (0, s.jsx)(el, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.REJECT_IP,
        render: e => (0, s.jsx)(ec, {
          source: q.Z5c.REJECT_IP,
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.REJECT_MFA,
        render: e => (0, s.jsx)(ec, {
          source: q.Z5c.REJECT_MFA,
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.AUTHORIZE_PAYMENT,
        render: e => (0, s.jsx)(ea, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.RESET,
        render: e => (0, s.jsx)(ec, {
          source: q.Z5c.RESET,
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        render: e => (0, s.jsx)(eI, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        render: e => (0, s.jsx)(eh, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.REPORT,
        render: e => (0, s.jsx)(eN, {
          ...e
        })
      }), (0, s.jsx)(h.Z, {
        path: q.Z5c.REPORT_SECOND_LOOK,
        render: e => (0, s.jsx)(ep, {
          ...e
        })
      })]
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, s = {
      splash: null,
      redirectTo: null,
      backgroundId: null
    }, (n = "state") in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
t.default = o.ZP.connectStores([x.default, S.Z, O.Z, g.Z, m.Z], e => {
  var t, n, s;
  let {
    match: r,
    location: i
  } = e, l = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode, a = Q.a ? Q.Y : void 0, o = null != l ? (0, A.mb)(l, i.search) : a, u = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode, c = null == r ? void 0 : null === (s = r.params) || void 0 === s ? void 0 : s.guildTemplateCode;
  return {
    inviteKey: o,
    isAuthenticated: x.default.isAuthenticated(),
    giftCode: u,
    guildTemplateCode: c,
    gift: null != u ? O.Z.get(u) : null,
    invite: null != o ? S.Z.getInvite(o) : null,
    guildTemplate: null != c ? m.Z.getGuildTemplate(c) : null,
    hasLoadedExperiments: g.Z.hasLoadedExperiments
  }
})(eg)