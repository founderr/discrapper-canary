"use strict";
n.r(t), n.d(t, {
  getFormFieldBuilderComponent: function() {
    return p
  },
  openEmptyFormFieldModal: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("392711"),
  a = n("481060"),
  s = n("246364"),
  l = n("405545"),
  o = n("382574"),
  u = n("279988"),
  c = n("786127"),
  d = n("981631"),
  f = n("689938");

function p(e) {
  let {
    dropHoveredIndex: t,
    formField: d,
    guild: p,
    index: m,
    isDragEnabled: I,
    submittedGuildJoinRequestsCount: _,
    removeFormField: T,
    updateFormField: h,
    updateFormFieldOrder: g,
    canRemove: C
  } = e, v = async () => {
    await T(m)
  }, x = async e => {
    await h(m, e)
  }, A = async (e, t, n) => {
    await g(e, t, n)
  }, N = (0, r.uniqueId)(), R = t === m, S = {
    key: N,
    index: m,
    isDragEnabled: I,
    isDropHovered: R,
    onEdit: () => {
      0 === _ ? E(d, x, p) : (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("74673")]).then(n.bind(n, "394045"));
        return t => (0, i.jsx)(e, {
          ...t,
          guildId: p.id,
          submittedGuildJoinRequestsCount: _,
          onConfirm: () => E(d, x, p)
        })
      })
    },
    onRemove: v,
    onDrop: A,
    canRemove: C
  };
  switch (d.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, i.jsx)(u.default, {
        channelId: p.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: d,
        ...S
      });
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, i.jsx)(o.default, {
        formField: d,
        ...S
      });
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, i.jsx)(c.default, {
        formField: d,
        ...S
      });
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, i.jsx)(l.default, {
        formField: d,
        ...S
      });
    default:
      return null
  }
}

function m(e, t, r) {
  let l = {
    onCloseRequest: d.NOOP
  };
  switch (e) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("5945")]).then(n.bind(n, "92451"));
        return n => (0, i.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t,
          guild: r
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, a.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, i.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, a.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, i.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("94064")]).then(n.bind(n, "607569"));
        return n => (0, i.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l)
  }
}

function E(e, t, r) {
  let l = {
    onCloseRequest: d.NOOP
  };
  switch (e.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, a.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("99387"), n.e("5945")]).then(n.bind(n, "92451"));
        return n => (0, i.jsx)(a, {
          ...n,
          field: e,
          onSave: t,
          guild: r
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, a.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: r
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, i.jsx)(r, {
          ...n,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, a.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: r
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, i.jsx)(r, {
          ...n,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, a.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("99387"), n.e("94064")]).then(n.bind(n, "607569"));
        return n => (0, i.jsx)(r, {
          ...n,
          field: e,
          onSave: t
        })
      }, l)
  }
}