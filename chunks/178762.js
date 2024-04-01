"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return S
  },
  getContentRowHeight: function() {
    return _
  }
});
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
  h = n("69259"),
  m = n("91140"),
  p = n("227172"),
  E = n("335326"),
  C = n("268010"),
  g = n("206583");
let S = 72;

function _(e) {
  return (null == e ? void 0 : e.type) === c.MemberListRowTypes.CONTENT_INVENTORY ? S : 0
}
let T = i().throttle(e => {
    (0, h.trackInteraction)(g.ContentInventoryInteractionTypes.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  I = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.ContentInventoryEntryType.PLAYED_GAME:
        return (0, a.jsx)(m.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.WATCHED_MEDIA:
        return (0, a.jsx)(E.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  A = e => {
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
        return (0, a.jsx)(C.default, {
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
  } = e, o = (0, r.useListItem)("".concat(s)), c = null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), m = {
    entry: i.entry,
    channelId: i.channel.id,
    guildId: i.channel.guild_id,
    requestId: i.requestId
  }, p = l.useCallback(e => {
    c && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("153").then(n.bind(n, "330150"));
      return () => (0, a.jsx)(e, {
        entry: i.entry,
        requestId: i.requestId
      })
    })
  }, [i, c]);
  return (0, a.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(A, {
        closePopout: t,
        ...i
      })
    },
    position: "left",
    onRequestOpen: () => (0, h.trackInteraction)(g.ContentInventoryInteractionTypes.CARD_CLICK, m),
    spacing: 16,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.jsx)(u.FocusRing, {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        },
        children: (0, a.jsx)("div", {
          ...e,
          ...o,
          onMouseEnter: () => T(m),
          onContextMenu: p,
          children: (0, a.jsx)(I, {
            ...i,
            selected: n
          })
        })
      })
    }
  })
})