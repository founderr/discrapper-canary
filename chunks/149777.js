"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("483366"),
  d = l.n(o),
  r = l("969176"),
  u = l.n(r),
  C = l("65597"),
  c = l("77078"),
  f = l("305961"),
  m = l("627490"),
  E = l("745633"),
  M = l("980428"),
  h = l("83900"),
  T = l("875436"),
  x = l("772280"),
  _ = l("71216"),
  H = l("741919"),
  A = l("178406"),
  p = l("645266"),
  S = l("835257"),
  L = l("49111"),
  N = l("782340"),
  g = l("579550"),
  v = l("946032");
let I = [S.JoinSourceType.DISCOVERY, S.JoinSourceType.VANITY_URL, S.JoinSourceType.BOT, S.JoinSourceType.HUB];

function j(e) {
  let {
    type: t,
    vanityUrl: l,
    size: n,
    isFocused: s
  } = e, o = null != n ? n : 16, d = (0, S.getJoinSourceTypeLabel)(t, l), r = function(e, t) {
    switch (e) {
      case S.JoinSourceType.BOT:
        return (0, a.jsx)(_.default, {
          className: g.icon,
          height: t,
          width: t
        });
      case S.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(H.default, {
          className: g.icon,
          height: t,
          width: t
        });
      case S.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(m.default, {
          className: g.icon,
          height: t,
          width: t
        });
      case S.JoinSourceType.HUB:
        return (0, a.jsx)(E.default, {
          className: g.icon,
          height: t,
          width: t
        });
      case S.JoinSourceType.INVITE:
        return null;
      case S.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(h.default, {
          className: g.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, o);
  return (0, a.jsxs)("div", {
    className: i(g.labelWithIconContainer),
    "aria-label": d,
    children: [null != r ? r : null, (0, a.jsx)(c.Text, {
      variant: 12 === o ? "text-xs/medium" : "text-sm/medium",
      className: i(g.labelText, {
        [g.focused]: s
      }),
      children: d
    })]
  })
}

function R(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, C.default)([A.default], () => A.default.getSearchStateByGuildId(t), [t], u), o = (0, C.default)([f.default], () => f.default.getGuild(t)), r = null == o ? void 0 : o.vanityURLCode, [m, E] = n.useState(!1), {
    selectedSourceInviteCode: h,
    selectedJoinSourceType: _
  } = s, H = null != _ && _ !== S.JoinSourceType.UNSPECIFIED, R = n.useCallback(e => {
    let l = e.trim();
    (0, p.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: "" !== l ? l : void 0,
      selectedJoinSourceType: void 0
    })
  }, [t, s]), b = n.useCallback(e => {
    e === _ ? (0, p.updateSearchState)(t, {
      ...s,
      selectedJoinSourceType: void 0
    }) : (0, p.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: void 0,
      selectedJoinSourceType: e
    }), E(!1)
  }, [t, s, _]), D = n.useCallback(d(R, 300), [R]), O = n.useCallback(e => {
    D(e)
  }, [D]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": N.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: L.NOOP,
    children: m ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => E(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: g.customLabelContainer,
          children: [(0, a.jsx)(M.default, {
            width: 16,
            height: 16,
            className: g.caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: N.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: N.default.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == _,
        disabled: !1,
        action: () => b(void 0),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), I.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(j, {
          ...t,
          type: e,
          vanityUrl: r
        }),
        checked: _ === e,
        disabled: !1,
        action: () => b(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, a.jsx)(c.MenuSearchControl, {
          ...e,
          query: null != h ? h : "",
          onChange: O,
          ref: t,
          placeholder: N.default.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuItem, {
        id: "other-join-methods",
        action: () => E(!0),
        render: e => (0, a.jsxs)("div", {
          className: i(g.containerWithRightCaret, g.customLabelContainer),
          children: [(0, a.jsxs)("div", {
            className: i(v.label),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              className: i(g.selectedRadio, g.labelText, {
                [g.focused]: e.isFocused
              }),
              children: N.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), H ? (0, a.jsx)("div", {
              className: g.selectedOption,
              children: (0, a.jsx)(j, {
                ...e,
                size: 12,
                type: _,
                vanityUrl: r
              })
            }) : null]
          }), H ? (0, a.jsx)(T.default, {
            className: g.icon,
            background: g.radio,
            foreground: g.radioSelection
          }) : (0, a.jsx)(x.default, {
            width: 16,
            height: 16,
            className: g.caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}