"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
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
  f = s("960048"),
  m = s("998502"),
  _ = s("365007"),
  g = s("15980"),
  I = s("755733"),
  h = s("981631"),
  N = s("689938"),
  p = s("865156");

function C(e) {
  let {
    transitionState: t,
    onClose: i,
    ticket: o,
    challenge: c
  } = e, S = (0, u.useUID)(), [E, g] = n.useState(""), [C, A] = n.useState(!0), [O, x] = n.useState(I.WebAuthnScreens.INIT), [R, M] = n.useState(""), [v, L] = n.useState(null), D = async () => {
    let e;
    x(I.WebAuthnScreens.REGISTER);
    let t = T.isPlatformEmbedded && m.default.supportsFeature(h.NativeFeatures.WEBAUTHN) ? m.default.webAuthnRegister(c) : l.create(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      f.default.captureException(e), L(N.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), x(I.WebAuthnScreens.INIT);
      return
    }
    M(e), x(I.WebAuthnScreens.NAME)
  };
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": S,
    children: [(0, a.jsxs)(r.ModalHeader, {
      className: p.header,
      separator: !1,
      children: [(0, a.jsxs)(r.Heading, {
        id: S,
        variant: "heading-lg/semibold",
        children: [O === I.WebAuthnScreens.INIT && N.default.Messages.TWO_FA_WEBAUTHN_REGISTER, O === I.WebAuthnScreens.REGISTER && N.default.Messages.TWO_FA_WEBAUTHN_INTERACT, O === I.WebAuthnScreens.NAME && N.default.Messages.TWO_FA_WEBAUTHN_NAME]
      }), (0, a.jsx)(r.ModalCloseButton, {
        onClick: i,
        className: p.modalCloseButton
      })]
    }), (0, a.jsxs)(r.Slides, {
      activeSlide: O,
      width: 440,
      children: [(0, a.jsxs)(r.Slide, {
        id: I.WebAuthnScreens.INIT,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: p.content,
          children: [(0, a.jsx)("div", {
            className: p.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("773072")
            })
          }), (0, a.jsx)("div", {
            children: null != v && (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: v
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            onClick: D,
            children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
          })
        })]
      }), (0, a.jsxs)(r.Slide, {
        id: I.WebAuthnScreens.REGISTER,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: p.content,
          children: [(0, a.jsx)("div", {
            className: p.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("773072")
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: N.default.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            submitting: !0
          })
        })]
      }), (0, a.jsx)(r.Slide, {
        id: I.WebAuthnScreens.NAME,
        children: (0, a.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), (0, _.finishRegisterWebAuthnCredential)(E, o, R).then(async () => {
              await (0, d.showMFASuccessModal)(!1)
            }).then(() => i()).catch(() => {
              L(N.default.Messages.ERROR_OCCURRED_TRY_AGAIN), x(I.WebAuthnScreens.INIT)
            })
          },
          children: [(0, a.jsxs)(r.ModalContent, {
            className: p.content,
            children: [(0, a.jsx)("div", {
              className: p.icon,
              children: (0, a.jsx)("img", {
                alt: "",
                src: s("637163")
              })
            }), (0, a.jsxs)("div", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                children: N.default.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
              }), (0, a.jsx)(r.TextInput, {
                className: p.input,
                value: E,
                onChange: e => {
                  g(e), A(0 === e.length)
                },
                autoFocus: !0,
                minLength: 1
              })]
            })]
          }), (0, a.jsxs)(r.ModalFooter, {
            className: p.footer,
            children: [(0, a.jsx)(r.Button, {
              type: "submit",
              disabled: C,
              children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
            }), (0, a.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                x(I.WebAuthnScreens.INIT)
              },
              children: N.default.Messages.BACK
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
    "aria-label": N.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
    onSelect: t,
    children: [(0, a.jsx)(r.MenuItem, {
      id: "webauthn-edit-credential-".concat(n.id),
      label: N.default.Messages.EDIT,
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
      label: N.default.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
      color: "danger",
      action: () => {
        (0, _.deleteWebAuthnCredential)(n)
      }
    })]
  })
}

function O() {
  let {
    credentials: e,
    hasFetchedCredentials: t
  } = (0, i.useStateFromStoresObject)([g.default], () => ({
    hasFetchedCredentials: g.default.hasFetchedCredentials(),
    credentials: g.default.getCredentials()
  }));
  n.useEffect(() => {
    !t && (0, _.fetchWebAuthnCredentials)()
  }, [t]);
  let [s, l] = n.useState(!1);
  return (0, a.jsxs)(r.FormSection, {
    title: N.default.Messages.TWO_FA_WEBAUTHN_TITLE,
    className: p.settings,
    children: [(0, a.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: p.description,
      children: N.default.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
    }), e.length > 0 && (0, a.jsx)("div", {
      className: p.credentialList,
      children: e.map(e => (0, a.jsx)(S.default, {
        avatar: null,
        name: e.name,
        className: p.credentialItem,
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
          "aria-label": N.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
          innerClassName: p.credentialOptions,
          children: (0, a.jsx)(c.default, {
            className: p.__invalid_overflowIcon,
            foreground: p.__invalid_overflowIconFg,
            "aria-hidden": !0
          })
        })
      }, e.id))
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.Button, {
        onClick: () => {
          l(!0), (0, _.startRegisterWebAuthnCredential)().then(e => {
            let {
              ticket: t,
              challenge: s
            } = e;
            (0, r.openModal)(e => (0, a.jsx)(C, {
              ...e,
              ticket: t,
              challenge: s
            }))
          }).catch(e => {
            e.message !== N.default.Messages.MFA_V2_CANCELED && f.default.captureException(e)
          }).finally(() => {
            l(!1)
          })
        },
        submitting: s,
        disabled: !E.hasWebAuthn,
        size: r.Button.Sizes.SMALL,
        children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER
      })
    })]
  })
}