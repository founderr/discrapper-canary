t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(163268),
    a = t(388032);
function o(e, n) {
    return null != n &&
        (0, r.KP)(
            {
                type: r.lJ.GenericMedia,
                media: n
            },
            (0, r.HH)(e)
        )
        ? (0, i.jsx)(
              l.MenuItem,
              {
                  id: 'report-image-false-positive',
                  label: a.intl.string(a.t.ZH7P2t),
                  action: () => {
                      (0, l.openModalLazy)(async () => {
                          let { default: l } = await t(788679);
                          return (t) =>
                              (0, i.jsx)(l, {
                                  channelId: e.channel_id,
                                  messageId: e.id,
                                  mediaItemUrl: n.url,
                                  ...t
                              });
                      });
                  },
                  icon: l.ImageWarningIcon
              },
              'report-image-false-positive'
          )
        : null;
}
