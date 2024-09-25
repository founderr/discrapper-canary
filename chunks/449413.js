var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(454585),
    s = n(273744),
    l = n(754048);
let u = (e) => {
    let {
            node: { info: t }
        } = e,
        n = i.useRef(
            o.Z.reactParserFor({
                ...o.Z.defaultRules,
                link: s.s
            })
        );
    return null == t
        ? null
        : (0, r.jsx)(a.HelpMessage, {
              className: l.infoBox,
              messageType: a.HelpMessageTypes.INFO,
              children: n.current(t)
          });
};
t.Z = u;
