n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(25209),
    s = n(794295),
    o = n(865427),
    l = n(853425),
    u = n(49012),
    c = n(773352);
function d(e) {
    return {
        react(t, n, d) {
            if (e.enableBuildOverrides && (0, o._G)(t.target)) return (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(l.Z, { url: t.target }, t.target) }, d.key);
            let f = n(t.content, d),
                _ = 'string' == typeof t.title && 0 !== t.title.length ? t.title : (0, a.Rp)(t.content),
                p = (null == e ? void 0 : e.mustConfirmExternalLink)
                    ? (e) => (
                          null == e || e.stopPropagation(),
                          null == e || e.preventDefault(),
                          (0, u.q)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: d.messageId,
                              channelId: d.channelId
                          }),
                          null
                      )
                    : void 0;
            if (d.previewLinkTarget && !(0, c.r)(t)) {
                let e = '\n\n('.concat(t.target, ')');
                _.length + e.length > 1024 && ((e = '...' + e), (_ = (_ = _.substr(0, 1024 - e.length)).trimEnd())), (_ += e);
            }
            return d.noStyleAndInteraction
                ? (0, r.jsx)(
                      'span',
                      {
                          title: _,
                          children: f
                      },
                      d.key
                  )
                : (0, r.jsx)(
                      s.Z,
                      {
                          title: _,
                          href: t.target,
                          trusted: () => (0, c.r)(t),
                          onClick: p,
                          messageId: d.messageId,
                          channelId: d.channelId,
                          children: f
                      },
                      d.key
                  );
        }
    };
}
