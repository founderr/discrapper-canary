"use strict";
s.r(t), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("658722"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("384275"),
  S = s("230711"),
  E = s("497321"),
  T = s("468026"),
  f = s("566620"),
  m = s("317381"),
  _ = s("713938"),
  g = s("881998"),
  h = s("246946"),
  I = s("186095"),
  N = s("285952"),
  p = s("6048"),
  C = s("507893"),
  A = s("768581"),
  O = s("210887"),
  x = s("436267"),
  R = s("494620"),
  M = s("981631"),
  v = s("231338"),
  L = s("689938"),
  D = s("694132"),
  P = s("949086");
let j = d.default.connectStores([O.default], () => ({
  theme: O.default.theme
}))(I.default);

function b(e) {
  let {
    application: t
  } = e;
  return (0, a.jsxs)("div", {
    className: D.twoWayWarning,
    children: [(0, a.jsx)(C.default, {
      className: D.twoWayWarningIcon
    }), (0, a.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-sm/medium",
      children: L.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
        applicationName: t.name,
        onConnectionPress: () => S.default.setSection(M.AnalyticsSections.SETTINGS_CONNECTIONS)
      })
    })]
  })
}
let U = e => {
  let {
    scopes: t,
    application: s,
    onDelete: n
  } = e, l = () => {
    let e = L.default.Messages.DELETE_APP_CONFIRM_MSG;
    return (0, x.default)(s.id) && (e = (0, a.jsxs)(a.Fragment, {
      children: [e, (0, a.jsx)(R.default, {
        className: D.infoBox,
        children: L.default.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
          applicationName: s.name
        })
      })]
    })), (0, u.openModal)(t => (0, a.jsx)(T.default, {
      title: L.default.Messages.DEAUTHORIZE_APP,
      body: e,
      confirmText: L.default.Messages.DEAUTHORIZE,
      cancelText: L.default.Messages.CANCEL,
      onConfirm: n,
      ...t
    }))
  }, r = (0, x.useShouldWarnAuthorizedAppTwoWay)(s.id);
  return (0, a.jsx)(u.Card, {
    className: i()(D.authedApp, P.marginBottom8),
    outline: !0,
    children: (0, a.jsxs)(u.HeadingLevel, {
      component: (() => {
        let e = A.default.getApplicationIconURL({
            id: s.id,
            icon: s.icon
          }),
          t = null != e ? (0, a.jsx)(N.default.Child, {
            className: D.appAvatar,
            grow: 0,
            children: (0, a.jsx)("img", {
              src: e,
              alt: ""
            })
          }) : null;
        return (0, a.jsxs)(N.default, {
          className: i()(D.__invalid_header, P.marginBottom20),
          children: [(0, a.jsxs)(N.default, {
            className: D.headerInfo,
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
              className: D.deleteApp,
              color: u.ButtonColors.RED,
              look: u.ButtonLooks.OUTLINED,
              size: u.ButtonSizes.SMALL,
              onClick: l,
              children: L.default.Messages.DEAUTHORIZE
            })
          })]
        })
      })(),
      children: [(() => {
        if (null != s.description && "" !== s.description) return (0, a.jsx)(u.FormItem, {
          faded: !0,
          title: L.default.Messages.ABOUT_THIS_APP,
          children: (0, a.jsx)(u.FormText, {
            children: s.description
          })
        })
      })(), (() => {
        let e = [];
        for (let s of t) e.push((0, _.getScopeName)(s, t)), s === v.OAuth2Scopes.APPLICATIONS_COMMANDS && e.push(L.default.Messages.SCOPE_DM_YOU);
        if (e.length > 0) return (0, a.jsx)(u.FormItem, {
          faded: !0,
          title: L.default.Messages.PERMISSIONS,
          className: P.marginTop20,
          children: (0, a.jsx)("ul", {
            children: e.map((e, t) => (0, a.jsxs)("li", {
              className: i()(D.permission, P.marginTop8),
              children: [(0, a.jsx)("i", {
                className: D.permissionCheckmark
              }), (0, a.jsx)(u.FormText, {
                children: e
              })]
            }, t))
          })
        })
      })(), r && (0, a.jsx)(b, {
        application: s
      })]
    })
  })
};
t.default = () => {
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
    _ = () => {
      S("")
    },
    N = () => (0, a.jsx)("div", {
      className: D.searchContainer,
      children: (0, a.jsx)(p.default, {
        size: p.default.Sizes.MEDIUM,
        query: r,
        onChange: T,
        onClear: _,
        placeholder: L.default.Messages.INTEGRATIONS_SEARCH,
        "aria-label": L.default.Messages.INTEGRATIONS_SEARCH
      })
    }),
    C = (e, t) => (0, a.jsxs)(j, {
      className: D.__invalid_marginTop20,
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
    A = n.useMemo(() => {
      let e = r.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => o()(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, r]);
  return e ? (0, a.jsx)(E.default, {}) : (0, a.jsx)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: L.default.Messages.AUTHORIZED_APPS,
    children: (0, a.jsx)(u.HeadingLevel, {
      component: (0, a.jsx)(u.FormNotice, {
        className: P.marginBottom40,
        type: u.CardTypes.PRIMARY,
        title: L.default.Messages.APPLICATIONS_AND_CONNECTIONS,
        body: L.default.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
      }),
      children: null == t || null == A ? (0, a.jsx)(u.Spinner, {
        className: P.marginTop20,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : 0 === t.length ? C(L.default.Messages.NO_AUTHORIZED_APPS_NOTE, L.default.Messages.NO_AUTHORIZED_APPS) : 0 === A.length ? (0, a.jsxs)(a.Fragment, {
        children: [N(), C(null, L.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [N(), A.sort((e, t) => e.application.name.localeCompare(t.application.name)).map(e => (0, a.jsx)(U, {
          onDelete: () => i(e),
          ...e
        }, e.id))]
      })
    })
  })
}