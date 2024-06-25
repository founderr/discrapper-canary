n.r(t), n(47120);
var s = n(735250),
  i = n(470079),
  r = n(593473),
  a = n(990547),
  l = n(873546),
  o = n(442837),
  c = n(570140),
  u = n(893776),
  d = n(533307),
  _ = n(447543),
  E = n(126399),
  I = n(765717),
  h = n(267394),
  p = n(761305),
  g = n(698177),
  f = n(353926),
  N = n(409059),
  m = n(962220),
  T = n(637776),
  A = n(264229),
  Z = n(677760),
  x = n(314897),
  S = n(82142),
  O = n(701190),
  v = n(626135),
  C = n(81063),
  D = n(449934),
  P = n(768581),
  R = n(625054),
  L = n(645499),
  b = n(320830),
  M = n(721751),
  j = n(718182),
  U = n(223543),
  G = n(73906),
  B = n(299852),
  y = n(39514),
  F = n(236446),
  k = n(9325),
  V = n(344295),
  w = n(781428),
  H = n(209411),
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
let $ = (0, b.Z)(w.Z),
  ee = (0, b.Z)(H.Z),
  et = (0, b.Z)(V.Z),
  en = (0, b.Z)(F.Z),
  es = (0, b.Z)(y.Z),
  ei = (0, b.Z)(Z.Z),
  er = (0, b.Z)(K.Z),
  ea = (0, b.Z)(j.Z),
  el = (0, b.Z)(U.Z),
  eo = (0, b.Z)(X.Z),
  ec = (0, b.Z)(g.Z),
  eu = (0, b.Z)(W.Z),
  ed = (0, b.Z)(B.Z),
  e_ = (0, b.Z)(p.Z),
  eE = (0, b.Z)(T.Z),
  eI = (0, b.Z)(G.Z),
  eh = (0, b.Z)(z.Z),
  ep = (0, b.Z)(J.Z),
  eg = (0, b.Z)(Y.Z);
