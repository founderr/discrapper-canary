"use strict";
s.r(t), s.d(t, {
  MFAModal: function() {
    return b
  },
  MFASlides: function() {
    return y
  },
  openMFAModal: function() {
    return O
  }
}), s("47120"), s("757143"), s("773603"), s("411104");
var l = s("735250"),
  n = s("470079"),
  a = s("849055"),
  i = s("658550"),
  o = s("544891"),
  r = s("481060"),
  u = s("285952"),
  d = s("692437"),
  c = s("358085"),
  f = s("960048"),
  _ = s("998502"),
  h = s("48550"),
  m = s("981631"),
  E = s("689938"),
  x = s("577070");

function S(e) {
  let {
    subtitle: t,
    onClose: s
  } = e;
  return (0, l.jsxs)(r.ModalHeader, {
    direction: u.default.Direction.VERTICAL,
    className: x.header,
    separator: !1,
    children: [(0, l.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      children: E.default.Messages.MFA_V2_HEADER
    }), null != t && (0, l.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: x.subtitle,
      children: t
    }), (0, l.jsx)(r.ModalCloseButton, {
      className: x.closeButton,
      onClick: s
    })]
  })
}

function p(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)(r.ModalContent, {
    className: x.content,
    children: t
  })
}

function M(e) {
  let {
    error: t
  } = e;
  return null == t ? null : (0, l.jsx)(r.Text, {
    className: x.error,
    variant: "text-sm/normal",
    color: "text-danger",
    children: t
  })
}

function g(e) {
  let {
    request: t,
    setSlide: s,
    showConfirm: n = !1,
    ...a
  } = e, i = t.methods.length > 1;
  return i || n ? (0, l.jsxs)(r.ModalFooter, {
    className: x.footer,
    direction: n && !i ? u.default.Direction.HORIZONTAL_REVERSE : u.default.Direction.HORIZONTAL,
    children: [i && (0, l.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      onClick: () => s("select"),
      color: r.Button.Colors.PRIMARY,
      children: E.default.Messages.MFA_V2_GO_TO_SELECT
    }), n && (0, l.jsx)(r.Button, {
      type: "submit",
      ...a,
      children: E.default.Messages.CONFIRM
    })]
  }) : null
}

function C(e) {
  let {
    request: t,
    setSlide: s,
    onClose: n
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(S, {
      subtitle: E.default.Messages.MFA_V2_SELECT_HEADER,
      onClose: n
    }), (0, l.jsx)(p, {
      children: t.methods.map(e => (0, l.jsxs)(r.Clickable, {
        className: x.listItemContainer,
        onClick: () => {
          s(e.type)
        },
        children: [(0, l.jsx)(r.Text, {
          className: x.listItemText,
          variant: "text-md/semibold",
          children: h.SELECT_NAMES[e.type]
        }), (0, l.jsx)(d.default, {
          width: 20,
          height: 20,
          className: x.listItemArrow
        })]
      }, e.type))
    })]
  })
}

function A(e) {
  let {
    request: t,
    finish: s,
    setSlide: i,
    onClose: o
  } = e, [u, d] = n.useState(!1), [h, x] = n.useState(null), {
    challenge: C
  } = t.methods.find(e => "webauthn" === e.type), A = async () => {
    d(!0), x(null);
    let e = c.isPlatformEmbedded && _.default.supportsFeature(m.NativeFeatures.WEBAUTHN) ? _.default.webAuthnAuthenticate(C) : a.get(JSON.parse(C)).then(e => JSON.stringify(e)),
      t = async e => {
        try {
          await s({
            mfaType: "webauthn",
            data: e
          })
        } catch (e) {
          var t;
          x(null !== (t = e.message) && void 0 !== t ? t : E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
        }
      };
    try {
      let s = await e;
      await t(s)
    } catch (e) {
      f.default.captureException(e), x(E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
    } finally {
      d(!1)
    }
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(S, {
      onClose: o
    }), (0, l.jsxs)(p, {
      children: [(0, l.jsx)(r.Button, {
        submitting: u,
        onClick: A,
        children: E.default.Messages.MFA_V2_WEBAUTHN_CTA
      }), (0, l.jsx)(M, {
        error: h
      })]
    }), (0, l.jsx)(g, {
      request: t,
      setSlide: i
    })]
  })
}

