"use strict";
s.r(t), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("658722"),
  o = s.n(r),
  d = s("442837"),
  u = s("921072"),
  c = s("1561"),
  S = s("882485"),
  E = s("389507"),
  T = s("689773"),
  f = s("481060"),
  m = s("384275"),
  _ = s("230711"),
  g = s("497321"),
  I = s("468026"),
  h = s("566620"),
  N = s("317381"),
  p = s("979200"),
  C = s("713938"),
  A = s("881998"),
  O = s("246946"),
  x = s("186095"),
  R = s("285952"),
  M = s("6048"),
  v = s("950463"),
  D = s("507893"),
  L = s("768581"),
  P = s("49012"),
  j = s("210887"),
  b = s("436267"),
  U = s("494620"),
  y = s("981631"),
  B = s("231338"),
  F = s("689938"),
  G = s("338009"),
  k = s("611273");
let w = d.default.connectStores([j.default], () => ({
  theme: j.default.theme
}))(x.default);

function H(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: G.twoWayWarning,
    children: [(0, a.jsx)(D.default, {
      className: G.twoWayWarningIcon
    }), (0, a.jsx)(f.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: F.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => _.default.setSection(y.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let V = e => {
    let {
      disclosure: t
    } = e;
    return n.useMemo(() => {
      switch (t) {
        case u.ApplicationDisclosureType.IP_LOCATION:
          return (0, a.jsx)(v.default, {
            className: G.disclosureIcon
          });
        case u.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS:
          return (0, a.jsx)(E.EmbedIcon, {
            className: G.disclosureIcon
          });
        default:
          return (0, a.jsx)(S.CircleInformationIcon, {
            className: G.disclosureIcon
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
      let e = F.default.Messages.DELETE_APP_CONFIRM_MSG;
      return (0, b.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
        children: [e, (0, a.jsx)(U.default, {
          className: G.infoBox,
          children: F.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
            applicationName: s.name
          })
        })]
      })), (0, f.openModal)(t => (0, a.jsx)(I.default, {
        title: F.default.Messages.DEAUTHORIZE_APP,
        body: e,
        confirmText: F.default.Messages.DEAUTHORIZE,
        cancelText: F.default.Messages.CANCEL,
        onConfirm: n,
        ...t
      }))
    }, o = () => {
      null != s.terms_of_service_url && (0, P.handleClick)({
        href: s.terms_of_service_url,
        shouldConfirm: !0
      })
    }, d = () => {
      null != s.privacy_policy_url && (0, P.handleClick)({
        href: s.privacy_policy_url,
        shouldConfirm: !0
      })
    }, u = (0, b.useShouldWarnAuthorizedAppTwoWay)(s.id);
    return (0, a.jsx)(f.Card, {
      className: i()(G.authedApp, k.marginBottom8),
      outline: !0,
      children: (0, a.jsxs)(f.HeadingLevel, {
        component: (() => {
          let e = L.default.getApplicationIconURL({
              id: s.id,
              icon: s.icon
            }),
            t = null != e ? (0, a.jsx)(R.default.Child, {
              className: G.appAvatar,
              grow: 0,
              children: (0, a.jsx)("img", {
                src: e,
                alt: ""
              })
            }) : null;
          return (0, a.jsxs)(R.default, {
            className: i()(G.__invalid_header, k.marginBottom20),
            children: [(0, a.jsxs)(R.default, {
              className: G.headerInfo,
              children: [t, (0, a.jsx)(R.default.Child, {
                children: (0, a.jsx)(f.Heading, {
                  variant: "text-sm/semibold",
                  children: s.name
                })
              })]
            }), (0, a.jsx)(R.default.Child, {
              wrap: !0,
              grow: 0,
              children: (0, a.jsx)(f.Button, {
                className: G.deleteApp,
                color: f.ButtonColors.RED,
                look: f.ButtonLooks.OUTLINED,
                size: f.ButtonSizes.SMALL,
                onClick: r,
                children: F.default.Messages.DEAUTHORIZE
              })
            })]
          })
        })(),
        children: [(() => {
          if (null != s.description && "" !== s.description) return (0, a.jsx)(f.FormItem, {
            faded: !0,
            title: F.default.Messages.ABOUT_THIS_APP,
            children: (0, a.jsx)(f.FormText, {
              children: s.description
            })
          })
        })(), (() => {
          if (null != s.terms_of_service_url || null != s.privacy_policy_url) return (0, a.jsxs)("div", {
            className: G.tosPrivacy,
            children: [null != s.terms_of_service_url ? (0, a.jsxs)(c.Clickable, {
              tag: "a",
              onClick: o,
              className: G.tos,
              children: [(0, a.jsx)(f.FormText, {
                className: G.link,
                children: F.default.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
              }), (0, a.jsx)(T.LinkExternalSmallIcon, {
                className: G.externalLinkIcon,
                color: "var(--text-link)"
              })]
            }) : null, null != s.privacy_policy_url ? (0, a.jsxs)("div", {
              className: G.privacy,
              children: [null != s.terms_of_service_url ? (0, a.jsx)("div", {
                className: G.divider
              }) : null, (0, a.jsxs)(c.Clickable, {
                tag: "a",
                onClick: d,
                className: G.privacy,
                children: [(0, a.jsx)(f.FormText, {
                  className: G.link,
                  children: F.default.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                }), (0, a.jsx)(T.LinkExternalSmallIcon, {
                  className: G.externalLinkIcon,
                  color: "var(--text-link)"
                })]
              })]
            }) : null]
          })
        })(), (() => {
          let e = [];
          for (let s of t) e.push((0, C.getScopeName)(s, t)), s === B.OAuth2Scopes.APPLICATIONS_COMMANDS && e.push(F.default.Messages.SCOPE_DM_YOU);
          if (e.length > 0 || null != l && l.length > 0) return (0, a.jsx)(f.FormItem, {
            faded: !0,
            title: F.default.Messages.PERMISSIONS,
            className: k.marginTop20,
            children: (0, a.jsxs)("ul", {
              children: [e.map((e, t) => (0, a.jsxs)("li", {
                className: i()(G.permission, k.marginTop8),
                children: [(0, a.jsx)("i", {
                  className: G.permissionCheckmark
                }), (0, a.jsx)(f.FormText, {
                  children: e
                })]
              }, t)), null == l ? void 0 : l.map((t, s) => {
                let n = (0, p.getTextForDisclosure)(t);
                return null != n ? (0, a.jsxs)("li", {
                  className: i()(G.permission, k.marginTop8),
                  children: [(0, a.jsx)(V, {
                    disclosure: t
                  }), (0, a.jsx)(f.FormText, {
                    children: n
                  })]
                }, s + e.length) : null
              })]
            })
          })
        })(), u && (0, a.jsx)(H, {
          application: s
        })]
      })
    })
  };
t.default = () => {
  let e = (0, d.useStateFromStores)([O.default], () => O.default.hidePersonalInformation),
    t = (0, d.useStateFromStores)([A.default], () => A.default.getApps()),
    l = (0, d.useStateFromStores)([N.default], () => N.default.getSelfEmbeddedActivities());
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
    [r, u] = n.useState(""),
    c = e => {
      u(e)
    },
    S = () => {
      u("")
    },
    E = () => (0, a.jsx)("div", {
      className: G.searchContainer,
      children: (0, a.jsx)(M.default, {
        size: M.default.Sizes.MEDIUM,
        query: r,
        onChange: c,
        onClear: S,
        placeholder: F.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": F.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    T = (e, t) => (0, a.jsxs)(w, {
      className: G.__invalid_marginTop20,
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
    title: F.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(f.HeadingLevel, {
      component: (0, a.jsx)(f.FormNotice, {
        className: k.marginBottom40,
        type: f.CardTypes.PRIMARY,
        title: F.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: F.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == _ ? (0, a.jsx)(f.Spinner, {
        className: k.marginTop20,
        type: f.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? T(F.default.Messages.NO_AUTHORIZED_APPS_NOTE, F.default.Messages.NO_AUTHORIZED_APPS) : 0 === _.length ? (0, a.jsxs)(a.Fragment, {
        children: [E(), T(null, F.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [E(), _.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(Y, {
          onDelete: () => i(e),
          ...e
        }, e.id))]
      })
    })
  })
}