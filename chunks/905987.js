a.d(s, {
  Z: function() {
    return u
  }
}), a(47120);
var t = a(735250),
  i = a(470079),
  l = a(120356),
  n = a.n(l),
  r = a(442837),
  c = a(481060),
  o = a(430824),
  d = a(771845),
  I = a(259580),
  N = a(186523),
  x = a(553826),
  T = a(689938),
  m = a(288429),
  _ = a(49701);

function u(e) {
  let {
    count: s
  } = e, [a, l] = i.useState("server");
  return (0, t.jsxs)(c.Scroller, {
    className: m.content,
    children: [(0, t.jsxs)("div", {
      className: n()(m.header, _.header),
      children: [(0, t.jsx)(c.CircleCheckIcon, {
        size: "custom",
        color: "currentColor",
        width: 40,
        height: 40
      }), (0, t.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: T.Z.Messages.NOTIF_MIGRATION_TIPS_TITLE.format({
          count: s
        })
      }), (0, t.jsx)(c.Text, {
        className: m.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: T.Z.Messages.NOTIF_MIGRATION_TIPS_SUB_TITLE
      })]
    }), (0, t.jsxs)("div", {
      className: _.tabs,
      children: [(0, t.jsx)("div", {
        className: _.tabBackground,
        style: {
          left: "server" === a ? 0 : "50%"
        }
      }), (0, t.jsx)(c.Clickable, {
        className: _.tab,
        onClick: () => l("server"),
        children: (0, t.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "server" === a ? "header-primary" : "text-muted",
          children: T.Z.Messages.NOTIF_MIGRATION_TIPS_TAB1
        })
      }), (0, t.jsx)(c.Clickable, {
        className: _.tab,
        onClick: () => l("channel"),
        children: (0, t.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "channel" === a ? "header-primary" : "text-muted",
          children: T.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2
        })
      })]
    }), (0, t.jsxs)("div", {
      className: _.container,
      children: [(0, t.jsx)(h, {
        hidden: "channel" === a
      }), (0, t.jsx)(O, {
        hidden: "server" === a
      })]
    })]
  })
}

