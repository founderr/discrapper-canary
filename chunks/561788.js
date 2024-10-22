n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(471445),
    s = n(430824),
    o = n(645627);
function c(e) {
    let { channel: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getGuild(t.guild_id)),
        c = (0, r.KS)(t, n);
    return null == c
        ? null
        : (0, i.jsxs)('div', {
              className: o.popoutHeader,
              children: [
                  (0, i.jsx)(c, { className: o.channelIcon }),
                  (0, i.jsx)(a.Text, {
                      variant: 'text-md/semibold',
                      color: 'interactive-normal',
                      className: o.channelName,
                      children: t.name
                  })
              ]
          });
}
