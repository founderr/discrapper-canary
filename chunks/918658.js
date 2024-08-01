t.d(n, {
  Z: function() {
return U;
  },
  d: function() {
return b;
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  l = t(442837),
  u = t(692547),
  a = t(481060),
  s = t(549817),
  c = t(819553),
  d = t(17181),
  _ = t(303737),
  E = t(434404),
  f = t(703656),
  I = t(944486),
  T = t(914010),
  S = t(671533),
  A = t(259580),
  N = t(358085),
  g = t(962086),
  p = t(160404),
  O = t(889695),
  C = t(981631),
  M = t(176505),
  R = t(302463),
  m = t(293810),
  L = t(689938),
  h = t(591756);

function D(e) {
  let {
className: n,
onClick: t,
children: i
  } = e;
  return (0, r.jsx)(a.Button, {
className: o()(h.button, n),
innerClassName: h.buttonInner,
look: a.Button.Looks.OUTLINED,
color: a.Button.Colors.WHITE,
size: a.Button.Sizes.NONE,
onClick: t,
children: i
  });
}

function v(e) {
  let {
onClick: n
  } = e;
  return (0, r.jsx)(D, {
onClick: n,
children: L.Z.Messages.DISABLE
  });
}

function U() {
  let e = (0, l.e7)([T.Z], () => T.Z.getGuildId()),
n = (0, l.e7)([I.Z], () => I.Z.getChannelId(e)),
{
  viewingRoles: t,
  backNavigationSection: i,
  isFullServerPreview: o,
  isServerShopPreview: N
} = (0, l.cj)([p.Z], () => ({
  viewingRoles: null != e ? p.Z.getViewingRoles(e) : null,
  backNavigationSection: p.Z.getBackNavigationSection(e),
  isFullServerPreview: null != e && p.Z.isFullServerPreview(e),
  isServerShopPreview: null != e && p.Z.isViewingServerShop(e)
}));
  if (null == t || null == e)
return null;
  let U = function(e) {
  switch (e) {
    case C.pNK.INTEGRATIONS:
      return L.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
    case C.pNK.ROLE_SUBSCRIPTIONS:
      return L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
    case C.pNK.ONBOARDING:
      return L.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
    default:
      return L.Z.Messages.VIEWING_AS_ROLES_BACK;
  }
}(i),
b = i === C.pNK.ROLE_SUBSCRIPTIONS ? L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : L.Z.Messages.VIEWING_AS_ROLES_SELECT,
Z = n === M.oC.GUILD_ONBOARDING,
G = n => {
  let {
    backToSettings: t
  } = n;
  null != e && (p.Z.isFullServerPreview(e) && (0, f.uL)(C.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, g.mL)(e), t && E.Z.open(e, i), i === C.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
};
  return (0, r.jsxs)(a.Notice, {
color: a.NoticeColors.BRAND,
className: h.notice,
children: [
  (0, r.jsxs)(D, {
    onClick: () => G({
      backToSettings: !0
    }),
    className: h.backButton,
    children: [
      (0, r.jsx)(S.Z, {
        width: 16,
        height: 16,
        direction: S.Z.Directions.LEFT,
        className: h.backArrow
      }),
      U
    ]
  }),
  Z && o ? (0, r.jsx)('div', {
    className: h.noticeContents,
    children: (0, r.jsx)('div', {
      className: h.noticeText,
      children: L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
    })
  }) : (0, r.jsxs)('div', {
    className: h.noticeContents,
    children: [
      (0, r.jsx)('div', {
        className: h.noticeText,
        children: o ? L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(t).length
        }) : L.Z.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(t).length
        })
      }),
      (0, r.jsx)(a.Popout, {
        position: 'bottom',
        renderPopout: () => (0, r.jsx)(O.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: n
          } = e;
          return (0, r.jsxs)(D, {
            onClick: n,
            children: [
              b,
              (0, r.jsx)(A.Z, {
                width: 16,
                height: 16,
                direction: A.Z.Directions.DOWN,
                className: h.selectCaret
              })
            ]
          });
        }
      }),
      o && (0, r.jsx)(a.TooltipContainer, {
        className: h.previewWarning,
        text: L.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(a.CircleExclamationPointIcon, {
          size: 'xs',
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      }),
      N && (0, r.jsx)(a.TooltipContainer, {
        className: h.previewWarning,
        text: L.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: m.fF,
          maxProducts: R.dD
        }),
        children: (0, r.jsx)(a.CircleExclamationPointIcon, {
          size: 'xs',
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      })
    ]
  }),
  o || i === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(v, {
    onClick: () => G({
      backToSettings: !1
    })
  })
]
  });
}

function b(e) {
  let {
guildId: n
  } = e;
  return (0, l.e7)([p.Z], () => p.Z.isViewingRoles(n)) ? (0, r.jsx)('div', {
className: o()(h.settingsWrapper, {
  [h.windows]: (0, N.isWindows)(),
  [h.osx]: (0, N.isMac)()
}),
children: (0, r.jsx)(U, {})
  }) : null;
}