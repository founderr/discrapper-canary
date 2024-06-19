n.d(t, {
  Z: function() {
    return c
  }
});
var a = n(735250);
n(470079);
var l = n(120356),
  s = n.n(l),
  r = n(481060),
  i = n(971628),
  o = n(689938),
  d = n(171785);

function c(e) {
  let {
    selectedTags: t,
    title: n,
    hintText: l,
    placeholderText: c,
    expanded: u,
    setExpanded: m,
    users: h,
    guilds: S,
    query: T,
    maxCount: x,
    onQueryChange: g,
    onClickRow: v,
    onRemoveTag: f
  } = e;
  return (0, a.jsx)(r.Collapsible, {
    className: d.collapsible,
    isExpanded: u,
    collapsibleContent: (0, a.jsx)("div", {
      className: s()(d.collapsibleContent, {
        [d.visible]: u
      }),
      children: (0, a.jsx)(i.Z, {
        listClassName: d.list,
        pendingAdditions: t,
        query: T,
        onQueryChange: g,
        onClickRow: v,
        onRemovePendingAddition: f,
        users: h,
        guilds: S,
        renderEmptyText: e => o.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
          query: e
        }),
        hintText: l,
        placeholderText: c,
        disabledText: o.Z.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
        maxCount: x,
        hideRowLabel: !0
      })
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsxs)(r.Clickable, {
        className: d.content,
        onClick: e => {
          m(!u), t(e)
        },
        children: [(0, a.jsx)(r.Heading, {
          variant: "text-sm/normal",
          children: n
        }), u ? (0, a.jsx)(r.ChevronSmallUpIcon, {
          size: "md",
          color: "currentColor"
        }) : (0, a.jsx)(r.ChevronSmallDownIcon, {
          size: "md",
          color: "currentColor"
        })]
      })
    }
  })
}