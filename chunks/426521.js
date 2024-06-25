n.d(t, {
  U: function() {
    return j
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(99690),
  r = n(906732),
  o = n(336197),
  c = n(454585),
  u = n(171368),
  d = n(695346),
  E = n(598077),
  _ = n(594174),
  I = n(626135),
  T = n(709054),
  m = n(591759),
  N = n(833592),
  h = n(497089),
  C = n(178480),
  S = n(418316),
  A = n(526146),
  g = n(400565),
  p = n(148789),
  f = n(11825),
  R = n(981631),
  O = n(689938),
  M = n(749967),
  x = n(756688),
  v = n(886765);

function L(e) {
  var t, n, i;
  let {
    item: r
  } = e, o = null === (t = r.message) || void 0 === t ? void 0 : t.content;
  if (null == o) return (0, s.jsx)("div", {});
  let u = null !== (i = _.default.getUser(null === (n = r.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== i ? i : new E.Z(r.other_user),
    d = c.Z.parse(o);
  return (0, s.jsxs)("div", {
    className: M.messagePreviewContainer,
    children: [(0, s.jsx)(a.Z, {
      user: u,
      size: l.AvatarSizes.SIZE_24
    }), (0, s.jsx)(l.Text, {
      className: M.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: d
    })]
  })
}

function Z(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = c.Z.parse(t);
  return (0, s.jsx)("div", {
    className: M.calloutContainer,
    children: (0, s.jsx)(l.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function P(e) {
  let {
    item: t
  } = e, n = v, i = O.Z.Messages.NOTIFICATION_CENTER_TODO;
  return t.completed && (n = x, i = O.Z.Messages.NOTIFICATION_CENTER_DONE), (0, s.jsxs)("div", {
    className: M.lifecycleContainer,
    children: [(0, s.jsx)("img", {
      className: M.checkbox,
      alt: "",
      src: n
    }), (0, s.jsx)(l.Text, {
      className: M.lifecycleText,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: i
    })]
  })
}
let D = i.memo(function(e) {
    var t;
    let {
      item: a,
      ackedBeforeId: d
    } = e, {
      analyticsLocations: E
    } = (0, r.ZP)(), _ = (0, A.I)(a, d), O = i.useCallback(async () => {
      if (!_ && (0, N.wt)(a), null != a.item_enum && a.item_enum === h.AM.FIND_FRIENDS) {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("6074")]).then(n.bind(n, 443189));
          return t => (0, s.jsx)(e, {
            source: "Notification Center",
            ...t
          })
        });
        return
      }
      if (null != a.deeplink) {
        let t = m.Z.safeParseWithQuery(a.deeplink);
        if (null == t) return;
        let n = t.hostname,
          s = t.path;
        if (null == n || null == s) return;
        if (m.Z.isDiscordHostname(n)) {
          let t = s.match("^/users/(\\d+)");
          if (null != t && 2 === t.length) {
            var e;
            (0, u.openUserProfileModal)({
              userId: t[1],
              messageId: null === (e = a.message) || void 0 === e ? void 0 : e.id,
              sourceAnalyticsLocations: E,
              analyticsLocation: {
                section: R.jXE.NOTIFICATION_CENTER
              }
            })
          } else await (0, o.Z)(s)
        }
        I.default.track(R.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: h.ud.CLICKED,
          notification_center_id: a.id,
          item_type: a.type,
          acked: _
        })
      }
    }, [a, _, E]), x = null;
    a.type === h.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user && (x = (0, s.jsx)(p.Z, {
      userId: a.other_user.id
    }));
    let v = null != a.local_id,
      D = (0, S.Z)(a);
    return (0, s.jsxs)("div", {
      className: M.row,
      children: [(0, s.jsxs)(l.ClickableContainer, {
        className: M.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": D,
        onClick: O,
        children: [_ ? null : (0, s.jsx)("div", {
          className: M.unread
        }), (0, s.jsx)(g.U, {
          item: a
        }), (0, s.jsxs)("div", {
          className: M.body,
          children: ["lifecycle_item" === a.type && null != a.item_enum && (0, s.jsx)(P, {
            item: a
          }), (0, s.jsx)(l.Text, {
            variant: "text-md/normal",
            color: _ ? "text-muted" : "text-normal",
            children: "string" != typeof D ? D : c.Z.parse(D)
          }), (null === (t = a.message) || void 0 === t ? void 0 : t.content) != null ? (0, s.jsx)(L, {
            item: a
          }) : null, null != a.callout ? (0, s.jsx)(Z, {
            item: a
          }) : null, (0, s.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: _ ? "text-muted" : "header-secondary",
            children: (0, C.a3)(T.default.extractTimestamp(a.id))
          }), x]
        })]
      }), v ? null : (0, s.jsx)(f.z, {
        item: a
      })]
    })
  }),
  j = i.memo(function(e) {
    let {
      items: t
    } = e, n = d.d$.useSetting();
    return (0, s.jsx)(s.Fragment, {
      children: t.map(e => (0, s.jsx)(D, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })