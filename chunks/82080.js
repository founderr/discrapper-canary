"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("702976"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("819689"),
  r = n("249561"),
  o = n("850391"),
  u = n("681060"),
  d = n("271938"),
  c = n("836417"),
  f = n("305961"),
  h = n("957255"),
  C = n("497880"),
  p = n("851220"),
  E = n("659500"),
  m = n("568734"),
  g = n("718422"),
  S = n("49111"),
  _ = n("5762");

function T(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, g.applyChatRestrictions)({
    type: o.ChatInputTypes.EDIT,
    content: t,
    channel: n,
    restrictMentions: !1,
    respectCooldown: !1
  })
}

function A(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: o
  } = t, {
    id: u
  } = n, C = t.getGuildId(), E = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(C), [C]), g = t.type === S.ChannelTypes.GUILD_ANNOUNCEMENT, A = null != E && E.hasFeature(S.GuildFeatures.NEWS), N = g && A, {
    editingMessage: I,
    editingTextValue: v,
    editingRichValue: L
  } = (0, l.useStateFromStoresObject)([c.default], () => ({
    editingMessage: c.default.getEditingMessage(o),
    editingTextValue: c.default.getEditingTextValue(o),
    editingRichValue: c.default.getEditingRichValue(o)
  }), [o]), R = (0, l.useStateFromStores)([d.default], () => d.default.getId()), x = s.useCallback((e, n, a) => {
    let {
      content: s
    } = a, l = h.default.can(S.Permissions.MANAGE_MESSAGES, t), o = null != I && null != I.author ? I.author.id : null, u = N && (o === R || l);
    return u && null != I && (0, m.hasFlag)(I.flags, S.MessageFlags.CROSSPOSTED) ? r.default.confirmEdit(e, n, s) : i.default.editMessage(e, n, {
      content: s
    }), Promise.resolve()
  }, [I, N, R, t]), y = s.useCallback(e => (0, s.createElement)(M, {
    ...e,
    className: _.channelTextArea,
    key: u
  }), [u]);
  return null != v && null != L ? (0, a.jsx)(p.default, {
    ref: void 0,
    channel: t,
    message: n,
    textValue: v,
    richValue: L,
    onCancel: i.default.endEditMessage,
    onChange: i.default.updateEditMessage,
    onConfirmDelete: r.default.confirmDelete,
    saveMessage: x,
    validateEdit: T,
    children: y
  }) : null
}

function M(e) {
  let {
    textValue: t,
    richValue: n,
    message: l,
    channel: i,
    onChange: r,
    onSubmit: d,
    onKeyDown: c
  } = e, [f, h] = s.useState(!0), C = s.useCallback(() => h(!0), []), p = s.useCallback(() => h(!1), []);
  return s.useEffect(() => (E.ComponentDispatch.subscribe(S.ComponentActions.TEXTAREA_FOCUS, C), E.ComponentDispatch.subscribe(S.ComponentActions.TEXTAREA_BLUR, p), () => {
    E.ComponentDispatch.unsubscribe(S.ComponentActions.TEXTAREA_FOCUS, C), E.ComponentDispatch.unsubscribe(S.ComponentActions.TEXTAREA_BLUR, p)
  }), [C, p]), (0, a.jsx)(u.default, {
    className: _.channelTextArea,
    textValue: t,
    richValue: n,
    channel: i,
    type: o.ChatInputTypes.EDIT,
    onChange: r,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return d(t)
    },
    onKeyDown: c,
    focused: f,
    onFocus: C,
    onBlur: p
  }, l.id)
}

function N(e, t, n) {
  let {
    message: s,
    channel: l
  } = e;
  return n ? (0, a.jsx)(A, {
    channel: l,
    message: s
  }) : (0, a.jsx)(C.default, {
    message: s,
    content: t
  })
}