t.d(n, {
    K: function () {
        return a;
    },
    b: function () {
        return o;
    }
});
var i = t(399606),
    l = t(375954),
    r = t(163268);
let a = (e, n, t) => {
        var a, o;
        let s = (0, i.e7)([l.Z], () => l.Z.getMessage(e, n));
        if (null == s) return [];
        let u =
            void 0 !== t
                ? (e) => e.url === t
                : (e) =>
                      (0, r.KP)(
                          {
                              type: r.lJ.Attachment,
                              media: e
                          },
                          (0, r.HH)(s)
                      );
        return null !== (o = null == s ? void 0 : null === (a = s.attachments) || void 0 === a ? void 0 : a.filter(u)) && void 0 !== o ? o : [];
    },
    o = (e, n, t) => {
        var a, o;
        let s = (0, i.e7)([l.Z], () => l.Z.getMessage(e, n));
        if (null == s) return [];
        let u =
            void 0 !== t
                ? (e) => e.id === t
                : (e) =>
                      (0, r.KP)(
                          {
                              type: r.lJ.Embed,
                              media: e
                          },
                          (0, r.HH)(s)
                      );
        return null !== (o = null == s ? void 0 : null === (a = s.embeds) || void 0 === a ? void 0 : a.filter(u)) && void 0 !== o ? o : [];
    };
