"use strict";
n.r(t), n("47120"), n("411104"), n("789020");
var a = n("735250");
n("470079");
var s = n("45792"),
  i = n("481060"),
  l = n("278323"),
  r = n("988298"),
  o = n("224706"),
  u = n("45114"),
  d = n("479531"),
  c = n("40851"),
  f = n("566620"),
  E = n("596223"),
  h = n("838195"),
  _ = n("928518"),
  C = n("592125"),
  m = n("293273"),
  S = n("885110"),
  p = n("451478"),
  g = n("630388"),
  I = n("823379"),
  T = n("591759"),
  A = n("228488"),
  N = n("996106"),
  v = n("914946"),
  R = n("452426"),
  L = n("561205"),
  O = n("600027"),
  M = n("852926"),
  y = n("186901"),
  P = n("981631");
async function x(e, t, n, a) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
    i = m.default.getApplicationActivity(t);
  if (null == i || null == i.secrets || !(0, v.validateActivityInvite)(a, i.party, i.secrets)) throw new N.default({
    errorCode: P.RPCErrors.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let o = (0, E.default)(i, S.default);
  if (o) {
    let {
      lock: t
    } = (0, M.unlockOverlay)(e);
    return (0, r.openModal)(i, o).then(() => {
      throw t(), new N.default({
        errorCode: P.RPCErrors.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await l.default.sendActivityInviteUser({
    userId: n,
    type: a,
    activity: i,
    content: s,
    location: "In-Game Invite"
  })
}
t.default = {
  [P.RPCCommands.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [y.RPC_SCOPE_CONFIG.ANY]: [P.OAuth2Scopes.RPC, y.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          pid: a
        }
      } = e, s = t.application.id;
      if (null == s) throw new N.default({
        errorCode: P.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return x(a, s, n, P.ActivityActionTypes.JOIN)
    }
  },
  [P.RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [y.RPC_SCOPE_CONFIG.ANY]: [P.OAuth2Scopes.RPC, y.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, n = C.default.getDMFromUserId(t);
      null != n && (0, u.ack)(n, !0, !0)
    }
  },
  [P.RPCCommands.ACTIVITY_INVITE_USER]: {
    scope: {
      [y.RPC_SCOPE_CONFIG.ANY]: [P.OAuth2Scopes.RPC, y.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, R.default)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([P.ActivityActionTypes.JOIN]),
      content: e.string().min(0).max(1024),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: a,
          content: s,
          pid: i
        }
      } = e, l = t.application.id;
      if (null == l) throw new N.default({
        errorCode: P.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return x(i, l, a, n, s)
    }
  },
  [P.RPCCommands.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [y.RPC_SCOPE_CONFIG.ANY]: [P.OAuth2Scopes.RPC, y.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, R.default)(e).required().keys({
      type: e.number().required().valid([P.ActivityActionTypes.JOIN]),
      user_id: e.string().required(),
      session_id: e.string().required(),
      channel_id: e.string().required(),
      message_id: e.string().required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: a,
          session_id: s,
          channel_id: i,
          message_id: l
        }
      } = e, r = t.application.id;
      if (null == r) throw new N.default({
        errorCode: P.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let u = Promise.resolve(!1);
      if (n === P.ActivityActionTypes.JOIN) u = o.default.join({
        userId: a,
        sessionId: s,
        applicationId: r,
        channelId: i,
        messageId: l
      });
      return u.then(e => {
        if (!e) throw new N.default({
          errorCode: P.RPCErrors.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [P.RPCCommands.OPEN_INVITE_DIALOG]: {
    scope: {
      [y.RPC_SCOPE_CONFIG.ANY]: [P.OAuth2Scopes.RPC, y.RPC_LOCAL_SCOPE, y.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e, {
        channel: s,
        guild: l
      } = (0, O.validateOpenInviteDialog)(), r = _.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
      (null == r ? void 0 : r.closed) && (r = null);
      let o = null != r ? P.AppContext.POPOUT : P.AppContext.APP;
      (0, A.exitFullScreen)({}, null == r ? void 0 : r.document), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("7654")]).then(n.bind(n, "560114"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: l,
          channel: s,
          applicationId: t.application.id,
          analyticsLocation: P.AnalyticsLocations.ACTIVITY_RPC,
          source: P.InstantInviteSources.ACTIVITY_INVITE
        })
      }, {
        contextKey: o === P.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
      })
    }
  },
  [P.RPCCommands.INITIATE_IMAGE_UPLOAD]: (0, s.createRPCCommand)(P.RPCCommands.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [y.RPC_SCOPE_CONFIG.ANY]: [P.OAuth2Scopes.RPC, y.RPC_LOCAL_SCOPE, y.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      var t;
      let {
        socket: n
      } = e, a = n.application.id;
      if (null == a) throw new N.default({
        errorCode: P.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let s = null === (t = (0, L.default)()) || void 0 === t ? void 0 : t.id;
      if (null == s) throw new N.default({
        errorCode: P.RPCErrors.UNKNOWN_ERROR
      }, "Unable to find selected channel");
      return new Promise((e, t) => {
        ! function(e, t) {
          var n;
          let a = p.default.getLastFocusedWindowId(),
            s = null == a ? null : null === (n = (0, c.getAppWindowContextValue)(a)) || void 0 === n ? void 0 : n.renderWindow;
          if (null == s) throw new N.default({
            errorCode: P.RPCErrors.UNKNOWN_ERROR
          }, "No valid window found");
          let i = s.document.createElement("input");
          i.style.display = "none", i.type = "file", i.accept = "image/jpeg, image/jpg, image/png, image/gif";
          let l = () => {
            (null == i.files || 0 === i.files.length) && t(), s.document.body.removeEventListener("focus", l, !0), setTimeout(() => {
              s.document.body.removeChild(i)
            }, 1e3)
          };
          i.addEventListener("change", () => {
            (0, I.isNotNullish)(i.files) && e(i.files[0]), l()
          }), i.addEventListener("cancel", () => {
            l()
          }), s.document.body.addEventListener("focus", l, !0), s.document.body.appendChild(i), i.click()
        }(async n => {
          let i = await (0, f.uploadImageAttachment)(a, s, n);
          (0, I.isNotNullish)(i) && (0, I.isNotNullish)(i.url) && !(i instanceof d.default) ? e({
            image_url: i.url
          }): t(i)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new N.default({
          errorCode: P.RPCErrors.UNKNOWN_ERROR
        }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : "Failed to upload image")
      })
    }
  }),
  [P.RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: (0, s.createRPCCommand)(P.RPCCommands.OPEN_SHARE_MOMENT_DIALOG, {
    scope: {
      [y.RPC_SCOPE_CONFIG.ANY]: [y.RPC_AUTHENTICATED_SCOPE]
    },
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          mediaUrl: a
        }
      } = e;
      (0, v.validatePostMessageTransport)(n.transport);
      let s = n.application.id;
      if (null == s) throw new N.default({
        errorCode: P.RPCErrors.INVALID_COMMAND
      }, "No application.");
      if (!(0, g.hasFlag)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, P.ApplicationFlags.EMBEDDED)) throw new N.default({
        errorCode: P.RPCErrors.INVALID_COMMAND
      }, "This application cannot access this API");
      let i = (0, L.default)();
      if (null == i) throw new N.default({
        errorCode: P.RPCErrors.INVALID_COMMAND
      }, "No channel found");
      if (!T.default.isDiscordCdnUrl(a)) throw new N.default({
        errorCode: P.RPCErrors.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, h.openActivityShareMomentModal)({
        applicationId: s,
        channelId: i.id,
        mediaUrl: a
      })
    }
  })
}