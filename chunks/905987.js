"use strict";
a.r(s), a.d(s, {
  default: function() {
    return R
  }
}), a("47120");
var t = a("735250"),
  l = a("470079"),
  i = a("120356"),
  n = a.n(i),
  d = a("442837"),
  r = a("115850"),
  c = a("481060"),
  o = a("430824"),
  u = a("771845"),
  h = a("36082"),
  N = a("808602"),
  x = a("351919"),
  I = a("104624"),
  T = a("259580"),
  m = a("93879"),
  f = a("441674"),
  _ = a("465670"),
  v = a("937482"),
  j = a("318010"),
  g = a("186523"),
  M = a("553826"),
  O = a("689938"),
  A = a("351109"),
  C = a("89189");

function R(e) {
  let {
    count: s
  } = e, [a, i] = l.useState("server");
  return (0, t.jsxs)(c.Scroller, {
    className: A.content,
    children: [(0, t.jsxs)("div", {
      className: n()(A.header, C.header),
      children: [(0, t.jsx)(f.default, {
        width: 40,
        height: 40
      }), (0, t.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: O.default.Messages.NOTIF_MIGRATION_TIPS_TITLE.format({
          count: s
        })
      }), (0, t.jsx)(c.Text, {
        className: A.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: O.default.Messages.NOTIF_MIGRATION_TIPS_SUB_TITLE
      })]
    }), (0, t.jsxs)("div", {
      className: C.tabs,
      children: [(0, t.jsx)("div", {
        className: C.tabBackground,
        style: {
          left: "server" === a ? 0 : "50%"
        }
      }), (0, t.jsx)(c.Clickable, {
        className: C.tab,
        onClick: () => i("server"),
        children: (0, t.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "server" === a ? "header-primary" : "text-muted",
          children: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB1
        })
      }), (0, t.jsx)(c.Clickable, {
        className: C.tab,
        onClick: () => i("channel"),
        children: (0, t.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "channel" === a ? "header-primary" : "text-muted",
          children: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2
        })
      })]
    }), (0, t.jsxs)("div", {
      className: C.container,
      children: [(0, t.jsx)(E, {
        hidden: "channel" === a
      }), (0, t.jsx)(p, {
        hidden: "server" === a
      })]
    })]
  })
}

function E(e) {
  let {
    hidden: s
  } = e, a = (0, d.useStateFromStores)([o.default, u.default], () => {
    var e;
    return null === (e = o.default.getGuild(u.default.getFlattenedGuildIds()[0])) || void 0 === e ? void 0 : e.name
  }), [i, m] = l.useState(0);
  return l.useEffect(() => {
    if (s) return;
    let e = 0,
      a = [1500, 1e3, 1e3, 500].map((s, a) => setTimeout(() => m(a + 1), e += s));
    return () => {
      a.forEach(e => clearTimeout(e)), setTimeout(() => m(0), 150)
    }
  }, [s]), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("div", {
      className: C.containerInner,
      children: (0, t.jsxs)("div", {
        className: n()(C.serversSection, {
          [C.hidden]: s,
          [C.showBigMenu]: i >= 1,
          [C.fadeChannels]: i >= 1,
          [C.showModal]: i >= 3
        }),
        children: [(0, t.jsxs)("div", {
          className: C.channels,
          children: [(0, t.jsxs)("div", {
            className: C.guildName,
            children: [(0, t.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              lineClamp: 1,
              children: null != a ? a : "Keyboard Nerds"
            }), i >= 1 ? (0, t.jsx)(_.default, {
              className: C.icon,
              width: 24,
              height: 24
            }) : (0, t.jsx)(T.default, {
              className: n()(C.__invalid_downCaret, C.icon),
              width: 24,
              height: 24
            })]
          }), (0, t.jsx)(w, {
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, t.jsx)(w, {
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, t.jsx)(w, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, t.jsx)(w, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, t.jsx)(w, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, t.jsx)(w, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, t.jsx)(w, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        }), (0, t.jsxs)("div", {
          className: C.bigMenu,
          children: [(0, t.jsx)(G, {
            text: O.default.Messages.INVITE_PEOPLE,
            icon: (0, t.jsx)(r.GroupPlusIcon, {
              className: C.icon,
              width: 18,
              height: 18
            })
          }), (0, t.jsx)("div", {
            className: C.divider
          }), (0, t.jsx)(G, {
            active: i >= 2,
            text: O.default.Messages.NOTIFICATION_SETTINGS,
            icon: (0, t.jsx)(N.default, {
              className: C.icon,
              width: 18,
              height: 18
            })
          }), (0, t.jsx)(G, {
            text: O.default.Messages.PRIVACY_SETTINGS,
            icon: (0, t.jsx)(j.default, {
              className: C.icon,
              width: 18,
              height: 18
            })
          }), (0, t.jsx)(G, {
            text: O.default.Messages.SERVER_SETTINGS,
            icon: (0, t.jsx)(v.default, {
              className: C.icon,
              width: 18,
              height: 18
            })
          }), (0, t.jsx)(G, {
            text: O.default.Messages.CREATE_EVENTS,
            icon: (0, t.jsx)(I.default, {
              className: C.icon,
              width: 18,
              height: 18
            })
          })]
        }), (0, t.jsxs)("div", {
          className: C.notifModal,
          children: [(0, t.jsx)(c.Text, {
            className: C.modalHeader,
            variant: "text-md/medium",
            color: "interactive-active",
            children: O.default.Messages.NOTIFICATION_SETTINGS
          }), (0, t.jsxs)("div", {
            className: C.notifTabs,
            children: [(0, t.jsxs)("div", {
              className: C.notifTab,
              children: [(0, t.jsx)(f.default, {
                width: 24,
                height: 24
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                lineClamp: 1,
                children: O.default.Messages.NOTIFICATION_PRESET_1
              })]
            }), (0, t.jsxs)("div", {
              className: C.activeNotifTab,
              children: [(0, t.jsx)(h.default, {
                width: 24,
                height: 24
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "interactive-active",
                lineClamp: 1,
                children: O.default.Messages.NOTIFICATION_PRESET_2
              })]
            }), (0, t.jsxs)("div", {
              className: C.notifTab,
              children: [(0, t.jsx)(x.default, {
                width: 24,
                height: 24
              }), (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                lineClamp: 1,
                children: O.default.Messages.NOTIFICATION_PRESET_3
              })]
            })]
          }), (0, t.jsxs)("div", {
            className: C.controls,
            children: [(0, t.jsxs)("div", {
              className: C.control,
              children: [(0, t.jsx)("div", {
                className: C.controlPlaceholder
              }), (0, t.jsx)("div", {
                className: C.switchOn
              })]
            }), (0, t.jsxs)("div", {
              className: C.control,
              children: [(0, t.jsx)("div", {
                className: C.controlPlaceholder
              }), (0, t.jsx)("div", {
                className: C.switchOff
              })]
            })]
          })]
        })]
      })
    }), (0, t.jsx)(b, {
      text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB1_TIP2,
      className: C.tipServers2,
      hidden: s || i < 4
    })]
  })
}

