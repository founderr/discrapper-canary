"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("524437"),
  u = n("149020"),
  d = n("422045"),
  c = n("481060"),
  f = n("317632"),
  h = n("174767"),
  E = n("836946"),
  m = n("240126"),
  p = n("791914"),
  S = n("326838"),
  g = n("689938"),
  N = n("493634");

function _(e) {
  let {
    setTab: t,
    badgeState: s,
    closePopout: _
  } = e, T = (0, r.useStateFromStoresArray)([f.default], () => f.default.getInvites()), C = (0, r.useStateFromStores)([f.default], () => f.default.getInviteStatuses()), [A, v] = l.useMemo(() => i().partition(T, e => {
    var t;
    return (null === (t = C[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1e3 < e.ttl
  }), [T, C]);
  return (l.useEffect(() => {
    (0, h.clearUnseenInvites)()
  }), 0 === T.length) ? (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)(p.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: s,
      closePopout: _
    }), (0, a.jsx)("div", {
      className: N.__invalid_emptyStateContainer,
      children: (0, a.jsx)(m.default, {
        Icon: u.GameControllerIcon,
        header: g.default.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
        tip: g.default.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
      })
    })]
  }) : (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)(p.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: s,
      closePopout: _,
      children: (0, a.jsx)(E.default, {
        className: N.__invalid_deleteButton,
        tooltip: g.default.Messages.GAME_INVITES_DELETE_ALL,
        color: E.CircleIconButtonColors.SECONDARY,
        icon: (0, a.jsx)(d.TrashIcon, {
          width: 16,
          height: 16
        }),
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("13111")]).then(n.bind(n, "93756"));
            return t => (0, a.jsx)(e, {
              ...t,
              onDelete: async () => {
                await t.onClose()
              }
            })
          })
        }
      })
    }), (0, a.jsx)(c.AdvancedScrollerThin, {
      children: (0, a.jsxs)("div", {
        className: N.invitesContainer,
        children: [A.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I, {
            title: g.default.Messages.GAME_INVITES_RECENT_HEADER
          }), (0, a.jsx)(a.Fragment, {
            children: A.map(e => (0, a.jsx)(S.default, {
              invite: e,
              expired: !1
            }, e.invite_id))
          })]
        }), v.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I, {
            title: g.default.Messages.GAME_INVITES_EXPIRED_HEADER
          }), (0, a.jsx)(a.Fragment, {
            children: v.map(e => (0, a.jsx)(S.default, {
              invite: e,
              expired: !0
            }, e.invite_id))
          })]
        })]
      })
    })]
  })
}

function I(e) {
  let {
    title: t
  } = e;
  return (0, a.jsxs)("div", {
    className: N.headerContainer,
    children: [(0, a.jsx)(c.Text, {
      className: N.headerTitle,
      variant: "text-xs/semibold",
      color: "interactive-normal",
      children: t
    }), (0, a.jsx)("div", {
      className: N.headerDivider
    })]
  })
}