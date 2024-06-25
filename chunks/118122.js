n.d(t, {
  Z: function() {
    return S
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(481060),
  a = n(239091),
  o = n(906732),
  u = n(560067),
  c = n(451603),
  d = n(885714),
  h = n(155409),
  p = n(430824),
  g = n(594174),
  m = n(40153),
  C = n(603592),
  E = n(981631),
  f = n(675999),
  _ = n(689938),
  I = n(810817);
let N = {
  origin: {
    x: -16,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function Z(e) {
  (0, a.jW)(e, async () => {
    let {
      default: e
    } = await n.e("9606").then(n.bind(n, 987578));
    return t => (0, l.jsx)(e, {
      ...t
    })
  })
}

function S(e) {
  let {
    disableTooltip: t,
    lastTargetNode: n
  } = e, a = (0, s.e7)([p.Z], () => p.Z.getGuilds()), S = i.useMemo(() => Object.values(a), [a]), x = (0, s.e7)([g.default], () => g.default.getCurrentUser()), L = i.useMemo(() => S.some(e => e.isOwner(x)), [S, x]), T = (0, r.useModalsStore)(e => (0, r.hasModalOpenSelector)(e, f.PU)), {
    analyticsLocations: v
  } = (0, o.ZP)(), A = (0, r.useRedesignIconContext)().enabled, M = (0, l.jsx)(C.Z, {
    showPill: !1,
    id: "create-join-button",
    onClick: () => {
      (0, c.yU)() ? (0, d.Z)({
        analyticsSource: {
          page: E.Sbl.CREATE_JOIN_GUILD_MODAL
        },
        analyticsLocation: {
          page: E.Sbl.CREATE_JOIN_GUILD_MODAL,
          section: E.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: v
      }) : u.Z.openCreateGuildModal({
        location: "Guild List"
      })
    },
    selected: T,
    onContextMenu: Z,
    tooltip: _.Z.Messages.ADD_A_SERVER,
    icon: A ? r.PlusMediumIcon : r.PlusSmallIcon
  });
  return t ? M : (0, l.jsx)("div", {
    className: I.tutorialContainer,
    children: (0, l.jsxs)(h.Z, {
      tutorialId: L ? "create-more-servers" : "create-first-server",
      inlineSpecs: N,
      position: "right",
      children: [M, null != n && (0, l.jsx)(m.ZP, {
        name: _.Z.Messages.DND_END_OF_LIST,
        targetNode: n,
        below: !0,
        noCombine: !0
      })]
    })
  })
}