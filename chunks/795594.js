"use strict";
s.r(t), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("658722"),
  o = s.n(r),
  d = s("243814"),
  u = s("442837"),
  c = s("921072"),
  S = s("1561"),
  E = s("882485"),
  T = s("389507"),
  _ = s("689773"),
  f = s("481060"),
  m = s("384275"),
  I = s("230711"),
  g = s("497321"),
  N = s("468026"),
  h = s("566620"),
  C = s("317381"),
  O = s("979200"),
  A = s("713938"),
  p = s("881998"),
  R = s("246946"),
  x = s("186095"),
  M = s("285952"),
  L = s("6048"),
  D = s("950463"),
  P = s("507893"),
  v = s("768581"),
  b = s("49012"),
  j = s("210887"),
  U = s("436267"),
  G = s("494620"),
  F = s("981631"),
  B = s("689938"),
  y = s("338009"),
  k = s("611273");
let V = u.default.connectStores([j.default], () => ({
  theme: j.default.theme
}))(x.default);

function H(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: y.twoWayWarning,
    children: [(0, a.jsx)(P.default, {
      className: y.twoWayWarningIcon
    }), (0, a.jsx)(f.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: B.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => I.default.setSection(F.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let w = e => {
    let {
      disclosure: t
    } = e;
    return n.useMemo(() => {
      switch (t) {
        case c.ApplicationDisclosureType.IP_LOCATION:
          return (0, a.jsx)(D.default, {
            className: y.disclosureIcon
          });
        case c.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS:
          return (0, a.jsx)(T.EmbedIcon, {
            className: y.disclosureIcon
          });
        default:
          return (0, a.jsx)(E.CircleInformationIcon, {
            className: y.disclosureIcon
          })
      }
    }, [t])
  },
  Y = e => {
    let {
      scopes: t,
      application: s,
      onDelete: n,
      disclosures: l
    } = e, r = () => {
      let e = B.default.Messages.DELETE_APP_CONFIRM_MSG;
      return (0, U.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
        children: [e, (0, a.jsx)(G.default, {
          className: y.infoBox,
          children: B.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
            applicationName: s.name
          })
        })]
      })), (0, f.openModal)(t => (0, a.jsx)(N.default, {
        title: B.default.Messages.DEAUTHORIZE_APP,
        body: e,
        confirmText: B.default.Messages.DEAUTHORIZE,
        cancelText: B.default.Messages.CANCEL,
        onConfirm: n,
        ...t
      }))
    }, o = () => {
      null != s.terms_of_service_url && (0, b.handleClick)({
        href: s.terms_of_service_url,
        shouldConfirm: !0
      })
    }, u = () => {
      null != s.privacy_policy_url && (0, b.handleClick)({
        href: s.privacy_policy_url,
        shouldConfirm: !0
      })
    }, c = (0, U.useShouldWarnAuthorizedAppTwoWay)(s.id);
    return (0, a.jsx)(f.Card, {
      className: i()(y.authedApp, k.marginBottom8),
      outline: !0,
      children: (0, a.jsxs)(f.HeadingLevel, {
        component: (() => {
          let e = v.default.getApplicationIconURL({
              id: s.id,
              icon: s.icon
            }),
            t = null != e ? (0, a.jsx)(M.default.Child, {
              className: y.appAvatar,
              grow: 0,
              children: (0, a.jsx)("img", {
                src: e,
                alt: ""
              })
            }) : null;
          return (0, a.jsxs)(M.default, {
            className: i()(y.__invalid_header, k.marginBottom20),
            children: [(0, a.jsxs)(M.default, {
              className: y.headerInfo,
              children: [t, (0, a.jsx)(M.default.Child, {
                children: (0, a.jsx)(f.Heading, {
                  variant: "text-sm/semibold",
                  children: s.name
                })
              })]
            }), (0, a.jsx)(M.default.Child, {
              wrap: !0,
              grow: 0,
              children: (0, a.jsx)(f.Button, {
                className: y.deleteApp,
                color: f.ButtonColors.RED,
                look: f.ButtonLooks.OUTLINED,
                size: f.ButtonSizes.SMALL,
                onClick: r,
                children: B.default.Messages.DEAUTHORIZE
              })
            })]
          })
        })(),
        children: [(() => {
          if (null != s.description && "" !== s.description) return (0, a.jsx)(f.FormItem, {
            faded: !0,
            title: B.default.Messages.ABOUT_THIS_APP,
            children: (0, a.jsx)(f.FormText, {
              children: s.description
            })
          })
        })(), (() => {
          if (null != s.terms_of_service_url || null != s.privacy_policy_url) return (0, a.jsxs)("div", {
            className: y.tosPrivacy,
            children: [null != s.terms_of_service_url ? (0, a.jsxs)(S.Clickable, {
              tag: "a",
              onClick: o,
              className: y.tos,
              children: [(0, a.jsx)(f.FormText, {
                className: y.link,
                children: B.default.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
              }), (0, a.jsx)(_.LinkExternalSmallIcon, {
                className: y.externalLinkIcon,
                color: "var(--text-link)"
              })]
            }) : null, null != s.privacy_policy_url ? (0, a.jsxs)("div", {
              className: y.privacy,
              children: [null != s.terms_of_service_url ? (0, a.jsx)("div", {
                className: y.divider
              }) : null, (0, a.jsxs)(S.Clickable, {
                tag: "a",
                onClick: u,
                className: y.privacy,
                children: [(0, a.jsx)(f.FormText, {
                  className: y.link,
                  children: B.default.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                }), (0, a.jsx)(_.LinkExternalSmallIcon, {
                  className: y.externalLinkIcon,
                  color: "var(--text-link)"
                })]
              })]
            }) : null]
          })
        })(), (() => {
          let e = [];
          for (let s of t) e.push((0, A.getScopeName)(s, t)), s === d.OAuth2Scopes.APPLICATIONS_COMMANDS && e.push(B.default.Messages.SCOPE_DM_YOU);
          if (e.length > 0 || null != l && l.length > 0) return (0, a.jsx)(f.FormItem, {
            faded: !0,
            title: B.default.Messages.PERMISSIONS,
            className: k.marginTop20,
            children: (0, a.jsxs)("ul", {
              children: [e.map((e, t) => (0, a.jsxs)("li", {
                className: i()(y.permission, k.marginTop8),
                children: [(0, a.jsx)("i", {
                  className: y.permissionCheckmark
                }), (0, a.jsx)(f.FormText, {
                  children: e
                })]
              }, t)), null == l ? void 0 : l.map((t, s) => {
                let n = (0, O.getTextForDisclosure)(t);
                return null != n ? (0, a.jsxs)("li", {
                  className: i()(y.permission, k.marginTop8),
                  children: [(0, a.jsx)(w, {
                    disclosure: t
                  }), (0, a.jsx)(f.FormText, {
                    children: n
                  })]
                }, s + e.length) : null
              })]
            })
          })
        })(), c && (0, a.jsx)(H, {
          application: s
        })]
      })
    })
  };
