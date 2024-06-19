a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a(47120);
var n = a(735250),
  s = a(470079),
  l = a(481060),
  o = a(881052),
  i = a(434404),
  r = a(78451),
  c = a(915509),
  d = a(981631),
  u = a(689938),
  h = a(331651);

function x(e) {
  let {
    guild: t,
    onClose: a,
    hideColors: x
  } = e, [m, C] = s.useState(t.verificationLevel), [M, L] = s.useState(null), N = t.hasFeature(d.oNc.COMMUNITY), f = (0, r.IF)(N, x).filter(e => !e.disabled), j = s.useCallback(async () => {
    null != M && L(null);
    try {
      await i.Z.saveGuild(t.id, {
        verificationLevel: m
      }), i.Z.updateGuild({
        verificationLevel: m
      }), a()
    } catch (e) {
      L(new o.Hx(e).getAnyErrorMessage())
    }
  }, [M, t.id, m, a]);
  return (0, n.jsx)(c.Z, {
    ...e,
    title: u.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
    errorText: M,
    onConfirm: j,
    onCancel: a,
    children: (0, n.jsxs)(l.FormSection, {
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: h.marginBottom20,
        children: u.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      }), (0, n.jsx)(l.RadioGroup, {
        value: m,
        options: f,
        onChange: e => C(e.value)
      })]
    })
  })
}