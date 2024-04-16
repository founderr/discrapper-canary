"use strict";
i.r(t), i.d(t, {
  getFormFieldBuilderComponent: function() {
    return p
  },
  openEmptyFormFieldModal: function() {
    return C
  }
});
var n = i("735250");
i("470079");
var r = i("392711"),
  s = i("481060"),
  a = i("246364"),
  l = i("405545"),
  o = i("382574"),
  c = i("279988"),
  u = i("786127"),
  d = i("981631"),
  f = i("689938");

function p(e) {
  let {
    dropHoveredIndex: t,
    formField: d,
    guild: p,
    index: C,
    isDragEnabled: h,
    submittedGuildJoinRequestsCount: _,
    removeFormField: E,
    updateFormField: I,
    updateFormFieldOrder: T,
    canRemove: x,
    actionsLocation: g
  } = e, v = async () => {
    await E(C)
  }, R = async e => {
    await I(C, e)
  }, A = async (e, t, i) => {
    await T(e, t, i)
  }, N = (0, r.uniqueId)(), S = t === C, M = {
    key: N,
    index: C,
    isDragEnabled: h,
    isDropHovered: S,
    onEdit: () => {
      0 === _ ? m(d, R, p) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("74673")]).then(i.bind(i, "394045"));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: p.id,
          submittedGuildJoinRequestsCount: _,
          onConfirm: () => m(d, R, p)
        })
      })
    },
    onRemove: v,
    onDrop: A,
    canRemove: x,
    actionsLocation: g
  };
  switch (d.field_type) {
    case a.VerificationFormFieldTypes.TERMS:
      return (0, n.jsx)(c.default, {
        channelId: p.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: d,
        ...M
      });
    case a.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.jsx)(o.default, {
        formField: d,
        ...M
      });
    case a.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.jsx)(u.default, {
        formField: d,
        ...M
      });
    case a.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.jsx)(l.default, {
        formField: d,
        ...M
      });
    default:
      return null
  }
}

function C(e, t, r) {
  let l = {
    onCloseRequest: d.NOOP
  };
  switch (e) {
    case a.VerificationFormFieldTypes.TERMS:
      return (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("5945")]).then(i.bind(i, "92451"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t,
          guild: r
        })
      }, l);
    case a.VerificationFormFieldTypes.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, l);
    case a.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, l);
    case a.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("94064")]).then(i.bind(i, "607569"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, l)
  }
}

function m(e, t, r) {
  let l = {
    onCloseRequest: d.NOOP
  };
  switch (e.field_type) {
    case a.VerificationFormFieldTypes.TERMS:
      return (0, s.openModalLazy)(async () => {
        let {
          default: s
        } = await Promise.all([i.e("99387"), i.e("5945")]).then(i.bind(i, "92451"));
        return i => (0, n.jsx)(s, {
          ...i,
          field: e,
          onSave: t,
          guild: r
        })
      }, l);
    case a.VerificationFormFieldTypes.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: r
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, n.jsx)(r, {
          ...i,
          field: e,
          onSave: t
        })
      }, l);
    case a.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: r
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, n.jsx)(r, {
          ...i,
          field: e,
          onSave: t
        })
      }, l);
    case a.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([i.e("99387"), i.e("94064")]).then(i.bind(i, "607569"));
        return i => (0, n.jsx)(r, {
          ...i,
          field: e,
          onSave: t
        })
      }, l)
  }
}