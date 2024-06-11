"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("411104"), n("47120");
var s, a, i, l, r = n("735250"),
  o = n("470079"),
  u = n("615231"),
  d = n("261470"),
  c = n("399606"),
  f = n("544891"),
  h = n("481060"),
  E = n("893776"),
  g = n("99690"),
  m = n("937154"),
  _ = n("710845"),
  p = n("314897"),
  T = n("277390"),
  S = n("819570"),
  A = n("585483"),
  I = n("358085"),
  N = n("172517"),
  R = n("51144"),
  C = n("998502"),
  O = n("981631"),
  v = n("231338"),
  L = n("689938"),
  M = n("531690"),
  x = n("611273");
(i = s || (s = {}))[i.INITIALIZING = 0] = "INITIALIZING", i[i.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", i[i.PENDING_FINISH = 2] = "PENDING_FINISH", i[i.PENDING_TICKET = 3] = "PENDING_TICKET", i[i.PENDING_LOGIN = 4] = "PENDING_LOGIN", i[i.FINISH = 5] = "FINISH", (l = a || (a = {}))[l.QR_CODE = 0] = "QR_CODE", l[l.CONFIRM = 1] = "CONFIRM";
let y = n("515695"),
  b = new _.default("LoginQRSocket");

function D(e) {
  let {
    text: t = ""
  } = e, [n, s] = o.useState(!1);
  return o.useEffect(() => {
    let e = new Image;
    e.src = y, e.onload = () => s(!0), e.onerror = () => s(!0)
  }, [y]), o.useEffect(() => {
    n && h.AccessibilityAnnouncer.announce(L.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
  }, [n]), (0, r.jsx)("div", {
    className: M.qrCodeContainer,
    children: "" !== t && n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(T.default, {
        className: M.qrCode,
        size: 160,
        text: t
      }), (0, r.jsx)("div", {
        className: M.qrCodeOverlay,
        children: (0, r.jsx)("img", {
          src: y,
          alt: ""
        })
      })]
    }) : (0, r.jsx)("div", {
      className: M.qrCodeOverlay,
      "aria-label": L.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
      "aria-busy": !0,
      children: (0, r.jsx)(h.Spinner, {
        className: M.qrCode,
        type: h.Spinner.Type.WANDERING_CUBES,
        "aria-hidden": !0
      })
    })
  })
}
let U = e => {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)(h.Text, {
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
    hasPasswordlessExperiment: a,
    conditionalMediationAbortController: i,
    isPasswordlessActive: l
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, r.jsx)(S.Title, {
          className: x.marginBottom8,
          children: L.default.Messages.LOGIN_WITH_QR
        }), null != s ? (0, r.jsx)(U, {
          children: s
        }) : (0, r.jsx)(S.SubTitle, {
          children: L.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
        }), a && (0, r.jsx)(h.Button, {
          size: h.ButtonSizes.LARGE,
          look: h.ButtonLooks.LINK,
          color: h.ButtonColors.LINK,
          disabled: l,
          onClick: () => (function(e) {
            let t = I.isPlatformEmbedded && C.default.supportsFeature(O.NativeFeatures.WEBAUTHN) ? C.default.webAuthnAuthenticate : e => {
              let t = (0, u.parseRequestOptionsFromJSON)(JSON.parse(e));
              return (0, u.get)(t).then(e => JSON.stringify(e))
            };
            E.default.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(i),
          children: L.default.Messages.SIGN_IN_WITH_PASSKEY
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.default, {
          className: M.qrAvatar,
          user: e,
          size: h.AvatarSizes.SIZE_120,
          isMobile: !0,
          status: v.StatusTypes.ONLINE
        }), (0, r.jsx)(S.Title, {
          className: x.marginBottom8,
          children: L.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
        }), (0, r.jsx)(S.SubTitle, {
          children: L.default.Messages.LOGIN_AS.format({
            username: "".concat(R.default.getUserTag(e))
          })
        }), (0, r.jsx)(h.Button, {
          look: h.Button.Looks.BLANK,
          color: h.Button.Colors.LINK,
          size: h.Button.Sizes.MIN,
          onClick: n,
          className: M.startOverButton,
          children: L.default.Messages.QR_CODE_LOGIN_START_OVER
        })]
      })
    }
    case 4:
    case 5:
      return (0, r.jsx)(h.Spinner, {
        type: h.Spinner.Type.WANDERING_CUBES
      })
  }
}

