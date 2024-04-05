"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("47120");
var n = a("735250"),
  l = a("470079"),
  s = a("153832"),
  i = a("442837"),
  r = a("780384"),
  o = a("481060"),
  u = a("53281"),
  d = a("476326"),
  c = a("273031"),
  m = a("898463"),
  f = a("210887"),
  _ = a("740727"),
  h = a("154921"),
  I = a("404975"),
  R = a("768581"),
  p = a("358085"),
  v = a("223356"),
  x = a("225452"),
  T = a("689938"),
  g = a("720141"),
  E = a("289575"),
  j = a("371411");
let O = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function S(e) {
  var t, S, N, C, P;
  let {
    transitionState: B,
    onClose: M
  } = e, A = l.useRef(null), U = l.useRef(null), [b, L] = l.useState(""), [G, y] = l.useState(""), [F, D] = l.useState(), [w, k] = l.useState(""), [Y, V] = l.useState([]), [H, W] = l.useState(), [z, X] = l.useState(), [Q, q] = l.useState(!1), [K, Z] = l.useState(""), [J, $] = l.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, p.getOS)())), [ee, et] = l.useState(""), [ea, en] = l.useState(""), [el, es] = l.useState(""), [ei, er] = l.useState(""), [eo, eu] = l.useState(!1), [ed, ec] = l.useState(!1), [em, ef] = l.useState(!1), e_ = () => {
    null == M || M()
  }, eh = e => {
    V(Y.filter(t => t.id !== e))
  };
  async function eI() {
    var e;
    if (ef(!1), "" === b || null == F) {
      eu(!0);
      return
    }
    let t = null == H ? void 0 : null === (e = H.features) || void 0 === e ? void 0 : e.find(e => (0, v.getFeatureId)(e) === z);
    ec(!0), eu(!1);
    let l = (0, x.getAttachments)(Y.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      s = !0 === Q ? {
        overridePlatformInformation: Q,
        device: K,
        operatingSystem: J,
        operatingSystemVersion: ee,
        clientVersion: ea,
        clientBuildNumber: el,
        locale: ei
      } : {
        overridePlatformInformation: Q
      },
      i = await (0, v.submitReport)({
        name: b,
        description: G,
        priority: F,
        feature: t,
        url: w
      }, s, l).catch(() => ef(!0));
    ec(!1), null != i && i.ok ? (window.open(i.body.permalink_url, "_blank"), e_(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("24053")]).then(a.bind(a, "81155"));
      return t => (0, n.jsx)(e, {
        ...t,
        asanaTask: i.body
      })
    })) : ef(!0)
  }
  l.useEffect(() => {
    (async function e() {
      W(await (0, v.fetchBugReportConfig)())
    })()
  }, []), l.useEffect(() => {
    if (Y.length > 0) {
      var e;
      null === (e = U.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [Y]);
  let eR = (0, i.useStateFromStores)([f.default], () => f.default.theme),
    ep = (0, r.isThemeDark)(eR) ? E : j;
  return (0, n.jsx)(o.ModalRoot, {
    className: g.modalRoot,
    transitionState: B,
    "aria-label": T.default.Messages.SUBMIT_BUG,
    children: (0, n.jsx)(o.ModalContent, {
      className: g.modalContent,
      paddingFix: !1,
      children: (0, n.jsx)("div", {
        className: g.container,
        children: (0, n.jsx)(o.HeadingLevel, {
          forceLevel: 1,
          component: (0, n.jsx)("div", {
            className: g.sidebarContainer,
            children: (0, n.jsx)(h.default, {
              strong: !0,
              color: h.default.Colors.HEADER_PRIMARY,
              size: h.default.Sizes.SIZE_24,
              children: (0, n.jsx)(o.H, {
                children: T.default.Messages.BUG_REPORT_TITLE
              })
            })
          }),
          children: (0, n.jsxs)("div", {
            className: g.contentContainer,
            children: [(0, n.jsx)("img", {
              className: g.contentIcon,
              alt: "",
              src: ep
            }), (0, n.jsxs)("form", {
              className: g.form,
              onSubmit: eI,
              children: [(0, n.jsx)(o.FormItem, {
                error: eo && "" === b ? T.default.Messages.REQUIRED : null,
                title: T.default.Messages.BUG_REPORT_NAME,
                className: g.formInput,
                children: (0, n.jsx)(o.TextInput, {
                  placeholder: "Something is broken on this screen.",
                  type: "text",
                  value: b,
                  maxLength: 100,
                  onChange: L
                })
              }), (0, n.jsxs)(o.FormItem, {
                title: T.default.Messages.BUG_REPORT_DESCRIPTION,
                className: g.formInput,
                children: [(0, n.jsx)(o.TextArea, {
                  placeholder: "What did you expect to see?",
                  value: G,
                  onChange: y
                }), (0, n.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "info-help-text",
                  children: "You can add additional information/media on the ticket after submitting"
                })]
              }), (0, n.jsx)(o.FormItem, {
                error: eo && void 0 === F ? T.default.Messages.REQUIRED : null,
                title: T.default.Messages.BUG_REPORT_PRIORITY,
                className: g.formInput,
                children: (0, n.jsx)(o.SingleSelect, {
                  renderOptionLabel: e => (function(e) {
                    let t = e.priority;
                    return (0, n.jsxs)("div", {
                      className: g.formPriorityImageContainer,
                      children: [(0, n.jsxs)("div", {
                        className: g.formPriorityTitleContainer,
                        children: [(0, n.jsx)("img", {
                          alt: "",
                          className: g.formPriorityImage,
                          src: (0, R.getEmojiURL)({
                            id: t.emoji,
                            animated: !0,
                            size: 48
                          })
                        }), (0, n.jsx)(o.Text, {
                          color: "header-primary",
                          variant: "text-sm/semibold",
                          className: g.formPriorityTitle,
                          children: t.title
                        })]
                      }), (0, n.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        className: g.formPriorityDescription,
                        children: t.description
                      })]
                    })
                  })(e),
                  onChange: D,
                  options: (0, v.getPriorities)().map(e => ({
                    priority: e,
                    value: e.value,
                    label: e.title
                  })),
                  value: F,
                  maxVisibleItems: 3,
                  closeOnSelect: !0
                })
              }), (0, n.jsx)(o.FormItem, {
                title: T.default.Messages.BUG_REPORT_FEATURE_AREA,
                className: g.formInput,
                children: (0, n.jsx)(o.SearchableSelect, {
                  value: z,
                  options: null !== (P = null == (t = H) ? void 0 : null === (C = t.features) || void 0 === C ? void 0 : null === (N = C.filter(e => "" !== (0, v.getFeatureId)(e))) || void 0 === N ? void 0 : null === (S = N.map(e => {
                    var t;
                    return {
                      label: null !== (t = e.name) && void 0 !== t ? t : "",
                      value: (0, v.getFeatureId)(e)
                    }
                  })) || void 0 === S ? void 0 : S.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== P ? P : [],
                  isDisabled: null == H,
                  onChange: e => X(e)
                })
              }), (0, n.jsx)(o.FormItem, {
                title: T.default.Messages.BUG_REPORT_URL,
                className: g.formInput,
                children: (0, n.jsx)(o.TextInput, {
                  placeholder: T.default.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                  type: "text",
                  value: w,
                  maxLength: 5e3,
                  onChange: k
                })
              }), (0, n.jsx)(o.FormItem, {
                className: g.formInput,
                children: (0, n.jsx)(o.Checkbox, {
                  value: Q,
                  onChange: (e, t) => q(t),
                  children: (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "info-help-text",
                    children: T.default.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                  })
                })
              }), Q ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(o.FormItem, {
                  title: T.default.Messages.BUG_REPORT_DEVICE,
                  className: g.formInput,
                  children: (0, n.jsx)(o.TextInput, {
                    placeholder: "Device",
                    value: K,
                    onChange: e => Z(e)
                  })
                }), (0, n.jsx)(o.FormItem, {
                  title: T.default.Messages.BUG_REPORT_OS,
                  className: g.formInput,
                  children: (0, n.jsx)(o.SingleSelect, {
                    value: J,
                    options: O,
                    onChange: e => $(e)
                  })
                }), (0, n.jsx)(o.FormItem, {
                  title: T.default.Messages.BUG_REPORT_OS_VERSION,
                  className: g.formInput,
                  children: (0, n.jsx)(o.TextInput, {
                    placeholder: "Operating System Version",
                    value: ee,
                    onChange: e => et(e)
                  })
                }), (0, n.jsx)(o.FormItem, {
                  title: T.default.Messages.BUG_REPORT_CLIENT_VERSION,
                  className: g.formInput,
                  children: (0, n.jsx)(o.TextInput, {
                    placeholder: "Client Version",
                    value: ea,
                    onChange: e => en(e)
                  })
                }), (0, n.jsx)(o.FormItem, {
                  title: T.default.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                  className: g.formInput,
                  children: (0, n.jsx)(o.TextInput, {
                    placeholder: "Client Build Number",
                    value: el,
                    onChange: e => es(e)
                  })
                }), (0, n.jsx)(o.FormItem, {
                  title: T.default.Messages.BUG_REPORT_LOCALE,
                  className: g.formInput,
                  children: (0, n.jsx)(o.TextInput, {
                    placeholder: "Locale",
                    value: ei,
                    onChange: e => er(e)
                  })
                })]
              }) : null, (0, n.jsxs)(o.Button, {
                className: g.uploadButton,
                children: [T.default.Messages.BUG_REPORT_ADD_ATTACHMENTS, (0, n.jsx)(u.default, {
                  ref: A,
                  onChange: e => {
                    var t, a;
                    (null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (t = a.files) || void 0 === t ? void 0 : t[0]) != null && V([...Y, ...Array.from(e.currentTarget.files).map(e => new d.default({
                      id: (0, s.v4)(),
                      file: e,
                      platform: d.UploadPlatform.WEB
                    }))])
                  },
                  multiple: !0
                })]
              }), Y.length > 0 ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                  className: g.imageOptionsContainer,
                  children: (0, n.jsx)(o.FormTitle, {
                    children: "Preview"
                  })
                }), (0, n.jsx)("div", {
                  ref: U,
                  className: g.attachmentsGrid,
                  children: Y.length > 0 && Y.map(e => (0, n.jsxs)("div", {
                    className: g.attachmentsGridItem,
                    children: [(0, n.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      children: e.filename
                    }), (0, n.jsxs)("div", {
                      className: g.attachmentContainer,
                      children: [(0, n.jsx)(m.UploadIcon, {
                        upload: e
                      }), (0, n.jsx)("div", {
                        className: g.toolBar,
                        children: (0, n.jsx)(I.default, {
                          children: (0, n.jsx)(c.default, {
                            tooltip: T.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                            onClick: () => eh(e.id),
                            dangerous: !0,
                            children: (0, n.jsx)(_.default, {})
                          })
                        })
                      })]
                    })]
                  }, e.id))
                })]
              }) : null, em ? (0, n.jsx)(o.Text, {
                color: "text-danger",
                variant: "text-sm/normal",
                children: "Something went wrong, try again!"
              }) : null]
            }), (0, n.jsxs)(o.ModalFooter, {
              className: g.submitContainer,
              children: [(0, n.jsx)(o.Button, {
                className: g.formButton,
                look: o.ButtonLooks.BLANK,
                onClick: e_,
                children: (0, n.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: T.default.Messages.CANCEL
                })
              }), (0, n.jsx)(o.Button, {
                submitting: ed,
                className: g.formButton,
                onClick: eI,
                children: "Submit and Open Report"
              })]
            })]
          })
        })
      })
    })
  })
}