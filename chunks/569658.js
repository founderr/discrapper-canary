"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var i = s("735250");
s("470079");
var n = s("392711"),
  a = s.n(n),
  l = s("442837"),
  r = s("481060"),
  o = s("740504"),
  d = s("933557"),
  u = s("471445"),
  c = s("131704"),
  h = s("592125"),
  S = s("324067"),
  N = s("699516"),
  f = s("594174"),
  g = s("353872"),
  m = s("981631"),
  E = s("689938"),
  _ = s("19560");
let x = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, c.isGuildSelectableChannelType)(t) || t === m.ChannelTypes.GUILD_CATEGORY
};

function T(e) {
  var t;
  let {
    guildId: s,
    onSelected: n
  } = e;
  let {
    channels: c,
    categories: T
  } = (t = s, (0, l.useStateFromStoresObject)([S.default], () => {
    let e = S.default.getCategories(t);
    return {
      channels: (0, o.default)(e._categories, e, x),
      categories: e
    }
  })), p = a()(c).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== m.ChannelTypes.GUILD_CATEGORY || null != T[t.id] && T[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, d.computeChannelName)(t, f.default, N.default)
    }
  }).value();
  return (0, i.jsxs)(r.FormItem, {
    children: [(0, i.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      children: E.default.Messages.ADD_CHANNEL_TO_OVERRIDE
    }), (0, i.jsx)("div", {
      className: _.input,
      children: (0, i.jsx)(r.SearchableSelect, {
        value: m.EMPTY_STRING_SNOWFLAKE_ID,
        onChange: n,
        options: p,
        renderOptionLabel: e => {
          let t = h.default.getChannel(e.value);
          if (null == t) return e.label;
          let s = h.default.getChannel(t.parent_id),
            n = null != s ? s.name : null;
          return (0, i.jsx)(g.default, {
            icon: (0, u.getChannelIconComponent)(t),
            title: e.label,
            subtitle: n
          })
        },
        placeholder: E.default.Messages.SELECT_CHANNEL_OR_CATEGORY
      })
    })]
  })
}