class ef extends i.PureComponent {
  static getDerivedStateFromProps(e, t) {
    var n;
    let {
      invite: s,
      location: i
    } = e, {
      backgroundId: a
    } = t, l = null !== (n = (0, r.parse)(i.search).redirect_to) && void 0 !== n ? n : null;
    (null == l || "" === l || !(0, L.B)(l) || l.startsWith(q.Z5c.ME)) && (l = null);
    let o = null;
    if (null == s) o = (0, D.gK)(l);
    else if ((null == s ? void 0 : s.state) === q.r2o.RESOLVED) {
      let {
        guild: e,
        target_application: t
      } = s;
      null != t ? null != a && (o = (0, C.getAssetImage)(t.id, a, 1024)) : null != e && "string" == typeof e.splash && (o = P.ZP.getGuildSplashURL({
        id: e.id,
        splash: e.splash
      }))
    }
    return {
      redirectTo: l,
      splash: o
    }
  }
  componentDidMount() {
    let {
      inviteKey: e,
      hasLoadedExperiments: t,
      isAuthenticated: n
    } = this.props;
    null != e && (!t && n && u.Z.getExperiments(!0), v.default.track(q.rMx.INVITE_OPENED, {
      invite_code: (0, A.jX)(e),
      load_time: R.Z.getTimeSinceNavigationStart()
    }, {
      flush: !0
    })), (t || Q.a) && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), E.Z.initialize()
  }
  componentDidUpdate(e) {
    var t, n;
    !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !Q.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash()
  }
  componentWillUnmount() {
    E.Z.terminate()
  }
  maybeFetchApplicationSplash() {
    let {
      invite: e
    } = this.props;
    if ((null == e ? void 0 : e.state) === q.r2o.RESOLVED) {
      let {
        target_application: t
      } = e;
      null != t && (0, C.fetchAssetIds)(t.id, ["embedded_splash"]).then(e => {
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
      } = await _.Z.resolveInvite(e, q.Usc.INVITE);
      null != t && (0, h.A)(t)
    })(), _.Z.openNativeAppModal(e)
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
    }), m.Z.resolveGuildTemplate(e), m.Z.openNativeAppModal(e)
  }
  resolveGiftCode() {
    let {
      giftCode: e
    } = this.props;
    if (null != e) d.Z.resolveGiftCode(e, !0, !0).then(t => {
      null != t && null == t.giftCode.promotion && c.Z.wait(() => d.Z.openNativeGiftCodeModal(e))
    })
  }
  render() {
    let {
      splash: e,
      redirectTo: t
    } = this.state, {
      inviteKey: n
    } = this.props;
    return (0, s.jsxs)(M.Z, {
      splash: e,
      children: [(0, s.jsx)(I.Z, {
        path: q.Z5c.LOGIN_HANDOFF,
        render: e => (0, s.jsx)(ee, {
          ...e,
          redirectTo: t
        })
      }), (0, s.jsx)(I.Z, {
        impressionName: a.ImpressionNames.USER_LOGIN,
        path: q.Z5c.LOGIN,
        render: e => (0, s.jsx)($, {
          ...e,
          redirectTo: t
        })
      }), (0, s.jsx)(I.Z, {
        impressionName: a.ImpressionNames.USER_REGISTRATION,
        path: q.Z5c.REGISTER,
        render: e => Q.a ? (0, s.jsx)(et, {
          ...e,
          redirectTo: t,
          inviteKey: n
        }) : (0, s.jsx)(er, {
          ...e,
          redirectTo: t
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.GIFT_CODE_LOGIN(":giftCode"),
        render: e => (0, s.jsx)(es, {
          login: !0,
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.GIFT_CODE(":giftCode"),
        render: e => (0, s.jsx)(es, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: [q.Z5c.INVITE_LOGIN(":inviteCode"), q.Z5c.INVITE(":inviteCode")],
        render: e => {
          let {
            match: {
              params: {
                inviteCode: t
              },
              path: n
            },
            location: i,
            transitionTo: r
          } = e, a = (0, A.mb)(t, i.search);
          return l.tq || l.Em ? (0, s.jsx)(ei, {
            inviteKey: a,
            transitionTo: r
          }, a) : (0, s.jsx)(et, {
            inviteKey: a,
            location: i,
            transitionTo: r,
            login: n === q.Z5c.INVITE_LOGIN(":inviteCode")
          })
        }
      }), (0, s.jsx)(I.Z, {
        path: [q.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), q.Z5c.GUILD_TEMPLATE(":guildTemplateCode")],
        render: e => {
          let {
            match: {
              params: {
                guildTemplateCode: t
              },
              path: n
            },
            location: i,
            transitionTo: r
          } = e;
          return l.tq || l.Em ? (0, s.jsx)(k.Z, {
            code: t
          }, t) : (0, s.jsx)(en, {
            code: t,
            location: i,
            transitionTo: r,
            login: n === q.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
          })
        }
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.VERIFY,
        render: e => (0, s.jsx)(eo, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.VERIFY_HUB_EMAIL,
        render: e => (0, s.jsx)(eE, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.VERIFY_REQUEST,
        render: e => (0, s.jsx)(ec, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
        render: e => (0, s.jsx)(ed, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        render: e => (0, s.jsx)(e_, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.AUTHORIZE_IP,
        render: e => (0, s.jsx)(ea, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.REJECT_IP,
        render: e => (0, s.jsx)(eu, {
          source: q.Z5c.REJECT_IP,
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.REJECT_MFA,
        render: e => (0, s.jsx)(eu, {
          source: q.Z5c.REJECT_MFA,
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.AUTHORIZE_PAYMENT,
        render: e => (0, s.jsx)(el, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.RESET,
        render: e => (0, s.jsx)(eu, {
          source: q.Z5c.RESET,
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        render: e => (0, s.jsx)(eh, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        render: e => (0, s.jsx)(eI, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.REPORT,
        render: e => (0, s.jsx)(ep, {
          ...e
        })
      }), (0, s.jsx)(I.Z, {
        path: q.Z5c.REPORT_SECOND_LOOK,
        render: e => (0, s.jsx)(eg, {
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
t.default = o.ZP.connectStores([x.default, O.Z, S.Z, f.Z, N.Z], e => {
  var t, n, s;
  let {
    match: i,
    location: r
  } = e, a = null == i ? void 0 : null === (t = i.params) || void 0 === t ? void 0 : t.inviteCode, l = Q.a ? Q.Y : void 0, o = null != a ? (0, A.mb)(a, r.search) : l, c = null == i ? void 0 : null === (n = i.params) || void 0 === n ? void 0 : n.giftCode, u = null == i ? void 0 : null === (s = i.params) || void 0 === s ? void 0 : s.guildTemplateCode;
  return {
    inviteKey: o,
    isAuthenticated: x.default.isAuthenticated(),
    giftCode: c,
    guildTemplateCode: u,
    gift: null != c ? S.Z.get(c) : null,
    invite: null != o ? O.Z.getInvite(o) : null,
    guildTemplate: null != u ? N.Z.getGuildTemplate(u) : null,
    hasLoadedExperiments: f.Z.hasLoadedExperiments
  }
})(ef)