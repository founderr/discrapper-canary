t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    s = t(163268),
    l = t(689938);
function r(e, n) {
    return null != n &&
        (0, s.KP)(
            {
                type: s.lJ.GenericMedia,
                media: n
            },
            (0, s.HH)(e)
        )
        ? (0, i.jsx)(
              a.MenuItem,
              {
                  id: 'report-image-false-positive',
                  label: l.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                  action: () => {
                      (0, a.openModalLazy)(async () => {
                          let { default: a } = await t(788679);
                          return (t) =>
                              (0, i.jsx)(a, {
                                  channelId: e.channel_id,
                                  messageId: e.id,
                                  mediaItemUrl: n.url,
                                  ...t
                              });
                      });
                  },
                  icon: a.ImageWarningIcon
              },
              'report-image-false-positive'
          )
        : null;
}
