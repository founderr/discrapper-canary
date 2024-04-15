"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var s = n("470079"),
  a = n("668781"),
  r = n("881052"),
  i = n("824389"),
  l = n("179838"),
  u = n("689938");

function o(e, t) {
  let [n, o] = s.useState(!1);
  return {
    isLoading: n,
    downloadAttachment: s.useCallback(async n => {
      if (null != e && null != t) {
        o(!0);
        try {
          let {
            url: s
          } = await i.requestDownloadUrl({
            guildId: e,
            productId: t,
            attachmentId: n
          });
          await l.download(s)
        } catch (t) {
          let e = t instanceof r.APIError ? t.getAnyErrorMessage() : void 0;
          a.default.show({
            title: u.default.Messages.ERROR_GENERIC_TITLE,
            body: null != e ? e : u.default.Messages.GENERIC_ERROR_BODY
          })
        } finally {
          o(!1)
        }
      }
    }, [e, t])
  }
}