t(653041), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(658722),
  l = t.n(o),
  c = t(243814),
  d = t(442837),
  _ = t(921072),
  E = t(1561),
  u = t(481060),
  T = t(384275),
  I = t(230711),
  S = t(497321),
  N = t(468026),
  C = t(566620),
  m = t(317381),
  A = t(979200),
  h = t(713938),
  g = t(881998),
  O = t(246946),
  p = t(285952),
  R = t(768581),
  x = t(49012),
  M = t(210887),
  f = t(436267),
  D = t(494620),
  P = t(981631),
  L = t(689938),
  Z = t(756576),
  b = t(549856);
let v = d.ZP.connectStores([M.Z], () => ({
  theme: M.Z.theme
}))(u.EmptyState);

function j(e) {
  let {
application: s
  } = e;
  return (0, n.jsxs)('div', {
className: Z.twoWayWarning,
children: [
  (0, n.jsx)(u.CircleInformationIcon, {
    size: 'md',
    color: 'currentColor',
    className: Z.twoWayWarningIcon
  }),
  (0, n.jsx)(u.Text, {
    color: 'text-normal',
    variant: 'text-sm/medium',
    children: L.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
      applicationName: s.name,
      onConnectionPress: () => I.Z.setSection(P.jXE.SETTINGS_CONNECTIONS)
    })
  })
]
  });
}
let B = e => {
let {
  disclosure: s
} = e;
return a.useMemo(() => {
  switch (s) {
    case _.u$.IP_LOCATION:
      return (0, n.jsx)(u.GlobeEarthIcon, {
        size: 'md',
        color: 'currentColor',
        className: Z.disclosureIcon
      });
    case _.u$.DISPLAYS_ADVERTISEMENTS:
      return (0, n.jsx)(u.EmbedIcon, {
        className: Z.disclosureIcon
      });
    default:
      return (0, n.jsx)(u.CircleInformationIcon, {
        className: Z.disclosureIcon
      });
  }
}, [s]);
  },
  U = e => {
let {
  scopes: s,
  application: t,
  onDelete: a,
  disclosures: i
} = e, o = () => {
  let e = L.Z.Messages.DELETE_APP_CONFIRM_MSG;
  return (0, f.Z)(t.id) && (e = (0, n.jsxs)(n.Fragment, {
    children: [
      e,
      (0, n.jsx)(D.Z, {
        className: Z.infoBox,
        children: L.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({
          applicationName: t.name
        })
      })
    ]
  })), (0, u.openModal)(s => (0, n.jsx)(N.default, {
    title: L.Z.Messages.DEAUTHORIZE_APP,
    body: e,
    confirmText: L.Z.Messages.DEAUTHORIZE,
    cancelText: L.Z.Messages.CANCEL,
    onConfirm: a,
    ...s
  }));
}, l = () => {
  null != t.terms_of_service_url && (0, x.q)({
    href: t.terms_of_service_url,
    shouldConfirm: !0
  });
}, d = () => {
  null != t.privacy_policy_url && (0, x.q)({
    href: t.privacy_policy_url,
    shouldConfirm: !0
  });
}, _ = (0, f.O)(t.id);
return (0, n.jsx)(u.Card, {
  className: r()(Z.authedApp, b.marginBottom8),
  outline: !0,
  children: (0, n.jsxs)(u.HeadingLevel, {
    component: (() => {
      let e = R.ZP.getApplicationIconURL({
          id: t.id,
          icon: t.icon
        }),
        s = null != e ? (0, n.jsx)(p.Z.Child, {
          className: Z.appAvatar,
          grow: 0,
          children: (0, n.jsx)('img', {
            src: e,
            alt: ''
          })
        }) : null;
      return (0, n.jsxs)(p.Z, {
        className: r()(Z.__invalid_header, b.marginBottom20),
        children: [
          (0, n.jsxs)(p.Z, {
            className: Z.headerInfo,
            children: [
              s,
              (0, n.jsx)(p.Z.Child, {
                children: (0, n.jsx)(u.Heading, {
                  variant: 'text-sm/semibold',
                  children: t.name
                })
              })
            ]
          }),
          (0, n.jsx)(p.Z.Child, {
            wrap: !0,
            grow: 0,
            children: (0, n.jsx)(u.Button, {
              color: u.ButtonColors.RED,
              look: u.ButtonLooks.OUTLINED,
              size: u.ButtonSizes.SMALL,
              onClick: o,
              children: L.Z.Messages.DEAUTHORIZE
            })
          })
        ]
      });
    })(),
    children: [
      (() => {
        if (null != t.description && '' !== t.description)
          return (0, n.jsx)(u.FormItem, {
            faded: !0,
            title: L.Z.Messages.ABOUT_THIS_APP,
            children: (0, n.jsx)(u.FormText, {
              children: t.description
            })
          });
      })(),
      (() => {
        if (null != t.terms_of_service_url || null != t.privacy_policy_url)
          return (0, n.jsxs)('div', {
            className: Z.tosPrivacy,
            children: [
              null != t.terms_of_service_url ? (0, n.jsxs)(E.P, {
                tag: 'a',
                onClick: l,
                className: Z.tos,
                children: [
                  (0, n.jsx)(u.FormText, {
                    className: Z.link,
                    children: L.Z.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
                  }),
                  (0, n.jsx)(u.LinkExternalSmallIcon, {
                    className: Z.externalLinkIcon,
                    color: 'var(--text-link)'
                  })
                ]
              }) : null,
              null != t.privacy_policy_url ? (0, n.jsxs)('div', {
                className: Z.privacy,
                children: [
                  null != t.terms_of_service_url ? (0, n.jsx)('div', {
                    className: Z.divider
                  }) : null,
                  (0, n.jsxs)(E.P, {
                    tag: 'a',
                    onClick: d,
                    className: Z.privacy,
                    children: [
                      (0, n.jsx)(u.FormText, {
                        className: Z.link,
                        children: L.Z.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                      }),
                      (0, n.jsx)(u.LinkExternalSmallIcon, {
                        className: Z.externalLinkIcon,
                        color: 'var(--text-link)'
                      })
                    ]
                  })
                ]
              }) : null
            ]
          });
      })(),
      (() => {
        let e = [];
        for (let t of s)
          e.push((0, h.jW)(t, s)), t === c.x.APPLICATIONS_COMMANDS && e.push(L.Z.Messages.SCOPE_DM_YOU);
        if (e.length > 0 || null != i && i.length > 0)
          return (0, n.jsx)(u.FormItem, {
            faded: !0,
            title: L.Z.Messages.PERMISSIONS,
            className: b.marginTop20,
            children: (0, n.jsxs)('ul', {
              children: [
                e.map((e, s) => (0, n.jsxs)('li', {
                  className: r()(Z.permission, b.marginTop8),
                  children: [
                    (0, n.jsx)('i', {
                      className: Z.permissionCheckmark
                    }),
                    (0, n.jsx)(u.FormText, {
                      children: e
                    })
                  ]
                }, s)),
                null == i ? void 0 : i.map((s, t) => {
                  let a = (0, A.PM)(s);
                  return null != a ? (0, n.jsxs)('li', {
                    className: r()(Z.permission, b.marginTop8),
                    children: [
                      (0, n.jsx)(B, {
                        disclosure: s
                      }),
                      (0, n.jsx)(u.FormText, {
                        children: a
                      })
                    ]
                  }, t + e.length) : null;
                })
              ]
            })
          });
      })(),
      _ && (0, n.jsx)(j, {
        application: t
      })
    ]
  })
});
  };