function p(e) {
  let {
    hidden: s
  } = e, [a, i] = l.useState(0);
  return l.useEffect(() => {
    if (s) return;
    let e = 0,
      a = [1e3, 1e3, 1e3, 800, 800].map((s, a) => setTimeout(() => i(a + 1), e += s));
    return () => {
      a.forEach(e => clearTimeout(e)), setTimeout(() => i(0), 150)
    }
  }, [s]), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("div", {
      className: C.containerInner,
      children: (0, t.jsxs)("div", {
        className: n()(C.channelsSection, {
          [C.hidden]: s,
          [C.fadeOtherChannels]: a >= 2,
          [C.showLeftMenu]: a >= 2,
          [C.showRightMenu]: a >= 3
        }),
        children: [(0, t.jsxs)("div", {
          className: C.channels,
          children: [(0, t.jsx)(w, {
            selected: a >= 1,
            grey: a >= 5,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, t.jsx)(w, {
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, t.jsx)(w, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, t.jsx)(w, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, t.jsx)(w, {
            grey: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, t.jsx)(w, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, t.jsx)(w, {
            nodot: !0,
            name: O.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        }), (0, t.jsxs)("div", {
          className: n()(C.menu, C.leftMenu),
          children: [(0, t.jsx)(G, {
            small: !0,
            text: O.default.Messages.MUTE,
            icon: (0, t.jsx)(T.default, {
              className: C.caret,
              width: 12,
              height: 12
            })
          }), (0, t.jsx)(G, {
            small: !0,
            text: O.default.Messages.NOTIFICATIONS,
            active: a >= 3,
            icon: (0, t.jsx)(T.default, {
              className: C.caret,
              width: 12,
              height: 12
            })
          })]
        }), (0, t.jsxs)("div", {
          className: n()(C.menu, C.rightMenu),
          children: [(0, t.jsx)(G, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_1,
            icon: a <= 4 ? (0, t.jsx)(M.default, {
              className: C.icon,
              width: 12,
              height: 12
            }) : (0, t.jsx)(g.default, {
              className: C.icon,
              width: 12,
              height: 12
            }),
            active: a <= 4
          }), (0, t.jsx)(G, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_2,
            icon: a >= 5 ? (0, t.jsx)(M.default, {
              className: C.icon,
              width: 12,
              height: 12
            }) : (0, t.jsx)(g.default, {
              className: C.icon,
              width: 12,
              height: 12
            }),
            active: a >= 5
          }), (0, t.jsx)(G, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_3,
            icon: (0, t.jsx)(g.default, {
              className: C.icon,
              width: 12,
              height: 12
            })
          }), (0, t.jsx)(G, {
            small: !0,
            text: O.default.Messages.NOTIFICATION_PRESET_CUSTOM,
            icon: (0, t.jsx)(g.default, {
              className: C.icon,
              width: 12,
              height: 12
            })
          })]
        })]
      })
    }), (0, t.jsx)(b, {
      text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP1,
      className: C.tipChannels1,
      hidden: s || a < 4
    }), (0, t.jsx)(b, {
      text: O.default.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP2,
      className: C.tipChannels2,
      hidden: s || a < 4
    })]
  })
}

function b(e) {
  let {
    text: s,
    className: a,
    hidden: l
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(a, C.tip, {
      [C.hidden]: l
    }),
    children: [(0, t.jsx)(c.Text, {
      className: C.__invalid_tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s
    }), (0, t.jsx)("div", {
      className: C.tipLine
    })]
  })
}

function w(e) {
  let {
    grey: s,
    nodot: a,
    selected: l,
    name: i
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(C.channel, {
      [C.grey]: s || a,
      [C.nodot]: a,
      [C.selected]: l
    }),
    children: [(0, t.jsx)(m.default, {
      className: C.channelIcon,
      width: 16,
      height: 16
    }), (0, t.jsx)(c.Text, {
      variant: "text-md/medium",
      className: C.channelName,
      children: i
    })]
  })
}

function G(e) {
  let {
    text: s,
    active: a,
    small: l,
    icon: i
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(C.menuItem, {
      [C.active]: a
    }),
    children: [(0, t.jsx)(c.Text, {
      variant: l ? "text-xs/normal" : "text-sm/normal",
      color: a ? "always-white" : "interactive-normal",
      children: s
    }), i]
  })
}