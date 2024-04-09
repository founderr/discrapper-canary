"use strict";
n.r(t), n.d(t, {
  MessageHistory: function() {
    return N
  },
  ShareToChannelDropdownSelect: function() {
    return v
  },
  ShareToChannelHeader: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("531057"),
  r = n("465270"),
  o = n("612165"),
  u = n("352903"),
  d = n("481060"),
  c = n("904245"),
  f = n("400023"),
  h = n("592125"),
  m = n("984933"),
  p = n("375954"),
  E = n("944486"),
  C = n("914010"),
  g = n("594174"),
  S = n("5192"),
  _ = n("981631"),
  T = n("231338"),
  I = n("689938"),
  A = n("535806");

function v(e) {
  let {
    user: t,
    selectedChannel: n,
    onSelect: l
  } = e;
  return (0, a.jsx)(d.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, a.jsx)(x, {
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
        className: A.selectButton,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-lg/semibold",
          children: null == n ? "@" : "#"
        }), l ? (0, a.jsx)(i.ChevronSmallDownIcon, {
          width: 16,
          height: 16
        }) : (0, a.jsx)(r.ChevronSmallRightIcon, {
          width: 16,
          height: 16
        })]
      })
    }
  })
}

function x(e) {
  let {
    closePopout: t,
    user: n,
    onSelect: s,
    selectedChannel: i
  } = e, [r, o] = l.useState(""), u = C.default.getGuildId(), c = m.default.getChannels(u), f = E.default.getChannelId(u), p = h.default.getChannel(f), g = l.useMemo(() => {
    var e;
    let t = null !== (e = c[0, m.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
      let {
        channel: t
      } = e;
      return t.name.includes(r) && t.id !== f
    }).slice(0, 8).map(e => {
      let {
        channel: t
      } = e;
      return t
    })) && void 0 !== e ? e : [];
    return null == p ? t : [p, ...t]
  }, [r, c, f, p]);
  return (0, a.jsx)(d.Menu, {
    className: A.menu,
    navId: "share-to-channel-menu",
    onClose: t,
    "aria-label": "menu",
    onSelect: T.NOOP,
    children: (0, a.jsxs)(d.MenuGroup, {
      children: [(0, a.jsx)(d.MenuControlItem, {
        id: "content-inventory-channel-search",
        control: (e, t) => (0, a.jsx)(d.MenuSearchControl, {
          ...e,
          query: r,
          onChange: o,
          ref: t,
          placeholder: I.default.Messages.SEARCH
        })
      }, "share-to-channel-search"), (0, a.jsx)(d.MenuRadioItem, {
        id: n.id,
        label: "@".concat(n.username),
        checked: null === i,
        action: () => {
          t(), s(null)
        },
        group: "user-select"
      }, n.id), g.map(e => (0, a.jsx)(d.MenuRadioItem, {
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
let N = e => {
    let {
      channel: t,
      onMessagesLoad: n
    } = e, [s, i] = l.useState();
    return (l.useEffect(() => {
      (async () => {
        i(void 0), null != t && (await c.default.fetchMessages({
          channelId: t.id,
          limit: 5
        }), i(p.default.getMessages(t.id)), null == n || n())
      })()
    }, [t, n]), null == t || null == s) ? null : (0, a.jsx)("div", {
      className: A.messageHistory,
      children: (0, a.jsx)(f.default, {
        className: A.messages,
        channel: t,
        showingQuarantineBanner: !1,
        hideSummaries: !0,
        showNewMessagesBar: !1
      })
    })
  },
  M = e => {
    let t, {
        channel: n,
        onClose: i
      } = e,
      r = n.type === _.ChannelTypes.DM ? n.recipients[0] : null,
      c = (0, s.useStateFromStores)([g.default], () => g.default.getUser(r)),
      f = l.useMemo(() => S.default.getName(n.guild_id, n.id, c), [n, c]);
    return t = null != c ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.Avatar, {
        src: c.getAvatarURL(n.guild_id, 24),
        size: d.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: f
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.TextIcon, {}), (0, a.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: n.name
      })]
    }), (0, a.jsxs)("div", {
      className: A.headerContainer,
      children: [(0, a.jsx)("div", {
        className: A.header,
        children: t
      }), (0, a.jsx)(d.Clickable, {
        onClick: i,
        className: A.closeIcon,
        children: (0, a.jsx)(o.CircleXIcon, {
          width: 16,
          height: 16
        })
      })]
    })
  }