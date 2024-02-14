"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("269936"),
  E = s("405645"),
  _ = s("692038"),
  I = s("815297"),
  T = s("291655"),
  f = s("766274"),
  S = s("957255"),
  m = s("439932"),
  N = s("766419"),
  g = s("50693"),
  h = s("243863"),
  C = s("91816"),
  R = s("902750"),
  x = s("449804"),
  L = s("53948"),
  O = s("49111"),
  p = s("782340"),
  A = s("893494"),
  M = s("445494"),
  D = s("452593"),
  v = s("572701");
let j = (0, c.makeLazy)({
    createPromise: () => s.el("282585").then(s.bind(s, "282585")),
    webpackId: "282585"
  }),
  G = o.debounce((e, t) => (0, N.updateRoleName)(e, t), 200);

function U(e) {
  let {
    role: t,
    disabled: s
  } = e, [n, i] = l.useState(t.name);
  return l.useEffect(() => {
    i(t.name)
  }, [t.name]), (0, a.jsx)(u.FormItem, {
    title: p.default.Messages.FORM_LABEL_ROLE_NAME,
    required: !0,
    children: (0, a.jsx)(u.TextInput, {
      type: "text",
      value: n,
      maxLength: O.ROLE_NAME_MAX_LENGTH,
      onChange: function(e) {
        i(e), G(t.id, e)
      },
      disabled: s
    })
  })
}

function P(e) {
  let {
    role: t,
    disabled: s
  } = e;
  return (0, a.jsxs)(u.FormItem, {
    className: A.colorPicker,
    title: p.default.Messages.FORM_LABEL_ROLE_COLOR,
    required: !0,
    children: [(0, a.jsx)(u.FormText, {
      className: A.colorDescription,
      children: p.default.Messages.ROLE_COLOR_HELP
    }), (0, a.jsx)(j, {
      defaultColor: O.DEFAULT_ROLE_COLOR,
      colors: O.ROLE_COLORS,
      value: t.color,
      disabled: s,
      onChange: e => {
        var s, a;
        return s = t, a = e, void(s.color !== a && (a !== O.DEFAULT_ROLE_COLOR || 0 !== s.color) && (a === O.DEFAULT_ROLE_COLOR && (a = 0), (0, N.updateRoleColor)(s.id, a)))
      },
      customPickerPosition: "right"
    }, t.id)]
  })
}

function b(e) {
  var t, n;
  let {
    role: i,
    guildId: r
  } = e;
  let o = (n = p.default.Messages.ROLE_SAMPLE_MESSAGE, l.useMemo(() => {
      let e = (0, _.createMessageRecord)({
        ...(0, I.default)({
          channelId: "1337",
          content: n
        }),
        state: O.MessageStates.SENT,
        id: "31337"
      });
      return e.author = new f.default({
        id: "313337",
        username: p.default.Messages.WUMPUS,
        discriminator: "0000",
        bot: !1
      }), e.author.getAvatarURL = () => s("457737"), e
    }, [n])),
    d = {
      nick: o.author.username,
      colorString: null !== (t = i.colorString) && void 0 !== t ? t : void 0
    },
    c = {
      src: D,
      name: i.name
    },
    S = {
      src: v,
      name: i.name
    },
    N = (0, E.useRoleIconForPreview)(r, i);
  return (0, a.jsx)(u.FocusBlock, {
    children: (0, a.jsxs)("div", {
      className: A.previewContainer,
      "aria-hidden": !0,
      children: [(0, a.jsx)("div", {
        className: (0, m.getThemeClass)(O.ThemeTypes.LIGHT),
        children: (0, a.jsx)("div", {
          className: A.messageContainer,
          children: (0, a.jsx)(T.default, {
            author: d,
            message: o,
            roleIcon: null != N ? N : S,
            isGroupStart: !0
          })
        })
      }), (0, a.jsx)("div", {
        className: (0, m.getThemeClass)(O.ThemeTypes.DARK),
        children: (0, a.jsx)("div", {
          className: A.messageContainer,
          children: (0, a.jsx)(T.default, {
            author: d,
            message: o,
            roleIcon: null != N ? N : c,
            isGroupStart: !0
          })
        })
      })]
    })
  })
}

function B(e) {
  let {
    role: t,
    disabled: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.FormSwitch, {
      disabled: s,
      value: t.hoist,
      onChange: e => (0, N.toggleRoleSettings)(t.id, e, t.mentionable),
      hideBorder: !0,
      children: p.default.Messages.FORM_LABEL_HOIST_DESCRIPTION
    }), (0, a.jsx)(u.FormDivider, {
      className: A.divider
    }), (0, a.jsx)(u.FormSwitch, {
      disabled: s,
      value: t.mentionable,
      onChange: e => (0, N.toggleRoleSettings)(t.id, t.hoist, e),
      note: p.default.Messages.FORM_LABEL_MENTIONABLE_DESCRIPTION,
      hideBorder: !0,
      children: p.default.Messages.FORM_LABEL_MENTIONABLE.format()
    })]
  })
}

function y(e) {
  let {
    guild: t,
    role: s,
    locked: l,
    setSelectedSection: n
  } = e, r = s.id === (null == t ? void 0 : t.id), o = l || r, c = (0, d.useStateFromStores)([S.default], () => S.default.canImpersonateRole(t, s)), {
    headerHeight: E,
    headerRef: _
  } = (0, g.default)(0), {
    scrolledToTop: I,
    handleScroll: T
  } = (0, C.useScrolledToTop)();
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: A.scroller,
    style: {
      scrollPaddingTop: E
    },
    onScroll: T,
    children: (0, a.jsxs)("div", {
      className: M.contentWidth,
      children: [(0, a.jsx)("div", {
        className: i(M.header, M.stickyHeader, {
          [M.stickyHeaderElevated]: !I
        }),
        ref: _,
        children: (0, a.jsx)(C.default, {
          guild: t,
          role: s,
          selectedSection: L.GuildSettingsRoleEditSections.DISPLAY,
          setSelectedSection: n
        })
      }), (0, a.jsx)(U, {
        role: s,
        disabled: o
      }), (0, a.jsx)("div", {
        className: A.noticeContainer,
        children: (0, a.jsx)(x.default, {
          role: s
        })
      }), (0, a.jsx)(u.FormDivider, {
        className: A.divider
      }), (0, a.jsx)(P, {
        role: s,
        disabled: o
      }), (0, a.jsx)(h.default, {
        guild: t,
        disabled: o,
        role: s
      }), (0, a.jsx)(b, {
        role: s,
        guildId: t.id
      }), (0, a.jsx)(u.FormDivider, {
        className: A.divider
      }), (0, a.jsx)(B, {
        role: s,
        disabled: o
      }), c ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.FormDivider, {
          className: A.divider
        }), (0, a.jsx)(R.ImpersonateRoleDescription, {
          guildId: t.id,
          role: s
        })]
      }) : null]
    })
  })
}