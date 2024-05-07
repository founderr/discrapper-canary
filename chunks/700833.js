"use strict";
s.r(t), s.d(t, {
  getFormFieldBuilderComponent: function() {
    return d
  },
  openEmptyFormFieldModal: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var n = s("392711"),
  i = s("481060"),
  E = s("246364"),
  l = s("405545"),
  _ = s("382574"),
  r = s("279988"),
  u = s("786127"),
  o = s("981631"),
  T = s("689938");

function d(e) {
  let {
    dropHoveredIndex: t,
    formField: o,
    guild: d,
    index: A,
    isDragEnabled: L,
    submittedGuildJoinRequestsCount: c,
    removeFormField: N,
    updateFormField: S,
    updateFormFieldOrder: g,
    canRemove: D,
    actionsLocation: C
  } = e, f = async () => {
    await N(A)
  }, O = async e => {
    await S(A, e)
  }, G = async (e, t, s) => {
    await g(e, t, s)
  }, M = (0, n.uniqueId)(), U = t === A, R = {
    key: M,
    index: A,
    isDragEnabled: L,
    isDropHovered: U,
    onEdit: () => {
      0 === c ? I(o, O, d) : (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("74673")]).then(s.bind(s, "394045"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: d.id,
          submittedGuildJoinRequestsCount: c,
          onConfirm: () => I(o, O, d)
        })
      })
    },
    onRemove: f,
    onDrop: G,
    canRemove: D,
    actionsLocation: C
  };
  switch (o.field_type) {
    case E.VerificationFormFieldTypes.TERMS:
      return (0, a.jsx)(r.default, {
        channelId: d.rulesChannelId,
        title: T.default.Messages.GUILD_RULES_HEADER,
        formField: o,
        ...R
      });
    case E.VerificationFormFieldTypes.PARAGRAPH:
      return (0, a.jsx)(_.default, {
        formField: o,
        ...R
      });
    case E.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, a.jsx)(u.default, {
        formField: o,
        ...R
      });
    case E.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, a.jsx)(l.default, {
        formField: o,
        ...R
      });
    default:
      return null
  }
}

function A(e, t, n) {
  let l = {
    onCloseRequest: o.NOOP
  };
  switch (e) {
    case E.VerificationFormFieldTypes.TERMS:
      return (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("5945")]).then(s.bind(s, "92451"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t,
          guild: n
        })
      }, l);
    case E.VerificationFormFieldTypes.PARAGRAPH:
      return (0, i.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([s.e("99387"), s.e("6595")]).then(s.bind(s, "457042"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t
        })
      }, l);
    case E.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, i.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([s.e("99387"), s.e("6595")]).then(s.bind(s, "457042"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t
        })
      }, l);
    case E.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("94064")]).then(s.bind(s, "607569"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t
        })
      }, l)
  }
}

function I(e, t, n) {
  let l = {
    onCloseRequest: o.NOOP
  };
  switch (e.field_type) {
    case E.VerificationFormFieldTypes.TERMS:
      return (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([s.e("99387"), s.e("5945")]).then(s.bind(s, "92451"));
        return s => (0, a.jsx)(i, {
          ...s,
          field: e,
          onSave: t,
          guild: n
        })
      }, l);
    case E.VerificationFormFieldTypes.PARAGRAPH:
      return (0, i.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: n
        } = await Promise.all([s.e("99387"), s.e("6595")]).then(s.bind(s, "457042"));
        return s => (0, a.jsx)(n, {
          ...s,
          field: e,
          onSave: t
        })
      }, l);
    case E.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, i.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: n
        } = await Promise.all([s.e("99387"), s.e("6595")]).then(s.bind(s, "457042"));
        return s => (0, a.jsx)(n, {
          ...s,
          field: e,
          onSave: t
        })
      }, l);
    case E.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, i.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([s.e("99387"), s.e("94064")]).then(s.bind(s, "607569"));
        return s => (0, a.jsx)(n, {
          ...s,
          field: e,
          onSave: t
        })
      }, l)
  }
}