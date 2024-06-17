"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var l, a, i = s("735250"),
  n = s("470079"),
  d = s("120356"),
  r = s.n(d),
  o = s("442837"),
  u = s("481060"),
  c = s("285952"),
  C = s("346656"),
  m = s("808268"),
  f = s("273387"),
  _ = s("16853"),
  E = s("689938"),
  T = s("939865"),
  x = s("36705"),
  I = s("216019");

function L(e) {
  let {
    guild: t,
    onClick: s
  } = e;
  return (0, i.jsxs)(u.Clickable, {
    className: T.clickableGuildRow,
    onClick: s,
    children: [(0, i.jsx)(C.default, {
      guild: t,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: T.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      className: T.__invalid_arrow,
      alt: "",
      src: I
    })]
  })
}

function h(e) {
  let {
    directoryChannelId: t,
    guild: s
  } = e, l = (0, o.useStateFromStores)([f.default], () => f.default.getDirectoryEntry(t, s.id));
  return (0, i.jsxs)("div", {
    className: T.guildRow,
    children: [(0, i.jsx)(C.default, {
      guild: s,
      size: C.default.Sizes.MEDIUM,
      active: !0
    }), (0, i.jsx)(u.Text, {
      className: T.guildName,
      variant: "text-md/normal",
      children: s.name
    }), (0, i.jsx)(_.default, {
      entry: l,
      forceLightTheme: !0,
      children: e => (0, i.jsx)(m.default, {
        ...e,
        className: T.overflowIcon
      })
    })]
  })
}

function g(e) {
  let t, {
      directoryChannelId: s,
      onClose: l,
      onGuildChosen: a,
      handleChooseCreate: d,
      directoryGuildName: o,
      availableGuilds: C,
      addedGuilds: m,
      loading: f
    } = e,
    [_, I] = n.useState(0);
  return t = f ? (0, i.jsx)("div", {
    className: T.emptyContainer,
    children: (0, i.jsx)(u.Spinner, {})
  }) : 0 === _ ? 0 === C.length ? (0, i.jsxs)("div", {
    className: T.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: x,
      alt: "",
      className: T.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: T.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: E.default.Messages.HUB_CHOOSE_GUILD_EMPTY
    })]
  }) : C.map(e => (0, i.jsx)(L, {
    guild: e,
    onClick: () => a(e)
  }, e.id)) : 0 === m.length ? (0, i.jsxs)("div", {
    className: T.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: x,
      alt: "",
      className: T.emptyImage
    }), (0, i.jsx)(u.Text, {
      className: T.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: E.default.Messages.HUB_CHOOSE_GUILD_ADDED_EMPTY
    })]
  }) : m.map(e => (0, i.jsx)(h, {
    directoryChannelId: s,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(u.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: T.header,
      separator: !1,
      children: [null != l && (0, i.jsx)(u.ModalCloseButton, {
        className: T.closeButton,
        onClick: l
      }), (0, i.jsx)(u.Heading, {
        className: T.title,
        variant: "heading-xl/semibold",
        children: E.default.Messages.HUB_CHOOSE_GUILD_TITLE.format({
          guildName: o
        })
      }), (0, i.jsx)(u.Text, {
        className: T.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: E.default.Messages.HUB_CHOOSE_GUILD_SUBTITLE
      }), (0, i.jsxs)(u.TabBar, {
        className: T.tabBar,
        selectedItem: _,
        onItemSelect: I,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(u.TabBar.Item, {
          className: r()(T.tabBarItem, {
            [T.selectedTab]: 0 === _
          }),
          id: 0,
          children: E.default.Messages.HUB_CHOOSE_GUILD_CHOOSE_TAB
        }), (0, i.jsx)(u.TabBar.Item, {
          className: r()(T.tabBarItem, {
            [T.selectedTab]: 1 === _
          }),
          id: 1,
          children: E.default.Messages.HUB_CHOOSE_GUILD_ADDED_TAB
        })]
      })]
    }), (0, i.jsx)(u.ModalContent, {
      className: T.guildList,
      paddingFix: !1,
      children: t
    }), (0, i.jsxs)(u.ModalFooter, {
      className: T.footer,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        className: T.footerTitle,
        children: E.default.Messages.HUB_CREATE_GUILD_LABEL
      }), (0, i.jsx)(u.Button, {
        className: T.footerButton,
        color: u.Button.Colors.PRIMARY,
        onClick: d,
        children: E.default.Messages.HUB_CREATE_GUILD_CTA
      })]
    })]
  })
}(a = l || (l = {}))[a.AVAILABLE = 0] = "AVAILABLE", a[a.ADDED = 1] = "ADDED"