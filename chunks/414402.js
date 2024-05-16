"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120"), s("773603");
var o, n, l = s("735250"),
  a = s("470079"),
  i = s("544891"),
  r = s("481060"),
  d = s("581874"),
  u = s("285952"),
  c = s("474333"),
  N = s("572004"),
  I = s("472305"),
  h = s("981631"),
  C = s("689938"),
  x = s("214834");

function O(e) {
  let {
    name: t,
    value: s
  } = e, [o, n] = a.useState(d.CopyInputModes.DEFAULT);
  return (0, l.jsxs)("div", {
    className: x.infoRow,
    children: [(0, l.jsx)(r.FormTitle, {
      className: x.__invalid_infoTitle,
      children: t
    }), (0, l.jsx)(d.default, {
      value: s,
      mode: o,
      supportsCopy: N.SUPPORTS_COPY,
      onCopy: () => {
        (0, N.copy)(s), n(d.CopyInputModes.SUCCESS)
      }
    })]
  })
}

function R(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, [o, n] = a.useState(""), [d, N] = a.useState(""), [R, m] = a.useState(null), [p, f] = a.useState(!1), [M, _] = a.useState("DOMAIN"), T = () => {
    f(!0), m(null), i.HTTP.post({
      url: h.Endpoints.CONNECTION(h.PlatformTypes.DOMAIN, o),
      body: {}
    }).then(() => {
      t()
    }).catch(e => {
      var t, s, o, n, l, a, i;
      (null === (t = e.body) || void 0 === t ? void 0 : t.proof) && "DOMAIN" === M ? (N(e.body.proof), _("PROOF_DNS")) : m((null === (a = e.body) || void 0 === a ? void 0 : null === (l = a.errors) || void 0 === l ? void 0 : null === (n = l.domain) || void 0 === n ? void 0 : null === (o = n._errors) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : s.message) || (null === (i = e.body) || void 0 === i ? void 0 : i.message) || e.message)
    }).finally(() => {
      f(!1)
    })
  };
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: s,
    className: x.__invalid_modal,
    children: [(0, l.jsxs)(r.ModalHeader, {
      direction: u.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: C.default.Messages.DOMAIN_VERIFICATION_HEADER
      }), (0, l.jsx)(r.ModalCloseButton, {
        className: x.closeButton,
        onClick: t
      })]
    }), (0, l.jsxs)(r.Slides, {
      activeSlide: M,
      width: 440,
      children: [(0, l.jsx)(r.Slide, {
        id: "DOMAIN",
        children: (0, l.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), T()
          },
          children: [(0, l.jsxs)(r.ModalContent, {
            className: x.content,
            children: [(0, l.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: x.description,
              children: C.default.Messages.DOMAIN_VERIFICATION_DESCRIPTION
            }), (0, l.jsx)(r.FormItem, {
              title: C.default.Messages.DOMAIN_VERIFICATION_LABEL,
              error: R,
              children: (0, l.jsx)(r.TextInput, {
                onChange: n,
                placeholder: I.EXAMPLE_DOMAIN,
                maxLength: 253,
                value: o,
                disabled: p,
                autoFocus: !0
              })
            })]
          }), (0, l.jsxs)(r.ModalFooter, {
            className: x.footer,
            children: [(0, l.jsx)(r.Button, {
              type: "submit",
              submitting: p,
              disabled: "" === o,
              children: C.default.Messages.NEXT
            }), (0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: t,
              children: C.default.Messages.CANCEL
            })]
          })]
        })
      }), (0, l.jsxs)(r.Slide, {
        id: "PROOF_DNS",
        children: [(0, l.jsxs)(r.ModalContent, {
          className: x.content,
          children: [(0, l.jsxs)("ol", {
            className: x.list,
            children: [(0, l.jsx)("li", {
              children: (0, l.jsx)(r.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: C.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
              })
            }), (0, l.jsxs)("li", {
              children: [(0, l.jsx)(r.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: C.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
              }), (0, l.jsxs)("div", {
                className: x.dnsRecordContainer,
                children: [(0, l.jsx)(O, {
                  name: C.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                  value: (0, I.getDnsName)(o)
                }), (0, l.jsx)(O, {
                  name: C.default.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                  value: "TXT"
                }), (0, l.jsx)(O, {
                  name: C.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                  value: d
                })]
              })]
            })]
          }), (0, l.jsx)(c.default, {
            messageType: c.HelpMessageTypes.INFO,
            className: x.text,
            children: C.default.Messages.DOMAIN_VERIFICATION_DNS_WARNING
          }), null != R && (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: x.text,
            children: R
          })]
        }), (0, l.jsxs)(r.ModalFooter, {
          className: x.footer,
          direction: u.default.Direction.HORIZONTAL,
          children: [(0, l.jsx)(r.Button, {
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              _("DOMAIN"), m(null)
            },
            children: C.default.Messages.BACK
          }), (0, l.jsxs)("div", {
            className: x.footerInner,
            children: [(0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                _("PROOF_HTTP"), m(null)
              },
              className: x.__invalid_switchButton,
              children: C.default.Messages.DOMAIN_VERIFICATION_USE_HTTP
            }), (0, l.jsx)(r.Button, {
              submitting: p,
              onClick: T,
              children: C.default.Messages.VERIFY
            })]
          })]
        })]
      }), (0, l.jsxs)(r.Slide, {
        id: "PROOF_HTTP",
        children: [(0, l.jsxs)(r.ModalContent, {
          className: x.content,
          children: [(0, l.jsx)(r.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: C.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
          }), (0, l.jsxs)("div", {
            className: x.httpFileContainer,
            children: [(0, l.jsx)(O, {
              name: C.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
              value: (0, I.getHttpName)(o)
            }), (0, l.jsx)(O, {
              name: C.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
              value: d
            })]
          }), null != R && (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: x.text,
            children: R
          })]
        }), (0, l.jsxs)(r.ModalFooter, {
          className: x.footer,
          direction: u.default.Direction.HORIZONTAL,
          children: [(0, l.jsx)(r.Button, {
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              _("DOMAIN"), m(null)
            },
            children: C.default.Messages.BACK
          }), (0, l.jsxs)("div", {
            className: x.footerInner,
            children: [(0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                _("PROOF_DNS"), m(null)
              },
              className: x.__invalid_switchButton,
              children: C.default.Messages.DOMAIN_VERIFICATION_USE_DNS
            }), (0, l.jsx)(r.Button, {
              submitting: p,
              onClick: T,
              children: C.default.Messages.VERIFY
            })]
          })]
        })]
      })]
    })]
  })
}(n = o || (o = {})).DOMAIN = "DOMAIN", n.PROOF_DNS = "PROOF_DNS", n.PROOF_HTTP = "PROOF_HTTP"