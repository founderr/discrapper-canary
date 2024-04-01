"use strict";
n.r(t), n.d(t, {
  ShareToChannelDropdownSelect: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("531057"),
  i = n("465270"),
  r = n("481060"),
  o = n("984933"),
  u = n("914010"),
  d = n("231338"),
  c = n("689938"),
  f = n("535806");

function h(e) {
  let {
    user: t,
    selectedChannel: n,
    onSelect: l
  } = e;
  return (0, a.jsx)(r.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, a.jsx)(m, {
        closePopout: s,
        user: t,
        onSelect: l,
        selectedChannel: n
      })
    },
    position: "bottom",
    animationPosition: "top",
    spacing: 16,
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, a.jsxs)("div", {
        ...e,
        className: f.selectButton,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-lg/semibold",
          children: null == n ? "@" : "#"
        }), l ? (0, a.jsx)(s.ChevronSmallDownIcon, {
          width: 16,
          height: 16
        }) : (0, a.jsx)(i.ChevronSmallRightIcon, {
          width: 16,
          height: 16
        })]
      })
    }
  })
}

function m(e) {
  let {
    closePopout: t,
    user: n,
    onSelect: s,
    selectedChannel: i
  } = e, [h, m] = l.useState(""), p = u.default.getGuildId(), E = o.default.getChannels(p), C = l.useMemo(() => {
    var e;
    return null !== (e = E[0, o.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
      let {
        channel: t
      } = e;
      return t.name.includes(h)
    }).slice(0, 8).map(e => {
      let {
        channel: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [h, E]);
  return (0, a.jsx)(r.Menu, {
    className: f.menu,
    navId: "share-to-channel-menu",
    onClose: t,
    "aria-label": "menu",
    onSelect: d.NOOP,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [(0, a.jsx)(r.MenuControlItem, {
        id: "content-inventory-channel-search",
        control: (e, t) => (0, a.jsx)(r.MenuSearchControl, {
          ...e,
          query: h,
          onChange: m,
          ref: t,
          placeholder: c.default.Messages.SEARCH
        })
      }, "share-to-channel-search"), (0, a.jsx)(r.MenuRadioItem, {
        id: n.id,
        label: "@".concat(n.username),
        checked: null === i,
        action: () => s(null),
        group: "user-select"
      }, n.id), C.map(e => (0, a.jsx)(r.MenuRadioItem, {
        id: e.id,
        label: "# ".concat(e.name),
        checked: (null == i ? void 0 : i.name) === e.name,
        action: () => s(e),
        group: "channel-select"
      }, e.id))]
    })
  })
}