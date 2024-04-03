"use strict";
n.r(t), n.d(t, {
  MessageHistory: function() {
    return _
  },
  ShareToChannelDropdownSelect: function() {
    return g
  },
  ShareToChannelHeader: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("531057"),
  i = n("465270"),
  r = n("612165"),
  o = n("352903"),
  u = n("481060"),
  d = n("904245"),
  c = n("400023"),
  f = n("984933"),
  h = n("375954"),
  m = n("914010"),
  p = n("231338"),
  E = n("689938"),
  C = n("535806");

function g(e) {
  let {
    user: t,
    selectedChannel: n,
    onSelect: l
  } = e;
  return (0, a.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, a.jsx)(S, {
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
        className: C.selectButton,
        children: [(0, a.jsx)(u.Text, {
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

function S(e) {
  let {
    closePopout: t,
    user: n,
    onSelect: s,
    selectedChannel: i
  } = e, [r, o] = l.useState(""), d = m.default.getGuildId(), c = f.default.getChannels(d), h = l.useMemo(() => {
    var e;
    return null !== (e = c[0, f.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
      let {
        channel: t
      } = e;
      return t.name.includes(r)
    }).slice(0, 8).map(e => {
      let {
        channel: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [r, c]);
  return (0, a.jsx)(u.Menu, {
    className: C.menu,
    navId: "share-to-channel-menu",
    onClose: t,
    "aria-label": "menu",
    onSelect: p.NOOP,
    children: (0, a.jsxs)(u.MenuGroup, {
      children: [(0, a.jsx)(u.MenuControlItem, {
        id: "content-inventory-channel-search",
        control: (e, t) => (0, a.jsx)(u.MenuSearchControl, {
          ...e,
          query: r,
          onChange: o,
          ref: t,
          placeholder: E.default.Messages.SEARCH
        })
      }, "share-to-channel-search"), (0, a.jsx)(u.MenuRadioItem, {
        id: n.id,
        label: "@".concat(n.username),
        checked: null === i,
        action: () => {
          t(), s(null)
        },
        group: "user-select"
      }, n.id), h.map(e => (0, a.jsx)(u.MenuRadioItem, {
        id: e.id,
        label: "# ".concat(e.name),
        checked: (null == i ? void 0 : i.name) === e.name,
        action: () => {
          t(), s(e)
        },
        group: "channel-select"
      }, e.id))]
    })
  })
}
let _ = e => {
    let {
      channel: t,
      onMessagesLoad: n
    } = e, [s, i] = l.useState();
    return (l.useEffect(() => {
      (async () => {
        i(void 0), null != t && (await d.default.fetchMessages({
          channelId: t.id,
          limit: 5
        }), i(h.default.getMessages(t.id)), null == n || n())
      })()
    }, [t, n]), null == t || null == s) ? null : (0, a.jsx)("div", {
      className: C.messageHistory,
      children: (0, a.jsx)(c.default, {
        className: C.messages,
        channel: t,
        showingQuarantineBanner: !1,
        hideSummaries: !0,
        showNewMessagesBar: !1
      })
    })
  },
  T = e => {
    let {
      channel: t,
      onClose: n
    } = e;
    return (0, a.jsxs)("div", {
      className: C.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: C.header,
        children: [(0, a.jsx)(o.TextIcon, {}), (0, a.jsx)(u.Text, {
          variant: "text-md/semibold",
          children: t.name
        })]
      }), (0, a.jsx)(u.Clickable, {
        onClick: n,
        className: C.closeIcon,
        children: (0, a.jsx)(r.CircleXIcon, {
          width: 16,
          height: 16
        })
      })]
    })
  }