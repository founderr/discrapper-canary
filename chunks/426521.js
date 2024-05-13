"use strict";
n.r(t), n.d(t, {
  ForYouItems: function() {
    return F
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("99690"),
  r = n("906732"),
  o = n("336197"),
  u = n("454585"),
  d = n("171368"),
  c = n("695346"),
  f = n("598077"),
  h = n("594174"),
  E = n("626135"),
  m = n("709054"),
  p = n("591759"),
  g = n("833592"),
  S = n("497089"),
  N = n("178480"),
  _ = n("418316"),
  T = n("526146"),
  I = n("400565"),
  C = n("148789"),
  A = n("11825"),
  v = n("981631"),
  M = n("689938"),
  R = n("202001"),
  x = n("756688"),
  L = n("886765");

function O(e) {
  var t, n, l;
  let {
    item: r
  } = e, o = null === (t = r.message) || void 0 === t ? void 0 : t.content;
  if (null == o) return (0, a.jsx)("div", {});
  let d = null !== (l = h.default.getUser(null === (n = r.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : new f.default(r.other_user),
    c = u.default.parse(o);
  return (0, a.jsxs)("div", {
    className: R.messagePreviewContainer,
    children: [(0, a.jsx)(i.default, {
      user: d,
      size: s.AvatarSizes.SIZE_24
    }), (0, a.jsx)(s.Text, {
      className: R.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: c
    })]
  })
}

function b(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = u.default.parse(t);
  return (0, a.jsx)("div", {
    className: R.calloutContainer,
    children: (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function y(e) {
  let {
    item: t
  } = e, n = L, l = M.default.Messages.NOTIFICATION_CENTER_TODO;
  return t.completed && (n = x, l = M.default.Messages.NOTIFICATION_CENTER_DONE), (0, a.jsxs)("div", {
    className: R.lifecycleContainer,
    children: [(0, a.jsx)("img", {
      className: R.checkbox,
      alt: "",
      src: n
    }), (0, a.jsx)(s.Text, {
      className: R.lifecycleText,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: l
    })]
  })
}
let j = l.memo(function(e) {
    var t;
    let {
      item: i,
      ackedBeforeId: c
    } = e, {
      analyticsLocations: f
    } = (0, r.default)(), h = (0, T.useNotificationCenterItemAcked)(i, c), M = l.useCallback(async () => {
      if (!h && (0, g.markNotificationCenterItemAcked)(i), null != i.item_enum && i.item_enum === S.ItemEnum.FIND_FRIENDS) {
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("6074")]).then(n.bind(n, "443189"));
          return t => (0, a.jsx)(e, {
            source: "Notification Center",
            ...t
          })
        });
        return
      }
      if (null != i.deeplink) {
        let t = p.default.safeParseWithQuery(i.deeplink);
        if (null == t) return;
        let n = t.hostname,
          a = t.path;
        if (null == n || null == a) return;
        if (p.default.isDiscordHostname(n)) {
          let t = a.match("^/users/(\\d+)");
          if (null != t && 2 === t.length) {
            var e;
            (0, d.openUserProfileModal)({
              userId: t[1],
              messageId: null === (e = i.message) || void 0 === e ? void 0 : e.id,
              sourceAnalyticsLocations: f,
              analyticsLocation: {
                section: v.AnalyticsSections.NOTIFICATION_CENTER
              }
            })
          } else await (0, o.default)(a)
        }
        E.default.track(v.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: S.NotificationCenterActionTypes.CLICKED,
          notification_center_id: i.id,
          item_type: i.type,
          acked: h
        })
      }
    }, [i, h, f]), x = null;
    i.type === S.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != i.other_user && (x = (0, a.jsx)(C.default, {
      userId: i.other_user.id
    }));
    let L = null != i.local_id,
      j = (0, _.default)(i);
    return (0, a.jsxs)("div", {
      className: R.row,
      children: [(0, a.jsxs)(s.ClickableContainer, {
        className: R.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": j,
        onClick: M,
        children: [h ? null : (0, a.jsx)("div", {
          className: R.unread
        }), (0, a.jsx)(I.ForYouItemImage, {
          item: i
        }), (0, a.jsxs)("div", {
          className: R.body,
          children: ["lifecycle_item" === i.type && null != i.item_enum && (0, a.jsx)(y, {
            item: i
          }), (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            color: h ? "text-muted" : "text-normal",
            children: "string" != typeof j ? j : u.default.parse(j)
          }), (null === (t = i.message) || void 0 === t ? void 0 : t.content) != null ? (0, a.jsx)(O, {
            item: i
          }) : null, null != i.callout ? (0, a.jsx)(b, {
            item: i
          }) : null, (0, a.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: h ? "text-muted" : "header-secondary",
            children: (0, N.getRelativeTimestamp)(m.default.extractTimestamp(i.id))
          }), x]
        })]
      }), L ? null : (0, a.jsx)(A.MoreButton, {
        item: i
      })]
    })
  }),
  F = l.memo(function(e) {
    let {
      items: t
    } = e, n = c.NotificationCenterAckedBeforeId.useSetting();
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(j, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })