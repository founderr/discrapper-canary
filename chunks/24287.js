"use strict";
s.r(t), s.d(t, {
  MFAModal: function() {
    return N
  },
  MFASlides: function() {
    return T
  },
  openMFAModal: function() {
    return R
  }
}), s("222007"), s("781738"), s("506083"), s("70102");
var n = s("37983"),
  l = s("884691"),
  a = s("376507"),
  r = s("310379"),
  i = s("872717"),
  o = s("77078"),
  u = s("145131"),
  d = s("772280"),
  c = s("773336"),
  f = s("286235"),
  h = s("50885"),
  m = s("695501"),
  p = s("49111"),
  _ = s("782340"),
  g = s("992279");

function E(e) {
  let {
    subtitle: t,
    onClose: s
  } = e;
  return (0, n.jsxs)(o.ModalHeader, {
    direction: u.default.Direction.VERTICAL,
    className: g.header,
    separator: !1,
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      children: _.default.Messages.MFA_V2_HEADER
    }), null != t && (0, n.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: g.subtitle,
      children: t
    }), (0, n.jsx)(o.ModalCloseButton, {
      className: g.closeButton,
      onClick: s
    })]
  })
}

function x(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)(o.ModalContent, {
    className: g.content,
    children: t
  })
}

function A(e) {
  let {
    error: t
  } = e;
  return null == t ? null : (0, n.jsx)(o.Text, {
    className: g.error,
    variant: "text-sm/normal",
    color: "text-danger",
    children: t
  })
}

function S(e) {
  let {
    request: t,
    setSlide: s,
    showConfirm: l = !1,
    ...a
  } = e, r = t.methods.length > 1;
  return r || l ? (0, n.jsxs)(o.ModalFooter, {
    className: g.footer,
    direction: l && !r ? u.default.Direction.HORIZONTAL_REVERSE : u.default.Direction.HORIZONTAL,
    children: [r && (0, n.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      onClick: () => s("select"),
      color: o.Button.Colors.PRIMARY,
      children: _.default.Messages.MFA_V2_GO_TO_SELECT
    }), l && (0, n.jsx)(o.Button, {
      type: "submit",
      ...a,
      children: _.default.Messages.CONFIRM
    })]
  }) : null
}

function C(e) {
  let {
    request: t,
    setSlide: s,
    onClose: l
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(E, {
      subtitle: _.default.Messages.MFA_V2_SELECT_HEADER,
      onClose: l
    }), (0, n.jsx)(x, {
      children: t.methods.map(e => (0, n.jsxs)(o.Clickable, {
        className: g.listItemContainer,
        onClick: () => {
          s(e.type)
        },
        children: [(0, n.jsx)(o.Text, {
          className: g.listItemText,
          variant: "text-md/semibold",
          children: m.SELECT_NAMES[e.type]
        }), (0, n.jsx)(d.default, {
          width: 20,
          height: 20,
          className: g.listItemArrow
        })]
      }, e.type))
    })]
  })
}

function M(e) {
  let {
    request: t,
    finish: s,
    setSlide: r,
    onClose: i
  } = e, [u, d] = l.useState(!1), [m, g] = l.useState(null), {
    challenge: C
  } = t.methods.find(e => "webauthn" === e.type), M = async () => {
    d(!0), g(null);
    let e = c.isPlatformEmbedded && h.default.supportsFeature(p.NativeFeatures.WEBAUTHN) ? h.default.webAuthnAuthenticate(C) : a.get(JSON.parse(C)).then(e => JSON.stringify(e)),
      t = async e => {
        try {
          await s({
            mfaType: "webauthn",
            data: e
          })
        } catch (e) {
          var t;
          g(null !== (t = e.message) && void 0 !== t ? t : _.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
        }
      };
    try {
      let s = await e;
      await t(s)
    } catch (e) {
      f.default.captureException(e), g(_.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
    } finally {
      d(!1)
    }
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(E, {
      onClose: i
    }), (0, n.jsxs)(x, {
      children: [(0, n.jsx)(o.Button, {
        submitting: u,
        onClick: M,
        children: _.default.Messages.MFA_V2_WEBAUTHN_CTA
      }), (0, n.jsx)(A, {
        error: m
      })]
    }), (0, n.jsx)(S, {
      request: t,
      setSlide: r
    })]
  })
}

