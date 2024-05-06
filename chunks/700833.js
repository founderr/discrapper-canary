"use strict";
a.r(t), a.d(t, {
  getFormFieldBuilderComponent: function() {
    return m
  },
  openEmptyFormFieldModal: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var i = a("392711"),
  r = a("481060"),
  s = a("246364"),
  l = a("405545"),
  o = a("382574"),
  c = a("279988"),
  d = a("786127"),
  u = a("981631"),
  f = a("689938");

function m(e) {
  let {
    dropHoveredIndex: t,
    formField: u,
    guild: m,
    index: h,
    isDragEnabled: T,
    submittedGuildJoinRequestsCount: p,
    removeFormField: _,
    updateFormField: C,
    updateFormFieldOrder: g,
    canRemove: x,
    actionsLocation: I
  } = e, v = async () => {
    await _(h)
  }, N = async e => {
    await C(h, e)
  }, A = async (e, t, a) => {
    await g(e, t, a)
  }, S = (0, i.uniqueId)(), R = t === h, L = {
    key: S,
    index: h,
    isDragEnabled: T,
    isDropHovered: R,
    onEdit: () => {
      0 === p ? E(u, N, m) : (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("74673")]).then(a.bind(a, "394045"));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: m.id,
          submittedGuildJoinRequestsCount: p,
          onConfirm: () => E(u, N, m)
        })
      })
    },
    onRemove: v,
    onDrop: A,
    canRemove: x,
    actionsLocation: I
  };
  switch (u.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, n.jsx)(c.default, {
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
      return (0, n.jsx)(d.default, {
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

function h(e, t, i) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("5945")]).then(a.bind(a, "92451"));
        return a => (0, n.jsx)(e, {
          ...a,
          field: void 0,
          onSave: t,
          guild: i
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, r.openModalLazy)(async () => {
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
      return (0, r.openModalLazy)(async () => {
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
      return (0, r.openModalLazy)(async () => {
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

function E(e, t, i) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, r.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([a.e("99387"), a.e("5945")]).then(a.bind(a, "92451"));
        return a => (0, n.jsx)(r, {
          ...a,
          field: e,
          onSave: t,
          guild: i
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, r.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: i
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(i, {
          ...a,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, r.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: i
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(i, {
          ...a,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, r.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([a.e("99387"), a.e("94064")]).then(a.bind(a, "607569"));
        return a => (0, n.jsx)(i, {
          ...a,
          field: e,
          onSave: t
        })
      }, l)
  }
}