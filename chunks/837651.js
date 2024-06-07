"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  o = n("481060"),
  r = n("816814"),
  i = n("200483"),
  l = n("594174"),
  d = n("285952"),
  c = n("277390"),
  u = n("287880"),
  f = n("689938"),
  E = n("225576");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = e => {
  let {
    image: t,
    label: n,
    text: s,
    children: r
  } = e;
  return (0, a.jsxs)(d.default, {
    className: E.spacing,
    children: [(0, a.jsx)(d.default, {
      grow: 0,
      shrink: 0,
      basis: "156px",
      justify: d.default.Justify.CENTER,
      className: E.image,
      children: t
    }), (0, a.jsx)(d.default, {
      direction: d.default.Direction.VERTICAL,
      justify: d.default.Justify.CENTER,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.FormTitle, {
          tag: "h5",
          className: E.headerSpacing,
          children: n
        }), (0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          children: s
        }), r]
      })
    })]
  })
};
class h extends s.PureComponent {
  render() {
    var e;
    let {
      transitionState: t,
      onClose: s
    } = this.props, {
      totpSecret: r,
      code: i,
      isVerifying: _
    } = this.state, h = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email, A = (0, u.encodeTotpSecretAsUrl)(null != h ? h : "", r), T = (0, a.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, a.jsxs)(d.default, {
        className: E.inputContainer,
        align: d.default.Align.START,
        children: [(0, a.jsx)(o.TextInput, {
          value: i,
          className: E.input,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: !0
        }), (0, a.jsx)(d.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(o.Button, {
            type: "submit",
            submitting: _,
            children: f.default.Messages.TWO_FA_ACTIVATE
          })
        })]
      })
    });
    return (0, a.jsxs)(o.ModalRoot, {
      transitionState: t,
      size: o.ModalSize.DYNAMIC,
      className: E.customWidth,
      children: [(0, a.jsxs)(o.ModalHeader, {
        separator: !1,
        children: [(0, a.jsxs)(d.default.Child, {
          grow: 1,
          shrink: 1,
          children: [(0, a.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            children: f.default.Messages.TWO_FA_ENABLE
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: E.subHeader,
            children: f.default.Messages.TWO_FA_ENABLE_SUBHEADER
          })]
        }), (0, a.jsx)(d.default.Child, {
          grow: 0,
          children: (0, a.jsx)(o.ModalCloseButton, {
            onClick: s
          })
        })]
      }), (0, a.jsxs)(o.ModalContent, {
        children: [(0, a.jsx)(p, {
          image: (0, a.jsx)("img", {
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
        }), (0, a.jsx)(o.FormDivider, {
          className: E.divider
        }), (0, a.jsx)(p, {
          image: (0, a.jsx)(c.default, {
            text: A
          }),
          label: f.default.Messages.TWO_FA_QR_LABEL,
          text: f.default.Messages.TWO_FA_QR_BODY,
          children: (0, a.jsxs)("div", {
            className: E.topSpacing,
            children: [(0, a.jsx)(o.FormTitle, {
              tag: "h5",
              className: E.headerSpacing,
              children: f.default.Messages.TWO_FA_KEY
            }), (0, a.jsx)(o.Text, {
              variant: "text-md/normal",
              className: E.secret,
              selectable: !0,
              children: r
            })]
          })
        }), (0, a.jsx)(o.FormDivider, {
          className: E.divider
        }), (0, a.jsx)(p, {
          image: (0, a.jsx)("img", {
            alt: "",
            src: n("308777")
          }),
          label: f.default.Messages._TWO_FA_LOGIN_LABEL,
          text: f.default.Messages.TWO_FA_LOGIN_BODY,
          children: T
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      code: "",
      totpSecret: (0, u.generateTotpSecret)(),
      error: null,
      isVerifying: !1
    }), _(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    }), _(this, "handleActivate", e => {
      e.preventDefault();
      let {
        password: t,
        emailToken: n
      } = this.props, {
        totpSecret: a,
        code: s
      } = this.state;
      this.setState({
        isVerifying: !0
      }), r.default.enable({
        password: t,
        code: s,
        secret: (0, u.encodeTotpSecret)(a),
        ...(0, i.isMfaEmailVerificationEnabled)() && {
          emailToken: n
        }
      }).then(this.handleActivateSuccess, e => this.setState({
        error: e.body.message,
        isVerifying: !1
      }))
    }), _(this, "handleActivateSuccess", () => {
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