function h(e) {
  let {
    hidden: s
  } = e, a = (0, r.e7)([o.Z, d.ZP], () => {
    var e;
    return null === (e = o.Z.getGuild(d.ZP.getFlattenedGuildIds()[0])) || void 0 === e ? void 0 : e.name
  }), [l, N] = i.useState(0);
  return i.useEffect(() => {
    if (s) return;
    let e = 0,
      a = [1500, 1e3, 1e3, 500].map((s, a) => setTimeout(() => N(a + 1), e += s));
    return () => {
      a.forEach(e => clearTimeout(e)), setTimeout(() => N(0), 150)
    }
  }, [s]), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("div", {
      className: _.containerInner,
      children: (0, t.jsxs)("div", {
        className: n()(_.serversSection, {
          [_.hidden]: s,
          [_.showBigMenu]: l >= 1,
          [_.fadeChannels]: l >= 1,
          [_.showModal]: l >= 3
        }),
        children: [(0, t.jsxs)("div", {
          className: _.channels,
          children: [(0, t.jsxs)("div", {
            className: _.guildName,
            children: [(0, t.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              lineClamp: 1,
              children: null != a ? a : "Keyboard Nerds"
            }), l >= 1 ? (0, t.jsx)(c.CloseSmallIcon, {
              size: "md",
              color: "currentColor",
              className: _.icon
            }) : (0, t.jsx)(I.Z, {
              className: n()(_.__invalid_downCaret, _.icon),
              width: 24,
              height: 24
            })]
          }), (0, t.jsx)(g, {
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, t.jsx)(g, {
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, t.jsx)(g, {
            grey: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, t.jsx)(g, {
            grey: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, t.jsx)(g, {
            grey: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, t.jsx)(g, {
            nodot: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, t.jsx)(g, {
            nodot: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        }), (0, t.jsxs)("div", {
          className: _.bigMenu,
          children: [(0, t.jsx)(M, {
            text: T.Z.Messages.INVITE_PEOPLE,
            icon: (0, t.jsx)(c.GroupPlusIcon, {
              size: "sm",
              className: _.icon
            })
          }), (0, t.jsx)("div", {
            className: _.divider
          }), (0, t.jsx)(M, {
            active: l >= 2,
            text: T.Z.Messages.NOTIFICATION_SETTINGS,
            icon: (0, t.jsx)(c.BellIcon, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })
          }), (0, t.jsx)(M, {
            text: T.Z.Messages.PRIVACY_SETTINGS,
            icon: (0, t.jsx)(c.ShieldIcon, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })
          }), (0, t.jsx)(M, {
            text: T.Z.Messages.SERVER_SETTINGS,
            icon: (0, t.jsx)(c.SettingsIcon, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })
          }), (0, t.jsx)(M, {
            text: T.Z.Messages.CREATE_EVENTS,
            icon: (0, t.jsx)(c.CalendarPlusIcon, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })
          })]
        }), (0, t.jsxs)("div", {
          className: _.notifModal,
          children: [(0, t.jsx)(c.Text, {
            className: _.modalHeader,
            variant: "text-md/medium",
            color: "interactive-active",
            children: T.Z.Messages.NOTIFICATION_SETTINGS
          }), (0, t.jsxs)("div", {
            className: _.notifTabs,
            children: [(0, t.jsxs)("div", {
              className: _.notifTab,
              children: [(0, t.jsx)(c.CircleCheckIcon, {
                size: "md",
                color: "currentColor"
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                lineClamp: 1,
                children: T.Z.Messages.NOTIFICATION_PRESET_1
              })]
            }), (0, t.jsxs)("div", {
              className: _.activeNotifTab,
              children: [(0, t.jsx)(c.AtIcon, {
                size: "md",
                color: "currentColor"
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "interactive-active",
                lineClamp: 1,
                children: T.Z.Messages.NOTIFICATION_PRESET_2
              })]
            }), (0, t.jsxs)("div", {
              className: _.notifTab,
              children: [(0, t.jsx)(c.BellSlashIcon, {
                size: "md",
                color: "currentColor"
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                lineClamp: 1,
                children: T.Z.Messages.NOTIFICATION_PRESET_3
              })]
            })]
          }), (0, t.jsxs)("div", {
            className: _.controls,
            children: [(0, t.jsxs)("div", {
              className: _.control,
              children: [(0, t.jsx)("div", {
                className: _.controlPlaceholder
              }), (0, t.jsx)("div", {
                className: _.switchOn
              })]
            }), (0, t.jsxs)("div", {
              className: _.control,
              children: [(0, t.jsx)("div", {
                className: _.controlPlaceholder
              }), (0, t.jsx)("div", {
                className: _.switchOff
              })]
            })]
          })]
        })]
      })
    }), (0, t.jsx)(j, {
      text: T.Z.Messages.NOTIF_MIGRATION_TIPS_TAB1_TIP2,
      className: _.tipServers2,
      hidden: s || l < 4
    })]
  })
}

function O(e) {
  let {
    hidden: s
  } = e, [a, l] = i.useState(0);
  return i.useEffect(() => {
    if (s) return;
    let e = 0,
      a = [1e3, 1e3, 1e3, 800, 800].map((s, a) => setTimeout(() => l(a + 1), e += s));
    return () => {
      a.forEach(e => clearTimeout(e)), setTimeout(() => l(0), 150)
    }
  }, [s]), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("div", {
      className: _.containerInner,
      children: (0, t.jsxs)("div", {
        className: n()(_.channelsSection, {
          [_.hidden]: s,
          [_.fadeOtherChannels]: a >= 2,
          [_.showLeftMenu]: a >= 2,
          [_.showRightMenu]: a >= 3
        }),
        children: [(0, t.jsxs)("div", {
          className: _.channels,
          children: [(0, t.jsx)(g, {
            selected: a >= 1,
            grey: a >= 5,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, t.jsx)(g, {
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, t.jsx)(g, {
            grey: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, t.jsx)(g, {
            grey: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, t.jsx)(g, {
            grey: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, t.jsx)(g, {
            nodot: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, t.jsx)(g, {
            nodot: !0,
            name: T.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        }), (0, t.jsxs)("div", {
          className: n()(_.menu, _.leftMenu),
          children: [(0, t.jsx)(M, {
            small: !0,
            text: T.Z.Messages.MUTE,
            icon: (0, t.jsx)(I.Z, {
              className: _.caret,
              width: 12,
              height: 12
            })
          }), (0, t.jsx)(M, {
            small: !0,
            text: T.Z.Messages.NOTIFICATIONS,
            active: a >= 3,
            icon: (0, t.jsx)(I.Z, {
              className: _.caret,
              width: 12,
              height: 12
            })
          })]
        }), (0, t.jsxs)("div", {
          className: n()(_.menu, _.rightMenu),
          children: [(0, t.jsx)(M, {
            small: !0,
            text: T.Z.Messages.NOTIFICATION_PRESET_1,
            icon: a <= 4 ? (0, t.jsx)(x.Z, {
              className: _.icon,
              width: 12,
              height: 12
            }) : (0, t.jsx)(N.Z, {
              className: _.icon,
              width: 12,
              height: 12
            }),
            active: a <= 4
          }), (0, t.jsx)(M, {
            small: !0,
            text: T.Z.Messages.NOTIFICATION_PRESET_2,
            icon: a >= 5 ? (0, t.jsx)(x.Z, {
              className: _.icon,
              width: 12,
              height: 12
            }) : (0, t.jsx)(N.Z, {
              className: _.icon,
              width: 12,
              height: 12
            }),
            active: a >= 5
          }), (0, t.jsx)(M, {
            small: !0,
            text: T.Z.Messages.NOTIFICATION_PRESET_3,
            icon: (0, t.jsx)(N.Z, {
              className: _.icon,
              width: 12,
              height: 12
            })
          }), (0, t.jsx)(M, {
            small: !0,
            text: T.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
            icon: (0, t.jsx)(N.Z, {
              className: _.icon,
              width: 12,
              height: 12
            })
          })]
        })]
      })
    }), (0, t.jsx)(j, {
      text: T.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP1,
      className: _.tipChannels1,
      hidden: s || a < 4
    }), (0, t.jsx)(j, {
      text: T.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP2,
      className: _.tipChannels2,
      hidden: s || a < 4
    })]
  })
}

function j(e) {
  let {
    text: s,
    className: a,
    hidden: i
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(a, _.tip, {
      [_.hidden]: i
    }),
    children: [(0, t.jsx)(c.Text, {
      className: _.__invalid_tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s
    }), (0, t.jsx)("div", {
      className: _.tipLine
    })]
  })
}

function g(e) {
  let {
    grey: s,
    nodot: a,
    selected: i,
    name: l
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(_.channel, {
      [_.grey]: s || a,
      [_.nodot]: a,
      [_.selected]: i
    }),
    children: [(0, t.jsx)(c.TextIcon, {
      size: "xs",
      color: "currentColor",
      className: _.channelIcon
    }), (0, t.jsx)(c.Text, {
      variant: "text-md/medium",
      className: _.channelName,
      children: l
    })]
  })
}

function M(e) {
  let {
    text: s,
    active: a,
    small: i,
    icon: l
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(_.menuItem, {
      [_.active]: a
    }),
    children: [(0, t.jsx)(c.Text, {
      variant: i ? "text-xs/normal" : "text-sm/normal",
      color: a ? "always-white" : "interactive-normal",
      children: s
    }), l]
  })
}