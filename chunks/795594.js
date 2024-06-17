"use strict";
s.r(t), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("658722"),
  o = s.n(r),
  d = s("243814"),
  u = s("442837"),
  c = s("921072"),
  S = s("1561"),
  E = s("882485"),
  T = s("389507"),
  _ = s("689773"),
  I = s("481060"),
  N = s("384275"),
  g = s("230711"),
  f = s("497321"),
  m = s("468026"),
  A = s("566620"),
  C = s("317381"),
  O = s("979200"),
  h = s("713938"),
  R = s("881998"),
  p = s("246946"),
  M = s("285952"),
  D = s("950463"),
  x = s("507893"),
  L = s("768581"),
  P = s("49012"),
  b = s("210887"),
  v = s("436267"),
  U = s("494620"),
  j = s("981631"),
  G = s("689938"),
  F = s("338009"),
  B = s("611273");
let y = u.default.connectStores([b.default], () => ({
  theme: b.default.theme
}))(I.EmptyState);

function V(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: F.twoWayWarning,
    children: [(0, a.jsx)(x.default, {
      className: F.twoWayWarningIcon
    }), (0, a.jsx)(I.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: G.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => g.default.setSection(j.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let Y = e => {
    let {
      disclosure: t
    } = e;
    return n.useMemo(() => {
      switch (t) {
        case c.ApplicationDisclosureType.IP_LOCATION:
          return (0, a.jsx)(D.default, {
            className: F.disclosureIcon
          });
        case c.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS:
          return (0, a.jsx)(T.EmbedIcon, {
            className: F.disclosureIcon
          });
        default:
          return (0, a.jsx)(E.CircleInformationIcon, {
            className: F.disclosureIcon
          })
      }
    }, [t])
  },
  H = e => {
    let {
      scopes: t,
      application: s,
      onDelete: n,
      disclosures: i
    } = e, r = () => {
      let e = G.default.Messages.DELETE_APP_CONFIRM_MSG;
      return (0, v.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
        children: [e, (0, a.jsx)(U.default, {
          className: F.infoBox,
          children: G.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
            applicationName: s.name
          })
        })]
      })), (0, I.openModal)(t => (0, a.jsx)(m.default, {
        title: G.default.Messages.DEAUTHORIZE_APP,
        body: e,
        confirmText: G.default.Messages.DEAUTHORIZE,
        cancelText: G.default.Messages.CANCEL,
        onConfirm: n,
        ...t
      }))
    }, o = () => {
      null != s.terms_of_service_url && (0, P.handleClick)({
        href: s.terms_of_service_url,
        shouldConfirm: !0
      })
    }, u = () => {
      null != s.privacy_policy_url && (0, P.handleClick)({
        href: s.privacy_policy_url,
        shouldConfirm: !0
      })
    }, c = (0, v.useShouldWarnAuthorizedAppTwoWay)(s.id);
    return (0, a.jsx)(I.Card, {
      className: l()(F.authedApp, B.marginBottom8),
      outline: !0,
      children: (0, a.jsxs)(I.HeadingLevel, {
        component: (() => {
          let e = L.default.getApplicationIconURL({
              id: s.id,
              icon: s.icon
            }),
            t = null != e ? (0, a.jsx)(M.default.Child, {
              className: F.appAvatar,
              grow: 0,
              children: (0, a.jsx)("img", {
                src: e,
                alt: ""
              })
            }) : null;
          return (0, a.jsxs)(M.default, {
            className: l()(F.__invalid_header, B.marginBottom20),
            children: [(0, a.jsxs)(M.default, {
              className: F.headerInfo,
              children: [t, (0, a.jsx)(M.default.Child, {
                children: (0, a.jsx)(I.Heading, {
                  variant: "text-sm/semibold",
                  children: s.name
                })
              })]
            }), (0, a.jsx)(M.default.Child, {
              wrap: !0,
              grow: 0,
              children: (0, a.jsx)(I.Button, {
                color: I.ButtonColors.RED,
                look: I.ButtonLooks.OUTLINED,
                size: I.ButtonSizes.SMALL,
                onClick: r,
                children: G.default.Messages.DEAUTHORIZE
              })
            })]
          })
        })(),
        children: [(() => {
          if (null != s.description && "" !== s.description) return (0, a.jsx)(I.FormItem, {
            faded: !0,
            title: G.default.Messages.ABOUT_THIS_APP,
            children: (0, a.jsx)(I.FormText, {
              children: s.description
            })
          })
        })(), (() => {
          if (null != s.terms_of_service_url || null != s.privacy_policy_url) return (0, a.jsxs)("div", {
            className: F.tosPrivacy,
            children: [null != s.terms_of_service_url ? (0, a.jsxs)(S.Clickable, {
              tag: "a",
              onClick: o,
              className: F.tos,
              children: [(0, a.jsx)(I.FormText, {
                className: F.link,
                children: G.default.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
              }), (0, a.jsx)(_.LinkExternalSmallIcon, {
                className: F.externalLinkIcon,
                color: "var(--text-link)"
              })]
            }) : null, null != s.privacy_policy_url ? (0, a.jsxs)("div", {
              className: F.privacy,
              children: [null != s.terms_of_service_url ? (0, a.jsx)("div", {
                className: F.divider
              }) : null, (0, a.jsxs)(S.Clickable, {
                tag: "a",
                onClick: u,
                className: F.privacy,
                children: [(0, a.jsx)(I.FormText, {
                  className: F.link,
                  children: G.default.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                }), (0, a.jsx)(_.LinkExternalSmallIcon, {
                  className: F.externalLinkIcon,
                  color: "var(--text-link)"
                })]
              })]
            }) : null]
          })
        })(), (() => {
          let e = [];
          for (let s of t) e.push((0, h.getScopeName)(s, t)), s === d.OAuth2Scopes.APPLICATIONS_COMMANDS && e.push(G.default.Messages.SCOPE_DM_YOU);
          if (e.length > 0 || null != i && i.length > 0) return (0, a.jsx)(I.FormItem, {
            faded: !0,
            title: G.default.Messages.PERMISSIONS,
            className: B.marginTop20,
            children: (0, a.jsxs)("ul", {
              children: [e.map((e, t) => (0, a.jsxs)("li", {
                className: l()(F.permission, B.marginTop8),
                children: [(0, a.jsx)("i", {
                  className: F.permissionCheckmark
                }), (0, a.jsx)(I.FormText, {
                  children: e
                })]
              }, t)), null == i ? void 0 : i.map((t, s) => {
                let n = (0, O.getTextForDisclosure)(t);
                return null != n ? (0, a.jsxs)("li", {
                  className: l()(F.permission, B.marginTop8),
                  children: [(0, a.jsx)(Y, {
                    disclosure: t
                  }), (0, a.jsx)(I.FormText, {
                    children: n
                  })]
                }, s + e.length) : null
              })]
            })
          })
        })(), c && (0, a.jsx)(V, {
          application: s
        })]
      })
    })
  };
