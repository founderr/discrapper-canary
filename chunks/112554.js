t.d(n, {
    K: function () {
        return l;
    },
    b: function () {
        return r;
    }
});
var i = t(399606),
    a = t(375954),
    s = t(163268);
let l = (e, n, t) => {
        var l, r;
        let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
        if (null == o) return [];
        let u =
            void 0 !== t
                ? (e) => e.url === t
                : (e) =>
                      (0, s.KP)(
                          {
                              type: s.lJ.Attachment,
                              media: e
                          },
                          (0, s.HH)(o)
                      );
        return null !== (r = null == o ? void 0 : null === (l = o.attachments) || void 0 === l ? void 0 : l.filter(u)) && void 0 !== r ? r : [];
    },
    r = (e, n, t) => {
        var l, r;
        let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
        if (null == o) return [];
        let u =
            void 0 !== t
                ? (e) => e.id === t
                : (e) =>
                      (0, s.KP)(
                          {
                              type: s.lJ.Embed,
                              media: e
                          },
                          (0, s.HH)(o)
                      );
        return null !== (r = null == o ? void 0 : null === (l = o.embeds) || void 0 === l ? void 0 : l.filter(u)) && void 0 !== r ? r : [];
    };