t.default = () => {
  let e = (0, u.useStateFromStores)([R.default], () => R.default.hidePersonalInformation),
    t = (0, u.useStateFromStores)([p.default], () => p.default.getApps()),
    l = (0, u.useStateFromStores)([C.default], () => C.default.getSelfEmbeddedActivities());
  n.useEffect(() => {
    m.default.fetch()
  }, []);
  let i = e => {
      let {
        id: t,
        application: s
      } = e;
      m.default.delete(t);
      let a = l.get(s.id);
      null != a && (0, h.stopEmbeddedActivity)({
        channelId: a.channelId,
        applicationId: s.id
      })
    },
    [r, d] = n.useState(""),
    c = e => {
      d(e)
    },
    S = () => {
      d("")
    },
    E = () => (0, a.jsx)("div", {
      className: y.searchContainer,
      children: (0, a.jsx)(L.default, {
        size: L.default.Sizes.MEDIUM,
        query: r,
        onChange: c,
        onClear: S,
        placeholder: B.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": B.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    T = (e, t) => (0, a.jsxs)(V, {
      className: y.__invalid_marginTop20,
      children: [(0, a.jsx)(x.EmptyStateImage, {
        darkSrc: s("701972"),
        lightSrc: s("818658"),
        width: 380,
        height: 282
      }), (0, a.jsx)(x.EmptyStateText, {
        note: e,
        children: t
      })]
    }),
    _ = n.useMemo(() => {
      let e = r.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => o()(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, r]);
  return e ? (0, a.jsx)(g.default, {}) : (0, a.jsx)(f.FormSection, {
    tag: f.FormTitleTags.H1,
    title: B.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(f.HeadingLevel, {
      component: (0, a.jsx)(f.FormNotice, {
        className: k.marginBottom40,
        type: f.CardTypes.PRIMARY,
        title: B.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: B.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == _ ? (0, a.jsx)(f.Spinner, {
        className: k.marginTop20,
        type: f.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? T(B.default.Messages.NO_AUTHORIZED_APPS_NOTE, B.default.Messages.NO_AUTHORIZED_APPS) : 0 === _.length ? (0, a.jsxs)(a.Fragment, {
        children: [E(), T(null, B.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [E(), _.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(Y, {
          onDelete: () => i(e),
          ...e
        }, e.id))]
      })
    })
  })
}