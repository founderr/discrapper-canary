"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return N
  },
  getContentRowHeight: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("924826"),
  o = n("876215"),
  u = n("481060"),
  d = n("239091"),
  c = n("439170"),
  f = n("594174"),
  h = n("687694"),
  m = n("69259"),
  p = n("91140"),
  E = n("227172"),
  C = n("551228"),
  g = n("678869"),
  S = n("555672"),
  _ = n("644548"),
  T = n("335326"),
  I = n("268010"),
  A = n("206583");
let N = 72;

function v(e) {
  return (null == e ? void 0 : e.type) === c.MemberListRowTypes.CONTENT_INVENTORY ? N : 0
}
let x = i().throttle(e => {
    (0, m.trackInteraction)(A.ContentInventoryInteractionTypes.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  M = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(p.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(T.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(S.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.LISTENED_SESSION:
        return (0, a.jsx)(C.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  R = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(E.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(I.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(_.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.LISTENED_SESSION:
        return (0, a.jsx)(g.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  };
t.default = l.memo(e => {
  var t;
  let {
    index: s,
    ...i
  } = e, [o, c] = l.useState("default"), p = (0, r.useListItem)("".concat(s)), E = null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), C = {
    entry: i.entry,
    channelId: i.channel.id,
    guildId: i.channel.guild_id,
    requestId: i.requestId
  }, {
    openOnHover: g
  } = (0, h.useMemberListHoverInteractions)({
    location: "MemberListContentRow"
  }), S = l.useRef(!1), [_, T] = l.useState(!1), [I, N] = l.useState(!1), v = l.useCallback(e => {
    E && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("153").then(n.bind(n, "330150"));
      return () => (0, a.jsx)(e, {
        entry: i.entry,
        requestId: i.requestId
      })
    })
  }, [i, E]), y = l.useCallback(() => {
    c(String(Date.now()))
  }, []);
  return (0, a.jsx)("div", {
    onMouseEnter: () => {
      S.current = !0, setTimeout(() => {
        S.current && T(!0), g && (0, m.trackInteraction)(A.ContentInventoryInteractionTypes.CARD_CLICK, C)
      }, 100)
    },
    onMouseLeave: () => {
      S.current = !1, setTimeout(() => {
        !S.current && T(!1)
      }, 100)
    },
    children: (0, a.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(R, {
          closePopout: t,
          updatePopoutPosition: y,
          ...i
        })
      },
      position: "left",
      shouldShow: g ? _ : I,
      positionKey: o,
      onRequestOpen: () => (0, m.trackInteraction)(A.ContentInventoryInteractionTypes.CARD_CLICK, C),
      onRequestClose: () => {
        T(!1), N(!1)
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(u.Clickable, {
          onClick: () => {
            g && !_ && T(!0), N(e => !e)
          },
          children: (0, a.jsx)(u.FocusRing, {
            offset: {
              top: 4,
              bottom: 4,
              left: 4,
              right: 4
            },
            children: (0, a.jsx)("div", {
              ...e,
              ...p,
              onMouseEnter: () => {
                x(C)
              },
              onContextMenu: v,
              children: (0, a.jsx)(M, {
                ...i,
                selected: n
              })
            })
          })
        })
      }
    })
  })
})