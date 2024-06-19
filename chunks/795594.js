t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(658722),
  o = t.n(r),
  c = t(243814),
  E = t(442837),
  d = t(921072),
  _ = t(1561),
  T = t(481060),
  S = t(384275),
  u = t(230711),
  I = t(497321),
  N = t(468026),
  A = t(566620),
  C = t(317381),
  O = t(979200),
  m = t(713938),
  h = t(881998),
  g = t(246946),
  R = t(285952),
  M = t(768581),
  x = t(49012),
  D = t(210887),
  p = t(436267),
  L = t(494620),
  P = t(981631),
  Z = t(689938),
  f = t(661071),
  v = t(331651);
let j = E.ZP.connectStores([D.Z], () => ({
  theme: D.Z.theme
}))(T.EmptyState);

function U(e) {
  let {
    application: s
  } = e;
  return (0, n.jsxs)("div", {
    className: f.twoWayWarning,
    children: [(0, n.jsx)(T.CircleInformationIcon, {
      size: "md",
      color: "currentColor",
      className: f.twoWayWarningIcon
    }), (0, n.jsx)(T.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: Z.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: s.name,
        onConnectionPress: () => u.Z.setSection(P.jXE.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let B = e => {
    let {
      disclosure: s
    } = e;
    return i.useMemo(() => {
      switch (s) {
        case d.u$.IP_LOCATION:
          return (0, n.jsx)(T.GlobeEarthIcon, {
            size: "md",
            color: "currentColor",
            className: f.disclosureIcon
          });
        case d.u$.DISPLAYS_ADVERTISEMENTS:
          return (0, n.jsx)(T.EmbedIcon, {
            className: f.disclosureIcon
          });
        default:
          return (0, n.jsx)(T.CircleInformationIcon, {
            className: f.disclosureIcon
          })
      }
    }, [s])
  },
  b = e => {
    let {
      scopes: s,
      application: t,
      onDelete: i,
      disclosures: a
    } = e, r = () => {
      let e = Z.Z.Messages.DELETE_APP_CONFIRM_MSG;
      return (0, p.Z)(t.id) && (e = (0, n.jsxs)(n.Fragment, {
        children: [e, (0, n.jsx)(L.Z, {
          className: f.infoBox,
          children: Z.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
            applicationName: t.name
          })
        })]
      })), (0, T.openModal)(s => (0, n.jsx)(N.default, {
        title: Z.Z.Messages.DEAUTHORIZE_APP,
        body: e,
        confirmText: Z.Z.Messages.DEAUTHORIZE,
        cancelText: Z.Z.Messages.CANCEL,
        onConfirm: i,
        ...s
      }))
    }, o = () => {
      null != t.terms_of_service_url && (0, x.q)({
        href: t.terms_of_service_url,
        shouldConfirm: !0
      })
    }, E = () => {
      null != t.privacy_policy_url && (0, x.q)({
        href: t.privacy_policy_url,
        shouldConfirm: !0
      })
    }, d = (0, p.O)(t.id);
    return (0, n.jsx)(T.Card, {
      className: l()(f.authedApp, v.marginBottom8),
      outline: !0,
      children: (0, n.jsxs)(T.HeadingLevel, {
        component: (() => {
          let e = M.ZP.getApplicationIconURL({
              id: t.id,
              icon: t.icon
            }),
            s = null != e ? (0, n.jsx)(R.Z.Child, {
              className: f.appAvatar,
              grow: 0,
              children: (0, n.jsx)("img", {
                src: e,
                alt: ""
              })
            }) : null;
          return (0, n.jsxs)(R.Z, {
            className: l()(f.__invalid_header, v.marginBottom20),
            children: [(0, n.jsxs)(R.Z, {
              className: f.headerInfo,
              children: [s, (0, n.jsx)(R.Z.Child, {
                children: (0, n.jsx)(T.Heading, {
                  variant: "text-sm/semibold",
                  children: t.name
                })
              })]
            }), (0, n.jsx)(R.Z.Child, {
              wrap: !0,
              grow: 0,
              children: (0, n.jsx)(T.Button, {
                color: T.ButtonColors.RED,
                look: T.ButtonLooks.OUTLINED,
                size: T.ButtonSizes.SMALL,
                onClick: r,
                children: Z.Z.Messages.DEAUTHORIZE
              })
            })]
          })
        })(),
        children: [(() => {
          if (null != t.description && "" !== t.description) return (0, n.jsx)(T.FormItem, {
            faded: !0,
            title: Z.Z.Messages.ABOUT_THIS_APP,
            children: (0, n.jsx)(T.FormText, {
              children: t.description
            })
          })
        })(), (() => {
          if (null != t.terms_of_service_url || null != t.privacy_policy_url) return (0, n.jsxs)("div", {
            className: f.tosPrivacy,
            children: [null != t.terms_of_service_url ? (0, n.jsxs)(_.P, {
              tag: "a",
              onClick: o,
              className: f.tos,
              children: [(0, n.jsx)(T.FormText, {
                className: f.link,
                children: Z.Z.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
              }), (0, n.jsx)(T.LinkExternalSmallIcon, {
                className: f.externalLinkIcon,
                color: "var(--text-link)"
              })]
            }) : null, null != t.privacy_policy_url ? (0, n.jsxs)("div", {
              className: f.privacy,
              children: [null != t.terms_of_service_url ? (0, n.jsx)("div", {
                className: f.divider
              }) : null, (0, n.jsxs)(_.P, {
                tag: "a",
                onClick: E,
                className: f.privacy,
                children: [(0, n.jsx)(T.FormText, {
                  className: f.link,
                  children: Z.Z.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                }), (0, n.jsx)(T.LinkExternalSmallIcon, {
                  className: f.externalLinkIcon,
                  color: "var(--text-link)"
                })]
              })]
            }) : null]
          })
        })(), (() => {
          let e = [];
          for (let t of s) e.push((0, m.jW)(t, s)), t === c.x.APPLICATIONS_COMMANDS && e.push(Z.Z.Messages.SCOPE_DM_YOU);
          if (e.length > 0 || null != a && a.length > 0) return (0, n.jsx)(T.FormItem, {
            faded: !0,
            title: Z.Z.Messages.PERMISSIONS,
            className: v.marginTop20,
            children: (0, n.jsxs)("ul", {
              children: [e.map((e, s) => (0, n.jsxs)("li", {
                className: l()(f.permission, v.marginTop8),
                children: [(0, n.jsx)("i", {
                  className: f.permissionCheckmark
                }), (0, n.jsx)(T.FormText, {
                  children: e
                })]
              }, s)), null == a ? void 0 : a.map((s, t) => {
                let i = (0, O.PM)(s);
                return null != i ? (0, n.jsxs)("li", {
                  className: l()(f.permission, v.marginTop8),
                  children: [(0, n.jsx)(B, {
                    disclosure: s
                  }), (0, n.jsx)(T.FormText, {
                    children: i
                  })]
                }, t + e.length) : null
              })]
            })
          })
        })(), d && (0, n.jsx)(U, {
          application: t
        })]
      })
    })
  };
s.Z = () => {
  let e = (0, E.e7)([g.Z], () => g.Z.hidePersonalInformation),
    s = (0, E.e7)([h.Z], () => h.Z.getApps()),
    a = (0, E.e7)([C.ZP], () => C.ZP.getSelfEmbeddedActivities());
  i.useEffect(() => {
    S.Z.fetch()
  }, []);
  let l = e => {
      let {
        id: s,
        application: t
      } = e;
      S.Z.delete(s);
      let n = a.get(t.id);
      null != n && (0, A.mW)({
        channelId: n.channelId,
        applicationId: t.id
      })
    },
    [r, c] = i.useState(""),
    d = e => {
      c(e)
    },
    _ = () => {
      c("")
    },
    u = () => (0, n.jsx)("div", {
      className: f.searchContainer,
      children: (0, n.jsx)(T.SearchBar, {
        size: T.SearchBar.Sizes.MEDIUM,
        query: r,
        onChange: d,
        onClear: _,
        placeholder: Z.Z.Messages.INTEGRATIONS_SEARCH,
        "aria-label": Z.Z.Messages.INTEGRATIONS_SEARCH
      })
    }),
    N = (e, s) => (0, n.jsxs)(j, {
      className: f.__invalid_marginTop20,
      children: [(0, n.jsx)(T.EmptyStateImage, {
        darkSrc: t(701972),
        lightSrc: t(818658),
        width: 380,
        height: 282
      }), (0, n.jsx)(T.EmptyStateText, {
        note: e,
        children: s
      })]
    }),
    O = i.useMemo(() => {
      let e = r.trim().toLowerCase();
      return "" === e || null == s ? s : s.length < 100 ? s.filter(s => o()(e, s.application.name.toLowerCase())) : s.filter(s => s.application.name.toLowerCase().includes(e))
    }, [s, r]);
  return e ? (0, n.jsx)(I.Z, {}) : (0, n.jsx)(T.FormSection, {
    tag: T.FormTitleTags.H1,
    title: Z.Z.Messages.AUTHORIZED_APPS,
    children: (0, n.jsx)(T.HeadingLevel, {
      component: (0, n.jsx)(T.FormNotice, {
        className: v.marginBottom40,
        type: T.CardTypes.PRIMARY,
        title: Z.Z.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: Z.Z.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == s || null == O ? (0, n.jsx)(T.Spinner, {
        className: v.marginTop20,
        type: T.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === s.length ? N(Z.Z.Messages.NO_AUTHORIZED_APPS_NOTE, Z.Z.Messages.NO_AUTHORIZED_APPS) : 0 === O.length ? (0, n.jsxs)(n.Fragment, {
        children: [u(), N(null, Z.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [u(), O.sort((e, s) => e.application.name.localeCompare(s.application.name)).map(e => (0, n.jsx)(b, {
          onDelete: () => l(e),
          ...e
        }, e.id))]
      })
    })
  })
}