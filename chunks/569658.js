"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var i = s("735250");
s("470079");
var a = s("392711"),
  n = s.n(a),
  l = s("442837"),
  r = s("481060"),
  o = s("740504"),
  d = s("933557"),
  u = s("471445"),
  c = s("131704"),
  h = s("592125"),
  S = s("324067"),
  N = s("699516"),
  g = s("594174"),
  f = s("981631"),
  m = s("689938"),
  E = s("723999");
let T = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, c.isGuildSelectableChannelType)(t) || t === f.ChannelTypes.GUILD_CATEGORY
};

function _(e) {
  var t;
  let {
    guildId: s,
    onSelected: a
  } = e;
  let {
    channels: c,
    categories: _
  } = (t = s, (0, l.useStateFromStoresObject)([S.default], () => {
    let e = S.default.getCategories(t);
    return {
      channels: (0, o.default)(e._categories, e, T),
      categories: e
    }
  })), I = n()(c).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== f.ChannelTypes.GUILD_CATEGORY || null != _[t.id] && _[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, d.computeChannelName)(t, g.default, N.default)
    }
  }).value();
  return (0, i.jsxs)(r.FormItem, {
    children: [(0, i.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      children: m.default.Messages.ADD_CHANNEL_TO_OVERRIDE
    }), (0, i.jsx)("div", {
      className: E.input,
      children: (0, i.jsx)(r.SearchableSelect, {
        value: f.EMPTY_STRING_SNOWFLAKE_ID,
        onChange: a,
        options: I,
        renderOptionLabel: e => {
          let t = h.default.getChannel(e.value);
          if (null == t) return e.label;
          let s = h.default.getChannel(t.parent_id),
            a = null != s ? s.name : null;
          return (0, i.jsx)(r.IconSelectOption, {
            icon: (0, u.getChannelIconComponent)(t),
            title: e.label,
            subtitle: a
          })
        },
        placeholder: m.default.Messages.SELECT_CHANNEL_OR_CATEGORY
      })
    })]
  })
}