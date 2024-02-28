"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("448105"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("776466"),
  S = s("79112"),
  E = s("642950"),
  T = s("135230"),
  f = s("550766"),
  m = s("191225"),
  _ = s("29479"),
  g = s("250404"),
  h = s("102985"),
  I = s("941886"),
  N = s("145131"),
  p = s("810567"),
  C = s("266926"),
  A = s("315102"),
  O = s("161778"),
  x = s("101787"),
  R = s("216503"),
  M = s("49111"),
  D = s("782340"),
  v = s("660747"),
  L = s("890957");
let P = d.default.connectStores([O.default], () => ({
  theme: O.default.theme
}))(I.default);

function j(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: v.twoWayWarning,
    children: [(0, a.jsx)(C.default, {
      className: v.twoWayWarningIcon
    }), (0, a.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: D.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => S.default.setSection(M.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let b = e => {
  let {
    scopes: t,
    application: s,
    onDelete: n
  } = e, l = () => {
    let e = D.default.Messages.DELETE_APP_CONFIRM_MSG;
    return (0, x.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
      children: [e, (0, a.jsx)(R.default, {
        className: v.infoBox,
        children: D.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
          applicationName: s.name
        })
      })]
    })), (0, u.openModal)(t => (0, a.jsx)(T.default, {
      title: D.default.Messages.DEAUTHORIZE_APP,
      body: e,
      confirmText: D.default.Messages.DEAUTHORIZE,
      cancelText: D.default.Messages.CANCEL,
      onConfirm: n,
      ...t
    }))
  }, r = (0, x.useShouldWarnAuthorizedAppTwoWay)(s.id);
  return (0, a.jsx)(u.Card, {
    className: i(v.authedApp, L.marginBottom8),
    outline: !0,
    children: (0, a.jsxs)(u.HeadingLevel, {
      component: (() => {
        let e = A.default.getApplicationIconURL({
            id: s.id,
            icon: s.icon
          }),
          t = null != e ? (0, a.jsx)(N.default.Child, {
            className: v.appAvatar,
            grow: 0,
            children: (0, a.jsx)("img", {
              src: e,
              alt: ""
            })
          }) : null;
        return (0, a.jsxs)(N.default, {
          className: i(v.header, L.marginBottom20),
          children: [(0, a.jsxs)(N.default, {
            className: v.headerInfo,
            children: [t, (0, a.jsx)(N.default.Child, {
              children: (0, a.jsx)(u.Heading, {
                variant: "text-sm/semibold",
                children: s.name
              })
            })]
          }), (0, a.jsx)(N.default.Child, {
            wrap: !0,
            grow: 0,
            children: (0, a.jsx)(u.Button, {
              className: v.deleteApp,
              color: u.ButtonColors.RED,
              look: u.ButtonLooks.OUTLINED,
              size: u.ButtonSizes.SMALL,
              onClick: l,
              children: D.default.Messages.DEAUTHORIZE
            })
          })]
        })
      })(),
      children: [(() => {
        if (null != s.description && "" !== s.description) return (0, a.jsx)(u.FormItem, {
          faded: !0,
          title: D.default.Messages.ABOUT_THIS_APP,
          children: (0, a.jsx)(u.FormText, {
            children: s.description
          })
        })
      })(), (() => {
        let e = t.map(e => (0, a.jsxs)("li", {
          className: i(v.permission, L.marginTop8),
          children: [(0, a.jsx)("i", {
            className: v.permissionCheckmark
          }), (0, a.jsx)(u.FormText, {
            children: (0, _.getScopeName)(e, t)
          })]
        }, e));
        if (e.length > 0) return (0, a.jsx)(u.FormItem, {
          faded: !0,
          title: D.default.Messages.PERMISSIONS,
          className: L.marginTop20,
          children: (0, a.jsx)("ul", {
            children: e
          })
        })
      })(), r && (0, a.jsx)(j, {
        application: s
      })]
    })
  })
};
var U = () => {
  let e = (0, d.useStateFromStores)([h.default], () => h.default.hidePersonalInformation),
    t = (0, d.useStateFromStores)([g.default], () => g.default.getApps()),
    l = (0, d.useStateFromStores)([m.default], () => m.default.getSelfEmbeddedActivities());
  n.useEffect(() => {
    c.default.fetch()
  }, []);
  let i = e => {
      let {
        id: t,
        application: s
      } = e;
      c.default.delete(t);
      let a = l.get(s.id);
      null != a && (0, f.stopEmbeddedActivity)({
        channelId: a.channelId,
        applicationId: s.id
      })
    },
    [r, S] = n.useState(""),
    T = e => {
      S(e)
    },
    _ = () => (0, a.jsx)("div", {
      className: v.searchContainer,
      children: (0, a.jsx)(p.default, {
        size: p.default.Sizes.MEDIUM,
        query: r,
        onChange: T,
        placeholder: D.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": D.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    N = (e, t) => (0, a.jsxs)(P, {
      className: v.marginTop20,
      children: [(0, a.jsx)(I.EmptyStateImage, {
        darkSrc: s("541956"),
        lightSrc: s("301037"),
        width: 380,
        height: 282
      }), (0, a.jsx)(I.EmptyStateText, {
        note: e,
        children: t
      })]
    }),
    C = n.useMemo(() => {
      let e = r.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => o(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, r]);
  return e ? (0, a.jsx)(E.default, {}) : (0, a.jsx)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: D.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(u.HeadingLevel, {
      component: (0, a.jsx)(u.FormNotice, {
        className: L.marginBottom40,
        type: u.CardTypes.PRIMARY,
        title: D.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: D.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == C ? (0, a.jsx)(u.Spinner, {
        className: L.marginTop20,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? N(D.default.Messages.NO_AUTHORIZED_APPS_NOTE, D.default.Messages.NO_AUTHORIZED_APPS) : 0 === C.length ? (0, a.jsxs)(a.Fragment, {
        children: [_(), N(null, D.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [_(), C.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(b, {
          onDelete: () => i(e),
          ...e
        }, e.id))]
      })
    })
  })
}