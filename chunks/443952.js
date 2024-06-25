n(47120), n(411104), n(789020);
var s = n(735250);
n(470079);
var i = n(243814),
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
  T = n(592125),
  g = n(293273),
  p = n(885110),
  N = n(451478),
  S = n(630388),
  C = n(823379),
  A = n(591759),
  f = n(228488),
  Z = n(996106),
  L = n(914946),
  O = n(452426),
  v = n(561205),
  R = n(600027),
  P = n(852926),
  x = n(186901),
  M = n(981631);
async function D(e, t, n, s) {
  let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
    l = g.Z.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, L.t9)(s, l.party, l.secrets)) throw new Z.Z({
    errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let a = (0, _.Z)(l, p.Z);
  if (a) {
    let {
      lock: t
    } = (0, P.s0)(e);
    return (0, o.h7)(l, a).then(() => {
      throw t(), new Z.Z({
        errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await r.Z.sendActivityInviteUser({
    userId: n,
    type: s,
    activity: l,
    content: i,
    location: "In-Game Invite"
  })
}
t.Z = {
  [M.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [x.Gp.ANY]: [i.x.RPC, x.lH]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          pid: s
        }
      } = e, i = t.application.id;
      if (null == i) throw new Z.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      return D(s, i, n, M.mFx.JOIN)
    }
  },
  [M.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [x.Gp.ANY]: [i.x.RPC, x.lH]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, n = T.Z.getDMFromUserId(t);
      null != n && (0, u.In)(n, !0, !0)
    }
  },
  [M.Etm.ACTIVITY_INVITE_USER]: {
    scope: {
      [x.Gp.ANY]: [i.x.RPC, x.lH]
    },
    validation: e => (0, O.Z)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([M.mFx.JOIN]),
      content: e.string().min(0).max(1024),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: s,
          content: i,
          pid: l
        }
      } = e, a = t.application.id;
      if (null == a) throw new Z.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      return D(l, a, s, n, i)
    }
  },
  [M.Etm.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [x.Gp.ANY]: [i.x.RPC, x.lH]
    },
    validation: e => (0, O.Z)(e).required().keys({
      type: e.number().required().valid([M.mFx.JOIN]),
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
          user_id: s,
          session_id: i,
          channel_id: l,
          message_id: a
        }
      } = e, r = t.application.id;
      if (null == r) throw new Z.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      let o = Promise.resolve(!1);
      if (n === M.mFx.JOIN) o = c.Z.join({
        userId: s,
        sessionId: i,
        applicationId: r,
        channelId: l,
        messageId: a
      });
      return o.then(e => {
        if (!e) throw new Z.Z({
          errorCode: M.lTL.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [M.Etm.OPEN_INVITE_DIALOG]: {
    scope: {
      [x.Gp.ANY]: [i.x.RPC, x.lH, x.wE]
    },
    handler(e) {
      let {
        socket: t
      } = e, {
        channel: i,
        guild: l
      } = (0, R.T)(), r = m.Z.getWindow(M.KJ3.CHANNEL_CALL_POPOUT);
      (null == r ? void 0 : r.closed) && (r = null);
      let o = null != r ? M.IlC.POPOUT : M.IlC.APP;
      (0, f.Pr)({}, null == r ? void 0 : r.document), (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("7654")]).then(n.bind(n, 560114));
        return n => (0, s.jsx)(e, {
          ...n,
          guild: l,
          channel: i,
          applicationId: t.application.id,
          analyticsLocation: M.Sbl.ACTIVITY_RPC,
          source: M.t4x.ACTIVITY_INVITE
        })
      }, {
        contextKey: o === M.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
      })
    }
  },
  [M.Etm.INITIATE_IMAGE_UPLOAD]: (0, l.S)(M.Etm.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [x.Gp.ANY]: [i.x.RPC, x.lH, x.wE]
    },
    handler(e) {
      var t;
      let {
        socket: n
      } = e, s = n.application.id;
      if (null == s) throw new Z.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      let i = null === (t = (0, v.Z)()) || void 0 === t ? void 0 : t.id;
      if (null == i) throw new Z.Z({
        errorCode: M.lTL.UNKNOWN_ERROR
      }, "Unable to find selected channel");
      return new Promise((e, t) => {
        ! function(e, t) {
          var n;
          let s = N.Z.getLastFocusedWindowId(),
            i = null == s ? null : null === (n = (0, E.g0)(s)) || void 0 === n ? void 0 : n.renderWindow;
          if (null == i) throw new Z.Z({
            errorCode: M.lTL.UNKNOWN_ERROR
          }, "No valid window found");
          let l = i.document.createElement("input");
          l.style.display = "none", l.type = "file", l.accept = "image/jpeg, image/jpg, image/png, image/gif";
          let a = () => {
            (null == l.files || 0 === l.files.length) && t(), i.document.body.removeEventListener("focus", a, !0), setTimeout(() => {
              i.document.body.removeChild(l)
            }, 1e3)
          };
          l.addEventListener("change", () => {
            (0, C.lm)(l.files) && e(l.files[0]), a()
          }), l.addEventListener("cancel", () => {
            a()
          }), i.document.body.addEventListener("focus", a, !0), i.document.body.appendChild(l), l.click()
        }(async n => {
          let l = await (0, h.kv)(s, i, n);
          (0, C.lm)(l) && (0, C.lm)(l.url) && !(l instanceof d.Z) ? e({
            image_url: l.url
          }): t(l)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new Z.Z({
          errorCode: M.lTL.UNKNOWN_ERROR
        }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : "Failed to upload image")
      })
    }
  }),
  [M.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, l.S)(M.Etm.OPEN_SHARE_MOMENT_DIALOG, {
    scope: {
      [x.Gp.ANY]: [x.wE]
    },
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          mediaUrl: s
        }
      } = e;
      (0, L.bu)(n.transport);
      let i = n.application.id;
      if (null == i) throw new Z.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      if (!(0, S.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, M.udG.EMBEDDED)) throw new Z.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let l = (0, v.Z)();
      if (null == l) throw new Z.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No channel found");
      if (!A.Z.isDiscordCdnUrl(s)) throw new Z.Z({
        errorCode: M.lTL.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, I.Z)({
        applicationId: i,
        channelId: l.id,
        mediaUrl: s
      })
    }
  })
}