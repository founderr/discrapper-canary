n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(603592),
  r = n(689938);
let a = "DOWNLOAD_APPS";

function o() {
  let e = (0, i.useModalsStore)(e => (0, i.hasModalOpenSelector)(e, a));
  return (0, l.jsx)(s.Z, {
    id: "app-download-button",
    onClick: () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 431583));
        return t => (0, l.jsx)(e, {
          source: "Guilds",
          ...t
        })
      }, {
        modalKey: a
      })
    },
    selected: e,
    tooltip: r.Z.Messages.DOWNLOAD_APPS,
    icon: i.DownloadIcon
  })
}