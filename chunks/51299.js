l.r(e), l.d(e, {
  default: function() {
    return x
  }
});
var a = l(735250);
l(470079);
var i = l(120356),
  t = l.n(i),
  s = l(512722),
  o = l.n(s),
  c = l(481060),
  r = l(99690),
  d = l(23551),
  p = l(122021),
  u = l(689938),
  m = l(280502);

function N(n) {
  let {
    onComplete: e,
    excludedPlatformTypes: l,
    includedPlatformTypes: i
  } = n, t = (0, p.fq)();
  return (0, a.jsx)("div", {
    className: m.connectionsContainer,
    children: t.filter(n => !(null == l ? void 0 : l.has(n.type)) && (null == i || i.has(n.type))).map(n => (0, a.jsx)(d.Z, {
      type: n.type,
      className: m.accountBtn,
      innerClassName: m.accountBtnInner,
      onConnect: () => e(n.type)
    }, n.type))
  })
}

function h(n) {
  let {
    integrations: e,
    onCompleteApplication: l
  } = n;
  if (null == e || null == l) return null;
  let i = e.filter(n => {
    var e;
    return (null === (e = n.application) || void 0 === e ? void 0 : e.roleConnectionsVerificationUrl) != null
  });
  return 0 === i.length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: m.applicationsHeader,
      children: u.Z.Messages.APPS
    }), (0, a.jsx)("div", {
      className: m.applicationsContainer,
      children: i.map(n => {
        let e = n.application;
        o()(null != e, "application is null");
        let i = null == e ? void 0 : e.bot;
        return o()(null != i, "bot is null"), (0, a.jsxs)(c.Clickable, {
          onClick: () => l(e.id),
          className: m.application,
          children: [(0, a.jsx)(r.Z, {
            user: i,
            className: m.applicationIcon
          }), (0, a.jsxs)("div", {
            className: m.applicationNameContainer,
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-sm/semibold",
              className: m.applicationNameText,
              children: e.name
            }), null != e.description && e.description.length > 0 ? (0, a.jsx)(c.Text, {
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

function x(n) {
  let {
    transitionState: e,
    onComplete: l,
    onClose: i,
    excludedPlatformTypes: s,
    includedPlatformTypes: o,
    integrations: r,
    onCompleteApplication: d
  } = n;
  return (0, a.jsx)(c.ModalRoot, {
    "aria-label": u.Z.Messages.CONNECTIONS_ADD_CONNECTIONS,
    size: c.ModalSize.SMALL,
    transitionState: e,
    className: t()(m.container),
    fullscreenOnMobile: !1,
    children: (0, a.jsxs)(c.ModalContent, {
      children: [(0, a.jsxs)("div", {
        className: m.header,
        children: [(0, a.jsx)(c.Heading, {
          className: m.title,
          variant: "heading-md/bold",
          children: u.Z.Messages.CONNECTIONS_ADD_CONNECTIONS
        }), (0, a.jsx)(c.ModalCloseButton, {
          onClick: i
        })]
      }), (0, a.jsx)(N, {
        onComplete: function(n) {
          l(n), i()
        },
        excludedPlatformTypes: s,
        includedPlatformTypes: o
      }), (0, a.jsx)(h, {
        integrations: r,
        onCompleteApplication: null != d ? function(n) {
          null == d || d(n), i()
        } : void 0
      })]
    })
  })
}