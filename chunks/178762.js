"use strict";
n.r(t), n.d(t, {
  DEFAULT_CONTENT_ROW_HEIGHT: function() {
    return T
  },
  getContentRowHeight: function() {
    return I
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
  h = n("69259"),
  m = n("91140"),
  p = n("227172"),
  E = n("555672"),
  C = n("644548"),
  g = n("335326"),
  S = n("268010"),
  _ = n("206583");
let T = 72;

function I(e) {
  return (null == e ? void 0 : e.type) === c.MemberListRowTypes.CONTENT_INVENTORY ? T : 0
}
let A = i().throttle(e => {
    (0, h.trackInteraction)(_.ContentInventoryInteractionTypes.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  v = e => {
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
        return (0, a.jsx)(g.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
        return (0, a.jsx)(E.default, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  N = e => {
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
        return (0, a.jsx)(S.default, {
          ...n,
          entry: t
        });
      case o.ContentInventoryEntryType.TOP_GAME:
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
  } = e, [o, c] = l.useState("default"), m = (0, r.useListItem)("".concat(s)), p = null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), E = l.useRef(null), C = {
    entry: i.entry,
    channelId: i.channel.id,
    guildId: i.channel.guild_id,
    requestId: i.requestId
  }, g = l.useCallback(e => {
    p && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("153").then(n.bind(n, "330150"));
      return () => (0, a.jsx)(e, {
        entry: i.entry,
        requestId: i.requestId
      })
    })
  }, [i, p]), S = l.useCallback(() => {
    c(String(Date.now()))
  }, []);
  return (0, a.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)("div", {
        ref: E,
        children: (0, a.jsx)(N, {
          closePopout: t,
          updatePopoutPosition: S,
          ...i
        })
      })
    },
    position: "left",
    positionKey: o,
    onRequestOpen: () => (0, h.trackInteraction)(_.ContentInventoryInteractionTypes.CARD_CLICK, C),
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
          ...m,
          onMouseEnter: () => A(C),
          onContextMenu: g,
          children: (0, a.jsx)(v, {
            ...i,
            selected: n
          })
        })
      })
    }
  })
})