function v(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: i,
    isSlideReady: u
  } = e, [d, c] = l.useState(!1), [f, h] = l.useState(null), [m, p] = l.useState(""), g = l.useRef(null), C = _.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, M = _.default.Messages.TWO_FA_BACKUP_CODE, v = l.useCallback(e => {
    p(e), h(null)
  }, [p, h]);
  return l.useEffect(() => {
    if (u) {
      var e;
      null === (e = g.current) || void 0 === e || e.focus()
    }
  }, [u]), (0, n.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), c(!0), s({
        mfaType: "backup",
        data: m.replace(/-/g, "")
      }).catch(e => {
        var t, s;
        h(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        c(!1)
      })
    },
    children: [(0, n.jsx)(E, {
      onClose: i
    }), (0, n.jsx)(x, {
      children: (0, n.jsxs)(o.FormItem, {
        title: C,
        children: [(0, n.jsx)(o.TextInput, {
          inputRef: g,
          onChange: v,
          placeholder: M,
          maxLength: r.BACKUP_CODE_MAX_LENGTH,
          minLength: r.BACKUP_CODE_MIN_LENGTH,
          value: m,
          spellCheck: "false",
          disabled: d
        }), (0, n.jsx)(A, {
          error: f
        })]
      })
    }), (0, n.jsx)(S, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: m.length < 8,
      submitting: d
    })]
  })
}

function j(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: r,
    isSlideReady: i
  } = e, [u, d] = l.useState(!1), [c, f] = l.useState(null), [h, m] = l.useState(""), p = l.useRef(null);
  return l.useEffect(() => {
    if (i) {
      var e;
      null === (e = p.current) || void 0 === e || e.focus()
    }
  }, [i]), (0, n.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), d(!0), s({
        mfaType: "totp",
        data: h
      }).catch(e => {
        var t, s;
        f(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        d(!1)
      })
    },
    children: [(0, n.jsx)(E, {
      onClose: r
    }), (0, n.jsx)(x, {
      children: (0, n.jsxs)(o.FormItem, {
        title: _.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
        children: [(0, n.jsx)(o.TextInput, {
          inputRef: p,
          onChange: m,
          placeholder: _.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
          maxLength: 6,
          minLength: 6,
          value: h,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: u
        }), (0, n.jsx)(A, {
          error: c
        })]
      })
    }), (0, n.jsx)(S, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: 0 === h.length,
      submitting: u
    })]
  })
}

function y(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: r,
    isSlideReady: u
  } = e, [d, c] = l.useState(!1), [f, h] = l.useState(null), [m, C] = l.useState(!1), [M, v] = l.useState(null), [j, y] = l.useState(""), b = l.useRef(null);
  l.useEffect(() => {
    c(!0), i.default.post({
      url: p.Endpoints.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: !0
    }).then(e => {
      h(e.body.phone)
    }).catch(e => {
      var t;
      v(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
    }).finally(() => {
      c(!1)
    })
  }, [t.ticket]), l.useEffect(() => {
    if (u) {
      var e;
      null === (e = b.current) || void 0 === e || e.focus()
    }
  }, [u]);
  let N = null == f ? _.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : _.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
    phoneNumber: f
  });
  return (0, n.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), C(!0), s({
        mfaType: "sms",
        data: j
      }).catch(e => {
        var t, s;
        v(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        C(!1)
      })
    },
    children: [(0, n.jsx)(E, {
      subtitle: N,
      onClose: r
    }), (0, n.jsx)(x, {
      children: (0, n.jsxs)(o.FormItem, {
        title: _.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
        children: [(0, n.jsxs)("div", {
          className: g.smsInputContainer,
          children: [(0, n.jsx)(o.TextInput, {
            className: g.smsInput,
            inputRef: b,
            onChange: y,
            placeholder: _.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
            maxLength: 10,
            value: j,
            autoComplete: "one-time-code",
            spellCheck: "false",
            disabled: m
          }), (0, n.jsx)(o.Button, {
            size: o.Button.Sizes.MEDIUM,
            submitting: d,
            onClick: () => {
              i.default.post({
                url: p.Endpoints.LOGIN_SMS_SEND,
                body: {
                  ticket: t.ticket
                },
                oldFormErrors: !0
              }).then(e => {
                h(e.body.phone)
              }).catch(e => {
                var t;
                v(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
              })
            },
            children: _.default.Messages.MFA_SMS_RESEND
          })]
        }), (0, n.jsx)(A, {
          error: M
        })]
      })
    }), (0, n.jsx)(S, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: 0 === j.length,
      submitting: m
    })]
  })
}

