t.d(n, {
  Md: function() {
    return C
  },
  a0: function() {
    return h
  }
});
var a = t(735250);
t(470079);
var r = t(392711),
  s = t(481060),
  i = t(246364),
  o = t(405545),
  l = t(382574),
  c = t(279988),
  d = t(786127),
  u = t(981631),
  m = t(689938);

function h(e) {
  let {
    dropHoveredIndex: n,
    formField: u,
    guild: h,
    index: C,
    isDragEnabled: f,
    submittedGuildJoinRequestsCount: E,
    removeFormField: T,
    updateFormField: _,
    updateFormFieldOrder: I,
    canRemove: g,
    actionsLocation: p
  } = e, N = async () => {
    await T(C)
  }, v = async e => {
    await _(C, e)
  }, y = async (e, n, t) => {
    await I(e, n, t)
  }, A = (0, r.uniqueId)(), S = n === C, M = {
    key: A,
    index: C,
    isDragEnabled: f,
    isDropHovered: S,
    onEdit: () => {
      0 === E ? x(u, v, h) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("74673")]).then(t.bind(t, 394045));
        return n => (0, a.jsx)(e, {
          ...n,
          guildId: h.id,
          submittedGuildJoinRequestsCount: E,
          onConfirm: () => x(u, v, h)
        })
      })
    },
    onRemove: N,
    onDrop: y,
    canRemove: g,
    actionsLocation: p
  };
  switch (u.field_type) {
    case i.QJ.TERMS:
      return (0, a.jsx)(c.Z, {
        channelId: h.rulesChannelId,
        title: m.Z.Messages.GUILD_RULES_HEADER,
        formField: u,
        ...M
      });
    case i.QJ.PARAGRAPH:
      return (0, a.jsx)(l.Z, {
        formField: u,
        ...M
      });
    case i.QJ.TEXT_INPUT:
      return (0, a.jsx)(d.Z, {
        formField: u,
        ...M
      });
    case i.QJ.MULTIPLE_CHOICE:
      return (0, a.jsx)(o.Z, {
        formField: u,
        ...M
      });
    default:
      return null
  }
}

function C(e, n, r) {
  let o = {
    onCloseRequest: u.dG4
  };
  switch (e) {
    case i.QJ.TERMS:
      return (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("5945")]).then(t.bind(t, 92451));
        return t => (0, a.jsx)(e, {
          ...t,
          field: void 0,
          onSave: n,
          guild: r
        })
      }, o);
    case i.QJ.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([t.e("99387"), t.e("6595")]).then(t.bind(t, 457042));
        return t => (0, a.jsx)(e, {
          ...t,
          field: void 0,
          onSave: n
        })
      }, o);
    case i.QJ.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([t.e("99387"), t.e("6595")]).then(t.bind(t, 457042));
        return t => (0, a.jsx)(e, {
          ...t,
          field: void 0,
          onSave: n
        })
      }, o);
    case i.QJ.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("94064")]).then(t.bind(t, 607569));
        return t => (0, a.jsx)(e, {
          ...t,
          field: void 0,
          onSave: n
        })
      }, o)
  }
}

function x(e, n, r) {
  let o = {
    onCloseRequest: u.dG4
  };
  switch (e.field_type) {
    case i.QJ.TERMS:
      return (0, s.openModalLazy)(async () => {
        let {
          default: s
        } = await Promise.all([t.e("99387"), t.e("5945")]).then(t.bind(t, 92451));
        return t => (0, a.jsx)(s, {
          ...t,
          field: e,
          onSave: n,
          guild: r
        })
      }, o);
    case i.QJ.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: r
        } = await Promise.all([t.e("99387"), t.e("6595")]).then(t.bind(t, 457042));
        return t => (0, a.jsx)(r, {
          ...t,
          field: e,
          onSave: n
        })
      }, o);
    case i.QJ.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: r
        } = await Promise.all([t.e("99387"), t.e("6595")]).then(t.bind(t, 457042));
        return t => (0, a.jsx)(r, {
          ...t,
          field: e,
          onSave: n
        })
      }, o);
    case i.QJ.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([t.e("99387"), t.e("94064")]).then(t.bind(t, 607569));
        return t => (0, a.jsx)(r, {
          ...t,
          field: e,
          onSave: n
        })
      }, o)
  }
}