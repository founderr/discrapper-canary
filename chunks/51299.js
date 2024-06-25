a.r(e), a.d(e, {
  default: function() {
    return C
  }
});
var i = a(735250);
a(470079);
var t = a(120356),
  l = a.n(t),
  c = a(512722),
  o = a.n(c),
  s = a(481060),
  r = a(99690),
  p = a(23551),
  d = a(122021),
  u = a(689938),
  m = a(280502);

function N(n) {
  let {
    onComplete: e,
    excludedPlatformTypes: a,
    includedPlatformTypes: t
  } = n, l = (0, d.fq)();
  return (0, i.jsx)("div", {
    className: m.connectionsContainer,
    children: l.filter(n => !(null == a ? void 0 : a.has(n.type)) && (null == t || t.has(n.type))).map(n => (0, i.jsx)(p.Z, {
      type: n.type,
      className: m.accountBtn,
      innerClassName: m.accountBtnInner,
      onConnect: () => e(n.type)
    }, n.type))
  })
}

function f(n) {
  let {
    integrations: e,
    onCompleteApplication: a
  } = n;
  if (null == e || null == a) return null;
  let t = e.filter(n => {
    var e;
    return (null === (e = n.application) || void 0 === e ? void 0 : e.roleConnectionsVerificationUrl) != null
  });
  return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: m.applicationsHeader,
      children: u.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: m.applicationsContainer,
      children: t.map(n => {
        let e = n.application;
        o()(null != e, "application is null");
        let t = null == e ? void 0 : e.bot;
        return o()(null != t, "bot is null"), (0, i.jsxs)(s.Clickable, {
          onClick: () => a(e.id),
          className: m.application,
          children: [(0, i.jsx)(r.Z, {
            user: t,
            className: m.applicationIcon
          }), (0, i.jsxs)("div", {
            className: m.applicationNameContainer,
            children: [(0, i.jsx)(s.Heading, {
              variant: "heading-sm/semibold",
              className: m.applicationNameText,
              children: e.name
            }), null != e.description && e.description.length > 0 ? (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: m.applicationNameText,
              children: e.description
            }) : null]
          })]
        }, n.id)
      })
    })]
  })
}

function C(n) {
  let {
    transitionState: e,
    onComplete: a,
    onClose: t,
    excludedPlatformTypes: c,
    includedPlatformTypes: o,
    integrations: r,
    onCompleteApplication: p
  } = n;
  return (0, i.jsx)(s.ModalRoot, {
    "aria-label": u.Z.Messages.CONNECTIONS_ADD_CONNECTIONS,
    size: s.ModalSize.SMALL,
    transitionState: e,
    className: l()(m.container),
    fullscreenOnMobile: !1,
    children: (0, i.jsxs)(s.ModalContent, {
      children: [(0, i.jsxs)("div", {
        className: m.header,
        children: [(0, i.jsx)(s.Heading, {
          className: m.title,
          variant: "heading-md/bold",
          children: u.Z.Messages.CONNECTIONS_ADD_CONNECTIONS
        }), (0, i.jsx)(s.ModalCloseButton, {
          onClick: t
        })]
      }), (0, i.jsx)(N, {
        onComplete: function(n) {
          a(n), t()
        },
        excludedPlatformTypes: c,
        includedPlatformTypes: o
      }), (0, i.jsx)(f, {
        integrations: r,
        onCompleteApplication: null != p ? function(n) {
          null == p || p(n), t()
        } : void 0
      })]
    })
  })
}