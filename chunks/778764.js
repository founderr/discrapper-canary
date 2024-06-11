"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120"), s("773603");
var a = s("735250"),
  n = s("470079"),
  i = s("849055"),
  l = s("442837"),
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
  A = s("689938"),
  C = s("865156");

function O(e) {
  let {
    transitionState: t,
    onClose: l,
    ticket: o,
    challenge: c
  } = e, S = (0, u.useUID)(), [E, g] = n.useState(""), [O, h] = n.useState(!0), [R, p] = n.useState(f.WebAuthnScreens.INIT), [M, D] = n.useState(""), [x, L] = n.useState(null), P = async () => {
    let e;
    p(f.WebAuthnScreens.REGISTER);
    let t = T.isPlatformEmbedded && I.default.supportsFeature(m.NativeFeatures.WEBAUTHN) ? I.default.webAuthnRegister(c) : i.create(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      _.default.captureException(e), L(A.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), p(f.WebAuthnScreens.INIT);
      return
    }
    D(e), p(f.WebAuthnScreens.NAME)
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
        children: [R === f.WebAuthnScreens.INIT && A.default.Messages.TWO_FA_WEBAUTHN_REGISTER, R === f.WebAuthnScreens.REGISTER && A.default.Messages.TWO_FA_WEBAUTHN_INTERACT, R === f.WebAuthnScreens.NAME && A.default.Messages.TWO_FA_WEBAUTHN_NAME]
      }), (0, a.jsx)(r.ModalCloseButton, {
        onClick: l,
        className: C.modalCloseButton
      })]
    }), (0, a.jsxs)(r.Slides, {
      activeSlide: R,
      width: 440,
      children: [(0, a.jsxs)(r.Slide, {
        id: f.WebAuthnScreens.INIT,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: C.content,
          children: [(0, a.jsx)("div", {
            className: C.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("773072")
            })
          }), (0, a.jsx)("div", {
            children: null != x && (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: x
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: A.default.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            onClick: P,
            children: A.default.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
          })
        })]
      }), (0, a.jsxs)(r.Slide, {
        id: f.WebAuthnScreens.REGISTER,
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
              children: A.default.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
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
            }).then(() => l()).catch(() => {
              L(A.default.Messages.ERROR_OCCURRED_TRY_AGAIN), p(f.WebAuthnScreens.INIT)
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
                children: A.default.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
              }), (0, a.jsx)(r.TextInput, {
                className: C.input,
                value: E,
                onChange: e => {
                  g(e), h(0 === e.length)
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
              children: A.default.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
            }), (0, a.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                p(f.WebAuthnScreens.INIT)
              },
              children: A.default.Messages.BACK
            })]
          })]
        })
      })]
    })]
  })
}

function h(e) {
  let {
    onSelect: t,
    credential: n
  } = e;
  return (0, a.jsxs)(r.Menu, {
    navId: "webauthn-credential-actions",
    onClose: o.closeContextMenu,
    "aria-label": A.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
    onSelect: t,
    children: [(0, a.jsx)(r.MenuItem, {
      id: "webauthn-edit-credential-".concat(n.id),
      label: A.default.Messages.EDIT,
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
      label: A.default.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
      color: "danger",
      action: () => {
        (0, N.deleteWebAuthnCredential)(n)
      }
    })]
  })
}

function R() {
  let {
    credentials: e,
    hasFetchedCredentials: t
  } = (0, l.useStateFromStoresObject)([g.default], () => ({
    hasFetchedCredentials: g.default.hasFetchedCredentials(),
    credentials: g.default.getCredentials()
  }));
  n.useEffect(() => {
    !t && (0, N.fetchWebAuthnCredentials)()
  }, [t]);
  let [s, i] = n.useState(!1);
  return (0, a.jsxs)(r.FormSection, {
    title: A.default.Messages.TWO_FA_WEBAUTHN_TITLE,
    className: C.settings,
    children: [(0, a.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: C.description,
      children: A.default.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
    }), e.length > 0 && (0, a.jsx)("div", {
      className: C.credentialList,
      children: e.map(e => (0, a.jsx)(S.default, {
        avatar: null,
        name: e.name,
        className: C.credentialItem,
        onContextMenu: t => {
          (0, o.openContextMenu)(t, t => (0, a.jsx)(h, {
            ...t,
            credential: e
          }))
        },
        children: (0, a.jsx)(r.Button, {
          look: r.Button.Looks.BLANK,
          color: r.Button.Colors.TRANSPARENT,
          size: r.Button.Sizes.ICON,
          onClick: t => {
            (0, o.openContextMenu)(t, t => (0, a.jsx)(h, {
              ...t,
              credential: e
            }))
          },
          "aria-label": A.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
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
          i(!0), (0, N.startRegisterWebAuthnCredential)().then(e => {
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
            e.message !== A.default.Messages.MFA_V2_CANCELED && _.default.captureException(e)
          }).finally(() => {
            i(!1)
          })
        },
        submitting: s,
        disabled: !E.hasWebAuthn,
        size: r.Button.Sizes.SMALL,
        children: A.default.Messages.TWO_FA_WEBAUTHN_REGISTER
      })
    })]
  })
}