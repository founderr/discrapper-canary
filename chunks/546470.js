"use strict";
s.r(t), s.d(t, {
  getFormFieldBuilderComponent: function() {
    return _
  },
  openEmptyFormFieldModal: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var l = s("917351"),
  n = s("77078"),
  i = s("567054"),
  r = s("403025"),
  o = s("263974"),
  d = s("169324"),
  u = s("333554"),
  c = s("49111"),
  E = s("782340");

function _(e) {
  let {
    dropHoveredIndex: t,
    formField: c,
    guild: _,
    index: I,
    isDragEnabled: T,
    submittedGuildJoinRequestsCount: S,
    removeFormField: m,
    updateFormField: N,
    updateFormFieldOrder: g
  } = e, h = async () => {
    await m(I)
  }, C = async e => {
    await N(I, e)
  }, R = async (e, t, s) => {
    await g(e, t, s)
  }, x = (0, l.uniqueId)(), L = t === I, O = {
    key: x,
    index: I,
    isDragEnabled: T,
    isDropHovered: L,
    onEdit: () => {
      0 === S ? f(c, C) : (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("265397").then(s.bind(s, "265397"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: _.id,
          submittedGuildJoinRequestsCount: S,
          onConfirm: () => f(c, C)
        })
      })
    },
    onRemove: h,
    onDrop: R
  };
  switch (c.field_type) {
    case i.VerificationFormFieldTypes.TERMS:
      return (0, a.jsx)(d.default, {
        channelId: _.rulesChannelId,
        title: E.default.Messages.GUILD_RULES_HEADER,
        formField: c,
        ...O
      });
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, a.jsx)(o.default, {
        formField: c,
        ...O
      });
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, a.jsx)(u.default, {
        formField: c,
        ...O
      });
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, a.jsx)(r.default, {
        formField: c,
        ...O
      });
    default:
      return null
  }
}

function I(e, t) {
  let l = {
    onCloseRequest: c.NOOP
  };
  switch (e) {
    case i.VerificationFormFieldTypes.TERMS:
      return (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("262099").then(s.bind(s, "262099"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await s.el("198784").then(s.bind(s, "198784"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await s.el("198784").then(s.bind(s, "198784"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("827619").then(s.bind(s, "827619"));
        return s => (0, a.jsx)(e, {
          ...s,
          field: void 0,
          onSave: t
        })
      }, l)
  }
}

function f(e, t) {
  let l = {
    onCloseRequest: c.NOOP
  };
  switch (e.field_type) {
    case i.VerificationFormFieldTypes.TERMS:
      return (0, n.openModalLazy)(async () => {
        let {
          default: l
        } = await s.el("262099").then(s.bind(s, "262099"));
        return s => (0, a.jsx)(l, {
          ...s,
          field: e,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: l
        } = await s.el("198784").then(s.bind(s, "198784"));
        return s => (0, a.jsx)(l, {
          ...s,
          field: e,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: l
        } = await s.el("198784").then(s.bind(s, "198784"));
        return s => (0, a.jsx)(l, {
          ...s,
          field: e,
          onSave: t
        })
      }, l);
    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.openModalLazy)(async () => {
        let {
          default: l
        } = await s.el("827619").then(s.bind(s, "827619"));
        return s => (0, a.jsx)(l, {
          ...s,
          field: e,
          onSave: t
        })
      }, l)
  }
}