function T(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: o,
    isSlideReady: u
  } = e, [d, c] = n.useState(!1), [f, _] = n.useState(null), [h, m] = n.useState(""), x = n.useRef(null), C = E.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, A = E.default.Messages.TWO_FA_BACKUP_CODE, T = n.useCallback(e => {
    m(e), _(null)
  }, [m, _]);
  return n.useEffect(() => {
    if (u) {
      var e;
      null === (e = x.current) || void 0 === e || e.focus()
    }
  }, [u]), (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), c(!0), s({
        mfaType: "backup",
        data: h.replace(/-/g, "")
      }).catch(e => {
        var t, s;
        _(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        c(!1)
      })
    },
    children: [(0, l.jsx)(S, {
      onClose: o
    }), (0, l.jsx)(p, {
      children: (0, l.jsxs)(r.FormItem, {
        title: C,
        children: [(0, l.jsx)(r.TextInput, {
          inputRef: x,
          onChange: T,
          placeholder: A,
          maxLength: i.BACKUP_CODE_MAX_LENGTH,
          minLength: i.BACKUP_CODE_MIN_LENGTH,
          value: h,
          spellCheck: "false",
          disabled: d
        }), (0, l.jsx)(M, {
          error: f
        })]
      })
    }), (0, l.jsx)(g, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: h.length < 8,
      submitting: d
    })]
  })
}

function j(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: o,
    isSlideReady: u
  } = e, [d, c] = n.useState(!1), [f, _] = n.useState(null), [h, m] = n.useState(""), x = n.useRef(null);
  return n.useEffect(() => {
    if (u) {
      var e;
      null === (e = x.current) || void 0 === e || e.focus()
    }
  }, [u]), (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), c(!0), s({
        mfaType: "totp",
        data: h
      }).catch(e => {
        var t, s;
        _(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        c(!1)
      })
    },
    children: [(0, l.jsx)(S, {
      onClose: o
    }), (0, l.jsx)(p, {
      children: (0, l.jsxs)(r.FormItem, {
        title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
        children: [(0, l.jsx)(r.TextInput, {
          inputRef: x,
          onChange: m,
          placeholder: E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
          maxLength: i.TOTP_CODE_LENGTH,
          minLength: i.TOTP_CODE_LENGTH,
          value: h,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: d
        }), (0, l.jsx)(M, {
          error: f
        })]
      })
    }), (0, l.jsx)(g, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: h.length !== i.TOTP_CODE_LENGTH,
      submitting: d
    })]
  })
}

function N(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: u,
    isSlideReady: d
  } = e, [c, f] = n.useState(!1), [_, h] = n.useState(null), [C, A] = n.useState(!1), [T, j] = n.useState(null), [N, v] = n.useState(""), b = n.useRef(null);
  n.useEffect(() => {
    f(!0), o.HTTP.post({
      url: m.Endpoints.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: !0
    }).then(e => {
      h(e.body.phone)
    }).catch(e => {
      var t;
      j(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
    }).finally(() => {
      f(!1)
    })
  }, [t.ticket]), n.useEffect(() => {
    if (d) {
      var e;
      null === (e = b.current) || void 0 === e || e.focus()
    }
  }, [d]);
  let y = null == _ ? E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
    phoneNumber: _
  });
  return (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), A(!0), s({
        mfaType: "sms",
        data: N
      }).catch(e => {
        var t, s;
        j(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        A(!1)
      })
    },
    children: [(0, l.jsx)(S, {
      subtitle: y,
      onClose: u
    }), (0, l.jsx)(p, {
      children: (0, l.jsxs)(r.FormItem, {
        title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
        children: [(0, l.jsxs)("div", {
          className: x.smsInputContainer,
          children: [(0, l.jsx)(r.TextInput, {
            className: x.smsInput,
            inputRef: b,
            onChange: v,
            placeholder: E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
            maxLength: 10,
            value: N,
            autoComplete: "one-time-code",
            spellCheck: "false",
            disabled: C
          }), (0, l.jsx)(r.Button, {
            size: r.Button.Sizes.MEDIUM,
            submitting: c,
            onClick: () => {
              o.HTTP.post({
                url: m.Endpoints.LOGIN_SMS_SEND,
                body: {
                  ticket: t.ticket
                },
                oldFormErrors: !0
              }).then(e => {
                h(e.body.phone)
              }).catch(e => {
                var t;
                j(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
              })
            },
            children: E.default.Messages.MFA_SMS_RESEND
          })]
        }), (0, l.jsx)(M, {
          error: T
        })]
      })
    }), (0, l.jsx)(g, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: N.length !== i.SMS_CODE_LENGTH,
      submitting: C
    })]
  })
}

