"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("442837"),
  o = n("524437"),
  u = n("149020"),
  d = n("422045"),
  c = n("481060"),
  f = n("317632"),
  E = n("174767"),
  _ = n("240126"),
  m = n("791914"),
  T = n("326838"),
  I = n("689938"),
  p = n("493634");

function h(e) {
  let {
    setTab: t,
    badgeState: l,
    closePopout: h
  } = e, S = (0, r.useStateFromStoresArray)([f.default], () => f.default.getInvites()), C = (0, r.useStateFromStores)([f.default], () => f.default.getInviteStatuses()), [g, A] = a.useMemo(() => i().partition(S, e => {
    var t;
    return (null === (t = C[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1e3 < e.ttl
  }), [S, C]);
  return (a.useEffect(() => {
    (0, E.clearUnseenInvites)()
  }), 0 === S.length) ? (0, s.jsxs)("div", {
    className: p.container,
    children: [(0, s.jsx)(m.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: l,
      closePopout: h
    }), (0, s.jsx)("div", {
      className: p.__invalid_emptyStateContainer,
      children: (0, s.jsx)(_.default, {
        Icon: u.GameControllerIcon,
        header: I.default.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
        tip: I.default.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
      })
    })]
  }) : (0, s.jsxs)("div", {
    className: p.container,
    children: [(0, s.jsx)(m.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: l,
      closePopout: h,
      children: (0, s.jsx)(c.CircleIconButton, {
        className: p.__invalid_deleteButton,
        tooltip: I.default.Messages.GAME_INVITES_DELETE_ALL,
        color: c.CircleIconButtonColors.SECONDARY,
        icon: (0, s.jsx)(d.TrashIcon, {
          width: 16,
          height: 16
        }),
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("13111")]).then(n.bind(n, "93756"));
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
        className: p.invitesContainer,
        children: [g.length > 0 && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(N, {
            title: I.default.Messages.GAME_INVITES_RECENT_HEADER
          }), (0, s.jsx)(s.Fragment, {
            children: g.map(e => (0, s.jsx)(T.default, {
              invite: e,
              expired: !1
            }, e.invite_id))
          })]
        }), A.length > 0 && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(N, {
            title: I.default.Messages.GAME_INVITES_EXPIRED_HEADER
          }), (0, s.jsx)(s.Fragment, {
            children: A.map(e => (0, s.jsx)(T.default, {
              invite: e,
              expired: !0
            }, e.invite_id))
          })]
        })]
      })
    })]
  })
}

function N(e) {
  let {
    title: t
  } = e;
  return (0, s.jsxs)("div", {
    className: p.headerContainer,
    children: [(0, s.jsx)(c.Text, {
      className: p.headerTitle,
      variant: "text-xs/semibold",
      color: "interactive-normal",
      children: t
    }), (0, s.jsx)("div", {
      className: p.headerDivider
    })]
  })
}