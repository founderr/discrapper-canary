"use strict";
t.r(s), t.d(s, {
  default: function() {
    return M
  }
}), t("47120"), t("773603");
var o, l, n = t("735250"),
  a = t("470079"),
  d = t("544891"),
  i = t("481060"),
  r = t("285952"),
  c = t("474333"),
  u = t("572004"),
  N = t("472305"),
  I = t("981631"),
  O = t("689938"),
  x = t("214834");

function _(e) {
  let {
    name: s,
    value: t
  } = e, [o, l] = a.useState(i.CopyInputModes.DEFAULT);
  return (0, n.jsxs)("div", {
    className: x.infoRow,
    children: [(0, n.jsx)(i.FormTitle, {
      children: s
    }), (0, n.jsx)(i.CopyInput, {
      value: t,
      mode: o,
      supportsCopy: u.SUPPORTS_COPY,
      onCopy: () => {
        (0, u.copy)(t), l(i.CopyInputModes.SUCCESS)
      }
    })]
  })
}

function M(e) {
  let {
    onClose: s,
    transitionState: t
  } = e, [o, l] = a.useState(""), [u, M] = a.useState(""), [m, C] = a.useState(null), [T, R] = a.useState(!1), [h, A] = a.useState("DOMAIN"), j = () => {
    R(!0), C(null), d.HTTP.post({
      url: I.Endpoints.CONNECTION(I.PlatformTypes.DOMAIN, o),
      body: {}
    }).then(() => {
      s()
    }).catch(e => {
      var s, t, o, l, n, a, d;
      (null === (s = e.body) || void 0 === s ? void 0 : s.proof) && "DOMAIN" === h ? (M(e.body.proof), A("PROOF_DNS")) : C((null === (a = e.body) || void 0 === a ? void 0 : null === (n = a.errors) || void 0 === n ? void 0 : null === (l = n.domain) || void 0 === l ? void 0 : null === (o = l._errors) || void 0 === o ? void 0 : null === (t = o[0]) || void 0 === t ? void 0 : t.message) || (null === (d = e.body) || void 0 === d ? void 0 : d.message) || e.message)
    }).finally(() => {
      R(!1)
    })
  };
  return (0, n.jsxs)(i.ModalRoot, {
    transitionState: t,
    className: x.__invalid_modal,
    children: [(0, n.jsxs)(i.ModalHeader, {
      direction: r.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: O.default.Messages.DOMAIN_VERIFICATION_HEADER
      }), (0, n.jsx)(i.ModalCloseButton, {
        className: x.closeButton,
        onClick: s
      })]
    }), (0, n.jsxs)(i.Slides, {
      activeSlide: h,
      width: 440,
      children: [(0, n.jsx)(i.Slide, {
        id: "DOMAIN",
        children: (0, n.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), j()
          },
          children: [(0, n.jsxs)(i.ModalContent, {
            className: x.content,
            children: [(0, n.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: x.description,
              children: O.default.Messages.DOMAIN_VERIFICATION_DESCRIPTION
            }), (0, n.jsx)(i.FormItem, {
              title: O.default.Messages.DOMAIN_VERIFICATION_LABEL,
              error: m,
              children: (0, n.jsx)(i.TextInput, {
                onChange: l,
                placeholder: N.EXAMPLE_DOMAIN,
                maxLength: 253,
                value: o,
                disabled: T,
                autoFocus: !0
              })
            })]
          }), (0, n.jsxs)(i.ModalFooter, {
            className: x.footer,
            children: [(0, n.jsx)(i.Button, {
              type: "submit",
              submitting: T,
              disabled: "" === o,
              children: O.default.Messages.NEXT
            }), (0, n.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: s,
              children: O.default.Messages.CANCEL
            })]
          })]
        })
      }), (0, n.jsxs)(i.Slide, {
        id: "PROOF_DNS",
        children: [(0, n.jsxs)(i.ModalContent, {
          className: x.content,
          children: [(0, n.jsxs)("ol", {
            className: x.list,
            children: [(0, n.jsx)("li", {
              children: (0, n.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: O.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
              })
            }), (0, n.jsxs)("li", {
              children: [(0, n.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: O.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
              }), (0, n.jsxs)("div", {
                className: x.dnsRecordContainer,
                children: [(0, n.jsx)(_, {
                  name: O.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                  value: (0, N.getDnsName)(o)
                }), (0, n.jsx)(_, {
                  name: O.default.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                  value: "TXT"
                }), (0, n.jsx)(_, {
                  name: O.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                  value: u
                })]
              })]
            })]
          }), (0, n.jsx)(c.default, {
            messageType: c.HelpMessageTypes.INFO,
            className: x.text,
            children: O.default.Messages.DOMAIN_VERIFICATION_DNS_WARNING
          }), null != m && (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: x.text,
            children: m
          })]
        }), (0, n.jsxs)(i.ModalFooter, {
          className: x.footer,
          direction: r.default.Direction.HORIZONTAL,
          children: [(0, n.jsx)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              A("DOMAIN"), C(null)
            },
            children: O.default.Messages.BACK
          }), (0, n.jsxs)("div", {
            className: x.footerInner,
            children: [(0, n.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: () => {
                A("PROOF_HTTP"), C(null)
              },
              className: x.__invalid_switchButton,
              children: O.default.Messages.DOMAIN_VERIFICATION_USE_HTTP
            }), (0, n.jsx)(i.Button, {
              submitting: T,
              onClick: j,
              children: O.default.Messages.VERIFY
            })]
          })]
        })]
      }), (0, n.jsxs)(i.Slide, {
        id: "PROOF_HTTP",
        children: [(0, n.jsxs)(i.ModalContent, {
          className: x.content,
          children: [(0, n.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: O.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
          }), (0, n.jsxs)("div", {
            className: x.httpFileContainer,
            children: [(0, n.jsx)(_, {
              name: O.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
              value: (0, N.getHttpName)(o)
            }), (0, n.jsx)(_, {
              name: O.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
              value: u
            })]
          }), null != m && (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: x.text,
            children: m
          })]
        }), (0, n.jsxs)(i.ModalFooter, {
          className: x.footer,
          direction: r.default.Direction.HORIZONTAL,
          children: [(0, n.jsx)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              A("DOMAIN"), C(null)
            },
            children: O.default.Messages.BACK
          }), (0, n.jsxs)("div", {
            className: x.footerInner,
            children: [(0, n.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: () => {
                A("PROOF_DNS"), C(null)
              },
              className: x.__invalid_switchButton,
              children: O.default.Messages.DOMAIN_VERIFICATION_USE_DNS
            }), (0, n.jsx)(i.Button, {
              submitting: T,
              onClick: j,
              children: O.default.Messages.VERIFY
            })]
          })]
        })]
      })]
    })]
  })
}(l = o || (o = {})).DOMAIN = "DOMAIN", l.PROOF_DNS = "PROOF_DNS", l.PROOF_HTTP = "PROOF_HTTP"