function v(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: i,
    isSlideReady: o
  } = e, [u, d] = n.useState(!1), [c, f] = n.useState(null), [_, h] = n.useState(""), m = n.useRef(null);
  return n.useEffect(() => {
    if (o) {
      var e;
      null === (e = m.current) || void 0 === e || e.focus()
    }
  }, [o]), (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), d(!0), s({
        mfaType: "password",
        data: _
      }).catch(e => {
        var t, s;
        f(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        d(!1)
      })
    },
    children: [(0, l.jsx)(S, {
      onClose: i
    }), (0, l.jsx)(p, {
      children: (0, l.jsxs)(r.FormItem, {
        title: E.default.Messages.FORM_LABEL_PASSWORD,
        children: [(0, l.jsx)(r.TextInput, {
          inputRef: m,
          onChange: h,
          value: _,
          type: "password",
          autoComplete: "password",
          spellCheck: "false",
          disabled: u
        }), (0, l.jsx)(M, {
          error: c
        })]
      })
    }), (0, l.jsx)(g, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: 0 === _.length,
      submitting: u
    })]
  })
}

function b(e) {
  let {
    transitionState: t,
    request: s,
    finish: n,
    onClose: a
  } = e;
  return (0, l.jsx)(r.ModalRoot, {
    transitionState: t,
    size: r.ModalSize.SMALL,
    "aria-label": E.default.Messages.MFA_V2_HEADER,
    children: (0, l.jsx)(y, {
      request: s,
      mfaFinish: n,
      onClose: a,
      onEarlyClose: a
    })
  })
}

function y(e) {
  var t, s;
  let {
    request: a,
    mfaFinish: i,
    onEarlyClose: o,
    onClose: u,
    width: d = 440
  } = e, [c, f] = n.useState(null !== (s = null === (t = a.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== s ? s : "select"), [_, h] = n.useState(c), m = async e => {
    let {
      mfaType: t,
      data: s
    } = e;
    await i({
      mfaType: t,
      data: s,
      ticket: a.ticket
    }), null != u && u()
  }, E = {
    request: a,
    finish: m,
    setSlide: f,
    onClose: o
  };
  return (0, l.jsxs)(r.Slides, {
    activeSlide: c,
    width: d,
    onSlideReady: h,
    children: [(0, l.jsx)(r.Slide, {
      id: "select",
      children: (0, l.jsx)(C, {
        ...E
      })
    }), (0, l.jsx)(r.Slide, {
      id: "webauthn",
      children: (0, l.jsx)(A, {
        ...E
      })
    }), (0, l.jsx)(r.Slide, {
      id: "totp",
      children: (0, l.jsx)(j, {
        ...E,
        isSlideReady: "totp" === _
      })
    }), (0, l.jsx)(r.Slide, {
      id: "sms",
      children: (0, l.jsx)(N, {
        ...E,
        isSlideReady: "sms" === _
      })
    }), (0, l.jsx)(r.Slide, {
      id: "backup",
      children: (0, l.jsx)(T, {
        ...E,
        isSlideReady: "backup" === _
      })
    }), (0, l.jsx)(r.Slide, {
      id: "password",
      children: (0, l.jsx)(v, {
        ...E,
        isSlideReady: "password" === _
      })
    })]
  })
}

function O(e, t, s) {
  (0, r.openModal)(s => (0, l.jsx)(b, {
    finish: t,
    request: e,
    ...s
  }), {
    onCloseCallback: () => {
      s(Error(E.default.Messages.MFA_V2_CANCELED))
    }
  })
}