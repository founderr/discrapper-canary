n.d(t, {
  Z: function() {
    return P
  }
}), n(411104), n(47120);
var r, s, i, a, o = n(735250),
  l = n(470079),
  c = n(615231),
  u = n(261470),
  d = n(399606),
  h = n(544891),
  _ = n(481060),
  p = n(893776),
  f = n(99690),
  g = n(937154),
  E = n(388905),
  m = n(710845),
  I = n(314897),
  A = n(277390),
  N = n(585483),
  C = n(358085),
  T = n(172517),
  R = n(51144),
  x = n(998502),
  S = n(981631),
  b = n(231338),
  v = n(689938),
  O = n(397195),
  L = n(331651);
(i = r || (r = {}))[i.INITIALIZING = 0] = "INITIALIZING", i[i.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", i[i.PENDING_FINISH = 2] = "PENDING_FINISH", i[i.PENDING_TICKET = 3] = "PENDING_TICKET", i[i.PENDING_LOGIN = 4] = "PENDING_LOGIN", i[i.FINISH = 5] = "FINISH", (a = s || (s = {}))[a.QR_CODE = 0] = "QR_CODE", a[a.CONFIRM = 1] = "CONFIRM";
let Z = n(515695),
  M = new m.Z("LoginQRSocket");

function y(e) {
  let {
    text: t = ""
  } = e, [n, r] = l.useState(!1);
  return l.useEffect(() => {
    let e = new Image;
    e.src = Z, e.onload = () => r(!0), e.onerror = () => r(!0)
  }, [Z]), l.useEffect(() => {
    n && _.AccessibilityAnnouncer.announce(v.Z.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
  }, [n]), (0, o.jsx)("div", {
    className: O.qrCodeContainer,
    children: "" !== t && n ? (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)(A.ZP, {
        className: O.qrCode,
        size: 160,
        text: t
      }), (0, o.jsx)("div", {
        className: O.qrCodeOverlay,
        children: (0, o.jsx)("img", {
          src: Z,
          alt: ""
        })
      })]
    }) : (0, o.jsx)("div", {
      className: O.qrCodeOverlay,
      "aria-label": v.Z.Messages.LOGIN_WITH_QR_LOADING_LABEL,
      "aria-busy": !0,
      children: (0, o.jsx)(_.Spinner, {
        className: O.qrCode,
        type: _.Spinner.Type.WANDERING_CUBES,
        "aria-hidden": !0
      })
    })
  })
}
let D = e => {
  let {
    className: t,
    children: n
  } = e;
  return (0, o.jsx)(_.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: t,
    children: n
  })
};

function w(e) {
  let {
    state: t,
    cancel: n,
    errorMessage: r,
    conditionalMediationAbortController: s,
    isPasswordlessActive: i
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(y, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, o.jsx)(E.Dx, {
          className: L.marginBottom8,
          children: v.Z.Messages.LOGIN_WITH_QR
        }), null != r ? (0, o.jsx)(D, {
          children: r
        }) : (0, o.jsx)(E.DK, {
          children: v.Z.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
        }), (0, o.jsx)(_.Button, {
          size: _.ButtonSizes.LARGE,
          look: _.ButtonLooks.LINK,
          color: _.ButtonColors.LINK,
          disabled: i,
          onClick: () => (function(e) {
            let t = C.isPlatformEmbedded && x.ZP.supportsFeature(S.eRX.WEBAUTHN) ? x.ZP.webAuthnAuthenticate : e => {
              let t = (0, c.wz)(JSON.parse(e));
              return (0, c.U2)(t).then(e => JSON.stringify(e))
            };
            p.Z.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(s),
          children: v.Z.Messages.SIGN_IN_WITH_PASSKEY
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(f.Z, {
          className: O.qrAvatar,
          user: e,
          size: _.AvatarSizes.SIZE_120,
          isMobile: !0,
          status: b.Sk.ONLINE
        }), (0, o.jsx)(E.Dx, {
          className: L.marginBottom8,
          children: v.Z.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
        }), (0, o.jsx)(E.DK, {
          children: v.Z.Messages.LOGIN_AS.format({
            username: "".concat(R.ZP.getUserTag(e))
          })
        }), (0, o.jsx)(_.Button, {
          look: _.Button.Looks.BLANK,
          color: _.Button.Colors.LINK,
          size: _.Button.Sizes.MIN,
          onClick: n,
          className: O.startOverButton,
          children: v.Z.Messages.QR_CODE_LOGIN_START_OVER
        })]
      })
    }
    case 4:
    case 5:
      return (0, o.jsx)(_.Spinner, {
        type: _.Spinner.Type.WANDERING_CUBES
      })
  }
}

