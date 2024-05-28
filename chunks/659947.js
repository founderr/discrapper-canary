"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("660216"),
  o = s("40908"),
  d = s("592125"),
  u = s("984933"),
  c = s("430824"),
  S = s("914010"),
  E = s("285952"),
  T = s("107828"),
  _ = s("727785"),
  f = s("689938"),
  m = s("158200");

function I() {}
let g = [_.AutocompleterResultTypes.VOICE_CHANNEL];

function N(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function h(e) {
  let {
    height: t
  } = e;
  return (0, a.jsx)("div", {
    style: {
      height: t
    }
  })
}

function C() {
  return (0, a.jsx)(h, {
    height: 16
  }, "footer")
}

function O() {
  return (0, a.jsx)(h, {
    height: 8
  }, "header")
}

function A() {
  return (0, a.jsx)("div", {
    className: m.voiceListSearchEmpty,
    children: (0, a.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      className: m.noVoiceChannelSelected,
      children: f.default.Messages.USER_SETTINGS_KEYBINDS_SEARCH_NO_RESULTS_FOUND
    })
  })
}

function p(e) {
  var t, s;
  let {
    keybind: l
  } = e, o = n.useRef(l);
  n.useEffect(() => void(o.current = l));
  let [d, u] = n.useState(null !== (s = null === (t = l.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== s ? s : void 0), c = n.useCallback(() => {
    (0, i.openModalLazy)(async () => e => (0, a.jsx)(R, {
      ...e,
      onSelect: e => {
        u(e), r.default.setKeybind({
          ...o.current,
          params: {
            channelId: e
          }
        })
      }
    }))
  }, []);
  return (0, a.jsx)(i.FormSection, {
    title: f.default.Messages.USER_SETTINGS_KEYBIND_SWITCH_SERVER_SETTINGS_SECTION,
    className: m.channelIdSection,
    children: (0, a.jsxs)(E.default, {
      align: E.default.Align.STRETCH,
      children: [(0, a.jsx)("div", {
        className: m.selectedVoiceChannel,
        children: (0, a.jsx)(x, {
          channelId: d
        })
      }), (0, a.jsx)(E.default.Child, {
        grow: 0,
        shrink: 0,
        children: (0, a.jsx)(i.Button, {
          onClick: c,
          children: f.default.Messages.USER_SETTINGS_KEYBINDS_SELECT_VOICE_CHANNEL
        })
      })]
    })
  })
}

function R(e) {
  let {
    transitionState: t,
    onClose: s,
    onSelect: r
  } = e, E = n.useId(), I = n.useRef(null), {
    mouseFocusEnabled: h,
    enableMouseFocus: p,
    disableMouseFocus: R
  } = function() {
    let e = n.useRef(!1),
      t = n.useCallback(() => {
        e.current = !0
      }, []),
      s = n.useCallback(() => {
        e.current = !1
      }, []);
    return {
      mouseFocusEnabled: e,
      enableMouseFocus: t,
      disableMouseFocus: s
    }
  }(), {
    query: x,
    updateQuery: M,
    queryResults: L
  } = (0, o.default)({
    visible: !0,
    autocompleterResultTypes: g,
    autocompleterBeforeCreateSearchContext: N
  }), D = function(e) {
    let t = "" !== e,
      s = (0, l.useStateFromStoresArray)([u.default, d.default, S.default], () => {
        let e = S.default.getGuildId();
        if (t || null == e) return [];
        let s = [];
        for (let t of u.default.getVocalChannelIds(e)) {
          let e = d.default.getChannel(t);
          null != e && s.push(e)
        }
        return s
      }, [t]);
    return t ? null : s
  }(x), {
    focusedIndex: P,
    setFocusedIndex: v
  } = function(e) {
    let [t, s] = n.useState(0), a = n.useRef(e);
    return e !== a.current && 0 !== t && s(0), n.useEffect(() => void(a.current = e)), {
      focusedIndex: t,
      setFocusedIndex: s
    }
  }(x);
  n.useEffect(() => {
    let {
      current: e
    } = I;
    !(null == e || e.isItemVisible(0, P, !0)) && e.scrollToIndex({
      section: 0,
      row: P
    })
  }, [P]);
  let b = null != D ? D.length : L.length,
    j = (() => {
      if (null != D) {
        var e;
        return null === (e = D[P]) || void 0 === e ? void 0 : e.id
      }
      let t = L[P];
      if ((null == t ? void 0 : t.type) === _.AutocompleterResultTypes.VOICE_CHANNEL) return t.record.id
    })();
  return (0, a.jsx)("div", {
    className: m.voiceModalContainer,
    onMouseMove: p,
    children: (0, a.jsxs)(i.ModalRoot, {
      transitionState: t,
      size: i.ModalSize.MEDIUM,
      className: m.voiceModalRootContainer,
      children: [(0, a.jsx)("div", {
        className: m.inputWrapper,
        children: (0, a.jsx)(i.TextInput, {
          value: x,
          onChange: M,
          onKeyDown: function(e) {
            R();
            let t = e.key.toLowerCase();
            if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
              case "escape":
                s();
                break;
              case "enter": {
                let e = (() => {
                  if (null != D) return D[P];
                  let e = L[P];
                  if ((null == e ? void 0 : e.type) === _.AutocompleterResultTypes.VOICE_CHANNEL) return e.record
                })();
                null == e ? r(void 0) : r(e.id), s();
                break
              }
              case "arrowup":
                0 === P ? v(b - 1) : v(P - 1);
                break;
              case "arrowdown":
                P >= b - 1 ? v(0) : v(P + 1)
            }
          },
          placeholder: f.default.Messages.USER_SETTINGS_KEYBINDS_SEARCH_VOICE,
          role: "combobox",
          "aria-controls": E,
          "aria-expanded": b > 0,
          "aria-activedescendant": b > 0 && null != j ? j : void 0,
          "aria-autocomplete": "list",
          spellCheck: !1
        })
      }), 0 === b && "" !== x && (0, a.jsx)(A, {}), (b > 0 || "" === x) && (0, a.jsx)(i.ListThin, {
        innerId: E,
        innerRole: "listbox",
        "aria-label": f.default.Messages.USER_SETTINGS_KEYBIND_VOICE_CHANNEL_RESULTS,
        ref: I,
        sections: [b],
        renderRow: function(e) {
          let {
            row: t
          } = e, n = (() => {
            if (null != D) return D[t];
            let e = L[t];
            if ((null == e ? void 0 : e.type) === _.AutocompleterResultTypes.VOICE_CHANNEL) return e.record
          })();
          if (null == n) return null;
          let l = null != n.parent_id ? d.default.getChannel(n.parent_id) : void 0,
            i = c.default.getGuild(n.guild_id);
          return (0, a.jsx)(T.Channel, {
            id: n.id,
            channel: n,
            category: l,
            focused: P === t,
            onMouseEnter: () => h.current && v(t),
            onClick: () => {
              r(n.id), s()
            },
            onFocus: () => v(t),
            children: null != i ? (0, a.jsx)("div", {
              className: m.guildName,
              children: i.name
            }) : null
          }, n.id)
        },
        renderListHeader: O,
        renderFooter: C,
        sectionHeight: 0,
        rowHeight: 34,
        className: m.voiceChannelList,
        listHeaderHeight: 8,
        footerHeight: 16
      })]
    })
  })
}

function x(e) {
  let {
    channelId: t
  } = e, {
    channel: s,
    category: n,
    guild: r
  } = (0, l.useStateFromStoresObject)([d.default, c.default], () => {
    let e = null != t ? d.default.getChannel(t) : void 0;
    return null != e ? {
      channel: e,
      category: null != e.parent_id ? d.default.getChannel(e.parent_id) : void 0,
      guild: null != e.guild_id ? c.default.getGuild(e.guild_id) : void 0
    } : {
      channel: void 0,
      category: void 0,
      guild: void 0
    }
  });
  return null == s ? (0, a.jsx)(i.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: m.noVoiceChannelSelected,
    children: f.default.Messages.USER_SETTINGS_KEYBINDS_NO_VOICE_CHANNEL_SELECTED
  }) : (0, a.jsx)(T.Channel, {
    channel: s,
    id: s.id,
    category: n,
    onClick: I,
    onFocus: I,
    onMouseEnter: I,
    focused: !1,
    children: null != r ? (0, a.jsx)("div", {
      className: m.guildName,
      children: r.name
    }) : null
  })
}