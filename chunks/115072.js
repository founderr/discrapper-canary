n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n(47120);
var a = n(735250),
  s = n(470079),
  l = n(772848),
  i = n(442837),
  r = n(780384),
  o = n(481060),
  u = n(53281),
  c = n(476326),
  m = n(273031),
  d = n(898463),
  h = n(210887),
  v = n(154921),
  p = n(404975),
  x = n(768581),
  R = n(358085),
  _ = n(223356),
  I = n(225452),
  T = n(689938),
  f = n(803437),
  E = n(289575),
  g = n(371411);
let j = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function O(e) {
  var t, O, N, P, S;
  let {
    transitionState: C,
    onClose: M
  } = e, B = s.useRef(null), Z = s.useRef(null), [b, U] = s.useState(""), [L, G] = s.useState(""), [y, A] = s.useState(), [w, D] = s.useState(""), [F, k] = s.useState([]), [V, Y] = s.useState(), [W, H] = s.useState(), [z, X] = s.useState(!1), [Q, q] = s.useState(""), [K, J] = s.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, R.getOS)())), [$, ee] = s.useState(""), [et, en] = s.useState(""), [ea, es] = s.useState(""), [el, ei] = s.useState(""), [er, eo] = s.useState(!1), [eu, ec] = s.useState(!1), [em, ed] = s.useState(!1), eh = () => {
    null == M || M()
  }, ev = e => {
    k(F.filter(t => t.id !== e))
  };
  async function ep() {
    var e;
    if (ed(!1), "" === b || null == y) {
      eo(!0);
      return
    }
    let t = null == V ? void 0 : null === (e = V.features) || void 0 === e ? void 0 : e.find(e => (0, _.pD)(e) === W);
    ec(!0), eo(!1);
    let s = (0, I.D)(F.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      l = !0 === z ? {
        overridePlatformInformation: z,
        device: Q,
        operatingSystem: K,
        operatingSystemVersion: $,
        clientVersion: et,
        clientBuildNumber: ea,
        locale: el
      } : {
        overridePlatformInformation: z
      },
      i = await (0, _.ZD)({
        name: b,
        description: L,
        priority: y,
        feature: t,
        url: w
      }, l, s).catch(() => ed(!0));
    ec(!1), null != i && i.ok ? (window.open(i.body.permalink_url, "_blank"), eh(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("24053")]).then(n.bind(n, 81155));
      return t => (0, a.jsx)(e, {
        ...t,
        asanaTask: i.body
      })
    })) : ed(!0)
  }
  s.useEffect(() => {
    (async function e() {
      Y(await (0, _.WG)())
    })()
  }, []), s.useEffect(() => {
    if (F.length > 0) {
      var e;
      null === (e = Z.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [F]);
  let ex = (0, i.e7)([h.Z], () => h.Z.theme),
    eR = (0, r.wj)(ex) ? E : g;
  return (0, a.jsx)(o.ModalRoot, {
    className: f.modalRoot,
    transitionState: C,
    "aria-label": T.Z.Messages.SUBMIT_BUG,
    children: (0, a.jsx)(o.ModalContent, {
      className: f.modalContent,
      paddingFix: !1,
      children: (0, a.jsx)("div", {
        className: f.container,
        children: (0, a.jsx)(o.HeadingLevel, {
          forceLevel: 1,
          component: (0, a.jsx)("div", {
            className: f.sidebarContainer,
            children: (0, a.jsx)(v.Z, {
              strong: !0,
              color: v.Z.Colors.HEADER_PRIMARY,
              size: v.Z.Sizes.SIZE_24,
              children: (0, a.jsx)(o.H, {
                children: T.Z.Messages.BUG_REPORT_TITLE
              })
            })
          }),
          children: (0, a.jsxs)("div", {
            className: f.contentContainer,
            children: [(0, a.jsx)("img", {
              className: f.contentIcon,
              alt: "",
              src: eR
            }), (0, a.jsxs)("form", {
              className: f.form,
              onSubmit: ep,
              children: [(0, a.jsx)(o.FormItem, {
                error: er && "" === b ? T.Z.Messages.REQUIRED : null,
                title: T.Z.Messages.BUG_REPORT_NAME,
                className: f.formInput,
                children: (0, a.jsx)(o.TextInput, {
                  placeholder: "Something is broken on this screen.",
                  type: "text",
                  value: b,
                  maxLength: 100,
                  onChange: U
                })
              }), (0, a.jsxs)(o.FormItem, {
                title: T.Z.Messages.BUG_REPORT_DESCRIPTION,
                className: f.formInput,
                children: [(0, a.jsx)(o.TextArea, {
                  placeholder: "What did you expect to see?",
                  value: L,
                  onChange: G
                }), (0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "info-help-text",
                  children: "You can add additional information/media on the ticket after submitting"
                })]
              }), (0, a.jsx)(o.FormItem, {
                error: er && void 0 === y ? T.Z.Messages.REQUIRED : null,
                title: T.Z.Messages.BUG_REPORT_PRIORITY,
                className: f.formInput,
                children: (0, a.jsx)(o.SingleSelect, {
                  renderOptionLabel: e => (function(e) {
                    let t = e.priority;
                    return (0, a.jsxs)("div", {
                      className: f.formPriorityImageContainer,
                      children: [(0, a.jsxs)("div", {
                        className: f.formPriorityTitleContainer,
                        children: [(0, a.jsx)("img", {
                          alt: "",
                          className: f.formPriorityImage,
                          src: (0, x.gT)({
                            id: t.emoji,
                            animated: !0,
                            size: 48
                          })
                        }), (0, a.jsx)(o.Text, {
                          color: "header-primary",
                          variant: "text-sm/semibold",
                          className: f.formPriorityTitle,
                          children: t.title
                        })]
                      }), (0, a.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        className: f.formPriorityDescription,
                        children: t.description
                      })]
                    })
                  })(e),
                  onChange: A,
                  options: (0, _.Tj)().map(e => ({
                    priority: e,
                    value: e.value,
                    label: e.title
                  })),
                  value: y,
                  maxVisibleItems: 3,
                  closeOnSelect: !0
                })
              }), (0, a.jsx)(o.FormItem, {
                title: T.Z.Messages.BUG_REPORT_FEATURE_AREA,
                className: f.formInput,
                children: (0, a.jsx)(o.SearchableSelect, {
                  value: W,
                  options: null !== (S = null == (t = V) ? void 0 : null === (P = t.features) || void 0 === P ? void 0 : null === (N = P.filter(e => "" !== (0, _.pD)(e))) || void 0 === N ? void 0 : null === (O = N.map(e => {
                    var t;
                    return {
                      label: null !== (t = e.name) && void 0 !== t ? t : "",
                      value: (0, _.pD)(e)
                    }
                  })) || void 0 === O ? void 0 : O.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== S ? S : [],
                  isDisabled: null == V,
                  onChange: e => H(e)
                })
              }), (0, a.jsx)(o.FormItem, {
                title: T.Z.Messages.BUG_REPORT_URL,
                className: f.formInput,
                children: (0, a.jsx)(o.TextInput, {
                  placeholder: T.Z.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                  type: "text",
                  value: w,
                  maxLength: 5e3,
                  onChange: D
                })
              }), (0, a.jsx)(o.FormItem, {
                className: f.formInput,
                children: (0, a.jsx)(o.Checkbox, {
                  value: z,
                  onChange: (e, t) => X(t),
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "info-help-text",
                    children: T.Z.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                  })
                })
              }), z ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(o.FormItem, {
                  title: T.Z.Messages.BUG_REPORT_DEVICE,
                  className: f.formInput,
                  children: (0, a.jsx)(o.TextInput, {
                    placeholder: "Device",
                    value: Q,
                    onChange: e => q(e)
                  })
                }), (0, a.jsx)(o.FormItem, {
                  title: T.Z.Messages.BUG_REPORT_OS,
                  className: f.formInput,
                  children: (0, a.jsx)(o.SingleSelect, {
                    value: K,
                    options: j,
                    onChange: e => J(e)
                  })
                }), (0, a.jsx)(o.FormItem, {
                  title: T.Z.Messages.BUG_REPORT_OS_VERSION,
                  className: f.formInput,
                  children: (0, a.jsx)(o.TextInput, {
                    placeholder: "Operating System Version",
                    value: $,
                    onChange: e => ee(e)
                  })
                }), (0, a.jsx)(o.FormItem, {
                  title: T.Z.Messages.BUG_REPORT_CLIENT_VERSION,
                  className: f.formInput,
                  children: (0, a.jsx)(o.TextInput, {
                    placeholder: "Client Version",
                    value: et,
                    onChange: e => en(e)
                  })
                }), (0, a.jsx)(o.FormItem, {
                  title: T.Z.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                  className: f.formInput,
                  children: (0, a.jsx)(o.TextInput, {
                    placeholder: "Client Build Number",
                    value: ea,
                    onChange: e => es(e)
                  })
                }), (0, a.jsx)(o.FormItem, {
                  title: T.Z.Messages.BUG_REPORT_LOCALE,
                  className: f.formInput,
                  children: (0, a.jsx)(o.TextInput, {
                    placeholder: "Locale",
                    value: el,
                    onChange: e => ei(e)
                  })
                })]
              }) : null, (0, a.jsxs)(o.Button, {
                className: f.uploadButton,
                children: [T.Z.Messages.BUG_REPORT_ADD_ATTACHMENTS, (0, a.jsx)(u.Z, {
                  ref: B,
                  onChange: e => {
                    var t, n;
                    (null === (n = e.currentTarget) || void 0 === n ? void 0 : null === (t = n.files) || void 0 === t ? void 0 : t[0]) != null && k([...F, ...Array.from(e.currentTarget.files).map(e => new c.ZP({
                      id: (0, l.Z)(),
                      file: e,
                      platform: c.ow.WEB
                    }))])
                  },
                  multiple: !0
                })]
              }), F.length > 0 ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                  className: f.imageOptionsContainer,
                  children: (0, a.jsx)(o.FormTitle, {
                    children: "Preview"
                  })
                }), (0, a.jsx)("div", {
                  ref: Z,
                  className: f.attachmentsGrid,
                  children: F.length > 0 && F.map(e => (0, a.jsxs)("div", {
                    className: f.attachmentsGridItem,
                    children: [(0, a.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      children: e.filename
                    }), (0, a.jsxs)("div", {
                      className: f.attachmentContainer,
                      children: [(0, a.jsx)(d.r, {
                        upload: e
                      }), (0, a.jsx)("div", {
                        className: f.toolBar,
                        children: (0, a.jsx)(p.ZP, {
                          children: (0, a.jsx)(m.Z, {
                            tooltip: T.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
                            onClick: () => ev(e.id),
                            dangerous: !0,
                            children: (0, a.jsx)(o.TrashIcon, {
                              size: "md",
                              color: "currentColor"
                            })
                          })
                        })
                      })]
                    })]
                  }, e.id))
                })]
              }) : null, em ? (0, a.jsx)(o.Text, {
                color: "text-danger",
                variant: "text-sm/normal",
                children: "Something went wrong, try again!"
              }) : null]
            }), (0, a.jsxs)(o.ModalFooter, {
              className: f.submitContainer,
              children: [(0, a.jsx)(o.Button, {
                className: f.formButton,
                look: o.ButtonLooks.BLANK,
                onClick: eh,
                children: (0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: T.Z.Messages.CANCEL
                })
              }), (0, a.jsx)(o.Button, {
                submitting: eu,
                className: f.formButton,
                onClick: ep,
                children: "Submit and Open Report"
              })]
            })]
          })
        })
      })
    })
  })
}