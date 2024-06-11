"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("47120");
var a = s("470079"),
  n = s("668781"),
  r = s("881052"),
  l = s("824389"),
  u = s("179838"),
  i = s("689938");

function o(e, t) {
  let [s, o] = a.useState(!1);
  return {
    isLoading: s,
    downloadAttachment: a.useCallback(async s => {
      if (null != e && null != t) {
        o(!0);
        try {
          let {
            url: a
          } = await l.requestDownloadUrl({
            guildId: e,
            productId: t,
            attachmentId: s
          });
          await u.download(a)
        } catch (t) {
          let e = t instanceof r.APIError ? t.getAnyErrorMessage() : void 0;
          n.default.show({
            title: i.default.Messages.ERROR_GENERIC_TITLE,
            body: null != e ? e : i.default.Messages.GENERIC_ERROR_BODY
          })
        } finally {
          o(!1)
        }
      }
    }, [e, t])
  }
}