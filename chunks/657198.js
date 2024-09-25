n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(519953),
    u = n(442837),
    c = n(911969),
    d = n(998698),
    _ = n(703558),
    E = n(117530),
    f = n(91313),
    h = n(436660),
    p = n(887490),
    m = n(689938),
    I = n(896061);
function T(e, t, n) {
    let { attributes: r, children: a, element: o } = t;
    switch (o.type) {
        case 'applicationCommand':
            let s = d.Z.getActiveCommand(n),
                l = 0,
                u = 0;
            if (null != s && s.id === o.command.id) {
                var c;
                let t = f.cu(e);
                for (let e of null !== (c = s.options) && void 0 !== c ? c : []) t.includes(e.name) ? u++ : l++;
            }
            let _ = {};
            if (l > 0) {
                let e;
                (e = u > 0 ? m.Z.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({ count: l }) : m.Z.Messages.COMMANDS_OPTION_COUNT.format({ count: l })), (_['data-trailing-placeholder'] = e);
            }
            return (0, i.jsx)('div', {
                className: I.applicationCommand,
                ...r,
                ..._,
                children: a
            });
        case 'applicationCommandOption':
            return (0, i.jsx)(g, {
                attributes: r,
                channelId: n,
                element: o,
                children: a
            });
        default:
            return null;
    }
}
let g = (e) => {
    let t,
        { channelId: n, element: r, attributes: o, children: f } = e,
        T = (0, l.vt)(),
        g = (0, l.UE)(),
        S = (0, l._7)(),
        { optionType: A, errored: v } = (0, u.cj)(
            [d.Z],
            () => {
                var e, t, i;
                return {
                    optionType: null === (e = d.Z.getOption(n, r.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (i = d.Z.getOptionState(n, r.optionName)) || void 0 === i ? void 0 : null === (t = i.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                };
            },
            [n, r.optionName]
        ),
        N = (0, u.e7)([E.Z], () => E.Z.getUpload(n, r.optionName, _.d.SlashCommand), [n, r.optionName]),
        O = r.children[r.children.length - 1],
        R = null != O && p.LC.isText(O) && O.text.endsWith('\n'),
        C = s()(I.inlineElement, I.optionPill, {
            [I.selectedPill]: g && T,
            [I.erroredPill]: (!g || !T) && v
        }),
        y = a.useCallback(() => {
            !p.bN.isVoid(S, r) && h.Q.selectCommandOption(S, r.optionName, !0);
        }, [S, r]);
    return (
        (t =
            A === c.jw.ATTACHMENT
                ? (null == N ? void 0 : N.filename) != null
                    ? (0, i.jsxs)('span', {
                          className: s()(I.optionPillValue, I.attachmentFilename),
                          contentEditable: !1,
                          children: [N.filename, f]
                      })
                    : (0, i.jsxs)('span', {
                          className: s()(I.optionPillValue, I.readonlyPillValue),
                          contentEditable: !1,
                          children: [m.Z.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, f]
                      })
                : (0, i.jsxs)('span', {
                      className: I.optionPillValue,
                      children: [
                          f,
                          R
                              ? (0, i.jsx)('span', {
                                    className: I.newLine,
                                    contentEditable: !1
                                })
                              : null
                      ]
                  })),
        (0, i.jsxs)('span', {
            ...o,
            className: C,
            children: [
                (0, i.jsxs)('span', {
                    className: I.optionPillKey,
                    contentEditable: !1,
                    onClick: y,
                    children: [r.optionDisplayName, '\u200B']
                }),
                t,
                (0, i.jsx)('span', {
                    contentEditable: !1,
                    children: '\u200B'
                })
            ]
        })
    );
};
