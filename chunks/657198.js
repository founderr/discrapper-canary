n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(270445),
    l = n(442837),
    u = n(911969),
    c = n(998698),
    d = n(703558),
    f = n(117530),
    _ = n(91313),
    p = n(436660),
    h = n(887490),
    m = n(388032),
    g = n(896061);
function E(e, t, n) {
    let { attributes: i, children: a, element: s } = t;
    switch (s.type) {
        case 'applicationCommand':
            let o = c.Z.getActiveCommand(n),
                l = 0,
                u = 0;
            if (null != o && o.id === s.command.id) {
                var d;
                let t = _.cu(e);
                for (let e of null !== (d = o.options) && void 0 !== d ? d : []) t.includes(e.name) ? u++ : l++;
            }
            let f = {};
            if (l > 0) {
                let e;
                (e = u > 0 ? m.intl.formatToPlainString(m.t.BP8N0N, { count: l }) : m.intl.formatToPlainString(m.t.lziVCw, { count: l })), (f['data-trailing-placeholder'] = e);
            }
            return (0, r.jsx)('div', {
                className: g.applicationCommand,
                ...i,
                ...f,
                children: a
            });
        case 'applicationCommandOption':
            return (0, r.jsx)(v, {
                attributes: i,
                channelId: n,
                element: s,
                children: a
            });
        default:
            return null;
    }
}
let v = (e) => {
    let t,
        { channelId: n, element: a, attributes: _, children: E } = e,
        v = (0, o.vt)(),
        I = (0, o.UE)(),
        b = (0, o._7)(),
        { optionType: S, errored: T } = (0, l.cj)(
            [c.Z],
            () => {
                var e, t, r;
                return {
                    optionType: null === (e = c.Z.getOption(n, a.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (r = c.Z.getOptionState(n, a.optionName)) || void 0 === r ? void 0 : null === (t = r.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                };
            },
            [n, a.optionName]
        ),
        y = (0, l.e7)([f.Z], () => f.Z.getUpload(n, a.optionName, d.d.SlashCommand), [n, a.optionName]),
        A = a.children[a.children.length - 1],
        N = null != A && h.LC.isText(A) && A.text.endsWith('\n'),
        C = s()(g.inlineElement, g.optionPill, {
            [g.selectedPill]: I && v,
            [g.erroredPill]: (!I || !v) && T
        }),
        R = i.useCallback(() => {
            !h.bN.isVoid(b, a) && p.Q.selectCommandOption(b, a.optionName, !0);
        }, [b, a]);
    return (
        (t =
            S === u.jw.ATTACHMENT
                ? (null == y ? void 0 : y.filename) != null
                    ? (0, r.jsxs)('span', {
                          className: s()(g.optionPillValue, g.attachmentFilename),
                          contentEditable: !1,
                          children: [y.filename, E]
                      })
                    : (0, r.jsxs)('span', {
                          className: s()(g.optionPillValue, g.readonlyPillValue),
                          contentEditable: !1,
                          children: [m.intl.string(m.t.GRdFnp), E]
                      })
                : (0, r.jsxs)('span', {
                      className: g.optionPillValue,
                      children: [
                          E,
                          N
                              ? (0, r.jsx)('span', {
                                    className: g.newLine,
                                    contentEditable: !1
                                })
                              : null
                      ]
                  })),
        (0, r.jsxs)('span', {
            ..._,
            className: C,
            children: [
                (0, r.jsxs)('span', {
                    className: g.optionPillKey,
                    contentEditable: !1,
                    onClick: R,
                    children: [a.optionDisplayName, '\u200B']
                }),
                t,
                (0, r.jsx)('span', {
                    contentEditable: !1,
                    children: '\u200B'
                })
            ]
        })
    );
};
