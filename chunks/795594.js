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
  M = s("186095"),
  D = s("285952"),
  x = s("6048"),
  L = s("950463"),
  P = s("507893"),
  b = s("768581"),
  v = s("49012"),
  U = s("210887"),
  j = s("436267"),
  G = s("494620"),
  F = s("981631"),
  B = s("689938"),
  y = s("338009"),
  V = s("611273");
let H = u.default.connectStores([U.default], () => ({
  theme: U.default.theme
}))(M.default);

function Y(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: y.twoWayWarning,
    children: [(0, a.jsx)(P.default, {
      className: y.twoWayWarningIcon
    }), (0, a.jsx)(I.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: B.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => g.default.setSection(F.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let k = e => {
    let {
      disclosure: t
    } = e;
    return n.useMemo(() => {
      switch (t) {
        case c.ApplicationDisclosureType.IP_LOCATION:
          return (0, a.jsx)(L.default, {
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
  w = e => {
    let {
      scopes: t,
      application: s,
      onDelete: n,
      disclosures: i
    } = e, r = () => {
      let e = B.default.Messages.DELETE_APP_CONFIRM_MSG;
      return (0, j.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
        children: [e, (0, a.jsx)(G.default, {
          className: y.infoBox,
          children: B.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
            applicationName: s.name
          })
        })]
      })), (0, I.openModal)(t => (0, a.jsx)(m.default, {
        title: B.default.Messages.DEAUTHORIZE_APP,
        body: e,
        confirmText: B.default.Messages.DEAUTHORIZE,
        cancelText: B.default.Messages.CANCEL,
        onConfirm: n,
        ...t
      }))
    }, o = () => {
      null != s.terms_of_service_url && (0, v.handleClick)({
        href: s.terms_of_service_url,
        shouldConfirm: !0
      })
    }, u = () => {
      null != s.privacy_policy_url && (0, v.handleClick)({
        href: s.privacy_policy_url,
        shouldConfirm: !0
      })
    }, c = (0, j.useShouldWarnAuthorizedAppTwoWay)(s.id);
    return (0, a.jsx)(I.Card, {
      className: l()(y.authedApp, V.marginBottom8),
      outline: !0,
      children: (0, a.jsxs)(I.HeadingLevel, {
        component: (() => {
          let e = b.default.getApplicationIconURL({
              id: s.id,
              icon: s.icon
            }),
            t = null != e ? (0, a.jsx)(D.default.Child, {
              className: y.appAvatar,
              grow: 0,
              children: (0, a.jsx)("img", {
                src: e,
                alt: ""
              })
            }) : null;
          return (0, a.jsxs)(D.default, {
            className: l()(y.__invalid_header, V.marginBottom20),
            children: [(0, a.jsxs)(D.default, {
              className: y.headerInfo,
              children: [t, (0, a.jsx)(D.default.Child, {
                children: (0, a.jsx)(I.Heading, {
                  variant: "text-sm/semibold",
                  children: s.name
                })
              })]
            }), (0, a.jsx)(D.default.Child, {
              wrap: !0,
              grow: 0,
              children: (0, a.jsx)(I.Button, {
                className: y.deleteApp,
                color: I.ButtonColors.RED,
                look: I.ButtonLooks.OUTLINED,
                size: I.ButtonSizes.SMALL,
                onClick: r,
                children: B.default.Messages.DEAUTHORIZE
              })
            })]
          })
        })(),
        children: [(() => {
          if (null != s.description && "" !== s.description) return (0, a.jsx)(I.FormItem, {
            faded: !0,
            title: B.default.Messages.ABOUT_THIS_APP,
            children: (0, a.jsx)(I.FormText, {
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
              children: [(0, a.jsx)(I.FormText, {
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
                children: [(0, a.jsx)(I.FormText, {
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
          for (let s of t) e.push((0, h.getScopeName)(s, t)), s === d.OAuth2Scopes.APPLICATIONS_COMMANDS && e.push(B.default.Messages.SCOPE_DM_YOU);
          if (e.length > 0 || null != i && i.length > 0) return (0, a.jsx)(I.FormItem, {
            faded: !0,
            title: B.default.Messages.PERMISSIONS,
            className: V.marginTop20,
            children: (0, a.jsxs)("ul", {
              children: [e.map((e, t) => (0, a.jsxs)("li", {
                className: l()(y.permission, V.marginTop8),
                children: [(0, a.jsx)("i", {
                  className: y.permissionCheckmark
                }), (0, a.jsx)(I.FormText, {
                  children: e
                })]
              }, t)), null == i ? void 0 : i.map((t, s) => {
                let n = (0, O.getTextForDisclosure)(t);
                return null != n ? (0, a.jsxs)("li", {
                  className: l()(y.permission, V.marginTop8),
                  children: [(0, a.jsx)(k, {
                    disclosure: t
                  }), (0, a.jsx)(I.FormText, {
                    children: n
                  })]
                }, s + e.length) : null
              })]
            })
          })
        })(), c && (0, a.jsx)(Y, {
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
      className: y.searchContainer,
      children: (0, a.jsx)(x.default, {
        size: x.default.Sizes.MEDIUM,
        query: r,
        onChange: c,
        onClear: S,
        placeholder: B.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": B.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    T = (e, t) => (0, a.jsxs)(H, {
      className: y.__invalid_marginTop20,
      children: [(0, a.jsx)(M.EmptyStateImage, {
        darkSrc: s("701972"),
        lightSrc: s("818658"),
        width: 380,
        height: 282
      }), (0, a.jsx)(M.EmptyStateText, {
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
    title: B.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(I.HeadingLevel, {
      component: (0, a.jsx)(I.FormNotice, {
        className: V.marginBottom40,
        type: I.CardTypes.PRIMARY,
        title: B.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: B.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == _ ? (0, a.jsx)(I.Spinner, {
        className: V.marginTop20,
        type: I.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? T(B.default.Messages.NO_AUTHORIZED_APPS_NOTE, B.default.Messages.NO_AUTHORIZED_APPS) : 0 === _.length ? (0, a.jsxs)(a.Fragment, {
        children: [E(), T(null, B.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [E(), _.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(w, {
          onDelete: () => l(e),
          ...e
        }, e.id))]
      })
    })
  })
}