n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(399606),
    s = n(481060),
    a = n(346486),
    o = n(69882),
    c = n(815790),
    u = n(893966),
    d = n(776767),
    h = n(388032),
    m = n(194898);
function p(e) {
    let { member: t } = e,
        n = t.userId,
        p = t.guildId,
        f = (0, r.e7)([u.Z], () => u.Z.getEnhancedMember(p, n), [n, p]),
        g = (null != f ? f : t).unusualDMActivityUntil,
        C = l.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, c.fv)(t, c.jq.JOINED_AT);
        }, []),
        x = l.useMemo(() => (null == t ? null : C(g)), [t, C, g]),
        v = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        _ = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
    return null != g || v
        ? (0, i.jsx)(s.FormItem, {
              title: h.intl.string(h.t['7V375+']),
              titleClassName: m.infoTitle,
              children: (0, i.jsxs)(d.WM, {
                  children: [
                      null != g &&
                          (0, i.jsx)(d._2, {
                              icon: (0, i.jsx)(s.ChatWarningIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: d.Mn,
                                  height: d.Mn
                              }),
                              name: (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: h.intl.string(h.t.ZRnONz)
                              }),
                              description: (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: x
                              })
                          }),
                      v &&
                          null != _ &&
                          (0, i.jsx)(d._2, {
                              icon: (0, i.jsx)(s.ClockWarningIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: d.Mn,
                                  height: d.Mn
                              }),
                              name: (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: h.intl.string(h.t['TJ8/tL'])
                              }),
                              description: (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: (0, i.jsx)(a.Z, {
                                      deadline: _,
                                      showUnits: !0,
                                      stopAtOneSec: !0
                                  })
                              })
                          })
                  ]
              })
          })
        : null;
}
