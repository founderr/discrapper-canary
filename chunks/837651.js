"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  r = n("481060"),
  o = n("816814"),
  i = n("200483"),
  l = n("594174"),
  d = n("285952"),
  c = n("277390"),
  u = n("287880"),
  f = n("689938"),
  E = n("225576");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = e => {
  let {
    image: t,
    label: n,
    text: a,
    children: o
  } = e;
  return (0, s.jsxs)(d.default, {
    className: E.spacing,
    children: [(0, s.jsx)(d.default, {
      grow: 0,
      shrink: 0,
      basis: "156px",
      justify: d.default.Justify.CENTER,
      className: E.image,
      children: t
    }), (0, s.jsx)(d.default, {
      direction: d.default.Direction.VERTICAL,
      justify: d.default.Justify.CENTER,
      children: (0, s.jsxs)("div", {
        children: [(0, s.jsx)(r.FormTitle, {
          tag: "h5",
          className: E.headerSpacing,
          children: n
        }), (0, s.jsx)(r.FormText, {
          type: r.FormText.Types.DESCRIPTION,
          children: a
        }), o]
      })
    })]
  })
};
class h extends a.PureComponent {
  render() {
    var e;
    let {
      transitionState: t,
      onClose: a
    } = this.props, {
      totpSecret: o,
      code: i,
      isVerifying: p
    } = this.state, h = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email, A = (0, u.encodeTotpSecretAsUrl)(null != h ? h : "", o), C = (0, s.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, s.jsxs)(d.default, {
        className: E.inputContainer,
        align: d.default.Align.START,
        children: [(0, s.jsx)(r.TextInput, {
          value: i,
          className: E.input,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: !0
        }), (0, s.jsx)(d.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, s.jsx)(r.Button, {
            type: "submit",
            submitting: p,
            children: f.default.Messages.TWO_FA_ACTIVATE
          })
        })]
      })
    });
    return (0, s.jsxs)(r.ModalRoot, {
      transitionState: t,
      size: r.ModalSize.DYNAMIC,
      className: E.customWidth,
      children: [(0, s.jsxs)(r.ModalHeader, {
        separator: !1,
        children: [(0, s.jsxs)(d.default.Child, {
          grow: 1,
          shrink: 1,
          children: [(0, s.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            children: f.default.Messages.TWO_FA_ENABLE
          }), (0, s.jsx)(r.Text, {
            variant: "text-xs/normal",
            className: E.subHeader,
            children: f.default.Messages.TWO_FA_ENABLE_SUBHEADER
          })]
        }), (0, s.jsx)(d.default.Child, {
          grow: 0,
          children: (0, s.jsx)(r.ModalCloseButton, {
            onClick: a
          })
        })]
      }), (0, s.jsxs)(r.ModalContent, {
        children: [(0, s.jsx)(_, {
          image: (0, s.jsx)("img", {
            alt: "",
            src: n("340061"),
            width: 100,
            height: 100
          }),
          label: f.default.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
          text: f.default.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
            googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
            authyURL: "https://www.authy.com/"
          })
        }), (0, s.jsx)(r.FormDivider, {
          className: E.divider
        }), (0, s.jsx)(_, {
          image: (0, s.jsx)(c.default, {
            text: A
          }),
          label: f.default.Messages.TWO_FA_QR_LABEL,
          text: f.default.Messages.TWO_FA_QR_BODY,
          children: (0, s.jsxs)("div", {
            className: E.topSpacing,
            children: [(0, s.jsx)(r.FormTitle, {
              tag: "h5",
              className: E.headerSpacing,
              children: f.default.Messages.TWO_FA_KEY
            }), (0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              className: E.secret,
              selectable: !0,
              children: o
            })]
          })
        }), (0, s.jsx)(r.FormDivider, {
          className: E.divider
        }), (0, s.jsx)(_, {
          image: (0, s.jsx)("img", {
            alt: "",
            src: n("308777")
          }),
          label: f.default.Messages._TWO_FA_LOGIN_LABEL,
          text: f.default.Messages.TWO_FA_LOGIN_BODY,
          children: C
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      code: "",
      totpSecret: (0, u.generateTotpSecret)(),
      error: null,
      isVerifying: !1
    }), p(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    }), p(this, "handleActivate", e => {
      e.preventDefault();
      let {
        password: t,
        emailToken: n
      } = this.props, {
        totpSecret: s,
        code: a
      } = this.state;
      this.setState({
        isVerifying: !0
      }), o.default.enable({
        password: t,
        code: a,
        secret: (0, u.encodeTotpSecret)(s),
        ...(0, i.isMfaEmailVerificationEnabled)() && {
          emailToken: n
        }
      }).then(this.handleActivateSuccess, e => this.setState({
        error: e.body.message,
        isVerifying: !1
      }))
    }), p(this, "handleActivateSuccess", () => {
      let {
        onClose: e,
        handleEnableMFASuccess: t
      } = this.props;
      this.setState({
        isVerifying: !1
      }), t(), null == e || e()
    })
  }
}
t.default = h