function b(e) {
  let {
    request: t,
    finish: s,
    setSlide: a,
    onClose: r,
    isSlideReady: i
  } = e, [u, d] = l.useState(!1), [c, f] = l.useState(null), [h, m] = l.useState(""), p = l.useRef(null);
  return l.useEffect(() => {
    if (i) {
      var e;
      null === (e = p.current) || void 0 === e || e.focus()
    }
  }, [i]), (0, n.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), d(!0), s({
        mfaType: "password",
        data: h
      }).catch(e => {
        var t, s;
        f(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        d(!1)
      })
    },
    children: [(0, n.jsx)(E, {
      onClose: r
    }), (0, n.jsx)(x, {
      children: (0, n.jsxs)(o.FormItem, {
        title: _.default.Messages.FORM_LABEL_PASSWORD,
        children: [(0, n.jsx)(o.TextInput, {
          inputRef: p,
          onChange: m,
          value: h,
          type: "password",
          autoComplete: "password",
          spellCheck: "false",
          disabled: u
        }), (0, n.jsx)(A, {
          error: c
        })]
      })
    }), (0, n.jsx)(S, {
      request: t,
      setSlide: a,
      showConfirm: !0,
      disabled: 0 === h.length,
      submitting: u
    })]
  })
}

function N(e) {
  let {
    transitionState: t,
    request: s,
    finish: l,
    onClose: a
  } = e;
  return (0, n.jsx)(o.ModalRoot, {
    transitionState: t,
    size: o.ModalSize.SMALL,
    "aria-label": _.default.Messages.MFA_V2_HEADER,
    children: (0, n.jsx)(T, {
      request: s,
      mfaFinish: l,
      onClose: a,
      onEarlyClose: a
    })
  })
}

function T(e) {
  var t, s;
  let {
    request: a,
    mfaFinish: r,
    onEarlyClose: i,
    onClose: u,
    width: d = 440
  } = e, [c, f] = l.useState(null !== (s = null === (t = a.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== s ? s : "select"), [h, m] = l.useState(c), p = async e => {
    let {
      mfaType: t,
      data: s
    } = e;
    await r({
      mfaType: t,
      data: s,
      ticket: a.ticket
    }), null != u && u()
  }, _ = {
    request: a,
    finish: p,
    setSlide: f,
    onClose: i
  };
  return (0, n.jsxs)(o.Slides, {
    activeSlide: c,
    width: d,
    onSlideReady: m,
    children: [(0, n.jsx)(o.Slide, {
      id: "select",
      children: (0, n.jsx)(C, {
        ..._
      })
    }), (0, n.jsx)(o.Slide, {
      id: "webauthn",
      children: (0, n.jsx)(M, {
        ..._
      })
    }), (0, n.jsx)(o.Slide, {
      id: "totp",
      children: (0, n.jsx)(j, {
        ..._,
        isSlideReady: "totp" === h
      })
    }), (0, n.jsx)(o.Slide, {
      id: "sms",
      children: (0, n.jsx)(y, {
        ..._,
        isSlideReady: "sms" === h
      })
    }), (0, n.jsx)(o.Slide, {
      id: "backup",
      children: (0, n.jsx)(v, {
        ..._,
        isSlideReady: "backup" === h
      })
    }), (0, n.jsx)(o.Slide, {
      id: "password",
      children: (0, n.jsx)(b, {
        ..._,
        isSlideReady: "password" === h
      })
    })]
  })
}

function R(e, t, s) {
  (0, o.openModal)(s => (0, n.jsx)(N, {
    finish: t,
    request: e,
    ...s
  }), {
    onCloseCallback: () => {
      s(Error(_.default.Messages.MFA_V2_CANCELED))
    }
  })
}