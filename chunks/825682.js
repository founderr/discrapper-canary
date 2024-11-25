var i = n(200651);
n(192379);
var r = n(788307),
    l = n(51144),
    a = n(388032),
    s = n(126875);
t.Z = function (e) {
    let { hovered: t, activities: n, applicationStream: o, status: c, user: d, userIgnored: u } = e;
    return u
        ? (0, i.jsx)('div', {
              className: s.text,
              children: a.intl.string(a.t.tFY5ZW)
          })
        : n.length > 0
          ? (0, i.jsx)(r.ZP, {
                className: s.activity,
                textClassName: s.text,
                emojiClassName: s.customStatusEmoji,
                activities: n,
                applicationStream: o,
                animate: t,
                user: d
            })
          : (0, i.jsx)('div', {
                className: s.text,
                children: (0, l.u5)(c)
            });
};
