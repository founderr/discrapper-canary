t.d(s, {
  Z: function() {
    return M
  }
}), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(660216),
  o = t(40908),
  c = t(592125),
  E = t(984933),
  d = t(430824),
  _ = t(914010),
  T = t(285952),
  S = t(107828),
  u = t(727785),
  I = t(689938),
  N = t(284921);

function A() {}
let C = [u.h8.VOICE_CHANNEL];

function O(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function m(e) {
  let {
    height: s
  } = e;
  return (0, n.jsx)("div", {
    style: {
      height: s
    }
  })
}

function h() {
  return (0, n.jsx)(m, {
    height: 16
  }, "footer")
}

function g() {
  return (0, n.jsx)(m, {
    height: 8
  }, "header")
}

function R() {
  return (0, n.jsx)("div", {
    className: N.voiceListSearchEmpty,
    children: (0, n.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      className: N.noVoiceChannelSelected,
      children: I.Z.Messages.USER_SETTINGS_KEYBINDS_SEARCH_NO_RESULTS_FOUND
    })
  })
}

function M(e) {
  var s, t;
  let {
    keybind: a
  } = e, o = i.useRef(a);
  i.useEffect(() => void(o.current = a));
  let [c, E] = i.useState(null !== (t = null === (s = a.params) || void 0 === s ? void 0 : s.channelId) && void 0 !== t ? t : void 0), d = i.useCallback(() => {
    (0, l.openModalLazy)(async () => e => (0, n.jsx)(x, {
      ...e,
      onSelect: e => {
        E(e), r.Z.setKeybind({
          ...o.current,
          params: {
            channelId: e
          }
        })
      }
    }))
  }, []);
  return (0, n.jsx)(l.FormSection, {
    title: I.Z.Messages.USER_SETTINGS_KEYBIND_SWITCH_SERVER_SETTINGS_SECTION,
    className: N.channelIdSection,
    children: (0, n.jsxs)(T.Z, {
      align: T.Z.Align.STRETCH,
      children: [(0, n.jsx)("div", {
        className: N.selectedVoiceChannel,
        children: (0, n.jsx)(p, {
          channelId: c
        })
      }), (0, n.jsx)(T.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, n.jsx)(l.Button, {
          onClick: d,
          children: I.Z.Messages.USER_SETTINGS_KEYBINDS_SELECT_VOICE_CHANNEL
        })
      })]
    })
  })
}

