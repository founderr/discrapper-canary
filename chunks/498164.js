"use strict";
a.r(t);
var n, s, l = a("735250");
a("470079");
var i = a("756647"),
  r = a("481060"),
  o = a("570140"),
  u = a("355467"),
  d = a("899742"),
  c = a("457330"),
  f = a("533307"),
  E = a("447543"),
  h = a("962220"),
  _ = a("703656"),
  C = a("314897"),
  m = a("594174"),
  S = a("626135"),
  I = a("585483"),
  p = a("591759"),
  T = a("998502"),
  g = a("996106"),
  A = a("186901"),
  N = a("981631");

function v(e, t) {
  null != e && S.default.track(N.AnalyticEvents.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, i.extractId)(e),
    link_type: t
  })
}(n = s || (s = {})).SETTINGS = "settings", n.CHANGELOG = "changelog", n.LIBRARY = "library", n.STORE = "store", n.INVITE = "invite", n.CHANNEL = "channel", n.GUILD_SETTINGS = "guild_settings", t.default = {
  [N.RPCCommands.INVITE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e, {
        invite: a
      } = await E.default.resolveInvite(t, "Desktop Modal");
      if (null == a) throw new g.default({
        errorCode: N.RPCErrors.INVALID_INVITE
      }, "Invalid invite id: ".concat(t));
      return C.default.isAuthenticated() ? o.default.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: a,
        code: t,
        context: N.AppContext.APP
      }) : (0, _.replaceWith)(N.Routes.INVITE(t)), {
        invite: a,
        code: t
      }
    }
  },
  [N.RPCCommands.GUILD_TEMPLATE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      if (null == m.default.getCurrentUser()) return;
      let {
        guildTemplate: n
      } = await h.default.resolveGuildTemplate(t);
      if (null == n) throw new g.default({
        errorCode: N.RPCErrors.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return T.default.focus(), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("10778"), a.e("90424")]).then(a.bind(a, "766775"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildTemplate: n
        })
      }), {
        guildTemplate: n,
        code: t
      }
    }
  },
  [N.RPCCommands.GIFT_CODE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return new Promise((e, n) => {
        o.default.wait(() => {
          f.default.resolveGiftCode(t, !0, !0).then(n => {
            let {
              giftCode: s
            } = n;
            T.default.focus(), S.default.track(N.AnalyticEvents.OPEN_MODAL, {
              type: "gift_accept",
              location: N.DIRECT_ANALYTICS_LOCATION
            }), (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([a.e("99387"), a.e("8016"), a.e("92446")]).then(a.bind(a, "409858"));
              return a => (0, l.jsx)(e, {
                code: t,
                ...a
              })
            }), e({
              giftCode: s
            })
          }).catch(() => n(new g.default({
            errorCode: N.RPCErrors.INVALID_GIFT_CODE
          }, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [N.RPCCommands.DEEP_LINK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          type: t,
          params: a
        }
      } = e;
      switch (T.default.focus(), t) {
        case A.RPCDeepLinks.USER_SETTINGS:
          null != a && ((0, _.replaceWith)(N.Routes.SETTINGS(a.section, a.subsection)), v(a.fingerprint, "settings"));
          break;
        case A.RPCDeepLinks.CHANGELOG:
          null != a && ((0, _.replaceWith)(p.default.formatPathWithQuery(N.Routes.CHANGELOGS(a.date), a.query)), v(a.fingerprint, "changelog"));
          break;
        case A.RPCDeepLinks.LIBRARY:
          (0, _.replaceWith)(N.Routes.APPLICATION_LIBRARY), null != a && v(a.fingerprint, "library");
          break;
        case A.RPCDeepLinks.STORE_HOME:
          (0, _.replaceWith)(N.Routes.APPLICATION_STORE), null != a && v(a.fingerprint, "store");
          break;
        case A.RPCDeepLinks.STORE_LISTING:
          null != a && ((0, _.replaceWith)(N.Routes.APPLICATION_STORE_LISTING_SKU(a.skuId, a.slug)), v(a.fingerprint, "store"));
          break;
        case A.RPCDeepLinks.PICK_GUILD_SETTINGS:
          null != a && ((0, _.replaceWith)({
            pathname: N.Routes.PICK_GUILD_SETTINGS(a.section, a.subsection),
            search: a.search
          }), v(a.fingerprint, "guild_settings"));
          break;
        case A.RPCDeepLinks.CHANNEL:
          null != a && ((0, _.replaceWith)({
            pathname: N.Routes.CHANNEL(a.guildId, a.channelId, a.messageId),
            search: a.search
          }), v(a.fingerprint, "channel"))
      }
    }
  },
  [N.RPCCommands.BROWSER_HANDOFF]: {
    scope: A.RPC_PRIVATE_LIMITED_SCOPE,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: a
        }
      } = e;
      T.default.focus(null, !0), (0, d.handoffEnd)(t, a)
    }
  },
  [N.RPCCommands.CONNECTIONS_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler: async e => {
      let {
        args: {
          providerType: t,
          code: a,
          openid_params: n,
          state: s
        }
      } = e;
      try {
        return await c.default.callback(t, {
          code: a,
          openid_params: n,
          state: s
        })
      } catch (e) {
        throw I.ComponentDispatch.dispatch(N.ComponentActions.CONNECTIONS_CALLBACK_ERROR), e
      }
    }
  },
  [N.RPCCommands.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: a,
          query: n
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: N.PaymentSourceTypes.PAYPAL,
        state: t,
        path: a,
        query: n
      })
    }
  },
  [N.RPCCommands.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: a,
          query: n,
          payment_source_type: s
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: s,
        state: t,
        path: a,
        query: n
      })
    }
  }
}