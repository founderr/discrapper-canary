t.d(n, {
    Z: function () {
        return s;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(163268),
    r = t(689938);
function s(e, n) {
    return null != n &&
        (0, l.KP)(
            {
                type: l.lJ.GenericMedia,
                media: n
            },
            (0, l.HH)(e)
        )
        ? (0, a.jsx)(
              i.MenuItem,
              {
                  id: 'report-image-false-positive',
                  label: r.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                  action: () => {
                      (0, i.openModalLazy)(async () => {
                          let { default: i } = await t(788679);
                          return (t) =>
                              (0, a.jsx)(i, {
                                  channelId: e.channel_id,
                                  messageId: e.id,
                                  mediaItemUrl: n.url,
                                  ...t
                              });
                      });
                  },
                  icon: i.ImageWarningIcon
              },
              'report-image-false-positive'
          )
        : null;
}