s.Z = () => {
  let e = (0, d.e7)([O.Z], () => O.Z.hidePersonalInformation),
s = (0, d.e7)([g.Z], () => g.Z.getApps()),
i = (0, d.e7)([m.ZP], () => m.ZP.getSelfEmbeddedActivities());
  a.useEffect(() => {
T.Z.fetch();
  }, []);
  let r = e => {
  let {
    id: s,
    application: t
  } = e;
  T.Z.delete(s);
  let n = i.get(t.id);
  null != n && (0, C.mW)({
    channelId: n.channelId,
    applicationId: t.id
  });
},
[o, c] = a.useState(''),
_ = e => {
  c(e);
},
E = () => {
  c('');
},
I = () => (0, n.jsx)('div', {
  className: Z.searchContainer,
  children: (0, n.jsx)(u.SearchBar, {
    size: u.SearchBar.Sizes.MEDIUM,
    query: o,
    onChange: _,
    onClear: E,
    placeholder: L.Z.Messages.INTEGRATIONS_SEARCH,
    'aria-label': L.Z.Messages.INTEGRATIONS_SEARCH
  })
}),
N = (e, s) => (0, n.jsxs)(v, {
  className: Z.__invalid_marginTop20,
  children: [
    (0, n.jsx)(u.EmptyStateImage, {
      darkSrc: t(701972),
      lightSrc: t(818658),
      width: 380,
      height: 282
    }),
    (0, n.jsx)(u.EmptyStateText, {
      note: e,
      children: s
    })
  ]
}),
A = a.useMemo(() => {
  let e = o.trim().toLowerCase();
  return '' === e || null == s ? s : s.length < 100 ? s.filter(s => l()(e, s.application.name.toLowerCase())) : s.filter(s => s.application.name.toLowerCase().includes(e));
}, [
  s,
  o
]);
  return e ? (0, n.jsx)(S.Z, {}) : (0, n.jsx)(u.FormSection, {
tag: u.FormTitleTags.H1,
title: L.Z.Messages.AUTHORIZED_APPS,
children: (0, n.jsx)(u.HeadingLevel, {
  component: (0, n.jsx)(u.FormNotice, {
    className: b.marginBottom40,
    type: u.CardTypes.PRIMARY,
    title: L.Z.Messages.APPLICATIONS_AND_CONNECTIONS,
    body: L.Z.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
  }),
  children: null == s || null == A ? (0, n.jsx)(u.Spinner, {
    className: b.marginTop20,
    type: u.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === s.length ? N(L.Z.Messages.NO_AUTHORIZED_APPS_NOTE, L.Z.Messages.NO_AUTHORIZED_APPS) : 0 === A.length ? (0, n.jsxs)(n.Fragment, {
    children: [
      I(),
      N(null, L.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH)
    ]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [
      I(),
      A.sort((e, s) => e.application.name.localeCompare(s.application.name)).map(e => (0, n.jsx)(U, {
        onDelete: () => r(e),
        ...e
      }, e.id))
    ]
  })
})
  });
};