function P(e) {
  let {
    authTokenCallback: t,
    conditionalMediationAbortController: n
  } = e, r = (0, d.e7)([I.default], () => I.default.getIsPasswordlessActive()), {
    state: s,
    rsaKeyPair: i,
    cancel: a,
    handleFailure: c
  } = function(e) {
    let [t, n] = l.useState(0), [r, s] = l.useState(!1), [i, a] = l.useState({
      step: 0
    }), [o, c] = l.useState(null), d = (0, g.Z)(), h = l.useMemo(() => new u.Z(1500, 3e4), []), _ = l.useRef();
    _.current = l.useCallback(() => {
      a({
        step: 0
      }), d ? n(e => e + 1) : (M.info("document is not visible, will defer reconnection when document becomes visible."), s(!0))
    }, [d]);
    let p = l.useCallback(() => {
        (function(e) {
          let {
            current: t
          } = e;
          if (void 0 === t) throw Error("tried to unwrap an undefined value.");
          return t
        })(_)()
      }, [_]),
      f = l.useCallback(() => {
        M.error("Could not complete QR code login, trying to restart with a new QR code."), a({
          step: 0
        }), !h.pending && h.fail(p)
      }, [p, h]);
    return l.useEffect(() => {
      d && r && 0 === i.step && (M.info("reconnecting, now that document is visible"), s(!1), n(e => e + 1))
    }, [i, d, r, s]), l.useEffect(() => {
      let t = Date.now(),
        n = () => "".concat(Date.now() - t, "ms"),
        r = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        s = new WebSocket(r);
      M.info("[0ms] connecting to ".concat(r));
      let i = e => M.info("[".concat(n(), "] ").concat(e)),
        o = null,
        l = null,
        u = null,
        d = null,
        _ = !0;

      function g() {
        if (null != o) return o;
        throw Error("No key pair set")
      }
      let E = () => {
        _ ? (_ = !1, s.send(JSON.stringify({
          op: "heartbeat"
        }))) : (i("heartbeat timeout, reconnecting."), s.close(), f())
      };
      return s.onmessage = async t => {
        let {
          data: n
        } = t, r = JSON.parse(n);
        switch (r.op) {
          case "nonce_proof": {
            let e = r.encrypted_nonce,
              t = await (0, T.qd)(g(), e);
            i("computed nonce proof"), s.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            h.succeed(), N.S.dispatch(S.CkL.WAVE_EMPHASIZE);
            let e = await (0, T.Pk)(g());
            if (e !== r.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(r.fingerprint));
            i("handshake complete awaiting remote auth."), a({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = r.ticket;
            null == e && f(), a({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            N.S.dispatch(S.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
            let e = r.encrypted_user_payload;
            a({
              step: 3,
              user: await (0, T.Rq)(g(), e)
            });
            return
          }
          case "pending_finish": {
            N.S.dispatch(S.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
            let e = r.encrypted_user_payload;
            a({
              step: 2,
              user: await (0, T.Rq)(g(), e)
            });
            return
          }
          case "finish": {
            N.S.dispatch(S.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
            let t = r.encrypted_token;
            a({
              step: 5
            }), e(await (0, T.FW)(g(), t));
            return
          }
          case "cancel":
            i("remote auth handshake cancelled."), p();
            return;
          case "hello": {
            i("got hello, auth timeout=".concat(r.timeout_ms, "ms"));
            let e = r.heartbeat_interval;
            d = setTimeout(() => {
              d = null, E(), u = setInterval(E, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            _ = !0
        }
      }, s.onopen = async () => {
        o = await (0, T.W_)(), l = await (0, T.dK)(o);
        let e = await (0, T.Pk)(o);
        i("connected, handshaking with fingerprint: ".concat(e)), s.send(JSON.stringify({
          op: "init",
          encoded_public_key: l
        })), c(o)
      }, s.onclose = e => {
        i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), f()
      }, s.onerror = e => {
        i("disconnected, error: ".concat(JSON.stringify(e))), f()
      }, () => {
        i("cleaning up"), s.onopen = () => null, s.onmessage = () => null, s.onclose = () => null, s.onerror = () => null, s.close(1e3), h.cancel(), null != d && clearTimeout(d), null != u && clearInterval(u)
      }
    }, [p, e, t, h, f]), {
      state: i,
      rsaKeyPair: o,
      cancel: p,
      handleFailure: f
    }
  }(t), p = function(e) {
    switch (e) {
      case 0:
      case 1:
        return 0;
      case 3:
      case 2:
      case 4:
      case 5:
        return 1
    }
  }(s.step);
  return l.useEffect(() => {
    4 === s.step && null != s.ticket && h.tn.post({
      url: S.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: s.ticket
      },
      oldFormErrors: !0
    }).then(async e => {
      if (null != i) try {
        let n = await (0, T.FW)(i, e.body.encrypted_token);
        t(n)
      } catch (e) {
        c()
      } else c()
    }).catch(() => {
      c()
    })
  }, [s, t, i, c]), (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)("div", {
      className: O.verticalSeparator
    }), (0, o.jsx)(_.Sequencer, {
      fillParent: !0,
      className: O.qrLogin,
      step: p,
      steps: [0, 1],
      children: (0, o.jsx)("div", {
        className: O.qrLoginInner,
        children: (0, o.jsx)(w, {
          state: s,
          cancel: a,
          conditionalMediationAbortController: n,
          isPasswordlessActive: r
        })
      })
    })]
  })
}