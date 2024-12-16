t.d(n, {
    Md: function () {
        return f;
    },
    a0: function () {
        return x;
    }
});
var i = t(200651);
t(192379);
var l = t(392711),
    a = t(481060),
    s = t(246364),
    r = t(405545),
    o = t(382574),
    c = t(279988),
    d = t(786127),
    u = t(981631),
    m = t(388032);
function x(e) {
    let { dropHoveredIndex: n, formField: u, guild: x, index: f, isDragEnabled: g, submittedGuildJoinRequestsCount: v, removeFormField: C, updateFormField: j, updateFormFieldOrder: p, canRemove: T, actionsLocation: N, fieldStyle: I } = e,
        y = async () => {
            await C(f);
        },
        R = async (e) => {
            await j(f, e);
        },
        F = async (e, n, t) => {
            await p(e, n, t);
        },
        E = (0, l.uniqueId)(),
        b = n === f,
        w = {
            key: E,
            index: f,
            isDragEnabled: g,
            isDropHovered: b,
            onEdit: () => {
                0 === v
                    ? h(u, R, x)
                    : (0, a.openModalLazy)(async () => {
                          let { default: e } = await t.e('74673').then(t.bind(t, 394045));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: x.id,
                                  submittedGuildJoinRequestsCount: v,
                                  onConfirm: () => h(u, R, x)
                              });
                      });
            },
            onRemove: y,
            onDrop: F,
            canRemove: T,
            actionsLocation: N,
            fieldStyle: I
        };
    switch (u.field_type) {
        case s.QJ.TERMS:
            return (0, i.jsx)(c.Z, {
                channelId: x.rulesChannelId,
                title: I === s.it.COMPACT ? m.intl.string(m.t['55+giY']) : m.intl.string(m.t['53vNcH']),
                formField: u,
                ...w
            });
        case s.QJ.PARAGRAPH:
            return (0, i.jsx)(o.Z, {
                formField: u,
                ...w
            });
        case s.QJ.TEXT_INPUT:
            return (0, i.jsx)(d.Z, {
                formField: u,
                ...w
            });
        case s.QJ.MULTIPLE_CHOICE:
            return (0, i.jsx)(r.Z, {
                formField: u,
                ...w
            });
        default:
            return null;
    }
}
function f(e, n, l) {
    let r = { onCloseRequest: u.dG4 };
    switch (e) {
        case s.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n,
                        guild: l
                    });
            }, r);
        case s.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, r);
        case s.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
                let { TextInputFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, r);
        case s.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, r);
    }
}
function h(e, n, l) {
    let r = { onCloseRequest: u.dG4 };
    switch (e.field_type) {
        case s.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
                let { default: a } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, i.jsx)(a, {
                        ...t,
                        field: e,
                        onSave: n,
                        guild: l
                    });
            }, r);
        case s.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, r);
        case s.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
                let { TextInputFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, r);
        case s.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
                let { default: l } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, r);
    }
}