function x(e) {
  let {
    transitionState: s,
    onClose: t,
    onSelect: r
  } = e, T = i.useId(), A = i.useRef(null), {
    mouseFocusEnabled: m,
    enableMouseFocus: M,
    disableMouseFocus: x
  } = function() {
    let e = i.useRef(!1),
      s = i.useCallback(() => {
        e.current = !0
      }, []),
      t = i.useCallback(() => {
        e.current = !1
      }, []);
    return {
      mouseFocusEnabled: e,
      enableMouseFocus: s,
      disableMouseFocus: t
    }
  }(), {
    query: p,
    updateQuery: D,
    queryResults: L
  } = (0, o.Z)({
    visible: !0,
    autocompleterResultTypes: C,
    autocompleterBeforeCreateSearchContext: O
  }), P = function(e) {
    let s = "" !== e,
      t = (0, a.Wu)([E.ZP, c.Z, _.Z], () => {
        let e = _.Z.getGuildId();
        if (s || null == e) return [];
        let t = [];
        for (let s of E.ZP.getVocalChannelIds(e)) {
          let e = c.Z.getChannel(s);
          null != e && t.push(e)
        }
        return t
      }, [s]);
    return s ? null : t
  }(p), {
    focusedIndex: Z,
    setFocusedIndex: f
  } = function(e) {
    let [s, t] = i.useState(0), n = i.useRef(e);
    return e !== n.current && 0 !== s && t(0), i.useEffect(() => void(n.current = e)), {
      focusedIndex: s,
      setFocusedIndex: t
    }
  }(p);
  i.useEffect(() => {
    let {
      current: e
    } = A;
    !(null == e || e.isItemVisible(0, Z, !0)) && e.scrollToIndex({
      section: 0,
      row: Z
    })
  }, [Z]);
  let v = null != P ? P.length : L.length,
    j = (() => {
      if (null != P) {
        var e;
        return null === (e = P[Z]) || void 0 === e ? void 0 : e.id
      }
      let s = L[Z];
      if ((null == s ? void 0 : s.type) === u.h8.VOICE_CHANNEL) return s.record.id
    })();
  return (0, n.jsx)("div", {
    className: N.voiceModalContainer,
    onMouseMove: M,
    children: (0, n.jsxs)(l.ModalRoot, {
      transitionState: s,
      size: l.ModalSize.MEDIUM,
      className: N.voiceModalRootContainer,
      children: [(0, n.jsx)("div", {
        className: N.inputWrapper,
        children: (0, n.jsx)(l.TextInput, {
          value: p,
          onChange: D,
          onKeyDown: function(e) {
            x();
            let s = e.key.toLowerCase();
            if ("arrowdown" === s || "arrowup" === s || "enter" === s || "escape" === s) switch (e.preventDefault(), s) {
              case "escape":
                t();
                break;
              case "enter": {
                let e = (() => {
                  if (null != P) return P[Z];
                  let e = L[Z];
                  if ((null == e ? void 0 : e.type) === u.h8.VOICE_CHANNEL) return e.record
                })();
                null == e ? r(void 0) : r(e.id), t();
                break
              }
              case "arrowup":
                0 === Z ? f(v - 1) : f(Z - 1);
                break;
              case "arrowdown":
                Z >= v - 1 ? f(0) : f(Z + 1)
            }
          },
          placeholder: I.Z.Messages.USER_SETTINGS_KEYBINDS_SEARCH_VOICE,
          role: "combobox",
          "aria-controls": T,
          "aria-expanded": v > 0,
          "aria-activedescendant": v > 0 && null != j ? j : void 0,
          "aria-autocomplete": "list",
          spellCheck: !1
        })
      }), 0 === v && "" !== p && (0, n.jsx)(R, {}), (v > 0 || "" === p) && (0, n.jsx)(l.ListThin, {
        innerId: T,
        innerRole: "listbox",
        "aria-label": I.Z.Messages.USER_SETTINGS_KEYBIND_VOICE_CHANNEL_RESULTS,
        ref: A,
        sections: [v],
        renderRow: function(e) {
          let {
            row: s
          } = e, i = (() => {
            if (null != P) return P[s];
            let e = L[s];
            if ((null == e ? void 0 : e.type) === u.h8.VOICE_CHANNEL) return e.record
          })();
          if (null == i) return null;
          let a = null != i.parent_id ? c.Z.getChannel(i.parent_id) : void 0,
            l = d.Z.getGuild(i.guild_id);
          return (0, n.jsx)(S.$W, {
            id: i.id,
            channel: i,
            category: a,
            focused: Z === s,
            onMouseEnter: () => m.current && f(s),
            onClick: () => {
              r(i.id), t()
            },
            onFocus: () => f(s),
            children: null != l ? (0, n.jsx)("div", {
              className: N.guildName,
              children: l.name
            }) : null
          }, i.id)
        },
        renderListHeader: g,
        renderFooter: h,
        sectionHeight: 0,
        rowHeight: 34,
        className: N.voiceChannelList,
        listHeaderHeight: 8,
        footerHeight: 16
      })]
    })
  })
}

function p(e) {
  let {
    channelId: s
  } = e, {
    channel: t,
    category: i,
    guild: r
  } = (0, a.cj)([c.Z, d.Z], () => {
    let e = null != s ? c.Z.getChannel(s) : void 0;
    return null != e ? {
      channel: e,
      category: null != e.parent_id ? c.Z.getChannel(e.parent_id) : void 0,
      guild: null != e.guild_id ? d.Z.getGuild(e.guild_id) : void 0
    } : {
      channel: void 0,
      category: void 0,
      guild: void 0
    }
  });
  return null == t ? (0, n.jsx)(l.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: N.noVoiceChannelSelected,
    children: I.Z.Messages.USER_SETTINGS_KEYBINDS_NO_VOICE_CHANNEL_SELECTED
  }) : (0, n.jsx)(S.$W, {
    channel: t,
    id: t.id,
    category: i,
    onClick: A,
    onFocus: A,
    onMouseEnter: A,
    focused: !1,
    children: null != r ? (0, n.jsx)("div", {
      className: N.guildName,
      children: r.name
    }) : null
  })
}