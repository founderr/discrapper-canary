t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var a = t(442837),
    r = t(481060),
    o = t(239091),
    s = t(596454),
    u = t(339085),
    l = t(883429),
    d = t(456269),
    c = t(665906),
    f = t(592125),
    Z = t(710352),
    v = t(689938),
    h = t(37461);
function E(e) {
    let { tag: n } = e,
        { name: t, emojiId: r, emojiName: o } = n,
        l = (0, a.e7)([u.ZP], () => (null != r ? u.ZP.getUsableCustomEmojiById(r) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o || null != r
                ? (0, i.jsx)(s.Z, {
                      className: h.emoji,
                      emojiId: r,
                      emojiName: o,
                      animated: !!(null == l ? void 0 : l.animated)
                  })
                : null,
            t
        ]
    });
}
function _(e) {
    let n = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
        t = (0, c.C7)(n),
        s = (0, a.e7)([f.Z], () => f.Z.getChannel(null == n ? void 0 : n.parent_id), [n]),
        u = (0, d.Vm)(s),
        h = (0, d.eV)(n),
        _ = h.length >= Z.Cn,
        C = (0, c.$R)(n);
    if (null == n) return (0, o.Zy)(), null;
    if (!t || __OVERLAY__ || !n.isForumPost() || (null == u ? void 0 : u.length) === 0 || !C) return null;
    let I = (e) => {
            let t = new Set(h);
            if (t.has(e)) t.delete(e);
            else {
                if (_) return;
                t.add(e);
            }
            let i = Array.from(t).map((e) => e.id);
            l.Z.updateForumPostTags(n.id, i);
        },
        T =
            null == u
                ? void 0
                : u.map((e) => {
                      let n = h.includes(e);
                      return (0, i.jsx)(
                          r.MenuCheckboxItem,
                          {
                              id: e.id,
                              label: (0, i.jsx)(E, { tag: e }),
                              disabled: _ && !n,
                              action: () => I(e),
                              checked: n
                          },
                          e.id
                      );
                  });
    return (0, i.jsx)(r.MenuItem, {
        id: 'edit-tags',
        label: v.Z.Messages.FORUM_TAG_POST_EDIT,
        children: T
    });
}
