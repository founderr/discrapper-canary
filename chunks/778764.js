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
  N = s("365007"),
  g = s("15980"),
  f = s("755733"),
  m = s("981631"),
  C = s("689938"),
  A = s("865156");

function h(e) {
  let {
    transitionState: t,
    onClose: i,
    ticket: o,
    challenge: c
  } = e, S = (0, u.useUID)(), [E, g] = n.useState(""), [h, O] = n.useState(!0), [p, R] = n.useState(f.WebAuthnScreens.INIT), [M, x] = n.useState(""), [D, L] = n.useState(null), P = async () => {
    let e;
    R(f.WebAuthnScreens.REGISTER);
    let t = T.isPlatformEmbedded && I.default.supportsFeature(m.NativeFeatures.WEBAUTHN) ? I.default.webAuthnRegister(c) : l.create(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      _.default.captureException(e), L(C.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), R(f.WebAuthnScreens.INIT);
      return
    }
    x(e), R(f.WebAuthnScreens.NAME)
  };
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": S,
    children: [(0, a.jsxs)(r.ModalHeader, {
      className: A.header,
      separator: !1,
      children: [(0, a.jsxs)(r.Heading, {
        id: S,
        variant: "heading-lg/semibold",
        children: [p === f.WebAuthnScreens.INIT && C.default.Messages.TWO_FA_WEBAUTHN_REGISTER, p === f.WebAuthnScreens.REGISTER && C.default.Messages.TWO_FA_WEBAUTHN_INTERACT, p === f.WebAuthnScreens.NAME && C.default.Messages.TWO_FA_WEBAUTHN_NAME]
      }), (0, a.jsx)(r.ModalCloseButton, {
        onClick: i,
        className: A.modalCloseButton
      })]
    }), (0, a.jsxs)(r.Slides, {
      activeSlide: p,
      width: 440,
      children: [(0, a.jsxs)(r.Slide, {
        id: f.WebAuthnScreens.INIT,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: A.content,
          children: [(0, a.jsx)("div", {
            className: A.icon,
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
              children: C.default.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            onClick: P,
            children: C.default.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
          })
        })]
      }), (0, a.jsxs)(r.Slide, {
        id: f.WebAuthnScreens.REGISTER,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: A.content,
          children: [(0, a.jsx)("div", {
            className: A.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("773072")
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: C.default.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            submitting: !0
          })
        })]
      }), (0, a.jsx)(r.Slide, {
        id: f.WebAuthnScreens.NAME,
        children: (0, a.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), (0, N.finishRegisterWebAuthnCredential)(E, o, M).then(async () => {
              await (0, d.showMFASuccessModal)(!1)
            }).then(() => i()).catch(() => {
              L(C.default.Messages.ERROR_OCCURRED_TRY_AGAIN), R(f.WebAuthnScreens.INIT)
            })
          },
          children: [(0, a.jsxs)(r.ModalContent, {
            className: A.content,
            children: [(0, a.jsx)("div", {
              className: A.icon,
              children: (0, a.jsx)("img", {
                alt: "",
                src: s("637163")
              })
            }), (0, a.jsxs)("div", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                children: C.default.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
              }), (0, a.jsx)(r.TextInput, {
                className: A.input,
                value: E,
                onChange: e => {
                  g(e), O(0 === e.length)
                },
                autoFocus: !0,
                minLength: 1
              })]
            })]
          }), (0, a.jsxs)(r.ModalFooter, {
            className: A.footer,
            children: [(0, a.jsx)(r.Button, {
              type: "submit",
              disabled: h,
              children: C.default.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
            }), (0, a.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                R(f.WebAuthnScreens.INIT)
              },
              children: C.default.Messages.BACK
            })]
          })]
        })
      })]
    })]
  })
}

function O(e) {
  let {
    onSelect: t,
    credential: n
  } = e;
  return (0, a.jsxs)(r.Menu, {
    navId: "webauthn-credential-actions",
    onClose: o.closeContextMenu,
    "aria-label": C.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
    onSelect: t,
    children: [(0, a.jsx)(r.MenuItem, {
      id: "webauthn-edit-credential-".concat(n.id),
      label: C.default.Messages.EDIT,
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
      label: C.default.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
      color: "danger",
      action: () => {
        (0, N.deleteWebAuthnCredential)(n)
      }
    })]
  })
}

function p() {
  let {
    credentials: e,
    hasFetchedCredentials: t
  } = (0, i.useStateFromStoresObject)([g.default], () => ({
    hasFetchedCredentials: g.default.hasFetchedCredentials(),
    credentials: g.default.getCredentials()
  }));
  n.useEffect(() => {
    !t && (0, N.fetchWebAuthnCredentials)()
  }, [t]);
  let [s, l] = n.useState(!1);
  return (0, a.jsxs)(r.FormSection, {
    title: C.default.Messages.TWO_FA_WEBAUTHN_TITLE,
    className: A.settings,
    children: [(0, a.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: A.description,
      children: C.default.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
    }), e.length > 0 && (0, a.jsx)("div", {
      className: A.credentialList,
      children: e.map(e => (0, a.jsx)(S.default, {
        avatar: null,
        name: e.name,
        className: A.credentialItem,
        onContextMenu: t => {
          (0, o.openContextMenu)(t, t => (0, a.jsx)(O, {
            ...t,
            credential: e
          }))
        },
        children: (0, a.jsx)(r.Button, {
          look: r.Button.Looks.BLANK,
          color: r.Button.Colors.TRANSPARENT,
          size: r.Button.Sizes.ICON,
          onClick: t => {
            (0, o.openContextMenu)(t, t => (0, a.jsx)(O, {
              ...t,
              credential: e
            }))
          },
          "aria-label": C.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
          innerClassName: A.credentialOptions,
          children: (0, a.jsx)(c.default, {
            className: A.__invalid_overflowIcon,
            foreground: A.__invalid_overflowIconFg,
            "aria-hidden": !0
          })
        })
      }, e.id))
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.Button, {
        onClick: () => {
          l(!0), (0, N.startRegisterWebAuthnCredential)().then(e => {
            let {
              ticket: t,
              challenge: s
            } = e;
            (0, r.openModal)(e => (0, a.jsx)(h, {
              ...e,
              ticket: t,
              challenge: s
            }))
          }).catch(e => {
            e.message !== C.default.Messages.MFA_V2_CANCELED && _.default.captureException(e)
          }).finally(() => {
            l(!1)
          })
        },
        submitting: s,
        disabled: !E.hasWebAuthn,
        size: r.Button.Sizes.SMALL,
        children: C.default.Messages.TWO_FA_WEBAUTHN_REGISTER
      })
    })]
  })
}