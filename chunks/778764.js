t.d(s, {
  Z: function() {
    return R
  }
}), t(47120), t(773603);
var n = t(735250),
  i = t(470079),
  a = t(849055),
  l = t(442837),
  r = t(481060),
  o = t(239091),
  c = t(202858),
  E = t(153124),
  d = t(360048),
  _ = t(287880),
  T = t(358085),
  S = t(960048),
  u = t(998502),
  I = t(365007),
  N = t(15980),
  A = t(755733),
  C = t(981631),
  O = t(689938),
  m = t(277605);

function h(e) {
  let {
    transitionState: s,
    onClose: l,
    ticket: o,
    challenge: d
  } = e, _ = (0, E.Dt)(), [N, h] = i.useState(""), [g, R] = i.useState(!0), [M, x] = i.useState(A.x.INIT), [D, p] = i.useState(""), [L, P] = i.useState(null), Z = async () => {
    let e;
    x(A.x.REGISTER);
    let s = T.isPlatformEmbedded && u.ZP.supportsFeature(C.eRX.WEBAUTHN) ? u.ZP.webAuthnRegister(d) : a.Ue(JSON.parse(d)).then(e => JSON.stringify(e));
    try {
      e = await s
    } catch (e) {
      S.Z.captureException(e), P(O.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), x(A.x.INIT);
      return
    }
    p(e), x(A.x.NAME)
  };
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: s,
    "aria-labelledby": _,
    children: [(0, n.jsxs)(r.ModalHeader, {
      className: m.header,
      separator: !1,
      children: [(0, n.jsxs)(r.Heading, {
        id: _,
        variant: "heading-lg/semibold",
        children: [M === A.x.INIT && O.Z.Messages.TWO_FA_WEBAUTHN_REGISTER, M === A.x.REGISTER && O.Z.Messages.TWO_FA_WEBAUTHN_INTERACT, M === A.x.NAME && O.Z.Messages.TWO_FA_WEBAUTHN_NAME]
      }), (0, n.jsx)(r.ModalCloseButton, {
        onClick: l,
        className: m.modalCloseButton
      })]
    }), (0, n.jsxs)(r.Slides, {
      activeSlide: M,
      width: 440,
      children: [(0, n.jsxs)(r.Slide, {
        id: A.x.INIT,
        children: [(0, n.jsxs)(r.ModalContent, {
          className: m.content,
          children: [(0, n.jsx)("div", {
            className: m.icon,
            children: (0, n.jsx)("img", {
              alt: "",
              src: t(773072)
            })
          }), (0, n.jsx)("div", {
            children: null != L && (0, n.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: L
            })
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(r.Text, {
              variant: "text-md/normal",
              children: O.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
            })
          })]
        }), (0, n.jsx)(r.ModalFooter, {
          children: (0, n.jsx)(r.Button, {
            onClick: Z,
            children: O.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
          })
        })]
      }), (0, n.jsxs)(r.Slide, {
        id: A.x.REGISTER,
        children: [(0, n.jsxs)(r.ModalContent, {
          className: m.content,
          children: [(0, n.jsx)("div", {
            className: m.icon,
            children: (0, n.jsx)("img", {
              alt: "",
              src: t(773072)
            })
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(r.Text, {
              variant: "text-md/normal",
              children: O.Z.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
            })
          })]
        }), (0, n.jsx)(r.ModalFooter, {
          children: (0, n.jsx)(r.Button, {
            submitting: !0
          })
        })]
      }), (0, n.jsx)(r.Slide, {
        id: A.x.NAME,
        children: (0, n.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), (0, I.Sr)(N, o, D).then(async () => {
              await (0, c.Yn)(!1)
            }).then(() => l()).catch(() => {
              P(O.Z.Messages.ERROR_OCCURRED_TRY_AGAIN), x(A.x.INIT)
            })
          },
          children: [(0, n.jsxs)(r.ModalContent, {
            className: m.content,
            children: [(0, n.jsx)("div", {
              className: m.icon,
              children: (0, n.jsx)("img", {
                alt: "",
                src: t(637163)
              })
            }), (0, n.jsxs)("div", {
              children: [(0, n.jsx)(r.Text, {
                variant: "text-md/normal",
                children: O.Z.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
              }), (0, n.jsx)(r.TextInput, {
                className: m.input,
                value: N,
                onChange: e => {
                  h(e), R(0 === e.length)
                },
                autoFocus: !0,
                minLength: 1
              })]
            })]
          }), (0, n.jsxs)(r.ModalFooter, {
            className: m.footer,
            children: [(0, n.jsx)(r.Button, {
              type: "submit",
              disabled: g,
              children: O.Z.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
            }), (0, n.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                x(A.x.INIT)
              },
              children: O.Z.Messages.BACK
            })]
          })]
        })
      })]
    })]
  })
}

