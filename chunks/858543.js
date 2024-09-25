n.d(t, {
    DM: function () {
        return m;
    },
    ZP: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(109434),
    u = n(456269),
    c = n(479099),
    d = n(176505),
    _ = n(689938),
    E = n(646230),
    f = n(198864);
let h = 16,
    p = 3;
function m(e) {
    let { channel: t, isNew: n } = e,
        r = (0, u.eV)(t),
        i = r.slice(void 0, p),
        a = r.slice(p),
        o = r.length > p ? r.length - p : 0,
        s = t.hasFlag(d.zZ.PINNED),
        l = i.length > 0 || s || n;
    return {
        shownTags: i,
        remainingTags: a,
        moreTagsCount: o,
        isPinned: s,
        shouldRenderTagsRow: l,
        forumPostContainsTags: r.length > 0
    };
}
function I(e) {
    let { channel: t, isNew: n, tagsClassName: i, className: u } = e,
        {
            shownTags: d,
            remainingTags: p,
            moreTagsCount: I,
            isPinned: T,
            shouldRenderTagsRow: g
        } = m({
            channel: t,
            isNew: n
        }),
        { tagFilter: S } = (0, l.H)(t.id);
    return g
        ? (0, r.jsxs)('div', {
              className: a()(f.tags, u),
              children: [
                  n
                      ? (0, r.jsx)(s.TextBadge, {
                            className: a()(E.newBadge, E.inTagsRow),
                            color: o.Z.unsafe_rawColors.BRAND_260.css,
                            text: _.Z.Messages.NEW
                        })
                      : null,
                  T &&
                      (0, r.jsx)('div', {
                          className: f.pinIcon,
                          children: (0, r.jsx)(s.Tooltip, {
                              text: _.Z.Messages.PINNED_POST,
                              children: (e) =>
                                  (0, r.jsx)(s.PinIcon, {
                                      size: 'custom',
                                      ...e,
                                      width: h,
                                      height: h,
                                      color: 'white'
                                  })
                          })
                      }),
                  d.map((e) =>
                      (0, r.jsx)(
                          c.Z,
                          {
                              tag: e,
                              size: c.Z.Sizes.SMALL,
                              className: a()(i, { [f.tagFiltered]: S.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  I > 0
                      ? (0, r.jsx)(c.f, {
                            tags: p,
                            count: I,
                            size: c.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
