"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return x
  },
  getContentRowHeight: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("924826"),
  d = n("876215"),
  c = n("481060"),
  f = n("239091"),
  h = n("439170"),
  m = n("594174"),
  p = n("351167"),
  E = n("687694"),
  C = n("69259"),
  g = n("91140"),
  S = n("227172"),
  _ = n("555672"),
  T = n("644548"),
  I = n("335326"),
  A = n("268010"),
  v = n("206583"),
  N = n("978284");
let x = 72;

function M(e) {
  return (null == e ? void 0 : e.type) === h.MemberListRowTypes.CONTENT_INVENTORY ? x : 0
}
let R = o().throttle(e => {
    (0, C.trackInteraction)(v.ContentInventoryInteractionTypes.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  L = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case d.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(g.default, {
          ...n,
          entry: t
        });
      case d.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(I.default, {
          ...n,
          entry: t
        });
      case d.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(_.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  y = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case d.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(S.default, {
          ...n,
          entry: t
        });
      case d.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(A.default, {
          ...n,
          entry: t
        });
      case d.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(T.default, {
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
    ...r
  } = e, [o, d] = l.useState("default"), h = (0, u.useListItem)("".concat(s)), g = null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), S = {
    entry: r.entry,
    channelId: r.channel.id,
    guildId: r.channel.guild_id,
    requestId: r.requestId
  }, {
    showReplyIcon: _,
    openOnHover: T
  } = (0, E.useMemberListHoverInteractions)({
    location: "MemberListContentRow"
  }), I = l.useRef(!1), [A, x] = l.useState(!1), [M, O] = l.useState(!1), j = l.useCallback(e => {
    g && (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("153").then(n.bind(n, "330150"));
      return () => (0, a.jsx)(e, {
        entry: r.entry,
        requestId: r.requestId
      })
    })
  }, [r, g]), P = l.useCallback(() => {
    d(String(Date.now()))
  }, []);
  return (0, a.jsx)("div", {
    onMouseEnter: () => {
      I.current = !0, setTimeout(() => {
        I.current && x(!0)
      }, 100)
    },
    onMouseLeave: () => {
      I.current = !1, setTimeout(() => {
        !I.current && x(!1)
      }, 100)
    },
    children: (0, a.jsx)(c.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(y, {
          closePopout: t,
          updatePopoutPosition: P,
          ...r
        })
      },
      position: "left",
      shouldShow: T ? A : M,
      positionKey: o,
      onRequestOpen: () => (0, C.trackInteraction)(v.ContentInventoryInteractionTypes.CARD_CLICK, S),
      onRequestClose: () => {
        x(!1), O(!1)
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(c.Clickable, {
          onClick: () => O(e => !e),
          children: (0, a.jsx)(c.FocusRing, {
            offset: {
              top: 4,
              bottom: 4,
              left: 4,
              right: 4
            },
            children: (0, a.jsxs)("div", {
              className: N.contentRow,
              ...e,
              ...h,
              onMouseEnter: () => {
                R(S)
              },
              onContextMenu: j,
              children: [(0, a.jsx)(L, {
                ...r,
                selected: n
              }), _ && (0, a.jsx)("div", {
                className: i()(N.reply, {
                  [N.hovered]: I.current
                }),
                children: (0, a.jsx)(p.default, {
                  className: N.icon
                })
              })]
            })
          })
        })
      }
    })
  })
})