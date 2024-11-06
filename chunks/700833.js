t.d(n, {
    Md: function () {
        return h;
    },
    a0: function () {
        return f;
    }
});
var r = t(200651);
t(192379);
var a = t(392711),
    i = t(481060),
    s = t(246364),
    o = t(405545),
    l = t(382574),
    c = t(279988),
    d = t(786127),
    u = t(981631),
    m = t(388032);
function f(e) {
    let { dropHoveredIndex: n, formField: u, guild: f, index: h, isDragEnabled: p, submittedGuildJoinRequestsCount: g, removeFormField: C, updateFormField: b, updateFormFieldOrder: v, canRemove: _, actionsLocation: y } = e,
        T = async () => {
            await C(h);
        },
        j = async (e) => {
            await b(h, e);
        },
        I = async (e, n, t) => {
            await v(e, n, t);
        },
        N = (0, a.uniqueId)(),
        S = n === h,
        E = {
            key: N,
            index: h,
            isDragEnabled: p,
            isDropHovered: S,
            onEdit: () => {
                0 === g
                    ? x(u, j, f)
                    : (0, i.openModalLazy)(async () => {
                          let { default: e } = await t.e('74673').then(t.bind(t, 394045));
                          return (n) =>
                              (0, r.jsx)(e, {
                                  ...n,
                                  guildId: f.id,
                                  submittedGuildJoinRequestsCount: g,
                                  onConfirm: () => x(u, j, f)
                              });
                      });
            },
            onRemove: T,
            onDrop: I,
            canRemove: _,
            actionsLocation: y
        };
    switch (u.field_type) {
        case s.QJ.TERMS:
            return (0, r.jsx)(c.Z, {
                channelId: f.rulesChannelId,
                title: m.intl.string(m.t['53vNcH']),
                formField: u,
                ...E
            });
        case s.QJ.PARAGRAPH:
            return (0, r.jsx)(l.Z, {
                formField: u,
                ...E
            });
        case s.QJ.TEXT_INPUT:
            return (0, r.jsx)(d.Z, {
                formField: u,
                ...E
            });
        case s.QJ.MULTIPLE_CHOICE:
            return (0, r.jsx)(o.Z, {
                formField: u,
                ...E
            });
        default:
            return null;
    }
}
function h(e, n, a) {
    let o = { onCloseRequest: u.dG4 };
    switch (e) {
        case s.QJ.TERMS:
            return (0, i.openModalLazy)(async () => {
                let { default: e } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n,
                        guild: a
                    });
            }, o);
        case s.QJ.PARAGRAPH:
            return (0, i.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, o);
        case s.QJ.TEXT_INPUT:
            return (0, i.openModalLazy)(async () => {
                let { TextInputFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, o);
        case s.QJ.MULTIPLE_CHOICE:
            return (0, i.openModalLazy)(async () => {
                let { default: e } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, o);
    }
}
function x(e, n, a) {
    let o = { onCloseRequest: u.dG4 };
    switch (e.field_type) {
        case s.QJ.TERMS:
            return (0, i.openModalLazy)(async () => {
                let { default: i } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, r.jsx)(i, {
                        ...t,
                        field: e,
                        onSave: n,
                        guild: a
                    });
            }, o);
        case s.QJ.PARAGRAPH:
            return (0, i.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: a } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, r.jsx)(a, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, o);
        case s.QJ.TEXT_INPUT:
            return (0, i.openModalLazy)(async () => {
                let { TextInputFormFieldModal: a } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, r.jsx)(a, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, o);
        case s.QJ.MULTIPLE_CHOICE:
            return (0, i.openModalLazy)(async () => {
                let { default: a } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, r.jsx)(a, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, o);
    }
}
