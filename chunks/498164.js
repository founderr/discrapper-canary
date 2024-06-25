var s, i, l = n(735250);
n(470079);
var a = n(756647),
  r = n(481060),
  o = n(570140),
  c = n(355467),
  u = n(899742),
  d = n(457330),
  E = n(533307),
  h = n(447543),
  _ = n(962220),
  I = n(703656),
  m = n(314897),
  T = n(594174),
  g = n(626135),
  p = n(585483),
  N = n(591759),
  S = n(998502),
  C = n(996106),
  A = n(186901),
  f = n(981631);

function Z(e, t) {
  if (null != e) g.default.track(f.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, a.s)(e),
    link_type: t
  })
}(s = i || (i = {})).SETTINGS = "settings", s.CHANGELOG = "changelog", s.LIBRARY = "library", s.STORE = "store", s.INVITE = "invite", s.CHANNEL = "channel", s.GUILD_SETTINGS = "guild_settings", t.Z = {
  [f.Etm.INVITE_BROWSER]: {
    scope: A.cE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e, {
        invite: n
      } = await h.Z.resolveInvite(t, "Desktop Modal");
      if (null == n) throw new C.Z({
        errorCode: f.lTL.INVALID_INVITE
      }, "Invalid invite id: ".concat(t));
      return m.default.isAuthenticated() ? o.Z.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: n,
        code: t,
        context: f.IlC.APP
      }) : (0, I.dL)(f.Z5c.INVITE(t)), {
        invite: n,
        code: t
      }
    }
  },
  [f.Etm.GUILD_TEMPLATE_BROWSER]: {
    scope: A.cE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      if (null == T.default.getCurrentUser()) return;
      let {
        guildTemplate: s
      } = await _.Z.resolveGuildTemplate(t);
      if (null == s) throw new C.Z({
        errorCode: f.lTL.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return S.ZP.focus(), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("10778"), n.e("90424")]).then(n.bind(n, 766775));
        return t => (0, l.jsx)(e, {
          ...t,
          guildTemplate: s
        })
      }), {
        guildTemplate: s,
        code: t
      }
    }
  },
  [f.Etm.GIFT_CODE_BROWSER]: {
    scope: A.cE,
    handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return new Promise((e, s) => {
        o.Z.wait(() => {
          E.Z.resolveGiftCode(t, !0, !0).then(s => {
            let {
              giftCode: i
            } = s;
            S.ZP.focus(), g.default.track(f.rMx.OPEN_MODAL, {
              type: "gift_accept",
              location: f.SaU
            }), (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("99387"), n.e("92446")]).then(n.bind(n, 409858));
              return n => (0, l.jsx)(e, {
                code: t,
                ...n
              })
            }), e({
              giftCode: i
            })
          }).catch(() => s(new C.Z({
            errorCode: f.lTL.INVALID_GIFT_CODE
          }, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [f.Etm.DEEP_LINK]: {
    scope: A.cE,
    handler(e) {
      let {
        args: {
          type: t,
          params: n
        }
      } = e;
      switch (S.ZP.focus(), t) {
        case A.jE.USER_SETTINGS:
          null != n && ((0, I.dL)(f.Z5c.SETTINGS(n.section, n.subsection)), Z(n.fingerprint, "settings"));
          break;
        case A.jE.CHANGELOG:
          null != n && ((0, I.dL)(N.Z.formatPathWithQuery(f.Z5c.CHANGELOGS(n.date), n.query)), Z(n.fingerprint, "changelog"));
          break;
        case A.jE.LIBRARY:
          (0, I.dL)(f.Z5c.APPLICATION_LIBRARY), null != n && Z(n.fingerprint, "library");
          break;
        case A.jE.STORE_HOME:
          (0, I.dL)(f.Z5c.APPLICATION_STORE), null != n && Z(n.fingerprint, "store");
          break;
        case A.jE.STORE_LISTING:
          null != n && ((0, I.dL)(f.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), Z(n.fingerprint, "store"));
          break;
        case A.jE.PICK_GUILD_SETTINGS:
          null != n && ((0, I.dL)({
            pathname: f.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), Z(n.fingerprint, "guild_settings"));
          break;
        case A.jE.CHANNEL:
          null != n && ((0, I.dL)({
            pathname: f.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), Z(n.fingerprint, "channel"))
      }
    }
  },
  [f.Etm.BROWSER_HANDOFF]: {
    scope: A.CN,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: n
        }
      } = e;
      S.ZP.focus(null, !0), (0, u.lx)(t, n)
    }
  },
  [f.Etm.CONNECTIONS_CALLBACK]: {
    scope: A.cE,
    handler: async e => {
      let {
        args: {
          providerType: t,
          code: n,
          openid_params: s,
          state: i
        }
      } = e;
      try {
        return await d.Z.callback(t, {
          code: n,
          openid_params: s,
          state: i
        })
      } catch (e) {
        throw p.S.dispatch(f.CkL.CONNECTIONS_CALLBACK_ERROR), e
      }
    }
  },
  [f.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: A.cE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: s
        }
      } = e;
      return (0, c.rt)({
        paymentSourceType: f.HeQ.PAYPAL,
        state: t,
        path: n,
        query: s
      })
    }
  },
  [f.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: A.cE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: s,
          payment_source_type: i
        }
      } = e;
      return (0, c.rt)({
        paymentSourceType: i,
        state: t,
        path: n,
        query: s
      })
    }
  }
}