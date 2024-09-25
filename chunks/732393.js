t.d(n, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var a = t(442837),
    r = t(481060),
    l = t(239091),
    u = t(596454),
    s = t(339085),
    o = t(883429),
    d = t(456269),
    c = t(665906),
    Z = t(592125),
    f = t(710352),
    h = t(689938),
    M = t(37461);
function _(e) {
    let { tag: n } = e,
        { name: t, emojiId: r, emojiName: l } = n,
        o = (0, a.e7)([s.ZP], () => (null != r ? s.ZP.getUsableCustomEmojiById(r) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Z, {
                className: M.emoji,
                emojiId: r,
                emojiName: l,
                animated: !!(null == o ? void 0 : o.animated)
            }),
            t
        ]
    });
}
function v(e) {
    let n = (0, a.e7)([Z.Z], () => Z.Z.getChannel(e), [e]),
        t = (0, c.C7)(n),
        u = (0, a.e7)([Z.Z], () => Z.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
        s = (0, d.Vm)(u),
        M = (0, d.eV)(n),
        v = M.length >= f.Cn,
        I = (0, c.$R)(n);
    if (null == n) return (0, l.Zy)(), null;
    if (!t || __OVERLAY__ || !n.isForumPost() || (null == s ? void 0 : s.length) === 0 || !I) return null;
    let m = (e) => {
            let t = new Set(M);
            if (t.has(e)) t.delete(e);
            else {
                if (v) return;
                t.add(e);
            }
            let i = Array.from(t).map((e) => e.id);
            o.Z.updateForumPostTags(n.id, i);
        },
        T =
            null == s
                ? void 0
                : s.map((e) => {
                      let n = M.includes(e);
                      return (0, i.jsx)(
                          r.MenuCheckboxItem,
                          {
                              id: e.id,
                              label: (0, i.jsx)(_, { tag: e }),
                              disabled: v && !n,
                              action: () => m(e),
                              checked: n
                          },
                          e.id
                      );
                  });
    return (0, i.jsx)(r.MenuItem, {
        id: 'edit-tags',
        label: h.Z.Messages.FORUM_TAG_POST_EDIT,
        children: T
    });
}
