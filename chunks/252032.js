n.d(t, {
  Z: function() {
    return Z
  }
}), n(789020), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(904245),
  r = n(257559),
  o = n(541716),
  c = n(893718),
  u = n(314897),
  d = n(323873),
  h = n(430824),
  m = n(496675),
  p = n(585483),
  E = n(630388),
  g = n(838440),
  f = n(930282),
  C = n(955384),
  _ = n(981631),
  I = n(105461);

function x(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, g.v)({
    type: o.I.EDIT,
    content: t,
    channel: n,
    restrictMentions: !1,
    respectCooldown: !1
  })
}

function T(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: o
  } = t, {
    id: c
  } = n, p = t.getGuildId(), g = (0, s.e7)([h.Z], () => h.Z.getGuild(p), [p]), f = t.type === _.d4z.GUILD_ANNOUNCEMENT, T = null != g && g.hasFeature(_.oNc.NEWS), Z = f && T, {
    editingMessage: S,
    editingTextValue: v,
    editingRichValue: A
  } = (0, s.cj)([d.Z], () => ({
    editingMessage: d.Z.getEditingMessage(o),
    editingTextValue: d.Z.getEditingTextValue(o),
    editingRichValue: d.Z.getEditingRichValue(o)
  }), [o]), M = (0, s.e7)([u.default], () => u.default.getId()), R = i.useCallback((e, n, l) => {
    let {
      content: i
    } = l, s = m.Z.can(_.Plq.MANAGE_MESSAGES, t), o = null != S && null != S.author ? S.author.id : null;
    return Z && (o === M || s) && null != S && (0, E.yE)(S.flags, _.iLy.CROSSPOSTED) ? r.Z.confirmEdit(e, n, i) : a.Z.editMessage(e, n, {
      content: i
    }), Promise.resolve()
  }, [S, Z, M, t]), j = i.useCallback(e => (0, i.createElement)(N, {
    ...e,
    className: I.channelTextArea,
    key: c
  }), [c]);
  return null != v && null != A ? (0, l.jsx)(C.Z, {
    ref: void 0,
    channel: t,
    message: n,
    textValue: v,
    richValue: A,
    onCancel: a.Z.endEditMessage,
    onChange: a.Z.updateEditMessage,
    onConfirmDelete: r.Z.confirmDelete,
    saveMessage: R,
    validateEdit: x,
    children: j
  }) : null
}

function N(e) {
  let {
    textValue: t,
    richValue: n,
    message: s,
    channel: a,
    onChange: r,
    onSubmit: u,
    onKeyDown: d
  } = e, [h, m] = i.useState(!0), E = i.useCallback(() => m(!0), []), g = i.useCallback(() => m(!1), []);
  return i.useEffect(() => (p.S.subscribe(_.CkL.TEXTAREA_FOCUS, E), p.S.subscribe(_.CkL.TEXTAREA_BLUR, g), () => {
    p.S.unsubscribe(_.CkL.TEXTAREA_FOCUS, E), p.S.unsubscribe(_.CkL.TEXTAREA_BLUR, g)
  }), [E, g]), (0, l.jsx)(c.Z, {
    className: I.channelTextArea,
    textValue: t,
    richValue: n,
    channel: a,
    type: o.I.EDIT,
    onChange: r,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return u(t)
    },
    onKeyDown: d,
    focused: h,
    onFocus: E,
    onBlur: g
  }, s.id)
}

function Z(e, t, n) {
  let {
    message: i,
    channel: s
  } = e;
  return n ? (0, l.jsx)(T, {
    channel: s,
    message: i
  }) : (0, l.jsx)(f.ZP, {
    message: i,
    content: t
  })
}