function g(e) {
  let {
    onSelect: s,
    credential: i
  } = e;
  return (0, n.jsxs)(r.Menu, {
    navId: "webauthn-credential-actions",
    onClose: o.Zy,
    "aria-label": O.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
    onSelect: s,
    children: [(0, n.jsx)(r.MenuItem, {
      id: "webauthn-edit-credential-".concat(i.id),
      label: O.Z.Messages.EDIT,
      action: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("804")]).then(t.bind(t, 89616));
          return s => (0, n.jsx)(e, {
            credential: i,
            ...s
          })
        })
      }
    }), (0, n.jsx)(r.MenuItem, {
      id: "webauthn-delete-credential-".concat(i.id),
      label: O.Z.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
      color: "danger",
      action: () => {
        (0, I.cT)(i)
      }
    })]
  })
}

function R() {
  let {
    credentials: e,
    hasFetchedCredentials: s
  } = (0, l.cj)([N.Z], () => ({
    hasFetchedCredentials: N.Z.hasFetchedCredentials(),
    credentials: N.Z.getCredentials()
  }));
  i.useEffect(() => {
    !s && (0, I.hL)()
  }, [s]);
  let [t, a] = i.useState(!1);
  return (0, n.jsxs)(r.FormSection, {
    title: O.Z.Messages.TWO_FA_WEBAUTHN_TITLE,
    className: m.settings,
    children: [(0, n.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: m.description,
      children: O.Z.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
    }), e.length > 0 && (0, n.jsx)("div", {
      className: m.credentialList,
      children: e.map(e => (0, n.jsx)(d.Z, {
        avatar: null,
        name: e.name,
        className: m.credentialItem,
        onContextMenu: s => {
          (0, o.vq)(s, s => (0, n.jsx)(g, {
            ...s,
            credential: e
          }))
        },
        children: (0, n.jsx)(r.Button, {
          look: r.Button.Looks.BLANK,
          color: r.Button.Colors.TRANSPARENT,
          size: r.Button.Sizes.ICON,
          onClick: s => {
            (0, o.vq)(s, s => (0, n.jsx)(g, {
              ...s,
              credential: e
            }))
          },
          "aria-label": O.Z.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
          innerClassName: m.credentialOptions,
          children: (0, n.jsx)(r.MoreVerticalIcon, {
            size: "md",
            color: "currentColor",
            className: m.__invalid_overflowIcon,
            colorClass: m.__invalid_overflowIconFg,
            "aria-hidden": !0
          })
        })
      }, e.id))
    }), (0, n.jsx)("div", {
      children: (0, n.jsx)(r.Button, {
        onClick: () => {
          a(!0), (0, I.L$)().then(e => {
            let {
              ticket: s,
              challenge: t
            } = e;
            (0, r.openModal)(e => (0, n.jsx)(h, {
              ...e,
              ticket: s,
              challenge: t
            }))
          }).catch(e => {
            e.message !== O.Z.Messages.MFA_V2_CANCELED && S.Z.captureException(e)
          }).finally(() => {
            a(!1)
          })
        },
        submitting: t,
        disabled: !_.Ae,
        size: r.Button.Sizes.SMALL,
        children: O.Z.Messages.TWO_FA_WEBAUTHN_REGISTER
      })
    })]
  })
}