function G(e) {
  let {
    authTokenCallback: t,
    hasPasswordlessExperiment: n,
    conditionalMediationAbortController: s
  } = e, a = (0, c.useStateFromStores)([p.default], () => p.default.getIsPasswordlessActive()), {
    state: i,
    rsaKeyPair: l,
    cancel: u,
    handleFailure: E
  } = function(e) {
    let [t, n] = o.useState(0), [s, a] = o.useState(!1), [i, l] = o.useState({
      step: 0
    }), [r, u] = o.useState(null), c = (0, m.default)(), f = o.useMemo(() => new d.default(1500, 3e4), []), h = o.useRef();
    h.current = o.useCallback(() => {
      l({
        step: 0
      }), c ? n(e => e + 1) : (b.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
    }, [c]);
    let E = o.useCallback(() => {
        (function(e) {
          let {
            current: t
          } = e;
          if (void 0 === t) throw Error("tried to unwrap an undefined value.");
          return t
        })(h)()
      }, [h]),
      g = o.useCallback(() => {
        b.error("Could not complete QR code login, trying to restart with a new QR code."), l({
          step: 0
        }), !f.pending && f.fail(E)
      }, [E, f]);
    return o.useEffect(() => {
      c && s && 0 === i.step && (b.info("reconnecting, now that document is visible"), a(!1), n(e => e + 1))
    }, [i, c, s, a]), o.useEffect(() => {
      let t = Date.now(),
        n = () => "".concat(Date.now() - t, "ms"),
        s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        a = new WebSocket(s);
      b.info("[0ms] connecting to ".concat(s));
      let i = e => b.info("[".concat(n(), "] ").concat(e)),
        r = null,
        o = null,
        d = null,
        c = null,
        h = !0;

      function m() {
        if (null != r) return r;
        throw Error("No key pair set")
      }
      let _ = () => {
        h ? (h = !1, a.send(JSON.stringify({
          op: "heartbeat"
        }))) : (i("heartbeat timeout, reconnecting."), a.close(), g())
      };
      return a.onmessage = async t => {
        let {
          data: n
        } = t, s = JSON.parse(n);
        switch (s.op) {
          case "nonce_proof": {
            let e = s.encrypted_nonce,
              t = await (0, N.decryptNonce)(m(), e);
            i("computed nonce proof"), a.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            f.succeed(), A.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE);
            let e = await (0, N.publicKeyFingerprint)(m());
            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
            i("handshake complete awaiting remote auth."), l({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = s.ticket;
            null == e && g(), l({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            A.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
            let e = s.encrypted_user_payload;
            l({
              step: 3,
              user: await (0, N.decodeEncodedUserRecord)(m(), e)
            });
            return
          }
          case "pending_finish": {
            A.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
            let e = s.encrypted_user_payload;
            l({
              step: 2,
              user: await (0, N.decodeEncodedUserRecord)(m(), e)
            });
            return
          }
          case "finish": {
            A.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake finished.");
            let t = s.encrypted_token;
            l({
              step: 5
            }), e(await (0, N.decryptEncodedCiphertext)(m(), t));
            return
          }
          case "cancel":
            i("remote auth handshake cancelled."), E();
            return;
          case "hello": {
            i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
            let e = s.heartbeat_interval;
            c = setTimeout(() => {
              c = null, _(), d = setInterval(_, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            h = !0
        }
      }, a.onopen = async () => {
        r = await (0, N.generateRsaKeyPair)(), o = await (0, N.serializePublicKey)(r);
        let e = await (0, N.publicKeyFingerprint)(r);
        i("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
          op: "init",
          encoded_public_key: o
        })), u(r)
      }, a.onclose = e => {
        i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), g()
      }, a.onerror = e => {
        i("disconnected, error: ".concat(JSON.stringify(e))), g()
      }, () => {
        i("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), f.cancel(), null != c && clearTimeout(c), null != d && clearInterval(d)
      }
    }, [E, e, t, f, g]), {
      state: i,
      rsaKeyPair: r,
      cancel: E,
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
  return o.useEffect(() => {
    4 === i.step && null != i.ticket && f.HTTP.post({
      url: O.Endpoints.REMOTE_AUTH_LOGIN,
      body: {
        ticket: i.ticket
      },
      oldFormErrors: !0
    }).then(async e => {
      if (null != l) try {
        let n = await (0, N.decryptEncodedCiphertext)(l, e.body.encrypted_token);
        t(n)
      } catch (e) {
        E()
      } else E()
    }).catch(() => {
      E()
    })
  }, [i, t, l, E]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: M.verticalSeparator
    }), (0, r.jsx)(h.Sequencer, {
      fillParent: !0,
      className: M.qrLogin,
      step: g,
      steps: [0, 1],
      children: (0, r.jsx)("div", {
        className: M.qrLoginInner,
        children: (0, r.jsx)(P, {
          state: i,
          cancel: u,
          hasPasswordlessExperiment: n,
          conditionalMediationAbortController: s,
          isPasswordlessActive: a
        })
      })
    })]
  })
}