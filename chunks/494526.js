n.d(t, {
  Z: function() {
    return w
  }
}), n(411104), n(47120);
var s, r, i, a, o = n(735250),
  l = n(470079),
  c = n(615231),
  u = n(261470),
  d = n(399606),
  h = n(544891),
  E = n(481060),
  _ = n(893776),
  g = n(99690),
  p = n(937154),
  f = n(388905),
  m = n(710845),
  N = n(314897),
  I = n(277390),
  A = n(585483),
  R = n(358085),
  T = n(172517),
  C = n(51144),
  S = n(998502),
  x = n(981631),
  O = n(231338),
  v = n(689938),
  Z = n(397195),
  L = n(331651);
(i = s || (s = {}))[i.INITIALIZING = 0] = "INITIALIZING", i[i.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", i[i.PENDING_FINISH = 2] = "PENDING_FINISH", i[i.PENDING_TICKET = 3] = "PENDING_TICKET", i[i.PENDING_LOGIN = 4] = "PENDING_LOGIN", i[i.FINISH = 5] = "FINISH", (a = r || (r = {}))[a.QR_CODE = 0] = "QR_CODE", a[a.CONFIRM = 1] = "CONFIRM";
let b = n(515695),
  M = new m.Z("LoginQRSocket");

function y(e) {
  let {
    text: t = ""
  } = e, [n, s] = l.useState(!1);
  return l.useEffect(() => {
    let e = new Image;
    e.src = b, e.onload = () => s(!0), e.onerror = () => s(!0)
  }, [b]), l.useEffect(() => {
    n && E.AccessibilityAnnouncer.announce(v.Z.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
  }, [n]), (0, o.jsx)("div", {
    className: Z.qrCodeContainer,
    children: "" !== t && n ? (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)(I.ZP, {
        className: Z.qrCode,
        size: 160,
        text: t
      }), (0, o.jsx)("div", {
        className: Z.qrCodeOverlay,
        children: (0, o.jsx)("img", {
          src: b,
          alt: ""
        })
      })]
    }) : (0, o.jsx)("div", {
      className: Z.qrCodeOverlay,
      "aria-label": v.Z.Messages.LOGIN_WITH_QR_LOADING_LABEL,
      "aria-busy": !0,
      children: (0, o.jsx)(E.Spinner, {
        className: Z.qrCode,
        type: E.Spinner.Type.WANDERING_CUBES,
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
  return (0, o.jsx)(E.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: t,
    children: n
  })
};

function P(e) {
  let {
    state: t,
    cancel: n,
    errorMessage: s,
    hasPasswordlessExperiment: r,
    conditionalMediationAbortController: i,
    isPasswordlessActive: a
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(y, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, o.jsx)(f.Dx, {
          className: L.marginBottom8,
          children: v.Z.Messages.LOGIN_WITH_QR
        }), null != s ? (0, o.jsx)(D, {
          children: s
        }) : (0, o.jsx)(f.DK, {
          children: v.Z.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
        }), r && (0, o.jsx)(E.Button, {
          size: E.ButtonSizes.LARGE,
          look: E.ButtonLooks.LINK,
          color: E.ButtonColors.LINK,
          disabled: a,
          onClick: () => (function(e) {
            let t = R.isPlatformEmbedded && S.ZP.supportsFeature(x.eRX.WEBAUTHN) ? S.ZP.webAuthnAuthenticate : e => {
              let t = (0, c.wz)(JSON.parse(e));
              return (0, c.U2)(t).then(e => JSON.stringify(e))
            };
            _.Z.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(i),
          children: v.Z.Messages.SIGN_IN_WITH_PASSKEY
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(g.Z, {
          className: Z.qrAvatar,
          user: e,
          size: E.AvatarSizes.SIZE_120,
          isMobile: !0,
          status: O.Sk.ONLINE
        }), (0, o.jsx)(f.Dx, {
          className: L.marginBottom8,
          children: v.Z.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
        }), (0, o.jsx)(f.DK, {
          children: v.Z.Messages.LOGIN_AS.format({
            username: "".concat(C.ZP.getUserTag(e))
          })
        }), (0, o.jsx)(E.Button, {
          look: E.Button.Looks.BLANK,
          color: E.Button.Colors.LINK,
          size: E.Button.Sizes.MIN,
          onClick: n,
          className: Z.startOverButton,
          children: v.Z.Messages.QR_CODE_LOGIN_START_OVER
        })]
      })
    }
    case 4:
    case 5:
      return (0, o.jsx)(E.Spinner, {
        type: E.Spinner.Type.WANDERING_CUBES
      })
  }
}

function w(e) {
  let {
    authTokenCallback: t,
    hasPasswordlessExperiment: n,
    conditionalMediationAbortController: s
  } = e, r = (0, d.e7)([N.default], () => N.default.getIsPasswordlessActive()), {
    state: i,
    rsaKeyPair: a,
    cancel: c,
    handleFailure: _
  } = function(e) {
    let [t, n] = l.useState(0), [s, r] = l.useState(!1), [i, a] = l.useState({
      step: 0
    }), [o, c] = l.useState(null), d = (0, p.Z)(), h = l.useMemo(() => new u.Z(1500, 3e4), []), E = l.useRef();
    E.current = l.useCallback(() => {
      a({
        step: 0
      }), d ? n(e => e + 1) : (M.info("document is not visible, will defer reconnection when document becomes visible."), r(!0))
    }, [d]);
    let _ = l.useCallback(() => {
        (function(e) {
          let {
            current: t
          } = e;
          if (void 0 === t) throw Error("tried to unwrap an undefined value.");
          return t
        })(E)()
      }, [E]),
      g = l.useCallback(() => {
        M.error("Could not complete QR code login, trying to restart with a new QR code."), a({
          step: 0
        }), !h.pending && h.fail(_)
      }, [_, h]);
    return l.useEffect(() => {
      d && s && 0 === i.step && (M.info("reconnecting, now that document is visible"), r(!1), n(e => e + 1))
    }, [i, d, s, r]), l.useEffect(() => {
      let t = Date.now(),
        n = () => "".concat(Date.now() - t, "ms"),
        s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        r = new WebSocket(s);
      M.info("[0ms] connecting to ".concat(s));
      let i = e => M.info("[".concat(n(), "] ").concat(e)),
        o = null,
        l = null,
        u = null,
        d = null,
        E = !0;

      function p() {
        if (null != o) return o;
        throw Error("No key pair set")
      }
      let f = () => {
        E ? (E = !1, r.send(JSON.stringify({
          op: "heartbeat"
        }))) : (i("heartbeat timeout, reconnecting."), r.close(), g())
      };
      return r.onmessage = async t => {
        let {
          data: n
        } = t, s = JSON.parse(n);
        switch (s.op) {
          case "nonce_proof": {
            let e = s.encrypted_nonce,
              t = await (0, T.qd)(p(), e);
            i("computed nonce proof"), r.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            h.succeed(), A.S.dispatch(x.CkL.WAVE_EMPHASIZE);
            let e = await (0, T.Pk)(p());
            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
            i("handshake complete awaiting remote auth."), a({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = s.ticket;
            null == e && g(), a({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            A.S.dispatch(x.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
            let e = s.encrypted_user_payload;
            a({
              step: 3,
              user: await (0, T.Rq)(p(), e)
            });
            return
          }
          case "pending_finish": {
            A.S.dispatch(x.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
            let e = s.encrypted_user_payload;
            a({
              step: 2,
              user: await (0, T.Rq)(p(), e)
            });
            return
          }
          case "finish": {
            A.S.dispatch(x.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
            let t = s.encrypted_token;
            a({
              step: 5
            }), e(await (0, T.FW)(p(), t));
            return
          }
          case "cancel":
            i("remote auth handshake cancelled."), _();
            return;
          case "hello": {
            i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
            let e = s.heartbeat_interval;
            d = setTimeout(() => {
              d = null, f(), u = setInterval(f, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            E = !0
        }
      }, r.onopen = async () => {
        o = await (0, T.W_)(), l = await (0, T.dK)(o);
        let e = await (0, T.Pk)(o);
        i("connected, handshaking with fingerprint: ".concat(e)), r.send(JSON.stringify({
          op: "init",
          encoded_public_key: l
        })), c(o)
      }, r.onclose = e => {
        i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), g()
      }, r.onerror = e => {
        i("disconnected, error: ".concat(JSON.stringify(e))), g()
      }, () => {
        i("cleaning up"), r.onopen = () => null, r.onmessage = () => null, r.onclose = () => null, r.onerror = () => null, r.close(1e3), h.cancel(), null != d && clearTimeout(d), null != u && clearInterval(u)
      }
    }, [_, e, t, h, g]), {
      state: i,
      rsaKeyPair: o,
      cancel: _,
      handleFailure: g
    }
  }(t), g = function(e) {
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
  }(i.step);
  return l.useEffect(() => {
    4 === i.step && null != i.ticket && h.tn.post({
      url: x.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: i.ticket
      },
      oldFormErrors: !0
    }).then(async e => {
      if (null != a) try {
        let n = await (0, T.FW)(a, e.body.encrypted_token);
        t(n)
      } catch (e) {
        _()
      } else _()
    }).catch(() => {
      _()
    })
  }, [i, t, a, _]), (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)("div", {
      className: Z.verticalSeparator
    }), (0, o.jsx)(E.Sequencer, {
      fillParent: !0,
      className: Z.qrLogin,
      step: g,
      steps: [0, 1],
      children: (0, o.jsx)("div", {
        className: Z.qrLoginInner,
        children: (0, o.jsx)(P, {
          state: i,
          cancel: c,
          hasPasswordlessExperiment: n,
          conditionalMediationAbortController: s,
          isPasswordlessActive: r
        })
      })
    })]
  })
}