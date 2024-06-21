n(47120), n(411104), n(789020);
var i = n(735250);
n(470079);
var s = n(243814),
  l = n(45792),
  a = n(481060),
  r = n(278323),
  o = n(988298),
  c = n(224706),
  u = n(45114),
  d = n(479531),
  E = n(40851),
  h = n(566620),
  _ = n(596223),
  I = n(838195),
  m = n(928518),
  g = n(592125),
  p = n(293273),
  N = n(885110),
  T = n(451478),
  C = n(630388),
  S = n(823379),
  A = n(591759),
  f = n(228488),
  Z = n(996106),
  v = n(914946),
  L = n(452426),
  O = n(561205),
  R = n(600027),
  x = n(852926),
  M = n(186901),
  P = n(981631);
async function D(e, t, n, i) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
    l = p.Z.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, v.t9)(i, l.party, l.secrets)) throw new Z.Z({
    errorCode: P.lTL.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let a = (0, _.Z)(l, N.Z);
  if (a) {
    let {
      lock: t
    } = (0, x.s0)(e);
    return (0, o.h7)(l, a).then(() => {
      throw t(), new Z.Z({
        errorCode: P.lTL.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await r.Z.sendActivityInviteUser({
    userId: n,
    type: i,
    activity: l,
    content: s,
    location: "In-Game Invite"
  })
}
t.Z = {
  [P.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [M.Gp.ANY]: [s.x.RPC, M.lH]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          pid: i
        }
      } = e, s = t.application.id;
      if (null == s) throw new Z.Z({
        errorCode: P.lTL.INVALID_COMMAND
      }, "No application.");
      return D(i, s, n, P.mFx.JOIN)
    }
  },
  [P.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [M.Gp.ANY]: [s.x.RPC, M.lH]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, n = g.Z.getDMFromUserId(t);
      null != n && (0, u.In)(n, !0, !0)
    }
  },
  [P.Etm.ACTIVITY_INVITE_USER]: {
    scope: {
      [M.Gp.ANY]: [s.x.RPC, M.lH]
    },
    validation: e => (0, L.Z)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([P.mFx.JOIN]),
      content: e.string().min(0).max(1024),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: i,
          content: s,
          pid: l
        }
      } = e, a = t.application.id;
      if (null == a) throw new Z.Z({
        errorCode: P.lTL.INVALID_COMMAND
      }, "No application.");
      return D(l, a, i, n, s)
    }
  },
  [P.Etm.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [M.Gp.ANY]: [s.x.RPC, M.lH]
    },
    validation: e => (0, L.Z)(e).required().keys({
      type: e.number().required().valid([P.mFx.JOIN]),
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
          user_id: i,
          session_id: s,
          channel_id: l,
          message_id: a
        }
      } = e, r = t.application.id;
      if (null == r) throw new Z.Z({
        errorCode: P.lTL.INVALID_COMMAND
      }, "No application.");
      let o = Promise.resolve(!1);
      if (n === P.mFx.JOIN) o = c.Z.join({
        userId: i,
        sessionId: s,
        applicationId: r,
        channelId: l,
        messageId: a
      });
      return o.then(e => {
        if (!e) throw new Z.Z({
          errorCode: P.lTL.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [P.Etm.OPEN_INVITE_DIALOG]: {
    scope: {
      [M.Gp.ANY]: [s.x.RPC, M.lH, M.wE]
    },
    handler(e) {
      let {
        socket: t
      } = e, {
        channel: s,
        guild: l
      } = (0, R.T)(), r = m.Z.getWindow(P.KJ3.CHANNEL_CALL_POPOUT);
      (null == r ? void 0 : r.closed) && (r = null);
      let o = null != r ? P.IlC.POPOUT : P.IlC.APP;
      (0, f.Pr)({}, null == r ? void 0 : r.document), (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("7654")]).then(n.bind(n, 560114));
        return n => (0, i.jsx)(e, {
          ...n,
          guild: l,
          channel: s,
          applicationId: t.application.id,
          analyticsLocation: P.Sbl.ACTIVITY_RPC,
          source: P.t4x.ACTIVITY_INVITE
        })
      }, {
        contextKey: o === P.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
      })
    }
  },
  [P.Etm.INITIATE_IMAGE_UPLOAD]: (0, l.S)(P.Etm.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [M.Gp.ANY]: [s.x.RPC, M.lH, M.wE]
    },
    handler(e) {
      var t;
      let {
        socket: n
      } = e, i = n.application.id;
      if (null == i) throw new Z.Z({
        errorCode: P.lTL.INVALID_COMMAND
      }, "No application.");
      let s = null === (t = (0, O.Z)()) || void 0 === t ? void 0 : t.id;
      if (null == s) throw new Z.Z({
        errorCode: P.lTL.UNKNOWN_ERROR
      }, "Unable to find selected channel");
      return new Promise((e, t) => {
        ! function(e, t) {
          var n;
          let i = T.Z.getLastFocusedWindowId(),
            s = null == i ? null : null === (n = (0, E.g0)(i)) || void 0 === n ? void 0 : n.renderWindow;
          if (null == s) throw new Z.Z({
            errorCode: P.lTL.UNKNOWN_ERROR
          }, "No valid window found");
          let l = s.document.createElement("input");
          l.style.display = "none", l.type = "file", l.accept = "image/jpeg, image/jpg, image/png, image/gif";
          let a = () => {
            (null == l.files || 0 === l.files.length) && t(), s.document.body.removeEventListener("focus", a, !0), setTimeout(() => {
              s.document.body.removeChild(l)
            }, 1e3)
          };
          l.addEventListener("change", () => {
            (0, S.lm)(l.files) && e(l.files[0]), a()
          }), l.addEventListener("cancel", () => {
            a()
          }), s.document.body.addEventListener("focus", a, !0), s.document.body.appendChild(l), l.click()
        }(async n => {
          let l = await (0, h.kv)(i, s, n);
          (0, S.lm)(l) && (0, S.lm)(l.url) && !(l instanceof d.Z) ? e({
            image_url: l.url
          }): t(l)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new Z.Z({
          errorCode: P.lTL.UNKNOWN_ERROR
        }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : "Failed to upload image")
      })
    }
  }),
  [P.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, l.S)(P.Etm.OPEN_SHARE_MOMENT_DIALOG, {
    scope: {
      [M.Gp.ANY]: [M.wE]
    },
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          mediaUrl: i
        }
      } = e;
      (0, v.bu)(n.transport);
      let s = n.application.id;
      if (null == s) throw new Z.Z({
        errorCode: P.lTL.INVALID_COMMAND
      }, "No application.");
      if (!(0, C.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, P.udG.EMBEDDED)) throw new Z.Z({
        errorCode: P.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let l = (0, O.Z)();
      if (null == l) throw new Z.Z({
        errorCode: P.lTL.INVALID_COMMAND
      }, "No channel found");
      if (!A.Z.isDiscordCdnUrl(i)) throw new Z.Z({
        errorCode: P.lTL.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, I.Z)({
        applicationId: s,
        channelId: l.id,
        mediaUrl: i
      })
    }
  })
}