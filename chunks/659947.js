n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(660216),
    o = n(40908),
    c = n(600164),
    d = n(415795),
    u = n(592125),
    m = n(984933),
    h = n(430824),
    g = n(914010),
    p = n(727785),
    x = n(388032),
    S = n(179447);
function T() {}
let C = [p.h8.VOICE_CHANNEL];
function _(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function E(e) {
    let { height: t } = e;
    return (0, i.jsx)('div', { style: { height: t } });
}
function f() {
    return (0, i.jsx)(E, { height: 16 }, 'footer');
}
function I() {
    return (0, i.jsx)(E, { height: 8 }, 'header');
}
function N() {
    return (0, i.jsx)('div', {
        className: S.voiceListSearchEmpty,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            className: S.noVoiceChannelSelected,
            children: x.intl.string(x.t.zHjCd3)
        })
    });
}
function A(e) {
    var t, n;
    let { keybind: r } = e,
        o = s.useRef(r);
    s.useEffect(() => void (o.current = r));
    let [d, u] = s.useState(null !== (n = null === (t = r.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== n ? n : void 0),
        m = s.useCallback(() => {
            (0, l.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(b, {
                        ...e,
                        onSelect: (e) => {
                            u(e),
                                a.Z.setKeybind({
                                    ...o.current,
                                    params: { channelId: e }
                                });
                        }
                    })
            );
        }, []);
    return (0, i.jsx)(l.FormSection, {
        title: x.intl.string(x.t.q4JpMz),
        className: S.channelIdSection,
        children: (0, i.jsxs)(c.Z, {
            align: c.Z.Align.STRETCH,
            children: [
                (0, i.jsx)('div', {
                    className: S.selectedVoiceChannel,
                    children: (0, i.jsx)(v, { channelId: d })
                }),
                (0, i.jsx)(c.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(l.Button, {
                        onClick: m,
                        children: x.intl.string(x.t.Dm8O4e)
                    })
                })
            ]
        })
    });
}
function b(e) {
    let { transitionState: t, onClose: n, onSelect: a } = e,
        c = s.useId(),
        T = s.useRef(null),
        {
            mouseFocusEnabled: E,
            enableMouseFocus: A,
            disableMouseFocus: b
        } = (function () {
            let e = s.useRef(!1),
                t = s.useCallback(() => {
                    e.current = !0;
                }, []),
                n = s.useCallback(() => {
                    e.current = !1;
                }, []);
            return {
                mouseFocusEnabled: e,
                enableMouseFocus: t,
                disableMouseFocus: n
            };
        })(),
        {
            query: v,
            updateQuery: j,
            queryResults: O
        } = (0, o.Z)({
            visible: !0,
            autocompleterResultTypes: C,
            autocompleterBeforeCreateSearchContext: _
        }),
        R = (function (e) {
            let t = '' !== e,
                n = (0, r.Wu)(
                    [m.ZP, u.Z, g.Z],
                    () => {
                        let e = g.Z.getGuildId();
                        if (t || null == e) return [];
                        let n = [];
                        for (let t of m.ZP.getVocalChannelIds(e)) {
                            let e = u.Z.getChannel(t);
                            null != e && n.push(e);
                        }
                        return n;
                    },
                    [t]
                );
            return t ? null : n;
        })(v),
        { focusedIndex: P, setFocusedIndex: D } = (function (e) {
            let [t, n] = s.useState(0),
                i = s.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                s.useEffect(() => void (i.current = e)),
                {
                    focusedIndex: t,
                    setFocusedIndex: n
                }
            );
        })(v);
    s.useEffect(() => {
        let { current: e } = T;
        !(null == e || e.isItemVisible(0, P, !0)) &&
            e.scrollToIndex({
                section: 0,
                row: P
            });
    }, [P]);
    let y = null != R ? R.length : O.length,
        B = (() => {
            if (null != R) {
                var e;
                return null === (e = R[P]) || void 0 === e ? void 0 : e.id;
            }
            let t = O[P];
            if ((null == t ? void 0 : t.type) === p.h8.VOICE_CHANNEL) return t.record.id;
        })();
    return (0, i.jsx)('div', {
        className: S.voiceModalContainer,
        onMouseMove: A,
        children: (0, i.jsxs)(l.ModalRoot, {
            transitionState: t,
            size: l.ModalSize.MEDIUM,
            className: S.voiceModalRootContainer,
            children: [
                (0, i.jsx)('div', {
                    className: S.inputWrapper,
                    children: (0, i.jsx)(l.TextInput, {
                        value: v,
                        onChange: j,
                        onKeyDown: function (e) {
                            b();
                            let t = e.key.toLowerCase();
                            if ('arrowdown' === t || 'arrowup' === t || 'enter' === t || 'escape' === t)
                                switch ((e.preventDefault(), t)) {
                                    case 'escape':
                                        n();
                                        break;
                                    case 'enter': {
                                        let e = (() => {
                                            if (null != R) return R[P];
                                            let e = O[P];
                                            if ((null == e ? void 0 : e.type) === p.h8.VOICE_CHANNEL) return e.record;
                                        })();
                                        null == e ? a(void 0) : a(e.id), n();
                                        break;
                                    }
                                    case 'arrowup':
                                        0 === P ? D(y - 1) : D(P - 1);
                                        break;
                                    case 'arrowdown':
                                        P >= y - 1 ? D(0) : D(P + 1);
                                }
                        },
                        placeholder: x.intl.string(x.t.tG0r7u),
                        role: 'combobox',
                        'aria-controls': c,
                        'aria-expanded': y > 0,
                        'aria-activedescendant': y > 0 && null != B ? B : void 0,
                        'aria-autocomplete': 'list',
                        spellCheck: !1
                    })
                }),
                0 === y && '' !== v && (0, i.jsx)(N, {}),
                (y > 0 || '' === v) &&
                    (0, i.jsx)(l.ListThin, {
                        innerId: c,
                        innerRole: 'listbox',
                        'aria-label': x.intl.string(x.t['+N3fW1']),
                        ref: T,
                        sections: [y],
                        renderRow: function (e) {
                            let { row: t } = e,
                                s = (() => {
                                    if (null != R) return R[t];
                                    let e = O[t];
                                    if ((null == e ? void 0 : e.type) === p.h8.VOICE_CHANNEL) return e.record;
                                })();
                            if (null == s) return null;
                            let r = null != s.parent_id ? u.Z.getChannel(s.parent_id) : void 0,
                                l = h.Z.getGuild(s.guild_id);
                            return (0, i.jsx)(
                                d.$W,
                                {
                                    id: s.id,
                                    channel: s,
                                    category: r,
                                    focused: P === t,
                                    onMouseEnter: () => E.current && D(t),
                                    onClick: () => {
                                        a(s.id), n();
                                    },
                                    onFocus: () => D(t),
                                    children:
                                        null != l
                                            ? (0, i.jsx)('div', {
                                                  className: S.guildName,
                                                  children: l.name
                                              })
                                            : null
                                },
                                s.id
                            );
                        },
                        renderListHeader: I,
                        renderFooter: f,
                        sectionHeight: 0,
                        rowHeight: 34,
                        className: S.voiceChannelList,
                        listHeaderHeight: 8,
                        footerHeight: 16
                    })
            ]
        })
    });
}
function v(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: s,
            guild: a
        } = (0, r.cj)([u.Z, h.Z], () => {
            let e = null != t ? u.Z.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? u.Z.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? h.Z.getGuild(e.guild_id) : void 0
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0
                  };
        });
    return null == n
        ? (0, i.jsx)(l.Text, {
              variant: 'text-md/medium',
              color: 'text-muted',
              className: S.noVoiceChannelSelected,
              children: x.intl.string(x.t['/fYIKy'])
          })
        : (0, i.jsx)(d.$W, {
              channel: n,
              id: n.id,
              category: s,
              onClick: T,
              onFocus: T,
              onMouseEnter: T,
              focused: !1,
              children:
                  null != a
                      ? (0, i.jsx)('div', {
                            className: S.guildName,
                            children: a.name
                        })
                      : null
          });
}
