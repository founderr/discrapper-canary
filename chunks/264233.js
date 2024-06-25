n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(442837),
  o = n(524437),
  c = n(481060),
  u = n(317632),
  d = n(174767),
  E = n(240126),
  _ = n(791914),
  I = n(326838),
  T = n(689938),
  m = n(277539);

function N(e) {
  let {
    setTab: t,
    badgeState: l,
    closePopout: N
  } = e, C = (0, r.Wu)([u.Z], () => u.Z.getInvites()), S = (0, r.e7)([u.Z], () => u.Z.getInviteStatuses()), [A, g] = i.useMemo(() => a().partition(C, e => {
    var t;
    return (null === (t = S[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1e3 < e.ttl
  }), [C, S]);
  return (i.useEffect(() => {
    (0, d.sJ)()
  }), 0 === C.length) ? (0, s.jsxs)("div", {
    className: m.container,
    children: [(0, s.jsx)(_.Z, {
      tab: o.X.GAME_INVITES,
      setTab: t,
      badgeState: l,
      closePopout: N
    }), (0, s.jsx)("div", {
      className: m.__invalid_emptyStateContainer,
      children: (0, s.jsx)(E.Z, {
        Icon: c.GameControllerIcon,
        header: T.Z.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
        tip: T.Z.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
      })
    })]
  }) : (0, s.jsxs)("div", {
    className: m.container,
    children: [(0, s.jsx)(_.Z, {
      tab: o.X.GAME_INVITES,
      setTab: t,
      badgeState: l,
      closePopout: N,
      children: (0, s.jsx)(c.CircleIconButton, {
        className: m.__invalid_deleteButton,
        tooltip: T.Z.Messages.GAME_INVITES_DELETE_ALL,
        color: c.CircleIconButtonColors.SECONDARY,
        icon: (0, s.jsx)(c.TrashIcon, {
          size: "xs"
        }),
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("13111")]).then(n.bind(n, 93756));
            return t => (0, s.jsx)(e, {
              ...t,
              onDelete: async () => {
                await t.onClose()
              }
            })
          })
        }
      })
    }), (0, s.jsx)(c.AdvancedScrollerThin, {
      children: (0, s.jsxs)("div", {
        className: m.invitesContainer,
        children: [A.length > 0 && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(h, {
            title: T.Z.Messages.GAME_INVITES_RECENT_HEADER
          }), (0, s.jsx)(s.Fragment, {
            children: A.map(e => (0, s.jsx)(I.Z, {
              invite: e,
              expired: !1
            }, e.invite_id))
          })]
        }), g.length > 0 && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(h, {
            title: T.Z.Messages.GAME_INVITES_EXPIRED_HEADER
          }), (0, s.jsx)(s.Fragment, {
            children: g.map(e => (0, s.jsx)(I.Z, {
              invite: e,
              expired: !0
            }, e.invite_id))
          })]
        })]
      })
    })]
  })
}

function h(e) {
  let {
    title: t
  } = e;
  return (0, s.jsxs)("div", {
    className: m.headerContainer,
    children: [(0, s.jsx)(c.Text, {
      className: m.headerTitle,
      variant: "text-xs/semibold",
      color: "interactive-normal",
      children: t
    }), (0, s.jsx)("div", {
      className: m.headerDivider
    })]
  })
}