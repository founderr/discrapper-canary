"use strict";
l.r(t), l.d(t, {
  default: function() {
    return D
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
  E = l("627490"),
  m = l("745633"),
  M = l("980428"),
  h = l("83900"),
  _ = l("875436"),
  T = l("772280"),
  x = l("71216"),
  S = l("741919"),
  A = l("178406"),
  p = l("645266"),
  L = l("835257"),
  H = l("561909"),
  N = l("49111"),
  g = l("782340"),
  I = l("655295"),
  R = l("639826");
let v = [L.JoinSourceType.DISCOVERY, L.JoinSourceType.VANITY_URL, L.JoinSourceType.BOT, L.JoinSourceType.HUB];

function j(e) {
  let {
    type: t,
    text: l,
    size: n,
    vanityUrl: s,
    isFocused: o
  } = e, d = null != n ? n : 16, r = function(e, t) {
    switch (e) {
      case L.JoinSourceType.BOT:
        return (0, a.jsx)(x.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case L.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(S.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case L.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(E.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case L.JoinSourceType.HUB:
        return (0, a.jsx)(m.default, {
          className: I.icon,
          height: t,
          width: t
        });
      case L.JoinSourceType.INVITE:
      case L.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(h.default, {
          className: I.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, d), u = (0, L.getJoinSourceTypeLabel)(t, s);
  return (0, a.jsxs)("div", {
    className: i(I.labelWithIconContainer),
    "aria-label": u,
    children: [null != r ? r : null, (0, a.jsx)(c.Text, {
      variant: 12 === d ? "text-xs/medium" : "text-sm/medium",
      className: i(I.labelText, {
        [I.focused]: o
      }),
      children: l
    })]
  })
}

function D(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, C.default)([A.default], () => A.default.getSearchStateByGuildId(t), [t], u), {
    inviteCodes: o
  } = (0, H.useGuildInvites)(t), r = (0, C.default)([f.default], () => f.default.getGuild(t)), E = null == r ? void 0 : r.vanityURLCode, [m, h] = n.useState(!1), {
    selectedSourceInviteCode: x,
    selectedJoinSourceType: S
  } = s, D = null != S && S !== L.JoinSourceType.UNSPECIFIED, b = n.useCallback(e => {
    let l = e.trim();
    (0, p.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: "" !== l ? l : void 0,
      selectedJoinSourceType: void 0
    })
  }, [t, s]), O = n.useCallback(e => {
    e === S ? (0, p.updateSearchState)(t, {
      selectedSourceInviteCode: void 0,
      selectedJoinSourceType: void 0
    }) : (0, p.updateSearchState)(t, {
      selectedSourceInviteCode: null,
      selectedJoinSourceType: e
    }), h(!1)
  }, [t, S]), B = n.useCallback(d(b, 300), [b]), V = n.useCallback(e => {
    B(e)
  }, [B]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": g.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: N.NOOP,
    children: m ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => h(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: I.customLabelContainer,
          children: [(0, a.jsx)(M.default, {
            width: 16,
            height: 16,
            className: I.caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), v.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(j, {
          ...t,
          type: e,
          vanityUrl: E,
          text: (0, L.getJoinSourceTypeLabel)(e, E)
        }),
        checked: S === e,
        disabled: !1,
        action: () => O(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, a.jsx)(c.MenuSearchControl, {
          ...e,
          query: null != x ? x : "",
          onChange: V,
          ref: t,
          placeholder: g.default.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: g.default.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == x && null == S,
        disabled: !1,
        action: () => O(null),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), o.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(j, {
          ...t,
          type: L.JoinSourceType.INVITE,
          vanityUrl: E,
          text: e
        }),
        checked: x === e,
        disabled: !1,
        action: () => b(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuItem, {
        id: "other-join-methods",
        action: () => h(!0),
        render: e => (0, a.jsxs)("div", {
          className: i(I.containerWithRightCaret, I.customLabelContainer),
          children: [(0, a.jsxs)("div", {
            className: i(R.label),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              className: i(I.selectedRadio, I.labelText, {
                [I.focused]: e.isFocused
              }),
              children: g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), D ? (0, a.jsx)("div", {
              className: I.selectedOption,
              children: (0, a.jsx)(j, {
                ...e,
                size: 12,
                text: (0, L.getJoinSourceTypeLabel)(S, E),
                type: S,
                vanityUrl: E
              })
            }) : null]
          }), D ? (0, a.jsx)(_.default, {
            background: I.radio,
            foreground: I.radioSelection,
            width: 16,
            height: 16
          }) : (0, a.jsx)(T.default, {
            width: 16,
            height: 16,
            className: I.caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}