t.default = () => {
  let e = (0, u.useStateFromStores)([p.default], () => p.default.hidePersonalInformation),
    t = (0, u.useStateFromStores)([R.default], () => R.default.getApps()),
    i = (0, u.useStateFromStores)([C.default], () => C.default.getSelfEmbeddedActivities());
  n.useEffect(() => {
    N.default.fetch()
  }, []);
  let l = e => {
      let {
        id: t,
        application: s
      } = e;
      N.default.delete(t);
      let a = i.get(s.id);
      null != a && (0, A.stopEmbeddedActivity)({
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
      className: F.searchContainer,
      children: (0, a.jsx)(I.SearchBar, {
        size: I.SearchBar.Sizes.MEDIUM,
        query: r,
        onChange: c,
        onClear: S,
        placeholder: G.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": G.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    T = (e, t) => (0, a.jsxs)(y, {
      className: F.__invalid_marginTop20,
      children: [(0, a.jsx)(I.EmptyStateImage, {
        darkSrc: s("701972"),
        lightSrc: s("818658"),
        width: 380,
        height: 282
      }), (0, a.jsx)(I.EmptyStateText, {
        note: e,
        children: t
      })]
    }),
    _ = n.useMemo(() => {
      let e = r.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => o()(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, r]);
  return e ? (0, a.jsx)(f.default, {}) : (0, a.jsx)(I.FormSection, {
    tag: I.FormTitleTags.H1,
    title: G.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(I.HeadingLevel, {
      component: (0, a.jsx)(I.FormNotice, {
        className: B.marginBottom40,
        type: I.CardTypes.PRIMARY,
        title: G.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: G.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == _ ? (0, a.jsx)(I.Spinner, {
        className: B.marginTop20,
        type: I.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? T(G.default.Messages.NO_AUTHORIZED_APPS_NOTE, G.default.Messages.NO_AUTHORIZED_APPS) : 0 === _.length ? (0, a.jsxs)(a.Fragment, {
        children: [E(), T(null, G.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [E(), _.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(H, {
          onDelete: () => l(e),
          ...e
        }, e.id))]
      })
    })
  })
}