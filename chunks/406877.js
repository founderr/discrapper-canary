e.d(n, {
  Z: function() {
    return c
  }
}), e(47120);
var a = e(470079),
  i = e(668781),
  r = e(881052),
  s = e(824389),
  l = e(179838),
  o = e(689938);

function c(t, n) {
  let [e, c] = a.useState(!1);
  return {
    isLoading: e,
    downloadAttachment: a.useCallback(async e => {
      if (null != t && null != n) {
        c(!0);
        try {
          let {
            url: a
          } = await s.gs({
            guildId: t,
            productId: n,
            attachmentId: e
          });
          await l.L(a)
        } catch (n) {
          let t = n instanceof r.Hx ? n.getAnyErrorMessage() : void 0;
          i.Z.show({
            title: o.Z.Messages.ERROR_GENERIC_TITLE,
            body: null != t ? t : o.Z.Messages.GENERIC_ERROR_BODY
          })
        } finally {
          c(!1)
        }
      }
    }, [t, n])
  }
}