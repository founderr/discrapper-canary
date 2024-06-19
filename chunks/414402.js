o.r(s), o.d(s, {
  default: function() {
    return C
  }
}), o(47120), o(773603);
var n, t, l = o(735250),
  a = o(470079),
  i = o(544891),
  r = o(481060),
  d = o(285952),
  c = o(474333),
  I = o(572004),
  N = o(472305),
  u = o(981631),
  O = o(689938),
  x = o(719323);

function _(e) {
  let {
    name: s,
    value: o
  } = e, [n, t] = a.useState(r.CopyInputModes.DEFAULT);
  return (0, l.jsxs)("div", {
    className: x.infoRow,
    children: [(0, l.jsx)(r.FormTitle, {
      children: s
    }), (0, l.jsx)(r.CopyInput, {
      value: o,
      mode: n,
      supportsCopy: I.wS,
      onCopy: () => {
        (0, I.JG)(o), t(r.CopyInputModes.SUCCESS)
      }
    })]
  })
}

function C(e) {
  let {
    onClose: s,
    transitionState: o
  } = e, [n, t] = a.useState(""), [I, C] = a.useState(""), [M, m] = a.useState(null), [h, R] = a.useState(!1), [A, T] = a.useState("DOMAIN"), j = () => {
    R(!0), m(null), i.tn.post({
      url: u.ANM.CONNECTION(u.ABu.DOMAIN, n),
      body: {}
    }).then(() => {
      s()
    }).catch(e => {
      var s, o, n, t, l, a, i;
      (null === (s = e.body) || void 0 === s ? void 0 : s.proof) && "DOMAIN" === A ? (C(e.body.proof), T("PROOF_DNS")) : m((null === (a = e.body) || void 0 === a ? void 0 : null === (l = a.errors) || void 0 === l ? void 0 : null === (t = l.domain) || void 0 === t ? void 0 : null === (n = t._errors) || void 0 === n ? void 0 : null === (o = n[0]) || void 0 === o ? void 0 : o.message) || (null === (i = e.body) || void 0 === i ? void 0 : i.message) || e.message)
    }).finally(() => {
      R(!1)
    })
  };
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: o,
    className: x.__invalid_modal,
    children: [(0, l.jsxs)(r.ModalHeader, {
      direction: d.Z.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: O.Z.Messages.DOMAIN_VERIFICATION_HEADER
      }), (0, l.jsx)(r.ModalCloseButton, {
        className: x.closeButton,
        onClick: s
      })]
    }), (0, l.jsxs)(r.Slides, {
      activeSlide: A,
      width: 440,
      children: [(0, l.jsx)(r.Slide, {
        id: "DOMAIN",
        children: (0, l.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), j()
          },
          children: [(0, l.jsxs)(r.ModalContent, {
            className: x.content,
            children: [(0, l.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: x.description,
              children: O.Z.Messages.DOMAIN_VERIFICATION_DESCRIPTION
            }), (0, l.jsx)(r.FormItem, {
              title: O.Z.Messages.DOMAIN_VERIFICATION_LABEL,
              error: M,
              children: (0, l.jsx)(r.TextInput, {
                onChange: t,
                placeholder: N.pL,
                maxLength: 253,
                value: n,
                disabled: h,
                autoFocus: !0
              })
            })]
          }), (0, l.jsxs)(r.ModalFooter, {
            className: x.footer,
            children: [(0, l.jsx)(r.Button, {
              type: "submit",
              submitting: h,
              disabled: "" === n,
              children: O.Z.Messages.NEXT
            }), (0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: s,
              children: O.Z.Messages.CANCEL
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
                children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
              })
            }), (0, l.jsxs)("li", {
              children: [(0, l.jsx)(r.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
              }), (0, l.jsxs)("div", {
                className: x.dnsRecordContainer,
                children: [(0, l.jsx)(_, {
                  name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                  value: (0, N.Qv)(n)
                }), (0, l.jsx)(_, {
                  name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                  value: "TXT"
                }), (0, l.jsx)(_, {
                  name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                  value: I
                })]
              })]
            })]
          }), (0, l.jsx)(c.Z, {
            messageType: c.Q.INFO,
            className: x.text,
            children: O.Z.Messages.DOMAIN_VERIFICATION_DNS_WARNING
          }), null != M && (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: x.text,
            children: M
          })]
        }), (0, l.jsxs)(r.ModalFooter, {
          className: x.footer,
          direction: d.Z.Direction.HORIZONTAL,
          children: [(0, l.jsx)(r.Button, {
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              T("DOMAIN"), m(null)
            },
            children: O.Z.Messages.BACK
          }), (0, l.jsxs)("div", {
            className: x.footerInner,
            children: [(0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                T("PROOF_HTTP"), m(null)
              },
              className: x.__invalid_switchButton,
              children: O.Z.Messages.DOMAIN_VERIFICATION_USE_HTTP
            }), (0, l.jsx)(r.Button, {
              submitting: h,
              onClick: j,
              children: O.Z.Messages.VERIFY
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
            children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
          }), (0, l.jsxs)("div", {
            className: x.httpFileContainer,
            children: [(0, l.jsx)(_, {
              name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
              value: (0, N.F9)(n)
            }), (0, l.jsx)(_, {
              name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
              value: I
            })]
          }), null != M && (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: x.text,
            children: M
          })]
        }), (0, l.jsxs)(r.ModalFooter, {
          className: x.footer,
          direction: d.Z.Direction.HORIZONTAL,
          children: [(0, l.jsx)(r.Button, {
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              T("DOMAIN"), m(null)
            },
            children: O.Z.Messages.BACK
          }), (0, l.jsxs)("div", {
            className: x.footerInner,
            children: [(0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                T("PROOF_DNS"), m(null)
              },
              className: x.__invalid_switchButton,
              children: O.Z.Messages.DOMAIN_VERIFICATION_USE_DNS
            }), (0, l.jsx)(r.Button, {
              submitting: h,
              onClick: j,
              children: O.Z.Messages.VERIFY
            })]
          })]
        })]
      })]
    })]
  })
}(t = n || (n = {})).DOMAIN = "DOMAIN", t.PROOF_DNS = "PROOF_DNS", t.PROOF_HTTP = "PROOF_HTTP"