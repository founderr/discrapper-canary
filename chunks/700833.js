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
    r = t(246364),
    s = t(405545),
    o = t(382574),
    c = t(279988),
    d = t(786127),
    u = t(981631),
    m = t(388032);
function x(e) {
    let { dropHoveredIndex: n, formField: u, guild: x, index: f, isDragEnabled: g, submittedGuildJoinRequestsCount: v, removeFormField: j, updateFormField: C, updateFormFieldOrder: p, canRemove: N, actionsLocation: I } = e,
        T = async () => {
            await j(f);
        },
        F = async (e) => {
            await C(f, e);
        },
        b = async (e, n, t) => {
            await p(e, n, t);
        },
        y = (0, l.uniqueId)(),
        R = n === f,
        w = {
            key: y,
            index: f,
            isDragEnabled: g,
            isDropHovered: R,
            onEdit: () => {
                0 === v
                    ? h(u, F, x)
                    : (0, a.openModalLazy)(async () => {
                          let { default: e } = await t.e('74673').then(t.bind(t, 394045));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: x.id,
                                  submittedGuildJoinRequestsCount: v,
                                  onConfirm: () => h(u, F, x)
                              });
                      });
            },
            onRemove: T,
            onDrop: b,
            canRemove: N,
            actionsLocation: I
        };
    switch (u.field_type) {
        case r.QJ.TERMS:
            return (0, i.jsx)(c.Z, {
                channelId: x.rulesChannelId,
                title: m.intl.string(m.t['53vNcH']),
                formField: u,
                ...w
            });
        case r.QJ.PARAGRAPH:
            return (0, i.jsx)(o.Z, {
                formField: u,
                ...w
            });
        case r.QJ.TEXT_INPUT:
            return (0, i.jsx)(d.Z, {
                formField: u,
                ...w
            });
        case r.QJ.MULTIPLE_CHOICE:
            return (0, i.jsx)(s.Z, {
                formField: u,
                ...w
            });
        default:
            return null;
    }
}
function f(e, n, l) {
    let s = { onCloseRequest: u.dG4 };
    switch (e) {
        case r.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n,
                        guild: l
                    });
            }, s);
        case r.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, s);
        case r.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
                let { TextInputFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, s);
        case r.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, s);
    }
}
function h(e, n, l) {
    let s = { onCloseRequest: u.dG4 };
    switch (e.field_type) {
        case r.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
                let { default: a } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, i.jsx)(a, {
                        ...t,
                        field: e,
                        onSave: n,
                        guild: l
                    });
            }, s);
        case r.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, s);
        case r.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
                let { TextInputFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, s);
        case r.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
                let { default: l } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, s);
    }
}
