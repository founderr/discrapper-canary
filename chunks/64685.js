t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var r = t(481060),
  i = t(847033),
  l = t(544978),
  o = t(689938),
  a = t(149429);

function c() {
  let {
    selectedTab: e,
    isPhantomPreview: s,
    handlePreviewDismiss: t
  } = (0, i.m)();
  return s ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: a.previewNotice,
      children: [(0, n.jsx)(r.EyeSlashIcon, {
        size: "xs",
        color: "currentColor"
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: a.previewNoticeText,
        children: e === l.y.GUILD_PRODUCTS_PREVIEW ? o.Z.Messages.GUILD_SHOP_TAB_PREVIEW_NOTICE_LABEL : o.Z.Messages.GUILD_SHOP_PAGE_PREVIEW_NOTICE_LABEL
      })]
    }), (0, n.jsx)(r.Button, {
      size: r.Button.Sizes.MIN,
      color: r.Button.Colors.PRIMARY,
      className: a.removePreviewButton,
      onClick: t,
      children: e === l.y.GUILD_PRODUCTS_PREVIEW ? o.Z.Messages.GUILD_SHOP_REMOVE_PREVIEW_TAB_BUTTON : o.Z.Messages.GUILD_SHOP_REMOVE_PREVIEW_PAGE_BUTTON
    })]
  }) : null
}