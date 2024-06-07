"use strict";
a.r(t), a.d(t, {
  getFormFieldBuilderComponent: function() {
    return m
  },
  openEmptyFormFieldModal: function() {
    return E
  }
});
var n = a("735250");
a("470079");
var r = a("392711"),
  i = a("481060"),
  s = a("246364"),
  l = a("405545"),
  o = a("382574"),
  d = a("279988"),
  c = a("786127"),
  u = a("981631"),
  f = a("689938");

function m(e) {
  let {
    dropHoveredIndex: t,
    formField: u,
    guild: m,
    index: E,
    isDragEnabled: T,
    submittedGuildJoinRequestsCount: _,
    removeFormField: C,
    updateFormField: x,
    updateFormFieldOrder: p,
    canRemove: I,
    actionsLocation: g
  } = e, N = async () => {
    await C(E)
  }, A = async e => {
    await x(E, e)
  }, v = async (e, t, a) => {
    await p(e, t, a)
  }, S = (0, r.uniqueId)(), R = t === E, L = {
    key: S,
    index: E,
    isDragEnabled: T,
    isDropHovered: R,
    onEdit: () => {
      0 === _ ? h(u, A, m) : (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("74673")]).then(a.bind(a, "394045"));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: m.id,
          submittedGuildJoinRequestsCount: _,
          onConfirm: () => h(u, A, m)
        })
      })
    },
    onRemove: N,
    onDrop: v,
    canRemove: I,
    actionsLocation: g
  };
  switch (u.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, n.jsx)(d.default, {
        channelId: m.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: u,
        ...L
      });
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.jsx)(o.default, {
        formField: u,
        ...L
      });
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.jsx)(c.default, {
        formField: u,
        ...L
      });
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.jsx)(l.default, {
        formField: u,
        ...L
      });
    default:
      return null
  }
}

function E(e, t, r) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("5945")]).then(a.bind(a, "92451"));
        return a => (0, n.jsx)(e, {
          ...a,
          field: void 0,
          onSave: t,
          guild: r
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, i.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(e, {
          ...a,
          field: void 0,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, i.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(e, {
          ...a,
          field: void 0,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("94064")]).then(a.bind(a, "607569"));
        return a => (0, n.jsx)(e, {
          ...a,
          field: void 0,
          onSave: t
        })
      }, l)
  }
}

function h(e, t, r) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([a.e("99387"), a.e("5945")]).then(a.bind(a, "92451"));
        return a => (0, n.jsx)(i, {
          ...a,
          field: e,
          onSave: t,
          guild: r
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, i.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: r
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(r, {
          ...a,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, i.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: r
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(r, {
          ...a,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, i.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([a.e("99387"), a.e("94064")]).then(a.bind(a, "607569"));
        return a => (0, n.jsx)(r, {
          ...a,
          field: e,
          onSave: t
        })
      }, l)
  }
}