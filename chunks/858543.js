n.d(t, {
    DM: function () {
        return g;
    },
    ZP: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    o = n.n(s),
    a = n(692547),
    l = n(481060),
    r = n(109434),
    c = n(456269),
    d = n(479099),
    u = n(176505),
    h = n(689938),
    m = n(646230),
    p = n(198864);
function g(e) {
    let { channel: t, isNew: n } = e,
        i = (0, c.eV)(t),
        s = i.slice(void 0, 3),
        o = i.slice(3),
        a = i.length > 3 ? i.length - 3 : 0,
        l = t.hasFlag(u.zZ.PINNED),
        r = s.length > 0 || l || n;
    return {
        shownTags: s,
        remainingTags: o,
        moreTagsCount: a,
        isPinned: l,
        shouldRenderTagsRow: r,
        forumPostContainsTags: i.length > 0
    };
}
function f(e) {
    let { channel: t, isNew: n, tagsClassName: s, className: c } = e,
        {
            shownTags: u,
            remainingTags: f,
            moreTagsCount: _,
            isPinned: T,
            shouldRenderTagsRow: v
        } = g({
            channel: t,
            isNew: n
        }),
        { tagFilter: E } = (0, r.H)(t.id);
    return v
        ? (0, i.jsxs)('div', {
              className: o()(p.tags, c),
              children: [
                  n
                      ? (0, i.jsx)(l.TextBadge, {
                            className: o()(m.newBadge, m.inTagsRow),
                            color: a.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.Z.Messages.NEW
                        })
                      : null,
                  T &&
                      (0, i.jsx)('div', {
                          className: p.pinIcon,
                          children: (0, i.jsx)(l.Tooltip, {
                              text: h.Z.Messages.PINNED_POST,
                              children: (e) =>
                                  (0, i.jsx)(l.PinIcon, {
                                      size: 'custom',
                                      ...e,
                                      width: 16,
                                      height: 16,
                                      color: 'white'
                                  })
                          })
                      }),
                  u.map((e) =>
                      (0, i.jsx)(
                          d.Z,
                          {
                              tag: e,
                              size: d.Z.Sizes.SMALL,
                              className: o()(s, { [p.tagFiltered]: E.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  _ > 0
                      ? (0, i.jsx)(d.f, {
                            tags: f,
                            count: _,
                            size: d.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
