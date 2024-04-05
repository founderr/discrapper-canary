"use strict";
n.r(t), n.d(t, {
  MessageHistory: function() {
    return v
  },
  ShareToChannelDropdownSelect: function() {
    return I
  },
  ShareToChannelHeader: function() {
    return x
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
  h = n("984933"),
  m = n("375954"),
  p = n("914010"),
  E = n("594174"),
  C = n("5192"),
  g = n("981631"),
  S = n("231338"),
  _ = n("689938"),
  T = n("535806");

function I(e) {
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
      return (0, a.jsx)(A, {
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
        className: T.selectButton,
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

function A(e) {
  let {
    closePopout: t,
    user: n,
    onSelect: s,
    selectedChannel: i
  } = e, [r, o] = l.useState(""), u = p.default.getGuildId(), c = h.default.getChannels(u), f = l.useMemo(() => {
    var e;
    return null !== (e = c[0, h.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
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
  return (0, a.jsx)(d.Menu, {
    className: T.menu,
    navId: "share-to-channel-menu",
    onClose: t,
    "aria-label": "menu",
    onSelect: S.NOOP,
    children: (0, a.jsxs)(d.MenuGroup, {
      children: [(0, a.jsx)(d.MenuControlItem, {
        id: "content-inventory-channel-search",
        control: (e, t) => (0, a.jsx)(d.MenuSearchControl, {
          ...e,
          query: r,
          onChange: o,
          ref: t,
          placeholder: _.default.Messages.SEARCH
        })
      }, "share-to-channel-search"), (0, a.jsx)(d.MenuRadioItem, {
        id: n.id,
        label: "@".concat(n.username),
        checked: null === i,
        action: () => {
          t(), s(null)
        },
        group: "user-select"
      }, n.id), f.map(e => (0, a.jsx)(d.MenuRadioItem, {
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
let v = e => {
    let {
      channel: t,
      onMessagesLoad: n
    } = e, [s, i] = l.useState();
    return (l.useEffect(() => {
      (async () => {
        i(void 0), null != t && (await c.default.fetchMessages({
          channelId: t.id,
          limit: 5
        }), i(m.default.getMessages(t.id)), null == n || n())
      })()
    }, [t, n]), null == t || null == s) ? null : (0, a.jsx)("div", {
      className: T.messageHistory,
      children: (0, a.jsx)(f.default, {
        className: T.messages,
        channel: t,
        showingQuarantineBanner: !1,
        hideSummaries: !0,
        showNewMessagesBar: !1
      })
    })
  },
  x = e => {
    let t, {
        channel: n,
        onClose: i
      } = e,
      r = n.type === g.ChannelTypes.DM ? n.recipients[0] : null,
      c = (0, s.useStateFromStores)([E.default], () => E.default.getUser(r)),
      f = l.useMemo(() => C.default.getName(n.guild_id, n.id, c), [n, c]);
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
      className: T.headerContainer,
      children: [(0, a.jsx)("div", {
        className: T.header,
        children: t
      }), (0, a.jsx)(d.Clickable, {
        onClick: i,
        className: T.closeIcon,
        children: (0, a.jsx)(o.CircleXIcon, {
          width: 16,
          height: 16
        })
      })]
    })
  }