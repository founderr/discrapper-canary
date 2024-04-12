"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var s = n("470079"),
  a = n("668781"),
  l = n("881052"),
  i = n("824389"),
  r = n("179838"),
  o = n("689938");

function u(e, t) {
  let [n, u] = s.useState(!1);
  return {
    isLoading: n,
    downloadAttachment: s.useCallback(async n => {
      if (null != e && null != t) {
        u(!0);
        try {
          let {
            url: s
          } = await i.requestDownloadUrl({
            guildId: e,
            productId: t,
            attachmentId: n
          });
          await r.download(s)
        } catch (t) {
          let e = t instanceof l.APIError ? t.getAnyErrorMessage() : void 0;
          a.default.show({
            title: o.default.Messages.ERROR_GENERIC_TITLE,
            body: null != e ? e : o.default.Messages.GENERIC_ERROR_BODY
          })
        } finally {
          u(!1)
        }
      }
    }, [e, t])
  }
}