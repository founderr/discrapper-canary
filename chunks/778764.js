"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("47120"), s("773603");
var a = s("735250"),
  n = s("470079"),
  l = s("849055"),
  i = s("442837"),
  r = s("481060"),
  o = s("239091"),
  d = s("202858"),
  u = s("153124"),
  c = s("621113"),
  S = s("360048"),
  E = s("287880"),
  T = s("358085"),
  _ = s("960048"),
  I = s("998502"),
  f = s("365007"),
  m = s("15980"),
  N = s("755733"),
  g = s("981631"),
  h = s("689938"),
  C = s("865156");

function O(e) {
  let {
    transitionState: t,
    onClose: i,
    ticket: o,
    challenge: c
  } = e, S = (0, u.useUID)(), [E, m] = n.useState(""), [O, A] = n.useState(!0), [p, R] = n.useState(N.WebAuthnScreens.INIT), [x, M] = n.useState(""), [D, L] = n.useState(null), P = async () => {
    let e;
    R(N.WebAuthnScreens.REGISTER);
    let t = T.isPlatformEmbedded && I.default.supportsFeature(g.NativeFeatures.WEBAUTHN) ? I.default.webAuthnRegister(c) : l.create(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      _.default.captureException(e), L(h.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), R(N.WebAuthnScreens.INIT);
      return
    }
    M(e), R(N.WebAuthnScreens.NAME)
  };
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": S,
    children: [(0, a.jsxs)(r.ModalHeader, {
      className: C.header,
      separator: !1,
      children: [(0, a.jsxs)(r.Heading, {
        id: S,
        variant: "heading-lg/semibold",
        children: [p === N.WebAuthnScreens.INIT && h.default.Messages.TWO_FA_WEBAUTHN_REGISTER, p === N.WebAuthnScreens.REGISTER && h.default.Messages.TWO_FA_WEBAUTHN_INTERACT, p === N.WebAuthnScreens.NAME && h.default.Messages.TWO_FA_WEBAUTHN_NAME]
      }), (0, a.jsx)(r.ModalCloseButton, {
        onClick: i,
        className: C.modalCloseButton
      })]
    }), (0, a.jsxs)(r.Slides, {
      activeSlide: p,
      width: 440,
      children: [(0, a.jsxs)(r.Slide, {
        id: N.WebAuthnScreens.INIT,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: C.content,
          children: [(0, a.jsx)("div", {
            className: C.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("773072")
            })
          }), (0, a.jsx)("div", {
            children: null != D && (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: D
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: h.default.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            onClick: P,
            children: h.default.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
          })
        })]
      }), (0, a.jsxs)(r.Slide, {
        id: N.WebAuthnScreens.REGISTER,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: C.content,
          children: [(0, a.jsx)("div", {
            className: C.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("773072")
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: h.default.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            submitting: !0
          })
        })]
      }), (0, a.jsx)(r.Slide, {
        id: N.WebAuthnScreens.NAME,
        children: (0, a.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), (0, f.finishRegisterWebAuthnCredential)(E, o, x).then(async () => {
              await (0, d.showMFASuccessModal)(!1)
            }).then(() => i()).catch(() => {
              L(h.default.Messages.ERROR_OCCURRED_TRY_AGAIN), R(N.WebAuthnScreens.INIT)
            })
          },
          children: [(0, a.jsxs)(r.ModalContent, {
            className: C.content,
            children: [(0, a.jsx)("div", {
              className: C.icon,
              children: (0, a.jsx)("img", {
                alt: "",
                src: s("637163")
              })
            }), (0, a.jsxs)("div", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                children: h.default.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
              }), (0, a.jsx)(r.TextInput, {
                className: C.input,
                value: E,
                onChange: e => {
                  m(e), A(0 === e.length)
                },
                autoFocus: !0,
                minLength: 1
              })]
            })]
          }), (0, a.jsxs)(r.ModalFooter, {
            className: C.footer,
            children: [(0, a.jsx)(r.Button, {
              type: "submit",
              disabled: O,
              children: h.default.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
            }), (0, a.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                R(N.WebAuthnScreens.INIT)
              },
              children: h.default.Messages.BACK
            })]
          })]
        })
      })]
    })]
  })
}

function A(e) {
  let {
    onSelect: t,
    credential: n
  } = e;
  return (0, a.jsxs)(r.Menu, {
    navId: "webauthn-credential-actions",
    onClose: o.closeContextMenu,
    "aria-label": h.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
    onSelect: t,
    children: [(0, a.jsx)(r.MenuItem, {
      id: "webauthn-edit-credential-".concat(n.id),
      label: h.default.Messages.EDIT,
      action: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("804")]).then(s.bind(s, "59617"));
          return t => (0, a.jsx)(e, {
            credential: n,
            ...t
          })
        })
      }
    }), (0, a.jsx)(r.MenuItem, {
      id: "webauthn-delete-credential-".concat(n.id),
      label: h.default.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
      color: "danger",
      action: () => {
        (0, f.deleteWebAuthnCredential)(n)
      }
    })]
  })
}

function p() {
  let {
    credentials: e,
    hasFetchedCredentials: t
  } = (0, i.useStateFromStoresObject)([m.default], () => ({
    hasFetchedCredentials: m.default.hasFetchedCredentials(),
    credentials: m.default.getCredentials()
  }));
  n.useEffect(() => {
    !t && (0, f.fetchWebAuthnCredentials)()
  }, [t]);
  let [s, l] = n.useState(!1);
  return (0, a.jsxs)(r.FormSection, {
    title: h.default.Messages.TWO_FA_WEBAUTHN_TITLE,
    className: C.settings,
    children: [(0, a.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: C.description,
      children: h.default.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
    }), e.length > 0 && (0, a.jsx)("div", {
      className: C.credentialList,
      children: e.map(e => (0, a.jsx)(S.default, {
        avatar: null,
        name: e.name,
        className: C.credentialItem,
        onContextMenu: t => {
          (0, o.openContextMenu)(t, t => (0, a.jsx)(A, {
            ...t,
            credential: e
          }))
        },
        children: (0, a.jsx)(r.Button, {
          look: r.Button.Looks.BLANK,
          color: r.Button.Colors.TRANSPARENT,
          size: r.Button.Sizes.ICON,
          onClick: t => {
            (0, o.openContextMenu)(t, t => (0, a.jsx)(A, {
              ...t,
              credential: e
            }))
          },
          "aria-label": h.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
          innerClassName: C.credentialOptions,
          children: (0, a.jsx)(c.default, {
            className: C.__invalid_overflowIcon,
            foreground: C.__invalid_overflowIconFg,
            "aria-hidden": !0
          })
        })
      }, e.id))
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.Button, {
        onClick: () => {
          l(!0), (0, f.startRegisterWebAuthnCredential)().then(e => {
            let {
              ticket: t,
              challenge: s
            } = e;
            (0, r.openModal)(e => (0, a.jsx)(O, {
              ...e,
              ticket: t,
              challenge: s
            }))
          }).catch(e => {
            e.message !== h.default.Messages.MFA_V2_CANCELED && _.default.captureException(e)
          }).finally(() => {
            l(!1)
          })
        },
        submitting: s,
        disabled: !E.hasWebAuthn,
        size: r.Button.Sizes.SMALL,
        children: h.default.Messages.TWO_FA_WEBAUTHN_REGISTER
      })
    })]
  })
}