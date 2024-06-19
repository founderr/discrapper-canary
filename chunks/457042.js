n.r(t), n.d(t, {
  ParagraphFormFieldModal: function() {
    return I
  },
  TextInputFormFieldModal: function() {
    return E
  }
}), n(47120), n(757143);
var l = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(881052),
  o = n(246364),
  i = n(915509),
  c = n(592286),
  u = n(689938);

function d(e) {
  var t;
  let {
    type: n,
    title: o,
    description: d,
    field: E,
    onSave: I,
    onClose: M
  } = e, [R, _] = s.useState(null !== (t = null == E ? void 0 : E.label) && void 0 !== t ? t : ""), [T, N] = s.useState(null), h = async () => {
    null != T && N(null);
    let e = R.trim();
    if ("" === e) {
      N(u.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
      return
    }
    try {
      await I({
        field_type: n,
        label: e,
        required: !0
      }), M()
    } catch (e) {
      N(new r.Hx(e).getAnyErrorMessage())
    }
  };
  return (0, l.jsx)(i.Z, {
    ...e,
    errorText: T,
    title: o,
    description: d,
    onConfirm: h,
    onCancel: M,
    children: (0, l.jsx)(a.TextInput, {
      onChange: e => {
        null != T && N(null);
        let t = e.replace(/(\r\n|\n|\r)/g, " ");
        t.length > c.XN && (t = t.slice(0, c.XN)), _(t)
      },
      placeholder: u.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
      value: R,
      onKeyDown: e => "Enter" === e.key && h()
    })
  })
}

function E(e) {
  return (0, l.jsx)(d, {
    title: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
    description: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_TEXT_DESCRIPTION,
    type: o.QJ.TEXT_INPUT,
    ...e
  })
}

function I(e) {
  return (0, l.jsx)(d, {
    title: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
    description: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PARAGRAPH_DESCRIPTION,
    type: o.QJ.PARAGRAPH,
    ...e
  })
}