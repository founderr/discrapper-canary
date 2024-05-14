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
var r = a("392711"),
  s = a("481060"),
  i = a("246364"),
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
    isDragEnabled: E,
    submittedGuildJoinRequestsCount: T,
    removeFormField: C,
    updateFormField: _,
    updateFormFieldOrder: x,
    canRemove: g,
    actionsLocation: I
  } = e, N = async () => {
    await C(h)
  }, v = async e => {
    await _(h, e)
  }, A = async (e, t, a) => {
    await x(e, t, a)
  }, S = (0, r.uniqueId)(), L = t === h, y = {
    key: S,
    index: h,
    isDragEnabled: E,
    isDropHovered: L,
    onEdit: () => {
      0 === T ? p(u, v, m) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("74673")]).then(a.bind(a, "394045"));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: m.id,
          submittedGuildJoinRequestsCount: T,
          onConfirm: () => p(u, v, m)
        })
      })
    },
    onRemove: N,
    onDrop: A,
    canRemove: g,
    actionsLocation: I
  };
  switch (u.field_type) {
    case i.VerificationFormFieldTypes.TERMS:
      return (0, n.jsx)(c.default, {
        channelId: m.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: u,
        ...y
      });
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.jsx)(o.default, {
        formField: u,
        ...y
      });
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.jsx)(d.default, {
        formField: u,
        ...y
      });
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.jsx)(l.default, {
        formField: u,
        ...y
      });
    default:
      return null
  }
}

function h(e, t, r) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e) {
    case i.VerificationFormFieldTypes.TERMS:
      return (0, s.openModalLazy)(async () => {
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
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(e, {
          ...a,
          field: void 0,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(e, {
          ...a,
          field: void 0,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
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

function p(e, t, r) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e.field_type) {
    case i.VerificationFormFieldTypes.TERMS:
      return (0, s.openModalLazy)(async () => {
        let {
          default: s
        } = await Promise.all([a.e("99387"), a.e("5945")]).then(a.bind(a, "92451"));
        return a => (0, n.jsx)(s, {
          ...a,
          field: e,
          onSave: t,
          guild: r
        })
      }, l);
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: r
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(r, {
          ...a,
          field: e,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: r
        } = await Promise.all([a.e("99387"), a.e("6595")]).then(a.bind(a, "457042"));
        return a => (0, n.jsx)(r, {
          ...a,
          field: e,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
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