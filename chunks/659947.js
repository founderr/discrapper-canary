"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("481060"),
  r = s("660216"),
  o = s("40908"),
  d = s("592125"),
  u = s("984933"),
  c = s("430824"),
  S = s("914010"),
  E = s("285952"),
  T = s("107828"),
  _ = s("727785"),
  I = s("689938"),
  N = s("158200");

function g() {}
let f = [_.AutocompleterResultTypes.VOICE_CHANNEL];

function m(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function A(e) {
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
  return (0, a.jsx)(A, {
    height: 16
  }, "footer")
}

function O() {
  return (0, a.jsx)(A, {
    height: 8
  }, "header")
}

function h() {
  return (0, a.jsx)("div", {
    className: N.voiceListSearchEmpty,
    children: (0, a.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      className: N.noVoiceChannelSelected,
      children: I.default.Messages.USER_SETTINGS_KEYBINDS_SEARCH_NO_RESULTS_FOUND
    })
  })
}

function R(e) {
  var t, s;
  let {
    keybind: i
  } = e, o = n.useRef(i);
  n.useEffect(() => void(o.current = i));
  let [d, u] = n.useState(null !== (s = null === (t = i.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== s ? s : void 0), c = n.useCallback(() => {
    (0, l.openModalLazy)(async () => e => (0, a.jsx)(p, {
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
  return (0, a.jsx)(l.FormSection, {
    title: I.default.Messages.USER_SETTINGS_KEYBIND_SWITCH_SERVER_SETTINGS_SECTION,
    className: N.channelIdSection,
    children: (0, a.jsxs)(E.default, {
      align: E.default.Align.STRETCH,
      children: [(0, a.jsx)("div", {
        className: N.selectedVoiceChannel,
        children: (0, a.jsx)(M, {
          channelId: d
        })
      }), (0, a.jsx)(E.default.Child, {
        grow: 0,
        shrink: 0,
        children: (0, a.jsx)(l.Button, {
          onClick: c,
          children: I.default.Messages.USER_SETTINGS_KEYBINDS_SELECT_VOICE_CHANNEL
        })
      })]
    })
  })
}

function p(e) {
  let {
    transitionState: t,
    onClose: s,
    onSelect: r
  } = e, E = n.useId(), g = n.useRef(null), {
    mouseFocusEnabled: A,
    enableMouseFocus: R,
    disableMouseFocus: p
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
    query: M,
    updateQuery: D,
    queryResults: x
  } = (0, o.default)({
    visible: !0,
    autocompleterResultTypes: f,
    autocompleterBeforeCreateSearchContext: m
  }), L = function(e) {
    let t = "" !== e,
      s = (0, i.useStateFromStoresArray)([u.default, d.default, S.default], () => {
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
  }(M), {
    focusedIndex: P,
    setFocusedIndex: b
  } = function(e) {
    let [t, s] = n.useState(0), a = n.useRef(e);
    return e !== a.current && 0 !== t && s(0), n.useEffect(() => void(a.current = e)), {
      focusedIndex: t,
      setFocusedIndex: s
    }
  }(M);
  n.useEffect(() => {
    let {
      current: e
    } = g;
    !(null == e || e.isItemVisible(0, P, !0)) && e.scrollToIndex({
      section: 0,
      row: P
    })
  }, [P]);
  let v = null != L ? L.length : x.length,
    U = (() => {
      if (null != L) {
        var e;
        return null === (e = L[P]) || void 0 === e ? void 0 : e.id
      }
      let t = x[P];
      if ((null == t ? void 0 : t.type) === _.AutocompleterResultTypes.VOICE_CHANNEL) return t.record.id
    })();
  return (0, a.jsx)("div", {
    className: N.voiceModalContainer,
    onMouseMove: R,
    children: (0, a.jsxs)(l.ModalRoot, {
      transitionState: t,
      size: l.ModalSize.MEDIUM,
      className: N.voiceModalRootContainer,
      children: [(0, a.jsx)("div", {
        className: N.inputWrapper,
        children: (0, a.jsx)(l.TextInput, {
          value: M,
          onChange: D,
          onKeyDown: function(e) {
            p();
            let t = e.key.toLowerCase();
            if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
              case "escape":
                s();
                break;
              case "enter": {
                let e = (() => {
                  if (null != L) return L[P];
                  let e = x[P];
                  if ((null == e ? void 0 : e.type) === _.AutocompleterResultTypes.VOICE_CHANNEL) return e.record
                })();
                null == e ? r(void 0) : r(e.id), s();
                break
              }
              case "arrowup":
                0 === P ? b(v - 1) : b(P - 1);
                break;
              case "arrowdown":
                P >= v - 1 ? b(0) : b(P + 1)
            }
          },
          placeholder: I.default.Messages.USER_SETTINGS_KEYBINDS_SEARCH_VOICE,
          role: "combobox",
          "aria-controls": E,
          "aria-expanded": v > 0,
          "aria-activedescendant": v > 0 && null != U ? U : void 0,
          "aria-autocomplete": "list",
          spellCheck: !1
        })
      }), 0 === v && "" !== M && (0, a.jsx)(h, {}), (v > 0 || "" === M) && (0, a.jsx)(l.ListThin, {
        innerId: E,
        innerRole: "listbox",
        "aria-label": I.default.Messages.USER_SETTINGS_KEYBIND_VOICE_CHANNEL_RESULTS,
        ref: g,
        sections: [v],
        renderRow: function(e) {
          let {
            row: t
          } = e, n = (() => {
            if (null != L) return L[t];
            let e = x[t];
            if ((null == e ? void 0 : e.type) === _.AutocompleterResultTypes.VOICE_CHANNEL) return e.record
          })();
          if (null == n) return null;
          let i = null != n.parent_id ? d.default.getChannel(n.parent_id) : void 0,
            l = c.default.getGuild(n.guild_id);
          return (0, a.jsx)(T.Channel, {
            id: n.id,
            channel: n,
            category: i,
            focused: P === t,
            onMouseEnter: () => A.current && b(t),
            onClick: () => {
              r(n.id), s()
            },
            onFocus: () => b(t),
            children: null != l ? (0, a.jsx)("div", {
              className: N.guildName,
              children: l.name
            }) : null
          }, n.id)
        },
        renderListHeader: O,
        renderFooter: C,
        sectionHeight: 0,
        rowHeight: 34,
        className: N.voiceChannelList,
        listHeaderHeight: 8,
        footerHeight: 16
      })]
    })
  })
}

function M(e) {
  let {
    channelId: t
  } = e, {
    channel: s,
    category: n,
    guild: r
  } = (0, i.useStateFromStoresObject)([d.default, c.default], () => {
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
  return null == s ? (0, a.jsx)(l.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: N.noVoiceChannelSelected,
    children: I.default.Messages.USER_SETTINGS_KEYBINDS_NO_VOICE_CHANNEL_SELECTED
  }) : (0, a.jsx)(T.Channel, {
    channel: s,
    id: s.id,
    category: n,
    onClick: g,
    onFocus: g,
    onMouseEnter: g,
    focused: !1,
    children: null != r ? (0, a.jsx)("div", {
      className: N.guildName,
      children: r.name
    }) : null
  })
}