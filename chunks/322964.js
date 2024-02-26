"use strict";
n.r(t), n.d(t, {
  ForYouItems: function() {
    return y
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("308289"),
  r = n("537325"),
  o = n("367376"),
  u = n("401642"),
  d = n("845579"),
  c = n("766274"),
  f = n("697218"),
  h = n("599110"),
  E = n("299039"),
  m = n("253981"),
  p = n("352273"),
  S = n("360191"),
  g = n("342176"),
  N = n("183030"),
  _ = n("899779"),
  T = n("778597"),
  I = n("960082"),
  C = n("49111"),
  A = n("782340"),
  M = n("230730"),
  v = n("786948"),
  x = n("780810");

function R(e) {
  var t, n, l;
  let {
    item: r
  } = e, u = null === (t = r.message) || void 0 === t ? void 0 : t.content;
  if (null == u) return (0, a.jsx)("div", {
    children: " "
  });
  let d = null !== (l = f.default.getUser(null === (n = r.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : new c.default(r.other_user),
    h = o.default.parse(u);
  return (0, a.jsxs)("div", {
    className: M.messagePreviewContainer,
    children: [(0, a.jsx)(i.default, {
      user: d,
      size: s.AvatarSizes.SIZE_24
    }), (0, a.jsx)(s.Text, {
      className: M.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: h
    })]
  })
}

function L(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = o.default.parse(t);
  return (0, a.jsx)("div", {
    className: M.calloutContainer,
    children: (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function O(e) {
  let {
    item: t
  } = e, n = x, l = A.default.Messages.NOTIFICATION_CENTER_TODO;
  return t.completed && (n = v, l = A.default.Messages.NOTIFICATION_CENTER_DONE), (0, a.jsxs)("div", {
    className: M.lifecycleContainer,
    children: [(0, a.jsx)("img", {
      className: M.checkbox,
      alt: "",
      src: n
    }), (0, a.jsx)(s.Text, {
      className: M.lifecycleText,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: l
    })]
  })
}
let b = l.memo(function(e) {
    var t;
    let {
      item: i,
      ackedBeforeId: d
    } = e, c = (0, N.useNotificationCenterItemAcked)(i, d), f = l.useCallback(async () => {
      if (!c && (0, p.markNotificationCenterItemAcked)(i), null != i.item_enum && i.item_enum === S.ItemEnum.FIND_FRIENDS) {
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("927960").then(n.bind(n, "927960"));
          return t => (0, a.jsx)(e, {
            source: "Notification Center",
            ...t
          })
        });
        return
      }
      if (null != i.deeplink) {
        let e = m.default.safeParseWithQuery(i.deeplink);
        if (null == e) return;
        let t = e.hostname,
          n = e.path;
        if (null == t || null == n) return;
        if (m.default.isDiscordHostname(t)) {
          let e = n.match("^/users/(\\d+)");
          null != e && 2 === e.length ? (0, u.openUserProfileModal)({
            userId: e[1],
            analyticsLocation: {
              section: C.AnalyticsSections.NOTIFICATION_CENTER
            }
          }) : await (0, r.default)(n)
        }
        h.default.track(C.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: S.NotificationCenterActionTypes.CLICKED,
          notification_center_id: i.id,
          item_type: i.type,
          acked: c
        })
      }
    }, [i, c]), A = null;
    i.type === S.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != i.other_user && (A = (0, a.jsx)(T.default, {
      userId: i.other_user.id
    }));
    let v = null != i.local_id;
    return (0, a.jsxs)("div", {
      className: M.row,
      children: [(0, a.jsxs)(s.ClickableContainer, {
        className: M.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": i.body,
        onClick: f,
        children: [c ? null : (0, a.jsx)("div", {
          className: M.unread
        }), (0, a.jsx)(_.ForYouItemImage, {
          item: i
        }), (0, a.jsxs)("div", {
          className: M.body,
          children: ["lifecycle_item" === i.type && null != i.item_enum && (0, a.jsx)(O, {
            item: i
          }), (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            color: c ? "text-muted" : "text-normal",
            children: o.default.parse(i.body)
          }), (null === (t = i.message) || void 0 === t ? void 0 : t.content) != null ? (0, a.jsx)(R, {
            item: i
          }) : null, null != i.callout ? (0, a.jsx)(L, {
            item: i
          }) : null, (0, a.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: c ? "text-muted" : "header-secondary",
            children: (0, g.getRelativeTimestamp)(E.default.extractTimestamp(i.id))
          }), A]
        })]
      }), v ? null : (0, a.jsx)(I.MoreButton, {
        item: i
      })]
    })
  }),
  y = l.memo(function(e) {
    let {
      items: t
    } = e, n = d.NotificationCenterAckedBeforeId.useSetting();
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(b, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })