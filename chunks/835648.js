"use strict";
n.d(t, {
  Z: function() {
    return N
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(481060),
  u = n(880949),
  _ = n(806966),
  c = n(254494),
  d = n(593618),
  E = n(697426),
  I = n(689938),
  T = n(363563);
let h = [8, 8, 8, 8];

function S(e) {
  let {
    icon: t,
    isSelected: n,
    onClick: r,
    listItemProps: s,
    ...a
  } = e;
  return (0, i.jsx)(l.Clickable, {
    ...s,
    ...a,
    onClick: r,
    className: o()(T.categoryIcon, {
      [T.selected]: n
    }),
    children: (0, i.jsx)(t, {
      className: T.categoryIconIcon,
      color: "currentColor"
    })
  })
}

function f(e) {
  let {
    category: t,
    categoryIndex: n,
    onClick: r,
    isSelected: s
  } = e, o = (0, a.JA)("soundboard_guild_".concat(n));
  return (0, i.jsx)(l.Tooltip, {
    text: function(e) {
      switch (e.categoryInfo.type) {
        case E.bg.FAVORITES:
          return I.Z.Messages.FAVORITES;
        case E.bg.RECENTLY_HEARD:
          return I.Z.Messages.RECENTLY_HEARD;
        case E.bg.FREQUENTLY_USED:
          return I.Z.Messages.FREQUENTLY_USED;
        case E.bg.GUILD:
          return (0, i.jsx)(d.K, {
            guild: e.categoryInfo.guild,
            includeActivity: !1
          });
        case E.bg.DEFAULTS:
          return I.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
      }
    }(t),
    "aria-label": function(e) {
      switch (e.categoryInfo.type) {
        case E.bg.FAVORITES:
          return I.Z.Messages.FAVORITES;
        case E.bg.RECENTLY_HEARD:
          return I.Z.Messages.RECENTLY_HEARD;
        case E.bg.FREQUENTLY_USED:
          return I.Z.Messages.FREQUENTLY_USED;
        case E.bg.GUILD:
          return e.categoryInfo.guild.name;
        case E.bg.DEFAULTS:
          return I.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
      }
    }(t),
    position: "right",
    children: e => (function(e, t, n, r, s) {
      switch (e.categoryInfo.type) {
        case E.bg.FAVORITES:
          return (0, i.jsx)(S, {
            ...r,
            icon: l.StarIcon,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        case E.bg.RECENTLY_HEARD:
          return (0, i.jsx)(S, {
            ...r,
            icon: l.ClockIcon,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        case E.bg.FREQUENTLY_USED:
          return (0, i.jsx)(S, {
            ...r,
            icon: l.AnalyticsIcon,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        case E.bg.GUILD:
          return (0, i.jsx)(l.Clickable, {
            ...s,
            ...r,
            className: T.category,
            onClick: t,
            children: (0, i.jsx)(u.Z, {
              guild: e.categoryInfo.guild,
              isSelected: n
            })
          }, e.key);
        case E.bg.DEFAULTS:
          return (0, i.jsx)(S, {
            ...r,
            icon: l.ClydeIcon,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        default:
          return null
      }
    })(t, r, s, e, o)
  })
}

function N(e) {
  let {
    soundboardListRef: t,
    categories: n,
    listPadding: s = h
  } = e, o = r.useRef(null), a = r.useCallback((e, t, n, r) => (0, i.jsx)(f, {
    category: e,
    categoryIndex: t,
    onClick: n,
    isSelected: r
  }), []);
  return (0, i.jsx)(c.Z, {
    className: T.categoryList,
    categoryListRef: o,
    expressionsListRef: t,
    store: _.Wq,
    categories: n,
    listPadding: s,
    renderCategoryListItem: a,
    rowCount: n.length,
    categoryHeight: 40
  })
}