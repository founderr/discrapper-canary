"use strict";
n.r(t), n.d(t, {
  getFormFieldBuilderComponent: function() {
    return m
  },
  openEmptyFormFieldModal: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var r = n("392711"),
  s = n("481060"),
  i = n("246364"),
  l = n("405545"),
  o = n("382574"),
  c = n("279988"),
  d = n("786127"),
  u = n("981631"),
  f = n("689938");

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
    updateFormFieldOrder: g,
    canRemove: x,
    actionsLocation: I
  } = e, N = async () => {
    await C(h)
  }, v = async e => {
    await _(h, e)
  }, A = async (e, t, n) => {
    await g(e, t, n)
  }, S = (0, r.uniqueId)(), L = t === h, R = {
    key: S,
    index: h,
    isDragEnabled: E,
    isDropHovered: L,
    onEdit: () => {
      0 === T ? p(u, v, m) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("74673")]).then(n.bind(n, "394045"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: m.id,
          submittedGuildJoinRequestsCount: T,
          onConfirm: () => p(u, v, m)
        })
      })
    },
    onRemove: N,
    onDrop: A,
    canRemove: x,
    actionsLocation: I
  };
  switch (u.field_type) {
    case i.VerificationFormFieldTypes.TERMS:
      return (0, a.jsx)(c.default, {
        channelId: m.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: u,
        ...R
      });
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, a.jsx)(o.default, {
        formField: u,
        ...R
      });
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, a.jsx)(d.default, {
        formField: u,
        ...R
      });
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, a.jsx)(l.default, {
        formField: u,
        ...R
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
        } = await Promise.all([n.e("99387"), n.e("5945")]).then(n.bind(n, "92451"));
        return n => (0, a.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t,
          guild: r
        })
      }, l);
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("94064")]).then(n.bind(n, "607569"));
        return n => (0, a.jsx)(e, {
          ...n,
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
        } = await Promise.all([n.e("99387"), n.e("5945")]).then(n.bind(n, "92451"));
        return n => (0, a.jsx)(s, {
          ...n,
          field: e,
          onSave: t,
          guild: r
        })
      }, l);
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, s.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: r
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(r, {
          ...n,
          field: e,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, s.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: r
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(r, {
          ...n,
          field: e,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, s.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("99387"), n.e("94064")]).then(n.bind(n, "607569"));
        return n => (0, a.jsx)(r, {
          ...n,
          field: e,
          onSave: t
        })
      }, l)
  }
}