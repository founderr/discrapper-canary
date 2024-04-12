"use strict";
a.r(t), a("47120"), a("411104"), a("789020");
var n = a("735250");
a("470079");
var s = a("45792"),
  l = a("481060"),
  i = a("278323"),
  r = a("24124"),
  o = a("224706"),
  u = a("45114"),
  d = a("479531"),
  c = a("40851"),
  f = a("566620"),
  E = a("596223"),
  h = a("838195"),
  _ = a("928518"),
  C = a("592125"),
  m = a("293273"),
  S = a("885110"),
  p = a("451478"),
  I = a("630388"),
  T = a("823379"),
  g = a("591759"),
  A = a("228488"),
  N = a("996106"),
  v = a("914946"),
  R = a("452426"),
  O = a("561205"),
  L = a("600027"),
  M = a("852926"),
  P = a("186901"),
  x = a("981631");
async function y(e, t, a, n) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
    l = m.default.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, v.validateActivityInvite)(n, l.party, l.secrets)) throw new N.default({
    errorCode: x.RPCErrors.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let o = (0, E.default)(l, S.default);
  if (o) {
    let {
      lock: t
    } = (0, M.unlockOverlay)(e);
    return (0, r.openModal)(l, o).then(() => {
      throw t(), new N.default({
        errorCode: x.RPCErrors.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await i.default.sendActivityInviteUser({
    userId: a,
    type: n,
    activity: l,
    content: s,
    location: "In-Game Invite"
  })
}
t.default = {
  [x.RPCCommands.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [x.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: a,
          pid: n
        }
      } = e, s = t.application.id;
      if (null == s) throw new N.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return y(n, s, a, x.ActivityActionTypes.JOIN)
    }
  },
  [x.RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [x.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, a = C.default.getDMFromUserId(t);
      null != a && (0, u.ack)(a, !0, !0)
    }
  },
  [x.RPCCommands.ACTIVITY_INVITE_USER]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [x.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, R.default)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([x.ActivityActionTypes.JOIN]),
      content: e.string().min(0).max(1024),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: a,
          user_id: n,
          content: s,
          pid: l
        }
      } = e, i = t.application.id;
      if (null == i) throw new N.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return y(l, i, n, a, s)
    }
  },
  [x.RPCCommands.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [x.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, R.default)(e).required().keys({
      type: e.number().required().valid([x.ActivityActionTypes.JOIN]),
      user_id: e.string().required(),
      session_id: e.string().required(),
      channel_id: e.string().required(),
      message_id: e.string().required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: a,
          user_id: n,
          session_id: s,
          channel_id: l,
          message_id: i
        }
      } = e, r = t.application.id;
      if (null == r) throw new N.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let u = Promise.resolve(!1);
      if (a === x.ActivityActionTypes.JOIN) u = o.default.join({
        userId: n,
        sessionId: s,
        applicationId: r,
        channelId: l,
        messageId: i
      });
      return u.then(e => {
        if (!e) throw new N.default({
          errorCode: x.RPCErrors.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [x.RPCCommands.OPEN_INVITE_DIALOG]: {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [x.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e, {
        channel: s,
        guild: i
      } = (0, L.validateOpenInviteDialog)(), r = _.default.getWindow(x.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
      (null == r ? void 0 : r.closed) && (r = null);
      let o = null != r ? x.AppContext.POPOUT : x.AppContext.APP;
      (0, A.exitFullScreen)({}, null == r ? void 0 : r.document), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("7654")]).then(a.bind(a, "560114"));
        return a => (0, n.jsx)(e, {
          ...a,
          guild: i,
          channel: s,
          applicationId: t.application.id,
          analyticsLocation: x.AnalyticsLocations.ACTIVITY_RPC,
          source: x.InstantInviteSources.ACTIVITY_INVITE
        })
      }, {
        contextKey: o === x.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
      })
    }
  },
  [x.RPCCommands.INITIATE_IMAGE_UPLOAD]: (0, s.createRPCCommand)(x.RPCCommands.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [x.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      var t;
      let {
        socket: a
      } = e, n = a.application.id;
      if (null == n) throw new N.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let s = null === (t = (0, O.default)()) || void 0 === t ? void 0 : t.id;
      if (null == s) throw new N.default({
        errorCode: x.RPCErrors.UNKNOWN_ERROR
      }, "Unable to find selected channel");
      return new Promise((e, t) => {
        ! function(e, t) {
          var a;
          let n = p.default.getLastFocusedWindowId(),
            s = null == n ? null : null === (a = (0, c.getAppWindowContextValue)(n)) || void 0 === a ? void 0 : a.renderWindow;
          if (null == s) throw new N.default({
            errorCode: x.RPCErrors.UNKNOWN_ERROR
          }, "No valid window found");
          let l = s.document.createElement("input");
          l.style.display = "none", l.type = "file", l.accept = "image/jpeg, image/jpg, image/png, image/gif";
          let i = () => {
            (null == l.files || 0 === l.files.length) && t(), s.document.body.removeEventListener("focus", i, !0), setTimeout(() => {
              s.document.body.removeChild(l)
            }, 1e3)
          };
          l.addEventListener("change", () => {
            (0, T.isNotNullish)(l.files) && e(l.files[0]), i()
          }), l.addEventListener("cancel", () => {
            i()
          }), s.document.body.addEventListener("focus", i, !0), s.document.body.appendChild(l), l.click()
        }(async a => {
          let l = await (0, f.uploadImageAttachment)(n, s, a);
          (0, T.isNotNullish)(l) && (0, T.isNotNullish)(l.url) && !(l instanceof d.default) ? e({
            image_url: l.url
          }): t(l)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new N.default({
          errorCode: x.RPCErrors.UNKNOWN_ERROR
        }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : "Failed to upload image")
      })
    }
  }),
  [x.RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: (0, s.createRPCCommand)(x.RPCCommands.OPEN_SHARE_MOMENT_DIALOG, {
    scope: {
      [P.RPC_SCOPE_CONFIG.ANY]: [P.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      var t;
      let {
        socket: a,
        args: {
          mediaUrl: n
        }
      } = e;
      (0, v.validatePostMessageTransport)(a.transport);
      let s = a.application.id;
      if (null == s) throw new N.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No application.");
      if (!(0, I.hasFlag)(null !== (t = a.application.flags) && void 0 !== t ? t : 0, x.ApplicationFlags.EMBEDDED)) throw new N.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "This application cannot access this API");
      let l = (0, O.default)();
      if (null == l) throw new N.default({
        errorCode: x.RPCErrors.INVALID_COMMAND
      }, "No channel found");
      if (!g.default.isDiscordCdnUrl(n)) throw new N.default({
        errorCode: x.RPCErrors.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, h.openActivityShareMomentModal)({
        applicationId: s,
        channelId: l.id,
        mediaUrl: n
      })
    }
  })
}