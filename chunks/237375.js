n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(965386),
    u = n(118012),
    c = n(987826),
    d = n(826298),
    f = n(665692),
    _ = n(388032),
    p = n(488519);
function h(e, t, n) {
    return (0, r.jsx)(
        c.Z,
        {
            className: p.option,
            name: e.displayName,
            state: t,
            onClick: n
        },
        e.name
    );
}
function m(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: s,
            setOptionalOptions: l,
            unsetOptionalOptions: c
        } = i.useMemo(() => {
            var e, r, i, a;
            let s = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter((e) => e.required)) && void 0 !== i ? i : [],
                o = null !== (a = null === (r = t.options) || void 0 === r ? void 0 : r.filter((e) => !e.required)) && void 0 !== a ? a : [],
                l = o.filter((e) => {
                    var t;
                    return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue;
                });
            return {
                requiredOptions: s,
                setOptionalOptions: l,
                unsetOptionalOptions: o.filter((e) => {
                    var t;
                    return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue);
                })
            };
        }, [t.options, n]),
        d = (0, r.jsx)('div', {
            className: p.optionalNames,
            children: c.map((e) =>
                (0, r.jsx)(
                    o.Text,
                    {
                        variant: 'text-sm/normal',
                        children: e.displayName
                    },
                    e.name
                )
            )
        }),
        f = s.map((e) => h(e, null == n ? void 0 : n[e.name], a)),
        m =
            l.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.Heading, {
                              className: p.optionalHeader,
                              variant: 'heading-deprecated-12/semibold',
                              children: _.intl.string(_.t['5C107O'])
                          }),
                          l.map((e) => h(e, null == n ? void 0 : n[e.name], a))
                      ]
                  })
                : null,
        g =
            c.length > 0
                ? (0, r.jsx)(o.Tooltip, {
                      text: d,
                      'aria-label': !1,
                      delay: 200,
                      children: (e) =>
                          (0, r.jsx)(u.Z, {
                              className: p.optionalCount,
                              color: u.Z.Colors.MUTED,
                              ...e,
                              children: 0 === l.length ? _.intl.formatToPlainString(_.t['0mI72t'], { count: c.length }) : _.intl.formatToPlainString(_.t.BP8N0N, { count: c.length })
                          })
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f,
            null != m || null != g
                ? (0, r.jsxs)('div', {
                      className: p.optionals,
                      children: [m, g]
                  })
                : null
        ]
    });
}
function g(e) {
    var t, n, a;
    let o,
        { command: u, activeOptionName: c, channel: _, showOptions: h, showImage: g, optionStates: E, onOptionClick: v, section: b, isSelectable: I = !0 } = e,
        T = i.useMemo(() => {
            var e;
            return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find((e) => e.name === c);
        }, [c, u]),
        S = null != c ? (null == E ? void 0 : E[c]) : null;
    o = null != S && (null === (t = S.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (null !== (n = S.lastValidationResult.error) && void 0 !== n ? n : '') : null;
    let y = g && null != b ? (0, d.ky)(b) : null;
    return (0, r.jsxs)('div', {
        className: s()(p.wrapper, I ? null : p.disabled),
        children: [
            null != y
                ? (0, r.jsx)(y, {
                      className: p.image,
                      channel: _,
                      section: b,
                      width: 32,
                      height: 32
                  })
                : null,
            (0, r.jsxs)('div', {
                className: p.infoWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.usageWrapper,
                        children: [
                            (0, r.jsx)(l.BR, {
                                className: p.title,
                                children: f.GI + u.displayName
                            }),
                            h
                                ? (0, r.jsx)(m, {
                                      command: u,
                                      optionStates: E,
                                      onOptionClick: v
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(l.wL, {
                        className: s()(p.description, null != o ? p.error : null),
                        children: null !== (a = null != o ? o : null == T ? void 0 : T.displayDescription) && void 0 !== a ? a : u.displayDescription
                    })
                ]
            }),
            (0, r.jsx)(l.dY, {
                className: p.source,
                children: null == b ? void 0 : b.name
            })
        ]
    });
}
