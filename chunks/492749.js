t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var a, l, n = t(735250),
  i = t(470079),
  o = t(120356),
  r = t.n(o),
  c = t(442837),
  d = t(481060),
  u = t(285952),
  C = t(346656),
  m = t(273387),
  E = t(16853),
  _ = t(689938),
  x = t(237951),
  L = t(36705),
  I = t(216019);

function T(e) {
  let {
    guild: s,
    onClick: t
  } = e;
  return (0, n.jsxs)(d.Clickable, {
    className: x.clickableGuildRow,
    onClick: t,
    children: [(0, n.jsx)(C.Z, {
      guild: s,
      size: C.Z.Sizes.MEDIUM,
      active: !0
    }), (0, n.jsx)(d.Text, {
      className: x.guildName,
      variant: "text-md/semibold",
      children: s.name
    }), (0, n.jsx)("img", {
      className: x.__invalid_arrow,
      alt: "",
      src: I
    })]
  })
}

function h(e) {
  let {
    directoryChannelId: s,
    guild: t
  } = e, a = (0, c.e7)([m.Z], () => m.Z.getDirectoryEntry(s, t.id));
  return (0, n.jsxs)("div", {
    className: x.guildRow,
    children: [(0, n.jsx)(C.Z, {
      guild: t,
      size: C.Z.Sizes.MEDIUM,
      active: !0
    }), (0, n.jsx)(d.Text, {
      className: x.guildName,
      variant: "text-md/normal",
      children: t.name
    }), (0, n.jsx)(E.Z, {
      entry: a,
      forceLightTheme: !0,
      children: e => (0, n.jsx)(d.MoreHorizontalIcon, {
        size: "md",
        color: "currentColor",
        ...e,
        className: x.overflowIcon
      })
    })]
  })
}

function g(e) {
  let s, {
      directoryChannelId: t,
      onClose: a,
      onGuildChosen: l,
      handleChooseCreate: o,
      directoryGuildName: c,
      availableGuilds: C,
      addedGuilds: m,
      loading: E
    } = e,
    [I, g] = i.useState(0);
  return s = E ? (0, n.jsx)("div", {
    className: x.emptyContainer,
    children: (0, n.jsx)(d.Spinner, {})
  }) : 0 === I ? 0 === C.length ? (0, n.jsxs)("div", {
    className: x.emptyContainer,
    children: [(0, n.jsx)("img", {
      src: L,
      alt: "",
      className: x.emptyImage
    }), (0, n.jsx)(d.Text, {
      className: x.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: _.Z.Messages.HUB_CHOOSE_GUILD_EMPTY
    })]
  }) : C.map(e => (0, n.jsx)(T, {
    guild: e,
    onClick: () => l(e)
  }, e.id)) : 0 === m.length ? (0, n.jsxs)("div", {
    className: x.emptyContainer,
    children: [(0, n.jsx)("img", {
      src: L,
      alt: "",
      className: x.emptyImage
    }), (0, n.jsx)(d.Text, {
      className: x.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: _.Z.Messages.HUB_CHOOSE_GUILD_ADDED_EMPTY
    })]
  }) : m.map(e => (0, n.jsx)(h, {
    directoryChannelId: t,
    guild: e
  }, e.id)), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.ModalHeader, {
      direction: u.Z.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [null != a && (0, n.jsx)(d.ModalCloseButton, {
        className: x.closeButton,
        onClick: a
      }), (0, n.jsx)(d.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: _.Z.Messages.HUB_CHOOSE_GUILD_TITLE.format({
          guildName: c
        })
      }), (0, n.jsx)(d.Text, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: _.Z.Messages.HUB_CHOOSE_GUILD_SUBTITLE
      }), (0, n.jsxs)(d.TabBar, {
        className: x.tabBar,
        selectedItem: I,
        onItemSelect: g,
        type: "top",
        look: "brand",
        children: [(0, n.jsx)(d.TabBar.Item, {
          className: r()(x.tabBarItem, {
            [x.selectedTab]: 0 === I
          }),
          id: 0,
          children: _.Z.Messages.HUB_CHOOSE_GUILD_CHOOSE_TAB
        }), (0, n.jsx)(d.TabBar.Item, {
          className: r()(x.tabBarItem, {
            [x.selectedTab]: 1 === I
          }),
          id: 1,
          children: _.Z.Messages.HUB_CHOOSE_GUILD_ADDED_TAB
        })]
      })]
    }), (0, n.jsx)(d.ModalContent, {
      className: x.guildList,
      paddingFix: !1,
      children: s
    }), (0, n.jsxs)(d.ModalFooter, {
      className: x.footer,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        className: x.footerTitle,
        children: _.Z.Messages.HUB_CREATE_GUILD_LABEL
      }), (0, n.jsx)(d.Button, {
        className: x.footerButton,
        color: d.Button.Colors.PRIMARY,
        onClick: o,
        children: _.Z.Messages.HUB_CREATE_GUILD_CTA
      })]
    })]
  })
}(l = a || (a = {}))[l.AVAILABLE = 0] = "AVAILABLE", l[l.ADDED = 1] = "ADDED"