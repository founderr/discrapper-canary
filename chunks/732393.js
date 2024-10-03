n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(239091),
    r = n(596454),
    o = n(339085),
    c = n(883429),
    u = n(456269),
    d = n(665906),
    h = n(592125),
    m = n(710352),
    p = n(689938),
    _ = n(37461);
function f(e) {
    let { tag: t } = e,
        { name: n, emojiId: a, emojiName: l } = t,
        c = (0, s.e7)([o.ZP], () => (null != a ? o.ZP.getUsableCustomEmojiById(a) : null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Z, {
                className: _.emoji,
                emojiId: a,
                emojiName: l,
                animated: !!(null == c ? void 0 : c.animated)
            }),
            n
        ]
    });
}
function E(e) {
    let t = (0, s.e7)([h.Z], () => h.Z.getChannel(e), [e]),
        n = (0, d.C7)(t),
        r = (0, s.e7)([h.Z], () => h.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
        o = (0, u.Vm)(r),
        _ = (0, u.eV)(t),
        E = _.length >= m.Cn,
        g = (0, d.$R)(t);
    if (null == t) return (0, l.Zy)(), null;
    if (!n || __OVERLAY__ || !t.isForumPost() || (null == o ? void 0 : o.length) === 0 || !g) return null;
    let C = (e) => {
            let n = new Set(_);
            if (n.has(e)) n.delete(e);
            else {
                if (E) return;
                n.add(e);
            }
            let i = Array.from(n).map((e) => e.id);
            c.Z.updateForumPostTags(t.id, i);
        },
        I =
            null == o
                ? void 0
                : o.map((e) => {
                      let t = _.includes(e);
                      return (0, i.jsx)(
                          a.MenuCheckboxItem,
                          {
                              id: e.id,
                              label: (0, i.jsx)(f, { tag: e }),
                              disabled: E && !t,
                              action: () => C(e),
                              checked: t
                          },
                          e.id
                      );
                  });
    return (0, i.jsx)(a.MenuItem, {
        id: 'edit-tags',
        label: p.Z.Messages.FORUM_TAG_POST_EDIT,
        children: I
    });
}
