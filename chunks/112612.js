s.d(t, {
  Z: function() {
    return o
  }
}), s(47120);
var n = s(470079),
  a = s(881052);

function o(e) {
  let {
    onSubmit: t,
    onClose: s
  } = e, [o, i] = n.useState(!1), [l, r] = n.useState(null), c = n.useCallback(async () => {
    if (!o) {
      i(!0), r(null);
      try {
        await t(), s()
      } catch (e) {
        r(new a.Hx(e).getAnyErrorMessage()), i(!1)
      }
    }
  }, [s, t, o]);
  return {
    submitting: o,
    errorMessage: l,
    onSubmit: c
  }
}